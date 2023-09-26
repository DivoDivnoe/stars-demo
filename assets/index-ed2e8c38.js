(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver(s => {
    for (const a of s)
      if (a.type === 'childList')
        for (const u of a.addedNodes) u.tagName === 'LINK' && u.rel === 'modulepreload' && n(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
    const a = {};
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = t(s);
    fetch(s.href, a);
  }
})();
var Kc =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function $c(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
var Gl = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function (i) {
  (function (e, t) {
    i.exports = e.document
      ? t(e, !0)
      : function (n) {
          if (!n.document) throw new Error('jQuery requires a window with a document');
          return t(n);
        };
  })(typeof window < 'u' ? window : Kc, function (e, t) {
    var n = [],
      s = Object.getPrototypeOf,
      a = n.slice,
      u = n.flat
        ? function (r) {
            return n.flat.call(r);
          }
        : function (r) {
            return n.concat.apply([], r);
          },
      c = n.push,
      h = n.indexOf,
      p = {},
      g = p.toString,
      _ = p.hasOwnProperty,
      v = _.toString,
      y = v.call(Object),
      T = {},
      b = function (o) {
        return typeof o == 'function' && typeof o.nodeType != 'number' && typeof o.item != 'function';
      },
      S = function (o) {
        return o != null && o === o.window;
      },
      m = e.document,
      O = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function R(r, o, f) {
      f = f || m;
      var d,
        x,
        M = f.createElement('script');
      if (((M.text = r), o))
        for (d in O) (x = o[d] || (o.getAttribute && o.getAttribute(d))), x && M.setAttribute(d, x);
      f.head.appendChild(M).parentNode.removeChild(M);
    }
    function D(r) {
      return r == null ? r + '' : typeof r == 'object' || typeof r == 'function' ? p[g.call(r)] || 'object' : typeof r;
    }
    var F = '3.7.1',
      k = /HTML$/i,
      l = function (r, o) {
        return new l.fn.init(r, o);
      };
    (l.fn = l.prototype =
      {
        jquery: F,
        constructor: l,
        length: 0,
        toArray: function () {
          return a.call(this);
        },
        get: function (r) {
          return r == null ? a.call(this) : r < 0 ? this[r + this.length] : this[r];
        },
        pushStack: function (r) {
          var o = l.merge(this.constructor(), r);
          return (o.prevObject = this), o;
        },
        each: function (r) {
          return l.each(this, r);
        },
        map: function (r) {
          return this.pushStack(
            l.map(this, function (o, f) {
              return r.call(o, f, o);
            })
          );
        },
        slice: function () {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            l.grep(this, function (r, o) {
              return (o + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            l.grep(this, function (r, o) {
              return o % 2;
            })
          );
        },
        eq: function (r) {
          var o = this.length,
            f = +r + (r < 0 ? o : 0);
          return this.pushStack(f >= 0 && f < o ? [this[f]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: n.sort,
        splice: n.splice
      }),
      (l.extend = l.fn.extend =
        function () {
          var r,
            o,
            f,
            d,
            x,
            M,
            E = arguments[0] || {},
            N = 1,
            U = arguments.length,
            V = !1;
          for (
            typeof E == 'boolean' && ((V = E), (E = arguments[N] || {}), N++),
              typeof E != 'object' && !b(E) && (E = {}),
              N === U && ((E = this), N--);
            N < U;
            N++
          )
            if ((r = arguments[N]) != null)
              for (o in r)
                (d = r[o]),
                  !(o === '__proto__' || E === d) &&
                    (V && d && (l.isPlainObject(d) || (x = Array.isArray(d)))
                      ? ((f = E[o]),
                        x && !Array.isArray(f) ? (M = []) : !x && !l.isPlainObject(f) ? (M = {}) : (M = f),
                        (x = !1),
                        (E[o] = l.extend(V, M, d)))
                      : d !== void 0 && (E[o] = d));
          return E;
        }),
      l.extend({
        expando: 'jQuery' + (F + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (r) {
          throw new Error(r);
        },
        noop: function () {},
        isPlainObject: function (r) {
          var o, f;
          return !r || g.call(r) !== '[object Object]'
            ? !1
            : ((o = s(r)),
              o ? ((f = _.call(o, 'constructor') && o.constructor), typeof f == 'function' && v.call(f) === y) : !0);
        },
        isEmptyObject: function (r) {
          var o;
          for (o in r) return !1;
          return !0;
        },
        globalEval: function (r, o, f) {
          R(r, { nonce: o && o.nonce }, f);
        },
        each: function (r, o) {
          var f,
            d = 0;
          if (le(r)) for (f = r.length; d < f && o.call(r[d], d, r[d]) !== !1; d++);
          else for (d in r) if (o.call(r[d], d, r[d]) === !1) break;
          return r;
        },
        text: function (r) {
          var o,
            f = '',
            d = 0,
            x = r.nodeType;
          if (!x) for (; (o = r[d++]); ) f += l.text(o);
          return x === 1 || x === 11
            ? r.textContent
            : x === 9
            ? r.documentElement.textContent
            : x === 3 || x === 4
            ? r.nodeValue
            : f;
        },
        makeArray: function (r, o) {
          var f = o || [];
          return r != null && (le(Object(r)) ? l.merge(f, typeof r == 'string' ? [r] : r) : c.call(f, r)), f;
        },
        inArray: function (r, o, f) {
          return o == null ? -1 : h.call(o, r, f);
        },
        isXMLDoc: function (r) {
          var o = r && r.namespaceURI,
            f = r && (r.ownerDocument || r).documentElement;
          return !k.test(o || (f && f.nodeName) || 'HTML');
        },
        merge: function (r, o) {
          for (var f = +o.length, d = 0, x = r.length; d < f; d++) r[x++] = o[d];
          return (r.length = x), r;
        },
        grep: function (r, o, f) {
          for (var d, x = [], M = 0, E = r.length, N = !f; M < E; M++) (d = !o(r[M], M)), d !== N && x.push(r[M]);
          return x;
        },
        map: function (r, o, f) {
          var d,
            x,
            M = 0,
            E = [];
          if (le(r)) for (d = r.length; M < d; M++) (x = o(r[M], M, f)), x != null && E.push(x);
          else for (M in r) (x = o(r[M], M, f)), x != null && E.push(x);
          return u(E);
        },
        guid: 1,
        support: T
      }),
      typeof Symbol == 'function' && (l.fn[Symbol.iterator] = n[Symbol.iterator]),
      l.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (r, o) {
        p['[object ' + o + ']'] = o.toLowerCase();
      });
    function le(r) {
      var o = !!r && 'length' in r && r.length,
        f = D(r);
      return b(r) || S(r) ? !1 : f === 'array' || o === 0 || (typeof o == 'number' && o > 0 && o - 1 in r);
    }
    function w(r, o) {
      return r.nodeName && r.nodeName.toLowerCase() === o.toLowerCase();
    }
    var I = n.pop,
      pe = n.sort,
      ve = n.splice,
      W = '[\\x20\\t\\r\\n\\f]',
      ne = new RegExp('^' + W + '+|((?:^|[^\\\\])(?:\\\\.)*)' + W + '+$', 'g');
    l.contains = function (r, o) {
      var f = o && o.parentNode;
      return (
        r === f ||
        !!(
          f &&
          f.nodeType === 1 &&
          (r.contains ? r.contains(f) : r.compareDocumentPosition && r.compareDocumentPosition(f) & 16)
        )
      );
    };
    var ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function ge(r, o) {
      return o ? (r === '\0' ? '�' : r.slice(0, -1) + '\\' + r.charCodeAt(r.length - 1).toString(16) + ' ') : '\\' + r;
    }
    l.escapeSelector = function (r) {
      return (r + '').replace(ie, ge);
    };
    var oe = m,
      he = c;
    (function () {
      var r,
        o,
        f,
        d,
        x,
        M = he,
        E,
        N,
        U,
        V,
        te,
        ue = l.expando,
        K = 0,
        Se = 0,
        Je = $r(),
        xt = $r(),
        lt = $r(),
        Yt = $r(),
        Ht = function (C, H) {
          return C === H && (x = !0), 0;
        },
        Dn =
          'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        Un = '(?:\\\\[\\da-fA-F]{1,6}' + W + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
        _t =
          '\\[' +
          W +
          '*(' +
          Un +
          ')(?:' +
          W +
          '*([*^$|!~]?=)' +
          W +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          Un +
          '))|)' +
          W +
          '*\\]',
        vi =
          ':(' +
          Un +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          _t +
          ')*)|.*)\\)|)',
        Mt = new RegExp(W + '+', 'g'),
        It = new RegExp('^' + W + '*,' + W + '*'),
        Ar = new RegExp('^' + W + '*([>+~]|' + W + ')' + W + '*'),
        Ws = new RegExp(W + '|>'),
        In = new RegExp(vi),
        wr = new RegExp('^' + Un + '$'),
        Nn = {
          ID: new RegExp('^#(' + Un + ')'),
          CLASS: new RegExp('^\\.(' + Un + ')'),
          TAG: new RegExp('^(' + Un + '|[*])'),
          ATTR: new RegExp('^' + _t),
          PSEUDO: new RegExp('^' + vi),
          CHILD: new RegExp(
            '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
              W +
              '*(even|odd|(([+-]|)(\\d*)n|)' +
              W +
              '*(?:([+-]|)' +
              W +
              '*(\\d+)|))' +
              W +
              '*\\)|)',
            'i'
          ),
          bool: new RegExp('^(?:' + Dn + ')$', 'i'),
          needsContext: new RegExp(
            '^' +
              W +
              '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
              W +
              '*((?:-\\d)?\\d*)' +
              W +
              '*\\)|)(?=[^-]|$)',
            'i'
          )
        },
        ni = /^(?:input|select|textarea|button)$/i,
        ii = /^h\d$/i,
        _n = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Xs = /[+~]/,
        Wn = new RegExp('\\\\[\\da-fA-F]{1,6}' + W + '?|\\\\([^\\r\\n\\f])', 'g'),
        Xn = function (C, H) {
          var j = '0x' + C.slice(1) - 65536;
          return (
            H || (j < 0 ? String.fromCharCode(j + 65536) : String.fromCharCode((j >> 10) | 55296, (j & 1023) | 56320))
          );
        },
        kc = function () {
          ri();
        },
        Vc = Jr(
          function (C) {
            return C.disabled === !0 && w(C, 'fieldset');
          },
          { dir: 'parentNode', next: 'legend' }
        );
      function Wc() {
        try {
          return E.activeElement;
        } catch {}
      }
      try {
        M.apply((n = a.call(oe.childNodes)), oe.childNodes), n[oe.childNodes.length].nodeType;
      } catch {
        M = {
          apply: function (H, j) {
            he.apply(H, a.call(j));
          },
          call: function (H) {
            he.apply(H, a.call(arguments, 1));
          }
        };
      }
      function Et(C, H, j, J) {
        var ce,
          Ae,
          Ue,
          Fe,
          Ie,
          pt,
          Ke,
          et = H && H.ownerDocument,
          mt = H ? H.nodeType : 9;
        if (((j = j || []), typeof C != 'string' || !C || (mt !== 1 && mt !== 9 && mt !== 11))) return j;
        if (!J && (ri(H), (H = H || E), U)) {
          if (mt !== 11 && (Ie = _n.exec(C)))
            if ((ce = Ie[1])) {
              if (mt === 9)
                if ((Ue = H.getElementById(ce))) {
                  if (Ue.id === ce) return M.call(j, Ue), j;
                } else return j;
              else if (et && (Ue = et.getElementById(ce)) && Et.contains(H, Ue) && Ue.id === ce)
                return M.call(j, Ue), j;
            } else {
              if (Ie[2]) return M.apply(j, H.getElementsByTagName(C)), j;
              if ((ce = Ie[3]) && H.getElementsByClassName) return M.apply(j, H.getElementsByClassName(ce)), j;
            }
          if (!Yt[C + ' '] && (!V || !V.test(C))) {
            if (((Ke = C), (et = H), mt === 1 && (Ws.test(C) || Ar.test(C)))) {
              for (
                et = (Xs.test(C) && qs(H.parentNode)) || H,
                  (et != H || !T.scope) &&
                    ((Fe = H.getAttribute('id')) ? (Fe = l.escapeSelector(Fe)) : H.setAttribute('id', (Fe = ue))),
                  pt = Rr(C),
                  Ae = pt.length;
                Ae--;

              )
                pt[Ae] = (Fe ? '#' + Fe : ':scope') + ' ' + Zr(pt[Ae]);
              Ke = pt.join(',');
            }
            try {
              return M.apply(j, et.querySelectorAll(Ke)), j;
            } catch {
              Yt(C, !0);
            } finally {
              Fe === ue && H.removeAttribute('id');
            }
          }
        }
        return lo(C.replace(ne, '$1'), H, j, J);
      }
      function $r() {
        var C = [];
        function H(j, J) {
          return C.push(j + ' ') > o.cacheLength && delete H[C.shift()], (H[j + ' '] = J);
        }
        return H;
      }
      function En(C) {
        return (C[ue] = !0), C;
      }
      function Hi(C) {
        var H = E.createElement('fieldset');
        try {
          return !!C(H);
        } catch {
          return !1;
        } finally {
          H.parentNode && H.parentNode.removeChild(H), (H = null);
        }
      }
      function Xc(C) {
        return function (H) {
          return w(H, 'input') && H.type === C;
        };
      }
      function qc(C) {
        return function (H) {
          return (w(H, 'input') || w(H, 'button')) && H.type === C;
        };
      }
      function ao(C) {
        return function (H) {
          return 'form' in H
            ? H.parentNode && H.disabled === !1
              ? 'label' in H
                ? 'label' in H.parentNode
                  ? H.parentNode.disabled === C
                  : H.disabled === C
                : H.isDisabled === C || (H.isDisabled !== !C && Vc(H) === C)
              : H.disabled === C
            : 'label' in H
            ? H.disabled === C
            : !1;
        };
      }
      function xi(C) {
        return En(function (H) {
          return (
            (H = +H),
            En(function (j, J) {
              for (var ce, Ae = C([], j.length, H), Ue = Ae.length; Ue--; )
                j[(ce = Ae[Ue])] && (j[ce] = !(J[ce] = j[ce]));
            })
          );
        });
      }
      function qs(C) {
        return C && typeof C.getElementsByTagName < 'u' && C;
      }
      function ri(C) {
        var H,
          j = C ? C.ownerDocument || C : oe;
        return (
          j == E ||
            j.nodeType !== 9 ||
            !j.documentElement ||
            ((E = j),
            (N = E.documentElement),
            (U = !l.isXMLDoc(E)),
            (te = N.matches || N.webkitMatchesSelector || N.msMatchesSelector),
            N.msMatchesSelector && oe != E && (H = E.defaultView) && H.top !== H && H.addEventListener('unload', kc),
            (T.getById = Hi(function (J) {
              return (N.appendChild(J).id = l.expando), !E.getElementsByName || !E.getElementsByName(l.expando).length;
            })),
            (T.disconnectedMatch = Hi(function (J) {
              return te.call(J, '*');
            })),
            (T.scope = Hi(function () {
              return E.querySelectorAll(':scope');
            })),
            (T.cssHas = Hi(function () {
              try {
                return E.querySelector(':has(*,:jqfake)'), !1;
              } catch {
                return !0;
              }
            })),
            T.getById
              ? ((o.filter.ID = function (J) {
                  var ce = J.replace(Wn, Xn);
                  return function (Ae) {
                    return Ae.getAttribute('id') === ce;
                  };
                }),
                (o.find.ID = function (J, ce) {
                  if (typeof ce.getElementById < 'u' && U) {
                    var Ae = ce.getElementById(J);
                    return Ae ? [Ae] : [];
                  }
                }))
              : ((o.filter.ID = function (J) {
                  var ce = J.replace(Wn, Xn);
                  return function (Ae) {
                    var Ue = typeof Ae.getAttributeNode < 'u' && Ae.getAttributeNode('id');
                    return Ue && Ue.value === ce;
                  };
                }),
                (o.find.ID = function (J, ce) {
                  if (typeof ce.getElementById < 'u' && U) {
                    var Ae,
                      Ue,
                      Fe,
                      Ie = ce.getElementById(J);
                    if (Ie) {
                      if (((Ae = Ie.getAttributeNode('id')), Ae && Ae.value === J)) return [Ie];
                      for (Fe = ce.getElementsByName(J), Ue = 0; (Ie = Fe[Ue++]); )
                        if (((Ae = Ie.getAttributeNode('id')), Ae && Ae.value === J)) return [Ie];
                    }
                    return [];
                  }
                })),
            (o.find.TAG = function (J, ce) {
              return typeof ce.getElementsByTagName < 'u' ? ce.getElementsByTagName(J) : ce.querySelectorAll(J);
            }),
            (o.find.CLASS = function (J, ce) {
              if (typeof ce.getElementsByClassName < 'u' && U) return ce.getElementsByClassName(J);
            }),
            (V = []),
            Hi(function (J) {
              var ce;
              (N.appendChild(J).innerHTML =
                "<a id='" +
                ue +
                "' href='' disabled='disabled'></a><select id='" +
                ue +
                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                J.querySelectorAll('[selected]').length || V.push('\\[' + W + '*(?:value|' + Dn + ')'),
                J.querySelectorAll('[id~=' + ue + '-]').length || V.push('~='),
                J.querySelectorAll('a#' + ue + '+*').length || V.push('.#.+[+~]'),
                J.querySelectorAll(':checked').length || V.push(':checked'),
                (ce = E.createElement('input')),
                ce.setAttribute('type', 'hidden'),
                J.appendChild(ce).setAttribute('name', 'D'),
                (N.appendChild(J).disabled = !0),
                J.querySelectorAll(':disabled').length !== 2 && V.push(':enabled', ':disabled'),
                (ce = E.createElement('input')),
                ce.setAttribute('name', ''),
                J.appendChild(ce),
                J.querySelectorAll("[name='']").length || V.push('\\[' + W + '*name' + W + '*=' + W + `*(?:''|"")`);
            }),
            T.cssHas || V.push(':has'),
            (V = V.length && new RegExp(V.join('|'))),
            (Ht = function (J, ce) {
              if (J === ce) return (x = !0), 0;
              var Ae = !J.compareDocumentPosition - !ce.compareDocumentPosition;
              return (
                Ae ||
                ((Ae = (J.ownerDocument || J) == (ce.ownerDocument || ce) ? J.compareDocumentPosition(ce) : 1),
                Ae & 1 || (!T.sortDetached && ce.compareDocumentPosition(J) === Ae)
                  ? J === E || (J.ownerDocument == oe && Et.contains(oe, J))
                    ? -1
                    : ce === E || (ce.ownerDocument == oe && Et.contains(oe, ce))
                    ? 1
                    : d
                    ? h.call(d, J) - h.call(d, ce)
                    : 0
                  : Ae & 4
                  ? -1
                  : 1)
              );
            })),
          E
        );
      }
      (Et.matches = function (C, H) {
        return Et(C, null, null, H);
      }),
        (Et.matchesSelector = function (C, H) {
          if ((ri(C), U && !Yt[H + ' '] && (!V || !V.test(H))))
            try {
              var j = te.call(C, H);
              if (j || T.disconnectedMatch || (C.document && C.document.nodeType !== 11)) return j;
            } catch {
              Yt(H, !0);
            }
          return Et(H, E, null, [C]).length > 0;
        }),
        (Et.contains = function (C, H) {
          return (C.ownerDocument || C) != E && ri(C), l.contains(C, H);
        }),
        (Et.attr = function (C, H) {
          (C.ownerDocument || C) != E && ri(C);
          var j = o.attrHandle[H.toLowerCase()],
            J = j && _.call(o.attrHandle, H.toLowerCase()) ? j(C, H, !U) : void 0;
          return J !== void 0 ? J : C.getAttribute(H);
        }),
        (Et.error = function (C) {
          throw new Error('Syntax error, unrecognized expression: ' + C);
        }),
        (l.uniqueSort = function (C) {
          var H,
            j = [],
            J = 0,
            ce = 0;
          if (((x = !T.sortStable), (d = !T.sortStable && a.call(C, 0)), pe.call(C, Ht), x)) {
            for (; (H = C[ce++]); ) H === C[ce] && (J = j.push(ce));
            for (; J--; ) ve.call(C, j[J], 1);
          }
          return (d = null), C;
        }),
        (l.fn.uniqueSort = function () {
          return this.pushStack(l.uniqueSort(a.apply(this)));
        }),
        (o = l.expr =
          {
            cacheLength: 50,
            createPseudo: En,
            match: Nn,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' }
            },
            preFilter: {
              ATTR: function (C) {
                return (
                  (C[1] = C[1].replace(Wn, Xn)),
                  (C[3] = (C[3] || C[4] || C[5] || '').replace(Wn, Xn)),
                  C[2] === '~=' && (C[3] = ' ' + C[3] + ' '),
                  C.slice(0, 4)
                );
              },
              CHILD: function (C) {
                return (
                  (C[1] = C[1].toLowerCase()),
                  C[1].slice(0, 3) === 'nth'
                    ? (C[3] || Et.error(C[0]),
                      (C[4] = +(C[4] ? C[5] + (C[6] || 1) : 2 * (C[3] === 'even' || C[3] === 'odd'))),
                      (C[5] = +(C[7] + C[8] || C[3] === 'odd')))
                    : C[3] && Et.error(C[0]),
                  C
                );
              },
              PSEUDO: function (C) {
                var H,
                  j = !C[6] && C[2];
                return Nn.CHILD.test(C[0])
                  ? null
                  : (C[3]
                      ? (C[2] = C[4] || C[5] || '')
                      : j &&
                        In.test(j) &&
                        (H = Rr(j, !0)) &&
                        (H = j.indexOf(')', j.length - H) - j.length) &&
                        ((C[0] = C[0].slice(0, H)), (C[2] = j.slice(0, H))),
                    C.slice(0, 3));
              }
            },
            filter: {
              TAG: function (C) {
                var H = C.replace(Wn, Xn).toLowerCase();
                return C === '*'
                  ? function () {
                      return !0;
                    }
                  : function (j) {
                      return w(j, H);
                    };
              },
              CLASS: function (C) {
                var H = Je[C + ' '];
                return (
                  H ||
                  ((H = new RegExp('(^|' + W + ')' + C + '(' + W + '|$)')) &&
                    Je(C, function (j) {
                      return H.test(
                        (typeof j.className == 'string' && j.className) ||
                          (typeof j.getAttribute < 'u' && j.getAttribute('class')) ||
                          ''
                      );
                    }))
                );
              },
              ATTR: function (C, H, j) {
                return function (J) {
                  var ce = Et.attr(J, C);
                  return ce == null
                    ? H === '!='
                    : H
                    ? ((ce += ''),
                      H === '='
                        ? ce === j
                        : H === '!='
                        ? ce !== j
                        : H === '^='
                        ? j && ce.indexOf(j) === 0
                        : H === '*='
                        ? j && ce.indexOf(j) > -1
                        : H === '$='
                        ? j && ce.slice(-j.length) === j
                        : H === '~='
                        ? (' ' + ce.replace(Mt, ' ') + ' ').indexOf(j) > -1
                        : H === '|='
                        ? ce === j || ce.slice(0, j.length + 1) === j + '-'
                        : !1)
                    : !0;
                };
              },
              CHILD: function (C, H, j, J, ce) {
                var Ae = C.slice(0, 3) !== 'nth',
                  Ue = C.slice(-4) !== 'last',
                  Fe = H === 'of-type';
                return J === 1 && ce === 0
                  ? function (Ie) {
                      return !!Ie.parentNode;
                    }
                  : function (Ie, pt, Ke) {
                      var et,
                        mt,
                        ke,
                        wt,
                        cn,
                        Jt = Ae !== Ue ? 'nextSibling' : 'previousSibling',
                        vn = Ie.parentNode,
                        On = Fe && Ie.nodeName.toLowerCase(),
                        zi = !Ke && !Fe,
                        nn = !1;
                      if (vn) {
                        if (Ae) {
                          for (; Jt; ) {
                            for (ke = Ie; (ke = ke[Jt]); ) if (Fe ? w(ke, On) : ke.nodeType === 1) return !1;
                            cn = Jt = C === 'only' && !cn && 'nextSibling';
                          }
                          return !0;
                        }
                        if (((cn = [Ue ? vn.firstChild : vn.lastChild]), Ue && zi)) {
                          for (
                            mt = vn[ue] || (vn[ue] = {}),
                              et = mt[C] || [],
                              wt = et[0] === K && et[1],
                              nn = wt && et[2],
                              ke = wt && vn.childNodes[wt];
                            (ke = (++wt && ke && ke[Jt]) || (nn = wt = 0) || cn.pop());

                          )
                            if (ke.nodeType === 1 && ++nn && ke === Ie) {
                              mt[C] = [K, wt, nn];
                              break;
                            }
                        } else if (
                          (zi &&
                            ((mt = Ie[ue] || (Ie[ue] = {})),
                            (et = mt[C] || []),
                            (wt = et[0] === K && et[1]),
                            (nn = wt)),
                          nn === !1)
                        )
                          for (
                            ;
                            (ke = (++wt && ke && ke[Jt]) || (nn = wt = 0) || cn.pop()) &&
                            !(
                              (Fe ? w(ke, On) : ke.nodeType === 1) &&
                              ++nn &&
                              (zi && ((mt = ke[ue] || (ke[ue] = {})), (mt[C] = [K, nn])), ke === Ie)
                            );

                          );
                        return (nn -= ce), nn === J || (nn % J === 0 && nn / J >= 0);
                      }
                    };
              },
              PSEUDO: function (C, H) {
                var j,
                  J = o.pseudos[C] || o.setFilters[C.toLowerCase()] || Et.error('unsupported pseudo: ' + C);
                return J[ue]
                  ? J(H)
                  : J.length > 1
                  ? ((j = [C, C, '', H]),
                    o.setFilters.hasOwnProperty(C.toLowerCase())
                      ? En(function (ce, Ae) {
                          for (var Ue, Fe = J(ce, H), Ie = Fe.length; Ie--; )
                            (Ue = h.call(ce, Fe[Ie])), (ce[Ue] = !(Ae[Ue] = Fe[Ie]));
                        })
                      : function (ce) {
                          return J(ce, 0, j);
                        })
                  : J;
              }
            },
            pseudos: {
              not: En(function (C) {
                var H = [],
                  j = [],
                  J = $s(C.replace(ne, '$1'));
                return J[ue]
                  ? En(function (ce, Ae, Ue, Fe) {
                      for (var Ie, pt = J(ce, null, Fe, []), Ke = ce.length; Ke--; )
                        (Ie = pt[Ke]) && (ce[Ke] = !(Ae[Ke] = Ie));
                    })
                  : function (ce, Ae, Ue) {
                      return (H[0] = ce), J(H, null, Ue, j), (H[0] = null), !j.pop();
                    };
              }),
              has: En(function (C) {
                return function (H) {
                  return Et(C, H).length > 0;
                };
              }),
              contains: En(function (C) {
                return (
                  (C = C.replace(Wn, Xn)),
                  function (H) {
                    return (H.textContent || l.text(H)).indexOf(C) > -1;
                  }
                );
              }),
              lang: En(function (C) {
                return (
                  wr.test(C || '') || Et.error('unsupported lang: ' + C),
                  (C = C.replace(Wn, Xn).toLowerCase()),
                  function (H) {
                    var j;
                    do
                      if ((j = U ? H.lang : H.getAttribute('xml:lang') || H.getAttribute('lang')))
                        return (j = j.toLowerCase()), j === C || j.indexOf(C + '-') === 0;
                    while ((H = H.parentNode) && H.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (C) {
                var H = e.location && e.location.hash;
                return H && H.slice(1) === C.id;
              },
              root: function (C) {
                return C === N;
              },
              focus: function (C) {
                return C === Wc() && E.hasFocus() && !!(C.type || C.href || ~C.tabIndex);
              },
              enabled: ao(!1),
              disabled: ao(!0),
              checked: function (C) {
                return (w(C, 'input') && !!C.checked) || (w(C, 'option') && !!C.selected);
              },
              selected: function (C) {
                return C.parentNode && C.parentNode.selectedIndex, C.selected === !0;
              },
              empty: function (C) {
                for (C = C.firstChild; C; C = C.nextSibling) if (C.nodeType < 6) return !1;
                return !0;
              },
              parent: function (C) {
                return !o.pseudos.empty(C);
              },
              header: function (C) {
                return ii.test(C.nodeName);
              },
              input: function (C) {
                return ni.test(C.nodeName);
              },
              button: function (C) {
                return (w(C, 'input') && C.type === 'button') || w(C, 'button');
              },
              text: function (C) {
                var H;
                return (
                  w(C, 'input') &&
                  C.type === 'text' &&
                  ((H = C.getAttribute('type')) == null || H.toLowerCase() === 'text')
                );
              },
              first: xi(function () {
                return [0];
              }),
              last: xi(function (C, H) {
                return [H - 1];
              }),
              eq: xi(function (C, H, j) {
                return [j < 0 ? j + H : j];
              }),
              even: xi(function (C, H) {
                for (var j = 0; j < H; j += 2) C.push(j);
                return C;
              }),
              odd: xi(function (C, H) {
                for (var j = 1; j < H; j += 2) C.push(j);
                return C;
              }),
              lt: xi(function (C, H, j) {
                var J;
                for (j < 0 ? (J = j + H) : j > H ? (J = H) : (J = j); --J >= 0; ) C.push(J);
                return C;
              }),
              gt: xi(function (C, H, j) {
                for (var J = j < 0 ? j + H : j; ++J < H; ) C.push(J);
                return C;
              })
            }
          }),
        (o.pseudos.nth = o.pseudos.eq);
      for (r in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) o.pseudos[r] = Xc(r);
      for (r in { submit: !0, reset: !0 }) o.pseudos[r] = qc(r);
      function oo() {}
      (oo.prototype = o.filters = o.pseudos), (o.setFilters = new oo());
      function Rr(C, H) {
        var j,
          J,
          ce,
          Ae,
          Ue,
          Fe,
          Ie,
          pt = xt[C + ' '];
        if (pt) return H ? 0 : pt.slice(0);
        for (Ue = C, Fe = [], Ie = o.preFilter; Ue; ) {
          (!j || (J = It.exec(Ue))) && (J && (Ue = Ue.slice(J[0].length) || Ue), Fe.push((ce = []))),
            (j = !1),
            (J = Ar.exec(Ue)) &&
              ((j = J.shift()), ce.push({ value: j, type: J[0].replace(ne, ' ') }), (Ue = Ue.slice(j.length)));
          for (Ae in o.filter)
            (J = Nn[Ae].exec(Ue)) &&
              (!Ie[Ae] || (J = Ie[Ae](J))) &&
              ((j = J.shift()), ce.push({ value: j, type: Ae, matches: J }), (Ue = Ue.slice(j.length)));
          if (!j) break;
        }
        return H ? Ue.length : Ue ? Et.error(C) : xt(C, Fe).slice(0);
      }
      function Zr(C) {
        for (var H = 0, j = C.length, J = ''; H < j; H++) J += C[H].value;
        return J;
      }
      function Jr(C, H, j) {
        var J = H.dir,
          ce = H.next,
          Ae = ce || J,
          Ue = j && Ae === 'parentNode',
          Fe = Se++;
        return H.first
          ? function (Ie, pt, Ke) {
              for (; (Ie = Ie[J]); ) if (Ie.nodeType === 1 || Ue) return C(Ie, pt, Ke);
              return !1;
            }
          : function (Ie, pt, Ke) {
              var et,
                mt,
                ke = [K, Fe];
              if (Ke) {
                for (; (Ie = Ie[J]); ) if ((Ie.nodeType === 1 || Ue) && C(Ie, pt, Ke)) return !0;
              } else
                for (; (Ie = Ie[J]); )
                  if (Ie.nodeType === 1 || Ue)
                    if (((mt = Ie[ue] || (Ie[ue] = {})), ce && w(Ie, ce))) Ie = Ie[J] || Ie;
                    else {
                      if ((et = mt[Ae]) && et[0] === K && et[1] === Fe) return (ke[2] = et[2]);
                      if (((mt[Ae] = ke), (ke[2] = C(Ie, pt, Ke)))) return !0;
                    }
              return !1;
            };
      }
      function js(C) {
        return C.length > 1
          ? function (H, j, J) {
              for (var ce = C.length; ce--; ) if (!C[ce](H, j, J)) return !1;
              return !0;
            }
          : C[0];
      }
      function jc(C, H, j) {
        for (var J = 0, ce = H.length; J < ce; J++) Et(C, H[J], j);
        return j;
      }
      function Qr(C, H, j, J, ce) {
        for (var Ae, Ue = [], Fe = 0, Ie = C.length, pt = H != null; Fe < Ie; Fe++)
          (Ae = C[Fe]) && (!j || j(Ae, J, ce)) && (Ue.push(Ae), pt && H.push(Fe));
        return Ue;
      }
      function Ys(C, H, j, J, ce, Ae) {
        return (
          J && !J[ue] && (J = Ys(J)),
          ce && !ce[ue] && (ce = Ys(ce, Ae)),
          En(function (Ue, Fe, Ie, pt) {
            var Ke,
              et,
              mt,
              ke,
              wt = [],
              cn = [],
              Jt = Fe.length,
              vn = Ue || jc(H || '*', Ie.nodeType ? [Ie] : Ie, []),
              On = C && (Ue || !H) ? Qr(vn, wt, C, Ie, pt) : vn;
            if ((j ? ((ke = ce || (Ue ? C : Jt || J) ? [] : Fe), j(On, ke, Ie, pt)) : (ke = On), J))
              for (Ke = Qr(ke, cn), J(Ke, [], Ie, pt), et = Ke.length; et--; )
                (mt = Ke[et]) && (ke[cn[et]] = !(On[cn[et]] = mt));
            if (Ue) {
              if (ce || C) {
                if (ce) {
                  for (Ke = [], et = ke.length; et--; ) (mt = ke[et]) && Ke.push((On[et] = mt));
                  ce(null, (ke = []), Ke, pt);
                }
                for (et = ke.length; et--; )
                  (mt = ke[et]) && (Ke = ce ? h.call(Ue, mt) : wt[et]) > -1 && (Ue[Ke] = !(Fe[Ke] = mt));
              }
            } else (ke = Qr(ke === Fe ? ke.splice(Jt, ke.length) : ke)), ce ? ce(null, Fe, ke, pt) : M.apply(Fe, ke);
          })
        );
      }
      function Ks(C) {
        for (
          var H,
            j,
            J,
            ce = C.length,
            Ae = o.relative[C[0].type],
            Ue = Ae || o.relative[' '],
            Fe = Ae ? 1 : 0,
            Ie = Jr(
              function (et) {
                return et === H;
              },
              Ue,
              !0
            ),
            pt = Jr(
              function (et) {
                return h.call(H, et) > -1;
              },
              Ue,
              !0
            ),
            Ke = [
              function (et, mt, ke) {
                var wt = (!Ae && (ke || mt != f)) || ((H = mt).nodeType ? Ie(et, mt, ke) : pt(et, mt, ke));
                return (H = null), wt;
              }
            ];
          Fe < ce;
          Fe++
        )
          if ((j = o.relative[C[Fe].type])) Ke = [Jr(js(Ke), j)];
          else {
            if (((j = o.filter[C[Fe].type].apply(null, C[Fe].matches)), j[ue])) {
              for (J = ++Fe; J < ce && !o.relative[C[J].type]; J++);
              return Ys(
                Fe > 1 && js(Ke),
                Fe > 1 && Zr(C.slice(0, Fe - 1).concat({ value: C[Fe - 2].type === ' ' ? '*' : '' })).replace(ne, '$1'),
                j,
                Fe < J && Ks(C.slice(Fe, J)),
                J < ce && Ks((C = C.slice(J))),
                J < ce && Zr(C)
              );
            }
            Ke.push(j);
          }
        return js(Ke);
      }
      function Yc(C, H) {
        var j = H.length > 0,
          J = C.length > 0,
          ce = function (Ae, Ue, Fe, Ie, pt) {
            var Ke,
              et,
              mt,
              ke = 0,
              wt = '0',
              cn = Ae && [],
              Jt = [],
              vn = f,
              On = Ae || (J && o.find.TAG('*', pt)),
              zi = (K += vn == null ? 1 : Math.random() || 0.1),
              nn = On.length;
            for (pt && (f = Ue == E || Ue || pt); wt !== nn && (Ke = On[wt]) != null; wt++) {
              if (J && Ke) {
                for (et = 0, !Ue && Ke.ownerDocument != E && (ri(Ke), (Fe = !U)); (mt = C[et++]); )
                  if (mt(Ke, Ue || E, Fe)) {
                    M.call(Ie, Ke);
                    break;
                  }
                pt && (K = zi);
              }
              j && ((Ke = !mt && Ke) && ke--, Ae && cn.push(Ke));
            }
            if (((ke += wt), j && wt !== ke)) {
              for (et = 0; (mt = H[et++]); ) mt(cn, Jt, Ue, Fe);
              if (Ae) {
                if (ke > 0) for (; wt--; ) cn[wt] || Jt[wt] || (Jt[wt] = I.call(Ie));
                Jt = Qr(Jt);
              }
              M.apply(Ie, Jt), pt && !Ae && Jt.length > 0 && ke + H.length > 1 && l.uniqueSort(Ie);
            }
            return pt && ((K = zi), (f = vn)), cn;
          };
        return j ? En(ce) : ce;
      }
      function $s(C, H) {
        var j,
          J = [],
          ce = [],
          Ae = lt[C + ' '];
        if (!Ae) {
          for (H || (H = Rr(C)), j = H.length; j--; ) (Ae = Ks(H[j])), Ae[ue] ? J.push(Ae) : ce.push(Ae);
          (Ae = lt(C, Yc(ce, J))), (Ae.selector = C);
        }
        return Ae;
      }
      function lo(C, H, j, J) {
        var ce,
          Ae,
          Ue,
          Fe,
          Ie,
          pt = typeof C == 'function' && C,
          Ke = !J && Rr((C = pt.selector || C));
        if (((j = j || []), Ke.length === 1)) {
          if (
            ((Ae = Ke[0] = Ke[0].slice(0)),
            Ae.length > 2 && (Ue = Ae[0]).type === 'ID' && H.nodeType === 9 && U && o.relative[Ae[1].type])
          ) {
            if (((H = (o.find.ID(Ue.matches[0].replace(Wn, Xn), H) || [])[0]), H)) pt && (H = H.parentNode);
            else return j;
            C = C.slice(Ae.shift().value.length);
          }
          for (ce = Nn.needsContext.test(C) ? 0 : Ae.length; ce-- && ((Ue = Ae[ce]), !o.relative[(Fe = Ue.type)]); )
            if (
              (Ie = o.find[Fe]) &&
              (J = Ie(Ue.matches[0].replace(Wn, Xn), (Xs.test(Ae[0].type) && qs(H.parentNode)) || H))
            ) {
              if ((Ae.splice(ce, 1), (C = J.length && Zr(Ae)), !C)) return M.apply(j, J), j;
              break;
            }
        }
        return (pt || $s(C, Ke))(J, H, !U, j, !H || (Xs.test(C) && qs(H.parentNode)) || H), j;
      }
      (T.sortStable = ue.split('').sort(Ht).join('') === ue),
        ri(),
        (T.sortDetached = Hi(function (C) {
          return C.compareDocumentPosition(E.createElement('fieldset')) & 1;
        })),
        (l.find = Et),
        (l.expr[':'] = l.expr.pseudos),
        (l.unique = l.uniqueSort),
        (Et.compile = $s),
        (Et.select = lo),
        (Et.setDocument = ri),
        (Et.tokenize = Rr),
        (Et.escape = l.escapeSelector),
        (Et.getText = l.text),
        (Et.isXML = l.isXMLDoc),
        (Et.selectors = l.expr),
        (Et.support = l.support),
        (Et.uniqueSort = l.uniqueSort);
    })();
    var xe = function (r, o, f) {
        for (var d = [], x = f !== void 0; (r = r[o]) && r.nodeType !== 9; )
          if (r.nodeType === 1) {
            if (x && l(r).is(f)) break;
            d.push(r);
          }
        return d;
      },
      de = function (r, o) {
        for (var f = []; r; r = r.nextSibling) r.nodeType === 1 && r !== o && f.push(r);
        return f;
      },
      Q = l.expr.match.needsContext,
      se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Le(r, o, f) {
      return b(o)
        ? l.grep(r, function (d, x) {
            return !!o.call(d, x, d) !== f;
          })
        : o.nodeType
        ? l.grep(r, function (d) {
            return (d === o) !== f;
          })
        : typeof o != 'string'
        ? l.grep(r, function (d) {
            return h.call(o, d) > -1 !== f;
          })
        : l.filter(o, r, f);
    }
    (l.filter = function (r, o, f) {
      var d = o[0];
      return (
        f && (r = ':not(' + r + ')'),
        o.length === 1 && d.nodeType === 1
          ? l.find.matchesSelector(d, r)
            ? [d]
            : []
          : l.find.matches(
              r,
              l.grep(o, function (x) {
                return x.nodeType === 1;
              })
            )
      );
    }),
      l.fn.extend({
        find: function (r) {
          var o,
            f,
            d = this.length,
            x = this;
          if (typeof r != 'string')
            return this.pushStack(
              l(r).filter(function () {
                for (o = 0; o < d; o++) if (l.contains(x[o], this)) return !0;
              })
            );
          for (f = this.pushStack([]), o = 0; o < d; o++) l.find(r, x[o], f);
          return d > 1 ? l.uniqueSort(f) : f;
        },
        filter: function (r) {
          return this.pushStack(Le(this, r || [], !1));
        },
        not: function (r) {
          return this.pushStack(Le(this, r || [], !0));
        },
        is: function (r) {
          return !!Le(this, typeof r == 'string' && Q.test(r) ? l(r) : r || [], !1).length;
        }
      });
    var De,
      Oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      Ve = (l.fn.init = function (r, o, f) {
        var d, x;
        if (!r) return this;
        if (((f = f || De), typeof r == 'string'))
          if (
            (r[0] === '<' && r[r.length - 1] === '>' && r.length >= 3 ? (d = [null, r, null]) : (d = Oe.exec(r)),
            d && (d[1] || !o))
          )
            if (d[1]) {
              if (
                ((o = o instanceof l ? o[0] : o),
                l.merge(this, l.parseHTML(d[1], o && o.nodeType ? o.ownerDocument || o : m, !0)),
                se.test(d[1]) && l.isPlainObject(o))
              )
                for (d in o) b(this[d]) ? this[d](o[d]) : this.attr(d, o[d]);
              return this;
            } else return (x = m.getElementById(d[2])), x && ((this[0] = x), (this.length = 1)), this;
          else return !o || o.jquery ? (o || f).find(r) : this.constructor(o).find(r);
        else {
          if (r.nodeType) return (this[0] = r), (this.length = 1), this;
          if (b(r)) return f.ready !== void 0 ? f.ready(r) : r(l);
        }
        return l.makeArray(r, this);
      });
    (Ve.prototype = l.fn), (De = l(m));
    var Ze = /^(?:parents|prev(?:Until|All))/,
      Ge = { children: !0, contents: !0, next: !0, prev: !0 };
    l.fn.extend({
      has: function (r) {
        var o = l(r, this),
          f = o.length;
        return this.filter(function () {
          for (var d = 0; d < f; d++) if (l.contains(this, o[d])) return !0;
        });
      },
      closest: function (r, o) {
        var f,
          d = 0,
          x = this.length,
          M = [],
          E = typeof r != 'string' && l(r);
        if (!Q.test(r)) {
          for (; d < x; d++)
            for (f = this[d]; f && f !== o; f = f.parentNode)
              if (f.nodeType < 11 && (E ? E.index(f) > -1 : f.nodeType === 1 && l.find.matchesSelector(f, r))) {
                M.push(f);
                break;
              }
        }
        return this.pushStack(M.length > 1 ? l.uniqueSort(M) : M);
      },
      index: function (r) {
        return r
          ? typeof r == 'string'
            ? h.call(l(r), this[0])
            : h.call(this, r.jquery ? r[0] : r)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (r, o) {
        return this.pushStack(l.uniqueSort(l.merge(this.get(), l(r, o))));
      },
      addBack: function (r) {
        return this.add(r == null ? this.prevObject : this.prevObject.filter(r));
      }
    });
    function gt(r, o) {
      for (; (r = r[o]) && r.nodeType !== 1; );
      return r;
    }
    l.each(
      {
        parent: function (r) {
          var o = r.parentNode;
          return o && o.nodeType !== 11 ? o : null;
        },
        parents: function (r) {
          return xe(r, 'parentNode');
        },
        parentsUntil: function (r, o, f) {
          return xe(r, 'parentNode', f);
        },
        next: function (r) {
          return gt(r, 'nextSibling');
        },
        prev: function (r) {
          return gt(r, 'previousSibling');
        },
        nextAll: function (r) {
          return xe(r, 'nextSibling');
        },
        prevAll: function (r) {
          return xe(r, 'previousSibling');
        },
        nextUntil: function (r, o, f) {
          return xe(r, 'nextSibling', f);
        },
        prevUntil: function (r, o, f) {
          return xe(r, 'previousSibling', f);
        },
        siblings: function (r) {
          return de((r.parentNode || {}).firstChild, r);
        },
        children: function (r) {
          return de(r.firstChild);
        },
        contents: function (r) {
          return r.contentDocument != null && s(r.contentDocument)
            ? r.contentDocument
            : (w(r, 'template') && (r = r.content || r), l.merge([], r.childNodes));
        }
      },
      function (r, o) {
        l.fn[r] = function (f, d) {
          var x = l.map(this, o, f);
          return (
            r.slice(-5) !== 'Until' && (d = f),
            d && typeof d == 'string' && (x = l.filter(d, x)),
            this.length > 1 && (Ge[r] || l.uniqueSort(x), Ze.test(r) && x.reverse()),
            this.pushStack(x)
          );
        };
      }
    );
    var Tt = /[^\x20\t\r\n\f]+/g;
    function rt(r) {
      var o = {};
      return (
        l.each(r.match(Tt) || [], function (f, d) {
          o[d] = !0;
        }),
        o
      );
    }
    l.Callbacks = function (r) {
      r = typeof r == 'string' ? rt(r) : l.extend({}, r);
      var o,
        f,
        d,
        x,
        M = [],
        E = [],
        N = -1,
        U = function () {
          for (x = x || r.once, d = o = !0; E.length; N = -1)
            for (f = E.shift(); ++N < M.length; )
              M[N].apply(f[0], f[1]) === !1 && r.stopOnFalse && ((N = M.length), (f = !1));
          r.memory || (f = !1), (o = !1), x && (f ? (M = []) : (M = ''));
        },
        V = {
          add: function () {
            return (
              M &&
                (f && !o && ((N = M.length - 1), E.push(f)),
                (function te(ue) {
                  l.each(ue, function (K, Se) {
                    b(Se) ? (!r.unique || !V.has(Se)) && M.push(Se) : Se && Se.length && D(Se) !== 'string' && te(Se);
                  });
                })(arguments),
                f && !o && U()),
              this
            );
          },
          remove: function () {
            return (
              l.each(arguments, function (te, ue) {
                for (var K; (K = l.inArray(ue, M, K)) > -1; ) M.splice(K, 1), K <= N && N--;
              }),
              this
            );
          },
          has: function (te) {
            return te ? l.inArray(te, M) > -1 : M.length > 0;
          },
          empty: function () {
            return M && (M = []), this;
          },
          disable: function () {
            return (x = E = []), (M = f = ''), this;
          },
          disabled: function () {
            return !M;
          },
          lock: function () {
            return (x = E = []), !f && !o && (M = f = ''), this;
          },
          locked: function () {
            return !!x;
          },
          fireWith: function (te, ue) {
            return x || ((ue = ue || []), (ue = [te, ue.slice ? ue.slice() : ue]), E.push(ue), o || U()), this;
          },
          fire: function () {
            return V.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!d;
          }
        };
      return V;
    };
    function q(r) {
      return r;
    }
    function Ct(r) {
      throw r;
    }
    function ze(r, o, f, d) {
      var x;
      try {
        r && b((x = r.promise))
          ? x.call(r).done(o).fail(f)
          : r && b((x = r.then))
          ? x.call(r, o, f)
          : o.apply(void 0, [r].slice(d));
      } catch (M) {
        f.apply(void 0, [M]);
      }
    }
    l.extend({
      Deferred: function (r) {
        var o = [
            ['notify', 'progress', l.Callbacks('memory'), l.Callbacks('memory'), 2],
            ['resolve', 'done', l.Callbacks('once memory'), l.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', l.Callbacks('once memory'), l.Callbacks('once memory'), 1, 'rejected']
          ],
          f = 'pending',
          d = {
            state: function () {
              return f;
            },
            always: function () {
              return x.done(arguments).fail(arguments), this;
            },
            catch: function (M) {
              return d.then(null, M);
            },
            pipe: function () {
              var M = arguments;
              return l
                .Deferred(function (E) {
                  l.each(o, function (N, U) {
                    var V = b(M[U[4]]) && M[U[4]];
                    x[U[1]](function () {
                      var te = V && V.apply(this, arguments);
                      te && b(te.promise)
                        ? te.promise().progress(E.notify).done(E.resolve).fail(E.reject)
                        : E[U[0] + 'With'](this, V ? [te] : arguments);
                    });
                  }),
                    (M = null);
                })
                .promise();
            },
            then: function (M, E, N) {
              var U = 0;
              function V(te, ue, K, Se) {
                return function () {
                  var Je = this,
                    xt = arguments,
                    lt = function () {
                      var Ht, Dn;
                      if (!(te < U)) {
                        if (((Ht = K.apply(Je, xt)), Ht === ue.promise()))
                          throw new TypeError('Thenable self-resolution');
                        (Dn = Ht && (typeof Ht == 'object' || typeof Ht == 'function') && Ht.then),
                          b(Dn)
                            ? Se
                              ? Dn.call(Ht, V(U, ue, q, Se), V(U, ue, Ct, Se))
                              : (U++, Dn.call(Ht, V(U, ue, q, Se), V(U, ue, Ct, Se), V(U, ue, q, ue.notifyWith)))
                            : (K !== q && ((Je = void 0), (xt = [Ht])), (Se || ue.resolveWith)(Je, xt));
                      }
                    },
                    Yt = Se
                      ? lt
                      : function () {
                          try {
                            lt();
                          } catch (Ht) {
                            l.Deferred.exceptionHook && l.Deferred.exceptionHook(Ht, Yt.error),
                              te + 1 >= U && (K !== Ct && ((Je = void 0), (xt = [Ht])), ue.rejectWith(Je, xt));
                          }
                        };
                  te
                    ? Yt()
                    : (l.Deferred.getErrorHook
                        ? (Yt.error = l.Deferred.getErrorHook())
                        : l.Deferred.getStackHook && (Yt.error = l.Deferred.getStackHook()),
                      e.setTimeout(Yt));
                };
              }
              return l
                .Deferred(function (te) {
                  o[0][3].add(V(0, te, b(N) ? N : q, te.notifyWith)),
                    o[1][3].add(V(0, te, b(M) ? M : q)),
                    o[2][3].add(V(0, te, b(E) ? E : Ct));
                })
                .promise();
            },
            promise: function (M) {
              return M != null ? l.extend(M, d) : d;
            }
          },
          x = {};
        return (
          l.each(o, function (M, E) {
            var N = E[2],
              U = E[5];
            (d[E[1]] = N.add),
              U &&
                N.add(
                  function () {
                    f = U;
                  },
                  o[3 - M][2].disable,
                  o[3 - M][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              N.add(E[3].fire),
              (x[E[0]] = function () {
                return x[E[0] + 'With'](this === x ? void 0 : this, arguments), this;
              }),
              (x[E[0] + 'With'] = N.fireWith);
          }),
          d.promise(x),
          r && r.call(x, x),
          x
        );
      },
      when: function (r) {
        var o = arguments.length,
          f = o,
          d = Array(f),
          x = a.call(arguments),
          M = l.Deferred(),
          E = function (N) {
            return function (U) {
              (d[N] = this), (x[N] = arguments.length > 1 ? a.call(arguments) : U), --o || M.resolveWith(d, x);
            };
          };
        if (o <= 1 && (ze(r, M.done(E(f)).resolve, M.reject, !o), M.state() === 'pending' || b(x[f] && x[f].then)))
          return M.then();
        for (; f--; ) ze(x[f], E(f), M.reject);
        return M.promise();
      }
    });
    var Qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (l.Deferred.exceptionHook = function (r, o) {
      e.console &&
        e.console.warn &&
        r &&
        Qe.test(r.name) &&
        e.console.warn('jQuery.Deferred exception: ' + r.message, r.stack, o);
    }),
      (l.readyException = function (r) {
        e.setTimeout(function () {
          throw r;
        });
      });
    var We = l.Deferred();
    (l.fn.ready = function (r) {
      return (
        We.then(r).catch(function (o) {
          l.readyException(o);
        }),
        this
      );
    }),
      l.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (r) {
          (r === !0 ? --l.readyWait : l.isReady) ||
            ((l.isReady = !0), !(r !== !0 && --l.readyWait > 0) && We.resolveWith(m, [l]));
        }
      }),
      (l.ready.then = We.then);
    function St() {
      m.removeEventListener('DOMContentLoaded', St), e.removeEventListener('load', St), l.ready();
    }
    m.readyState === 'complete' || (m.readyState !== 'loading' && !m.documentElement.doScroll)
      ? e.setTimeout(l.ready)
      : (m.addEventListener('DOMContentLoaded', St), e.addEventListener('load', St));
    var je = function (r, o, f, d, x, M, E) {
        var N = 0,
          U = r.length,
          V = f == null;
        if (D(f) === 'object') {
          x = !0;
          for (N in f) je(r, o, N, f[N], !0, M, E);
        } else if (
          d !== void 0 &&
          ((x = !0),
          b(d) || (E = !0),
          V &&
            (E
              ? (o.call(r, d), (o = null))
              : ((V = o),
                (o = function (te, ue, K) {
                  return V.call(l(te), K);
                }))),
          o)
        )
          for (; N < U; N++) o(r[N], f, E ? d : d.call(r[N], N, o(r[N], f)));
        return x ? r : V ? o.call(r) : U ? o(r[0], f) : M;
      },
      tt = /^-ms-/,
      vt = /-([a-z])/g;
    function Nt(r, o) {
      return o.toUpperCase();
    }
    function yt(r) {
      return r.replace(tt, 'ms-').replace(vt, Nt);
    }
    var P = function (r) {
      return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType;
    };
    function A() {
      this.expando = l.expando + A.uid++;
    }
    (A.uid = 1),
      (A.prototype = {
        cache: function (r) {
          var o = r[this.expando];
          return (
            o ||
              ((o = {}),
              P(r) &&
                (r.nodeType
                  ? (r[this.expando] = o)
                  : Object.defineProperty(r, this.expando, { value: o, configurable: !0 }))),
            o
          );
        },
        set: function (r, o, f) {
          var d,
            x = this.cache(r);
          if (typeof o == 'string') x[yt(o)] = f;
          else for (d in o) x[yt(d)] = o[d];
          return x;
        },
        get: function (r, o) {
          return o === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][yt(o)];
        },
        access: function (r, o, f) {
          return o === void 0 || (o && typeof o == 'string' && f === void 0)
            ? this.get(r, o)
            : (this.set(r, o, f), f !== void 0 ? f : o);
        },
        remove: function (r, o) {
          var f,
            d = r[this.expando];
          if (d !== void 0) {
            if (o !== void 0)
              for (
                Array.isArray(o) ? (o = o.map(yt)) : ((o = yt(o)), (o = (o in d) ? [o] : o.match(Tt) || [])),
                  f = o.length;
                f--;

              )
                delete d[o[f]];
            (o === void 0 || l.isEmptyObject(d)) && (r.nodeType ? (r[this.expando] = void 0) : delete r[this.expando]);
          }
        },
        hasData: function (r) {
          var o = r[this.expando];
          return o !== void 0 && !l.isEmptyObject(o);
        }
      });
    var z = new A(),
      me = new A(),
      Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ye = /[A-Z]/g;
    function Be(r) {
      return r === 'true'
        ? !0
        : r === 'false'
        ? !1
        : r === 'null'
        ? null
        : r === +r + ''
        ? +r
        : Me.test(r)
        ? JSON.parse(r)
        : r;
    }
    function Ee(r, o, f) {
      var d;
      if (f === void 0 && r.nodeType === 1)
        if (((d = 'data-' + o.replace(ye, '-$&').toLowerCase()), (f = r.getAttribute(d)), typeof f == 'string')) {
          try {
            f = Be(f);
          } catch {}
          me.set(r, o, f);
        } else f = void 0;
      return f;
    }
    l.extend({
      hasData: function (r) {
        return me.hasData(r) || z.hasData(r);
      },
      data: function (r, o, f) {
        return me.access(r, o, f);
      },
      removeData: function (r, o) {
        me.remove(r, o);
      },
      _data: function (r, o, f) {
        return z.access(r, o, f);
      },
      _removeData: function (r, o) {
        z.remove(r, o);
      }
    }),
      l.fn.extend({
        data: function (r, o) {
          var f,
            d,
            x,
            M = this[0],
            E = M && M.attributes;
          if (r === void 0) {
            if (this.length && ((x = me.get(M)), M.nodeType === 1 && !z.get(M, 'hasDataAttrs'))) {
              for (f = E.length; f--; )
                E[f] && ((d = E[f].name), d.indexOf('data-') === 0 && ((d = yt(d.slice(5))), Ee(M, d, x[d])));
              z.set(M, 'hasDataAttrs', !0);
            }
            return x;
          }
          return typeof r == 'object'
            ? this.each(function () {
                me.set(this, r);
              })
            : je(
                this,
                function (N) {
                  var U;
                  if (M && N === void 0)
                    return (U = me.get(M, r)), U !== void 0 || ((U = Ee(M, r)), U !== void 0) ? U : void 0;
                  this.each(function () {
                    me.set(this, r, N);
                  });
                },
                null,
                o,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (r) {
          return this.each(function () {
            me.remove(this, r);
          });
        }
      }),
      l.extend({
        queue: function (r, o, f) {
          var d;
          if (r)
            return (
              (o = (o || 'fx') + 'queue'),
              (d = z.get(r, o)),
              f && (!d || Array.isArray(f) ? (d = z.access(r, o, l.makeArray(f))) : d.push(f)),
              d || []
            );
        },
        dequeue: function (r, o) {
          o = o || 'fx';
          var f = l.queue(r, o),
            d = f.length,
            x = f.shift(),
            M = l._queueHooks(r, o),
            E = function () {
              l.dequeue(r, o);
            };
          x === 'inprogress' && ((x = f.shift()), d--),
            x && (o === 'fx' && f.unshift('inprogress'), delete M.stop, x.call(r, E, M)),
            !d && M && M.empty.fire();
        },
        _queueHooks: function (r, o) {
          var f = o + 'queueHooks';
          return (
            z.get(r, f) ||
            z.access(r, f, {
              empty: l.Callbacks('once memory').add(function () {
                z.remove(r, [o + 'queue', f]);
              })
            })
          );
        }
      }),
      l.fn.extend({
        queue: function (r, o) {
          var f = 2;
          return (
            typeof r != 'string' && ((o = r), (r = 'fx'), f--),
            arguments.length < f
              ? l.queue(this[0], r)
              : o === void 0
              ? this
              : this.each(function () {
                  var d = l.queue(this, r, o);
                  l._queueHooks(this, r), r === 'fx' && d[0] !== 'inprogress' && l.dequeue(this, r);
                })
          );
        },
        dequeue: function (r) {
          return this.each(function () {
            l.dequeue(this, r);
          });
        },
        clearQueue: function (r) {
          return this.queue(r || 'fx', []);
        },
        promise: function (r, o) {
          var f,
            d = 1,
            x = l.Deferred(),
            M = this,
            E = this.length,
            N = function () {
              --d || x.resolveWith(M, [M]);
            };
          for (typeof r != 'string' && ((o = r), (r = void 0)), r = r || 'fx'; E--; )
            (f = z.get(M[E], r + 'queueHooks')), f && f.empty && (d++, f.empty.add(N));
          return N(), x.promise(o);
        }
      });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      B = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
      fe = ['Top', 'Right', 'Bottom', 'Left'],
      we = m.documentElement,
      Te = function (r) {
        return l.contains(r.ownerDocument, r);
      },
      Pe = { composed: !0 };
    we.getRootNode &&
      (Te = function (r) {
        return l.contains(r.ownerDocument, r) || r.getRootNode(Pe) === r.ownerDocument;
      });
    var Xe = function (r, o) {
      return (
        (r = o || r), r.style.display === 'none' || (r.style.display === '' && Te(r) && l.css(r, 'display') === 'none')
      );
    };
    function ut(r, o, f, d) {
      var x,
        M,
        E = 20,
        N = d
          ? function () {
              return d.cur();
            }
          : function () {
              return l.css(r, o, '');
            },
        U = N(),
        V = (f && f[3]) || (l.cssNumber[o] ? '' : 'px'),
        te = r.nodeType && (l.cssNumber[o] || (V !== 'px' && +U)) && B.exec(l.css(r, o));
      if (te && te[3] !== V) {
        for (U = U / 2, V = V || te[3], te = +U || 1; E--; )
          l.style(r, o, te + V), (1 - M) * (1 - (M = N() / U || 0.5)) <= 0 && (E = 0), (te = te / M);
        (te = te * 2), l.style(r, o, te + V), (f = f || []);
      }
      return (
        f &&
          ((te = +te || +U || 0),
          (x = f[1] ? te + (f[1] + 1) * f[2] : +f[2]),
          d && ((d.unit = V), (d.start = te), (d.end = x))),
        x
      );
    }
    var G = {};
    function Re(r) {
      var o,
        f = r.ownerDocument,
        d = r.nodeName,
        x = G[d];
      return (
        x ||
        ((o = f.body.appendChild(f.createElement(d))),
        (x = l.css(o, 'display')),
        o.parentNode.removeChild(o),
        x === 'none' && (x = 'block'),
        (G[d] = x),
        x)
      );
    }
    function Z(r, o) {
      for (var f, d, x = [], M = 0, E = r.length; M < E; M++)
        (d = r[M]),
          d.style &&
            ((f = d.style.display),
            o
              ? (f === 'none' && ((x[M] = z.get(d, 'display') || null), x[M] || (d.style.display = '')),
                d.style.display === '' && Xe(d) && (x[M] = Re(d)))
              : f !== 'none' && ((x[M] = 'none'), z.set(d, 'display', f)));
      for (M = 0; M < E; M++) x[M] != null && (r[M].style.display = x[M]);
      return r;
    }
    l.fn.extend({
      show: function () {
        return Z(this, !0);
      },
      hide: function () {
        return Z(this);
      },
      toggle: function (r) {
        return typeof r == 'boolean'
          ? r
            ? this.show()
            : this.hide()
          : this.each(function () {
              Xe(this) ? l(this).show() : l(this).hide();
            });
      }
    });
    var _e = /^(?:checkbox|radio)$/i,
      be = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ot = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var r = m.createDocumentFragment(),
        o = r.appendChild(m.createElement('div')),
        f = m.createElement('input');
      f.setAttribute('type', 'radio'),
        f.setAttribute('checked', 'checked'),
        f.setAttribute('name', 't'),
        o.appendChild(f),
        (T.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (o.innerHTML = '<textarea>x</textarea>'),
        (T.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue),
        (o.innerHTML = '<option></option>'),
        (T.option = !!o.lastChild);
    })();
    var st = {
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
    (st.tbody = st.tfoot = st.colgroup = st.caption = st.thead),
      (st.th = st.td),
      T.option || (st.optgroup = st.option = [1, "<select multiple='multiple'>", '</select>']);
    function at(r, o) {
      var f;
      return (
        typeof r.getElementsByTagName < 'u'
          ? (f = r.getElementsByTagName(o || '*'))
          : typeof r.querySelectorAll < 'u'
          ? (f = r.querySelectorAll(o || '*'))
          : (f = []),
        o === void 0 || (o && w(r, o)) ? l.merge([r], f) : f
      );
    }
    function qt(r, o) {
      for (var f = 0, d = r.length; f < d; f++) z.set(r[f], 'globalEval', !o || z.get(o[f], 'globalEval'));
    }
    var At = /<|&#?\w+;/;
    function dn(r, o, f, d, x) {
      for (var M, E, N, U, V, te, ue = o.createDocumentFragment(), K = [], Se = 0, Je = r.length; Se < Je; Se++)
        if (((M = r[Se]), M || M === 0))
          if (D(M) === 'object') l.merge(K, M.nodeType ? [M] : M);
          else if (!At.test(M)) K.push(o.createTextNode(M));
          else {
            for (
              E = E || ue.appendChild(o.createElement('div')),
                N = (be.exec(M) || ['', ''])[1].toLowerCase(),
                U = st[N] || st._default,
                E.innerHTML = U[1] + l.htmlPrefilter(M) + U[2],
                te = U[0];
              te--;

            )
              E = E.lastChild;
            l.merge(K, E.childNodes), (E = ue.firstChild), (E.textContent = '');
          }
      for (ue.textContent = '', Se = 0; (M = K[Se++]); ) {
        if (d && l.inArray(M, d) > -1) {
          x && x.push(M);
          continue;
        }
        if (((V = Te(M)), (E = at(ue.appendChild(M), 'script')), V && qt(E), f))
          for (te = 0; (M = E[te++]); ) ot.test(M.type || '') && f.push(M);
      }
      return ue;
    }
    var Wt = /^([^.]*)(?:\.(.+)|)/;
    function zn() {
      return !0;
    }
    function Gn() {
      return !1;
    }
    function xr(r, o, f, d, x, M) {
      var E, N;
      if (typeof o == 'object') {
        typeof f != 'string' && ((d = d || f), (f = void 0));
        for (N in o) xr(r, N, f, d, o[N], M);
        return r;
      }
      if (
        (d == null && x == null
          ? ((x = f), (d = f = void 0))
          : x == null && (typeof f == 'string' ? ((x = d), (d = void 0)) : ((x = d), (d = f), (f = void 0))),
        x === !1)
      )
        x = Gn;
      else if (!x) return r;
      return (
        M === 1 &&
          ((E = x),
          (x = function (U) {
            return l().off(U), E.apply(this, arguments);
          }),
          (x.guid = E.guid || (E.guid = l.guid++))),
        r.each(function () {
          l.event.add(this, o, x, d, f);
        })
      );
    }
    l.event = {
      global: {},
      add: function (r, o, f, d, x) {
        var M,
          E,
          N,
          U,
          V,
          te,
          ue,
          K,
          Se,
          Je,
          xt,
          lt = z.get(r);
        if (P(r))
          for (
            f.handler && ((M = f), (f = M.handler), (x = M.selector)),
              x && l.find.matchesSelector(we, x),
              f.guid || (f.guid = l.guid++),
              (U = lt.events) || (U = lt.events = Object.create(null)),
              (E = lt.handle) ||
                (E = lt.handle =
                  function (Yt) {
                    return typeof l < 'u' && l.event.triggered !== Yt.type
                      ? l.event.dispatch.apply(r, arguments)
                      : void 0;
                  }),
              o = (o || '').match(Tt) || [''],
              V = o.length;
            V--;

          )
            (N = Wt.exec(o[V]) || []),
              (Se = xt = N[1]),
              (Je = (N[2] || '').split('.').sort()),
              Se &&
                ((ue = l.event.special[Se] || {}),
                (Se = (x ? ue.delegateType : ue.bindType) || Se),
                (ue = l.event.special[Se] || {}),
                (te = l.extend(
                  {
                    type: Se,
                    origType: xt,
                    data: d,
                    handler: f,
                    guid: f.guid,
                    selector: x,
                    needsContext: x && l.expr.match.needsContext.test(x),
                    namespace: Je.join('.')
                  },
                  M
                )),
                (K = U[Se]) ||
                  ((K = U[Se] = []),
                  (K.delegateCount = 0),
                  (!ue.setup || ue.setup.call(r, d, Je, E) === !1) && r.addEventListener && r.addEventListener(Se, E)),
                ue.add && (ue.add.call(r, te), te.handler.guid || (te.handler.guid = f.guid)),
                x ? K.splice(K.delegateCount++, 0, te) : K.push(te),
                (l.event.global[Se] = !0));
      },
      remove: function (r, o, f, d, x) {
        var M,
          E,
          N,
          U,
          V,
          te,
          ue,
          K,
          Se,
          Je,
          xt,
          lt = z.hasData(r) && z.get(r);
        if (!(!lt || !(U = lt.events))) {
          for (o = (o || '').match(Tt) || [''], V = o.length; V--; ) {
            if (((N = Wt.exec(o[V]) || []), (Se = xt = N[1]), (Je = (N[2] || '').split('.').sort()), !Se)) {
              for (Se in U) l.event.remove(r, Se + o[V], f, d, !0);
              continue;
            }
            for (
              ue = l.event.special[Se] || {},
                Se = (d ? ue.delegateType : ue.bindType) || Se,
                K = U[Se] || [],
                N = N[2] && new RegExp('(^|\\.)' + Je.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                E = M = K.length;
              M--;

            )
              (te = K[M]),
                (x || xt === te.origType) &&
                  (!f || f.guid === te.guid) &&
                  (!N || N.test(te.namespace)) &&
                  (!d || d === te.selector || (d === '**' && te.selector)) &&
                  (K.splice(M, 1), te.selector && K.delegateCount--, ue.remove && ue.remove.call(r, te));
            E &&
              !K.length &&
              ((!ue.teardown || ue.teardown.call(r, Je, lt.handle) === !1) && l.removeEvent(r, Se, lt.handle),
              delete U[Se]);
          }
          l.isEmptyObject(U) && z.remove(r, 'handle events');
        }
      },
      dispatch: function (r) {
        var o,
          f,
          d,
          x,
          M,
          E,
          N = new Array(arguments.length),
          U = l.event.fix(r),
          V = (z.get(this, 'events') || Object.create(null))[U.type] || [],
          te = l.event.special[U.type] || {};
        for (N[0] = U, o = 1; o < arguments.length; o++) N[o] = arguments[o];
        if (((U.delegateTarget = this), !(te.preDispatch && te.preDispatch.call(this, U) === !1))) {
          for (E = l.event.handlers.call(this, U, V), o = 0; (x = E[o++]) && !U.isPropagationStopped(); )
            for (U.currentTarget = x.elem, f = 0; (M = x.handlers[f++]) && !U.isImmediatePropagationStopped(); )
              (!U.rnamespace || M.namespace === !1 || U.rnamespace.test(M.namespace)) &&
                ((U.handleObj = M),
                (U.data = M.data),
                (d = ((l.event.special[M.origType] || {}).handle || M.handler).apply(x.elem, N)),
                d !== void 0 && (U.result = d) === !1 && (U.preventDefault(), U.stopPropagation()));
          return te.postDispatch && te.postDispatch.call(this, U), U.result;
        }
      },
      handlers: function (r, o) {
        var f,
          d,
          x,
          M,
          E,
          N = [],
          U = o.delegateCount,
          V = r.target;
        if (U && V.nodeType && !(r.type === 'click' && r.button >= 1)) {
          for (; V !== this; V = V.parentNode || this)
            if (V.nodeType === 1 && !(r.type === 'click' && V.disabled === !0)) {
              for (M = [], E = {}, f = 0; f < U; f++)
                (d = o[f]),
                  (x = d.selector + ' '),
                  E[x] === void 0 &&
                    (E[x] = d.needsContext ? l(x, this).index(V) > -1 : l.find(x, this, null, [V]).length),
                  E[x] && M.push(d);
              M.length && N.push({ elem: V, handlers: M });
            }
        }
        return (V = this), U < o.length && N.push({ elem: V, handlers: o.slice(U) }), N;
      },
      addProp: function (r, o) {
        Object.defineProperty(l.Event.prototype, r, {
          enumerable: !0,
          configurable: !0,
          get: b(o)
            ? function () {
                if (this.originalEvent) return o(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[r];
              },
          set: function (f) {
            Object.defineProperty(this, r, { enumerable: !0, configurable: !0, writable: !0, value: f });
          }
        });
      },
      fix: function (r) {
        return r[l.expando] ? r : new l.Event(r);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (r) {
            var o = this || r;
            return _e.test(o.type) && o.click && w(o, 'input') && kn(o, 'click', !0), !1;
          },
          trigger: function (r) {
            var o = this || r;
            return _e.test(o.type) && o.click && w(o, 'input') && kn(o, 'click'), !0;
          },
          _default: function (r) {
            var o = r.target;
            return (_e.test(o.type) && o.click && w(o, 'input') && z.get(o, 'click')) || w(o, 'a');
          }
        },
        beforeunload: {
          postDispatch: function (r) {
            r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result);
          }
        }
      }
    };
    function kn(r, o, f) {
      if (!f) {
        z.get(r, o) === void 0 && l.event.add(r, o, zn);
        return;
      }
      z.set(r, o, !1),
        l.event.add(r, o, {
          namespace: !1,
          handler: function (d) {
            var x,
              M = z.get(this, o);
            if (d.isTrigger & 1 && this[o]) {
              if (M) (l.event.special[o] || {}).delegateType && d.stopPropagation();
              else if (
                ((M = a.call(arguments)),
                z.set(this, o, M),
                this[o](),
                (x = z.get(this, o)),
                z.set(this, o, !1),
                M !== x)
              )
                return d.stopImmediatePropagation(), d.preventDefault(), x;
            } else
              M &&
                (z.set(this, o, l.event.trigger(M[0], M.slice(1), this)),
                d.stopPropagation(),
                (d.isImmediatePropagationStopped = zn));
          }
        });
    }
    (l.removeEvent = function (r, o, f) {
      r.removeEventListener && r.removeEventListener(o, f);
    }),
      (l.Event = function (r, o) {
        if (!(this instanceof l.Event)) return new l.Event(r, o);
        r && r.type
          ? ((this.originalEvent = r),
            (this.type = r.type),
            (this.isDefaultPrevented =
              r.defaultPrevented || (r.defaultPrevented === void 0 && r.returnValue === !1) ? zn : Gn),
            (this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target),
            (this.currentTarget = r.currentTarget),
            (this.relatedTarget = r.relatedTarget))
          : (this.type = r),
          o && l.extend(this, o),
          (this.timeStamp = (r && r.timeStamp) || Date.now()),
          (this[l.expando] = !0);
      }),
      (l.Event.prototype = {
        constructor: l.Event,
        isDefaultPrevented: Gn,
        isPropagationStopped: Gn,
        isImmediatePropagationStopped: Gn,
        isSimulated: !1,
        preventDefault: function () {
          var r = this.originalEvent;
          (this.isDefaultPrevented = zn), r && !this.isSimulated && r.preventDefault();
        },
        stopPropagation: function () {
          var r = this.originalEvent;
          (this.isPropagationStopped = zn), r && !this.isSimulated && r.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var r = this.originalEvent;
          (this.isImmediatePropagationStopped = zn),
            r && !this.isSimulated && r.stopImmediatePropagation(),
            this.stopPropagation();
        }
      }),
      l.each(
        {
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
          char: !0,
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
        },
        l.event.addProp
      ),
      l.each({ focus: 'focusin', blur: 'focusout' }, function (r, o) {
        function f(d) {
          if (m.documentMode) {
            var x = z.get(this, 'handle'),
              M = l.event.fix(d);
            (M.type = d.type === 'focusin' ? 'focus' : 'blur'),
              (M.isSimulated = !0),
              x(d),
              M.target === M.currentTarget && x(M);
          } else l.event.simulate(o, d.target, l.event.fix(d));
        }
        (l.event.special[r] = {
          setup: function () {
            var d;
            if ((kn(this, r, !0), m.documentMode))
              (d = z.get(this, o)), d || this.addEventListener(o, f), z.set(this, o, (d || 0) + 1);
            else return !1;
          },
          trigger: function () {
            return kn(this, r), !0;
          },
          teardown: function () {
            var d;
            if (m.documentMode)
              (d = z.get(this, o) - 1), d ? z.set(this, o, d) : (this.removeEventListener(o, f), z.remove(this, o));
            else return !1;
          },
          _default: function (d) {
            return z.get(d.target, r);
          },
          delegateType: o
        }),
          (l.event.special[o] = {
            setup: function () {
              var d = this.ownerDocument || this.document || this,
                x = m.documentMode ? this : d,
                M = z.get(x, o);
              M || (m.documentMode ? this.addEventListener(o, f) : d.addEventListener(r, f, !0)),
                z.set(x, o, (M || 0) + 1);
            },
            teardown: function () {
              var d = this.ownerDocument || this.document || this,
                x = m.documentMode ? this : d,
                M = z.get(x, o) - 1;
              M
                ? z.set(x, o, M)
                : (m.documentMode ? this.removeEventListener(o, f) : d.removeEventListener(r, f, !0), z.remove(x, o));
            }
          });
      }),
      l.each(
        { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
        function (r, o) {
          l.event.special[r] = {
            delegateType: o,
            bindType: o,
            handle: function (f) {
              var d,
                x = this,
                M = f.relatedTarget,
                E = f.handleObj;
              return (
                (!M || (M !== x && !l.contains(x, M))) &&
                  ((f.type = E.origType), (d = E.handler.apply(this, arguments)), (f.type = o)),
                d
              );
            }
          };
        }
      ),
      l.fn.extend({
        on: function (r, o, f, d) {
          return xr(this, r, o, f, d);
        },
        one: function (r, o, f, d) {
          return xr(this, r, o, f, d, 1);
        },
        off: function (r, o, f) {
          var d, x;
          if (r && r.preventDefault && r.handleObj)
            return (
              (d = r.handleObj),
              l(r.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler),
              this
            );
          if (typeof r == 'object') {
            for (x in r) this.off(x, o, r[x]);
            return this;
          }
          return (
            (o === !1 || typeof o == 'function') && ((f = o), (o = void 0)),
            f === !1 && (f = Gn),
            this.each(function () {
              l.event.remove(this, r, f, o);
            })
          );
        }
      });
    var jr = /<script|<style|<link/i,
      Ni = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Yr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Kr(r, o) {
      return (w(r, 'table') && w(o.nodeType !== 11 ? o : o.firstChild, 'tr') && l(r).children('tbody')[0]) || r;
    }
    function Ns(r) {
      return (r.type = (r.getAttribute('type') !== null) + '/' + r.type), r;
    }
    function Os(r) {
      return (r.type || '').slice(0, 5) === 'true/' ? (r.type = r.type.slice(5)) : r.removeAttribute('type'), r;
    }
    function L(r, o) {
      var f, d, x, M, E, N, U;
      if (o.nodeType === 1) {
        if (z.hasData(r) && ((M = z.get(r)), (U = M.events), U)) {
          z.remove(o, 'handle events');
          for (x in U) for (f = 0, d = U[x].length; f < d; f++) l.event.add(o, x, U[x][f]);
        }
        me.hasData(r) && ((E = me.access(r)), (N = l.extend({}, E)), me.set(o, N));
      }
    }
    function Y(r, o) {
      var f = o.nodeName.toLowerCase();
      f === 'input' && _e.test(r.type)
        ? (o.checked = r.checked)
        : (f === 'input' || f === 'textarea') && (o.defaultValue = r.defaultValue);
    }
    function re(r, o, f, d) {
      o = u(o);
      var x,
        M,
        E,
        N,
        U,
        V,
        te = 0,
        ue = r.length,
        K = ue - 1,
        Se = o[0],
        Je = b(Se);
      if (Je || (ue > 1 && typeof Se == 'string' && !T.checkClone && Ni.test(Se)))
        return r.each(function (xt) {
          var lt = r.eq(xt);
          Je && (o[0] = Se.call(this, xt, lt.html())), re(lt, o, f, d);
        });
      if (
        ue &&
        ((x = dn(o, r[0].ownerDocument, !1, r, d)), (M = x.firstChild), x.childNodes.length === 1 && (x = M), M || d)
      ) {
        for (E = l.map(at(x, 'script'), Ns), N = E.length; te < ue; te++)
          (U = x), te !== K && ((U = l.clone(U, !0, !0)), N && l.merge(E, at(U, 'script'))), f.call(r[te], U, te);
        if (N)
          for (V = E[E.length - 1].ownerDocument, l.map(E, Os), te = 0; te < N; te++)
            (U = E[te]),
              ot.test(U.type || '') &&
                !z.access(U, 'globalEval') &&
                l.contains(V, U) &&
                (U.src && (U.type || '').toLowerCase() !== 'module'
                  ? l._evalUrl && !U.noModule && l._evalUrl(U.src, { nonce: U.nonce || U.getAttribute('nonce') }, V)
                  : R(U.textContent.replace(Yr, ''), U, V));
      }
      return r;
    }
    function $(r, o, f) {
      for (var d, x = o ? l.filter(o, r) : r, M = 0; (d = x[M]) != null; M++)
        !f && d.nodeType === 1 && l.cleanData(at(d)),
          d.parentNode && (f && Te(d) && qt(at(d, 'script')), d.parentNode.removeChild(d));
      return r;
    }
    l.extend({
      htmlPrefilter: function (r) {
        return r;
      },
      clone: function (r, o, f) {
        var d,
          x,
          M,
          E,
          N = r.cloneNode(!0),
          U = Te(r);
        if (!T.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !l.isXMLDoc(r))
          for (E = at(N), M = at(r), d = 0, x = M.length; d < x; d++) Y(M[d], E[d]);
        if (o)
          if (f) for (M = M || at(r), E = E || at(N), d = 0, x = M.length; d < x; d++) L(M[d], E[d]);
          else L(r, N);
        return (E = at(N, 'script')), E.length > 0 && qt(E, !U && at(r, 'script')), N;
      },
      cleanData: function (r) {
        for (var o, f, d, x = l.event.special, M = 0; (f = r[M]) !== void 0; M++)
          if (P(f)) {
            if ((o = f[z.expando])) {
              if (o.events) for (d in o.events) x[d] ? l.event.remove(f, d) : l.removeEvent(f, d, o.handle);
              f[z.expando] = void 0;
            }
            f[me.expando] && (f[me.expando] = void 0);
          }
      }
    }),
      l.fn.extend({
        detach: function (r) {
          return $(this, r, !0);
        },
        remove: function (r) {
          return $(this, r);
        },
        text: function (r) {
          return je(
            this,
            function (o) {
              return o === void 0
                ? l.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = o);
                  });
            },
            null,
            r,
            arguments.length
          );
        },
        append: function () {
          return re(this, arguments, function (r) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var o = Kr(this, r);
              o.appendChild(r);
            }
          });
        },
        prepend: function () {
          return re(this, arguments, function (r) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var o = Kr(this, r);
              o.insertBefore(r, o.firstChild);
            }
          });
        },
        before: function () {
          return re(this, arguments, function (r) {
            this.parentNode && this.parentNode.insertBefore(r, this);
          });
        },
        after: function () {
          return re(this, arguments, function (r) {
            this.parentNode && this.parentNode.insertBefore(r, this.nextSibling);
          });
        },
        empty: function () {
          for (var r, o = 0; (r = this[o]) != null; o++)
            r.nodeType === 1 && (l.cleanData(at(r, !1)), (r.textContent = ''));
          return this;
        },
        clone: function (r, o) {
          return (
            (r = r ?? !1),
            (o = o ?? r),
            this.map(function () {
              return l.clone(this, r, o);
            })
          );
        },
        html: function (r) {
          return je(
            this,
            function (o) {
              var f = this[0] || {},
                d = 0,
                x = this.length;
              if (o === void 0 && f.nodeType === 1) return f.innerHTML;
              if (typeof o == 'string' && !jr.test(o) && !st[(be.exec(o) || ['', ''])[1].toLowerCase()]) {
                o = l.htmlPrefilter(o);
                try {
                  for (; d < x; d++)
                    (f = this[d] || {}), f.nodeType === 1 && (l.cleanData(at(f, !1)), (f.innerHTML = o));
                  f = 0;
                } catch {}
              }
              f && this.empty().append(o);
            },
            null,
            r,
            arguments.length
          );
        },
        replaceWith: function () {
          var r = [];
          return re(
            this,
            arguments,
            function (o) {
              var f = this.parentNode;
              l.inArray(this, r) < 0 && (l.cleanData(at(this)), f && f.replaceChild(o, this));
            },
            r
          );
        }
      }),
      l.each(
        {
          appendTo: 'append',
          prependTo: 'prepend',
          insertBefore: 'before',
          insertAfter: 'after',
          replaceAll: 'replaceWith'
        },
        function (r, o) {
          l.fn[r] = function (f) {
            for (var d, x = [], M = l(f), E = M.length - 1, N = 0; N <= E; N++)
              (d = N === E ? this : this.clone(!0)), l(M[N])[o](d), c.apply(x, d.get());
            return this.pushStack(x);
          };
        }
      );
    var ae = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
      Ne = /^--/,
      He = function (r) {
        var o = r.ownerDocument.defaultView;
        return (!o || !o.opener) && (o = e), o.getComputedStyle(r);
      },
      Ye = function (r, o, f) {
        var d,
          x,
          M = {};
        for (x in o) (M[x] = r.style[x]), (r.style[x] = o[x]);
        d = f.call(r);
        for (x in o) r.style[x] = M[x];
        return d;
      },
      $e = new RegExp(fe.join('|'), 'i');
    (function () {
      function r() {
        if (V) {
          (U.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
            (V.style.cssText =
              'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
            we.appendChild(U).appendChild(V);
          var te = e.getComputedStyle(V);
          (f = te.top !== '1%'),
            (N = o(te.marginLeft) === 12),
            (V.style.right = '60%'),
            (M = o(te.right) === 36),
            (d = o(te.width) === 36),
            (V.style.position = 'absolute'),
            (x = o(V.offsetWidth / 3) === 12),
            we.removeChild(U),
            (V = null);
        }
      }
      function o(te) {
        return Math.round(parseFloat(te));
      }
      var f,
        d,
        x,
        M,
        E,
        N,
        U = m.createElement('div'),
        V = m.createElement('div');
      V.style &&
        ((V.style.backgroundClip = 'content-box'),
        (V.cloneNode(!0).style.backgroundClip = ''),
        (T.clearCloneStyle = V.style.backgroundClip === 'content-box'),
        l.extend(T, {
          boxSizingReliable: function () {
            return r(), d;
          },
          pixelBoxStyles: function () {
            return r(), M;
          },
          pixelPosition: function () {
            return r(), f;
          },
          reliableMarginLeft: function () {
            return r(), N;
          },
          scrollboxSize: function () {
            return r(), x;
          },
          reliableTrDimensions: function () {
            var te, ue, K, Se;
            return (
              E == null &&
                ((te = m.createElement('table')),
                (ue = m.createElement('tr')),
                (K = m.createElement('div')),
                (te.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
                (ue.style.cssText = 'box-sizing:content-box;border:1px solid'),
                (ue.style.height = '1px'),
                (K.style.height = '9px'),
                (K.style.display = 'block'),
                we.appendChild(te).appendChild(ue).appendChild(K),
                (Se = e.getComputedStyle(ue)),
                (E =
                  parseInt(Se.height, 10) + parseInt(Se.borderTopWidth, 10) + parseInt(Se.borderBottomWidth, 10) ===
                  ue.offsetHeight),
                we.removeChild(te)),
              E
            );
          }
        }));
    })();
    function nt(r, o, f) {
      var d,
        x,
        M,
        E,
        N = Ne.test(o),
        U = r.style;
      return (
        (f = f || He(r)),
        f &&
          ((E = f.getPropertyValue(o) || f[o]),
          N && E && (E = E.replace(ne, '$1') || void 0),
          E === '' && !Te(r) && (E = l.style(r, o)),
          !T.pixelBoxStyles() &&
            ae.test(E) &&
            $e.test(o) &&
            ((d = U.width),
            (x = U.minWidth),
            (M = U.maxWidth),
            (U.minWidth = U.maxWidth = U.width = E),
            (E = f.width),
            (U.width = d),
            (U.minWidth = x),
            (U.maxWidth = M))),
        E !== void 0 ? E + '' : E
      );
    }
    function qe(r, o) {
      return {
        get: function () {
          if (r()) {
            delete this.get;
            return;
          }
          return (this.get = o).apply(this, arguments);
        }
      };
    }
    var it = ['Webkit', 'Moz', 'ms'],
      Rt = m.createElement('div').style,
      Lt = {};
    function ln(r) {
      for (var o = r[0].toUpperCase() + r.slice(1), f = it.length; f--; ) if (((r = it[f] + o), r in Rt)) return r;
    }
    function pn(r) {
      var o = l.cssProps[r] || Lt[r];
      return o || (r in Rt ? r : (Lt[r] = ln(r) || r));
    }
    var Ut = /^(none|table(?!-c[ea]).+)/,
      ft = { position: 'absolute', visibility: 'hidden', display: 'block' },
      Oi = { letterSpacing: '0', fontWeight: '400' };
    function Dt(r, o, f) {
      var d = B.exec(o);
      return d ? Math.max(0, d[2] - (f || 0)) + (d[3] || 'px') : o;
    }
    function Sn(r, o, f, d, x, M) {
      var E = o === 'width' ? 1 : 0,
        N = 0,
        U = 0,
        V = 0;
      if (f === (d ? 'border' : 'content')) return 0;
      for (; E < 4; E += 2)
        f === 'margin' && (V += l.css(r, f + fe[E], !0, x)),
          d
            ? (f === 'content' && (U -= l.css(r, 'padding' + fe[E], !0, x)),
              f !== 'margin' && (U -= l.css(r, 'border' + fe[E] + 'Width', !0, x)))
            : ((U += l.css(r, 'padding' + fe[E], !0, x)),
              f !== 'padding'
                ? (U += l.css(r, 'border' + fe[E] + 'Width', !0, x))
                : (N += l.css(r, 'border' + fe[E] + 'Width', !0, x)));
      return (
        !d &&
          M >= 0 &&
          (U += Math.max(0, Math.ceil(r['offset' + o[0].toUpperCase() + o.slice(1)] - M - U - N - 0.5)) || 0),
        U + V
      );
    }
    function Mr(r, o, f) {
      var d = He(r),
        x = !T.boxSizingReliable() || f,
        M = x && l.css(r, 'boxSizing', !1, d) === 'border-box',
        E = M,
        N = nt(r, o, d),
        U = 'offset' + o[0].toUpperCase() + o.slice(1);
      if (ae.test(N)) {
        if (!f) return N;
        N = 'auto';
      }
      return (
        ((!T.boxSizingReliable() && M) ||
          (!T.reliableTrDimensions() && w(r, 'tr')) ||
          N === 'auto' ||
          (!parseFloat(N) && l.css(r, 'display', !1, d) === 'inline')) &&
          r.getClientRects().length &&
          ((M = l.css(r, 'boxSizing', !1, d) === 'border-box'), (E = U in r), E && (N = r[U])),
        (N = parseFloat(N) || 0),
        N + Sn(r, o, f || (M ? 'border' : 'content'), E, d, N) + 'px'
      );
    }
    l.extend({
      cssHooks: {
        opacity: {
          get: function (r, o) {
            if (o) {
              var f = nt(r, 'opacity');
              return f === '' ? '1' : f;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageSlice: !0,
        columnCount: !0,
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
        scale: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0
      },
      cssProps: {},
      style: function (r, o, f, d) {
        if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
          var x,
            M,
            E,
            N = yt(o),
            U = Ne.test(o),
            V = r.style;
          if ((U || (o = pn(N)), (E = l.cssHooks[o] || l.cssHooks[N]), f !== void 0)) {
            if (
              ((M = typeof f),
              M === 'string' && (x = B.exec(f)) && x[1] && ((f = ut(r, o, x)), (M = 'number')),
              f == null || f !== f)
            )
              return;
            M === 'number' && !U && (f += (x && x[3]) || (l.cssNumber[N] ? '' : 'px')),
              !T.clearCloneStyle && f === '' && o.indexOf('background') === 0 && (V[o] = 'inherit'),
              (!E || !('set' in E) || (f = E.set(r, f, d)) !== void 0) && (U ? V.setProperty(o, f) : (V[o] = f));
          } else return E && 'get' in E && (x = E.get(r, !1, d)) !== void 0 ? x : V[o];
        }
      },
      css: function (r, o, f, d) {
        var x,
          M,
          E,
          N = yt(o),
          U = Ne.test(o);
        return (
          U || (o = pn(N)),
          (E = l.cssHooks[o] || l.cssHooks[N]),
          E && 'get' in E && (x = E.get(r, !0, f)),
          x === void 0 && (x = nt(r, o, d)),
          x === 'normal' && o in Oi && (x = Oi[o]),
          f === '' || f ? ((M = parseFloat(x)), f === !0 || isFinite(M) ? M || 0 : x) : x
        );
      }
    }),
      l.each(['height', 'width'], function (r, o) {
        l.cssHooks[o] = {
          get: function (f, d, x) {
            if (d)
              return Ut.test(l.css(f, 'display')) && (!f.getClientRects().length || !f.getBoundingClientRect().width)
                ? Ye(f, ft, function () {
                    return Mr(f, o, x);
                  })
                : Mr(f, o, x);
          },
          set: function (f, d, x) {
            var M,
              E = He(f),
              N = !T.scrollboxSize() && E.position === 'absolute',
              U = N || x,
              V = U && l.css(f, 'boxSizing', !1, E) === 'border-box',
              te = x ? Sn(f, o, x, V, E) : 0;
            return (
              V &&
                N &&
                (te -= Math.ceil(
                  f['offset' + o[0].toUpperCase() + o.slice(1)] - parseFloat(E[o]) - Sn(f, o, 'border', !1, E) - 0.5
                )),
              te && (M = B.exec(d)) && (M[3] || 'px') !== 'px' && ((f.style[o] = d), (d = l.css(f, o))),
              Dt(f, d, te)
            );
          }
        };
      }),
      (l.cssHooks.marginLeft = qe(T.reliableMarginLeft, function (r, o) {
        if (o)
          return (
            (parseFloat(nt(r, 'marginLeft')) ||
              r.getBoundingClientRect().left -
                Ye(r, { marginLeft: 0 }, function () {
                  return r.getBoundingClientRect().left;
                })) + 'px'
          );
      })),
      l.each({ margin: '', padding: '', border: 'Width' }, function (r, o) {
        (l.cssHooks[r + o] = {
          expand: function (f) {
            for (var d = 0, x = {}, M = typeof f == 'string' ? f.split(' ') : [f]; d < 4; d++)
              x[r + fe[d] + o] = M[d] || M[d - 2] || M[0];
            return x;
          }
        }),
          r !== 'margin' && (l.cssHooks[r + o].set = Dt);
      }),
      l.fn.extend({
        css: function (r, o) {
          return je(
            this,
            function (f, d, x) {
              var M,
                E,
                N = {},
                U = 0;
              if (Array.isArray(d)) {
                for (M = He(f), E = d.length; U < E; U++) N[d[U]] = l.css(f, d[U], !1, M);
                return N;
              }
              return x !== void 0 ? l.style(f, d, x) : l.css(f, d);
            },
            r,
            o,
            arguments.length > 1
          );
        }
      });
    function Ot(r, o, f, d, x) {
      return new Ot.prototype.init(r, o, f, d, x);
    }
    (l.Tween = Ot),
      (Ot.prototype = {
        constructor: Ot,
        init: function (r, o, f, d, x, M) {
          (this.elem = r),
            (this.prop = f),
            (this.easing = x || l.easing._default),
            (this.options = o),
            (this.start = this.now = this.cur()),
            (this.end = d),
            (this.unit = M || (l.cssNumber[f] ? '' : 'px'));
        },
        cur: function () {
          var r = Ot.propHooks[this.prop];
          return r && r.get ? r.get(this) : Ot.propHooks._default.get(this);
        },
        run: function (r) {
          var o,
            f = Ot.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = o = l.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration))
              : (this.pos = o = r),
            (this.now = (this.end - this.start) * o + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            f && f.set ? f.set(this) : Ot.propHooks._default.set(this),
            this
          );
        }
      }),
      (Ot.prototype.init.prototype = Ot.prototype),
      (Ot.propHooks = {
        _default: {
          get: function (r) {
            var o;
            return r.elem.nodeType !== 1 || (r.elem[r.prop] != null && r.elem.style[r.prop] == null)
              ? r.elem[r.prop]
              : ((o = l.css(r.elem, r.prop, '')), !o || o === 'auto' ? 0 : o);
          },
          set: function (r) {
            l.fx.step[r.prop]
              ? l.fx.step[r.prop](r)
              : r.elem.nodeType === 1 && (l.cssHooks[r.prop] || r.elem.style[pn(r.prop)] != null)
              ? l.style(r.elem, r.prop, r.now + r.unit)
              : (r.elem[r.prop] = r.now);
          }
        }
      }),
      (Ot.propHooks.scrollTop = Ot.propHooks.scrollLeft =
        {
          set: function (r) {
            r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now);
          }
        }),
      (l.easing = {
        linear: function (r) {
          return r;
        },
        swing: function (r) {
          return 0.5 - Math.cos(r * Math.PI) / 2;
        },
        _default: 'swing'
      }),
      (l.fx = Ot.prototype.init),
      (l.fx.step = {});
    var Pn,
      Ft,
      Vn = /^(?:toggle|show|hide)$/,
      Sr = /queueHooks$/;
    function jt() {
      Ft &&
        (m.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(jt) : e.setTimeout(jt, l.fx.interval),
        l.fx.tick());
    }
    function Fi() {
      return (
        e.setTimeout(function () {
          Pn = void 0;
        }),
        (Pn = Date.now())
      );
    }
    function Bi(r, o) {
      var f,
        d = 0,
        x = { height: r };
      for (o = o ? 1 : 0; d < 4; d += 2 - o) (f = fe[d]), (x['margin' + f] = x['padding' + f] = r);
      return o && (x.opacity = x.width = r), x;
    }
    function yr(r, o, f) {
      for (var d, x = (yn.tweeners[o] || []).concat(yn.tweeners['*']), M = 0, E = x.length; M < E; M++)
        if ((d = x[M].call(f, o, r))) return d;
    }
    function Sc(r, o, f) {
      var d,
        x,
        M,
        E,
        N,
        U,
        V,
        te,
        ue = 'width' in o || 'height' in o,
        K = this,
        Se = {},
        Je = r.style,
        xt = r.nodeType && Xe(r),
        lt = z.get(r, 'fxshow');
      f.queue ||
        ((E = l._queueHooks(r, 'fx')),
        E.unqueued == null &&
          ((E.unqueued = 0),
          (N = E.empty.fire),
          (E.empty.fire = function () {
            E.unqueued || N();
          })),
        E.unqueued++,
        K.always(function () {
          K.always(function () {
            E.unqueued--, l.queue(r, 'fx').length || E.empty.fire();
          });
        }));
      for (d in o)
        if (((x = o[d]), Vn.test(x))) {
          if ((delete o[d], (M = M || x === 'toggle'), x === (xt ? 'hide' : 'show')))
            if (x === 'show' && lt && lt[d] !== void 0) xt = !0;
            else continue;
          Se[d] = (lt && lt[d]) || l.style(r, d);
        }
      if (((U = !l.isEmptyObject(o)), !(!U && l.isEmptyObject(Se)))) {
        ue &&
          r.nodeType === 1 &&
          ((f.overflow = [Je.overflow, Je.overflowX, Je.overflowY]),
          (V = lt && lt.display),
          V == null && (V = z.get(r, 'display')),
          (te = l.css(r, 'display')),
          te === 'none' &&
            (V ? (te = V) : (Z([r], !0), (V = r.style.display || V), (te = l.css(r, 'display')), Z([r]))),
          (te === 'inline' || (te === 'inline-block' && V != null)) &&
            l.css(r, 'float') === 'none' &&
            (U ||
              (K.done(function () {
                Je.display = V;
              }),
              V == null && ((te = Je.display), (V = te === 'none' ? '' : te))),
            (Je.display = 'inline-block'))),
          f.overflow &&
            ((Je.overflow = 'hidden'),
            K.always(function () {
              (Je.overflow = f.overflow[0]), (Je.overflowX = f.overflow[1]), (Je.overflowY = f.overflow[2]);
            })),
          (U = !1);
        for (d in Se)
          U ||
            (lt ? 'hidden' in lt && (xt = lt.hidden) : (lt = z.access(r, 'fxshow', { display: V })),
            M && (lt.hidden = !xt),
            xt && Z([r], !0),
            K.done(function () {
              xt || Z([r]), z.remove(r, 'fxshow');
              for (d in Se) l.style(r, d, Se[d]);
            })),
            (U = yr(xt ? lt[d] : 0, d, K)),
            d in lt || ((lt[d] = U.start), xt && ((U.end = U.start), (U.start = 0)));
      }
    }
    function yc(r, o) {
      var f, d, x, M, E;
      for (f in r)
        if (
          ((d = yt(f)),
          (x = o[d]),
          (M = r[f]),
          Array.isArray(M) && ((x = M[1]), (M = r[f] = M[0])),
          f !== d && ((r[d] = M), delete r[f]),
          (E = l.cssHooks[d]),
          E && 'expand' in E)
        ) {
          (M = E.expand(M)), delete r[d];
          for (f in M) f in r || ((r[f] = M[f]), (o[f] = x));
        } else o[d] = x;
    }
    function yn(r, o, f) {
      var d,
        x,
        M = 0,
        E = yn.prefilters.length,
        N = l.Deferred().always(function () {
          delete U.elem;
        }),
        U = function () {
          if (x) return !1;
          for (
            var ue = Pn || Fi(),
              K = Math.max(0, V.startTime + V.duration - ue),
              Se = K / V.duration || 0,
              Je = 1 - Se,
              xt = 0,
              lt = V.tweens.length;
            xt < lt;
            xt++
          )
            V.tweens[xt].run(Je);
          return (
            N.notifyWith(r, [V, Je, K]),
            Je < 1 && lt ? K : (lt || N.notifyWith(r, [V, 1, 0]), N.resolveWith(r, [V]), !1)
          );
        },
        V = N.promise({
          elem: r,
          props: l.extend({}, o),
          opts: l.extend(!0, { specialEasing: {}, easing: l.easing._default }, f),
          originalProperties: o,
          originalOptions: f,
          startTime: Pn || Fi(),
          duration: f.duration,
          tweens: [],
          createTween: function (ue, K) {
            var Se = l.Tween(r, V.opts, ue, K, V.opts.specialEasing[ue] || V.opts.easing);
            return V.tweens.push(Se), Se;
          },
          stop: function (ue) {
            var K = 0,
              Se = ue ? V.tweens.length : 0;
            if (x) return this;
            for (x = !0; K < Se; K++) V.tweens[K].run(1);
            return ue ? (N.notifyWith(r, [V, 1, 0]), N.resolveWith(r, [V, ue])) : N.rejectWith(r, [V, ue]), this;
          }
        }),
        te = V.props;
      for (yc(te, V.opts.specialEasing); M < E; M++)
        if (((d = yn.prefilters[M].call(V, r, te, V.opts)), d))
          return b(d.stop) && (l._queueHooks(V.elem, V.opts.queue).stop = d.stop.bind(d)), d;
      return (
        l.map(te, yr, V),
        b(V.opts.start) && V.opts.start.call(r, V),
        V.progress(V.opts.progress).done(V.opts.done, V.opts.complete).fail(V.opts.fail).always(V.opts.always),
        l.fx.timer(l.extend(U, { elem: r, anim: V, queue: V.opts.queue })),
        V
      );
    }
    (l.Animation = l.extend(yn, {
      tweeners: {
        '*': [
          function (r, o) {
            var f = this.createTween(r, o);
            return ut(f.elem, r, B.exec(o), f), f;
          }
        ]
      },
      tweener: function (r, o) {
        b(r) ? ((o = r), (r = ['*'])) : (r = r.match(Tt));
        for (var f, d = 0, x = r.length; d < x; d++)
          (f = r[d]), (yn.tweeners[f] = yn.tweeners[f] || []), yn.tweeners[f].unshift(o);
      },
      prefilters: [Sc],
      prefilter: function (r, o) {
        o ? yn.prefilters.unshift(r) : yn.prefilters.push(r);
      }
    })),
      (l.speed = function (r, o, f) {
        var d =
          r && typeof r == 'object'
            ? l.extend({}, r)
            : { complete: f || (!f && o) || (b(r) && r), duration: r, easing: (f && o) || (o && !b(o) && o) };
        return (
          l.fx.off
            ? (d.duration = 0)
            : typeof d.duration != 'number' &&
              (d.duration in l.fx.speeds
                ? (d.duration = l.fx.speeds[d.duration])
                : (d.duration = l.fx.speeds._default)),
          (d.queue == null || d.queue === !0) && (d.queue = 'fx'),
          (d.old = d.complete),
          (d.complete = function () {
            b(d.old) && d.old.call(this), d.queue && l.dequeue(this, d.queue);
          }),
          d
        );
      }),
      l.fn.extend({
        fadeTo: function (r, o, f, d) {
          return this.filter(Xe).css('opacity', 0).show().end().animate({ opacity: o }, r, f, d);
        },
        animate: function (r, o, f, d) {
          var x = l.isEmptyObject(r),
            M = l.speed(o, f, d),
            E = function () {
              var N = yn(this, l.extend({}, r), M);
              (x || z.get(this, 'finish')) && N.stop(!0);
            };
          return (E.finish = E), x || M.queue === !1 ? this.each(E) : this.queue(M.queue, E);
        },
        stop: function (r, o, f) {
          var d = function (x) {
            var M = x.stop;
            delete x.stop, M(f);
          };
          return (
            typeof r != 'string' && ((f = o), (o = r), (r = void 0)),
            o && this.queue(r || 'fx', []),
            this.each(function () {
              var x = !0,
                M = r != null && r + 'queueHooks',
                E = l.timers,
                N = z.get(this);
              if (M) N[M] && N[M].stop && d(N[M]);
              else for (M in N) N[M] && N[M].stop && Sr.test(M) && d(N[M]);
              for (M = E.length; M--; )
                E[M].elem === this && (r == null || E[M].queue === r) && (E[M].anim.stop(f), (x = !1), E.splice(M, 1));
              (x || !f) && l.dequeue(this, r);
            })
          );
        },
        finish: function (r) {
          return (
            r !== !1 && (r = r || 'fx'),
            this.each(function () {
              var o,
                f = z.get(this),
                d = f[r + 'queue'],
                x = f[r + 'queueHooks'],
                M = l.timers,
                E = d ? d.length : 0;
              for (f.finish = !0, l.queue(this, r, []), x && x.stop && x.stop.call(this, !0), o = M.length; o--; )
                M[o].elem === this && M[o].queue === r && (M[o].anim.stop(!0), M.splice(o, 1));
              for (o = 0; o < E; o++) d[o] && d[o].finish && d[o].finish.call(this);
              delete f.finish;
            })
          );
        }
      }),
      l.each(['toggle', 'show', 'hide'], function (r, o) {
        var f = l.fn[o];
        l.fn[o] = function (d, x, M) {
          return d == null || typeof d == 'boolean' ? f.apply(this, arguments) : this.animate(Bi(o, !0), d, x, M);
        };
      }),
      l.each(
        {
          slideDown: Bi('show'),
          slideUp: Bi('hide'),
          slideToggle: Bi('toggle'),
          fadeIn: { opacity: 'show' },
          fadeOut: { opacity: 'hide' },
          fadeToggle: { opacity: 'toggle' }
        },
        function (r, o) {
          l.fn[r] = function (f, d, x) {
            return this.animate(o, f, d, x);
          };
        }
      ),
      (l.timers = []),
      (l.fx.tick = function () {
        var r,
          o = 0,
          f = l.timers;
        for (Pn = Date.now(); o < f.length; o++) (r = f[o]), !r() && f[o] === r && f.splice(o--, 1);
        f.length || l.fx.stop(), (Pn = void 0);
      }),
      (l.fx.timer = function (r) {
        l.timers.push(r), l.fx.start();
      }),
      (l.fx.interval = 13),
      (l.fx.start = function () {
        Ft || ((Ft = !0), jt());
      }),
      (l.fx.stop = function () {
        Ft = null;
      }),
      (l.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (l.fn.delay = function (r, o) {
        return (
          (r = (l.fx && l.fx.speeds[r]) || r),
          (o = o || 'fx'),
          this.queue(o, function (f, d) {
            var x = e.setTimeout(f, r);
            d.stop = function () {
              e.clearTimeout(x);
            };
          })
        );
      }),
      (function () {
        var r = m.createElement('input'),
          o = m.createElement('select'),
          f = o.appendChild(m.createElement('option'));
        (r.type = 'checkbox'),
          (T.checkOn = r.value !== ''),
          (T.optSelected = f.selected),
          (r = m.createElement('input')),
          (r.value = 't'),
          (r.type = 'radio'),
          (T.radioValue = r.value === 't');
      })();
    var $a,
      Er = l.expr.attrHandle;
    l.fn.extend({
      attr: function (r, o) {
        return je(this, l.attr, r, o, arguments.length > 1);
      },
      removeAttr: function (r) {
        return this.each(function () {
          l.removeAttr(this, r);
        });
      }
    }),
      l.extend({
        attr: function (r, o, f) {
          var d,
            x,
            M = r.nodeType;
          if (!(M === 3 || M === 8 || M === 2)) {
            if (typeof r.getAttribute > 'u') return l.prop(r, o, f);
            if (
              ((M !== 1 || !l.isXMLDoc(r)) &&
                (x = l.attrHooks[o.toLowerCase()] || (l.expr.match.bool.test(o) ? $a : void 0)),
              f !== void 0)
            ) {
              if (f === null) {
                l.removeAttr(r, o);
                return;
              }
              return x && 'set' in x && (d = x.set(r, f, o)) !== void 0 ? d : (r.setAttribute(o, f + ''), f);
            }
            return x && 'get' in x && (d = x.get(r, o)) !== null ? d : ((d = l.find.attr(r, o)), d ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function (r, o) {
              if (!T.radioValue && o === 'radio' && w(r, 'input')) {
                var f = r.value;
                return r.setAttribute('type', o), f && (r.value = f), o;
              }
            }
          }
        },
        removeAttr: function (r, o) {
          var f,
            d = 0,
            x = o && o.match(Tt);
          if (x && r.nodeType === 1) for (; (f = x[d++]); ) r.removeAttribute(f);
        }
      }),
      ($a = {
        set: function (r, o, f) {
          return o === !1 ? l.removeAttr(r, f) : r.setAttribute(f, f), f;
        }
      }),
      l.each(l.expr.match.bool.source.match(/\w+/g), function (r, o) {
        var f = Er[o] || l.find.attr;
        Er[o] = function (d, x, M) {
          var E,
            N,
            U = x.toLowerCase();
          return M || ((N = Er[U]), (Er[U] = E), (E = f(d, x, M) != null ? U : null), (Er[U] = N)), E;
        };
      });
    var Ec = /^(?:input|select|textarea|button)$/i,
      Tc = /^(?:a|area)$/i;
    l.fn.extend({
      prop: function (r, o) {
        return je(this, l.prop, r, o, arguments.length > 1);
      },
      removeProp: function (r) {
        return this.each(function () {
          delete this[l.propFix[r] || r];
        });
      }
    }),
      l.extend({
        prop: function (r, o, f) {
          var d,
            x,
            M = r.nodeType;
          if (!(M === 3 || M === 8 || M === 2))
            return (
              (M !== 1 || !l.isXMLDoc(r)) && ((o = l.propFix[o] || o), (x = l.propHooks[o])),
              f !== void 0
                ? x && 'set' in x && (d = x.set(r, f, o)) !== void 0
                  ? d
                  : (r[o] = f)
                : x && 'get' in x && (d = x.get(r, o)) !== null
                ? d
                : r[o]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (r) {
              var o = l.find.attr(r, 'tabindex');
              return o ? parseInt(o, 10) : Ec.test(r.nodeName) || (Tc.test(r.nodeName) && r.href) ? 0 : -1;
            }
          }
        },
        propFix: { for: 'htmlFor', class: 'className' }
      }),
      T.optSelected ||
        (l.propHooks.selected = {
          get: function (r) {
            var o = r.parentNode;
            return o && o.parentNode && o.parentNode.selectedIndex, null;
          },
          set: function (r) {
            var o = r.parentNode;
            o && (o.selectedIndex, o.parentNode && o.parentNode.selectedIndex);
          }
        }),
      l.each(
        [
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable'
        ],
        function () {
          l.propFix[this.toLowerCase()] = this;
        }
      );
    function gi(r) {
      var o = r.match(Tt) || [];
      return o.join(' ');
    }
    function _i(r) {
      return (r.getAttribute && r.getAttribute('class')) || '';
    }
    function Fs(r) {
      return Array.isArray(r) ? r : typeof r == 'string' ? r.match(Tt) || [] : [];
    }
    l.fn.extend({
      addClass: function (r) {
        var o, f, d, x, M, E;
        return b(r)
          ? this.each(function (N) {
              l(this).addClass(r.call(this, N, _i(this)));
            })
          : ((o = Fs(r)),
            o.length
              ? this.each(function () {
                  if (((d = _i(this)), (f = this.nodeType === 1 && ' ' + gi(d) + ' '), f)) {
                    for (M = 0; M < o.length; M++) (x = o[M]), f.indexOf(' ' + x + ' ') < 0 && (f += x + ' ');
                    (E = gi(f)), d !== E && this.setAttribute('class', E);
                  }
                })
              : this);
      },
      removeClass: function (r) {
        var o, f, d, x, M, E;
        return b(r)
          ? this.each(function (N) {
              l(this).removeClass(r.call(this, N, _i(this)));
            })
          : arguments.length
          ? ((o = Fs(r)),
            o.length
              ? this.each(function () {
                  if (((d = _i(this)), (f = this.nodeType === 1 && ' ' + gi(d) + ' '), f)) {
                    for (M = 0; M < o.length; M++)
                      for (x = o[M]; f.indexOf(' ' + x + ' ') > -1; ) f = f.replace(' ' + x + ' ', ' ');
                    (E = gi(f)), d !== E && this.setAttribute('class', E);
                  }
                })
              : this)
          : this.attr('class', '');
      },
      toggleClass: function (r, o) {
        var f,
          d,
          x,
          M,
          E = typeof r,
          N = E === 'string' || Array.isArray(r);
        return b(r)
          ? this.each(function (U) {
              l(this).toggleClass(r.call(this, U, _i(this), o), o);
            })
          : typeof o == 'boolean' && N
          ? o
            ? this.addClass(r)
            : this.removeClass(r)
          : ((f = Fs(r)),
            this.each(function () {
              if (N)
                for (M = l(this), x = 0; x < f.length; x++)
                  (d = f[x]), M.hasClass(d) ? M.removeClass(d) : M.addClass(d);
              else
                (r === void 0 || E === 'boolean') &&
                  ((d = _i(this)),
                  d && z.set(this, '__className__', d),
                  this.setAttribute &&
                    this.setAttribute('class', d || r === !1 ? '' : z.get(this, '__className__') || ''));
            }));
      },
      hasClass: function (r) {
        var o,
          f,
          d = 0;
        for (o = ' ' + r + ' '; (f = this[d++]); )
          if (f.nodeType === 1 && (' ' + gi(_i(f)) + ' ').indexOf(o) > -1) return !0;
        return !1;
      }
    });
    var bc = /\r/g;
    l.fn.extend({
      val: function (r) {
        var o,
          f,
          d,
          x = this[0];
        return arguments.length
          ? ((d = b(r)),
            this.each(function (M) {
              var E;
              this.nodeType === 1 &&
                (d ? (E = r.call(this, M, l(this).val())) : (E = r),
                E == null
                  ? (E = '')
                  : typeof E == 'number'
                  ? (E += '')
                  : Array.isArray(E) &&
                    (E = l.map(E, function (N) {
                      return N == null ? '' : N + '';
                    })),
                (o = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()]),
                (!o || !('set' in o) || o.set(this, E, 'value') === void 0) && (this.value = E));
            }))
          : x
          ? ((o = l.valHooks[x.type] || l.valHooks[x.nodeName.toLowerCase()]),
            o && 'get' in o && (f = o.get(x, 'value')) !== void 0
              ? f
              : ((f = x.value), typeof f == 'string' ? f.replace(bc, '') : f ?? ''))
          : void 0;
      }
    }),
      l.extend({
        valHooks: {
          option: {
            get: function (r) {
              var o = l.find.attr(r, 'value');
              return o ?? gi(l.text(r));
            }
          },
          select: {
            get: function (r) {
              var o,
                f,
                d,
                x = r.options,
                M = r.selectedIndex,
                E = r.type === 'select-one',
                N = E ? null : [],
                U = E ? M + 1 : x.length;
              for (M < 0 ? (d = U) : (d = E ? M : 0); d < U; d++)
                if (
                  ((f = x[d]),
                  (f.selected || d === M) && !f.disabled && (!f.parentNode.disabled || !w(f.parentNode, 'optgroup')))
                ) {
                  if (((o = l(f).val()), E)) return o;
                  N.push(o);
                }
              return N;
            },
            set: function (r, o) {
              for (var f, d, x = r.options, M = l.makeArray(o), E = x.length; E--; )
                (d = x[E]), (d.selected = l.inArray(l.valHooks.option.get(d), M) > -1) && (f = !0);
              return f || (r.selectedIndex = -1), M;
            }
          }
        }
      }),
      l.each(['radio', 'checkbox'], function () {
        (l.valHooks[this] = {
          set: function (r, o) {
            if (Array.isArray(o)) return (r.checked = l.inArray(l(r).val(), o) > -1);
          }
        }),
          T.checkOn ||
            (l.valHooks[this].get = function (r) {
              return r.getAttribute('value') === null ? 'on' : r.value;
            });
      });
    var Tr = e.location,
      Za = { guid: Date.now() },
      Bs = /\?/;
    l.parseXML = function (r) {
      var o, f;
      if (!r || typeof r != 'string') return null;
      try {
        o = new e.DOMParser().parseFromString(r, 'text/xml');
      } catch {}
      return (
        (f = o && o.getElementsByTagName('parsererror')[0]),
        (!o || f) &&
          l.error(
            'Invalid XML: ' +
              (f
                ? l.map(f.childNodes, function (d) {
                    return d.textContent;
                  }).join(`
`)
                : r)
          ),
        o
      );
    };
    var Ja = /^(?:focusinfocus|focusoutblur)$/,
      Qa = function (r) {
        r.stopPropagation();
      };
    l.extend(l.event, {
      trigger: function (r, o, f, d) {
        var x,
          M,
          E,
          N,
          U,
          V,
          te,
          ue,
          K = [f || m],
          Se = _.call(r, 'type') ? r.type : r,
          Je = _.call(r, 'namespace') ? r.namespace.split('.') : [];
        if (
          ((M = ue = E = f = f || m),
          !(f.nodeType === 3 || f.nodeType === 8) &&
            !Ja.test(Se + l.event.triggered) &&
            (Se.indexOf('.') > -1 && ((Je = Se.split('.')), (Se = Je.shift()), Je.sort()),
            (U = Se.indexOf(':') < 0 && 'on' + Se),
            (r = r[l.expando] ? r : new l.Event(Se, typeof r == 'object' && r)),
            (r.isTrigger = d ? 2 : 3),
            (r.namespace = Je.join('.')),
            (r.rnamespace = r.namespace ? new RegExp('(^|\\.)' + Je.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
            (r.result = void 0),
            r.target || (r.target = f),
            (o = o == null ? [r] : l.makeArray(o, [r])),
            (te = l.event.special[Se] || {}),
            !(!d && te.trigger && te.trigger.apply(f, o) === !1)))
        ) {
          if (!d && !te.noBubble && !S(f)) {
            for (N = te.delegateType || Se, Ja.test(N + Se) || (M = M.parentNode); M; M = M.parentNode)
              K.push(M), (E = M);
            E === (f.ownerDocument || m) && K.push(E.defaultView || E.parentWindow || e);
          }
          for (x = 0; (M = K[x++]) && !r.isPropagationStopped(); )
            (ue = M),
              (r.type = x > 1 ? N : te.bindType || Se),
              (V = (z.get(M, 'events') || Object.create(null))[r.type] && z.get(M, 'handle')),
              V && V.apply(M, o),
              (V = U && M[U]),
              V && V.apply && P(M) && ((r.result = V.apply(M, o)), r.result === !1 && r.preventDefault());
          return (
            (r.type = Se),
            !d &&
              !r.isDefaultPrevented() &&
              (!te._default || te._default.apply(K.pop(), o) === !1) &&
              P(f) &&
              U &&
              b(f[Se]) &&
              !S(f) &&
              ((E = f[U]),
              E && (f[U] = null),
              (l.event.triggered = Se),
              r.isPropagationStopped() && ue.addEventListener(Se, Qa),
              f[Se](),
              r.isPropagationStopped() && ue.removeEventListener(Se, Qa),
              (l.event.triggered = void 0),
              E && (f[U] = E)),
            r.result
          );
        }
      },
      simulate: function (r, o, f) {
        var d = l.extend(new l.Event(), f, { type: r, isSimulated: !0 });
        l.event.trigger(d, null, o);
      }
    }),
      l.fn.extend({
        trigger: function (r, o) {
          return this.each(function () {
            l.event.trigger(r, o, this);
          });
        },
        triggerHandler: function (r, o) {
          var f = this[0];
          if (f) return l.event.trigger(r, o, f, !0);
        }
      });
    var Ac = /\[\]$/,
      eo = /\r?\n/g,
      wc = /^(?:submit|button|image|reset|file)$/i,
      Rc = /^(?:input|select|textarea|keygen)/i;
    function Hs(r, o, f, d) {
      var x;
      if (Array.isArray(o))
        l.each(o, function (M, E) {
          f || Ac.test(r) ? d(r, E) : Hs(r + '[' + (typeof E == 'object' && E != null ? M : '') + ']', E, f, d);
        });
      else if (!f && D(o) === 'object') for (x in o) Hs(r + '[' + x + ']', o[x], f, d);
      else d(r, o);
    }
    (l.param = function (r, o) {
      var f,
        d = [],
        x = function (M, E) {
          var N = b(E) ? E() : E;
          d[d.length] = encodeURIComponent(M) + '=' + encodeURIComponent(N ?? '');
        };
      if (r == null) return '';
      if (Array.isArray(r) || (r.jquery && !l.isPlainObject(r)))
        l.each(r, function () {
          x(this.name, this.value);
        });
      else for (f in r) Hs(f, r[f], o, x);
      return d.join('&');
    }),
      l.fn.extend({
        serialize: function () {
          return l.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var r = l.prop(this, 'elements');
            return r ? l.makeArray(r) : this;
          })
            .filter(function () {
              var r = this.type;
              return (
                this.name &&
                !l(this).is(':disabled') &&
                Rc.test(this.nodeName) &&
                !wc.test(r) &&
                (this.checked || !_e.test(r))
              );
            })
            .map(function (r, o) {
              var f = l(this).val();
              return f == null
                ? null
                : Array.isArray(f)
                ? l.map(f, function (d) {
                    return {
                      name: o.name,
                      value: d.replace(
                        eo,
                        `\r
`
                      )
                    };
                  })
                : {
                    name: o.name,
                    value: f.replace(
                      eo,
                      `\r
`
                    )
                  };
            })
            .get();
        }
      });
    var Cc = /%20/g,
      Lc = /#.*$/,
      Pc = /([?&])_=[^&]*/,
      Dc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Uc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ic = /^(?:GET|HEAD)$/,
      Nc = /^\/\//,
      to = {},
      zs = {},
      no = '*/'.concat('*'),
      Gs = m.createElement('a');
    Gs.href = Tr.href;
    function io(r) {
      return function (o, f) {
        typeof o != 'string' && ((f = o), (o = '*'));
        var d,
          x = 0,
          M = o.toLowerCase().match(Tt) || [];
        if (b(f))
          for (; (d = M[x++]); )
            d[0] === '+' ? ((d = d.slice(1) || '*'), (r[d] = r[d] || []).unshift(f)) : (r[d] = r[d] || []).push(f);
      };
    }
    function ro(r, o, f, d) {
      var x = {},
        M = r === zs;
      function E(N) {
        var U;
        return (
          (x[N] = !0),
          l.each(r[N] || [], function (V, te) {
            var ue = te(o, f, d);
            if (typeof ue == 'string' && !M && !x[ue]) return o.dataTypes.unshift(ue), E(ue), !1;
            if (M) return !(U = ue);
          }),
          U
        );
      }
      return E(o.dataTypes[0]) || (!x['*'] && E('*'));
    }
    function ks(r, o) {
      var f,
        d,
        x = l.ajaxSettings.flatOptions || {};
      for (f in o) o[f] !== void 0 && ((x[f] ? r : d || (d = {}))[f] = o[f]);
      return d && l.extend(!0, r, d), r;
    }
    function Oc(r, o, f) {
      for (var d, x, M, E, N = r.contents, U = r.dataTypes; U[0] === '*'; )
        U.shift(), d === void 0 && (d = r.mimeType || o.getResponseHeader('Content-Type'));
      if (d) {
        for (x in N)
          if (N[x] && N[x].test(d)) {
            U.unshift(x);
            break;
          }
      }
      if (U[0] in f) M = U[0];
      else {
        for (x in f) {
          if (!U[0] || r.converters[x + ' ' + U[0]]) {
            M = x;
            break;
          }
          E || (E = x);
        }
        M = M || E;
      }
      if (M) return M !== U[0] && U.unshift(M), f[M];
    }
    function Fc(r, o, f, d) {
      var x,
        M,
        E,
        N,
        U,
        V = {},
        te = r.dataTypes.slice();
      if (te[1]) for (E in r.converters) V[E.toLowerCase()] = r.converters[E];
      for (M = te.shift(); M; )
        if (
          (r.responseFields[M] && (f[r.responseFields[M]] = o),
          !U && d && r.dataFilter && (o = r.dataFilter(o, r.dataType)),
          (U = M),
          (M = te.shift()),
          M)
        ) {
          if (M === '*') M = U;
          else if (U !== '*' && U !== M) {
            if (((E = V[U + ' ' + M] || V['* ' + M]), !E)) {
              for (x in V)
                if (((N = x.split(' ')), N[1] === M && ((E = V[U + ' ' + N[0]] || V['* ' + N[0]]), E))) {
                  E === !0 ? (E = V[x]) : V[x] !== !0 && ((M = N[0]), te.unshift(N[1]));
                  break;
                }
            }
            if (E !== !0)
              if (E && r.throws) o = E(o);
              else
                try {
                  o = E(o);
                } catch (ue) {
                  return { state: 'parsererror', error: E ? ue : 'No conversion from ' + U + ' to ' + M };
                }
          }
        }
      return { state: 'success', data: o };
    }
    l.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tr.href,
        type: 'GET',
        isLocal: Uc.test(Tr.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': no,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': l.parseXML },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function (r, o) {
        return o ? ks(ks(r, l.ajaxSettings), o) : ks(l.ajaxSettings, r);
      },
      ajaxPrefilter: io(to),
      ajaxTransport: io(zs),
      ajax: function (r, o) {
        typeof r == 'object' && ((o = r), (r = void 0)), (o = o || {});
        var f,
          d,
          x,
          M,
          E,
          N,
          U,
          V,
          te,
          ue,
          K = l.ajaxSetup({}, o),
          Se = K.context || K,
          Je = K.context && (Se.nodeType || Se.jquery) ? l(Se) : l.event,
          xt = l.Deferred(),
          lt = l.Callbacks('once memory'),
          Yt = K.statusCode || {},
          Ht = {},
          Dn = {},
          Un = 'canceled',
          _t = {
            readyState: 0,
            getResponseHeader: function (Mt) {
              var It;
              if (U) {
                if (!M)
                  for (M = {}; (It = Dc.exec(x)); )
                    M[It[1].toLowerCase() + ' '] = (M[It[1].toLowerCase() + ' '] || []).concat(It[2]);
                It = M[Mt.toLowerCase() + ' '];
              }
              return It == null ? null : It.join(', ');
            },
            getAllResponseHeaders: function () {
              return U ? x : null;
            },
            setRequestHeader: function (Mt, It) {
              return U == null && ((Mt = Dn[Mt.toLowerCase()] = Dn[Mt.toLowerCase()] || Mt), (Ht[Mt] = It)), this;
            },
            overrideMimeType: function (Mt) {
              return U == null && (K.mimeType = Mt), this;
            },
            statusCode: function (Mt) {
              var It;
              if (Mt)
                if (U) _t.always(Mt[_t.status]);
                else for (It in Mt) Yt[It] = [Yt[It], Mt[It]];
              return this;
            },
            abort: function (Mt) {
              var It = Mt || Un;
              return f && f.abort(It), vi(0, It), this;
            }
          };
        if (
          (xt.promise(_t),
          (K.url = ((r || K.url || Tr.href) + '').replace(Nc, Tr.protocol + '//')),
          (K.type = o.method || o.type || K.method || K.type),
          (K.dataTypes = (K.dataType || '*').toLowerCase().match(Tt) || ['']),
          K.crossDomain == null)
        ) {
          N = m.createElement('a');
          try {
            (N.href = K.url),
              (N.href = N.href),
              (K.crossDomain = Gs.protocol + '//' + Gs.host != N.protocol + '//' + N.host);
          } catch {
            K.crossDomain = !0;
          }
        }
        if (
          (K.data && K.processData && typeof K.data != 'string' && (K.data = l.param(K.data, K.traditional)),
          ro(to, K, o, _t),
          U)
        )
          return _t;
        (V = l.event && K.global),
          V && l.active++ === 0 && l.event.trigger('ajaxStart'),
          (K.type = K.type.toUpperCase()),
          (K.hasContent = !Ic.test(K.type)),
          (d = K.url.replace(Lc, '')),
          K.hasContent
            ? K.data &&
              K.processData &&
              (K.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 &&
              (K.data = K.data.replace(Cc, '+'))
            : ((ue = K.url.slice(d.length)),
              K.data &&
                (K.processData || typeof K.data == 'string') &&
                ((d += (Bs.test(d) ? '&' : '?') + K.data), delete K.data),
              K.cache === !1 && ((d = d.replace(Pc, '$1')), (ue = (Bs.test(d) ? '&' : '?') + '_=' + Za.guid++ + ue)),
              (K.url = d + ue)),
          K.ifModified &&
            (l.lastModified[d] && _t.setRequestHeader('If-Modified-Since', l.lastModified[d]),
            l.etag[d] && _t.setRequestHeader('If-None-Match', l.etag[d])),
          ((K.data && K.hasContent && K.contentType !== !1) || o.contentType) &&
            _t.setRequestHeader('Content-Type', K.contentType),
          _t.setRequestHeader(
            'Accept',
            K.dataTypes[0] && K.accepts[K.dataTypes[0]]
              ? K.accepts[K.dataTypes[0]] + (K.dataTypes[0] !== '*' ? ', ' + no + '; q=0.01' : '')
              : K.accepts['*']
          );
        for (te in K.headers) _t.setRequestHeader(te, K.headers[te]);
        if (K.beforeSend && (K.beforeSend.call(Se, _t, K) === !1 || U)) return _t.abort();
        if (((Un = 'abort'), lt.add(K.complete), _t.done(K.success), _t.fail(K.error), (f = ro(zs, K, o, _t)), !f))
          vi(-1, 'No Transport');
        else {
          if (((_t.readyState = 1), V && Je.trigger('ajaxSend', [_t, K]), U)) return _t;
          K.async &&
            K.timeout > 0 &&
            (E = e.setTimeout(function () {
              _t.abort('timeout');
            }, K.timeout));
          try {
            (U = !1), f.send(Ht, vi);
          } catch (Mt) {
            if (U) throw Mt;
            vi(-1, Mt);
          }
        }
        function vi(Mt, It, Ar, Ws) {
          var In,
            wr,
            Nn,
            ni,
            ii,
            _n = It;
          U ||
            ((U = !0),
            E && e.clearTimeout(E),
            (f = void 0),
            (x = Ws || ''),
            (_t.readyState = Mt > 0 ? 4 : 0),
            (In = (Mt >= 200 && Mt < 300) || Mt === 304),
            Ar && (ni = Oc(K, _t, Ar)),
            !In &&
              l.inArray('script', K.dataTypes) > -1 &&
              l.inArray('json', K.dataTypes) < 0 &&
              (K.converters['text script'] = function () {}),
            (ni = Fc(K, ni, _t, In)),
            In
              ? (K.ifModified &&
                  ((ii = _t.getResponseHeader('Last-Modified')),
                  ii && (l.lastModified[d] = ii),
                  (ii = _t.getResponseHeader('etag')),
                  ii && (l.etag[d] = ii)),
                Mt === 204 || K.type === 'HEAD'
                  ? (_n = 'nocontent')
                  : Mt === 304
                  ? (_n = 'notmodified')
                  : ((_n = ni.state), (wr = ni.data), (Nn = ni.error), (In = !Nn)))
              : ((Nn = _n), (Mt || !_n) && ((_n = 'error'), Mt < 0 && (Mt = 0))),
            (_t.status = Mt),
            (_t.statusText = (It || _n) + ''),
            In ? xt.resolveWith(Se, [wr, _n, _t]) : xt.rejectWith(Se, [_t, _n, Nn]),
            _t.statusCode(Yt),
            (Yt = void 0),
            V && Je.trigger(In ? 'ajaxSuccess' : 'ajaxError', [_t, K, In ? wr : Nn]),
            lt.fireWith(Se, [_t, _n]),
            V && (Je.trigger('ajaxComplete', [_t, K]), --l.active || l.event.trigger('ajaxStop')));
        }
        return _t;
      },
      getJSON: function (r, o, f) {
        return l.get(r, o, f, 'json');
      },
      getScript: function (r, o) {
        return l.get(r, void 0, o, 'script');
      }
    }),
      l.each(['get', 'post'], function (r, o) {
        l[o] = function (f, d, x, M) {
          return (
            b(d) && ((M = M || x), (x = d), (d = void 0)),
            l.ajax(l.extend({ url: f, type: o, dataType: M, data: d, success: x }, l.isPlainObject(f) && f))
          );
        };
      }),
      l.ajaxPrefilter(function (r) {
        var o;
        for (o in r.headers) o.toLowerCase() === 'content-type' && (r.contentType = r.headers[o] || '');
      }),
      (l._evalUrl = function (r, o, f) {
        return l.ajax({
          url: r,
          type: 'GET',
          dataType: 'script',
          cache: !0,
          async: !1,
          global: !1,
          converters: { 'text script': function () {} },
          dataFilter: function (d) {
            l.globalEval(d, o, f);
          }
        });
      }),
      l.fn.extend({
        wrapAll: function (r) {
          var o;
          return (
            this[0] &&
              (b(r) && (r = r.call(this[0])),
              (o = l(r, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && o.insertBefore(this[0]),
              o
                .map(function () {
                  for (var f = this; f.firstElementChild; ) f = f.firstElementChild;
                  return f;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (r) {
          return b(r)
            ? this.each(function (o) {
                l(this).wrapInner(r.call(this, o));
              })
            : this.each(function () {
                var o = l(this),
                  f = o.contents();
                f.length ? f.wrapAll(r) : o.append(r);
              });
        },
        wrap: function (r) {
          var o = b(r);
          return this.each(function (f) {
            l(this).wrapAll(o ? r.call(this, f) : r);
          });
        },
        unwrap: function (r) {
          return (
            this.parent(r)
              .not('body')
              .each(function () {
                l(this).replaceWith(this.childNodes);
              }),
            this
          );
        }
      }),
      (l.expr.pseudos.hidden = function (r) {
        return !l.expr.pseudos.visible(r);
      }),
      (l.expr.pseudos.visible = function (r) {
        return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
      }),
      (l.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch {}
      });
    var Bc = { 0: 200, 1223: 204 },
      br = l.ajaxSettings.xhr();
    (T.cors = !!br && 'withCredentials' in br),
      (T.ajax = br = !!br),
      l.ajaxTransport(function (r) {
        var o, f;
        if (T.cors || (br && !r.crossDomain))
          return {
            send: function (d, x) {
              var M,
                E = r.xhr();
              if ((E.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields))
                for (M in r.xhrFields) E[M] = r.xhrFields[M];
              r.mimeType && E.overrideMimeType && E.overrideMimeType(r.mimeType),
                !r.crossDomain && !d['X-Requested-With'] && (d['X-Requested-With'] = 'XMLHttpRequest');
              for (M in d) E.setRequestHeader(M, d[M]);
              (o = function (N) {
                return function () {
                  o &&
                    ((o = f = E.onload = E.onerror = E.onabort = E.ontimeout = E.onreadystatechange = null),
                    N === 'abort'
                      ? E.abort()
                      : N === 'error'
                      ? typeof E.status != 'number'
                        ? x(0, 'error')
                        : x(E.status, E.statusText)
                      : x(
                          Bc[E.status] || E.status,
                          E.statusText,
                          (E.responseType || 'text') !== 'text' || typeof E.responseText != 'string'
                            ? { binary: E.response }
                            : { text: E.responseText },
                          E.getAllResponseHeaders()
                        ));
                };
              }),
                (E.onload = o()),
                (f = E.onerror = E.ontimeout = o('error')),
                E.onabort !== void 0
                  ? (E.onabort = f)
                  : (E.onreadystatechange = function () {
                      E.readyState === 4 &&
                        e.setTimeout(function () {
                          o && f();
                        });
                    }),
                (o = o('abort'));
              try {
                E.send((r.hasContent && r.data) || null);
              } catch (N) {
                if (o) throw N;
              }
            },
            abort: function () {
              o && o();
            }
          };
      }),
      l.ajaxPrefilter(function (r) {
        r.crossDomain && (r.contents.script = !1);
      }),
      l.ajaxSetup({
        accepts: {
          script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          'text script': function (r) {
            return l.globalEval(r), r;
          }
        }
      }),
      l.ajaxPrefilter('script', function (r) {
        r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = 'GET');
      }),
      l.ajaxTransport('script', function (r) {
        if (r.crossDomain || r.scriptAttrs) {
          var o, f;
          return {
            send: function (d, x) {
              (o = l('<script>')
                .attr(r.scriptAttrs || {})
                .prop({ charset: r.scriptCharset, src: r.url })
                .on(
                  'load error',
                  (f = function (M) {
                    o.remove(), (f = null), M && x(M.type === 'error' ? 404 : 200, M.type);
                  })
                )),
                m.head.appendChild(o[0]);
            },
            abort: function () {
              f && f();
            }
          };
        }
      });
    var so = [],
      Vs = /(=)\?(?=&|$)|\?\?/;
    l.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function () {
        var r = so.pop() || l.expando + '_' + Za.guid++;
        return (this[r] = !0), r;
      }
    }),
      l.ajaxPrefilter('json jsonp', function (r, o, f) {
        var d,
          x,
          M,
          E =
            r.jsonp !== !1 &&
            (Vs.test(r.url)
              ? 'url'
              : typeof r.data == 'string' &&
                (r.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 &&
                Vs.test(r.data) &&
                'data');
        if (E || r.dataTypes[0] === 'jsonp')
          return (
            (d = r.jsonpCallback = b(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback),
            E
              ? (r[E] = r[E].replace(Vs, '$1' + d))
              : r.jsonp !== !1 && (r.url += (Bs.test(r.url) ? '&' : '?') + r.jsonp + '=' + d),
            (r.converters['script json'] = function () {
              return M || l.error(d + ' was not called'), M[0];
            }),
            (r.dataTypes[0] = 'json'),
            (x = e[d]),
            (e[d] = function () {
              M = arguments;
            }),
            f.always(function () {
              x === void 0 ? l(e).removeProp(d) : (e[d] = x),
                r[d] && ((r.jsonpCallback = o.jsonpCallback), so.push(d)),
                M && b(x) && x(M[0]),
                (M = x = void 0);
            }),
            'script'
          );
      }),
      (T.createHTMLDocument = (function () {
        var r = m.implementation.createHTMLDocument('').body;
        return (r.innerHTML = '<form></form><form></form>'), r.childNodes.length === 2;
      })()),
      (l.parseHTML = function (r, o, f) {
        if (typeof r != 'string') return [];
        typeof o == 'boolean' && ((f = o), (o = !1));
        var d, x, M;
        return (
          o ||
            (T.createHTMLDocument
              ? ((o = m.implementation.createHTMLDocument('')),
                (d = o.createElement('base')),
                (d.href = m.location.href),
                o.head.appendChild(d))
              : (o = m)),
          (x = se.exec(r)),
          (M = !f && []),
          x ? [o.createElement(x[1])] : ((x = dn([r], o, M)), M && M.length && l(M).remove(), l.merge([], x.childNodes))
        );
      }),
      (l.fn.load = function (r, o, f) {
        var d,
          x,
          M,
          E = this,
          N = r.indexOf(' ');
        return (
          N > -1 && ((d = gi(r.slice(N))), (r = r.slice(0, N))),
          b(o) ? ((f = o), (o = void 0)) : o && typeof o == 'object' && (x = 'POST'),
          E.length > 0 &&
            l
              .ajax({ url: r, type: x || 'GET', dataType: 'html', data: o })
              .done(function (U) {
                (M = arguments), E.html(d ? l('<div>').append(l.parseHTML(U)).find(d) : U);
              })
              .always(
                f &&
                  function (U, V) {
                    E.each(function () {
                      f.apply(this, M || [U.responseText, V, U]);
                    });
                  }
              ),
          this
        );
      }),
      (l.expr.pseudos.animated = function (r) {
        return l.grep(l.timers, function (o) {
          return r === o.elem;
        }).length;
      }),
      (l.offset = {
        setOffset: function (r, o, f) {
          var d,
            x,
            M,
            E,
            N,
            U,
            V,
            te = l.css(r, 'position'),
            ue = l(r),
            K = {};
          te === 'static' && (r.style.position = 'relative'),
            (N = ue.offset()),
            (M = l.css(r, 'top')),
            (U = l.css(r, 'left')),
            (V = (te === 'absolute' || te === 'fixed') && (M + U).indexOf('auto') > -1),
            V ? ((d = ue.position()), (E = d.top), (x = d.left)) : ((E = parseFloat(M) || 0), (x = parseFloat(U) || 0)),
            b(o) && (o = o.call(r, f, l.extend({}, N))),
            o.top != null && (K.top = o.top - N.top + E),
            o.left != null && (K.left = o.left - N.left + x),
            'using' in o ? o.using.call(r, K) : ue.css(K);
        }
      }),
      l.fn.extend({
        offset: function (r) {
          if (arguments.length)
            return r === void 0
              ? this
              : this.each(function (x) {
                  l.offset.setOffset(this, r, x);
                });
          var o,
            f,
            d = this[0];
          if (d)
            return d.getClientRects().length
              ? ((o = d.getBoundingClientRect()),
                (f = d.ownerDocument.defaultView),
                { top: o.top + f.pageYOffset, left: o.left + f.pageXOffset })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (this[0]) {
            var r,
              o,
              f,
              d = this[0],
              x = { top: 0, left: 0 };
            if (l.css(d, 'position') === 'fixed') o = d.getBoundingClientRect();
            else {
              for (
                o = this.offset(), f = d.ownerDocument, r = d.offsetParent || f.documentElement;
                r && (r === f.body || r === f.documentElement) && l.css(r, 'position') === 'static';

              )
                r = r.parentNode;
              r &&
                r !== d &&
                r.nodeType === 1 &&
                ((x = l(r).offset()),
                (x.top += l.css(r, 'borderTopWidth', !0)),
                (x.left += l.css(r, 'borderLeftWidth', !0)));
            }
            return {
              top: o.top - x.top - l.css(d, 'marginTop', !0),
              left: o.left - x.left - l.css(d, 'marginLeft', !0)
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var r = this.offsetParent; r && l.css(r, 'position') === 'static'; ) r = r.offsetParent;
            return r || we;
          });
        }
      }),
      l.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (r, o) {
        var f = o === 'pageYOffset';
        l.fn[r] = function (d) {
          return je(
            this,
            function (x, M, E) {
              var N;
              if ((S(x) ? (N = x) : x.nodeType === 9 && (N = x.defaultView), E === void 0)) return N ? N[o] : x[M];
              N ? N.scrollTo(f ? N.pageXOffset : E, f ? E : N.pageYOffset) : (x[M] = E);
            },
            r,
            d,
            arguments.length
          );
        };
      }),
      l.each(['top', 'left'], function (r, o) {
        l.cssHooks[o] = qe(T.pixelPosition, function (f, d) {
          if (d) return (d = nt(f, o)), ae.test(d) ? l(f).position()[o] + 'px' : d;
        });
      }),
      l.each({ Height: 'height', Width: 'width' }, function (r, o) {
        l.each({ padding: 'inner' + r, content: o, '': 'outer' + r }, function (f, d) {
          l.fn[d] = function (x, M) {
            var E = arguments.length && (f || typeof x != 'boolean'),
              N = f || (x === !0 || M === !0 ? 'margin' : 'border');
            return je(
              this,
              function (U, V, te) {
                var ue;
                return S(U)
                  ? d.indexOf('outer') === 0
                    ? U['inner' + r]
                    : U.document.documentElement['client' + r]
                  : U.nodeType === 9
                  ? ((ue = U.documentElement),
                    Math.max(
                      U.body['scroll' + r],
                      ue['scroll' + r],
                      U.body['offset' + r],
                      ue['offset' + r],
                      ue['client' + r]
                    ))
                  : te === void 0
                  ? l.css(U, V, N)
                  : l.style(U, V, te, N);
              },
              o,
              E ? x : void 0,
              E
            );
          };
        });
      }),
      l.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (r, o) {
        l.fn[o] = function (f) {
          return this.on(o, f);
        };
      }),
      l.fn.extend({
        bind: function (r, o, f) {
          return this.on(r, null, o, f);
        },
        unbind: function (r, o) {
          return this.off(r, null, o);
        },
        delegate: function (r, o, f, d) {
          return this.on(o, r, f, d);
        },
        undelegate: function (r, o, f) {
          return arguments.length === 1 ? this.off(r, '**') : this.off(o, r || '**', f);
        },
        hover: function (r, o) {
          return this.on('mouseenter', r).on('mouseleave', o || r);
        }
      }),
      l.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' '
        ),
        function (r, o) {
          l.fn[o] = function (f, d) {
            return arguments.length > 0 ? this.on(o, null, f, d) : this.trigger(o);
          };
        }
      );
    var Hc = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (l.proxy = function (r, o) {
      var f, d, x;
      if ((typeof o == 'string' && ((f = r[o]), (o = r), (r = f)), !!b(r)))
        return (
          (d = a.call(arguments, 2)),
          (x = function () {
            return r.apply(o || this, d.concat(a.call(arguments)));
          }),
          (x.guid = r.guid = r.guid || l.guid++),
          x
        );
    }),
      (l.holdReady = function (r) {
        r ? l.readyWait++ : l.ready(!0);
      }),
      (l.isArray = Array.isArray),
      (l.parseJSON = JSON.parse),
      (l.nodeName = w),
      (l.isFunction = b),
      (l.isWindow = S),
      (l.camelCase = yt),
      (l.type = D),
      (l.now = Date.now),
      (l.isNumeric = function (r) {
        var o = l.type(r);
        return (o === 'number' || o === 'string') && !isNaN(r - parseFloat(r));
      }),
      (l.trim = function (r) {
        return r == null ? '' : (r + '').replace(Hc, '$1');
      });
    var zc = e.jQuery,
      Gc = e.$;
    return (
      (l.noConflict = function (r) {
        return e.$ === l && (e.$ = Gc), r && e.jQuery === l && (e.jQuery = zc), l;
      }),
      typeof t > 'u' && (e.jQuery = e.$ = l),
      l
    );
  });
})(Gl);
var Zc = Gl.exports;
const Cr = $c(Zc);
class Ha {
  constructor() {
    this._markers = [];
  }
  add({ position: e, name: t }) {
    const n = {},
      s = Cr('<p>').append(t),
      a = Cr('<div>').addClass('marker').append(s);
    (n.text = a), (n.position = e), this._markers.push(n), Cr(document.getElementById('container')).append(a);
  }
  hideMarkers() {
    Cr('.marker').hide();
  }
  showMarkers() {
    Cr('.marker').show();
  }
  static toXYCoords({ position: e, camera: t, screen: n }) {
    const { width: s, height: a } = n,
      u = e.clone();
    return u.project(t), (u.x = Math.round(((u.x + 1) * s) / 2)), (u.y = Math.round(((-u.y + 1) * a) / 2) + 15), u;
  }
  update({ camera: e, screen: t }) {
    for (var n = 0; n < this._markers.length; n++) {
      const { position: s, text: a } = this._markers[n],
        u = Ha.toXYCoords({ position: s, camera: e, screen: t });
      a.css({ top: u.y, left: u.x }), u.z > 1 ? a.css({ display: 'none' }) : a.css({ display: 'inline-block' });
    }
  }
}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const za = '156',
  Gi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  ki = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Jc = 0,
  co = 1,
  Qc = 2,
  kl = 1,
  eu = 2,
  Jn = 3,
  mi = 0,
  an = 1,
  Qn = 2,
  hi = 0,
  cr = 1,
  As = 2,
  uo = 3,
  fo = 4,
  tu = 5,
  ar = 100,
  nu = 101,
  iu = 102,
  ho = 103,
  po = 104,
  ru = 200,
  su = 201,
  au = 202,
  ou = 203,
  Vl = 204,
  Wl = 205,
  lu = 206,
  cu = 207,
  uu = 208,
  fu = 209,
  hu = 210,
  du = 0,
  pu = 1,
  mu = 2,
  wa = 3,
  gu = 4,
  _u = 5,
  vu = 6,
  xu = 7,
  Xl = 0,
  Mu = 1,
  Su = 2,
  di = 0,
  yu = 1,
  Eu = 2,
  Tu = 3,
  bu = 4,
  Au = 5,
  ql = 300,
  hr = 301,
  dr = 302,
  Ra = 303,
  Ca = 304,
  Cs = 306,
  La = 1e3,
  Cn = 1001,
  Pa = 1002,
  Kt = 1003,
  mo = 1004,
  Zs = 1005,
  un = 1006,
  wu = 1007,
  Br = 1008,
  pi = 1009,
  Ru = 1010,
  Cu = 1011,
  Ga = 1012,
  jl = 1013,
  ui = 1014,
  fi = 1015,
  Hr = 1016,
  Yl = 1017,
  Kl = 1018,
  Ai = 1020,
  Lu = 1021,
  Ln = 1023,
  Pu = 1024,
  Du = 1025,
  wi = 1026,
  pr = 1027,
  Uu = 1028,
  $l = 1029,
  Iu = 1030,
  Zl = 1031,
  Jl = 1033,
  Js = 33776,
  Qs = 33777,
  ea = 33778,
  ta = 33779,
  go = 35840,
  _o = 35841,
  vo = 35842,
  xo = 35843,
  Nu = 36196,
  Mo = 37492,
  So = 37496,
  yo = 37808,
  Eo = 37809,
  To = 37810,
  bo = 37811,
  Ao = 37812,
  wo = 37813,
  Ro = 37814,
  Co = 37815,
  Lo = 37816,
  Po = 37817,
  Do = 37818,
  Uo = 37819,
  Io = 37820,
  No = 37821,
  na = 36492,
  Oo = 36494,
  Fo = 36495,
  Ou = 36283,
  Bo = 36284,
  Ho = 36285,
  zo = 36286,
  Ql = 3e3,
  Ri = 3001,
  Fu = 3200,
  Bu = 3201,
  Hu = 0,
  zu = 1,
  Ci = '',
  Pt = 'srgb',
  Hn = 'srgb-linear',
  Ls = 'display-p3',
  ia = 7680,
  Gu = 519,
  ku = 512,
  Vu = 513,
  Wu = 514,
  Xu = 515,
  qu = 516,
  ju = 517,
  Yu = 518,
  Ku = 519,
  Go = 35044,
  ko = '300 es',
  Da = 1035,
  ei = 2e3,
  ws = 2001;
class Ui {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const s = this._listeners[e];
    if (s !== void 0) {
      const a = s.indexOf(t);
      a !== -1 && s.splice(a, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let a = 0, u = s.length; a < u; a++) s[a].call(this, e);
      e.target = null;
    }
  }
}
const Qt = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0a',
  '0b',
  '0c',
  '0d',
  '0e',
  '0f',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '1a',
  '1b',
  '1c',
  '1d',
  '1e',
  '1f',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '2a',
  '2b',
  '2c',
  '2d',
  '2e',
  '2f',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '3a',
  '3b',
  '3c',
  '3d',
  '3e',
  '3f',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '4a',
  '4b',
  '4c',
  '4d',
  '4e',
  '4f',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '5a',
  '5b',
  '5c',
  '5d',
  '5e',
  '5f',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '6a',
  '6b',
  '6c',
  '6d',
  '6e',
  '6f',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
  '7a',
  '7b',
  '7c',
  '7d',
  '7e',
  '7f',
  '80',
  '81',
  '82',
  '83',
  '84',
  '85',
  '86',
  '87',
  '88',
  '89',
  '8a',
  '8b',
  '8c',
  '8d',
  '8e',
  '8f',
  '90',
  '91',
  '92',
  '93',
  '94',
  '95',
  '96',
  '97',
  '98',
  '99',
  '9a',
  '9b',
  '9c',
  '9d',
  '9e',
  '9f',
  'a0',
  'a1',
  'a2',
  'a3',
  'a4',
  'a5',
  'a6',
  'a7',
  'a8',
  'a9',
  'aa',
  'ab',
  'ac',
  'ad',
  'ae',
  'af',
  'b0',
  'b1',
  'b2',
  'b3',
  'b4',
  'b5',
  'b6',
  'b7',
  'b8',
  'b9',
  'ba',
  'bb',
  'bc',
  'bd',
  'be',
  'bf',
  'c0',
  'c1',
  'c2',
  'c3',
  'c4',
  'c5',
  'c6',
  'c7',
  'c8',
  'c9',
  'ca',
  'cb',
  'cc',
  'cd',
  'ce',
  'cf',
  'd0',
  'd1',
  'd2',
  'd3',
  'd4',
  'd5',
  'd6',
  'd7',
  'd8',
  'd9',
  'da',
  'db',
  'dc',
  'dd',
  'de',
  'df',
  'e0',
  'e1',
  'e2',
  'e3',
  'e4',
  'e5',
  'e6',
  'e7',
  'e8',
  'e9',
  'ea',
  'eb',
  'ec',
  'ed',
  'ee',
  'ef',
  'f0',
  'f1',
  'f2',
  'f3',
  'f4',
  'f5',
  'f6',
  'f7',
  'f8',
  'f9',
  'fa',
  'fb',
  'fc',
  'fd',
  'fe',
  'ff'
];
let Vo = 1234567;
const Nr = Math.PI / 180,
  zr = 180 / Math.PI;
function gr() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Qt[i & 255] +
    Qt[(i >> 8) & 255] +
    Qt[(i >> 16) & 255] +
    Qt[(i >> 24) & 255] +
    '-' +
    Qt[e & 255] +
    Qt[(e >> 8) & 255] +
    '-' +
    Qt[((e >> 16) & 15) | 64] +
    Qt[(e >> 24) & 255] +
    '-' +
    Qt[(t & 63) | 128] +
    Qt[(t >> 8) & 255] +
    '-' +
    Qt[(t >> 16) & 255] +
    Qt[(t >> 24) & 255] +
    Qt[n & 255] +
    Qt[(n >> 8) & 255] +
    Qt[(n >> 16) & 255] +
    Qt[(n >> 24) & 255]
  ).toLowerCase();
}
function tn(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ka(i, e) {
  return ((i % e) + e) % e;
}
function $u(i, e, t, n, s) {
  return n + ((i - e) * (s - n)) / (t - e);
}
function Zu(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function Or(i, e, t) {
  return (1 - t) * i + t * e;
}
function Ju(i, e, t, n) {
  return Or(i, e, 1 - Math.exp(-t * n));
}
function Qu(i, e = 1) {
  return e - Math.abs(ka(i, e * 2) - e);
}
function ef(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : ((i = (i - e) / (t - e)), i * i * (3 - 2 * i));
}
function tf(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : ((i = (i - e) / (t - e)), i * i * i * (i * (i * 6 - 15) + 10));
}
function nf(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function rf(i, e) {
  return i + Math.random() * (e - i);
}
function sf(i) {
  return i * (0.5 - Math.random());
}
function af(i) {
  i !== void 0 && (Vo = i);
  let e = (Vo += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function of(i) {
  return i * Nr;
}
function lf(i) {
  return i * zr;
}
function Ua(i) {
  return (i & (i - 1)) === 0 && i !== 0;
}
function cf(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Rs(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function uf(i, e, t, n, s) {
  const a = Math.cos,
    u = Math.sin,
    c = a(t / 2),
    h = u(t / 2),
    p = a((e + n) / 2),
    g = u((e + n) / 2),
    _ = a((e - n) / 2),
    v = u((e - n) / 2),
    y = a((n - e) / 2),
    T = u((n - e) / 2);
  switch (s) {
    case 'XYX':
      i.set(c * g, h * _, h * v, c * p);
      break;
    case 'YZY':
      i.set(h * v, c * g, h * _, c * p);
      break;
    case 'ZXZ':
      i.set(h * _, h * v, c * g, c * p);
      break;
    case 'XZX':
      i.set(c * g, h * T, h * y, c * p);
      break;
    case 'YXY':
      i.set(h * y, c * g, h * T, c * p);
      break;
    case 'ZYZ':
      i.set(h * T, h * y, c * g, c * p);
      break;
    default:
      console.warn('THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + s);
  }
}
function or(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error('Invalid component type.');
  }
}
function rn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error('Invalid component type.');
  }
}
const ff = {
  DEG2RAD: Nr,
  RAD2DEG: zr,
  generateUUID: gr,
  clamp: tn,
  euclideanModulo: ka,
  mapLinear: $u,
  inverseLerp: Zu,
  lerp: Or,
  damp: Ju,
  pingpong: Qu,
  smoothstep: ef,
  smootherstep: tf,
  randInt: nf,
  randFloat: rf,
  randFloatSpread: sf,
  seededRandom: af,
  degToRad: of,
  radToDeg: lf,
  isPowerOfTwo: Ua,
  ceilPowerOfTwo: cf,
  floorPowerOfTwo: Rs,
  setQuaternionFromProperEuler: uf,
  normalize: rn,
  denormalize: or
};
class dt {
  constructor(e = 0, t = 0) {
    (dt.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      s = e.elements;
    return (this.x = s[0] * t + s[3] * n + s[6]), (this.y = s[1] * t + s[4] * n + s[7]), this;
  }
  min(e) {
    return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this;
  }
  max(e) {
    return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this;
  }
  clamp(e, t) {
    return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), this;
  }
  clampScalar(e, t) {
    return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(tn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      s = Math.sin(t),
      a = this.x - e.x,
      u = this.y - e.y;
    return (this.x = a * n - u * s + e.x), (this.y = a * s + u * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ht {
  constructor(e, t, n, s, a, u, c, h, p) {
    (ht.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, s, a, u, c, h, p);
  }
  set(e, t, n, s, a, u, c, h, p) {
    const g = this.elements;
    return (
      (g[0] = e), (g[1] = s), (g[2] = c), (g[3] = t), (g[4] = a), (g[5] = h), (g[6] = n), (g[7] = u), (g[8] = p), this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      s = t.elements,
      a = this.elements,
      u = n[0],
      c = n[3],
      h = n[6],
      p = n[1],
      g = n[4],
      _ = n[7],
      v = n[2],
      y = n[5],
      T = n[8],
      b = s[0],
      S = s[3],
      m = s[6],
      O = s[1],
      R = s[4],
      D = s[7],
      F = s[2],
      k = s[5],
      l = s[8];
    return (
      (a[0] = u * b + c * O + h * F),
      (a[3] = u * S + c * R + h * k),
      (a[6] = u * m + c * D + h * l),
      (a[1] = p * b + g * O + _ * F),
      (a[4] = p * S + g * R + _ * k),
      (a[7] = p * m + g * D + _ * l),
      (a[2] = v * b + y * O + T * F),
      (a[5] = v * S + y * R + T * k),
      (a[8] = v * m + y * D + T * l),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      u = e[4],
      c = e[5],
      h = e[6],
      p = e[7],
      g = e[8];
    return t * u * g - t * c * p - n * a * g + n * c * h + s * a * p - s * u * h;
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      u = e[4],
      c = e[5],
      h = e[6],
      p = e[7],
      g = e[8],
      _ = g * u - c * p,
      v = c * h - g * a,
      y = p * a - u * h,
      T = t * _ + n * v + s * y;
    if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / T;
    return (
      (e[0] = _ * b),
      (e[1] = (s * p - g * n) * b),
      (e[2] = (c * n - s * u) * b),
      (e[3] = v * b),
      (e[4] = (g * t - s * h) * b),
      (e[5] = (s * a - c * t) * b),
      (e[6] = y * b),
      (e[7] = (n * h - p * t) * b),
      (e[8] = (u * t - n * a) * b),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, s, a, u, c) {
    const h = Math.cos(a),
      p = Math.sin(a);
    return (
      this.set(n * h, n * p, -n * (h * u + p * c) + u + e, -s * p, s * h, -s * (-p * u + h * c) + c + t, 0, 0, 1), this
    );
  }
  scale(e, t) {
    return this.premultiply(ra.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(ra.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(ra.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let s = 0; s < 9; s++) if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ra = new ht();
function ec(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function Gr(i) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', i);
}
function hf() {
  const i = Gr('canvas');
  return (i.style.display = 'block'), i;
}
const Wo = {};
function Fr(i) {
  i in Wo || ((Wo[i] = !0), console.warn(i));
}
function ur(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function sa(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const df = new ht().fromArray([
    0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7, 1e-7, 0.9105199
  ]),
  pf = new ht().fromArray([1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7, 0, 1.0982735]);
function mf(i) {
  return i.convertSRGBToLinear().applyMatrix3(pf);
}
function gf(i) {
  return i.applyMatrix3(df).convertLinearToSRGB();
}
const _f = { [Hn]: i => i, [Pt]: i => i.convertSRGBToLinear(), [Ls]: mf },
  vf = { [Hn]: i => i, [Pt]: i => i.convertLinearToSRGB(), [Ls]: gf },
  Tn = {
    enabled: !0,
    get legacyMode() {
      return console.warn('THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.'), !this.enabled;
    },
    set legacyMode(i) {
      console.warn('THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.'), (this.enabled = !i);
    },
    get workingColorSpace() {
      return Hn;
    },
    set workingColorSpace(i) {
      console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
    },
    convert: function (i, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return i;
      const n = _f[e],
        s = vf[t];
      if (n === void 0 || s === void 0) throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
      return s(n(i));
    },
    fromWorkingColorSpace: function (i, e) {
      return this.convert(i, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (i, e) {
      return this.convert(i, e, this.workingColorSpace);
    }
  };
let Vi;
class tc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Vi === void 0 && (Vi = Gr('canvas')), (Vi.width = e.width), (Vi.height = e.height);
      const n = Vi.getContext('2d');
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), (t = Vi);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn('THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', e),
        t.toDataURL('image/jpeg', 0.6))
      : t.toDataURL('image/png');
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)
    ) {
      const t = Gr('canvas');
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext('2d');
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height),
        a = s.data;
      for (let u = 0; u < a.length; u++) a[u] = ur(a[u] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(ur(t[n] / 255) * 255))
          : (t[n] = ur(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn('THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.'), e
      );
  }
}
let xf = 0;
class nc {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, 'id', { value: xf++ }),
      (this.uuid = gr()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: '' },
      s = this.data;
    if (s !== null) {
      let a;
      if (Array.isArray(s)) {
        a = [];
        for (let u = 0, c = s.length; u < c; u++) s[u].isDataTexture ? a.push(aa(s[u].image)) : a.push(aa(s[u]));
      } else a = aa(s);
      n.url = a;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function aa(i) {
  return (typeof HTMLImageElement < 'u' && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && i instanceof ImageBitmap)
    ? tc.getDataURL(i)
    : i.data
    ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let Mf = 0;
class fn extends Ui {
  constructor(
    e = fn.DEFAULT_IMAGE,
    t = fn.DEFAULT_MAPPING,
    n = Cn,
    s = Cn,
    a = un,
    u = Br,
    c = Ln,
    h = pi,
    p = fn.DEFAULT_ANISOTROPY,
    g = Ci
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: Mf++ }),
      (this.uuid = gr()),
      (this.name = ''),
      (this.source = new nc(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = s),
      (this.magFilter = a),
      (this.minFilter = u),
      (this.anisotropy = p),
      (this.format = c),
      (this.internalFormat = null),
      (this.type = h),
      (this.offset = new dt(0, 0)),
      (this.repeat = new dt(1, 1)),
      (this.center = new dt(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new ht()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      typeof g == 'string'
        ? (this.colorSpace = g)
        : (Fr('THREE.Texture: Property .encoding has been replaced by .colorSpace.'),
          (this.colorSpace = g === Ri ? Pt : Ci)),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: 'Texture', generator: 'Texture.toJSON' },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  transformUv(e) {
    if (this.mapping !== ql) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case La:
          e.x = e.x - Math.floor(e.x);
          break;
        case Cn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Pa:
          Math.abs(Math.floor(e.x) % 2) === 1 ? (e.x = Math.ceil(e.x) - e.x) : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case La:
          e.y = e.y - Math.floor(e.y);
          break;
        case Cn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Pa:
          Math.abs(Math.floor(e.y) % 2) === 1 ? (e.y = Math.ceil(e.y) - e.y) : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  get encoding() {
    return Fr('THREE.Texture: Property .encoding has been replaced by .colorSpace.'), this.colorSpace === Pt ? Ri : Ql;
  }
  set encoding(e) {
    Fr('THREE.Texture: Property .encoding has been replaced by .colorSpace.'), (this.colorSpace = e === Ri ? Pt : Ci);
  }
}
fn.DEFAULT_IMAGE = null;
fn.DEFAULT_MAPPING = ql;
fn.DEFAULT_ANISOTROPY = 1;
class $t {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    ($t.prototype.isVector4 = !0), (this.x = e), (this.y = t), (this.z = n), (this.w = s);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, s) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = s), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w !== void 0 ? e.w : 1), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), (this.w = e.w + t.w), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), (this.w += e.w * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), (this.w = e.w - t.w), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      a = this.w,
      u = e.elements;
    return (
      (this.x = u[0] * t + u[4] * n + u[8] * s + u[12] * a),
      (this.y = u[1] * t + u[5] * n + u[9] * s + u[13] * a),
      (this.z = u[2] * t + u[6] * n + u[10] * s + u[14] * a),
      (this.w = u[3] * t + u[7] * n + u[11] * s + u[15] * a),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, s, a;
    const h = e.elements,
      p = h[0],
      g = h[4],
      _ = h[8],
      v = h[1],
      y = h[5],
      T = h[9],
      b = h[2],
      S = h[6],
      m = h[10];
    if (Math.abs(g - v) < 0.01 && Math.abs(_ - b) < 0.01 && Math.abs(T - S) < 0.01) {
      if (Math.abs(g + v) < 0.1 && Math.abs(_ + b) < 0.1 && Math.abs(T + S) < 0.1 && Math.abs(p + y + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const R = (p + 1) / 2,
        D = (y + 1) / 2,
        F = (m + 1) / 2,
        k = (g + v) / 4,
        l = (_ + b) / 4,
        le = (T + S) / 4;
      return (
        R > D && R > F
          ? R < 0.01
            ? ((n = 0), (s = 0.707106781), (a = 0.707106781))
            : ((n = Math.sqrt(R)), (s = k / n), (a = l / n))
          : D > F
          ? D < 0.01
            ? ((n = 0.707106781), (s = 0), (a = 0.707106781))
            : ((s = Math.sqrt(D)), (n = k / s), (a = le / s))
          : F < 0.01
          ? ((n = 0.707106781), (s = 0.707106781), (a = 0))
          : ((a = Math.sqrt(F)), (n = l / a), (s = le / a)),
        this.set(n, s, a, t),
        this
      );
    }
    let O = Math.sqrt((S - T) * (S - T) + (_ - b) * (_ - b) + (v - g) * (v - g));
    return (
      Math.abs(O) < 0.001 && (O = 1),
      (this.x = (S - T) / O),
      (this.y = (_ - b) / O),
      (this.z = (v - g) / O),
      (this.w = Math.acos((p + y + m - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), (this.w = e[t + 3]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), (e[t + 3] = this.w), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), (this.w = e.getW(t)), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), (this.w = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Sf extends Ui {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new $t(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new $t(0, 0, e, t));
    const s = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 &&
      (Fr('THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.'),
      (n.colorSpace = n.encoding === Ri ? Pt : Ci)),
      (this.texture = new fn(
        s,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : un),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new nc(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
class Li extends Sf {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class ic extends fn {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: s }),
      (this.magFilter = Kt),
      (this.minFilter = Kt),
      (this.wrapR = Cn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class yf extends fn {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: s }),
      (this.magFilter = Kt),
      (this.minFilter = Kt),
      (this.wrapR = Cn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Pi {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    (this.isQuaternion = !0), (this._x = e), (this._y = t), (this._z = n), (this._w = s);
  }
  static slerpFlat(e, t, n, s, a, u, c) {
    let h = n[s + 0],
      p = n[s + 1],
      g = n[s + 2],
      _ = n[s + 3];
    const v = a[u + 0],
      y = a[u + 1],
      T = a[u + 2],
      b = a[u + 3];
    if (c === 0) {
      (e[t + 0] = h), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = _);
      return;
    }
    if (c === 1) {
      (e[t + 0] = v), (e[t + 1] = y), (e[t + 2] = T), (e[t + 3] = b);
      return;
    }
    if (_ !== b || h !== v || p !== y || g !== T) {
      let S = 1 - c;
      const m = h * v + p * y + g * T + _ * b,
        O = m >= 0 ? 1 : -1,
        R = 1 - m * m;
      if (R > Number.EPSILON) {
        const F = Math.sqrt(R),
          k = Math.atan2(F, m * O);
        (S = Math.sin(S * k) / F), (c = Math.sin(c * k) / F);
      }
      const D = c * O;
      if (((h = h * S + v * D), (p = p * S + y * D), (g = g * S + T * D), (_ = _ * S + b * D), S === 1 - c)) {
        const F = 1 / Math.sqrt(h * h + p * p + g * g + _ * _);
        (h *= F), (p *= F), (g *= F), (_ *= F);
      }
    }
    (e[t] = h), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = _);
  }
  static multiplyQuaternionsFlat(e, t, n, s, a, u) {
    const c = n[s],
      h = n[s + 1],
      p = n[s + 2],
      g = n[s + 3],
      _ = a[u],
      v = a[u + 1],
      y = a[u + 2],
      T = a[u + 3];
    return (
      (e[t] = c * T + g * _ + h * y - p * v),
      (e[t + 1] = h * T + g * v + p * _ - c * y),
      (e[t + 2] = p * T + g * y + c * v - h * _),
      (e[t + 3] = g * T - c * _ - h * v - p * y),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, s) {
    return (this._x = e), (this._y = t), (this._z = n), (this._w = s), this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (this._x = e.x), (this._y = e.y), (this._z = e.z), (this._w = e.w), this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x,
      s = e._y,
      a = e._z,
      u = e._order,
      c = Math.cos,
      h = Math.sin,
      p = c(n / 2),
      g = c(s / 2),
      _ = c(a / 2),
      v = h(n / 2),
      y = h(s / 2),
      T = h(a / 2);
    switch (u) {
      case 'XYZ':
        (this._x = v * g * _ + p * y * T),
          (this._y = p * y * _ - v * g * T),
          (this._z = p * g * T + v * y * _),
          (this._w = p * g * _ - v * y * T);
        break;
      case 'YXZ':
        (this._x = v * g * _ + p * y * T),
          (this._y = p * y * _ - v * g * T),
          (this._z = p * g * T - v * y * _),
          (this._w = p * g * _ + v * y * T);
        break;
      case 'ZXY':
        (this._x = v * g * _ - p * y * T),
          (this._y = p * y * _ + v * g * T),
          (this._z = p * g * T + v * y * _),
          (this._w = p * g * _ - v * y * T);
        break;
      case 'ZYX':
        (this._x = v * g * _ - p * y * T),
          (this._y = p * y * _ + v * g * T),
          (this._z = p * g * T - v * y * _),
          (this._w = p * g * _ + v * y * T);
        break;
      case 'YZX':
        (this._x = v * g * _ + p * y * T),
          (this._y = p * y * _ + v * g * T),
          (this._z = p * g * T - v * y * _),
          (this._w = p * g * _ - v * y * T);
        break;
      case 'XZY':
        (this._x = v * g * _ - p * y * T),
          (this._y = p * y * _ - v * g * T),
          (this._z = p * g * T + v * y * _),
          (this._w = p * g * _ + v * y * T);
        break;
      default:
        console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + u);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      s = Math.sin(n);
    return (
      (this._x = e.x * s),
      (this._y = e.y * s),
      (this._z = e.z * s),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      s = t[4],
      a = t[8],
      u = t[1],
      c = t[5],
      h = t[9],
      p = t[2],
      g = t[6],
      _ = t[10],
      v = n + c + _;
    if (v > 0) {
      const y = 0.5 / Math.sqrt(v + 1);
      (this._w = 0.25 / y), (this._x = (g - h) * y), (this._y = (a - p) * y), (this._z = (u - s) * y);
    } else if (n > c && n > _) {
      const y = 2 * Math.sqrt(1 + n - c - _);
      (this._w = (g - h) / y), (this._x = 0.25 * y), (this._y = (s + u) / y), (this._z = (a + p) / y);
    } else if (c > _) {
      const y = 2 * Math.sqrt(1 + c - n - _);
      (this._w = (a - p) / y), (this._x = (s + u) / y), (this._y = 0.25 * y), (this._z = (h + g) / y);
    } else {
      const y = 2 * Math.sqrt(1 + _ - n - c);
      (this._w = (u - s) / y), (this._x = (a + p) / y), (this._y = (h + g) / y), (this._z = 0.25 * y);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(tn(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      s = e._y,
      a = e._z,
      u = e._w,
      c = t._x,
      h = t._y,
      p = t._z,
      g = t._w;
    return (
      (this._x = n * g + u * c + s * p - a * h),
      (this._y = s * g + u * h + a * c - n * p),
      (this._z = a * g + u * p + n * h - s * c),
      (this._w = u * g - n * c - s * h - a * p),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      s = this._y,
      a = this._z,
      u = this._w;
    let c = u * e._w + n * e._x + s * e._y + a * e._z;
    if (
      (c < 0 ? ((this._w = -e._w), (this._x = -e._x), (this._y = -e._y), (this._z = -e._z), (c = -c)) : this.copy(e),
      c >= 1)
    )
      return (this._w = u), (this._x = n), (this._y = s), (this._z = a), this;
    const h = 1 - c * c;
    if (h <= Number.EPSILON) {
      const y = 1 - t;
      return (
        (this._w = y * u + t * this._w),
        (this._x = y * n + t * this._x),
        (this._y = y * s + t * this._y),
        (this._z = y * a + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const p = Math.sqrt(h),
      g = Math.atan2(p, c),
      _ = Math.sin((1 - t) * g) / p,
      v = Math.sin(t * g) / p;
    return (
      (this._w = u * _ + this._w * v),
      (this._x = n * _ + this._x * v),
      (this._y = s * _ + this._y * v),
      (this._z = a * _ + this._z * v),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      s = 2 * Math.PI * Math.random(),
      a = 2 * Math.PI * Math.random();
    return this.set(t * Math.cos(s), n * Math.sin(a), n * Math.cos(a), t * Math.sin(s));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]), (this._y = e[t + 1]), (this._z = e[t + 2]), (this._w = e[t + 3]), this._onChangeCallback(), this
    );
  }
  toArray(e = [], t = 0) {
    return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._w), e;
  }
  fromBufferAttribute(e, t) {
    return (this._x = e.getX(t)), (this._y = e.getY(t)), (this._z = e.getZ(t)), (this._w = e.getW(t)), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class X {
  constructor(e = 0, t = 0, n = 0) {
    (X.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), (this.x = e), (this.y = t), (this.z = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Xo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Xo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[3] * n + a[6] * s),
      (this.y = a[1] * t + a[4] * n + a[7] * s),
      (this.z = a[2] * t + a[5] * n + a[8] * s),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      a = e.elements,
      u = 1 / (a[3] * t + a[7] * n + a[11] * s + a[15]);
    return (
      (this.x = (a[0] * t + a[4] * n + a[8] * s + a[12]) * u),
      (this.y = (a[1] * t + a[5] * n + a[9] * s + a[13]) * u),
      (this.z = (a[2] * t + a[6] * n + a[10] * s + a[14]) * u),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      a = e.x,
      u = e.y,
      c = e.z,
      h = e.w,
      p = h * t + u * s - c * n,
      g = h * n + c * t - a * s,
      _ = h * s + a * n - u * t,
      v = -a * t - u * n - c * s;
    return (
      (this.x = p * h + v * -a + g * -c - _ * -u),
      (this.y = g * h + v * -u + _ * -a - p * -c),
      (this.z = _ * h + v * -c + p * -u - g * -a),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * s),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z)), this;
  }
  max(e) {
    return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z)), this;
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), (this.z = Math.trunc(this.z)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), (this.z += (e.z - this.z) * t), this;
  }
  lerpVectors(e, t, n) {
    return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), (this.z = e.z + (t.z - e.z) * n), this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      s = e.y,
      a = e.z,
      u = t.x,
      c = t.y,
      h = t.z;
    return (this.x = s * h - a * c), (this.y = a * u - n * h), (this.z = n * c - s * u), this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return oa.copy(this).projectOnVector(e), this.sub(oa);
  }
  reflect(e) {
    return this.sub(oa.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(tn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return (this.x = s * Math.sin(n)), (this.y = Math.cos(t) * e), (this.z = s * Math.cos(n)), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      s = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = s), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const oa = new X(),
  Xo = new Pi();
class Wr {
  constructor(e = new X(1 / 0, 1 / 0, 1 / 0), t = new X(-1 / 0, -1 / 0, -1 / 0)) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(jn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(jn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = jn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if ((e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0))
      e.boundingBox === null && e.computeBoundingBox(),
        Wi.copy(e.boundingBox),
        Wi.applyMatrix4(e.matrixWorld),
        this.union(Wi);
    else {
      const s = e.geometry;
      if (s !== void 0)
        if (t && s.attributes !== void 0 && s.attributes.position !== void 0) {
          const a = s.attributes.position;
          for (let u = 0, c = a.count; u < c; u++)
            jn.fromBufferAttribute(a, u).applyMatrix4(e.matrixWorld), this.expandByPoint(jn);
        } else
          s.boundingBox === null && s.computeBoundingBox(),
            Wi.copy(s.boundingBox),
            Wi.applyMatrix4(e.matrixWorld),
            this.union(Wi);
    }
    const n = e.children;
    for (let s = 0, a = n.length; s < a; s++) this.expandByObject(n[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, jn), jn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Lr),
      es.subVectors(this.max, Lr),
      Xi.subVectors(e.a, Lr),
      qi.subVectors(e.b, Lr),
      ji.subVectors(e.c, Lr),
      si.subVectors(qi, Xi),
      ai.subVectors(ji, qi),
      Mi.subVectors(Xi, ji);
    let t = [
      0,
      -si.z,
      si.y,
      0,
      -ai.z,
      ai.y,
      0,
      -Mi.z,
      Mi.y,
      si.z,
      0,
      -si.x,
      ai.z,
      0,
      -ai.x,
      Mi.z,
      0,
      -Mi.x,
      -si.y,
      si.x,
      0,
      -ai.y,
      ai.x,
      0,
      -Mi.y,
      Mi.x,
      0
    ];
    return !la(t, Xi, qi, ji, es) || ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !la(t, Xi, qi, ji, es))
      ? !1
      : (ts.crossVectors(si, ai), (t = [ts.x, ts.y, ts.z]), la(t, Xi, qi, ji, es));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, jn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), (e.radius = this.getSize(jn).length() * 0.5)), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(qn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const qn = [new X(), new X(), new X(), new X(), new X(), new X(), new X(), new X()],
  jn = new X(),
  Wi = new Wr(),
  Xi = new X(),
  qi = new X(),
  ji = new X(),
  si = new X(),
  ai = new X(),
  Mi = new X(),
  Lr = new X(),
  es = new X(),
  ts = new X(),
  Si = new X();
function la(i, e, t, n, s) {
  for (let a = 0, u = i.length - 3; a <= u; a += 3) {
    Si.fromArray(i, a);
    const c = s.x * Math.abs(Si.x) + s.y * Math.abs(Si.y) + s.z * Math.abs(Si.z),
      h = e.dot(Si),
      p = t.dot(Si),
      g = n.dot(Si);
    if (Math.max(-Math.max(h, p, g), Math.min(h, p, g)) > c) return !1;
  }
  return !0;
}
const Ef = new Wr(),
  Pr = new X(),
  ca = new X();
class Xr {
  constructor(e = new X(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ef.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let a = 0, u = e.length; a < u; a++) s = Math.max(s, n.distanceToSquared(e[a]));
    return (this.radius = Math.sqrt(s)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), (this.radius = this.radius * e.getMaxScaleOnAxis()), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Pr.subVectors(e, this.center);
    const t = Pr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Pr, s / n), (this.radius += s);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (ca.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Pr.copy(e.center).add(ca)),
            this.expandByPoint(Pr.copy(e.center).sub(ca))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Yn = new X(),
  ua = new X(),
  ns = new X(),
  oi = new X(),
  fa = new X(),
  is = new X(),
  ha = new X();
class Ps {
  constructor(e = new X(), t = new X(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Yn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Yn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Yn.copy(this.origin).addScaledVector(this.direction, t), Yn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    ua.copy(e).add(t).multiplyScalar(0.5), ns.copy(t).sub(e).normalize(), oi.copy(this.origin).sub(ua);
    const a = e.distanceTo(t) * 0.5,
      u = -this.direction.dot(ns),
      c = oi.dot(this.direction),
      h = -oi.dot(ns),
      p = oi.lengthSq(),
      g = Math.abs(1 - u * u);
    let _, v, y, T;
    if (g > 0)
      if (((_ = u * h - c), (v = u * c - h), (T = a * g), _ >= 0))
        if (v >= -T)
          if (v <= T) {
            const b = 1 / g;
            (_ *= b), (v *= b), (y = _ * (_ + u * v + 2 * c) + v * (u * _ + v + 2 * h) + p);
          } else (v = a), (_ = Math.max(0, -(u * v + c))), (y = -_ * _ + v * (v + 2 * h) + p);
        else (v = -a), (_ = Math.max(0, -(u * v + c))), (y = -_ * _ + v * (v + 2 * h) + p);
      else
        v <= -T
          ? ((_ = Math.max(0, -(-u * a + c))),
            (v = _ > 0 ? -a : Math.min(Math.max(-a, -h), a)),
            (y = -_ * _ + v * (v + 2 * h) + p))
          : v <= T
          ? ((_ = 0), (v = Math.min(Math.max(-a, -h), a)), (y = v * (v + 2 * h) + p))
          : ((_ = Math.max(0, -(u * a + c))),
            (v = _ > 0 ? a : Math.min(Math.max(-a, -h), a)),
            (y = -_ * _ + v * (v + 2 * h) + p));
    else (v = u > 0 ? -a : a), (_ = Math.max(0, -(u * v + c))), (y = -_ * _ + v * (v + 2 * h) + p);
    return n && n.copy(this.origin).addScaledVector(this.direction, _), s && s.copy(ua).addScaledVector(ns, v), y;
  }
  intersectSphere(e, t) {
    Yn.subVectors(e.center, this.origin);
    const n = Yn.dot(this.direction),
      s = Yn.dot(Yn) - n * n,
      a = e.radius * e.radius;
    if (s > a) return null;
    const u = Math.sqrt(a - s),
      c = n - u,
      h = n + u;
    return h < 0 ? null : c < 0 ? this.at(h, t) : this.at(c, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, s, a, u, c, h;
    const p = 1 / this.direction.x,
      g = 1 / this.direction.y,
      _ = 1 / this.direction.z,
      v = this.origin;
    return (
      p >= 0
        ? ((n = (e.min.x - v.x) * p), (s = (e.max.x - v.x) * p))
        : ((n = (e.max.x - v.x) * p), (s = (e.min.x - v.x) * p)),
      g >= 0
        ? ((a = (e.min.y - v.y) * g), (u = (e.max.y - v.y) * g))
        : ((a = (e.max.y - v.y) * g), (u = (e.min.y - v.y) * g)),
      n > u ||
      a > s ||
      ((a > n || isNaN(n)) && (n = a),
      (u < s || isNaN(s)) && (s = u),
      _ >= 0
        ? ((c = (e.min.z - v.z) * _), (h = (e.max.z - v.z) * _))
        : ((c = (e.max.z - v.z) * _), (h = (e.min.z - v.z) * _)),
      n > h || c > s) ||
      ((c > n || n !== n) && (n = c), (h < s || s !== s) && (s = h), s < 0)
        ? null
        : this.at(n >= 0 ? n : s, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Yn) !== null;
  }
  intersectTriangle(e, t, n, s, a) {
    fa.subVectors(t, e), is.subVectors(n, e), ha.crossVectors(fa, is);
    let u = this.direction.dot(ha),
      c;
    if (u > 0) {
      if (s) return null;
      c = 1;
    } else if (u < 0) (c = -1), (u = -u);
    else return null;
    oi.subVectors(this.origin, e);
    const h = c * this.direction.dot(is.crossVectors(oi, is));
    if (h < 0) return null;
    const p = c * this.direction.dot(fa.cross(oi));
    if (p < 0 || h + p > u) return null;
    const g = -c * oi.dot(ha);
    return g < 0 ? null : this.at(g / u, a);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Gt {
  constructor(e, t, n, s, a, u, c, h, p, g, _, v, y, T, b, S) {
    (Gt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, s, a, u, c, h, p, g, _, v, y, T, b, S);
  }
  set(e, t, n, s, a, u, c, h, p, g, _, v, y, T, b, S) {
    const m = this.elements;
    return (
      (m[0] = e),
      (m[4] = t),
      (m[8] = n),
      (m[12] = s),
      (m[1] = a),
      (m[5] = u),
      (m[9] = c),
      (m[13] = h),
      (m[2] = p),
      (m[6] = g),
      (m[10] = _),
      (m[14] = v),
      (m[3] = y),
      (m[7] = T),
      (m[11] = b),
      (m[15] = S),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Gt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      s = 1 / Yi.setFromMatrixColumn(e, 0).length(),
      a = 1 / Yi.setFromMatrixColumn(e, 1).length(),
      u = 1 / Yi.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * s),
      (t[1] = n[1] * s),
      (t[2] = n[2] * s),
      (t[3] = 0),
      (t[4] = n[4] * a),
      (t[5] = n[5] * a),
      (t[6] = n[6] * a),
      (t[7] = 0),
      (t[8] = n[8] * u),
      (t[9] = n[9] * u),
      (t[10] = n[10] * u),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      a = e.z,
      u = Math.cos(n),
      c = Math.sin(n),
      h = Math.cos(s),
      p = Math.sin(s),
      g = Math.cos(a),
      _ = Math.sin(a);
    if (e.order === 'XYZ') {
      const v = u * g,
        y = u * _,
        T = c * g,
        b = c * _;
      (t[0] = h * g),
        (t[4] = -h * _),
        (t[8] = p),
        (t[1] = y + T * p),
        (t[5] = v - b * p),
        (t[9] = -c * h),
        (t[2] = b - v * p),
        (t[6] = T + y * p),
        (t[10] = u * h);
    } else if (e.order === 'YXZ') {
      const v = h * g,
        y = h * _,
        T = p * g,
        b = p * _;
      (t[0] = v + b * c),
        (t[4] = T * c - y),
        (t[8] = u * p),
        (t[1] = u * _),
        (t[5] = u * g),
        (t[9] = -c),
        (t[2] = y * c - T),
        (t[6] = b + v * c),
        (t[10] = u * h);
    } else if (e.order === 'ZXY') {
      const v = h * g,
        y = h * _,
        T = p * g,
        b = p * _;
      (t[0] = v - b * c),
        (t[4] = -u * _),
        (t[8] = T + y * c),
        (t[1] = y + T * c),
        (t[5] = u * g),
        (t[9] = b - v * c),
        (t[2] = -u * p),
        (t[6] = c),
        (t[10] = u * h);
    } else if (e.order === 'ZYX') {
      const v = u * g,
        y = u * _,
        T = c * g,
        b = c * _;
      (t[0] = h * g),
        (t[4] = T * p - y),
        (t[8] = v * p + b),
        (t[1] = h * _),
        (t[5] = b * p + v),
        (t[9] = y * p - T),
        (t[2] = -p),
        (t[6] = c * h),
        (t[10] = u * h);
    } else if (e.order === 'YZX') {
      const v = u * h,
        y = u * p,
        T = c * h,
        b = c * p;
      (t[0] = h * g),
        (t[4] = b - v * _),
        (t[8] = T * _ + y),
        (t[1] = _),
        (t[5] = u * g),
        (t[9] = -c * g),
        (t[2] = -p * g),
        (t[6] = y * _ + T),
        (t[10] = v - b * _);
    } else if (e.order === 'XZY') {
      const v = u * h,
        y = u * p,
        T = c * h,
        b = c * p;
      (t[0] = h * g),
        (t[4] = -_),
        (t[8] = p * g),
        (t[1] = v * _ + b),
        (t[5] = u * g),
        (t[9] = y * _ - T),
        (t[2] = T * _ - y),
        (t[6] = c * g),
        (t[10] = b * _ + v);
    }
    return (t[3] = 0), (t[7] = 0), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Tf, e, bf);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return (
      mn.subVectors(e, t),
      mn.lengthSq() === 0 && (mn.z = 1),
      mn.normalize(),
      li.crossVectors(n, mn),
      li.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (mn.x += 1e-4) : (mn.z += 1e-4), mn.normalize(), li.crossVectors(n, mn)),
      li.normalize(),
      rs.crossVectors(mn, li),
      (s[0] = li.x),
      (s[4] = rs.x),
      (s[8] = mn.x),
      (s[1] = li.y),
      (s[5] = rs.y),
      (s[9] = mn.y),
      (s[2] = li.z),
      (s[6] = rs.z),
      (s[10] = mn.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      s = t.elements,
      a = this.elements,
      u = n[0],
      c = n[4],
      h = n[8],
      p = n[12],
      g = n[1],
      _ = n[5],
      v = n[9],
      y = n[13],
      T = n[2],
      b = n[6],
      S = n[10],
      m = n[14],
      O = n[3],
      R = n[7],
      D = n[11],
      F = n[15],
      k = s[0],
      l = s[4],
      le = s[8],
      w = s[12],
      I = s[1],
      pe = s[5],
      ve = s[9],
      W = s[13],
      ne = s[2],
      ie = s[6],
      ge = s[10],
      oe = s[14],
      he = s[3],
      xe = s[7],
      de = s[11],
      Q = s[15];
    return (
      (a[0] = u * k + c * I + h * ne + p * he),
      (a[4] = u * l + c * pe + h * ie + p * xe),
      (a[8] = u * le + c * ve + h * ge + p * de),
      (a[12] = u * w + c * W + h * oe + p * Q),
      (a[1] = g * k + _ * I + v * ne + y * he),
      (a[5] = g * l + _ * pe + v * ie + y * xe),
      (a[9] = g * le + _ * ve + v * ge + y * de),
      (a[13] = g * w + _ * W + v * oe + y * Q),
      (a[2] = T * k + b * I + S * ne + m * he),
      (a[6] = T * l + b * pe + S * ie + m * xe),
      (a[10] = T * le + b * ve + S * ge + m * de),
      (a[14] = T * w + b * W + S * oe + m * Q),
      (a[3] = O * k + R * I + D * ne + F * he),
      (a[7] = O * l + R * pe + D * ie + F * xe),
      (a[11] = O * le + R * ve + D * ge + F * de),
      (a[15] = O * w + R * W + D * oe + F * Q),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      s = e[8],
      a = e[12],
      u = e[1],
      c = e[5],
      h = e[9],
      p = e[13],
      g = e[2],
      _ = e[6],
      v = e[10],
      y = e[14],
      T = e[3],
      b = e[7],
      S = e[11],
      m = e[15];
    return (
      T * (+a * h * _ - s * p * _ - a * c * v + n * p * v + s * c * y - n * h * y) +
      b * (+t * h * y - t * p * v + a * u * v - s * u * y + s * p * g - a * h * g) +
      S * (+t * p * _ - t * c * y - a * u * _ + n * u * y + a * c * g - n * p * g) +
      m * (-s * c * g - t * h * _ + t * c * v + s * u * _ - n * u * v + n * h * g)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? ((s[12] = e.x), (s[13] = e.y), (s[14] = e.z)) : ((s[12] = e), (s[13] = t), (s[14] = n)), this;
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      a = e[3],
      u = e[4],
      c = e[5],
      h = e[6],
      p = e[7],
      g = e[8],
      _ = e[9],
      v = e[10],
      y = e[11],
      T = e[12],
      b = e[13],
      S = e[14],
      m = e[15],
      O = _ * S * p - b * v * p + b * h * y - c * S * y - _ * h * m + c * v * m,
      R = T * v * p - g * S * p - T * h * y + u * S * y + g * h * m - u * v * m,
      D = g * b * p - T * _ * p + T * c * y - u * b * y - g * c * m + u * _ * m,
      F = T * _ * h - g * b * h - T * c * v + u * b * v + g * c * S - u * _ * S,
      k = t * O + n * R + s * D + a * F;
    if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const l = 1 / k;
    return (
      (e[0] = O * l),
      (e[1] = (b * v * a - _ * S * a - b * s * y + n * S * y + _ * s * m - n * v * m) * l),
      (e[2] = (c * S * a - b * h * a + b * s * p - n * S * p - c * s * m + n * h * m) * l),
      (e[3] = (_ * h * a - c * v * a - _ * s * p + n * v * p + c * s * y - n * h * y) * l),
      (e[4] = R * l),
      (e[5] = (g * S * a - T * v * a + T * s * y - t * S * y - g * s * m + t * v * m) * l),
      (e[6] = (T * h * a - u * S * a - T * s * p + t * S * p + u * s * m - t * h * m) * l),
      (e[7] = (u * v * a - g * h * a + g * s * p - t * v * p - u * s * y + t * h * y) * l),
      (e[8] = D * l),
      (e[9] = (T * _ * a - g * b * a - T * n * y + t * b * y + g * n * m - t * _ * m) * l),
      (e[10] = (u * b * a - T * c * a + T * n * p - t * b * p - u * n * m + t * c * m) * l),
      (e[11] = (g * c * a - u * _ * a - g * n * p + t * _ * p + u * n * y - t * c * y) * l),
      (e[12] = F * l),
      (e[13] = (g * b * s - T * _ * s + T * n * v - t * b * v - g * n * S + t * _ * S) * l),
      (e[14] = (T * c * s - u * b * s - T * n * h + t * b * h + u * n * S - t * c * S) * l),
      (e[15] = (u * _ * s - g * c * s + g * n * h - t * _ * h - u * n * v + t * c * v) * l),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      a = e.z;
    return (
      (t[0] *= n),
      (t[4] *= s),
      (t[8] *= a),
      (t[1] *= n),
      (t[5] *= s),
      (t[9] *= a),
      (t[2] *= n),
      (t[6] *= s),
      (t[10] *= a),
      (t[3] *= n),
      (t[7] *= s),
      (t[11] *= a),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      s = Math.sin(t),
      a = 1 - n,
      u = e.x,
      c = e.y,
      h = e.z,
      p = a * u,
      g = a * c;
    return (
      this.set(
        p * u + n,
        p * c - s * h,
        p * h + s * c,
        0,
        p * c + s * h,
        g * c + n,
        g * h - s * u,
        0,
        p * h - s * c,
        g * h + s * u,
        a * h * h + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, s, a, u) {
    return this.set(1, n, a, 0, e, 1, u, 0, t, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const s = this.elements,
      a = t._x,
      u = t._y,
      c = t._z,
      h = t._w,
      p = a + a,
      g = u + u,
      _ = c + c,
      v = a * p,
      y = a * g,
      T = a * _,
      b = u * g,
      S = u * _,
      m = c * _,
      O = h * p,
      R = h * g,
      D = h * _,
      F = n.x,
      k = n.y,
      l = n.z;
    return (
      (s[0] = (1 - (b + m)) * F),
      (s[1] = (y + D) * F),
      (s[2] = (T - R) * F),
      (s[3] = 0),
      (s[4] = (y - D) * k),
      (s[5] = (1 - (v + m)) * k),
      (s[6] = (S + O) * k),
      (s[7] = 0),
      (s[8] = (T + R) * l),
      (s[9] = (S - O) * l),
      (s[10] = (1 - (v + b)) * l),
      (s[11] = 0),
      (s[12] = e.x),
      (s[13] = e.y),
      (s[14] = e.z),
      (s[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const s = this.elements;
    let a = Yi.set(s[0], s[1], s[2]).length();
    const u = Yi.set(s[4], s[5], s[6]).length(),
      c = Yi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (a = -a), (e.x = s[12]), (e.y = s[13]), (e.z = s[14]), bn.copy(this);
    const p = 1 / a,
      g = 1 / u,
      _ = 1 / c;
    return (
      (bn.elements[0] *= p),
      (bn.elements[1] *= p),
      (bn.elements[2] *= p),
      (bn.elements[4] *= g),
      (bn.elements[5] *= g),
      (bn.elements[6] *= g),
      (bn.elements[8] *= _),
      (bn.elements[9] *= _),
      (bn.elements[10] *= _),
      t.setFromRotationMatrix(bn),
      (n.x = a),
      (n.y = u),
      (n.z = c),
      this
    );
  }
  makePerspective(e, t, n, s, a, u, c = ei) {
    const h = this.elements,
      p = (2 * a) / (t - e),
      g = (2 * a) / (n - s),
      _ = (t + e) / (t - e),
      v = (n + s) / (n - s);
    let y, T;
    if (c === ei) (y = -(u + a) / (u - a)), (T = (-2 * u * a) / (u - a));
    else if (c === ws) (y = -u / (u - a)), (T = (-u * a) / (u - a));
    else throw new Error('THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + c);
    return (
      (h[0] = p),
      (h[4] = 0),
      (h[8] = _),
      (h[12] = 0),
      (h[1] = 0),
      (h[5] = g),
      (h[9] = v),
      (h[13] = 0),
      (h[2] = 0),
      (h[6] = 0),
      (h[10] = y),
      (h[14] = T),
      (h[3] = 0),
      (h[7] = 0),
      (h[11] = -1),
      (h[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, s, a, u, c = ei) {
    const h = this.elements,
      p = 1 / (t - e),
      g = 1 / (n - s),
      _ = 1 / (u - a),
      v = (t + e) * p,
      y = (n + s) * g;
    let T, b;
    if (c === ei) (T = (u + a) * _), (b = -2 * _);
    else if (c === ws) (T = a * _), (b = -1 * _);
    else throw new Error('THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + c);
    return (
      (h[0] = 2 * p),
      (h[4] = 0),
      (h[8] = 0),
      (h[12] = -v),
      (h[1] = 0),
      (h[5] = 2 * g),
      (h[9] = 0),
      (h[13] = -y),
      (h[2] = 0),
      (h[6] = 0),
      (h[10] = b),
      (h[14] = -T),
      (h[3] = 0),
      (h[7] = 0),
      (h[11] = 0),
      (h[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Yi = new X(),
  bn = new Gt(),
  Tf = new X(0, 0, 0),
  bf = new X(1, 1, 1),
  li = new X(),
  rs = new X(),
  mn = new X(),
  qo = new Gt(),
  jo = new Pi();
class Ds {
  constructor(e = 0, t = 0, n = 0, s = Ds.DEFAULT_ORDER) {
    (this.isEuler = !0), (this._x = e), (this._y = t), (this._z = n), (this._order = s);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, s = this._order) {
    return (this._x = e), (this._y = t), (this._z = n), (this._order = s), this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x), (this._y = e._y), (this._z = e._z), (this._order = e._order), this._onChangeCallback(), this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const s = e.elements,
      a = s[0],
      u = s[4],
      c = s[8],
      h = s[1],
      p = s[5],
      g = s[9],
      _ = s[2],
      v = s[6],
      y = s[10];
    switch (t) {
      case 'XYZ':
        (this._y = Math.asin(tn(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-g, y)), (this._z = Math.atan2(-u, a)))
            : ((this._x = Math.atan2(v, p)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-tn(g, -1, 1))),
          Math.abs(g) < 0.9999999
            ? ((this._y = Math.atan2(c, y)), (this._z = Math.atan2(h, p)))
            : ((this._y = Math.atan2(-_, a)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(tn(v, -1, 1))),
          Math.abs(v) < 0.9999999
            ? ((this._y = Math.atan2(-_, y)), (this._z = Math.atan2(-u, p)))
            : ((this._y = 0), (this._z = Math.atan2(h, a)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-tn(_, -1, 1))),
          Math.abs(_) < 0.9999999
            ? ((this._x = Math.atan2(v, y)), (this._z = Math.atan2(h, a)))
            : ((this._x = 0), (this._z = Math.atan2(-u, p)));
        break;
      case 'YZX':
        (this._z = Math.asin(tn(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(-g, p)), (this._y = Math.atan2(-_, a)))
            : ((this._x = 0), (this._y = Math.atan2(c, y)));
        break;
      case 'XZY':
        (this._z = Math.asin(-tn(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(v, p)), (this._y = Math.atan2(c, a)))
            : ((this._x = Math.atan2(-g, y)), (this._y = 0));
        break;
      default:
        console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + t);
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return qo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(qo, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return jo.setFromEuler(this), this.setFromQuaternion(jo, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._order), e;
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ds.DEFAULT_ORDER = 'XYZ';
class rc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Af = 0;
const Yo = new X(),
  Ki = new Pi(),
  Kn = new Gt(),
  ss = new X(),
  Dr = new X(),
  wf = new X(),
  Rf = new Pi(),
  Ko = new X(1, 0, 0),
  $o = new X(0, 1, 0),
  Zo = new X(0, 0, 1),
  Cf = { type: 'added' },
  Lf = { type: 'removed' };
class on extends Ui {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: Af++ }),
      (this.uuid = gr()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = on.DEFAULT_UP.clone());
    const e = new X(),
      t = new Ds(),
      n = new Pi(),
      s = new X(1, 1, 1);
    function a() {
      n.setFromEuler(t, !1);
    }
    function u() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(a),
      n._onChange(u),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: s },
        modelViewMatrix: { value: new Gt() },
        normalMatrix: { value: new ht() }
      }),
      (this.matrix = new Gt()),
      (this.matrixWorld = new Gt()),
      (this.matrixAutoUpdate = on.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new rc()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ki.setFromAxisAngle(e, t), this.quaternion.multiply(Ki), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ki.setFromAxisAngle(e, t), this.quaternion.premultiply(Ki), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ko, e);
  }
  rotateY(e) {
    return this.rotateOnAxis($o, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Zo, e);
  }
  translateOnAxis(e, t) {
    return Yo.copy(e).applyQuaternion(this.quaternion), this.position.add(Yo.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Ko, e);
  }
  translateY(e) {
    return this.translateOnAxis($o, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Zo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Kn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? ss.copy(e) : ss.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1),
      Dr.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight ? Kn.lookAt(Dr, ss, this.up) : Kn.lookAt(ss, Dr, this.up),
      this.quaternion.setFromRotationMatrix(Kn),
      s && (Kn.extractRotation(s.matrixWorld), Ki.setFromRotationMatrix(Kn), this.quaternion.premultiply(Ki.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e), (e.parent = this), this.children.push(e), e.dispatchEvent(Cf))
          : console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Lf)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Kn.copy(this.matrixWorld).invert(),
      e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Kn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Kn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty('id', e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty('name', e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const u = this.children[n].getObjectByProperty(e, t);
      if (u !== void 0) return u;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let s = 0, a = this.children.length; s < a; s++) {
      const u = this.children[s].getObjectsByProperty(e, t);
      u.length > 0 && (n = n.concat(u));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Dr, e, wf), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Dr, Rf, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) {
      const a = t[n];
      (a.matrixWorldAutoUpdate === !0 || e === !0) && a.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
      t === !0)
    ) {
      const s = this.children;
      for (let a = 0, u = s.length; a < u; a++) {
        const c = s[a];
        c.matrixWorldAutoUpdate === !0 && c.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string',
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      }),
      (n.metadata = { version: 4.6, type: 'Object', generator: 'Object3D.toJSON' }));
    const s = {};
    (s.uuid = this.uuid),
      (s.type = this.type),
      this.name !== '' && (s.name = this.name),
      this.castShadow === !0 && (s.castShadow = !0),
      this.receiveShadow === !0 && (s.receiveShadow = !0),
      this.visible === !1 && (s.visible = !1),
      this.frustumCulled === !1 && (s.frustumCulled = !1),
      this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (s.userData = this.userData),
      (s.layers = this.layers.mask),
      (s.matrix = this.matrix.toArray()),
      (s.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((s.type = 'InstancedMesh'),
        (s.count = this.count),
        (s.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON()));
    function a(c, h) {
      return c[h.uuid] === void 0 && (c[h.uuid] = h.toJSON(e)), h.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (s.background = this.background.toJSON())
          : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = a(e.geometries, this.geometry);
      const c = this.geometry.parameters;
      if (c !== void 0 && c.shapes !== void 0) {
        const h = c.shapes;
        if (Array.isArray(h))
          for (let p = 0, g = h.length; p < g; p++) {
            const _ = h[p];
            a(e.shapes, _);
          }
        else a(e.shapes, h);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((s.bindMode = this.bindMode),
        (s.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 && (a(e.skeletons, this.skeleton), (s.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const c = [];
        for (let h = 0, p = this.material.length; h < p; h++) c.push(a(e.materials, this.material[h]));
        s.material = c;
      } else s.material = a(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let c = 0; c < this.children.length; c++) s.children.push(this.children[c].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let c = 0; c < this.animations.length; c++) {
        const h = this.animations[c];
        s.animations.push(a(e.animations, h));
      }
    }
    if (t) {
      const c = u(e.geometries),
        h = u(e.materials),
        p = u(e.textures),
        g = u(e.images),
        _ = u(e.shapes),
        v = u(e.skeletons),
        y = u(e.animations),
        T = u(e.nodes);
      c.length > 0 && (n.geometries = c),
        h.length > 0 && (n.materials = h),
        p.length > 0 && (n.textures = p),
        g.length > 0 && (n.images = g),
        _.length > 0 && (n.shapes = _),
        v.length > 0 && (n.skeletons = v),
        y.length > 0 && (n.animations = y),
        T.length > 0 && (n.nodes = T);
    }
    return (n.object = s), n;
    function u(c) {
      const h = [];
      for (const p in c) {
        const g = c[p];
        delete g.metadata, h.push(g);
      }
      return h;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const s = e.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
on.DEFAULT_UP = new X(0, 1, 0);
on.DEFAULT_MATRIX_AUTO_UPDATE = !0;
on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const An = new X(),
  $n = new X(),
  da = new X(),
  Zn = new X(),
  $i = new X(),
  Zi = new X(),
  Jo = new X(),
  pa = new X(),
  ma = new X(),
  ga = new X();
let as = !1;
class Rn {
  constructor(e = new X(), t = new X(), n = new X()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), An.subVectors(e, t), s.cross(An);
    const a = s.lengthSq();
    return a > 0 ? s.multiplyScalar(1 / Math.sqrt(a)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, s, a) {
    An.subVectors(s, t), $n.subVectors(n, t), da.subVectors(e, t);
    const u = An.dot(An),
      c = An.dot($n),
      h = An.dot(da),
      p = $n.dot($n),
      g = $n.dot(da),
      _ = u * p - c * c;
    if (_ === 0) return a.set(-2, -1, -1);
    const v = 1 / _,
      y = (p * h - c * g) * v,
      T = (u * g - c * h) * v;
    return a.set(1 - y - T, T, y);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, Zn), Zn.x >= 0 && Zn.y >= 0 && Zn.x + Zn.y <= 1;
  }
  static getUV(e, t, n, s, a, u, c, h) {
    return (
      as === !1 &&
        (console.warn('THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().'), (as = !0)),
      this.getInterpolation(e, t, n, s, a, u, c, h)
    );
  }
  static getInterpolation(e, t, n, s, a, u, c, h) {
    return (
      this.getBarycoord(e, t, n, s, Zn),
      h.setScalar(0),
      h.addScaledVector(a, Zn.x),
      h.addScaledVector(u, Zn.y),
      h.addScaledVector(c, Zn.z),
      h
    );
  }
  static isFrontFacing(e, t, n, s) {
    return An.subVectors(n, t), $n.subVectors(e, t), An.cross($n).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return An.subVectors(this.c, this.b), $n.subVectors(this.a, this.b), An.cross($n).length() * 0.5;
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Rn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Rn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, s, a) {
    return (
      as === !1 &&
        (console.warn('THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().'), (as = !0)),
      Rn.getInterpolation(e, this.a, this.b, this.c, t, n, s, a)
    );
  }
  getInterpolation(e, t, n, s, a) {
    return Rn.getInterpolation(e, this.a, this.b, this.c, t, n, s, a);
  }
  containsPoint(e) {
    return Rn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Rn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      s = this.b,
      a = this.c;
    let u, c;
    $i.subVectors(s, n), Zi.subVectors(a, n), pa.subVectors(e, n);
    const h = $i.dot(pa),
      p = Zi.dot(pa);
    if (h <= 0 && p <= 0) return t.copy(n);
    ma.subVectors(e, s);
    const g = $i.dot(ma),
      _ = Zi.dot(ma);
    if (g >= 0 && _ <= g) return t.copy(s);
    const v = h * _ - g * p;
    if (v <= 0 && h >= 0 && g <= 0) return (u = h / (h - g)), t.copy(n).addScaledVector($i, u);
    ga.subVectors(e, a);
    const y = $i.dot(ga),
      T = Zi.dot(ga);
    if (T >= 0 && y <= T) return t.copy(a);
    const b = y * p - h * T;
    if (b <= 0 && p >= 0 && T <= 0) return (c = p / (p - T)), t.copy(n).addScaledVector(Zi, c);
    const S = g * T - y * _;
    if (S <= 0 && _ - g >= 0 && y - T >= 0)
      return Jo.subVectors(a, s), (c = (_ - g) / (_ - g + (y - T))), t.copy(s).addScaledVector(Jo, c);
    const m = 1 / (S + b + v);
    return (u = b * m), (c = v * m), t.copy(n).addScaledVector($i, u).addScaledVector(Zi, c);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Pf = 0;
class _r extends Ui {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: Pf++ }),
      (this.uuid = gr()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = cr),
      (this.side = mi),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Vl),
      (this.blendDst = Wl),
      (this.blendEquation = ar),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = wa),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Gu),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = ia),
      (this.stencilZFail = ia),
      (this.stencilZPass = ia),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const s = this[t];
        if (s === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: 'Material', generator: 'Material.toJSON' } };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== '' && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
      this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
      this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
      this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid), (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid), (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid), (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid), this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
      this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== cr && (n.blending = this.blending),
      this.side !== mi && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = this.alphaHash),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
      this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== 'round' && (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== 'round' && (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(a) {
      const u = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, u.push(h);
      }
      return u;
    }
    if (t) {
      const a = s(e.textures),
        u = s(e.images);
      a.length > 0 && (n.textures = a), u.length > 0 && (n.images = u);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const s = t.length;
      n = new Array(s);
      for (let a = 0; a !== s; ++a) n[a] = t[a].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const sc = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  },
  wn = { h: 0, s: 0, l: 0 },
  os = { h: 0, s: 0, l: 0 };
function _a(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i
  );
}
class bt {
  constructor(e, t, n) {
    return (this.isColor = !0), (this.r = 1), (this.g = 1), (this.b = 1), this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == 'number' ? this.setHex(s) : typeof s == 'string' && this.setStyle(s);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Pt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Tn.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, s = Tn.workingColorSpace) {
    return (this.r = e), (this.g = t), (this.b = n), Tn.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = Tn.workingColorSpace) {
    if (((e = ka(e, 1)), (t = tn(t, 0, 1)), (n = tn(n, 0, 1)), t === 0)) this.r = this.g = this.b = n;
    else {
      const a = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        u = 2 * n - a;
      (this.r = _a(u, a, e + 1 / 3)), (this.g = _a(u, a, e)), (this.b = _a(u, a, e - 1 / 3));
    }
    return Tn.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = Pt) {
    function n(a) {
      a !== void 0 && parseFloat(a) < 1 && console.warn('THREE.Color: Alpha component of ' + e + ' will be ignored.');
    }
    let s;
    if ((s = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let a;
      const u = s[1],
        c = s[2];
      switch (u) {
        case 'rgb':
        case 'rgba':
          if ((a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)))
            return (
              n(a[4]),
              this.setRGB(
                Math.min(255, parseInt(a[1], 10)) / 255,
                Math.min(255, parseInt(a[2], 10)) / 255,
                Math.min(255, parseInt(a[3], 10)) / 255,
                t
              )
            );
          if ((a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)))
            return (
              n(a[4]),
              this.setRGB(
                Math.min(100, parseInt(a[1], 10)) / 100,
                Math.min(100, parseInt(a[2], 10)) / 100,
                Math.min(100, parseInt(a[3], 10)) / 100,
                t
              )
            );
          break;
        case 'hsl':
        case 'hsla':
          if ((a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)))
            return n(a[4]), this.setHSL(parseFloat(a[1]) / 360, parseFloat(a[2]) / 100, parseFloat(a[3]) / 100, t);
          break;
        default:
          console.warn('THREE.Color: Unknown color model ' + e);
      }
    } else if ((s = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const a = s[1],
        u = a.length;
      if (u === 3)
        return this.setRGB(
          parseInt(a.charAt(0), 16) / 15,
          parseInt(a.charAt(1), 16) / 15,
          parseInt(a.charAt(2), 16) / 15,
          t
        );
      if (u === 6) return this.setHex(parseInt(a, 16), t);
      console.warn('THREE.Color: Invalid hex color ' + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Pt) {
    const n = sc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn('THREE.Color: Unknown color ' + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = ur(e.r)), (this.g = ur(e.g)), (this.b = ur(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = sa(e.r)), (this.g = sa(e.g)), (this.b = sa(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Pt) {
    return (
      Tn.fromWorkingColorSpace(en.copy(this), e),
      Math.round(tn(en.r * 255, 0, 255)) * 65536 +
        Math.round(tn(en.g * 255, 0, 255)) * 256 +
        Math.round(tn(en.b * 255, 0, 255))
    );
  }
  getHexString(e = Pt) {
    return ('000000' + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Tn.workingColorSpace) {
    Tn.fromWorkingColorSpace(en.copy(this), t);
    const n = en.r,
      s = en.g,
      a = en.b,
      u = Math.max(n, s, a),
      c = Math.min(n, s, a);
    let h, p;
    const g = (c + u) / 2;
    if (c === u) (h = 0), (p = 0);
    else {
      const _ = u - c;
      switch (((p = g <= 0.5 ? _ / (u + c) : _ / (2 - u - c)), u)) {
        case n:
          h = (s - a) / _ + (s < a ? 6 : 0);
          break;
        case s:
          h = (a - n) / _ + 2;
          break;
        case a:
          h = (n - s) / _ + 4;
          break;
      }
      h /= 6;
    }
    return (e.h = h), (e.s = p), (e.l = g), e;
  }
  getRGB(e, t = Tn.workingColorSpace) {
    return Tn.fromWorkingColorSpace(en.copy(this), t), (e.r = en.r), (e.g = en.g), (e.b = en.b), e;
  }
  getStyle(e = Pt) {
    Tn.fromWorkingColorSpace(en.copy(this), e);
    const t = en.r,
      n = en.g,
      s = en.b;
    return e !== Pt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(wn), (wn.h += e), (wn.s += t), (wn.l += n), this.setHSL(wn.h, wn.s, wn.l), this;
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this;
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (this.r += (e.r - this.r) * t), (this.g += (e.g - this.g) * t), (this.b += (e.b - this.b) * t), this;
  }
  lerpColors(e, t, n) {
    return (this.r = e.r + (t.r - e.r) * n), (this.g = e.g + (t.g - e.g) * n), (this.b = e.b + (t.b - e.b) * n), this;
  }
  lerpHSL(e, t) {
    this.getHSL(wn), e.getHSL(os);
    const n = Or(wn.h, os.h, t),
      s = Or(wn.s, os.s, t),
      a = Or(wn.l, os.l, t);
    return this.setHSL(n, s, a), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      s = this.b,
      a = e.elements;
    return (
      (this.r = a[0] * t + a[3] * n + a[6] * s),
      (this.g = a[1] * t + a[4] * n + a[7] * s),
      (this.b = a[2] * t + a[5] * n + a[8] * s),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const en = new bt();
bt.NAMES = sc;
class Va extends _r {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = 'MeshBasicMaterial'),
      (this.color = new bt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Xl),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Bt = new X(),
  ls = new dt();
class Bn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e)) throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');
    (this.isBufferAttribute = !0),
      (this.name = ''),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Go),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.gpuType = fi),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let s = 0, a = this.itemSize; s < a; s++) this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ls.fromBufferAttribute(this, t), ls.applyMatrix3(e), this.setXY(t, ls.x, ls.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Bt.fromBufferAttribute(this, t), Bt.applyMatrix3(e), this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Bt.fromBufferAttribute(this, t), Bt.applyMatrix4(e), this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Bt.fromBufferAttribute(this, t), Bt.applyNormalMatrix(e), this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Bt.fromBufferAttribute(this, t), Bt.transformDirection(e), this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = or(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = rn(n, this.array)), (this.array[e * this.itemSize + t] = n), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = or(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = rn(t, this.array)), (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = or(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = rn(t, this.array)), (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = or(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = rn(t, this.array)), (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = or(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = rn(t, this.array)), (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = rn(t, this.array)), (n = rn(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, s) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = rn(t, this.array)), (n = rn(n, this.array)), (s = rn(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = s),
      this
    );
  }
  setXYZW(e, t, n, s, a) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = rn(t, this.array)), (n = rn(n, this.array)), (s = rn(s, this.array)), (a = rn(a, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = s),
      (this.array[e + 3] = a),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return (
      this.name !== '' && (e.name = this.name),
      this.usage !== Go && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange),
      e
    );
  }
}
class ac extends Bn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class oc extends Bn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Zt extends Bn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Df = 0;
const xn = new Gt(),
  va = new on(),
  Ji = new X(),
  gn = new Wr(),
  Ur = new Wr(),
  Xt = new X();
class hn extends Ui {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: Df++ }),
      (this.uuid = gr()),
      (this.name = ''),
      (this.type = 'BufferGeometry'),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? (this.index = new (ec(e) ? oc : ac)(e, 1)) : (this.index = e), this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const a = new ht().getNormalMatrix(e);
      n.applyNormalMatrix(a), (n.needsUpdate = !0);
    }
    const s = this.attributes.tangent;
    return (
      s !== void 0 && (s.transformDirection(e), (s.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return xn.makeRotationFromQuaternion(e), this.applyMatrix4(xn), this;
  }
  rotateX(e) {
    return xn.makeRotationX(e), this.applyMatrix4(xn), this;
  }
  rotateY(e) {
    return xn.makeRotationY(e), this.applyMatrix4(xn), this;
  }
  rotateZ(e) {
    return xn.makeRotationZ(e), this.applyMatrix4(xn), this;
  }
  translate(e, t, n) {
    return xn.makeTranslation(e, t, n), this.applyMatrix4(xn), this;
  }
  scale(e, t, n) {
    return xn.makeScale(e, t, n), this.applyMatrix4(xn), this;
  }
  lookAt(e) {
    return va.lookAt(e), va.updateMatrix(), this.applyMatrix4(va.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ji).negate(), this.translate(Ji.x, Ji.y, Ji.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, s = e.length; n < s; n++) {
      const a = e[n];
      t.push(a.x, a.y, a.z || 0);
    }
    return this.setAttribute('position', new Zt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Wr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(new X(-1 / 0, -1 / 0, -1 / 0), new X(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, s = t.length; n < s; n++) {
          const a = t[n];
          gn.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (Xt.addVectors(this.boundingBox.min, gn.min),
                this.boundingBox.expandByPoint(Xt),
                Xt.addVectors(this.boundingBox.max, gn.max),
                this.boundingBox.expandByPoint(Xt))
              : (this.boundingBox.expandByPoint(gn.min), this.boundingBox.expandByPoint(gn.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Xr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new X(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((gn.setFromBufferAttribute(e), t))
        for (let a = 0, u = t.length; a < u; a++) {
          const c = t[a];
          Ur.setFromBufferAttribute(c),
            this.morphTargetsRelative
              ? (Xt.addVectors(gn.min, Ur.min),
                gn.expandByPoint(Xt),
                Xt.addVectors(gn.max, Ur.max),
                gn.expandByPoint(Xt))
              : (gn.expandByPoint(Ur.min), gn.expandByPoint(Ur.max));
        }
      gn.getCenter(n);
      let s = 0;
      for (let a = 0, u = e.count; a < u; a++) Xt.fromBufferAttribute(e, a), (s = Math.max(s, n.distanceToSquared(Xt)));
      if (t)
        for (let a = 0, u = t.length; a < u; a++) {
          const c = t[a],
            h = this.morphTargetsRelative;
          for (let p = 0, g = c.count; p < g; p++)
            Xt.fromBufferAttribute(c, p),
              h && (Ji.fromBufferAttribute(e, p), Xt.add(Ji)),
              (s = Math.max(s, n.distanceToSquared(Xt)));
        }
      (this.boundingSphere.radius = Math.sqrt(s)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error(
        'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)'
      );
      return;
    }
    const n = e.array,
      s = t.position.array,
      a = t.normal.array,
      u = t.uv.array,
      c = s.length / 3;
    this.hasAttribute('tangent') === !1 && this.setAttribute('tangent', new Bn(new Float32Array(4 * c), 4));
    const h = this.getAttribute('tangent').array,
      p = [],
      g = [];
    for (let I = 0; I < c; I++) (p[I] = new X()), (g[I] = new X());
    const _ = new X(),
      v = new X(),
      y = new X(),
      T = new dt(),
      b = new dt(),
      S = new dt(),
      m = new X(),
      O = new X();
    function R(I, pe, ve) {
      _.fromArray(s, I * 3),
        v.fromArray(s, pe * 3),
        y.fromArray(s, ve * 3),
        T.fromArray(u, I * 2),
        b.fromArray(u, pe * 2),
        S.fromArray(u, ve * 2),
        v.sub(_),
        y.sub(_),
        b.sub(T),
        S.sub(T);
      const W = 1 / (b.x * S.y - S.x * b.y);
      isFinite(W) &&
        (m.copy(v).multiplyScalar(S.y).addScaledVector(y, -b.y).multiplyScalar(W),
        O.copy(y).multiplyScalar(b.x).addScaledVector(v, -S.x).multiplyScalar(W),
        p[I].add(m),
        p[pe].add(m),
        p[ve].add(m),
        g[I].add(O),
        g[pe].add(O),
        g[ve].add(O));
    }
    let D = this.groups;
    D.length === 0 && (D = [{ start: 0, count: n.length }]);
    for (let I = 0, pe = D.length; I < pe; ++I) {
      const ve = D[I],
        W = ve.start,
        ne = ve.count;
      for (let ie = W, ge = W + ne; ie < ge; ie += 3) R(n[ie + 0], n[ie + 1], n[ie + 2]);
    }
    const F = new X(),
      k = new X(),
      l = new X(),
      le = new X();
    function w(I) {
      l.fromArray(a, I * 3), le.copy(l);
      const pe = p[I];
      F.copy(pe), F.sub(l.multiplyScalar(l.dot(pe))).normalize(), k.crossVectors(le, pe);
      const W = k.dot(g[I]) < 0 ? -1 : 1;
      (h[I * 4] = F.x), (h[I * 4 + 1] = F.y), (h[I * 4 + 2] = F.z), (h[I * 4 + 3] = W);
    }
    for (let I = 0, pe = D.length; I < pe; ++I) {
      const ve = D[I],
        W = ve.start,
        ne = ve.count;
      for (let ie = W, ge = W + ne; ie < ge; ie += 3) w(n[ie + 0]), w(n[ie + 1]), w(n[ie + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute('position');
    if (t !== void 0) {
      let n = this.getAttribute('normal');
      if (n === void 0) (n = new Bn(new Float32Array(t.count * 3), 3)), this.setAttribute('normal', n);
      else for (let v = 0, y = n.count; v < y; v++) n.setXYZ(v, 0, 0, 0);
      const s = new X(),
        a = new X(),
        u = new X(),
        c = new X(),
        h = new X(),
        p = new X(),
        g = new X(),
        _ = new X();
      if (e)
        for (let v = 0, y = e.count; v < y; v += 3) {
          const T = e.getX(v + 0),
            b = e.getX(v + 1),
            S = e.getX(v + 2);
          s.fromBufferAttribute(t, T),
            a.fromBufferAttribute(t, b),
            u.fromBufferAttribute(t, S),
            g.subVectors(u, a),
            _.subVectors(s, a),
            g.cross(_),
            c.fromBufferAttribute(n, T),
            h.fromBufferAttribute(n, b),
            p.fromBufferAttribute(n, S),
            c.add(g),
            h.add(g),
            p.add(g),
            n.setXYZ(T, c.x, c.y, c.z),
            n.setXYZ(b, h.x, h.y, h.z),
            n.setXYZ(S, p.x, p.y, p.z);
        }
      else
        for (let v = 0, y = t.count; v < y; v += 3)
          s.fromBufferAttribute(t, v + 0),
            a.fromBufferAttribute(t, v + 1),
            u.fromBufferAttribute(t, v + 2),
            g.subVectors(u, a),
            _.subVectors(s, a),
            g.cross(_),
            n.setXYZ(v + 0, g.x, g.y, g.z),
            n.setXYZ(v + 1, g.x, g.y, g.z),
            n.setXYZ(v + 2, g.x, g.y, g.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Xt.fromBufferAttribute(e, t), Xt.normalize(), e.setXYZ(t, Xt.x, Xt.y, Xt.z);
  }
  toNonIndexed() {
    function e(c, h) {
      const p = c.array,
        g = c.itemSize,
        _ = c.normalized,
        v = new p.constructor(h.length * g);
      let y = 0,
        T = 0;
      for (let b = 0, S = h.length; b < S; b++) {
        c.isInterleavedBufferAttribute ? (y = h[b] * c.data.stride + c.offset) : (y = h[b] * g);
        for (let m = 0; m < g; m++) v[T++] = p[y++];
      }
      return new Bn(v, g, _);
    }
    if (this.index === null)
      return console.warn('THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'), this;
    const t = new hn(),
      n = this.index.array,
      s = this.attributes;
    for (const c in s) {
      const h = s[c],
        p = e(h, n);
      t.setAttribute(c, p);
    }
    const a = this.morphAttributes;
    for (const c in a) {
      const h = [],
        p = a[c];
      for (let g = 0, _ = p.length; g < _; g++) {
        const v = p[g],
          y = e(v, n);
        h.push(y);
      }
      t.morphAttributes[c] = h;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const u = this.groups;
    for (let c = 0, h = u.length; c < h; c++) {
      const p = u[c];
      t.addGroup(p.start, p.count, p.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: 'BufferGeometry', generator: 'BufferGeometry.toJSON' } };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== '' && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const h = this.parameters;
      for (const p in h) h[p] !== void 0 && (e[p] = h[p]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const h in n) {
      const p = n[h];
      e.data.attributes[h] = p.toJSON(e.data);
    }
    const s = {};
    let a = !1;
    for (const h in this.morphAttributes) {
      const p = this.morphAttributes[h],
        g = [];
      for (let _ = 0, v = p.length; _ < v; _++) {
        const y = p[_];
        g.push(y.toJSON(e.data));
      }
      g.length > 0 && ((s[h] = g), (a = !0));
    }
    a && ((e.data.morphAttributes = s), (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const u = this.groups;
    u.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(u)));
    const c = this.boundingSphere;
    return c !== null && (e.data.boundingSphere = { center: c.center.toArray(), radius: c.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const s = e.attributes;
    for (const p in s) {
      const g = s[p];
      this.setAttribute(p, g.clone(t));
    }
    const a = e.morphAttributes;
    for (const p in a) {
      const g = [],
        _ = a[p];
      for (let v = 0, y = _.length; v < y; v++) g.push(_[v].clone(t));
      this.morphAttributes[p] = g;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const u = e.groups;
    for (let p = 0, g = u.length; p < g; p++) {
      const _ = u[p];
      this.addGroup(_.start, _.count, _.materialIndex);
    }
    const c = e.boundingBox;
    c !== null && (this.boundingBox = c.clone());
    const h = e.boundingSphere;
    return (
      h !== null && (this.boundingSphere = h.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
const Qo = new Gt(),
  yi = new Ps(),
  cs = new Xr(),
  el = new X(),
  Qi = new X(),
  er = new X(),
  tr = new X(),
  xa = new X(),
  us = new X(),
  fs = new dt(),
  hs = new dt(),
  ds = new dt(),
  tl = new X(),
  nl = new X(),
  il = new X(),
  ps = new X(),
  ms = new X();
class ti extends on {
  constructor(e = new hn(), t = new Va()) {
    super(),
      (this.isMesh = !0),
      (this.type = 'Mesh'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
      (this.material = Array.isArray(e.material) ? e.material.slice() : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let a = 0, u = s.length; a < u; a++) {
          const c = s[a].name || String(a);
          this.morphTargetInfluences.push(0), (this.morphTargetDictionary[c] = a);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      s = n.attributes.position,
      a = n.morphAttributes.position,
      u = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const c = this.morphTargetInfluences;
    if (a && c) {
      us.set(0, 0, 0);
      for (let h = 0, p = a.length; h < p; h++) {
        const g = c[h],
          _ = a[h];
        g !== 0 && (xa.fromBufferAttribute(_, e), u ? us.addScaledVector(xa, g) : us.addScaledVector(xa.sub(t), g));
      }
      t.add(us);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      s = this.material,
      a = this.matrixWorld;
    s !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      cs.copy(n.boundingSphere),
      cs.applyMatrix4(a),
      yi.copy(e.ray).recast(e.near),
      !(
        cs.containsPoint(yi.origin) === !1 &&
        (yi.intersectSphere(cs, el) === null || yi.origin.distanceToSquared(el) > (e.far - e.near) ** 2)
      ) &&
        (Qo.copy(a).invert(),
        yi.copy(e.ray).applyMatrix4(Qo),
        !(n.boundingBox !== null && yi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, yi)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const a = this.geometry,
      u = this.material,
      c = a.index,
      h = a.attributes.position,
      p = a.attributes.uv,
      g = a.attributes.uv1,
      _ = a.attributes.normal,
      v = a.groups,
      y = a.drawRange;
    if (c !== null)
      if (Array.isArray(u))
        for (let T = 0, b = v.length; T < b; T++) {
          const S = v[T],
            m = u[S.materialIndex],
            O = Math.max(S.start, y.start),
            R = Math.min(c.count, Math.min(S.start + S.count, y.start + y.count));
          for (let D = O, F = R; D < F; D += 3) {
            const k = c.getX(D),
              l = c.getX(D + 1),
              le = c.getX(D + 2);
            (s = gs(this, m, e, n, p, g, _, k, l, le)),
              s && ((s.faceIndex = Math.floor(D / 3)), (s.face.materialIndex = S.materialIndex), t.push(s));
          }
        }
      else {
        const T = Math.max(0, y.start),
          b = Math.min(c.count, y.start + y.count);
        for (let S = T, m = b; S < m; S += 3) {
          const O = c.getX(S),
            R = c.getX(S + 1),
            D = c.getX(S + 2);
          (s = gs(this, u, e, n, p, g, _, O, R, D)), s && ((s.faceIndex = Math.floor(S / 3)), t.push(s));
        }
      }
    else if (h !== void 0)
      if (Array.isArray(u))
        for (let T = 0, b = v.length; T < b; T++) {
          const S = v[T],
            m = u[S.materialIndex],
            O = Math.max(S.start, y.start),
            R = Math.min(h.count, Math.min(S.start + S.count, y.start + y.count));
          for (let D = O, F = R; D < F; D += 3) {
            const k = D,
              l = D + 1,
              le = D + 2;
            (s = gs(this, m, e, n, p, g, _, k, l, le)),
              s && ((s.faceIndex = Math.floor(D / 3)), (s.face.materialIndex = S.materialIndex), t.push(s));
          }
        }
      else {
        const T = Math.max(0, y.start),
          b = Math.min(h.count, y.start + y.count);
        for (let S = T, m = b; S < m; S += 3) {
          const O = S,
            R = S + 1,
            D = S + 2;
          (s = gs(this, u, e, n, p, g, _, O, R, D)), s && ((s.faceIndex = Math.floor(S / 3)), t.push(s));
        }
      }
  }
}
function Uf(i, e, t, n, s, a, u, c) {
  let h;
  if (
    (e.side === an ? (h = n.intersectTriangle(u, a, s, !0, c)) : (h = n.intersectTriangle(s, a, u, e.side === mi, c)),
    h === null)
  )
    return null;
  ms.copy(c), ms.applyMatrix4(i.matrixWorld);
  const p = t.ray.origin.distanceTo(ms);
  return p < t.near || p > t.far ? null : { distance: p, point: ms.clone(), object: i };
}
function gs(i, e, t, n, s, a, u, c, h, p) {
  i.getVertexPosition(c, Qi), i.getVertexPosition(h, er), i.getVertexPosition(p, tr);
  const g = Uf(i, e, t, n, Qi, er, tr, ps);
  if (g) {
    s &&
      (fs.fromBufferAttribute(s, c),
      hs.fromBufferAttribute(s, h),
      ds.fromBufferAttribute(s, p),
      (g.uv = Rn.getInterpolation(ps, Qi, er, tr, fs, hs, ds, new dt()))),
      a &&
        (fs.fromBufferAttribute(a, c),
        hs.fromBufferAttribute(a, h),
        ds.fromBufferAttribute(a, p),
        (g.uv1 = Rn.getInterpolation(ps, Qi, er, tr, fs, hs, ds, new dt())),
        (g.uv2 = g.uv1)),
      u &&
        (tl.fromBufferAttribute(u, c),
        nl.fromBufferAttribute(u, h),
        il.fromBufferAttribute(u, p),
        (g.normal = Rn.getInterpolation(ps, Qi, er, tr, tl, nl, il, new X())),
        g.normal.dot(n.direction) > 0 && g.normal.multiplyScalar(-1));
    const _ = { a: c, b: h, c: p, normal: new X(), materialIndex: 0 };
    Rn.getNormal(Qi, er, tr, _.normal), (g.face = _);
  }
  return g;
}
class qr extends hn {
  constructor(e = 1, t = 1, n = 1, s = 1, a = 1, u = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = { width: e, height: t, depth: n, widthSegments: s, heightSegments: a, depthSegments: u });
    const c = this;
    (s = Math.floor(s)), (a = Math.floor(a)), (u = Math.floor(u));
    const h = [],
      p = [],
      g = [],
      _ = [];
    let v = 0,
      y = 0;
    T('z', 'y', 'x', -1, -1, n, t, e, u, a, 0),
      T('z', 'y', 'x', 1, -1, n, t, -e, u, a, 1),
      T('x', 'z', 'y', 1, 1, e, n, t, s, u, 2),
      T('x', 'z', 'y', 1, -1, e, n, -t, s, u, 3),
      T('x', 'y', 'z', 1, -1, e, t, n, s, a, 4),
      T('x', 'y', 'z', -1, -1, e, t, -n, s, a, 5),
      this.setIndex(h),
      this.setAttribute('position', new Zt(p, 3)),
      this.setAttribute('normal', new Zt(g, 3)),
      this.setAttribute('uv', new Zt(_, 2));
    function T(b, S, m, O, R, D, F, k, l, le, w) {
      const I = D / l,
        pe = F / le,
        ve = D / 2,
        W = F / 2,
        ne = k / 2,
        ie = l + 1,
        ge = le + 1;
      let oe = 0,
        he = 0;
      const xe = new X();
      for (let de = 0; de < ge; de++) {
        const Q = de * pe - W;
        for (let se = 0; se < ie; se++) {
          const Le = se * I - ve;
          (xe[b] = Le * O),
            (xe[S] = Q * R),
            (xe[m] = ne),
            p.push(xe.x, xe.y, xe.z),
            (xe[b] = 0),
            (xe[S] = 0),
            (xe[m] = k > 0 ? 1 : -1),
            g.push(xe.x, xe.y, xe.z),
            _.push(se / l),
            _.push(1 - de / le),
            (oe += 1);
        }
      }
      for (let de = 0; de < le; de++)
        for (let Q = 0; Q < l; Q++) {
          const se = v + Q + ie * de,
            Le = v + Q + ie * (de + 1),
            De = v + (Q + 1) + ie * (de + 1),
            Oe = v + (Q + 1) + ie * de;
          h.push(se, Le, Oe), h.push(Le, De, Oe), (he += 6);
        }
      c.addGroup(y, he, w), (y += he), (v += oe);
    }
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new qr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function mr(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s &&
      (s.isColor ||
        s.isMatrix3 ||
        s.isMatrix4 ||
        s.isVector2 ||
        s.isVector3 ||
        s.isVector4 ||
        s.isTexture ||
        s.isQuaternion)
        ? s.isRenderTargetTexture
          ? (console.warn(
              'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().'
            ),
            (e[t][n] = null))
          : (e[t][n] = s.clone())
        : Array.isArray(s)
        ? (e[t][n] = s.slice())
        : (e[t][n] = s);
    }
  }
  return e;
}
function sn(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = mr(i[t]);
    for (const s in n) e[s] = n[s];
  }
  return e;
}
function If(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function lc(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : Hn;
}
const Nf = { clone: mr, merge: sn };
var Of = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Ff = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Di extends _r {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Of),
      (this.fragmentShader = Ff),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }),
      (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = mr(e.uniforms)),
      (this.uniformsGroups = If(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const s in this.uniforms) {
      const u = this.uniforms[s].value;
      u && u.isTexture
        ? (t.uniforms[s] = { type: 't', value: u.toJSON(e).uuid })
        : u && u.isColor
        ? (t.uniforms[s] = { type: 'c', value: u.getHex() })
        : u && u.isVector2
        ? (t.uniforms[s] = { type: 'v2', value: u.toArray() })
        : u && u.isVector3
        ? (t.uniforms[s] = { type: 'v3', value: u.toArray() })
        : u && u.isVector4
        ? (t.uniforms[s] = { type: 'v4', value: u.toArray() })
        : u && u.isMatrix3
        ? (t.uniforms[s] = { type: 'm3', value: u.toArray() })
        : u && u.isMatrix4
        ? (t.uniforms[s] = { type: 'm4', value: u.toArray() })
        : (t.uniforms[s] = { value: u });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const s in this.extensions) this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class cc extends on {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new Gt()),
      (this.projectionMatrix = new Gt()),
      (this.projectionMatrixInverse = new Gt()),
      (this.coordinateSystem = ei);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Mn extends cc {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = 'PerspectiveCamera'),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = s),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = zr * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Nr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return zr * 2 * Math.atan(Math.tan(Nr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, s, a, u) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = s),
      (this.view.width = a),
      (this.view.height = u),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Nr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      s = this.aspect * n,
      a = -0.5 * s;
    const u = this.view;
    if (this.view !== null && this.view.enabled) {
      const h = u.fullWidth,
        p = u.fullHeight;
      (a += (u.offsetX * s) / h), (t -= (u.offsetY * n) / p), (s *= u.width / h), (n *= u.height / p);
    }
    const c = this.filmOffset;
    c !== 0 && (a += (e * c) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(a, a + s, t, t - n, e, this.far, this.coordinateSystem),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const nr = -90,
  ir = 1;
class Bf extends on {
  constructor(e, t, n) {
    super(), (this.type = 'CubeCamera'), (this.renderTarget = n), (this.coordinateSystem = null);
    const s = new Mn(nr, ir, e, t);
    (s.layers = this.layers), this.add(s);
    const a = new Mn(nr, ir, e, t);
    (a.layers = this.layers), this.add(a);
    const u = new Mn(nr, ir, e, t);
    (u.layers = this.layers), this.add(u);
    const c = new Mn(nr, ir, e, t);
    (c.layers = this.layers), this.add(c);
    const h = new Mn(nr, ir, e, t);
    (h.layers = this.layers), this.add(h);
    const p = new Mn(nr, ir, e, t);
    (p.layers = this.layers), this.add(p);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, s, a, u, c, h] = t;
    for (const p of t) this.remove(p);
    if (e === ei)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        s.up.set(0, 1, 0),
        s.lookAt(-1, 0, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, 1, 0),
        u.up.set(0, 0, 1),
        u.lookAt(0, -1, 0),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, 1),
        h.up.set(0, 1, 0),
        h.lookAt(0, 0, -1);
    else if (e === ws)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        s.up.set(0, -1, 0),
        s.lookAt(1, 0, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, 1, 0),
        u.up.set(0, 0, -1),
        u.lookAt(0, -1, 0),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, 1),
        h.up.set(0, -1, 0),
        h.lookAt(0, 0, -1);
    else throw new Error('THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' + e);
    for (const p of t) this.add(p), p.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem), this.updateCoordinateSystem());
    const [s, a, u, c, h, p] = this.children,
      g = e.getRenderTarget(),
      _ = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, s),
      e.setRenderTarget(n, 1),
      e.render(t, a),
      e.setRenderTarget(n, 2),
      e.render(t, u),
      e.setRenderTarget(n, 3),
      e.render(t, c),
      e.setRenderTarget(n, 4),
      e.render(t, h),
      (n.texture.generateMipmaps = v),
      e.setRenderTarget(n, 5),
      e.render(t, p),
      e.setRenderTarget(g),
      (e.xr.enabled = _),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class uc extends fn {
  constructor(e, t, n, s, a, u, c, h, p, g) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : hr),
      super(e, t, n, s, a, u, c, h, p, g),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Hf extends Li {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      s = [n, n, n, n, n, n];
    t.encoding !== void 0 &&
      (Fr('THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.'),
      (t.colorSpace = t.encoding === Ri ? Pt : Ci)),
      (this.texture = new uc(
        s,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : un);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      },
      s = new qr(5, 5, 5),
      a = new Di({
        name: 'CubemapFromEquirect',
        uniforms: mr(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: an,
        blending: hi
      });
    a.uniforms.tEquirect.value = t;
    const u = new ti(s, a),
      c = t.minFilter;
    return (
      t.minFilter === Br && (t.minFilter = un),
      new Bf(1, 10, this).update(e, u),
      (t.minFilter = c),
      u.geometry.dispose(),
      u.material.dispose(),
      this
    );
  }
  clear(e, t, n, s) {
    const a = e.getRenderTarget();
    for (let u = 0; u < 6; u++) e.setRenderTarget(this, u), e.clear(t, n, s);
    e.setRenderTarget(a);
  }
}
const Ma = new X(),
  zf = new X(),
  Gf = new ht();
class ci {
  constructor(e = new X(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), (this.constant = s), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = Ma.subVectors(n, t).cross(zf.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Ma),
      s = this.normal.dot(n);
    if (s === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / s;
    return a < 0 || a > 1 ? null : t.copy(e.start).addScaledVector(n, a);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Gf.getNormalMatrix(e),
      s = this.coplanarPoint(Ma).applyMatrix4(e),
      a = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -s.dot(a)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ei = new Xr(),
  _s = new X();
class fc {
  constructor(e = new ci(), t = new ci(), n = new ci(), s = new ci(), a = new ci(), u = new ci()) {
    this.planes = [e, t, n, s, a, u];
  }
  set(e, t, n, s, a, u) {
    const c = this.planes;
    return c[0].copy(e), c[1].copy(t), c[2].copy(n), c[3].copy(s), c[4].copy(a), c[5].copy(u), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = ei) {
    const n = this.planes,
      s = e.elements,
      a = s[0],
      u = s[1],
      c = s[2],
      h = s[3],
      p = s[4],
      g = s[5],
      _ = s[6],
      v = s[7],
      y = s[8],
      T = s[9],
      b = s[10],
      S = s[11],
      m = s[12],
      O = s[13],
      R = s[14],
      D = s[15];
    if (
      (n[0].setComponents(h - a, v - p, S - y, D - m).normalize(),
      n[1].setComponents(h + a, v + p, S + y, D + m).normalize(),
      n[2].setComponents(h + u, v + g, S + T, D + O).normalize(),
      n[3].setComponents(h - u, v - g, S - T, D - O).normalize(),
      n[4].setComponents(h - c, v - _, S - b, D - R).normalize(),
      t === ei)
    )
      n[5].setComponents(h + c, v + _, S + b, D + R).normalize();
    else if (t === ws) n[5].setComponents(c, _, b, R).normalize();
    else throw new Error('THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ei);
  }
  intersectsSprite(e) {
    return (
      Ei.center.set(0, 0, 0),
      (Ei.radius = 0.7071067811865476),
      Ei.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ei)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      s = -e.radius;
    for (let a = 0; a < 6; a++) if (t[a].distanceToPoint(n) < s) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (
        ((_s.x = s.normal.x > 0 ? e.max.x : e.min.x),
        (_s.y = s.normal.y > 0 ? e.max.y : e.min.y),
        (_s.z = s.normal.z > 0 ? e.max.z : e.min.z),
        s.distanceToPoint(_s) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function hc() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function s(a, u) {
    t(a, u), (n = i.requestAnimationFrame(s));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(s)), (e = !0));
    },
    stop: function () {
      i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (a) {
      t = a;
    },
    setContext: function (a) {
      i = a;
    }
  };
}
function kf(i, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function s(p, g) {
    const _ = p.array,
      v = p.usage,
      y = i.createBuffer();
    i.bindBuffer(g, y), i.bufferData(g, _, v), p.onUploadCallback();
    let T;
    if (_ instanceof Float32Array) T = i.FLOAT;
    else if (_ instanceof Uint16Array)
      if (p.isFloat16BufferAttribute)
        if (t) T = i.HALF_FLOAT;
        else throw new Error('THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.');
      else T = i.UNSIGNED_SHORT;
    else if (_ instanceof Int16Array) T = i.SHORT;
    else if (_ instanceof Uint32Array) T = i.UNSIGNED_INT;
    else if (_ instanceof Int32Array) T = i.INT;
    else if (_ instanceof Int8Array) T = i.BYTE;
    else if (_ instanceof Uint8Array) T = i.UNSIGNED_BYTE;
    else if (_ instanceof Uint8ClampedArray) T = i.UNSIGNED_BYTE;
    else throw new Error('THREE.WebGLAttributes: Unsupported buffer data format: ' + _);
    return { buffer: y, type: T, bytesPerElement: _.BYTES_PER_ELEMENT, version: p.version };
  }
  function a(p, g, _) {
    const v = g.array,
      y = g.updateRange;
    i.bindBuffer(_, p),
      y.count === -1
        ? i.bufferSubData(_, 0, v)
        : (t
            ? i.bufferSubData(_, y.offset * v.BYTES_PER_ELEMENT, v, y.offset, y.count)
            : i.bufferSubData(_, y.offset * v.BYTES_PER_ELEMENT, v.subarray(y.offset, y.offset + y.count)),
          (y.count = -1)),
      g.onUploadCallback();
  }
  function u(p) {
    return p.isInterleavedBufferAttribute && (p = p.data), n.get(p);
  }
  function c(p) {
    p.isInterleavedBufferAttribute && (p = p.data);
    const g = n.get(p);
    g && (i.deleteBuffer(g.buffer), n.delete(p));
  }
  function h(p, g) {
    if (p.isGLBufferAttribute) {
      const v = n.get(p);
      (!v || v.version < p.version) &&
        n.set(p, { buffer: p.buffer, type: p.type, bytesPerElement: p.elementSize, version: p.version });
      return;
    }
    p.isInterleavedBufferAttribute && (p = p.data);
    const _ = n.get(p);
    _ === void 0 ? n.set(p, s(p, g)) : _.version < p.version && (a(_.buffer, p, g), (_.version = p.version));
  }
  return { get: u, remove: c, update: h };
}
class Wa extends hn {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(),
      (this.type = 'PlaneGeometry'),
      (this.parameters = { width: e, height: t, widthSegments: n, heightSegments: s });
    const a = e / 2,
      u = t / 2,
      c = Math.floor(n),
      h = Math.floor(s),
      p = c + 1,
      g = h + 1,
      _ = e / c,
      v = t / h,
      y = [],
      T = [],
      b = [],
      S = [];
    for (let m = 0; m < g; m++) {
      const O = m * v - u;
      for (let R = 0; R < p; R++) {
        const D = R * _ - a;
        T.push(D, -O, 0), b.push(0, 0, 1), S.push(R / c), S.push(1 - m / h);
      }
    }
    for (let m = 0; m < h; m++)
      for (let O = 0; O < c; O++) {
        const R = O + p * m,
          D = O + p * (m + 1),
          F = O + 1 + p * (m + 1),
          k = O + 1 + p * m;
        y.push(R, D, k), y.push(D, F, k);
      }
    this.setIndex(y),
      this.setAttribute('position', new Zt(T, 3)),
      this.setAttribute('normal', new Zt(b, 3)),
      this.setAttribute('uv', new Zt(S, 2));
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new Wa(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Vf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Wf = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Xf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  qf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  jf = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Yf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Kf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  $f = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Zf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Jf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Qf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  eh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  th = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  nh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  ih = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  rh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  sh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  ah = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  oh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  lh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  ch = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  uh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  fh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  hh = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  dh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  ph = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  mh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  gh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  _h = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  vh = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  xh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Mh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Sh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  yh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Eh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Th = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  bh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Ah = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  wh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Rh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Ch = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Lh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Ph = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Dh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Uh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Ih = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Nh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Oh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Fh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Bh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Hh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,
  zh = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Gh = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  kh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Vh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Wh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Xh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  qh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  jh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Yh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Kh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  $h = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Zh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Jh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Qh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  ed = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  td = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  nd = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  id = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  rd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,
  sd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  ad = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  od = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ld = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  cd = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  ud = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  fd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  hd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  dd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  pd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  md = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  gd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  _d = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  vd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  xd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Md = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Sd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  yd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Ed = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Td = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  bd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Ad = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  wd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Rd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Cd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Ld = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Pd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Dd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Ud = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Id = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Nd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Od = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Fd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Bd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Hd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const zd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Gd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  kd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Vd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Wd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Xd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  qd = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  jd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Yd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Kd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  $d = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Zd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Jd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Qd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  ep = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  tp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  np = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ip = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  rp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  sp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ap = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  op = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  lp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  cp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  up = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  fp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  hp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  dp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  pp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  mp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  gp = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  _p = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  vp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  xp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  ct = {
    alphahash_fragment: Vf,
    alphahash_pars_fragment: Wf,
    alphamap_fragment: Xf,
    alphamap_pars_fragment: qf,
    alphatest_fragment: jf,
    alphatest_pars_fragment: Yf,
    aomap_fragment: Kf,
    aomap_pars_fragment: $f,
    begin_vertex: Zf,
    beginnormal_vertex: Jf,
    bsdfs: Qf,
    iridescence_fragment: eh,
    bumpmap_pars_fragment: th,
    clipping_planes_fragment: nh,
    clipping_planes_pars_fragment: ih,
    clipping_planes_pars_vertex: rh,
    clipping_planes_vertex: sh,
    color_fragment: ah,
    color_pars_fragment: oh,
    color_pars_vertex: lh,
    color_vertex: ch,
    common: uh,
    cube_uv_reflection_fragment: fh,
    defaultnormal_vertex: hh,
    displacementmap_pars_vertex: dh,
    displacementmap_vertex: ph,
    emissivemap_fragment: mh,
    emissivemap_pars_fragment: gh,
    colorspace_fragment: _h,
    colorspace_pars_fragment: vh,
    envmap_fragment: xh,
    envmap_common_pars_fragment: Mh,
    envmap_pars_fragment: Sh,
    envmap_pars_vertex: yh,
    envmap_physical_pars_fragment: Ih,
    envmap_vertex: Eh,
    fog_vertex: Th,
    fog_pars_vertex: bh,
    fog_fragment: Ah,
    fog_pars_fragment: wh,
    gradientmap_pars_fragment: Rh,
    lightmap_fragment: Ch,
    lightmap_pars_fragment: Lh,
    lights_lambert_fragment: Ph,
    lights_lambert_pars_fragment: Dh,
    lights_pars_begin: Uh,
    lights_toon_fragment: Nh,
    lights_toon_pars_fragment: Oh,
    lights_phong_fragment: Fh,
    lights_phong_pars_fragment: Bh,
    lights_physical_fragment: Hh,
    lights_physical_pars_fragment: zh,
    lights_fragment_begin: Gh,
    lights_fragment_maps: kh,
    lights_fragment_end: Vh,
    logdepthbuf_fragment: Wh,
    logdepthbuf_pars_fragment: Xh,
    logdepthbuf_pars_vertex: qh,
    logdepthbuf_vertex: jh,
    map_fragment: Yh,
    map_pars_fragment: Kh,
    map_particle_fragment: $h,
    map_particle_pars_fragment: Zh,
    metalnessmap_fragment: Jh,
    metalnessmap_pars_fragment: Qh,
    morphcolor_vertex: ed,
    morphnormal_vertex: td,
    morphtarget_pars_vertex: nd,
    morphtarget_vertex: id,
    normal_fragment_begin: rd,
    normal_fragment_maps: sd,
    normal_pars_fragment: ad,
    normal_pars_vertex: od,
    normal_vertex: ld,
    normalmap_pars_fragment: cd,
    clearcoat_normal_fragment_begin: ud,
    clearcoat_normal_fragment_maps: fd,
    clearcoat_pars_fragment: hd,
    iridescence_pars_fragment: dd,
    opaque_fragment: pd,
    packing: md,
    premultiplied_alpha_fragment: gd,
    project_vertex: _d,
    dithering_fragment: vd,
    dithering_pars_fragment: xd,
    roughnessmap_fragment: Md,
    roughnessmap_pars_fragment: Sd,
    shadowmap_pars_fragment: yd,
    shadowmap_pars_vertex: Ed,
    shadowmap_vertex: Td,
    shadowmask_pars_fragment: bd,
    skinbase_vertex: Ad,
    skinning_pars_vertex: wd,
    skinning_vertex: Rd,
    skinnormal_vertex: Cd,
    specularmap_fragment: Ld,
    specularmap_pars_fragment: Pd,
    tonemapping_fragment: Dd,
    tonemapping_pars_fragment: Ud,
    transmission_fragment: Id,
    transmission_pars_fragment: Nd,
    uv_pars_fragment: Od,
    uv_pars_vertex: Fd,
    uv_vertex: Bd,
    worldpos_vertex: Hd,
    background_vert: zd,
    background_frag: Gd,
    backgroundCube_vert: kd,
    backgroundCube_frag: Vd,
    cube_vert: Wd,
    cube_frag: Xd,
    depth_vert: qd,
    depth_frag: jd,
    distanceRGBA_vert: Yd,
    distanceRGBA_frag: Kd,
    equirect_vert: $d,
    equirect_frag: Zd,
    linedashed_vert: Jd,
    linedashed_frag: Qd,
    meshbasic_vert: ep,
    meshbasic_frag: tp,
    meshlambert_vert: np,
    meshlambert_frag: ip,
    meshmatcap_vert: rp,
    meshmatcap_frag: sp,
    meshnormal_vert: ap,
    meshnormal_frag: op,
    meshphong_vert: lp,
    meshphong_frag: cp,
    meshphysical_vert: up,
    meshphysical_frag: fp,
    meshtoon_vert: hp,
    meshtoon_frag: dp,
    points_vert: pp,
    points_frag: mp,
    shadow_vert: gp,
    shadow_frag: _p,
    sprite_vert: vp,
    sprite_frag: xp
  },
  Ce = {
    common: {
      diffuse: { value: new bt(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new ht() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ht() },
      alphaTest: { value: 0 }
    },
    specularmap: { specularMap: { value: null }, specularMapTransform: { value: new ht() } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 }
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new ht() } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new ht() } },
    bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new ht() }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new ht() },
      normalScale: { value: new dt(1, 1) }
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new ht() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 }
    },
    emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new ht() } },
    metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new ht() } },
    roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new ht() } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new bt(16777215) }
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: { value: [], properties: { direction: {}, color: {} } },
      directionalLightShadows: {
        value: [],
        properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} }
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} }
      },
      spotLightShadows: {
        value: [],
        properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} }
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
      rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
      ltc_1: { value: null },
      ltc_2: { value: null }
    },
    points: {
      diffuse: { value: new bt(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ht() },
      alphaTest: { value: 0 },
      uvTransform: { value: new ht() }
    },
    sprite: {
      diffuse: { value: new bt(16777215) },
      opacity: { value: 1 },
      center: { value: new dt(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new ht() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ht() },
      alphaTest: { value: 0 }
    }
  },
  Fn = {
    basic: {
      uniforms: sn([Ce.common, Ce.specularmap, Ce.envmap, Ce.aomap, Ce.lightmap, Ce.fog]),
      vertexShader: ct.meshbasic_vert,
      fragmentShader: ct.meshbasic_frag
    },
    lambert: {
      uniforms: sn([
        Ce.common,
        Ce.specularmap,
        Ce.envmap,
        Ce.aomap,
        Ce.lightmap,
        Ce.emissivemap,
        Ce.bumpmap,
        Ce.normalmap,
        Ce.displacementmap,
        Ce.fog,
        Ce.lights,
        { emissive: { value: new bt(0) } }
      ]),
      vertexShader: ct.meshlambert_vert,
      fragmentShader: ct.meshlambert_frag
    },
    phong: {
      uniforms: sn([
        Ce.common,
        Ce.specularmap,
        Ce.envmap,
        Ce.aomap,
        Ce.lightmap,
        Ce.emissivemap,
        Ce.bumpmap,
        Ce.normalmap,
        Ce.displacementmap,
        Ce.fog,
        Ce.lights,
        { emissive: { value: new bt(0) }, specular: { value: new bt(1118481) }, shininess: { value: 30 } }
      ]),
      vertexShader: ct.meshphong_vert,
      fragmentShader: ct.meshphong_frag
    },
    standard: {
      uniforms: sn([
        Ce.common,
        Ce.envmap,
        Ce.aomap,
        Ce.lightmap,
        Ce.emissivemap,
        Ce.bumpmap,
        Ce.normalmap,
        Ce.displacementmap,
        Ce.roughnessmap,
        Ce.metalnessmap,
        Ce.fog,
        Ce.lights,
        {
          emissive: { value: new bt(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 }
        }
      ]),
      vertexShader: ct.meshphysical_vert,
      fragmentShader: ct.meshphysical_frag
    },
    toon: {
      uniforms: sn([
        Ce.common,
        Ce.aomap,
        Ce.lightmap,
        Ce.emissivemap,
        Ce.bumpmap,
        Ce.normalmap,
        Ce.displacementmap,
        Ce.gradientmap,
        Ce.fog,
        Ce.lights,
        { emissive: { value: new bt(0) } }
      ]),
      vertexShader: ct.meshtoon_vert,
      fragmentShader: ct.meshtoon_frag
    },
    matcap: {
      uniforms: sn([Ce.common, Ce.bumpmap, Ce.normalmap, Ce.displacementmap, Ce.fog, { matcap: { value: null } }]),
      vertexShader: ct.meshmatcap_vert,
      fragmentShader: ct.meshmatcap_frag
    },
    points: { uniforms: sn([Ce.points, Ce.fog]), vertexShader: ct.points_vert, fragmentShader: ct.points_frag },
    dashed: {
      uniforms: sn([Ce.common, Ce.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]),
      vertexShader: ct.linedashed_vert,
      fragmentShader: ct.linedashed_frag
    },
    depth: {
      uniforms: sn([Ce.common, Ce.displacementmap]),
      vertexShader: ct.depth_vert,
      fragmentShader: ct.depth_frag
    },
    normal: {
      uniforms: sn([Ce.common, Ce.bumpmap, Ce.normalmap, Ce.displacementmap, { opacity: { value: 1 } }]),
      vertexShader: ct.meshnormal_vert,
      fragmentShader: ct.meshnormal_frag
    },
    sprite: { uniforms: sn([Ce.sprite, Ce.fog]), vertexShader: ct.sprite_vert, fragmentShader: ct.sprite_frag },
    background: {
      uniforms: { uvTransform: { value: new ht() }, t2D: { value: null }, backgroundIntensity: { value: 1 } },
      vertexShader: ct.background_vert,
      fragmentShader: ct.background_frag
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 }
      },
      vertexShader: ct.backgroundCube_vert,
      fragmentShader: ct.backgroundCube_frag
    },
    cube: {
      uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } },
      vertexShader: ct.cube_vert,
      fragmentShader: ct.cube_frag
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: ct.equirect_vert,
      fragmentShader: ct.equirect_frag
    },
    distanceRGBA: {
      uniforms: sn([
        Ce.common,
        Ce.displacementmap,
        { referencePosition: { value: new X() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }
      ]),
      vertexShader: ct.distanceRGBA_vert,
      fragmentShader: ct.distanceRGBA_frag
    },
    shadow: {
      uniforms: sn([Ce.lights, Ce.fog, { color: { value: new bt(0) }, opacity: { value: 1 } }]),
      vertexShader: ct.shadow_vert,
      fragmentShader: ct.shadow_frag
    }
  };
Fn.physical = {
  uniforms: sn([
    Fn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new ht() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new ht() },
      clearcoatNormalScale: { value: new dt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new ht() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new ht() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new ht() },
      sheen: { value: 0 },
      sheenColor: { value: new bt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new ht() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new ht() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new ht() },
      transmissionSamplerSize: { value: new dt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new ht() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new bt(0) },
      specularColor: { value: new bt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new ht() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new ht() },
      anisotropyVector: { value: new dt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new ht() }
    }
  ]),
  vertexShader: ct.meshphysical_vert,
  fragmentShader: ct.meshphysical_frag
};
const vs = { r: 0, b: 0, g: 0 };
function Mp(i, e, t, n, s, a, u) {
  const c = new bt(0);
  let h = a === !0 ? 0 : 1,
    p,
    g,
    _ = null,
    v = 0,
    y = null;
  function T(S, m) {
    let O = !1,
      R = m.isScene === !0 ? m.background : null;
    R && R.isTexture && (R = (m.backgroundBlurriness > 0 ? t : e).get(R)),
      R === null ? b(c, h) : R && R.isColor && (b(R, 1), (O = !0));
    const D = i.xr.getEnvironmentBlendMode();
    D === 'additive'
      ? n.buffers.color.setClear(0, 0, 0, 1, u)
      : D === 'alpha-blend' && n.buffers.color.setClear(0, 0, 0, 0, u),
      (i.autoClear || O) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil),
      R && (R.isCubeTexture || R.mapping === Cs)
        ? (g === void 0 &&
            ((g = new ti(
              new qr(1, 1, 1),
              new Di({
                name: 'BackgroundCubeMaterial',
                uniforms: mr(Fn.backgroundCube.uniforms),
                vertexShader: Fn.backgroundCube.vertexShader,
                fragmentShader: Fn.backgroundCube.fragmentShader,
                side: an,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
              })
            )),
            g.geometry.deleteAttribute('normal'),
            g.geometry.deleteAttribute('uv'),
            (g.onBeforeRender = function (F, k, l) {
              this.matrixWorld.copyPosition(l.matrixWorld);
            }),
            Object.defineProperty(g.material, 'envMap', {
              get: function () {
                return this.uniforms.envMap.value;
              }
            }),
            s.update(g)),
          (g.material.uniforms.envMap.value = R),
          (g.material.uniforms.flipEnvMap.value = R.isCubeTexture && R.isRenderTargetTexture === !1 ? -1 : 1),
          (g.material.uniforms.backgroundBlurriness.value = m.backgroundBlurriness),
          (g.material.uniforms.backgroundIntensity.value = m.backgroundIntensity),
          (g.material.toneMapped = R.colorSpace !== Pt),
          (_ !== R || v !== R.version || y !== i.toneMapping) &&
            ((g.material.needsUpdate = !0), (_ = R), (v = R.version), (y = i.toneMapping)),
          g.layers.enableAll(),
          S.unshift(g, g.geometry, g.material, 0, 0, null))
        : R &&
          R.isTexture &&
          (p === void 0 &&
            ((p = new ti(
              new Wa(2, 2),
              new Di({
                name: 'BackgroundMaterial',
                uniforms: mr(Fn.background.uniforms),
                vertexShader: Fn.background.vertexShader,
                fragmentShader: Fn.background.fragmentShader,
                side: mi,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
              })
            )),
            p.geometry.deleteAttribute('normal'),
            Object.defineProperty(p.material, 'map', {
              get: function () {
                return this.uniforms.t2D.value;
              }
            }),
            s.update(p)),
          (p.material.uniforms.t2D.value = R),
          (p.material.uniforms.backgroundIntensity.value = m.backgroundIntensity),
          (p.material.toneMapped = R.colorSpace !== Pt),
          R.matrixAutoUpdate === !0 && R.updateMatrix(),
          p.material.uniforms.uvTransform.value.copy(R.matrix),
          (_ !== R || v !== R.version || y !== i.toneMapping) &&
            ((p.material.needsUpdate = !0), (_ = R), (v = R.version), (y = i.toneMapping)),
          p.layers.enableAll(),
          S.unshift(p, p.geometry, p.material, 0, 0, null));
  }
  function b(S, m) {
    S.getRGB(vs, lc(i)), n.buffers.color.setClear(vs.r, vs.g, vs.b, m, u);
  }
  return {
    getClearColor: function () {
      return c;
    },
    setClearColor: function (S, m = 1) {
      c.set(S), (h = m), b(c, h);
    },
    getClearAlpha: function () {
      return h;
    },
    setClearAlpha: function (S) {
      (h = S), b(c, h);
    },
    render: T
  };
}
function Sp(i, e, t, n) {
  const s = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    a = n.isWebGL2 ? null : e.get('OES_vertex_array_object'),
    u = n.isWebGL2 || a !== null,
    c = {},
    h = S(null);
  let p = h,
    g = !1;
  function _(ne, ie, ge, oe, he) {
    let xe = !1;
    if (u) {
      const de = b(oe, ge, ie);
      p !== de && ((p = de), y(p.object)), (xe = m(ne, oe, ge, he)), xe && O(ne, oe, ge, he);
    } else {
      const de = ie.wireframe === !0;
      (p.geometry !== oe.id || p.program !== ge.id || p.wireframe !== de) &&
        ((p.geometry = oe.id), (p.program = ge.id), (p.wireframe = de), (xe = !0));
    }
    he !== null && t.update(he, i.ELEMENT_ARRAY_BUFFER),
      (xe || g) &&
        ((g = !1), le(ne, ie, ge, oe), he !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(he).buffer));
  }
  function v() {
    return n.isWebGL2 ? i.createVertexArray() : a.createVertexArrayOES();
  }
  function y(ne) {
    return n.isWebGL2 ? i.bindVertexArray(ne) : a.bindVertexArrayOES(ne);
  }
  function T(ne) {
    return n.isWebGL2 ? i.deleteVertexArray(ne) : a.deleteVertexArrayOES(ne);
  }
  function b(ne, ie, ge) {
    const oe = ge.wireframe === !0;
    let he = c[ne.id];
    he === void 0 && ((he = {}), (c[ne.id] = he));
    let xe = he[ie.id];
    xe === void 0 && ((xe = {}), (he[ie.id] = xe));
    let de = xe[oe];
    return de === void 0 && ((de = S(v())), (xe[oe] = de)), de;
  }
  function S(ne) {
    const ie = [],
      ge = [],
      oe = [];
    for (let he = 0; he < s; he++) (ie[he] = 0), (ge[he] = 0), (oe[he] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: ie,
      enabledAttributes: ge,
      attributeDivisors: oe,
      object: ne,
      attributes: {},
      index: null
    };
  }
  function m(ne, ie, ge, oe) {
    const he = p.attributes,
      xe = ie.attributes;
    let de = 0;
    const Q = ge.getAttributes();
    for (const se in Q)
      if (Q[se].location >= 0) {
        const De = he[se];
        let Oe = xe[se];
        if (
          (Oe === void 0 &&
            (se === 'instanceMatrix' && ne.instanceMatrix && (Oe = ne.instanceMatrix),
            se === 'instanceColor' && ne.instanceColor && (Oe = ne.instanceColor)),
          De === void 0 || De.attribute !== Oe || (Oe && De.data !== Oe.data))
        )
          return !0;
        de++;
      }
    return p.attributesNum !== de || p.index !== oe;
  }
  function O(ne, ie, ge, oe) {
    const he = {},
      xe = ie.attributes;
    let de = 0;
    const Q = ge.getAttributes();
    for (const se in Q)
      if (Q[se].location >= 0) {
        let De = xe[se];
        De === void 0 &&
          (se === 'instanceMatrix' && ne.instanceMatrix && (De = ne.instanceMatrix),
          se === 'instanceColor' && ne.instanceColor && (De = ne.instanceColor));
        const Oe = {};
        (Oe.attribute = De), De && De.data && (Oe.data = De.data), (he[se] = Oe), de++;
      }
    (p.attributes = he), (p.attributesNum = de), (p.index = oe);
  }
  function R() {
    const ne = p.newAttributes;
    for (let ie = 0, ge = ne.length; ie < ge; ie++) ne[ie] = 0;
  }
  function D(ne) {
    F(ne, 0);
  }
  function F(ne, ie) {
    const ge = p.newAttributes,
      oe = p.enabledAttributes,
      he = p.attributeDivisors;
    (ge[ne] = 1),
      oe[ne] === 0 && (i.enableVertexAttribArray(ne), (oe[ne] = 1)),
      he[ne] !== ie &&
        ((n.isWebGL2 ? i : e.get('ANGLE_instanced_arrays'))[
          n.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
        ](ne, ie),
        (he[ne] = ie));
  }
  function k() {
    const ne = p.newAttributes,
      ie = p.enabledAttributes;
    for (let ge = 0, oe = ie.length; ge < oe; ge++) ie[ge] !== ne[ge] && (i.disableVertexAttribArray(ge), (ie[ge] = 0));
  }
  function l(ne, ie, ge, oe, he, xe, de) {
    de === !0 ? i.vertexAttribIPointer(ne, ie, ge, he, xe) : i.vertexAttribPointer(ne, ie, ge, oe, he, xe);
  }
  function le(ne, ie, ge, oe) {
    if (
      n.isWebGL2 === !1 &&
      (ne.isInstancedMesh || oe.isInstancedBufferGeometry) &&
      e.get('ANGLE_instanced_arrays') === null
    )
      return;
    R();
    const he = oe.attributes,
      xe = ge.getAttributes(),
      de = ie.defaultAttributeValues;
    for (const Q in xe) {
      const se = xe[Q];
      if (se.location >= 0) {
        let Le = he[Q];
        if (
          (Le === void 0 &&
            (Q === 'instanceMatrix' && ne.instanceMatrix && (Le = ne.instanceMatrix),
            Q === 'instanceColor' && ne.instanceColor && (Le = ne.instanceColor)),
          Le !== void 0)
        ) {
          const De = Le.normalized,
            Oe = Le.itemSize,
            Ve = t.get(Le);
          if (Ve === void 0) continue;
          const Ze = Ve.buffer,
            Ge = Ve.type,
            gt = Ve.bytesPerElement,
            Tt = n.isWebGL2 === !0 && (Ge === i.INT || Ge === i.UNSIGNED_INT || Le.gpuType === jl);
          if (Le.isInterleavedBufferAttribute) {
            const rt = Le.data,
              q = rt.stride,
              Ct = Le.offset;
            if (rt.isInstancedInterleavedBuffer) {
              for (let ze = 0; ze < se.locationSize; ze++) F(se.location + ze, rt.meshPerAttribute);
              ne.isInstancedMesh !== !0 &&
                oe._maxInstanceCount === void 0 &&
                (oe._maxInstanceCount = rt.meshPerAttribute * rt.count);
            } else for (let ze = 0; ze < se.locationSize; ze++) D(se.location + ze);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let ze = 0; ze < se.locationSize; ze++)
              l(se.location + ze, Oe / se.locationSize, Ge, De, q * gt, (Ct + (Oe / se.locationSize) * ze) * gt, Tt);
          } else {
            if (Le.isInstancedBufferAttribute) {
              for (let rt = 0; rt < se.locationSize; rt++) F(se.location + rt, Le.meshPerAttribute);
              ne.isInstancedMesh !== !0 &&
                oe._maxInstanceCount === void 0 &&
                (oe._maxInstanceCount = Le.meshPerAttribute * Le.count);
            } else for (let rt = 0; rt < se.locationSize; rt++) D(se.location + rt);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let rt = 0; rt < se.locationSize; rt++)
              l(se.location + rt, Oe / se.locationSize, Ge, De, Oe * gt, (Oe / se.locationSize) * rt * gt, Tt);
          }
        } else if (de !== void 0) {
          const De = de[Q];
          if (De !== void 0)
            switch (De.length) {
              case 2:
                i.vertexAttrib2fv(se.location, De);
                break;
              case 3:
                i.vertexAttrib3fv(se.location, De);
                break;
              case 4:
                i.vertexAttrib4fv(se.location, De);
                break;
              default:
                i.vertexAttrib1fv(se.location, De);
            }
        }
      }
    }
    k();
  }
  function w() {
    ve();
    for (const ne in c) {
      const ie = c[ne];
      for (const ge in ie) {
        const oe = ie[ge];
        for (const he in oe) T(oe[he].object), delete oe[he];
        delete ie[ge];
      }
      delete c[ne];
    }
  }
  function I(ne) {
    if (c[ne.id] === void 0) return;
    const ie = c[ne.id];
    for (const ge in ie) {
      const oe = ie[ge];
      for (const he in oe) T(oe[he].object), delete oe[he];
      delete ie[ge];
    }
    delete c[ne.id];
  }
  function pe(ne) {
    for (const ie in c) {
      const ge = c[ie];
      if (ge[ne.id] === void 0) continue;
      const oe = ge[ne.id];
      for (const he in oe) T(oe[he].object), delete oe[he];
      delete ge[ne.id];
    }
  }
  function ve() {
    W(), (g = !0), p !== h && ((p = h), y(p.object));
  }
  function W() {
    (h.geometry = null), (h.program = null), (h.wireframe = !1);
  }
  return {
    setup: _,
    reset: ve,
    resetDefaultState: W,
    dispose: w,
    releaseStatesOfGeometry: I,
    releaseStatesOfProgram: pe,
    initAttributes: R,
    enableAttribute: D,
    disableUnusedAttributes: k
  };
}
function yp(i, e, t, n) {
  const s = n.isWebGL2;
  let a;
  function u(p) {
    a = p;
  }
  function c(p, g) {
    i.drawArrays(a, p, g), t.update(g, a, 1);
  }
  function h(p, g, _) {
    if (_ === 0) return;
    let v, y;
    if (s) (v = i), (y = 'drawArraysInstanced');
    else if (((v = e.get('ANGLE_instanced_arrays')), (y = 'drawArraysInstancedANGLE'), v === null)) {
      console.error(
        'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
      );
      return;
    }
    v[y](a, p, g, _), t.update(g, a, _);
  }
  (this.setMode = u), (this.render = c), (this.renderInstances = h);
}
function Ep(i, e, t) {
  let n;
  function s() {
    if (n !== void 0) return n;
    if (e.has('EXT_texture_filter_anisotropic') === !0) {
      const l = e.get('EXT_texture_filter_anisotropic');
      n = i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function a(l) {
    if (l === 'highp') {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0
      )
        return 'highp';
      l = 'mediump';
    }
    return l === 'mediump' &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0
      ? 'mediump'
      : 'lowp';
  }
  const u = typeof WebGL2RenderingContext < 'u' && i.constructor.name === 'WebGL2RenderingContext';
  let c = t.precision !== void 0 ? t.precision : 'highp';
  const h = a(c);
  h !== c && (console.warn('THREE.WebGLRenderer:', c, 'not supported, using', h, 'instead.'), (c = h));
  const p = u || e.has('WEBGL_draw_buffers'),
    g = t.logarithmicDepthBuffer === !0,
    _ = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    y = i.getParameter(i.MAX_TEXTURE_SIZE),
    T = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    b = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    S = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    m = i.getParameter(i.MAX_VARYING_VECTORS),
    O = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    R = v > 0,
    D = u || e.has('OES_texture_float'),
    F = R && D,
    k = u ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: u,
    drawBuffers: p,
    getMaxAnisotropy: s,
    getMaxPrecision: a,
    precision: c,
    logarithmicDepthBuffer: g,
    maxTextures: _,
    maxVertexTextures: v,
    maxTextureSize: y,
    maxCubemapSize: T,
    maxAttributes: b,
    maxVertexUniforms: S,
    maxVaryings: m,
    maxFragmentUniforms: O,
    vertexTextures: R,
    floatFragmentTextures: D,
    floatVertexTextures: F,
    maxSamples: k
  };
}
function Tp(i) {
  const e = this;
  let t = null,
    n = 0,
    s = !1,
    a = !1;
  const u = new ci(),
    c = new ht(),
    h = { value: null, needsUpdate: !1 };
  (this.uniform = h),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (_, v) {
      const y = _.length !== 0 || v || n !== 0 || s;
      return (s = v), (n = _.length), y;
    }),
    (this.beginShadows = function () {
      (a = !0), g(null);
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (_, v) {
      t = g(_, v, 0);
    }),
    (this.setState = function (_, v, y) {
      const T = _.clippingPlanes,
        b = _.clipIntersection,
        S = _.clipShadows,
        m = i.get(_);
      if (!s || T === null || T.length === 0 || (a && !S)) a ? g(null) : p();
      else {
        const O = a ? 0 : n,
          R = O * 4;
        let D = m.clippingState || null;
        (h.value = D), (D = g(T, v, R, y));
        for (let F = 0; F !== R; ++F) D[F] = t[F];
        (m.clippingState = D), (this.numIntersection = b ? this.numPlanes : 0), (this.numPlanes += O);
      }
    });
  function p() {
    h.value !== t && ((h.value = t), (h.needsUpdate = n > 0)), (e.numPlanes = n), (e.numIntersection = 0);
  }
  function g(_, v, y, T) {
    const b = _ !== null ? _.length : 0;
    let S = null;
    if (b !== 0) {
      if (((S = h.value), T !== !0 || S === null)) {
        const m = y + b * 4,
          O = v.matrixWorldInverse;
        c.getNormalMatrix(O), (S === null || S.length < m) && (S = new Float32Array(m));
        for (let R = 0, D = y; R !== b; ++R, D += 4)
          u.copy(_[R]).applyMatrix4(O, c), u.normal.toArray(S, D), (S[D + 3] = u.constant);
      }
      (h.value = S), (h.needsUpdate = !0);
    }
    return (e.numPlanes = b), (e.numIntersection = 0), S;
  }
}
function bp(i) {
  let e = new WeakMap();
  function t(u, c) {
    return c === Ra ? (u.mapping = hr) : c === Ca && (u.mapping = dr), u;
  }
  function n(u) {
    if (u && u.isTexture && u.isRenderTargetTexture === !1) {
      const c = u.mapping;
      if (c === Ra || c === Ca)
        if (e.has(u)) {
          const h = e.get(u).texture;
          return t(h, u.mapping);
        } else {
          const h = u.image;
          if (h && h.height > 0) {
            const p = new Hf(h.height / 2);
            return (
              p.fromEquirectangularTexture(i, u), e.set(u, p), u.addEventListener('dispose', s), t(p.texture, u.mapping)
            );
          } else return null;
        }
    }
    return u;
  }
  function s(u) {
    const c = u.target;
    c.removeEventListener('dispose', s);
    const h = e.get(c);
    h !== void 0 && (e.delete(c), h.dispose());
  }
  function a() {
    e = new WeakMap();
  }
  return { get: n, dispose: a };
}
class Ap extends cc {
  constructor(e = -1, t = 1, n = 1, s = -1, a = 0.1, u = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = 'OrthographicCamera'),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = s),
      (this.near = a),
      (this.far = u),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, s, a, u) {
    this.view === null &&
      (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = s),
      (this.view.width = a),
      (this.view.height = u),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      s = (this.top + this.bottom) / 2;
    let a = n - e,
      u = n + e,
      c = s + t,
      h = s - t;
    if (this.view !== null && this.view.enabled) {
      const p = (this.right - this.left) / this.view.fullWidth / this.zoom,
        g = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (a += p * this.view.offsetX),
        (u = a + p * this.view.width),
        (c -= g * this.view.offsetY),
        (h = c - g * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(a, u, c, h, this.near, this.far, this.coordinateSystem),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const lr = 4,
  rl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  bi = 20,
  Sa = new Ap(),
  sl = new bt();
let ya = null;
const Ti = (1 + Math.sqrt(5)) / 2,
  rr = 1 / Ti,
  al = [
    new X(1, 1, 1),
    new X(-1, 1, 1),
    new X(1, 1, -1),
    new X(-1, 1, -1),
    new X(0, Ti, rr),
    new X(0, Ti, -rr),
    new X(rr, 0, Ti),
    new X(-rr, 0, Ti),
    new X(Ti, rr, 0),
    new X(-Ti, rr, 0)
  ];
class ol {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, s = 100) {
    (ya = this._renderer.getRenderTarget()), this._setSize(256);
    const a = this._allocateTargets();
    return (
      (a.depthBuffer = !0),
      this._sceneToCubeUV(e, n, s, a),
      t > 0 && this._blur(a, 0, 0, t),
      this._applyPMREM(a),
      this._cleanup(a),
      a
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && ((this._cubemapMaterial = ul()), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && ((this._equirectMaterial = cl()), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))), (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ya), (e.scissorTest = !1), xs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === hr || e.mapping === dr
      ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width)
      : this._setSize(e.image.width / 4),
      (ya = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = { magFilter: un, minFilter: un, generateMipmaps: !1, type: Hr, format: Ln, colorSpace: Hn, depthBuffer: !1 },
      s = ll(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(), (this._pingPongRenderTarget = ll(e, t, n));
      const { _lodMax: a } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = wp(a)),
        (this._blurMaterial = Rp(a, e, t));
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new ti(this._lodPlanes[0], e);
    this._renderer.compile(t, Sa);
  }
  _sceneToCubeUV(e, t, n, s) {
    const c = new Mn(90, 1, t, n),
      h = [1, -1, 1, 1, 1, 1],
      p = [1, 1, 1, -1, -1, -1],
      g = this._renderer,
      _ = g.autoClear,
      v = g.toneMapping;
    g.getClearColor(sl), (g.toneMapping = di), (g.autoClear = !1);
    const y = new Va({ name: 'PMREM.Background', side: an, depthWrite: !1, depthTest: !1 }),
      T = new ti(new qr(), y);
    let b = !1;
    const S = e.background;
    S ? S.isColor && (y.color.copy(S), (e.background = null), (b = !0)) : (y.color.copy(sl), (b = !0));
    for (let m = 0; m < 6; m++) {
      const O = m % 3;
      O === 0
        ? (c.up.set(0, h[m], 0), c.lookAt(p[m], 0, 0))
        : O === 1
        ? (c.up.set(0, 0, h[m]), c.lookAt(0, p[m], 0))
        : (c.up.set(0, h[m], 0), c.lookAt(0, 0, p[m]));
      const R = this._cubeSize;
      xs(s, O * R, m > 2 ? R : 0, R, R), g.setRenderTarget(s), b && g.render(T, c), g.render(e, c);
    }
    T.geometry.dispose(), T.material.dispose(), (g.toneMapping = v), (g.autoClear = _), (e.background = S);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      s = e.mapping === hr || e.mapping === dr;
    s
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = ul()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = cl());
    const a = s ? this._cubemapMaterial : this._equirectMaterial,
      u = new ti(this._lodPlanes[0], a),
      c = a.uniforms;
    c.envMap.value = e;
    const h = this._cubeSize;
    xs(t, 0, 0, 3 * h, 2 * h), n.setRenderTarget(t), n.render(u, Sa);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let s = 1; s < this._lodPlanes.length; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]),
        u = al[(s - 1) % al.length];
      this._blur(e, s - 1, s, a, u);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, s, a) {
    const u = this._pingPongRenderTarget;
    this._halfBlur(e, u, t, n, s, 'latitudinal', a), this._halfBlur(u, e, n, n, s, 'longitudinal', a);
  }
  _halfBlur(e, t, n, s, a, u, c) {
    const h = this._renderer,
      p = this._blurMaterial;
    u !== 'latitudinal' &&
      u !== 'longitudinal' &&
      console.error('blur direction must be either latitudinal or longitudinal!');
    const g = 3,
      _ = new ti(this._lodPlanes[s], p),
      v = p.uniforms,
      y = this._sizeLods[n] - 1,
      T = isFinite(a) ? Math.PI / (2 * y) : (2 * Math.PI) / (2 * bi - 1),
      b = a / T,
      S = isFinite(a) ? 1 + Math.floor(g * b) : bi;
    S > bi &&
      console.warn(
        `sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${bi}`
      );
    const m = [];
    let O = 0;
    for (let l = 0; l < bi; ++l) {
      const le = l / b,
        w = Math.exp((-le * le) / 2);
      m.push(w), l === 0 ? (O += w) : l < S && (O += 2 * w);
    }
    for (let l = 0; l < m.length; l++) m[l] = m[l] / O;
    (v.envMap.value = e.texture),
      (v.samples.value = S),
      (v.weights.value = m),
      (v.latitudinal.value = u === 'latitudinal'),
      c && (v.poleAxis.value = c);
    const { _lodMax: R } = this;
    (v.dTheta.value = T), (v.mipInt.value = R - n);
    const D = this._sizeLods[s],
      F = 3 * D * (s > R - lr ? s - R + lr : 0),
      k = 4 * (this._cubeSize - D);
    xs(t, F, k, 3 * D, 2 * D), h.setRenderTarget(t), h.render(_, Sa);
  }
}
function wp(i) {
  const e = [],
    t = [],
    n = [];
  let s = i;
  const a = i - lr + 1 + rl.length;
  for (let u = 0; u < a; u++) {
    const c = Math.pow(2, s);
    t.push(c);
    let h = 1 / c;
    u > i - lr ? (h = rl[u - i + lr - 1]) : u === 0 && (h = 0), n.push(h);
    const p = 1 / (c - 2),
      g = -p,
      _ = 1 + p,
      v = [g, g, _, g, _, _, g, g, _, _, g, _],
      y = 6,
      T = 6,
      b = 3,
      S = 2,
      m = 1,
      O = new Float32Array(b * T * y),
      R = new Float32Array(S * T * y),
      D = new Float32Array(m * T * y);
    for (let k = 0; k < y; k++) {
      const l = ((k % 3) * 2) / 3 - 1,
        le = k > 2 ? 0 : -1,
        w = [l, le, 0, l + 2 / 3, le, 0, l + 2 / 3, le + 1, 0, l, le, 0, l + 2 / 3, le + 1, 0, l, le + 1, 0];
      O.set(w, b * T * k), R.set(v, S * T * k);
      const I = [k, k, k, k, k, k];
      D.set(I, m * T * k);
    }
    const F = new hn();
    F.setAttribute('position', new Bn(O, b)),
      F.setAttribute('uv', new Bn(R, S)),
      F.setAttribute('faceIndex', new Bn(D, m)),
      e.push(F),
      s > lr && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ll(i, e, t) {
  const n = new Li(i, e, t);
  return (n.texture.mapping = Cs), (n.texture.name = 'PMREM.cubeUv'), (n.scissorTest = !0), n;
}
function xs(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function Rp(i, e, t) {
  const n = new Float32Array(bi),
    s = new X(0, 1, 0);
  return new Di({
    name: 'SphericalGaussianBlur',
    defines: { n: bi, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: Xa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: hi,
    depthTest: !1,
    depthWrite: !1
  });
}
function cl() {
  return new Di({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: Xa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: hi,
    depthTest: !1,
    depthWrite: !1
  });
}
function ul() {
  return new Di({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Xa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: hi,
    depthTest: !1,
    depthWrite: !1
  });
}
function Xa() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Cp(i) {
  let e = new WeakMap(),
    t = null;
  function n(c) {
    if (c && c.isTexture) {
      const h = c.mapping,
        p = h === Ra || h === Ca,
        g = h === hr || h === dr;
      if (p || g)
        if (c.isRenderTargetTexture && c.needsPMREMUpdate === !0) {
          c.needsPMREMUpdate = !1;
          let _ = e.get(c);
          return (
            t === null && (t = new ol(i)),
            (_ = p ? t.fromEquirectangular(c, _) : t.fromCubemap(c, _)),
            e.set(c, _),
            _.texture
          );
        } else {
          if (e.has(c)) return e.get(c).texture;
          {
            const _ = c.image;
            if ((p && _ && _.height > 0) || (g && _ && s(_))) {
              t === null && (t = new ol(i));
              const v = p ? t.fromEquirectangular(c) : t.fromCubemap(c);
              return e.set(c, v), c.addEventListener('dispose', a), v.texture;
            } else return null;
          }
        }
    }
    return c;
  }
  function s(c) {
    let h = 0;
    const p = 6;
    for (let g = 0; g < p; g++) c[g] !== void 0 && h++;
    return h === p;
  }
  function a(c) {
    const h = c.target;
    h.removeEventListener('dispose', a);
    const p = e.get(h);
    p !== void 0 && (e.delete(h), p.dispose());
  }
  function u() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: u };
}
function Lp(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let s;
    switch (n) {
      case 'WEBGL_depth_texture':
        s =
          i.getExtension('WEBGL_depth_texture') ||
          i.getExtension('MOZ_WEBGL_depth_texture') ||
          i.getExtension('WEBKIT_WEBGL_depth_texture');
        break;
      case 'EXT_texture_filter_anisotropic':
        s =
          i.getExtension('EXT_texture_filter_anisotropic') ||
          i.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
          i.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        break;
      case 'WEBGL_compressed_texture_s3tc':
        s =
          i.getExtension('WEBGL_compressed_texture_s3tc') ||
          i.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
          i.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        break;
      case 'WEBGL_compressed_texture_pvrtc':
        s = i.getExtension('WEBGL_compressed_texture_pvrtc') || i.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        break;
      default:
        s = i.getExtension(n);
    }
    return (e[n] = s), s;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t('EXT_color_buffer_float')
        : (t('WEBGL_depth_texture'),
          t('OES_texture_float'),
          t('OES_texture_half_float'),
          t('OES_texture_half_float_linear'),
          t('OES_standard_derivatives'),
          t('OES_element_index_uint'),
          t('OES_vertex_array_object'),
          t('ANGLE_instanced_arrays')),
        t('OES_texture_float_linear'),
        t('EXT_color_buffer_half_float'),
        t('WEBGL_multisampled_render_to_texture');
    },
    get: function (n) {
      const s = t(n);
      return s === null && console.warn('THREE.WebGLRenderer: ' + n + ' extension not supported.'), s;
    }
  };
}
function Pp(i, e, t, n) {
  const s = {},
    a = new WeakMap();
  function u(_) {
    const v = _.target;
    v.index !== null && e.remove(v.index);
    for (const T in v.attributes) e.remove(v.attributes[T]);
    for (const T in v.morphAttributes) {
      const b = v.morphAttributes[T];
      for (let S = 0, m = b.length; S < m; S++) e.remove(b[S]);
    }
    v.removeEventListener('dispose', u), delete s[v.id];
    const y = a.get(v);
    y && (e.remove(y), a.delete(v)),
      n.releaseStatesOfGeometry(v),
      v.isInstancedBufferGeometry === !0 && delete v._maxInstanceCount,
      t.memory.geometries--;
  }
  function c(_, v) {
    return s[v.id] === !0 || (v.addEventListener('dispose', u), (s[v.id] = !0), t.memory.geometries++), v;
  }
  function h(_) {
    const v = _.attributes;
    for (const T in v) e.update(v[T], i.ARRAY_BUFFER);
    const y = _.morphAttributes;
    for (const T in y) {
      const b = y[T];
      for (let S = 0, m = b.length; S < m; S++) e.update(b[S], i.ARRAY_BUFFER);
    }
  }
  function p(_) {
    const v = [],
      y = _.index,
      T = _.attributes.position;
    let b = 0;
    if (y !== null) {
      const O = y.array;
      b = y.version;
      for (let R = 0, D = O.length; R < D; R += 3) {
        const F = O[R + 0],
          k = O[R + 1],
          l = O[R + 2];
        v.push(F, k, k, l, l, F);
      }
    } else if (T !== void 0) {
      const O = T.array;
      b = T.version;
      for (let R = 0, D = O.length / 3 - 1; R < D; R += 3) {
        const F = R + 0,
          k = R + 1,
          l = R + 2;
        v.push(F, k, k, l, l, F);
      }
    } else return;
    const S = new (ec(v) ? oc : ac)(v, 1);
    S.version = b;
    const m = a.get(_);
    m && e.remove(m), a.set(_, S);
  }
  function g(_) {
    const v = a.get(_);
    if (v) {
      const y = _.index;
      y !== null && v.version < y.version && p(_);
    } else p(_);
    return a.get(_);
  }
  return { get: c, update: h, getWireframeAttribute: g };
}
function Dp(i, e, t, n) {
  const s = n.isWebGL2;
  let a;
  function u(v) {
    a = v;
  }
  let c, h;
  function p(v) {
    (c = v.type), (h = v.bytesPerElement);
  }
  function g(v, y) {
    i.drawElements(a, y, c, v * h), t.update(y, a, 1);
  }
  function _(v, y, T) {
    if (T === 0) return;
    let b, S;
    if (s) (b = i), (S = 'drawElementsInstanced');
    else if (((b = e.get('ANGLE_instanced_arrays')), (S = 'drawElementsInstancedANGLE'), b === null)) {
      console.error(
        'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
      );
      return;
    }
    b[S](a, y, c, v * h, T), t.update(y, a, T);
  }
  (this.setMode = u), (this.setIndex = p), (this.render = g), (this.renderInstances = _);
}
function Up(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(a, u, c) {
    switch ((t.calls++, u)) {
      case i.TRIANGLES:
        t.triangles += c * (a / 3);
        break;
      case i.LINES:
        t.lines += c * (a / 2);
        break;
      case i.LINE_STRIP:
        t.lines += c * (a - 1);
        break;
      case i.LINE_LOOP:
        t.lines += c * a;
        break;
      case i.POINTS:
        t.points += c * a;
        break;
      default:
        console.error('THREE.WebGLInfo: Unknown draw mode:', u);
        break;
    }
  }
  function s() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return { memory: e, render: t, programs: null, autoReset: !0, reset: s, update: n };
}
function Ip(i, e) {
  return i[0] - e[0];
}
function Np(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Op(i, e, t) {
  const n = {},
    s = new Float32Array(8),
    a = new WeakMap(),
    u = new $t(),
    c = [];
  for (let p = 0; p < 8; p++) c[p] = [p, 0];
  function h(p, g, _) {
    const v = p.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const T = g.morphAttributes.position || g.morphAttributes.normal || g.morphAttributes.color,
        b = T !== void 0 ? T.length : 0;
      let S = a.get(g);
      if (S === void 0 || S.count !== b) {
        let ie = function () {
          W.dispose(), a.delete(g), g.removeEventListener('dispose', ie);
        };
        var y = ie;
        S !== void 0 && S.texture.dispose();
        const R = g.morphAttributes.position !== void 0,
          D = g.morphAttributes.normal !== void 0,
          F = g.morphAttributes.color !== void 0,
          k = g.morphAttributes.position || [],
          l = g.morphAttributes.normal || [],
          le = g.morphAttributes.color || [];
        let w = 0;
        R === !0 && (w = 1), D === !0 && (w = 2), F === !0 && (w = 3);
        let I = g.attributes.position.count * w,
          pe = 1;
        I > e.maxTextureSize && ((pe = Math.ceil(I / e.maxTextureSize)), (I = e.maxTextureSize));
        const ve = new Float32Array(I * pe * 4 * b),
          W = new ic(ve, I, pe, b);
        (W.type = fi), (W.needsUpdate = !0);
        const ne = w * 4;
        for (let ge = 0; ge < b; ge++) {
          const oe = k[ge],
            he = l[ge],
            xe = le[ge],
            de = I * pe * 4 * ge;
          for (let Q = 0; Q < oe.count; Q++) {
            const se = Q * ne;
            R === !0 &&
              (u.fromBufferAttribute(oe, Q),
              (ve[de + se + 0] = u.x),
              (ve[de + se + 1] = u.y),
              (ve[de + se + 2] = u.z),
              (ve[de + se + 3] = 0)),
              D === !0 &&
                (u.fromBufferAttribute(he, Q),
                (ve[de + se + 4] = u.x),
                (ve[de + se + 5] = u.y),
                (ve[de + se + 6] = u.z),
                (ve[de + se + 7] = 0)),
              F === !0 &&
                (u.fromBufferAttribute(xe, Q),
                (ve[de + se + 8] = u.x),
                (ve[de + se + 9] = u.y),
                (ve[de + se + 10] = u.z),
                (ve[de + se + 11] = xe.itemSize === 4 ? u.w : 1));
          }
        }
        (S = { count: b, texture: W, size: new dt(I, pe) }), a.set(g, S), g.addEventListener('dispose', ie);
      }
      let m = 0;
      for (let R = 0; R < v.length; R++) m += v[R];
      const O = g.morphTargetsRelative ? 1 : 1 - m;
      _.getUniforms().setValue(i, 'morphTargetBaseInfluence', O),
        _.getUniforms().setValue(i, 'morphTargetInfluences', v),
        _.getUniforms().setValue(i, 'morphTargetsTexture', S.texture, t),
        _.getUniforms().setValue(i, 'morphTargetsTextureSize', S.size);
    } else {
      const T = v === void 0 ? 0 : v.length;
      let b = n[g.id];
      if (b === void 0 || b.length !== T) {
        b = [];
        for (let D = 0; D < T; D++) b[D] = [D, 0];
        n[g.id] = b;
      }
      for (let D = 0; D < T; D++) {
        const F = b[D];
        (F[0] = D), (F[1] = v[D]);
      }
      b.sort(Np);
      for (let D = 0; D < 8; D++)
        D < T && b[D][1]
          ? ((c[D][0] = b[D][0]), (c[D][1] = b[D][1]))
          : ((c[D][0] = Number.MAX_SAFE_INTEGER), (c[D][1] = 0));
      c.sort(Ip);
      const S = g.morphAttributes.position,
        m = g.morphAttributes.normal;
      let O = 0;
      for (let D = 0; D < 8; D++) {
        const F = c[D],
          k = F[0],
          l = F[1];
        k !== Number.MAX_SAFE_INTEGER && l
          ? (S && g.getAttribute('morphTarget' + D) !== S[k] && g.setAttribute('morphTarget' + D, S[k]),
            m && g.getAttribute('morphNormal' + D) !== m[k] && g.setAttribute('morphNormal' + D, m[k]),
            (s[D] = l),
            (O += l))
          : (S && g.hasAttribute('morphTarget' + D) === !0 && g.deleteAttribute('morphTarget' + D),
            m && g.hasAttribute('morphNormal' + D) === !0 && g.deleteAttribute('morphNormal' + D),
            (s[D] = 0));
      }
      const R = g.morphTargetsRelative ? 1 : 1 - O;
      _.getUniforms().setValue(i, 'morphTargetBaseInfluence', R),
        _.getUniforms().setValue(i, 'morphTargetInfluences', s);
    }
  }
  return { update: h };
}
function Fp(i, e, t, n) {
  let s = new WeakMap();
  function a(h) {
    const p = n.render.frame,
      g = h.geometry,
      _ = e.get(h, g);
    if (
      (s.get(_) !== p && (e.update(_), s.set(_, p)),
      h.isInstancedMesh &&
        (h.hasEventListener('dispose', c) === !1 && h.addEventListener('dispose', c),
        s.get(h) !== p &&
          (t.update(h.instanceMatrix, i.ARRAY_BUFFER),
          h.instanceColor !== null && t.update(h.instanceColor, i.ARRAY_BUFFER),
          s.set(h, p))),
      h.isSkinnedMesh)
    ) {
      const v = h.skeleton;
      s.get(v) !== p && (v.update(), s.set(v, p));
    }
    return _;
  }
  function u() {
    s = new WeakMap();
  }
  function c(h) {
    const p = h.target;
    p.removeEventListener('dispose', c),
      t.remove(p.instanceMatrix),
      p.instanceColor !== null && t.remove(p.instanceColor);
  }
  return { update: a, dispose: u };
}
const dc = new fn(),
  pc = new ic(),
  mc = new yf(),
  gc = new uc(),
  fl = [],
  hl = [],
  dl = new Float32Array(16),
  pl = new Float32Array(9),
  ml = new Float32Array(4);
function vr(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let a = fl[s];
  if ((a === void 0 && ((a = new Float32Array(s)), (fl[s] = a)), e !== 0)) {
    n.toArray(a, 0);
    for (let u = 1, c = 0; u !== e; ++u) (c += t), i[u].toArray(a, c);
  }
  return a;
}
function kt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function Vt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Us(i, e) {
  let t = hl[e];
  t === void 0 && ((t = new Int32Array(e)), (hl[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Bp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Hp(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (kt(t, e)) return;
    i.uniform2fv(this.addr, e), Vt(t, e);
  }
}
function zp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b), (t[0] = e.r), (t[1] = e.g), (t[2] = e.b));
  else {
    if (kt(t, e)) return;
    i.uniform3fv(this.addr, e), Vt(t, e);
  }
}
function Gp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
  else {
    if (kt(t, e)) return;
    i.uniform4fv(this.addr, e), Vt(t, e);
  }
}
function kp(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (kt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Vt(t, e);
  } else {
    if (kt(t, n)) return;
    ml.set(n), i.uniformMatrix2fv(this.addr, !1, ml), Vt(t, n);
  }
}
function Vp(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (kt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Vt(t, e);
  } else {
    if (kt(t, n)) return;
    pl.set(n), i.uniformMatrix3fv(this.addr, !1, pl), Vt(t, n);
  }
}
function Wp(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (kt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Vt(t, e);
  } else {
    if (kt(t, n)) return;
    dl.set(n), i.uniformMatrix4fv(this.addr, !1, dl), Vt(t, n);
  }
}
function Xp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function qp(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (kt(t, e)) return;
    i.uniform2iv(this.addr, e), Vt(t, e);
  }
}
function jp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
  else {
    if (kt(t, e)) return;
    i.uniform3iv(this.addr, e), Vt(t, e);
  }
}
function Yp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
  else {
    if (kt(t, e)) return;
    i.uniform4iv(this.addr, e), Vt(t, e);
  }
}
function Kp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function $p(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (kt(t, e)) return;
    i.uniform2uiv(this.addr, e), Vt(t, e);
  }
}
function Zp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
  else {
    if (kt(t, e)) return;
    i.uniform3uiv(this.addr, e), Vt(t, e);
  }
}
function Jp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
  else {
    if (kt(t, e)) return;
    i.uniform4uiv(this.addr, e), Vt(t, e);
  }
}
function Qp(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)), t.setTexture2D(e || dc, s);
}
function em(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)), t.setTexture3D(e || mc, s);
}
function tm(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)), t.setTextureCube(e || gc, s);
}
function nm(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)), t.setTexture2DArray(e || pc, s);
}
function im(i) {
  switch (i) {
    case 5126:
      return Bp;
    case 35664:
      return Hp;
    case 35665:
      return zp;
    case 35666:
      return Gp;
    case 35674:
      return kp;
    case 35675:
      return Vp;
    case 35676:
      return Wp;
    case 5124:
    case 35670:
      return Xp;
    case 35667:
    case 35671:
      return qp;
    case 35668:
    case 35672:
      return jp;
    case 35669:
    case 35673:
      return Yp;
    case 5125:
      return Kp;
    case 36294:
      return $p;
    case 36295:
      return Zp;
    case 36296:
      return Jp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Qp;
    case 35679:
    case 36299:
    case 36307:
      return em;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return tm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return nm;
  }
}
function rm(i, e) {
  i.uniform1fv(this.addr, e);
}
function sm(i, e) {
  const t = vr(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function am(i, e) {
  const t = vr(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function om(i, e) {
  const t = vr(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function lm(i, e) {
  const t = vr(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function cm(i, e) {
  const t = vr(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function um(i, e) {
  const t = vr(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function fm(i, e) {
  i.uniform1iv(this.addr, e);
}
function hm(i, e) {
  i.uniform2iv(this.addr, e);
}
function dm(i, e) {
  i.uniform3iv(this.addr, e);
}
function pm(i, e) {
  i.uniform4iv(this.addr, e);
}
function mm(i, e) {
  i.uniform1uiv(this.addr, e);
}
function gm(i, e) {
  i.uniform2uiv(this.addr, e);
}
function _m(i, e) {
  i.uniform3uiv(this.addr, e);
}
function vm(i, e) {
  i.uniform4uiv(this.addr, e);
}
function xm(i, e, t) {
  const n = this.cache,
    s = e.length,
    a = Us(t, s);
  kt(n, a) || (i.uniform1iv(this.addr, a), Vt(n, a));
  for (let u = 0; u !== s; ++u) t.setTexture2D(e[u] || dc, a[u]);
}
function Mm(i, e, t) {
  const n = this.cache,
    s = e.length,
    a = Us(t, s);
  kt(n, a) || (i.uniform1iv(this.addr, a), Vt(n, a));
  for (let u = 0; u !== s; ++u) t.setTexture3D(e[u] || mc, a[u]);
}
function Sm(i, e, t) {
  const n = this.cache,
    s = e.length,
    a = Us(t, s);
  kt(n, a) || (i.uniform1iv(this.addr, a), Vt(n, a));
  for (let u = 0; u !== s; ++u) t.setTextureCube(e[u] || gc, a[u]);
}
function ym(i, e, t) {
  const n = this.cache,
    s = e.length,
    a = Us(t, s);
  kt(n, a) || (i.uniform1iv(this.addr, a), Vt(n, a));
  for (let u = 0; u !== s; ++u) t.setTexture2DArray(e[u] || pc, a[u]);
}
function Em(i) {
  switch (i) {
    case 5126:
      return rm;
    case 35664:
      return sm;
    case 35665:
      return am;
    case 35666:
      return om;
    case 35674:
      return lm;
    case 35675:
      return cm;
    case 35676:
      return um;
    case 5124:
    case 35670:
      return fm;
    case 35667:
    case 35671:
      return hm;
    case 35668:
    case 35672:
      return dm;
    case 35669:
    case 35673:
      return pm;
    case 5125:
      return mm;
    case 36294:
      return gm;
    case 36295:
      return _m;
    case 36296:
      return vm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return xm;
    case 35679:
    case 36299:
    case 36307:
      return Mm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Sm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ym;
  }
}
class Tm {
  constructor(e, t, n) {
    (this.id = e), (this.addr = n), (this.cache = []), (this.setValue = im(t.type));
  }
}
class bm {
  constructor(e, t, n) {
    (this.id = e), (this.addr = n), (this.cache = []), (this.size = t.size), (this.setValue = Em(t.type));
  }
}
class Am {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let a = 0, u = s.length; a !== u; ++a) {
      const c = s[a];
      c.setValue(e, t[c.id], n);
    }
  }
}
const Ea = /(\w+)(\])?(\[|\.)?/g;
function gl(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function wm(i, e, t) {
  const n = i.name,
    s = n.length;
  for (Ea.lastIndex = 0; ; ) {
    const a = Ea.exec(n),
      u = Ea.lastIndex;
    let c = a[1];
    const h = a[2] === ']',
      p = a[3];
    if ((h && (c = c | 0), p === void 0 || (p === '[' && u + 2 === s))) {
      gl(t, p === void 0 ? new Tm(c, i, e) : new bm(c, i, e));
      break;
    } else {
      let _ = t.map[c];
      _ === void 0 && ((_ = new Am(c)), gl(t, _)), (t = _);
    }
  }
}
class bs {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const a = e.getActiveUniform(t, s),
        u = e.getUniformLocation(t, a.name);
      wm(a, u, this);
    }
  }
  setValue(e, t, n, s) {
    const a = this.map[t];
    a !== void 0 && a.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let a = 0, u = t.length; a !== u; ++a) {
      const c = t[a],
        h = n[c.id];
      h.needsUpdate !== !1 && c.setValue(e, h.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, a = e.length; s !== a; ++s) {
      const u = e[s];
      u.id in t && n.push(u);
    }
    return n;
  }
}
function _l(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let Rm = 0;
function Cm(i, e) {
  const t = i.split(`
`),
    n = [],
    s = Math.max(e - 6, 0),
    a = Math.min(e + 6, t.length);
  for (let u = s; u < a; u++) {
    const c = u + 1;
    n.push(`${c === e ? '>' : ' '} ${c}: ${t[u]}`);
  }
  return n.join(`
`);
}
function Lm(i) {
  switch (i) {
    case Hn:
      return ['Linear', '( value )'];
    case Pt:
      return ['sRGB', '( value )'];
    default:
      return console.warn('THREE.WebGLProgram: Unsupported color space:', i), ['Linear', '( value )'];
  }
}
function vl(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    s = i.getShaderInfoLog(e).trim();
  if (n && s === '') return '';
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const u = parseInt(a[1]);
    return (
      t.toUpperCase() +
      `

` +
      s +
      `

` +
      Cm(i.getShaderSource(e), u)
    );
  } else return s;
}
function Pm(i, e) {
  const t = Lm(e);
  return 'vec4 ' + i + '( vec4 value ) { return LinearTo' + t[0] + t[1] + '; }';
}
function Dm(i, e) {
  let t;
  switch (e) {
    case yu:
      t = 'Linear';
      break;
    case Eu:
      t = 'Reinhard';
      break;
    case Tu:
      t = 'OptimizedCineon';
      break;
    case bu:
      t = 'ACESFilmic';
      break;
    case Au:
      t = 'Custom';
      break;
    default:
      console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e), (t = 'Linear');
  }
  return 'vec3 ' + i + '( vec3 color ) { return ' + t + 'ToneMapping( color ); }';
}
function Um(i) {
  return [
    i.extensionDerivatives ||
    i.envMapCubeUVHeight ||
    i.bumpMap ||
    i.normalMapTangentSpace ||
    i.clearcoatNormalMap ||
    i.flatShading ||
    i.shaderID === 'physical'
      ? '#extension GL_OES_standard_derivatives : enable'
      : '',
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth
      ? '#extension GL_EXT_frag_depth : enable'
      : '',
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? '#extension GL_EXT_draw_buffers : require' : '',
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod
      ? '#extension GL_EXT_shader_texture_lod : enable'
      : ''
  ].filter(Ir).join(`
`);
}
function Im(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push('#define ' + t + ' ' + n);
  }
  return e.join(`
`);
}
function Nm(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const a = i.getActiveAttrib(e, s),
      u = a.name;
    let c = 1;
    a.type === i.FLOAT_MAT2 && (c = 2),
      a.type === i.FLOAT_MAT3 && (c = 3),
      a.type === i.FLOAT_MAT4 && (c = 4),
      (t[u] = { type: a.type, location: i.getAttribLocation(e, u), locationSize: c });
  }
  return t;
}
function Ir(i) {
  return i !== '';
}
function xl(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ml(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Om = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ia(i) {
  return i.replace(Om, Bm);
}
const Fm = new Map([
  ['encodings_fragment', 'colorspace_fragment'],
  ['encodings_pars_fragment', 'colorspace_pars_fragment'],
  ['output_fragment', 'opaque_fragment']
]);
function Bm(i, e) {
  let t = ct[e];
  if (t === void 0) {
    const n = Fm.get(e);
    if (n !== void 0)
      (t = ct[n]), console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error('Can not resolve #include <' + e + '>');
  }
  return Ia(t);
}
const Hm =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Sl(i) {
  return i.replace(Hm, zm);
}
function zm(i, e, t, n) {
  let s = '';
  for (let a = parseInt(e); a < parseInt(t); a++)
    s += n.replace(/\[\s*i\s*\]/g, '[ ' + a + ' ]').replace(/UNROLLED_LOOP_INDEX/g, a);
  return s;
}
function yl(i) {
  let e =
    'precision ' +
    i.precision +
    ` float;
precision ` +
    i.precision +
    ' int;';
  return (
    i.precision === 'highp'
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === 'mediump'
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === 'lowp' &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Gm(i) {
  let e = 'SHADOWMAP_TYPE_BASIC';
  return (
    i.shadowMapType === kl
      ? (e = 'SHADOWMAP_TYPE_PCF')
      : i.shadowMapType === eu
      ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
      : i.shadowMapType === Jn && (e = 'SHADOWMAP_TYPE_VSM'),
    e
  );
}
function km(i) {
  let e = 'ENVMAP_TYPE_CUBE';
  if (i.envMap)
    switch (i.envMapMode) {
      case hr:
      case dr:
        e = 'ENVMAP_TYPE_CUBE';
        break;
      case Cs:
        e = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return e;
}
function Vm(i) {
  let e = 'ENVMAP_MODE_REFLECTION';
  if (i.envMap)
    switch (i.envMapMode) {
      case dr:
        e = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return e;
}
function Wm(i) {
  let e = 'ENVMAP_BLENDING_NONE';
  if (i.envMap)
    switch (i.combine) {
      case Xl:
        e = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case Mu:
        e = 'ENVMAP_BLENDING_MIX';
        break;
      case Su:
        e = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return e;
}
function Xm(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function qm(i, e, t, n) {
  const s = i.getContext(),
    a = t.defines;
  let u = t.vertexShader,
    c = t.fragmentShader;
  const h = Gm(t),
    p = km(t),
    g = Vm(t),
    _ = Wm(t),
    v = Xm(t),
    y = t.isWebGL2 ? '' : Um(t),
    T = Im(a),
    b = s.createProgram();
  let S,
    m,
    O = t.glslVersion
      ? '#version ' +
        t.glslVersion +
        `
`
      : '';
  t.isRawShaderMaterial
    ? ((S = ['#define SHADER_TYPE ' + t.shaderType, '#define SHADER_NAME ' + t.shaderName, T].filter(Ir).join(`
`)),
      S.length > 0 &&
        (S += `
`),
      (m = [y, '#define SHADER_TYPE ' + t.shaderType, '#define SHADER_NAME ' + t.shaderName, T].filter(Ir).join(`
`)),
      m.length > 0 &&
        (m += `
`))
    : ((S = [
        yl(t),
        '#define SHADER_TYPE ' + t.shaderType,
        '#define SHADER_NAME ' + t.shaderName,
        T,
        t.instancing ? '#define USE_INSTANCING' : '',
        t.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
        t.useFog && t.fog ? '#define USE_FOG' : '',
        t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
        t.map ? '#define USE_MAP' : '',
        t.envMap ? '#define USE_ENVMAP' : '',
        t.envMap ? '#define ' + g : '',
        t.lightMap ? '#define USE_LIGHTMAP' : '',
        t.aoMap ? '#define USE_AOMAP' : '',
        t.bumpMap ? '#define USE_BUMPMAP' : '',
        t.normalMap ? '#define USE_NORMALMAP' : '',
        t.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        t.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        t.displacementMap ? '#define USE_DISPLACEMENTMAP' : '',
        t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        t.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        t.specularMap ? '#define USE_SPECULARMAP' : '',
        t.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        t.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        t.metalnessMap ? '#define USE_METALNESSMAP' : '',
        t.alphaMap ? '#define USE_ALPHAMAP' : '',
        t.alphaHash ? '#define USE_ALPHAHASH' : '',
        t.transmission ? '#define USE_TRANSMISSION' : '',
        t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        t.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        t.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        t.mapUv ? '#define MAP_UV ' + t.mapUv : '',
        t.alphaMapUv ? '#define ALPHAMAP_UV ' + t.alphaMapUv : '',
        t.lightMapUv ? '#define LIGHTMAP_UV ' + t.lightMapUv : '',
        t.aoMapUv ? '#define AOMAP_UV ' + t.aoMapUv : '',
        t.emissiveMapUv ? '#define EMISSIVEMAP_UV ' + t.emissiveMapUv : '',
        t.bumpMapUv ? '#define BUMPMAP_UV ' + t.bumpMapUv : '',
        t.normalMapUv ? '#define NORMALMAP_UV ' + t.normalMapUv : '',
        t.displacementMapUv ? '#define DISPLACEMENTMAP_UV ' + t.displacementMapUv : '',
        t.metalnessMapUv ? '#define METALNESSMAP_UV ' + t.metalnessMapUv : '',
        t.roughnessMapUv ? '#define ROUGHNESSMAP_UV ' + t.roughnessMapUv : '',
        t.anisotropyMapUv ? '#define ANISOTROPYMAP_UV ' + t.anisotropyMapUv : '',
        t.clearcoatMapUv ? '#define CLEARCOATMAP_UV ' + t.clearcoatMapUv : '',
        t.clearcoatNormalMapUv ? '#define CLEARCOAT_NORMALMAP_UV ' + t.clearcoatNormalMapUv : '',
        t.clearcoatRoughnessMapUv ? '#define CLEARCOAT_ROUGHNESSMAP_UV ' + t.clearcoatRoughnessMapUv : '',
        t.iridescenceMapUv ? '#define IRIDESCENCEMAP_UV ' + t.iridescenceMapUv : '',
        t.iridescenceThicknessMapUv ? '#define IRIDESCENCE_THICKNESSMAP_UV ' + t.iridescenceThicknessMapUv : '',
        t.sheenColorMapUv ? '#define SHEEN_COLORMAP_UV ' + t.sheenColorMapUv : '',
        t.sheenRoughnessMapUv ? '#define SHEEN_ROUGHNESSMAP_UV ' + t.sheenRoughnessMapUv : '',
        t.specularMapUv ? '#define SPECULARMAP_UV ' + t.specularMapUv : '',
        t.specularColorMapUv ? '#define SPECULAR_COLORMAP_UV ' + t.specularColorMapUv : '',
        t.specularIntensityMapUv ? '#define SPECULAR_INTENSITYMAP_UV ' + t.specularIntensityMapUv : '',
        t.transmissionMapUv ? '#define TRANSMISSIONMAP_UV ' + t.transmissionMapUv : '',
        t.thicknessMapUv ? '#define THICKNESSMAP_UV ' + t.thicknessMapUv : '',
        t.vertexTangents && t.flatShading === !1 ? '#define USE_TANGENT' : '',
        t.vertexColors ? '#define USE_COLOR' : '',
        t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        t.vertexUv1s ? '#define USE_UV1' : '',
        t.vertexUv2s ? '#define USE_UV2' : '',
        t.vertexUv3s ? '#define USE_UV3' : '',
        t.pointsUvs ? '#define USE_POINTS_UV' : '',
        t.flatShading ? '#define FLAT_SHADED' : '',
        t.skinning ? '#define USE_SKINNING' : '',
        t.morphTargets ? '#define USE_MORPHTARGETS' : '',
        t.morphNormals && t.flatShading === !1 ? '#define USE_MORPHNORMALS' : '',
        t.morphColors && t.isWebGL2 ? '#define USE_MORPHCOLORS' : '',
        t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_TEXTURE' : '',
        t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + t.morphTextureStride : '',
        t.morphTargetsCount > 0 && t.isWebGL2 ? '#define MORPHTARGETS_COUNT ' + t.morphTargetsCount : '',
        t.doubleSided ? '#define DOUBLE_SIDED' : '',
        t.flipSided ? '#define FLIP_SIDED' : '',
        t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        t.shadowMapEnabled ? '#define ' + h : '',
        t.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
        t.useLegacyLights ? '#define LEGACY_LIGHTS' : '',
        t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
        'uniform mat4 modelMatrix;',
        'uniform mat4 modelViewMatrix;',
        'uniform mat4 projectionMatrix;',
        'uniform mat4 viewMatrix;',
        'uniform mat3 normalMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        '#ifdef USE_INSTANCING',
        '	attribute mat4 instanceMatrix;',
        '#endif',
        '#ifdef USE_INSTANCING_COLOR',
        '	attribute vec3 instanceColor;',
        '#endif',
        'attribute vec3 position;',
        'attribute vec3 normal;',
        'attribute vec2 uv;',
        '#ifdef USE_UV1',
        '	attribute vec2 uv1;',
        '#endif',
        '#ifdef USE_UV2',
        '	attribute vec2 uv2;',
        '#endif',
        '#ifdef USE_UV3',
        '	attribute vec2 uv3;',
        '#endif',
        '#ifdef USE_TANGENT',
        '	attribute vec4 tangent;',
        '#endif',
        '#if defined( USE_COLOR_ALPHA )',
        '	attribute vec4 color;',
        '#elif defined( USE_COLOR )',
        '	attribute vec3 color;',
        '#endif',
        '#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )',
        '	attribute vec3 morphTarget0;',
        '	attribute vec3 morphTarget1;',
        '	attribute vec3 morphTarget2;',
        '	attribute vec3 morphTarget3;',
        '	#ifdef USE_MORPHNORMALS',
        '		attribute vec3 morphNormal0;',
        '		attribute vec3 morphNormal1;',
        '		attribute vec3 morphNormal2;',
        '		attribute vec3 morphNormal3;',
        '	#else',
        '		attribute vec3 morphTarget4;',
        '		attribute vec3 morphTarget5;',
        '		attribute vec3 morphTarget6;',
        '		attribute vec3 morphTarget7;',
        '	#endif',
        '#endif',
        '#ifdef USE_SKINNING',
        '	attribute vec4 skinIndex;',
        '	attribute vec4 skinWeight;',
        '#endif',
        `
`
      ].filter(Ir).join(`
`)),
      (m = [
        y,
        yl(t),
        '#define SHADER_TYPE ' + t.shaderType,
        '#define SHADER_NAME ' + t.shaderName,
        T,
        t.useFog && t.fog ? '#define USE_FOG' : '',
        t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
        t.map ? '#define USE_MAP' : '',
        t.matcap ? '#define USE_MATCAP' : '',
        t.envMap ? '#define USE_ENVMAP' : '',
        t.envMap ? '#define ' + p : '',
        t.envMap ? '#define ' + g : '',
        t.envMap ? '#define ' + _ : '',
        v ? '#define CUBEUV_TEXEL_WIDTH ' + v.texelWidth : '',
        v ? '#define CUBEUV_TEXEL_HEIGHT ' + v.texelHeight : '',
        v ? '#define CUBEUV_MAX_MIP ' + v.maxMip + '.0' : '',
        t.lightMap ? '#define USE_LIGHTMAP' : '',
        t.aoMap ? '#define USE_AOMAP' : '',
        t.bumpMap ? '#define USE_BUMPMAP' : '',
        t.normalMap ? '#define USE_NORMALMAP' : '',
        t.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        t.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        t.anisotropy ? '#define USE_ANISOTROPY' : '',
        t.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        t.clearcoat ? '#define USE_CLEARCOAT' : '',
        t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        t.iridescence ? '#define USE_IRIDESCENCE' : '',
        t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        t.specularMap ? '#define USE_SPECULARMAP' : '',
        t.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        t.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        t.metalnessMap ? '#define USE_METALNESSMAP' : '',
        t.alphaMap ? '#define USE_ALPHAMAP' : '',
        t.alphaTest ? '#define USE_ALPHATEST' : '',
        t.alphaHash ? '#define USE_ALPHAHASH' : '',
        t.sheen ? '#define USE_SHEEN' : '',
        t.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        t.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        t.transmission ? '#define USE_TRANSMISSION' : '',
        t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        t.vertexTangents && t.flatShading === !1 ? '#define USE_TANGENT' : '',
        t.vertexColors || t.instancingColor ? '#define USE_COLOR' : '',
        t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        t.vertexUv1s ? '#define USE_UV1' : '',
        t.vertexUv2s ? '#define USE_UV2' : '',
        t.vertexUv3s ? '#define USE_UV3' : '',
        t.pointsUvs ? '#define USE_POINTS_UV' : '',
        t.gradientMap ? '#define USE_GRADIENTMAP' : '',
        t.flatShading ? '#define FLAT_SHADED' : '',
        t.doubleSided ? '#define DOUBLE_SIDED' : '',
        t.flipSided ? '#define FLIP_SIDED' : '',
        t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        t.shadowMapEnabled ? '#define ' + h : '',
        t.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
        t.useLegacyLights ? '#define LEGACY_LIGHTS' : '',
        t.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
        t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '',
        'uniform mat4 viewMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        t.toneMapping !== di ? '#define TONE_MAPPING' : '',
        t.toneMapping !== di ? ct.tonemapping_pars_fragment : '',
        t.toneMapping !== di ? Dm('toneMapping', t.toneMapping) : '',
        t.dithering ? '#define DITHERING' : '',
        t.opaque ? '#define OPAQUE' : '',
        ct.colorspace_pars_fragment,
        Pm('linearToOutputTexel', t.outputColorSpace),
        t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
        `
`
      ].filter(Ir).join(`
`))),
    (u = Ia(u)),
    (u = xl(u, t)),
    (u = Ml(u, t)),
    (c = Ia(c)),
    (c = xl(c, t)),
    (c = Ml(c, t)),
    (u = Sl(u)),
    (c = Sl(c)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((O = `#version 300 es
`),
      (S =
        [
          'precision mediump sampler2DArray;',
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture'
        ].join(`
`) +
        `
` +
        S),
      (m =
        [
          '#define varying in',
          t.glslVersion === ko ? '' : 'layout(location = 0) out highp vec4 pc_fragColor;',
          t.glslVersion === ko ? '' : '#define gl_FragColor pc_fragColor',
          '#define gl_FragDepthEXT gl_FragDepth',
          '#define texture2D texture',
          '#define textureCube texture',
          '#define texture2DProj textureProj',
          '#define texture2DLodEXT textureLod',
          '#define texture2DProjLodEXT textureProjLod',
          '#define textureCubeLodEXT textureLod',
          '#define texture2DGradEXT textureGrad',
          '#define texture2DProjGradEXT textureProjGrad',
          '#define textureCubeGradEXT textureGrad'
        ].join(`
`) +
        `
` +
        m));
  const R = O + S + u,
    D = O + m + c,
    F = _l(s, s.VERTEX_SHADER, R),
    k = _l(s, s.FRAGMENT_SHADER, D);
  if (
    (s.attachShader(b, F),
    s.attachShader(b, k),
    t.index0AttributeName !== void 0
      ? s.bindAttribLocation(b, 0, t.index0AttributeName)
      : t.morphTargets === !0 && s.bindAttribLocation(b, 0, 'position'),
    s.linkProgram(b),
    i.debug.checkShaderErrors)
  ) {
    const w = s.getProgramInfoLog(b).trim(),
      I = s.getShaderInfoLog(F).trim(),
      pe = s.getShaderInfoLog(k).trim();
    let ve = !0,
      W = !0;
    if (s.getProgramParameter(b, s.LINK_STATUS) === !1)
      if (((ve = !1), typeof i.debug.onShaderError == 'function')) i.debug.onShaderError(s, b, F, k);
      else {
        const ne = vl(s, F, 'vertex'),
          ie = vl(s, k, 'fragment');
        console.error(
          'THREE.WebGLProgram: Shader Error ' +
            s.getError() +
            ' - VALIDATE_STATUS ' +
            s.getProgramParameter(b, s.VALIDATE_STATUS) +
            `

Program Info Log: ` +
            w +
            `
` +
            ne +
            `
` +
            ie
        );
      }
    else w !== '' ? console.warn('THREE.WebGLProgram: Program Info Log:', w) : (I === '' || pe === '') && (W = !1);
    W &&
      (this.diagnostics = {
        runnable: ve,
        programLog: w,
        vertexShader: { log: I, prefix: S },
        fragmentShader: { log: pe, prefix: m }
      });
  }
  s.deleteShader(F), s.deleteShader(k);
  let l;
  this.getUniforms = function () {
    return l === void 0 && (l = new bs(s, b)), l;
  };
  let le;
  return (
    (this.getAttributes = function () {
      return le === void 0 && (le = Nm(s, b)), le;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this), s.deleteProgram(b), (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Rm++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = b),
    (this.vertexShader = F),
    (this.fragmentShader = k),
    this
  );
}
let jm = 0;
class Ym {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      s = this._getShaderStage(t),
      a = this._getShaderStage(n),
      u = this._getShaderCacheForMaterial(e);
    return u.has(s) === !1 && (u.add(s), s.usedTimes++), u.has(a) === !1 && (u.add(a), a.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Km(e)), t.set(e, n)), n;
  }
}
class Km {
  constructor(e) {
    (this.id = jm++), (this.code = e), (this.usedTimes = 0);
  }
}
function $m(i, e, t, n, s, a, u) {
  const c = new rc(),
    h = new Ym(),
    p = [],
    g = s.isWebGL2,
    _ = s.logarithmicDepthBuffer,
    v = s.vertexTextures;
  let y = s.precision;
  const T = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite'
  };
  function b(w) {
    return w === 0 ? 'uv' : `uv${w}`;
  }
  function S(w, I, pe, ve, W) {
    const ne = ve.fog,
      ie = W.geometry,
      ge = w.isMeshStandardMaterial ? ve.environment : null,
      oe = (w.isMeshStandardMaterial ? t : e).get(w.envMap || ge),
      he = oe && oe.mapping === Cs ? oe.image.height : null,
      xe = T[w.type];
    w.precision !== null &&
      ((y = s.getMaxPrecision(w.precision)),
      y !== w.precision &&
        console.warn('THREE.WebGLProgram.getParameters:', w.precision, 'not supported, using', y, 'instead.'));
    const de = ie.morphAttributes.position || ie.morphAttributes.normal || ie.morphAttributes.color,
      Q = de !== void 0 ? de.length : 0;
    let se = 0;
    ie.morphAttributes.position !== void 0 && (se = 1),
      ie.morphAttributes.normal !== void 0 && (se = 2),
      ie.morphAttributes.color !== void 0 && (se = 3);
    let Le, De, Oe, Ve;
    if (xe) {
      const At = Fn[xe];
      (Le = At.vertexShader), (De = At.fragmentShader);
    } else
      (Le = w.vertexShader),
        (De = w.fragmentShader),
        h.update(w),
        (Oe = h.getVertexShaderID(w)),
        (Ve = h.getFragmentShaderID(w));
    const Ze = i.getRenderTarget(),
      Ge = W.isInstancedMesh === !0,
      gt = !!w.map,
      Tt = !!w.matcap,
      rt = !!oe,
      q = !!w.aoMap,
      Ct = !!w.lightMap,
      ze = !!w.bumpMap,
      Qe = !!w.normalMap,
      We = !!w.displacementMap,
      St = !!w.emissiveMap,
      je = !!w.metalnessMap,
      tt = !!w.roughnessMap,
      vt = w.anisotropy > 0,
      Nt = w.clearcoat > 0,
      yt = w.iridescence > 0,
      P = w.sheen > 0,
      A = w.transmission > 0,
      z = vt && !!w.anisotropyMap,
      me = Nt && !!w.clearcoatMap,
      Me = Nt && !!w.clearcoatNormalMap,
      ye = Nt && !!w.clearcoatRoughnessMap,
      Be = yt && !!w.iridescenceMap,
      Ee = yt && !!w.iridescenceThicknessMap,
      ee = P && !!w.sheenColorMap,
      B = P && !!w.sheenRoughnessMap,
      fe = !!w.specularMap,
      we = !!w.specularColorMap,
      Te = !!w.specularIntensityMap,
      Pe = A && !!w.transmissionMap,
      Xe = A && !!w.thicknessMap,
      ut = !!w.gradientMap,
      G = !!w.alphaMap,
      Re = w.alphaTest > 0,
      Z = !!w.alphaHash,
      _e = !!w.extensions,
      be = !!ie.attributes.uv1,
      ot = !!ie.attributes.uv2,
      st = !!ie.attributes.uv3;
    let at = di;
    return (
      w.toneMapped && (Ze === null || Ze.isXRRenderTarget === !0) && (at = i.toneMapping),
      {
        isWebGL2: g,
        shaderID: xe,
        shaderType: w.type,
        shaderName: w.name,
        vertexShader: Le,
        fragmentShader: De,
        defines: w.defines,
        customVertexShaderID: Oe,
        customFragmentShaderID: Ve,
        isRawShaderMaterial: w.isRawShaderMaterial === !0,
        glslVersion: w.glslVersion,
        precision: y,
        instancing: Ge,
        instancingColor: Ge && W.instanceColor !== null,
        supportsVertexTextures: v,
        outputColorSpace: Ze === null ? i.outputColorSpace : Ze.isXRRenderTarget === !0 ? Ze.texture.colorSpace : Hn,
        map: gt,
        matcap: Tt,
        envMap: rt,
        envMapMode: rt && oe.mapping,
        envMapCubeUVHeight: he,
        aoMap: q,
        lightMap: Ct,
        bumpMap: ze,
        normalMap: Qe,
        displacementMap: v && We,
        emissiveMap: St,
        normalMapObjectSpace: Qe && w.normalMapType === zu,
        normalMapTangentSpace: Qe && w.normalMapType === Hu,
        metalnessMap: je,
        roughnessMap: tt,
        anisotropy: vt,
        anisotropyMap: z,
        clearcoat: Nt,
        clearcoatMap: me,
        clearcoatNormalMap: Me,
        clearcoatRoughnessMap: ye,
        iridescence: yt,
        iridescenceMap: Be,
        iridescenceThicknessMap: Ee,
        sheen: P,
        sheenColorMap: ee,
        sheenRoughnessMap: B,
        specularMap: fe,
        specularColorMap: we,
        specularIntensityMap: Te,
        transmission: A,
        transmissionMap: Pe,
        thicknessMap: Xe,
        gradientMap: ut,
        opaque: w.transparent === !1 && w.blending === cr,
        alphaMap: G,
        alphaTest: Re,
        alphaHash: Z,
        combine: w.combine,
        mapUv: gt && b(w.map.channel),
        aoMapUv: q && b(w.aoMap.channel),
        lightMapUv: Ct && b(w.lightMap.channel),
        bumpMapUv: ze && b(w.bumpMap.channel),
        normalMapUv: Qe && b(w.normalMap.channel),
        displacementMapUv: We && b(w.displacementMap.channel),
        emissiveMapUv: St && b(w.emissiveMap.channel),
        metalnessMapUv: je && b(w.metalnessMap.channel),
        roughnessMapUv: tt && b(w.roughnessMap.channel),
        anisotropyMapUv: z && b(w.anisotropyMap.channel),
        clearcoatMapUv: me && b(w.clearcoatMap.channel),
        clearcoatNormalMapUv: Me && b(w.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: ye && b(w.clearcoatRoughnessMap.channel),
        iridescenceMapUv: Be && b(w.iridescenceMap.channel),
        iridescenceThicknessMapUv: Ee && b(w.iridescenceThicknessMap.channel),
        sheenColorMapUv: ee && b(w.sheenColorMap.channel),
        sheenRoughnessMapUv: B && b(w.sheenRoughnessMap.channel),
        specularMapUv: fe && b(w.specularMap.channel),
        specularColorMapUv: we && b(w.specularColorMap.channel),
        specularIntensityMapUv: Te && b(w.specularIntensityMap.channel),
        transmissionMapUv: Pe && b(w.transmissionMap.channel),
        thicknessMapUv: Xe && b(w.thicknessMap.channel),
        alphaMapUv: G && b(w.alphaMap.channel),
        vertexTangents: !!ie.attributes.tangent && (Qe || vt),
        vertexColors: w.vertexColors,
        vertexAlphas: w.vertexColors === !0 && !!ie.attributes.color && ie.attributes.color.itemSize === 4,
        vertexUv1s: be,
        vertexUv2s: ot,
        vertexUv3s: st,
        pointsUvs: W.isPoints === !0 && !!ie.attributes.uv && (gt || G),
        fog: !!ne,
        useFog: w.fog === !0,
        fogExp2: ne && ne.isFogExp2,
        flatShading: w.flatShading === !0,
        sizeAttenuation: w.sizeAttenuation === !0,
        logarithmicDepthBuffer: _,
        skinning: W.isSkinnedMesh === !0,
        morphTargets: ie.morphAttributes.position !== void 0,
        morphNormals: ie.morphAttributes.normal !== void 0,
        morphColors: ie.morphAttributes.color !== void 0,
        morphTargetsCount: Q,
        morphTextureStride: se,
        numDirLights: I.directional.length,
        numPointLights: I.point.length,
        numSpotLights: I.spot.length,
        numSpotLightMaps: I.spotLightMap.length,
        numRectAreaLights: I.rectArea.length,
        numHemiLights: I.hemi.length,
        numDirLightShadows: I.directionalShadowMap.length,
        numPointLightShadows: I.pointShadowMap.length,
        numSpotLightShadows: I.spotShadowMap.length,
        numSpotLightShadowsWithMaps: I.numSpotLightShadowsWithMaps,
        numClippingPlanes: u.numPlanes,
        numClipIntersection: u.numIntersection,
        dithering: w.dithering,
        shadowMapEnabled: i.shadowMap.enabled && pe.length > 0,
        shadowMapType: i.shadowMap.type,
        toneMapping: at,
        useLegacyLights: i._useLegacyLights,
        decodeVideoTexture: gt && w.map.isVideoTexture === !0 && w.map.colorSpace === Pt,
        premultipliedAlpha: w.premultipliedAlpha,
        doubleSided: w.side === Qn,
        flipSided: w.side === an,
        useDepthPacking: w.depthPacking >= 0,
        depthPacking: w.depthPacking || 0,
        index0AttributeName: w.index0AttributeName,
        extensionDerivatives: _e && w.extensions.derivatives === !0,
        extensionFragDepth: _e && w.extensions.fragDepth === !0,
        extensionDrawBuffers: _e && w.extensions.drawBuffers === !0,
        extensionShaderTextureLOD: _e && w.extensions.shaderTextureLOD === !0,
        rendererExtensionFragDepth: g || n.has('EXT_frag_depth'),
        rendererExtensionDrawBuffers: g || n.has('WEBGL_draw_buffers'),
        rendererExtensionShaderTextureLod: g || n.has('EXT_shader_texture_lod'),
        customProgramCacheKey: w.customProgramCacheKey()
      }
    );
  }
  function m(w) {
    const I = [];
    if (
      (w.shaderID ? I.push(w.shaderID) : (I.push(w.customVertexShaderID), I.push(w.customFragmentShaderID)),
      w.defines !== void 0)
    )
      for (const pe in w.defines) I.push(pe), I.push(w.defines[pe]);
    return (
      w.isRawShaderMaterial === !1 && (O(I, w), R(I, w), I.push(i.outputColorSpace)),
      I.push(w.customProgramCacheKey),
      I.join()
    );
  }
  function O(w, I) {
    w.push(I.precision),
      w.push(I.outputColorSpace),
      w.push(I.envMapMode),
      w.push(I.envMapCubeUVHeight),
      w.push(I.mapUv),
      w.push(I.alphaMapUv),
      w.push(I.lightMapUv),
      w.push(I.aoMapUv),
      w.push(I.bumpMapUv),
      w.push(I.normalMapUv),
      w.push(I.displacementMapUv),
      w.push(I.emissiveMapUv),
      w.push(I.metalnessMapUv),
      w.push(I.roughnessMapUv),
      w.push(I.anisotropyMapUv),
      w.push(I.clearcoatMapUv),
      w.push(I.clearcoatNormalMapUv),
      w.push(I.clearcoatRoughnessMapUv),
      w.push(I.iridescenceMapUv),
      w.push(I.iridescenceThicknessMapUv),
      w.push(I.sheenColorMapUv),
      w.push(I.sheenRoughnessMapUv),
      w.push(I.specularMapUv),
      w.push(I.specularColorMapUv),
      w.push(I.specularIntensityMapUv),
      w.push(I.transmissionMapUv),
      w.push(I.thicknessMapUv),
      w.push(I.combine),
      w.push(I.fogExp2),
      w.push(I.sizeAttenuation),
      w.push(I.morphTargetsCount),
      w.push(I.morphAttributeCount),
      w.push(I.numDirLights),
      w.push(I.numPointLights),
      w.push(I.numSpotLights),
      w.push(I.numSpotLightMaps),
      w.push(I.numHemiLights),
      w.push(I.numRectAreaLights),
      w.push(I.numDirLightShadows),
      w.push(I.numPointLightShadows),
      w.push(I.numSpotLightShadows),
      w.push(I.numSpotLightShadowsWithMaps),
      w.push(I.shadowMapType),
      w.push(I.toneMapping),
      w.push(I.numClippingPlanes),
      w.push(I.numClipIntersection),
      w.push(I.depthPacking);
  }
  function R(w, I) {
    c.disableAll(),
      I.isWebGL2 && c.enable(0),
      I.supportsVertexTextures && c.enable(1),
      I.instancing && c.enable(2),
      I.instancingColor && c.enable(3),
      I.matcap && c.enable(4),
      I.envMap && c.enable(5),
      I.normalMapObjectSpace && c.enable(6),
      I.normalMapTangentSpace && c.enable(7),
      I.clearcoat && c.enable(8),
      I.iridescence && c.enable(9),
      I.alphaTest && c.enable(10),
      I.vertexColors && c.enable(11),
      I.vertexAlphas && c.enable(12),
      I.vertexUv1s && c.enable(13),
      I.vertexUv2s && c.enable(14),
      I.vertexUv3s && c.enable(15),
      I.vertexTangents && c.enable(16),
      I.anisotropy && c.enable(17),
      w.push(c.mask),
      c.disableAll(),
      I.fog && c.enable(0),
      I.useFog && c.enable(1),
      I.flatShading && c.enable(2),
      I.logarithmicDepthBuffer && c.enable(3),
      I.skinning && c.enable(4),
      I.morphTargets && c.enable(5),
      I.morphNormals && c.enable(6),
      I.morphColors && c.enable(7),
      I.premultipliedAlpha && c.enable(8),
      I.shadowMapEnabled && c.enable(9),
      I.useLegacyLights && c.enable(10),
      I.doubleSided && c.enable(11),
      I.flipSided && c.enable(12),
      I.useDepthPacking && c.enable(13),
      I.dithering && c.enable(14),
      I.transmission && c.enable(15),
      I.sheen && c.enable(16),
      I.opaque && c.enable(17),
      I.pointsUvs && c.enable(18),
      I.decodeVideoTexture && c.enable(19),
      w.push(c.mask);
  }
  function D(w) {
    const I = T[w.type];
    let pe;
    if (I) {
      const ve = Fn[I];
      pe = Nf.clone(ve.uniforms);
    } else pe = w.uniforms;
    return pe;
  }
  function F(w, I) {
    let pe;
    for (let ve = 0, W = p.length; ve < W; ve++) {
      const ne = p[ve];
      if (ne.cacheKey === I) {
        (pe = ne), ++pe.usedTimes;
        break;
      }
    }
    return pe === void 0 && ((pe = new qm(i, I, w, a)), p.push(pe)), pe;
  }
  function k(w) {
    if (--w.usedTimes === 0) {
      const I = p.indexOf(w);
      (p[I] = p[p.length - 1]), p.pop(), w.destroy();
    }
  }
  function l(w) {
    h.remove(w);
  }
  function le() {
    h.dispose();
  }
  return {
    getParameters: S,
    getProgramCacheKey: m,
    getUniforms: D,
    acquireProgram: F,
    releaseProgram: k,
    releaseShaderCache: l,
    programs: p,
    dispose: le
  };
}
function Zm() {
  let i = new WeakMap();
  function e(a) {
    let u = i.get(a);
    return u === void 0 && ((u = {}), i.set(a, u)), u;
  }
  function t(a) {
    i.delete(a);
  }
  function n(a, u, c) {
    i.get(a)[u] = c;
  }
  function s() {
    i = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: s };
}
function Jm(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function El(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function Tl() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    s = [];
  function a() {
    (e = 0), (t.length = 0), (n.length = 0), (s.length = 0);
  }
  function u(_, v, y, T, b, S) {
    let m = i[e];
    return (
      m === void 0
        ? ((m = {
            id: _.id,
            object: _,
            geometry: v,
            material: y,
            groupOrder: T,
            renderOrder: _.renderOrder,
            z: b,
            group: S
          }),
          (i[e] = m))
        : ((m.id = _.id),
          (m.object = _),
          (m.geometry = v),
          (m.material = y),
          (m.groupOrder = T),
          (m.renderOrder = _.renderOrder),
          (m.z = b),
          (m.group = S)),
      e++,
      m
    );
  }
  function c(_, v, y, T, b, S) {
    const m = u(_, v, y, T, b, S);
    y.transmission > 0 ? n.push(m) : y.transparent === !0 ? s.push(m) : t.push(m);
  }
  function h(_, v, y, T, b, S) {
    const m = u(_, v, y, T, b, S);
    y.transmission > 0 ? n.unshift(m) : y.transparent === !0 ? s.unshift(m) : t.unshift(m);
  }
  function p(_, v) {
    t.length > 1 && t.sort(_ || Jm), n.length > 1 && n.sort(v || El), s.length > 1 && s.sort(v || El);
  }
  function g() {
    for (let _ = e, v = i.length; _ < v; _++) {
      const y = i[_];
      if (y.id === null) break;
      (y.id = null), (y.object = null), (y.geometry = null), (y.material = null), (y.group = null);
    }
  }
  return { opaque: t, transmissive: n, transparent: s, init: a, push: c, unshift: h, finish: g, sort: p };
}
function Qm() {
  let i = new WeakMap();
  function e(n, s) {
    const a = i.get(n);
    let u;
    return a === void 0 ? ((u = new Tl()), i.set(n, [u])) : s >= a.length ? ((u = new Tl()), a.push(u)) : (u = a[s]), u;
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function eg() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = { direction: new X(), color: new bt() };
          break;
        case 'SpotLight':
          t = {
            position: new X(),
            direction: new X(),
            color: new bt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case 'PointLight':
          t = { position: new X(), color: new bt(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          t = { direction: new X(), skyColor: new bt(), groundColor: new bt() };
          break;
        case 'RectAreaLight':
          t = { color: new bt(), position: new X(), halfWidth: new X(), halfHeight: new X() };
          break;
      }
      return (i[e.id] = t), t;
    }
  };
}
function tg() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new dt() };
          break;
        case 'SpotLight':
          t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new dt() };
          break;
        case 'PointLight':
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new dt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return (i[e.id] = t), t;
    }
  };
}
let ng = 0;
function ig(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function rg(i, e) {
  const t = new eg(),
    n = tg(),
    s = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0
    };
  for (let g = 0; g < 9; g++) s.probe.push(new X());
  const a = new X(),
    u = new Gt(),
    c = new Gt();
  function h(g, _) {
    let v = 0,
      y = 0,
      T = 0;
    for (let pe = 0; pe < 9; pe++) s.probe[pe].set(0, 0, 0);
    let b = 0,
      S = 0,
      m = 0,
      O = 0,
      R = 0,
      D = 0,
      F = 0,
      k = 0,
      l = 0,
      le = 0;
    g.sort(ig);
    const w = _ === !0 ? Math.PI : 1;
    for (let pe = 0, ve = g.length; pe < ve; pe++) {
      const W = g[pe],
        ne = W.color,
        ie = W.intensity,
        ge = W.distance,
        oe = W.shadow && W.shadow.map ? W.shadow.map.texture : null;
      if (W.isAmbientLight) (v += ne.r * ie * w), (y += ne.g * ie * w), (T += ne.b * ie * w);
      else if (W.isLightProbe) for (let he = 0; he < 9; he++) s.probe[he].addScaledVector(W.sh.coefficients[he], ie);
      else if (W.isDirectionalLight) {
        const he = t.get(W);
        if ((he.color.copy(W.color).multiplyScalar(W.intensity * w), W.castShadow)) {
          const xe = W.shadow,
            de = n.get(W);
          (de.shadowBias = xe.bias),
            (de.shadowNormalBias = xe.normalBias),
            (de.shadowRadius = xe.radius),
            (de.shadowMapSize = xe.mapSize),
            (s.directionalShadow[b] = de),
            (s.directionalShadowMap[b] = oe),
            (s.directionalShadowMatrix[b] = W.shadow.matrix),
            D++;
        }
        (s.directional[b] = he), b++;
      } else if (W.isSpotLight) {
        const he = t.get(W);
        he.position.setFromMatrixPosition(W.matrixWorld),
          he.color.copy(ne).multiplyScalar(ie * w),
          (he.distance = ge),
          (he.coneCos = Math.cos(W.angle)),
          (he.penumbraCos = Math.cos(W.angle * (1 - W.penumbra))),
          (he.decay = W.decay),
          (s.spot[m] = he);
        const xe = W.shadow;
        if (
          (W.map && ((s.spotLightMap[l] = W.map), l++, xe.updateMatrices(W), W.castShadow && le++),
          (s.spotLightMatrix[m] = xe.matrix),
          W.castShadow)
        ) {
          const de = n.get(W);
          (de.shadowBias = xe.bias),
            (de.shadowNormalBias = xe.normalBias),
            (de.shadowRadius = xe.radius),
            (de.shadowMapSize = xe.mapSize),
            (s.spotShadow[m] = de),
            (s.spotShadowMap[m] = oe),
            k++;
        }
        m++;
      } else if (W.isRectAreaLight) {
        const he = t.get(W);
        he.color.copy(ne).multiplyScalar(ie),
          he.halfWidth.set(W.width * 0.5, 0, 0),
          he.halfHeight.set(0, W.height * 0.5, 0),
          (s.rectArea[O] = he),
          O++;
      } else if (W.isPointLight) {
        const he = t.get(W);
        if (
          (he.color.copy(W.color).multiplyScalar(W.intensity * w),
          (he.distance = W.distance),
          (he.decay = W.decay),
          W.castShadow)
        ) {
          const xe = W.shadow,
            de = n.get(W);
          (de.shadowBias = xe.bias),
            (de.shadowNormalBias = xe.normalBias),
            (de.shadowRadius = xe.radius),
            (de.shadowMapSize = xe.mapSize),
            (de.shadowCameraNear = xe.camera.near),
            (de.shadowCameraFar = xe.camera.far),
            (s.pointShadow[S] = de),
            (s.pointShadowMap[S] = oe),
            (s.pointShadowMatrix[S] = W.shadow.matrix),
            F++;
        }
        (s.point[S] = he), S++;
      } else if (W.isHemisphereLight) {
        const he = t.get(W);
        he.skyColor.copy(W.color).multiplyScalar(ie * w),
          he.groundColor.copy(W.groundColor).multiplyScalar(ie * w),
          (s.hemi[R] = he),
          R++;
      }
    }
    O > 0 &&
      (e.isWebGL2 || i.has('OES_texture_float_linear') === !0
        ? ((s.rectAreaLTC1 = Ce.LTC_FLOAT_1), (s.rectAreaLTC2 = Ce.LTC_FLOAT_2))
        : i.has('OES_texture_half_float_linear') === !0
        ? ((s.rectAreaLTC1 = Ce.LTC_HALF_1), (s.rectAreaLTC2 = Ce.LTC_HALF_2))
        : console.error('THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.')),
      (s.ambient[0] = v),
      (s.ambient[1] = y),
      (s.ambient[2] = T);
    const I = s.hash;
    (I.directionalLength !== b ||
      I.pointLength !== S ||
      I.spotLength !== m ||
      I.rectAreaLength !== O ||
      I.hemiLength !== R ||
      I.numDirectionalShadows !== D ||
      I.numPointShadows !== F ||
      I.numSpotShadows !== k ||
      I.numSpotMaps !== l) &&
      ((s.directional.length = b),
      (s.spot.length = m),
      (s.rectArea.length = O),
      (s.point.length = S),
      (s.hemi.length = R),
      (s.directionalShadow.length = D),
      (s.directionalShadowMap.length = D),
      (s.pointShadow.length = F),
      (s.pointShadowMap.length = F),
      (s.spotShadow.length = k),
      (s.spotShadowMap.length = k),
      (s.directionalShadowMatrix.length = D),
      (s.pointShadowMatrix.length = F),
      (s.spotLightMatrix.length = k + l - le),
      (s.spotLightMap.length = l),
      (s.numSpotLightShadowsWithMaps = le),
      (I.directionalLength = b),
      (I.pointLength = S),
      (I.spotLength = m),
      (I.rectAreaLength = O),
      (I.hemiLength = R),
      (I.numDirectionalShadows = D),
      (I.numPointShadows = F),
      (I.numSpotShadows = k),
      (I.numSpotMaps = l),
      (s.version = ng++));
  }
  function p(g, _) {
    let v = 0,
      y = 0,
      T = 0,
      b = 0,
      S = 0;
    const m = _.matrixWorldInverse;
    for (let O = 0, R = g.length; O < R; O++) {
      const D = g[O];
      if (D.isDirectionalLight) {
        const F = s.directional[v];
        F.direction.setFromMatrixPosition(D.matrixWorld),
          a.setFromMatrixPosition(D.target.matrixWorld),
          F.direction.sub(a),
          F.direction.transformDirection(m),
          v++;
      } else if (D.isSpotLight) {
        const F = s.spot[T];
        F.position.setFromMatrixPosition(D.matrixWorld),
          F.position.applyMatrix4(m),
          F.direction.setFromMatrixPosition(D.matrixWorld),
          a.setFromMatrixPosition(D.target.matrixWorld),
          F.direction.sub(a),
          F.direction.transformDirection(m),
          T++;
      } else if (D.isRectAreaLight) {
        const F = s.rectArea[b];
        F.position.setFromMatrixPosition(D.matrixWorld),
          F.position.applyMatrix4(m),
          c.identity(),
          u.copy(D.matrixWorld),
          u.premultiply(m),
          c.extractRotation(u),
          F.halfWidth.set(D.width * 0.5, 0, 0),
          F.halfHeight.set(0, D.height * 0.5, 0),
          F.halfWidth.applyMatrix4(c),
          F.halfHeight.applyMatrix4(c),
          b++;
      } else if (D.isPointLight) {
        const F = s.point[y];
        F.position.setFromMatrixPosition(D.matrixWorld), F.position.applyMatrix4(m), y++;
      } else if (D.isHemisphereLight) {
        const F = s.hemi[S];
        F.direction.setFromMatrixPosition(D.matrixWorld), F.direction.transformDirection(m), S++;
      }
    }
  }
  return { setup: h, setupView: p, state: s };
}
function bl(i, e) {
  const t = new rg(i, e),
    n = [],
    s = [];
  function a() {
    (n.length = 0), (s.length = 0);
  }
  function u(_) {
    n.push(_);
  }
  function c(_) {
    s.push(_);
  }
  function h(_) {
    t.setup(n, _);
  }
  function p(_) {
    t.setupView(n, _);
  }
  return {
    init: a,
    state: { lightsArray: n, shadowsArray: s, lights: t },
    setupLights: h,
    setupLightsView: p,
    pushLight: u,
    pushShadow: c
  };
}
function sg(i, e) {
  let t = new WeakMap();
  function n(a, u = 0) {
    const c = t.get(a);
    let h;
    return (
      c === void 0 ? ((h = new bl(i, e)), t.set(a, [h])) : u >= c.length ? ((h = new bl(i, e)), c.push(h)) : (h = c[u]),
      h
    );
  }
  function s() {
    t = new WeakMap();
  }
  return { get: n, dispose: s };
}
class ag extends _r {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = Fu),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class og extends _r {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = 'MeshDistanceMaterial'),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const lg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  cg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function ug(i, e, t) {
  let n = new fc();
  const s = new dt(),
    a = new dt(),
    u = new $t(),
    c = new ag({ depthPacking: Bu }),
    h = new og(),
    p = {},
    g = t.maxTextureSize,
    _ = { [mi]: an, [an]: mi, [Qn]: Qn },
    v = new Di({
      defines: { VSM_SAMPLES: 8 },
      uniforms: { shadow_pass: { value: null }, resolution: { value: new dt() }, radius: { value: 4 } },
      vertexShader: lg,
      fragmentShader: cg
    }),
    y = v.clone();
  y.defines.HORIZONTAL_PASS = 1;
  const T = new hn();
  T.setAttribute('position', new Bn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const b = new ti(T, v),
    S = this;
  (this.enabled = !1), (this.autoUpdate = !0), (this.needsUpdate = !1), (this.type = kl);
  let m = this.type;
  this.render = function (F, k, l) {
    if (S.enabled === !1 || (S.autoUpdate === !1 && S.needsUpdate === !1) || F.length === 0) return;
    const le = i.getRenderTarget(),
      w = i.getActiveCubeFace(),
      I = i.getActiveMipmapLevel(),
      pe = i.state;
    pe.setBlending(hi), pe.buffers.color.setClear(1, 1, 1, 1), pe.buffers.depth.setTest(!0), pe.setScissorTest(!1);
    const ve = m !== Jn && this.type === Jn,
      W = m === Jn && this.type !== Jn;
    for (let ne = 0, ie = F.length; ne < ie; ne++) {
      const ge = F[ne],
        oe = ge.shadow;
      if (oe === void 0) {
        console.warn('THREE.WebGLShadowMap:', ge, 'has no shadow.');
        continue;
      }
      if (oe.autoUpdate === !1 && oe.needsUpdate === !1) continue;
      s.copy(oe.mapSize);
      const he = oe.getFrameExtents();
      if (
        (s.multiply(he),
        a.copy(oe.mapSize),
        (s.x > g || s.y > g) &&
          (s.x > g && ((a.x = Math.floor(g / he.x)), (s.x = a.x * he.x), (oe.mapSize.x = a.x)),
          s.y > g && ((a.y = Math.floor(g / he.y)), (s.y = a.y * he.y), (oe.mapSize.y = a.y))),
        oe.map === null || ve === !0 || W === !0)
      ) {
        const de = this.type !== Jn ? { minFilter: Kt, magFilter: Kt } : {};
        oe.map !== null && oe.map.dispose(),
          (oe.map = new Li(s.x, s.y, de)),
          (oe.map.texture.name = ge.name + '.shadowMap'),
          oe.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(oe.map), i.clear();
      const xe = oe.getViewportCount();
      for (let de = 0; de < xe; de++) {
        const Q = oe.getViewport(de);
        u.set(a.x * Q.x, a.y * Q.y, a.x * Q.z, a.y * Q.w),
          pe.viewport(u),
          oe.updateMatrices(ge, de),
          (n = oe.getFrustum()),
          D(k, l, oe.camera, ge, this.type);
      }
      oe.isPointLightShadow !== !0 && this.type === Jn && O(oe, l), (oe.needsUpdate = !1);
    }
    (m = this.type), (S.needsUpdate = !1), i.setRenderTarget(le, w, I);
  };
  function O(F, k) {
    const l = e.update(b);
    v.defines.VSM_SAMPLES !== F.blurSamples &&
      ((v.defines.VSM_SAMPLES = F.blurSamples),
      (y.defines.VSM_SAMPLES = F.blurSamples),
      (v.needsUpdate = !0),
      (y.needsUpdate = !0)),
      F.mapPass === null && (F.mapPass = new Li(s.x, s.y)),
      (v.uniforms.shadow_pass.value = F.map.texture),
      (v.uniforms.resolution.value = F.mapSize),
      (v.uniforms.radius.value = F.radius),
      i.setRenderTarget(F.mapPass),
      i.clear(),
      i.renderBufferDirect(k, null, l, v, b, null),
      (y.uniforms.shadow_pass.value = F.mapPass.texture),
      (y.uniforms.resolution.value = F.mapSize),
      (y.uniforms.radius.value = F.radius),
      i.setRenderTarget(F.map),
      i.clear(),
      i.renderBufferDirect(k, null, l, y, b, null);
  }
  function R(F, k, l, le) {
    let w = null;
    const I = l.isPointLight === !0 ? F.customDistanceMaterial : F.customDepthMaterial;
    if (I !== void 0) w = I;
    else if (
      ((w = l.isPointLight === !0 ? h : c),
      (i.localClippingEnabled &&
        k.clipShadows === !0 &&
        Array.isArray(k.clippingPlanes) &&
        k.clippingPlanes.length !== 0) ||
        (k.displacementMap && k.displacementScale !== 0) ||
        (k.alphaMap && k.alphaTest > 0) ||
        (k.map && k.alphaTest > 0))
    ) {
      const pe = w.uuid,
        ve = k.uuid;
      let W = p[pe];
      W === void 0 && ((W = {}), (p[pe] = W));
      let ne = W[ve];
      ne === void 0 && ((ne = w.clone()), (W[ve] = ne)), (w = ne);
    }
    if (
      ((w.visible = k.visible),
      (w.wireframe = k.wireframe),
      le === Jn
        ? (w.side = k.shadowSide !== null ? k.shadowSide : k.side)
        : (w.side = k.shadowSide !== null ? k.shadowSide : _[k.side]),
      (w.alphaMap = k.alphaMap),
      (w.alphaTest = k.alphaTest),
      (w.map = k.map),
      (w.clipShadows = k.clipShadows),
      (w.clippingPlanes = k.clippingPlanes),
      (w.clipIntersection = k.clipIntersection),
      (w.displacementMap = k.displacementMap),
      (w.displacementScale = k.displacementScale),
      (w.displacementBias = k.displacementBias),
      (w.wireframeLinewidth = k.wireframeLinewidth),
      (w.linewidth = k.linewidth),
      l.isPointLight === !0 && w.isMeshDistanceMaterial === !0)
    ) {
      const pe = i.properties.get(w);
      pe.light = l;
    }
    return w;
  }
  function D(F, k, l, le, w) {
    if (F.visible === !1) return;
    if (
      F.layers.test(k.layers) &&
      (F.isMesh || F.isLine || F.isPoints) &&
      (F.castShadow || (F.receiveShadow && w === Jn)) &&
      (!F.frustumCulled || n.intersectsObject(F))
    ) {
      F.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse, F.matrixWorld);
      const ve = e.update(F),
        W = F.material;
      if (Array.isArray(W)) {
        const ne = ve.groups;
        for (let ie = 0, ge = ne.length; ie < ge; ie++) {
          const oe = ne[ie],
            he = W[oe.materialIndex];
          if (he && he.visible) {
            const xe = R(F, he, le, w);
            i.renderBufferDirect(l, null, ve, xe, F, oe);
          }
        }
      } else if (W.visible) {
        const ne = R(F, W, le, w);
        i.renderBufferDirect(l, null, ve, ne, F, null);
      }
    }
    const pe = F.children;
    for (let ve = 0, W = pe.length; ve < W; ve++) D(pe[ve], k, l, le, w);
  }
}
function fg(i, e, t) {
  const n = t.isWebGL2;
  function s() {
    let G = !1;
    const Re = new $t();
    let Z = null;
    const _e = new $t(0, 0, 0, 0);
    return {
      setMask: function (be) {
        Z !== be && !G && (i.colorMask(be, be, be, be), (Z = be));
      },
      setLocked: function (be) {
        G = be;
      },
      setClear: function (be, ot, st, at, qt) {
        qt === !0 && ((be *= at), (ot *= at), (st *= at)),
          Re.set(be, ot, st, at),
          _e.equals(Re) === !1 && (i.clearColor(be, ot, st, at), _e.copy(Re));
      },
      reset: function () {
        (G = !1), (Z = null), _e.set(-1, 0, 0, 0);
      }
    };
  }
  function a() {
    let G = !1,
      Re = null,
      Z = null,
      _e = null;
    return {
      setTest: function (be) {
        be ? Ze(i.DEPTH_TEST) : Ge(i.DEPTH_TEST);
      },
      setMask: function (be) {
        Re !== be && !G && (i.depthMask(be), (Re = be));
      },
      setFunc: function (be) {
        if (Z !== be) {
          switch (be) {
            case du:
              i.depthFunc(i.NEVER);
              break;
            case pu:
              i.depthFunc(i.ALWAYS);
              break;
            case mu:
              i.depthFunc(i.LESS);
              break;
            case wa:
              i.depthFunc(i.LEQUAL);
              break;
            case gu:
              i.depthFunc(i.EQUAL);
              break;
            case _u:
              i.depthFunc(i.GEQUAL);
              break;
            case vu:
              i.depthFunc(i.GREATER);
              break;
            case xu:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Z = be;
        }
      },
      setLocked: function (be) {
        G = be;
      },
      setClear: function (be) {
        _e !== be && (i.clearDepth(be), (_e = be));
      },
      reset: function () {
        (G = !1), (Re = null), (Z = null), (_e = null);
      }
    };
  }
  function u() {
    let G = !1,
      Re = null,
      Z = null,
      _e = null,
      be = null,
      ot = null,
      st = null,
      at = null,
      qt = null;
    return {
      setTest: function (At) {
        G || (At ? Ze(i.STENCIL_TEST) : Ge(i.STENCIL_TEST));
      },
      setMask: function (At) {
        Re !== At && !G && (i.stencilMask(At), (Re = At));
      },
      setFunc: function (At, dn, Wt) {
        (Z !== At || _e !== dn || be !== Wt) && (i.stencilFunc(At, dn, Wt), (Z = At), (_e = dn), (be = Wt));
      },
      setOp: function (At, dn, Wt) {
        (ot !== At || st !== dn || at !== Wt) && (i.stencilOp(At, dn, Wt), (ot = At), (st = dn), (at = Wt));
      },
      setLocked: function (At) {
        G = At;
      },
      setClear: function (At) {
        qt !== At && (i.clearStencil(At), (qt = At));
      },
      reset: function () {
        (G = !1), (Re = null), (Z = null), (_e = null), (be = null), (ot = null), (st = null), (at = null), (qt = null);
      }
    };
  }
  const c = new s(),
    h = new a(),
    p = new u(),
    g = new WeakMap(),
    _ = new WeakMap();
  let v = {},
    y = {},
    T = new WeakMap(),
    b = [],
    S = null,
    m = !1,
    O = null,
    R = null,
    D = null,
    F = null,
    k = null,
    l = null,
    le = null,
    w = !1,
    I = null,
    pe = null,
    ve = null,
    W = null,
    ne = null;
  const ie = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ge = !1,
    oe = 0;
  const he = i.getParameter(i.VERSION);
  he.indexOf('WebGL') !== -1
    ? ((oe = parseFloat(/^WebGL (\d)/.exec(he)[1])), (ge = oe >= 1))
    : he.indexOf('OpenGL ES') !== -1 && ((oe = parseFloat(/^OpenGL ES (\d)/.exec(he)[1])), (ge = oe >= 2));
  let xe = null,
    de = {};
  const Q = i.getParameter(i.SCISSOR_BOX),
    se = i.getParameter(i.VIEWPORT),
    Le = new $t().fromArray(Q),
    De = new $t().fromArray(se);
  function Oe(G, Re, Z, _e) {
    const be = new Uint8Array(4),
      ot = i.createTexture();
    i.bindTexture(G, ot),
      i.texParameteri(G, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(G, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let st = 0; st < Z; st++)
      n && (G === i.TEXTURE_3D || G === i.TEXTURE_2D_ARRAY)
        ? i.texImage3D(Re, 0, i.RGBA, 1, 1, _e, 0, i.RGBA, i.UNSIGNED_BYTE, be)
        : i.texImage2D(Re + st, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, be);
    return ot;
  }
  const Ve = {};
  (Ve[i.TEXTURE_2D] = Oe(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (Ve[i.TEXTURE_CUBE_MAP] = Oe(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6)),
    n &&
      ((Ve[i.TEXTURE_2D_ARRAY] = Oe(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
      (Ve[i.TEXTURE_3D] = Oe(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1))),
    c.setClear(0, 0, 0, 1),
    h.setClear(1),
    p.setClear(0),
    Ze(i.DEPTH_TEST),
    h.setFunc(wa),
    We(!1),
    St(co),
    Ze(i.CULL_FACE),
    ze(hi);
  function Ze(G) {
    v[G] !== !0 && (i.enable(G), (v[G] = !0));
  }
  function Ge(G) {
    v[G] !== !1 && (i.disable(G), (v[G] = !1));
  }
  function gt(G, Re) {
    return y[G] !== Re
      ? (i.bindFramebuffer(G, Re),
        (y[G] = Re),
        n && (G === i.DRAW_FRAMEBUFFER && (y[i.FRAMEBUFFER] = Re), G === i.FRAMEBUFFER && (y[i.DRAW_FRAMEBUFFER] = Re)),
        !0)
      : !1;
  }
  function Tt(G, Re) {
    let Z = b,
      _e = !1;
    if (G)
      if (((Z = T.get(Re)), Z === void 0 && ((Z = []), T.set(Re, Z)), G.isWebGLMultipleRenderTargets)) {
        const be = G.texture;
        if (Z.length !== be.length || Z[0] !== i.COLOR_ATTACHMENT0) {
          for (let ot = 0, st = be.length; ot < st; ot++) Z[ot] = i.COLOR_ATTACHMENT0 + ot;
          (Z.length = be.length), (_e = !0);
        }
      } else Z[0] !== i.COLOR_ATTACHMENT0 && ((Z[0] = i.COLOR_ATTACHMENT0), (_e = !0));
    else Z[0] !== i.BACK && ((Z[0] = i.BACK), (_e = !0));
    _e && (t.isWebGL2 ? i.drawBuffers(Z) : e.get('WEBGL_draw_buffers').drawBuffersWEBGL(Z));
  }
  function rt(G) {
    return S !== G ? (i.useProgram(G), (S = G), !0) : !1;
  }
  const q = { [ar]: i.FUNC_ADD, [nu]: i.FUNC_SUBTRACT, [iu]: i.FUNC_REVERSE_SUBTRACT };
  if (n) (q[ho] = i.MIN), (q[po] = i.MAX);
  else {
    const G = e.get('EXT_blend_minmax');
    G !== null && ((q[ho] = G.MIN_EXT), (q[po] = G.MAX_EXT));
  }
  const Ct = {
    [ru]: i.ZERO,
    [su]: i.ONE,
    [au]: i.SRC_COLOR,
    [Vl]: i.SRC_ALPHA,
    [hu]: i.SRC_ALPHA_SATURATE,
    [uu]: i.DST_COLOR,
    [lu]: i.DST_ALPHA,
    [ou]: i.ONE_MINUS_SRC_COLOR,
    [Wl]: i.ONE_MINUS_SRC_ALPHA,
    [fu]: i.ONE_MINUS_DST_COLOR,
    [cu]: i.ONE_MINUS_DST_ALPHA
  };
  function ze(G, Re, Z, _e, be, ot, st, at) {
    if (G === hi) {
      m === !0 && (Ge(i.BLEND), (m = !1));
      return;
    }
    if ((m === !1 && (Ze(i.BLEND), (m = !0)), G !== tu)) {
      if (G !== O || at !== w) {
        if (((R !== ar || k !== ar) && (i.blendEquation(i.FUNC_ADD), (R = ar), (k = ar)), at))
          switch (G) {
            case cr:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case As:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case uo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case fo:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', G);
              break;
          }
        else
          switch (G) {
            case cr:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case As:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case uo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case fo:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', G);
              break;
          }
        (D = null), (F = null), (l = null), (le = null), (O = G), (w = at);
      }
      return;
    }
    (be = be || Re),
      (ot = ot || Z),
      (st = st || _e),
      (Re !== R || be !== k) && (i.blendEquationSeparate(q[Re], q[be]), (R = Re), (k = be)),
      (Z !== D || _e !== F || ot !== l || st !== le) &&
        (i.blendFuncSeparate(Ct[Z], Ct[_e], Ct[ot], Ct[st]), (D = Z), (F = _e), (l = ot), (le = st)),
      (O = G),
      (w = !1);
  }
  function Qe(G, Re) {
    G.side === Qn ? Ge(i.CULL_FACE) : Ze(i.CULL_FACE);
    let Z = G.side === an;
    Re && (Z = !Z),
      We(Z),
      G.blending === cr && G.transparent === !1
        ? ze(hi)
        : ze(
            G.blending,
            G.blendEquation,
            G.blendSrc,
            G.blendDst,
            G.blendEquationAlpha,
            G.blendSrcAlpha,
            G.blendDstAlpha,
            G.premultipliedAlpha
          ),
      h.setFunc(G.depthFunc),
      h.setTest(G.depthTest),
      h.setMask(G.depthWrite),
      c.setMask(G.colorWrite);
    const _e = G.stencilWrite;
    p.setTest(_e),
      _e &&
        (p.setMask(G.stencilWriteMask),
        p.setFunc(G.stencilFunc, G.stencilRef, G.stencilFuncMask),
        p.setOp(G.stencilFail, G.stencilZFail, G.stencilZPass)),
      tt(G.polygonOffset, G.polygonOffsetFactor, G.polygonOffsetUnits),
      G.alphaToCoverage === !0 ? Ze(i.SAMPLE_ALPHA_TO_COVERAGE) : Ge(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function We(G) {
    I !== G && (G ? i.frontFace(i.CW) : i.frontFace(i.CCW), (I = G));
  }
  function St(G) {
    G !== Jc
      ? (Ze(i.CULL_FACE),
        G !== pe && (G === co ? i.cullFace(i.BACK) : G === Qc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK)))
      : Ge(i.CULL_FACE),
      (pe = G);
  }
  function je(G) {
    G !== ve && (ge && i.lineWidth(G), (ve = G));
  }
  function tt(G, Re, Z) {
    G
      ? (Ze(i.POLYGON_OFFSET_FILL), (W !== Re || ne !== Z) && (i.polygonOffset(Re, Z), (W = Re), (ne = Z)))
      : Ge(i.POLYGON_OFFSET_FILL);
  }
  function vt(G) {
    G ? Ze(i.SCISSOR_TEST) : Ge(i.SCISSOR_TEST);
  }
  function Nt(G) {
    G === void 0 && (G = i.TEXTURE0 + ie - 1), xe !== G && (i.activeTexture(G), (xe = G));
  }
  function yt(G, Re, Z) {
    Z === void 0 && (xe === null ? (Z = i.TEXTURE0 + ie - 1) : (Z = xe));
    let _e = de[Z];
    _e === void 0 && ((_e = { type: void 0, texture: void 0 }), (de[Z] = _e)),
      (_e.type !== G || _e.texture !== Re) &&
        (xe !== Z && (i.activeTexture(Z), (xe = Z)), i.bindTexture(G, Re || Ve[G]), (_e.type = G), (_e.texture = Re));
  }
  function P() {
    const G = de[xe];
    G !== void 0 && G.type !== void 0 && (i.bindTexture(G.type, null), (G.type = void 0), (G.texture = void 0));
  }
  function A() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function me() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function Me() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function ye() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function Be() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function Ee() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function ee() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function B() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function fe() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (G) {
      console.error('THREE.WebGLState:', G);
    }
  }
  function we(G) {
    Le.equals(G) === !1 && (i.scissor(G.x, G.y, G.z, G.w), Le.copy(G));
  }
  function Te(G) {
    De.equals(G) === !1 && (i.viewport(G.x, G.y, G.z, G.w), De.copy(G));
  }
  function Pe(G, Re) {
    let Z = _.get(Re);
    Z === void 0 && ((Z = new WeakMap()), _.set(Re, Z));
    let _e = Z.get(G);
    _e === void 0 && ((_e = i.getUniformBlockIndex(Re, G.name)), Z.set(G, _e));
  }
  function Xe(G, Re) {
    const _e = _.get(Re).get(G);
    g.get(Re) !== _e && (i.uniformBlockBinding(Re, _e, G.__bindingPointIndex), g.set(Re, _e));
  }
  function ut() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (v = {}),
      (xe = null),
      (de = {}),
      (y = {}),
      (T = new WeakMap()),
      (b = []),
      (S = null),
      (m = !1),
      (O = null),
      (R = null),
      (D = null),
      (F = null),
      (k = null),
      (l = null),
      (le = null),
      (w = !1),
      (I = null),
      (pe = null),
      (ve = null),
      (W = null),
      (ne = null),
      Le.set(0, 0, i.canvas.width, i.canvas.height),
      De.set(0, 0, i.canvas.width, i.canvas.height),
      c.reset(),
      h.reset(),
      p.reset();
  }
  return {
    buffers: { color: c, depth: h, stencil: p },
    enable: Ze,
    disable: Ge,
    bindFramebuffer: gt,
    drawBuffers: Tt,
    useProgram: rt,
    setBlending: ze,
    setMaterial: Qe,
    setFlipSided: We,
    setCullFace: St,
    setLineWidth: je,
    setPolygonOffset: tt,
    setScissorTest: vt,
    activeTexture: Nt,
    bindTexture: yt,
    unbindTexture: P,
    compressedTexImage2D: A,
    compressedTexImage3D: z,
    texImage2D: B,
    texImage3D: fe,
    updateUBOMapping: Pe,
    uniformBlockBinding: Xe,
    texStorage2D: Ee,
    texStorage3D: ee,
    texSubImage2D: me,
    texSubImage3D: Me,
    compressedTexSubImage2D: ye,
    compressedTexSubImage3D: Be,
    scissor: we,
    viewport: Te,
    reset: ut
  };
}
function hg(i, e, t, n, s, a, u) {
  const c = s.isWebGL2,
    h = s.maxTextures,
    p = s.maxCubemapSize,
    g = s.maxTextureSize,
    _ = s.maxSamples,
    v = e.has('WEBGL_multisampled_render_to_texture') ? e.get('WEBGL_multisampled_render_to_texture') : null,
    y = typeof navigator > 'u' ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    T = new WeakMap();
  let b;
  const S = new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < 'u' && new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function O(P, A) {
    return m ? new OffscreenCanvas(P, A) : Gr('canvas');
  }
  function R(P, A, z, me) {
    let Me = 1;
    if (((P.width > me || P.height > me) && (Me = me / Math.max(P.width, P.height)), Me < 1 || A === !0))
      if (
        (typeof HTMLImageElement < 'u' && P instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && P instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && P instanceof ImageBitmap)
      ) {
        const ye = A ? Rs : Math.floor,
          Be = ye(Me * P.width),
          Ee = ye(Me * P.height);
        b === void 0 && (b = O(Be, Ee));
        const ee = z ? O(Be, Ee) : b;
        return (
          (ee.width = Be),
          (ee.height = Ee),
          ee.getContext('2d').drawImage(P, 0, 0, Be, Ee),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              P.width +
              'x' +
              P.height +
              ') to (' +
              Be +
              'x' +
              Ee +
              ').'
          ),
          ee
        );
      } else
        return (
          'data' in P &&
            console.warn('THREE.WebGLRenderer: Image in DataTexture is too big (' + P.width + 'x' + P.height + ').'),
          P
        );
    return P;
  }
  function D(P) {
    return Ua(P.width) && Ua(P.height);
  }
  function F(P) {
    return c ? !1 : P.wrapS !== Cn || P.wrapT !== Cn || (P.minFilter !== Kt && P.minFilter !== un);
  }
  function k(P, A) {
    return P.generateMipmaps && A && P.minFilter !== Kt && P.minFilter !== un;
  }
  function l(P) {
    i.generateMipmap(P);
  }
  function le(P, A, z, me, Me = !1) {
    if (c === !1) return A;
    if (P !== null) {
      if (i[P] !== void 0) return i[P];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + P + "'");
    }
    let ye = A;
    return (
      A === i.RED &&
        (z === i.FLOAT && (ye = i.R32F), z === i.HALF_FLOAT && (ye = i.R16F), z === i.UNSIGNED_BYTE && (ye = i.R8)),
      A === i.RED_INTEGER &&
        (z === i.UNSIGNED_BYTE && (ye = i.R8UI),
        z === i.UNSIGNED_SHORT && (ye = i.R16UI),
        z === i.UNSIGNED_INT && (ye = i.R32UI),
        z === i.BYTE && (ye = i.R8I),
        z === i.SHORT && (ye = i.R16I),
        z === i.INT && (ye = i.R32I)),
      A === i.RG &&
        (z === i.FLOAT && (ye = i.RG32F), z === i.HALF_FLOAT && (ye = i.RG16F), z === i.UNSIGNED_BYTE && (ye = i.RG8)),
      A === i.RGBA &&
        (z === i.FLOAT && (ye = i.RGBA32F),
        z === i.HALF_FLOAT && (ye = i.RGBA16F),
        z === i.UNSIGNED_BYTE && (ye = me === Pt && Me === !1 ? i.SRGB8_ALPHA8 : i.RGBA8),
        z === i.UNSIGNED_SHORT_4_4_4_4 && (ye = i.RGBA4),
        z === i.UNSIGNED_SHORT_5_5_5_1 && (ye = i.RGB5_A1)),
      (ye === i.R16F || ye === i.R32F || ye === i.RG16F || ye === i.RG32F || ye === i.RGBA16F || ye === i.RGBA32F) &&
        e.get('EXT_color_buffer_float'),
      ye
    );
  }
  function w(P, A, z) {
    return k(P, z) === !0 || (P.isFramebufferTexture && P.minFilter !== Kt && P.minFilter !== un)
      ? Math.log2(Math.max(A.width, A.height)) + 1
      : P.mipmaps !== void 0 && P.mipmaps.length > 0
      ? P.mipmaps.length
      : P.isCompressedTexture && Array.isArray(P.image)
      ? A.mipmaps.length
      : 1;
  }
  function I(P) {
    return P === Kt || P === mo || P === Zs ? i.NEAREST : i.LINEAR;
  }
  function pe(P) {
    const A = P.target;
    A.removeEventListener('dispose', pe), W(A), A.isVideoTexture && T.delete(A);
  }
  function ve(P) {
    const A = P.target;
    A.removeEventListener('dispose', ve), ie(A);
  }
  function W(P) {
    const A = n.get(P);
    if (A.__webglInit === void 0) return;
    const z = P.source,
      me = S.get(z);
    if (me) {
      const Me = me[A.__cacheKey];
      Me.usedTimes--, Me.usedTimes === 0 && ne(P), Object.keys(me).length === 0 && S.delete(z);
    }
    n.remove(P);
  }
  function ne(P) {
    const A = n.get(P);
    i.deleteTexture(A.__webglTexture);
    const z = P.source,
      me = S.get(z);
    delete me[A.__cacheKey], u.memory.textures--;
  }
  function ie(P) {
    const A = P.texture,
      z = n.get(P),
      me = n.get(A);
    if (
      (me.__webglTexture !== void 0 && (i.deleteTexture(me.__webglTexture), u.memory.textures--),
      P.depthTexture && P.depthTexture.dispose(),
      P.isWebGLCubeRenderTarget)
    )
      for (let Me = 0; Me < 6; Me++) {
        if (Array.isArray(z.__webglFramebuffer[Me]))
          for (let ye = 0; ye < z.__webglFramebuffer[Me].length; ye++)
            i.deleteFramebuffer(z.__webglFramebuffer[Me][ye]);
        else i.deleteFramebuffer(z.__webglFramebuffer[Me]);
        z.__webglDepthbuffer && i.deleteRenderbuffer(z.__webglDepthbuffer[Me]);
      }
    else {
      if (Array.isArray(z.__webglFramebuffer))
        for (let Me = 0; Me < z.__webglFramebuffer.length; Me++) i.deleteFramebuffer(z.__webglFramebuffer[Me]);
      else i.deleteFramebuffer(z.__webglFramebuffer);
      if (
        (z.__webglDepthbuffer && i.deleteRenderbuffer(z.__webglDepthbuffer),
        z.__webglMultisampledFramebuffer && i.deleteFramebuffer(z.__webglMultisampledFramebuffer),
        z.__webglColorRenderbuffer)
      )
        for (let Me = 0; Me < z.__webglColorRenderbuffer.length; Me++)
          z.__webglColorRenderbuffer[Me] && i.deleteRenderbuffer(z.__webglColorRenderbuffer[Me]);
      z.__webglDepthRenderbuffer && i.deleteRenderbuffer(z.__webglDepthRenderbuffer);
    }
    if (P.isWebGLMultipleRenderTargets)
      for (let Me = 0, ye = A.length; Me < ye; Me++) {
        const Be = n.get(A[Me]);
        Be.__webglTexture && (i.deleteTexture(Be.__webglTexture), u.memory.textures--), n.remove(A[Me]);
      }
    n.remove(A), n.remove(P);
  }
  let ge = 0;
  function oe() {
    ge = 0;
  }
  function he() {
    const P = ge;
    return (
      P >= h &&
        console.warn('THREE.WebGLTextures: Trying to use ' + P + ' texture units while this GPU supports only ' + h),
      (ge += 1),
      P
    );
  }
  function xe(P) {
    const A = [];
    return (
      A.push(P.wrapS),
      A.push(P.wrapT),
      A.push(P.wrapR || 0),
      A.push(P.magFilter),
      A.push(P.minFilter),
      A.push(P.anisotropy),
      A.push(P.internalFormat),
      A.push(P.format),
      A.push(P.type),
      A.push(P.generateMipmaps),
      A.push(P.premultiplyAlpha),
      A.push(P.flipY),
      A.push(P.unpackAlignment),
      A.push(P.colorSpace),
      A.join()
    );
  }
  function de(P, A) {
    const z = n.get(P);
    if ((P.isVideoTexture && Nt(P), P.isRenderTargetTexture === !1 && P.version > 0 && z.__version !== P.version)) {
      const me = P.image;
      if (me === null) console.warn('THREE.WebGLRenderer: Texture marked for update but no image data found.');
      else if (me.complete === !1)
        console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');
      else {
        gt(z, P, A);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, z.__webglTexture, i.TEXTURE0 + A);
  }
  function Q(P, A) {
    const z = n.get(P);
    if (P.version > 0 && z.__version !== P.version) {
      gt(z, P, A);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, z.__webglTexture, i.TEXTURE0 + A);
  }
  function se(P, A) {
    const z = n.get(P);
    if (P.version > 0 && z.__version !== P.version) {
      gt(z, P, A);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, z.__webglTexture, i.TEXTURE0 + A);
  }
  function Le(P, A) {
    const z = n.get(P);
    if (P.version > 0 && z.__version !== P.version) {
      Tt(z, P, A);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture, i.TEXTURE0 + A);
  }
  const De = { [La]: i.REPEAT, [Cn]: i.CLAMP_TO_EDGE, [Pa]: i.MIRRORED_REPEAT },
    Oe = {
      [Kt]: i.NEAREST,
      [mo]: i.NEAREST_MIPMAP_NEAREST,
      [Zs]: i.NEAREST_MIPMAP_LINEAR,
      [un]: i.LINEAR,
      [wu]: i.LINEAR_MIPMAP_NEAREST,
      [Br]: i.LINEAR_MIPMAP_LINEAR
    },
    Ve = {
      [ku]: i.NEVER,
      [Ku]: i.ALWAYS,
      [Vu]: i.LESS,
      [Xu]: i.LEQUAL,
      [Wu]: i.EQUAL,
      [Yu]: i.GEQUAL,
      [qu]: i.GREATER,
      [ju]: i.NOTEQUAL
    };
  function Ze(P, A, z) {
    if (
      (z
        ? (i.texParameteri(P, i.TEXTURE_WRAP_S, De[A.wrapS]),
          i.texParameteri(P, i.TEXTURE_WRAP_T, De[A.wrapT]),
          (P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY) && i.texParameteri(P, i.TEXTURE_WRAP_R, De[A.wrapR]),
          i.texParameteri(P, i.TEXTURE_MAG_FILTER, Oe[A.magFilter]),
          i.texParameteri(P, i.TEXTURE_MIN_FILTER, Oe[A.minFilter]))
        : (i.texParameteri(P, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
          i.texParameteri(P, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
          (P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY) && i.texParameteri(P, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE),
          (A.wrapS !== Cn || A.wrapT !== Cn) &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'
            ),
          i.texParameteri(P, i.TEXTURE_MAG_FILTER, I(A.magFilter)),
          i.texParameteri(P, i.TEXTURE_MIN_FILTER, I(A.minFilter)),
          A.minFilter !== Kt &&
            A.minFilter !== un &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
            )),
      A.compareFunction &&
        (i.texParameteri(P, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(P, i.TEXTURE_COMPARE_FUNC, Ve[A.compareFunction])),
      e.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      const me = e.get('EXT_texture_filter_anisotropic');
      if (
        A.magFilter === Kt ||
        (A.minFilter !== Zs && A.minFilter !== Br) ||
        (A.type === fi && e.has('OES_texture_float_linear') === !1) ||
        (c === !1 && A.type === Hr && e.has('OES_texture_half_float_linear') === !1)
      )
        return;
      (A.anisotropy > 1 || n.get(A).__currentAnisotropy) &&
        (i.texParameterf(P, me.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(A.anisotropy, s.getMaxAnisotropy())),
        (n.get(A).__currentAnisotropy = A.anisotropy));
    }
  }
  function Ge(P, A) {
    let z = !1;
    P.__webglInit === void 0 && ((P.__webglInit = !0), A.addEventListener('dispose', pe));
    const me = A.source;
    let Me = S.get(me);
    Me === void 0 && ((Me = {}), S.set(me, Me));
    const ye = xe(A);
    if (ye !== P.__cacheKey) {
      Me[ye] === void 0 && ((Me[ye] = { texture: i.createTexture(), usedTimes: 0 }), u.memory.textures++, (z = !0)),
        Me[ye].usedTimes++;
      const Be = Me[P.__cacheKey];
      Be !== void 0 && (Me[P.__cacheKey].usedTimes--, Be.usedTimes === 0 && ne(A)),
        (P.__cacheKey = ye),
        (P.__webglTexture = Me[ye].texture);
    }
    return z;
  }
  function gt(P, A, z) {
    let me = i.TEXTURE_2D;
    (A.isDataArrayTexture || A.isCompressedArrayTexture) && (me = i.TEXTURE_2D_ARRAY),
      A.isData3DTexture && (me = i.TEXTURE_3D);
    const Me = Ge(P, A),
      ye = A.source;
    t.bindTexture(me, P.__webglTexture, i.TEXTURE0 + z);
    const Be = n.get(ye);
    if (ye.version !== Be.__version || Me === !0) {
      t.activeTexture(i.TEXTURE0 + z),
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, A.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, A.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const Ee = F(A) && D(A.image) === !1;
      let ee = R(A.image, Ee, !1, g);
      ee = yt(A, ee);
      const B = D(ee) || c,
        fe = a.convert(A.format, A.colorSpace);
      let we = a.convert(A.type),
        Te = le(A.internalFormat, fe, we, A.colorSpace, A.isVideoTexture);
      Ze(me, A, B);
      let Pe;
      const Xe = A.mipmaps,
        ut = c && A.isVideoTexture !== !0,
        G = Be.__version === void 0 || Me === !0,
        Re = w(A, ee, B);
      if (A.isDepthTexture)
        (Te = i.DEPTH_COMPONENT),
          c
            ? A.type === fi
              ? (Te = i.DEPTH_COMPONENT32F)
              : A.type === ui
              ? (Te = i.DEPTH_COMPONENT24)
              : A.type === Ai
              ? (Te = i.DEPTH24_STENCIL8)
              : (Te = i.DEPTH_COMPONENT16)
            : A.type === fi && console.error('WebGLRenderer: Floating point depth texture requires WebGL2.'),
          A.format === wi &&
            Te === i.DEPTH_COMPONENT &&
            A.type !== Ga &&
            A.type !== ui &&
            (console.warn(
              'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
            ),
            (A.type = ui),
            (we = a.convert(A.type))),
          A.format === pr &&
            Te === i.DEPTH_COMPONENT &&
            ((Te = i.DEPTH_STENCIL),
            A.type !== Ai &&
              (console.warn('THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'),
              (A.type = Ai),
              (we = a.convert(A.type)))),
          G &&
            (ut
              ? t.texStorage2D(i.TEXTURE_2D, 1, Te, ee.width, ee.height)
              : t.texImage2D(i.TEXTURE_2D, 0, Te, ee.width, ee.height, 0, fe, we, null));
      else if (A.isDataTexture)
        if (Xe.length > 0 && B) {
          ut && G && t.texStorage2D(i.TEXTURE_2D, Re, Te, Xe[0].width, Xe[0].height);
          for (let Z = 0, _e = Xe.length; Z < _e; Z++)
            (Pe = Xe[Z]),
              ut
                ? t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, Pe.width, Pe.height, fe, we, Pe.data)
                : t.texImage2D(i.TEXTURE_2D, Z, Te, Pe.width, Pe.height, 0, fe, we, Pe.data);
          A.generateMipmaps = !1;
        } else
          ut
            ? (G && t.texStorage2D(i.TEXTURE_2D, Re, Te, ee.width, ee.height),
              t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ee.width, ee.height, fe, we, ee.data))
            : t.texImage2D(i.TEXTURE_2D, 0, Te, ee.width, ee.height, 0, fe, we, ee.data);
      else if (A.isCompressedTexture)
        if (A.isCompressedArrayTexture) {
          ut && G && t.texStorage3D(i.TEXTURE_2D_ARRAY, Re, Te, Xe[0].width, Xe[0].height, ee.depth);
          for (let Z = 0, _e = Xe.length; Z < _e; Z++)
            (Pe = Xe[Z]),
              A.format !== Ln
                ? fe !== null
                  ? ut
                    ? t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        Z,
                        0,
                        0,
                        0,
                        Pe.width,
                        Pe.height,
                        ee.depth,
                        fe,
                        Pe.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Z, Te, Pe.width, Pe.height, ee.depth, 0, Pe.data, 0, 0)
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                    )
                : ut
                ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, 0, Pe.width, Pe.height, ee.depth, fe, we, Pe.data)
                : t.texImage3D(i.TEXTURE_2D_ARRAY, Z, Te, Pe.width, Pe.height, ee.depth, 0, fe, we, Pe.data);
        } else {
          ut && G && t.texStorage2D(i.TEXTURE_2D, Re, Te, Xe[0].width, Xe[0].height);
          for (let Z = 0, _e = Xe.length; Z < _e; Z++)
            (Pe = Xe[Z]),
              A.format !== Ln
                ? fe !== null
                  ? ut
                    ? t.compressedTexSubImage2D(i.TEXTURE_2D, Z, 0, 0, Pe.width, Pe.height, fe, Pe.data)
                    : t.compressedTexImage2D(i.TEXTURE_2D, Z, Te, Pe.width, Pe.height, 0, Pe.data)
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                    )
                : ut
                ? t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, Pe.width, Pe.height, fe, we, Pe.data)
                : t.texImage2D(i.TEXTURE_2D, Z, Te, Pe.width, Pe.height, 0, fe, we, Pe.data);
        }
      else if (A.isDataArrayTexture)
        ut
          ? (G && t.texStorage3D(i.TEXTURE_2D_ARRAY, Re, Te, ee.width, ee.height, ee.depth),
            t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ee.width, ee.height, ee.depth, fe, we, ee.data))
          : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Te, ee.width, ee.height, ee.depth, 0, fe, we, ee.data);
      else if (A.isData3DTexture)
        ut
          ? (G && t.texStorage3D(i.TEXTURE_3D, Re, Te, ee.width, ee.height, ee.depth),
            t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, ee.width, ee.height, ee.depth, fe, we, ee.data))
          : t.texImage3D(i.TEXTURE_3D, 0, Te, ee.width, ee.height, ee.depth, 0, fe, we, ee.data);
      else if (A.isFramebufferTexture) {
        if (G)
          if (ut) t.texStorage2D(i.TEXTURE_2D, Re, Te, ee.width, ee.height);
          else {
            let Z = ee.width,
              _e = ee.height;
            for (let be = 0; be < Re; be++)
              t.texImage2D(i.TEXTURE_2D, be, Te, Z, _e, 0, fe, we, null), (Z >>= 1), (_e >>= 1);
          }
      } else if (Xe.length > 0 && B) {
        ut && G && t.texStorage2D(i.TEXTURE_2D, Re, Te, Xe[0].width, Xe[0].height);
        for (let Z = 0, _e = Xe.length; Z < _e; Z++)
          (Pe = Xe[Z]),
            ut ? t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, fe, we, Pe) : t.texImage2D(i.TEXTURE_2D, Z, Te, fe, we, Pe);
        A.generateMipmaps = !1;
      } else
        ut
          ? (G && t.texStorage2D(i.TEXTURE_2D, Re, Te, ee.width, ee.height),
            t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, fe, we, ee))
          : t.texImage2D(i.TEXTURE_2D, 0, Te, fe, we, ee);
      k(A, B) && l(me), (Be.__version = ye.version), A.onUpdate && A.onUpdate(A);
    }
    P.__version = A.version;
  }
  function Tt(P, A, z) {
    if (A.image.length !== 6) return;
    const me = Ge(P, A),
      Me = A.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, P.__webglTexture, i.TEXTURE0 + z);
    const ye = n.get(Me);
    if (Me.version !== ye.__version || me === !0) {
      t.activeTexture(i.TEXTURE0 + z),
        i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, A.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, A.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const Be = A.isCompressedTexture || A.image[0].isCompressedTexture,
        Ee = A.image[0] && A.image[0].isDataTexture,
        ee = [];
      for (let Z = 0; Z < 6; Z++)
        !Be && !Ee ? (ee[Z] = R(A.image[Z], !1, !0, p)) : (ee[Z] = Ee ? A.image[Z].image : A.image[Z]),
          (ee[Z] = yt(A, ee[Z]));
      const B = ee[0],
        fe = D(B) || c,
        we = a.convert(A.format, A.colorSpace),
        Te = a.convert(A.type),
        Pe = le(A.internalFormat, we, Te, A.colorSpace),
        Xe = c && A.isVideoTexture !== !0,
        ut = ye.__version === void 0 || me === !0;
      let G = w(A, B, fe);
      Ze(i.TEXTURE_CUBE_MAP, A, fe);
      let Re;
      if (Be) {
        Xe && ut && t.texStorage2D(i.TEXTURE_CUBE_MAP, G, Pe, B.width, B.height);
        for (let Z = 0; Z < 6; Z++) {
          Re = ee[Z].mipmaps;
          for (let _e = 0; _e < Re.length; _e++) {
            const be = Re[_e];
            A.format !== Ln
              ? we !== null
                ? Xe
                  ? t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                      _e,
                      0,
                      0,
                      be.width,
                      be.height,
                      we,
                      be.data
                    )
                  : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, _e, Pe, be.width, be.height, 0, be.data)
                : console.warn(
                    'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'
                  )
              : Xe
              ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, _e, 0, 0, be.width, be.height, we, Te, be.data)
              : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, _e, Pe, be.width, be.height, 0, we, Te, be.data);
          }
        }
      } else {
        (Re = A.mipmaps),
          Xe && ut && (Re.length > 0 && G++, t.texStorage2D(i.TEXTURE_CUBE_MAP, G, Pe, ee[0].width, ee[0].height));
        for (let Z = 0; Z < 6; Z++)
          if (Ee) {
            Xe
              ? t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  0,
                  0,
                  ee[Z].width,
                  ee[Z].height,
                  we,
                  Te,
                  ee[Z].data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  Pe,
                  ee[Z].width,
                  ee[Z].height,
                  0,
                  we,
                  Te,
                  ee[Z].data
                );
            for (let _e = 0; _e < Re.length; _e++) {
              const ot = Re[_e].image[Z].image;
              Xe
                ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, _e + 1, 0, 0, ot.width, ot.height, we, Te, ot.data)
                : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, _e + 1, Pe, ot.width, ot.height, 0, we, Te, ot.data);
            }
          } else {
            Xe
              ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, we, Te, ee[Z])
              : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Pe, we, Te, ee[Z]);
            for (let _e = 0; _e < Re.length; _e++) {
              const be = Re[_e];
              Xe
                ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, _e + 1, 0, 0, we, Te, be.image[Z])
                : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, _e + 1, Pe, we, Te, be.image[Z]);
            }
          }
      }
      k(A, fe) && l(i.TEXTURE_CUBE_MAP), (ye.__version = Me.version), A.onUpdate && A.onUpdate(A);
    }
    P.__version = A.version;
  }
  function rt(P, A, z, me, Me, ye) {
    const Be = a.convert(z.format, z.colorSpace),
      Ee = a.convert(z.type),
      ee = le(z.internalFormat, Be, Ee, z.colorSpace);
    if (!n.get(A).__hasExternalTextures) {
      const fe = Math.max(1, A.width >> ye),
        we = Math.max(1, A.height >> ye);
      Me === i.TEXTURE_3D || Me === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(Me, ye, ee, fe, we, A.depth, 0, Be, Ee, null)
        : t.texImage2D(Me, ye, ee, fe, we, 0, Be, Ee, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, P),
      vt(A)
        ? v.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, me, Me, n.get(z).__webglTexture, 0, tt(A))
        : (Me === i.TEXTURE_2D || (Me >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Me <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, me, Me, n.get(z).__webglTexture, ye),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function q(P, A, z) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, P), A.depthBuffer && !A.stencilBuffer)) {
      let me = i.DEPTH_COMPONENT16;
      if (z || vt(A)) {
        const Me = A.depthTexture;
        Me &&
          Me.isDepthTexture &&
          (Me.type === fi ? (me = i.DEPTH_COMPONENT32F) : Me.type === ui && (me = i.DEPTH_COMPONENT24));
        const ye = tt(A);
        vt(A)
          ? v.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ye, me, A.width, A.height)
          : i.renderbufferStorageMultisample(i.RENDERBUFFER, ye, me, A.width, A.height);
      } else i.renderbufferStorage(i.RENDERBUFFER, me, A.width, A.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, P);
    } else if (A.depthBuffer && A.stencilBuffer) {
      const me = tt(A);
      z && vt(A) === !1
        ? i.renderbufferStorageMultisample(i.RENDERBUFFER, me, i.DEPTH24_STENCIL8, A.width, A.height)
        : vt(A)
        ? v.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, me, i.DEPTH24_STENCIL8, A.width, A.height)
        : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, A.width, A.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, P);
    } else {
      const me = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture];
      for (let Me = 0; Me < me.length; Me++) {
        const ye = me[Me],
          Be = a.convert(ye.format, ye.colorSpace),
          Ee = a.convert(ye.type),
          ee = le(ye.internalFormat, Be, Ee, ye.colorSpace),
          B = tt(A);
        z && vt(A) === !1
          ? i.renderbufferStorageMultisample(i.RENDERBUFFER, B, ee, A.width, A.height)
          : vt(A)
          ? v.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, B, ee, A.width, A.height)
          : i.renderbufferStorage(i.RENDERBUFFER, ee, A.width, A.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ct(P, A) {
    if (A && A.isWebGLCubeRenderTarget) throw new Error('Depth Texture with cube render targets is not supported');
    if ((t.bindFramebuffer(i.FRAMEBUFFER, P), !(A.depthTexture && A.depthTexture.isDepthTexture)))
      throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');
    (!n.get(A.depthTexture).__webglTexture ||
      A.depthTexture.image.width !== A.width ||
      A.depthTexture.image.height !== A.height) &&
      ((A.depthTexture.image.width = A.width),
      (A.depthTexture.image.height = A.height),
      (A.depthTexture.needsUpdate = !0)),
      de(A.depthTexture, 0);
    const me = n.get(A.depthTexture).__webglTexture,
      Me = tt(A);
    if (A.depthTexture.format === wi)
      vt(A)
        ? v.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, me, 0, Me)
        : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, me, 0);
    else if (A.depthTexture.format === pr)
      vt(A)
        ? v.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, me, 0, Me)
        : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, me, 0);
    else throw new Error('Unknown depthTexture format');
  }
  function ze(P) {
    const A = n.get(P),
      z = P.isWebGLCubeRenderTarget === !0;
    if (P.depthTexture && !A.__autoAllocateDepthBuffer) {
      if (z) throw new Error('target.depthTexture not supported in Cube render targets');
      Ct(A.__webglFramebuffer, P);
    } else if (z) {
      A.__webglDepthbuffer = [];
      for (let me = 0; me < 6; me++)
        t.bindFramebuffer(i.FRAMEBUFFER, A.__webglFramebuffer[me]),
          (A.__webglDepthbuffer[me] = i.createRenderbuffer()),
          q(A.__webglDepthbuffer[me], P, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, A.__webglFramebuffer),
        (A.__webglDepthbuffer = i.createRenderbuffer()),
        q(A.__webglDepthbuffer, P, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Qe(P, A, z) {
    const me = n.get(P);
    A !== void 0 && rt(me.__webglFramebuffer, P, P.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0),
      z !== void 0 && ze(P);
  }
  function We(P) {
    const A = P.texture,
      z = n.get(P),
      me = n.get(A);
    P.addEventListener('dispose', ve),
      P.isWebGLMultipleRenderTargets !== !0 &&
        (me.__webglTexture === void 0 && (me.__webglTexture = i.createTexture()),
        (me.__version = A.version),
        u.memory.textures++);
    const Me = P.isWebGLCubeRenderTarget === !0,
      ye = P.isWebGLMultipleRenderTargets === !0,
      Be = D(P) || c;
    if (Me) {
      z.__webglFramebuffer = [];
      for (let Ee = 0; Ee < 6; Ee++)
        if (c && A.mipmaps && A.mipmaps.length > 0) {
          z.__webglFramebuffer[Ee] = [];
          for (let ee = 0; ee < A.mipmaps.length; ee++) z.__webglFramebuffer[Ee][ee] = i.createFramebuffer();
        } else z.__webglFramebuffer[Ee] = i.createFramebuffer();
    } else {
      if (c && A.mipmaps && A.mipmaps.length > 0) {
        z.__webglFramebuffer = [];
        for (let Ee = 0; Ee < A.mipmaps.length; Ee++) z.__webglFramebuffer[Ee] = i.createFramebuffer();
      } else z.__webglFramebuffer = i.createFramebuffer();
      if (ye)
        if (s.drawBuffers) {
          const Ee = P.texture;
          for (let ee = 0, B = Ee.length; ee < B; ee++) {
            const fe = n.get(Ee[ee]);
            fe.__webglTexture === void 0 && ((fe.__webglTexture = i.createTexture()), u.memory.textures++);
          }
        } else
          console.warn(
            'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.'
          );
      if (c && P.samples > 0 && vt(P) === !1) {
        const Ee = ye ? A : [A];
        (z.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (z.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let ee = 0; ee < Ee.length; ee++) {
          const B = Ee[ee];
          (z.__webglColorRenderbuffer[ee] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, z.__webglColorRenderbuffer[ee]);
          const fe = a.convert(B.format, B.colorSpace),
            we = a.convert(B.type),
            Te = le(B.internalFormat, fe, we, B.colorSpace, P.isXRRenderTarget === !0),
            Pe = tt(P);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Pe, Te, P.width, P.height),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ee,
              i.RENDERBUFFER,
              z.__webglColorRenderbuffer[ee]
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          P.depthBuffer &&
            ((z.__webglDepthRenderbuffer = i.createRenderbuffer()), q(z.__webglDepthRenderbuffer, P, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (Me) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, me.__webglTexture), Ze(i.TEXTURE_CUBE_MAP, A, Be);
      for (let Ee = 0; Ee < 6; Ee++)
        if (c && A.mipmaps && A.mipmaps.length > 0)
          for (let ee = 0; ee < A.mipmaps.length; ee++)
            rt(z.__webglFramebuffer[Ee][ee], P, A, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Ee, ee);
        else rt(z.__webglFramebuffer[Ee], P, A, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Ee, 0);
      k(A, Be) && l(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ye) {
      const Ee = P.texture;
      for (let ee = 0, B = Ee.length; ee < B; ee++) {
        const fe = Ee[ee],
          we = n.get(fe);
        t.bindTexture(i.TEXTURE_2D, we.__webglTexture),
          Ze(i.TEXTURE_2D, fe, Be),
          rt(z.__webglFramebuffer, P, fe, i.COLOR_ATTACHMENT0 + ee, i.TEXTURE_2D, 0),
          k(fe, Be) && l(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let Ee = i.TEXTURE_2D;
      if (
        ((P.isWebGL3DRenderTarget || P.isWebGLArrayRenderTarget) &&
          (c
            ? (Ee = P.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY)
            : console.error(
                'THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.'
              )),
        t.bindTexture(Ee, me.__webglTexture),
        Ze(Ee, A, Be),
        c && A.mipmaps && A.mipmaps.length > 0)
      )
        for (let ee = 0; ee < A.mipmaps.length; ee++) rt(z.__webglFramebuffer[ee], P, A, i.COLOR_ATTACHMENT0, Ee, ee);
      else rt(z.__webglFramebuffer, P, A, i.COLOR_ATTACHMENT0, Ee, 0);
      k(A, Be) && l(Ee), t.unbindTexture();
    }
    P.depthBuffer && ze(P);
  }
  function St(P) {
    const A = D(P) || c,
      z = P.isWebGLMultipleRenderTargets === !0 ? P.texture : [P.texture];
    for (let me = 0, Me = z.length; me < Me; me++) {
      const ye = z[me];
      if (k(ye, A)) {
        const Be = P.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D,
          Ee = n.get(ye).__webglTexture;
        t.bindTexture(Be, Ee), l(Be), t.unbindTexture();
      }
    }
  }
  function je(P) {
    if (c && P.samples > 0 && vt(P) === !1) {
      const A = P.isWebGLMultipleRenderTargets ? P.texture : [P.texture],
        z = P.width,
        me = P.height;
      let Me = i.COLOR_BUFFER_BIT;
      const ye = [],
        Be = P.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        Ee = n.get(P),
        ee = P.isWebGLMultipleRenderTargets === !0;
      if (ee)
        for (let B = 0; B < A.length; B++)
          t.bindFramebuffer(i.FRAMEBUFFER, Ee.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + B, i.RENDERBUFFER, null),
            t.bindFramebuffer(i.FRAMEBUFFER, Ee.__webglFramebuffer),
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + B, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, Ee.__webglMultisampledFramebuffer),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ee.__webglFramebuffer);
      for (let B = 0; B < A.length; B++) {
        ye.push(i.COLOR_ATTACHMENT0 + B), P.depthBuffer && ye.push(Be);
        const fe = Ee.__ignoreDepthValues !== void 0 ? Ee.__ignoreDepthValues : !1;
        if (
          (fe === !1 && (P.depthBuffer && (Me |= i.DEPTH_BUFFER_BIT), P.stencilBuffer && (Me |= i.STENCIL_BUFFER_BIT)),
          ee &&
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              Ee.__webglColorRenderbuffer[B]
            ),
          fe === !0 &&
            (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [Be]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [Be])),
          ee)
        ) {
          const we = n.get(A[B]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, we, 0);
        }
        i.blitFramebuffer(0, 0, z, me, 0, 0, z, me, Me, i.NEAREST),
          y && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ye);
      }
      if ((t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ee))
        for (let B = 0; B < A.length; B++) {
          t.bindFramebuffer(i.FRAMEBUFFER, Ee.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + B,
              i.RENDERBUFFER,
              Ee.__webglColorRenderbuffer[B]
            );
          const fe = n.get(A[B]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, Ee.__webglFramebuffer),
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + B, i.TEXTURE_2D, fe, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ee.__webglMultisampledFramebuffer);
    }
  }
  function tt(P) {
    return Math.min(_, P.samples);
  }
  function vt(P) {
    const A = n.get(P);
    return c && P.samples > 0 && e.has('WEBGL_multisampled_render_to_texture') === !0 && A.__useRenderToTexture !== !1;
  }
  function Nt(P) {
    const A = u.render.frame;
    T.get(P) !== A && (T.set(P, A), P.update());
  }
  function yt(P, A) {
    const z = P.colorSpace,
      me = P.format,
      Me = P.type;
    return (
      P.isCompressedTexture === !0 ||
        P.isVideoTexture === !0 ||
        P.format === Da ||
        (z !== Hn &&
          z !== Ci &&
          (z === Pt || z === Ls
            ? c === !1
              ? e.has('EXT_sRGB') === !0 && me === Ln
                ? ((P.format = Da), (P.minFilter = un), (P.generateMipmaps = !1))
                : (A = tc.sRGBToLinear(A))
              : (me !== Ln || Me !== pi) &&
                console.warn('THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.')
            : console.error('THREE.WebGLTextures: Unsupported texture color space:', z))),
      A
    );
  }
  (this.allocateTextureUnit = he),
    (this.resetTextureUnits = oe),
    (this.setTexture2D = de),
    (this.setTexture2DArray = Q),
    (this.setTexture3D = se),
    (this.setTextureCube = Le),
    (this.rebindTextures = Qe),
    (this.setupRenderTarget = We),
    (this.updateRenderTargetMipmap = St),
    (this.updateMultisampleRenderTarget = je),
    (this.setupDepthRenderbuffer = ze),
    (this.setupFrameBufferTexture = rt),
    (this.useMultisampledRTT = vt);
}
const dg = 0,
  zt = 1;
function pg(i, e, t) {
  const n = t.isWebGL2;
  function s(a, u = Ci) {
    let c;
    const h = u === Pt || u === Ls ? zt : dg;
    if (a === pi) return i.UNSIGNED_BYTE;
    if (a === Yl) return i.UNSIGNED_SHORT_4_4_4_4;
    if (a === Kl) return i.UNSIGNED_SHORT_5_5_5_1;
    if (a === Ru) return i.BYTE;
    if (a === Cu) return i.SHORT;
    if (a === Ga) return i.UNSIGNED_SHORT;
    if (a === jl) return i.INT;
    if (a === ui) return i.UNSIGNED_INT;
    if (a === fi) return i.FLOAT;
    if (a === Hr)
      return n ? i.HALF_FLOAT : ((c = e.get('OES_texture_half_float')), c !== null ? c.HALF_FLOAT_OES : null);
    if (a === Lu) return i.ALPHA;
    if (a === Ln) return i.RGBA;
    if (a === Pu) return i.LUMINANCE;
    if (a === Du) return i.LUMINANCE_ALPHA;
    if (a === wi) return i.DEPTH_COMPONENT;
    if (a === pr) return i.DEPTH_STENCIL;
    if (a === Da) return (c = e.get('EXT_sRGB')), c !== null ? c.SRGB_ALPHA_EXT : null;
    if (a === Uu) return i.RED;
    if (a === $l) return i.RED_INTEGER;
    if (a === Iu) return i.RG;
    if (a === Zl) return i.RG_INTEGER;
    if (a === Jl) return i.RGBA_INTEGER;
    if (a === Js || a === Qs || a === ea || a === ta)
      if (h === zt)
        if (((c = e.get('WEBGL_compressed_texture_s3tc_srgb')), c !== null)) {
          if (a === Js) return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (a === Qs) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (a === ea) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (a === ta) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((c = e.get('WEBGL_compressed_texture_s3tc')), c !== null)) {
        if (a === Js) return c.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (a === Qs) return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (a === ea) return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (a === ta) return c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (a === go || a === _o || a === vo || a === xo)
      if (((c = e.get('WEBGL_compressed_texture_pvrtc')), c !== null)) {
        if (a === go) return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (a === _o) return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (a === vo) return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (a === xo) return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (a === Nu) return (c = e.get('WEBGL_compressed_texture_etc1')), c !== null ? c.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (a === Mo || a === So)
      if (((c = e.get('WEBGL_compressed_texture_etc')), c !== null)) {
        if (a === Mo) return h === zt ? c.COMPRESSED_SRGB8_ETC2 : c.COMPRESSED_RGB8_ETC2;
        if (a === So) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : c.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      a === yo ||
      a === Eo ||
      a === To ||
      a === bo ||
      a === Ao ||
      a === wo ||
      a === Ro ||
      a === Co ||
      a === Lo ||
      a === Po ||
      a === Do ||
      a === Uo ||
      a === Io ||
      a === No
    )
      if (((c = e.get('WEBGL_compressed_texture_astc')), c !== null)) {
        if (a === yo) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : c.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (a === Eo) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : c.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (a === To) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : c.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (a === bo) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : c.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (a === Ao) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : c.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (a === wo) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : c.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (a === Ro) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : c.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (a === Co) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : c.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (a === Lo) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : c.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (a === Po) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : c.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (a === Do) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : c.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (a === Uo) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : c.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (a === Io) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : c.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (a === No) return h === zt ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : c.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (a === na || a === Oo || a === Fo)
      if (((c = e.get('EXT_texture_compression_bptc')), c !== null)) {
        if (a === na) return h === zt ? c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : c.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (a === Oo) return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (a === Fo) return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (a === Ou || a === Bo || a === Ho || a === zo)
      if (((c = e.get('EXT_texture_compression_rgtc')), c !== null)) {
        if (a === na) return c.COMPRESSED_RED_RGTC1_EXT;
        if (a === Bo) return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (a === Ho) return c.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (a === zo) return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return a === Ai
      ? n
        ? i.UNSIGNED_INT_24_8
        : ((c = e.get('WEBGL_depth_texture')), c !== null ? c.UNSIGNED_INT_24_8_WEBGL : null)
      : i[a] !== void 0
      ? i[a]
      : null;
  }
  return { convert: s };
}
class mg extends Mn {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Ms extends on {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
const gg = { type: 'move' };
class Ta {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Ms()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Ms()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new X()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new X())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Ms()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new X()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new X())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: 'connected', data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: 'disconnected', data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let s = null,
      a = null,
      u = null;
    const c = this._targetRay,
      h = this._grip,
      p = this._hand;
    if (e && t.session.visibilityState !== 'visible-blurred') {
      if (p && e.hand) {
        u = !0;
        for (const b of e.hand.values()) {
          const S = t.getJointPose(b, n),
            m = this._getHandJoint(p, b);
          S !== null &&
            (m.matrix.fromArray(S.transform.matrix),
            m.matrix.decompose(m.position, m.rotation, m.scale),
            (m.matrixWorldNeedsUpdate = !0),
            (m.jointRadius = S.radius)),
            (m.visible = S !== null);
        }
        const g = p.joints['index-finger-tip'],
          _ = p.joints['thumb-tip'],
          v = g.position.distanceTo(_.position),
          y = 0.02,
          T = 0.005;
        p.inputState.pinching && v > y + T
          ? ((p.inputState.pinching = !1),
            this.dispatchEvent({ type: 'pinchend', handedness: e.handedness, target: this }))
          : !p.inputState.pinching &&
            v <= y - T &&
            ((p.inputState.pinching = !0),
            this.dispatchEvent({ type: 'pinchstart', handedness: e.handedness, target: this }));
      } else
        h !== null &&
          e.gripSpace &&
          ((a = t.getPose(e.gripSpace, n)),
          a !== null &&
            (h.matrix.fromArray(a.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            (h.matrixWorldNeedsUpdate = !0),
            a.linearVelocity
              ? ((h.hasLinearVelocity = !0), h.linearVelocity.copy(a.linearVelocity))
              : (h.hasLinearVelocity = !1),
            a.angularVelocity
              ? ((h.hasAngularVelocity = !0), h.angularVelocity.copy(a.angularVelocity))
              : (h.hasAngularVelocity = !1)));
      c !== null &&
        ((s = t.getPose(e.targetRaySpace, n)),
        s === null && a !== null && (s = a),
        s !== null &&
          (c.matrix.fromArray(s.transform.matrix),
          c.matrix.decompose(c.position, c.rotation, c.scale),
          (c.matrixWorldNeedsUpdate = !0),
          s.linearVelocity
            ? ((c.hasLinearVelocity = !0), c.linearVelocity.copy(s.linearVelocity))
            : (c.hasLinearVelocity = !1),
          s.angularVelocity
            ? ((c.hasAngularVelocity = !0), c.angularVelocity.copy(s.angularVelocity))
            : (c.hasAngularVelocity = !1),
          this.dispatchEvent(gg)));
    }
    return (
      c !== null && (c.visible = s !== null),
      h !== null && (h.visible = a !== null),
      p !== null && (p.visible = u !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Ms();
      (n.matrixAutoUpdate = !1), (n.visible = !1), (e.joints[t.jointName] = n), e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class _g extends fn {
  constructor(e, t, n, s, a, u, c, h, p, g) {
    if (((g = g !== void 0 ? g : wi), g !== wi && g !== pr))
      throw new Error('DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat');
    n === void 0 && g === wi && (n = ui),
      n === void 0 && g === pr && (n = Ai),
      super(null, s, a, u, c, h, g, n, p),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = c !== void 0 ? c : Kt),
      (this.minFilter = h !== void 0 ? h : Kt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class vg extends Ui {
  constructor(e, t) {
    super();
    const n = this;
    let s = null,
      a = 1,
      u = null,
      c = 'local-floor',
      h = 1,
      p = null,
      g = null,
      _ = null,
      v = null,
      y = null,
      T = null;
    const b = t.getContextAttributes();
    let S = null,
      m = null;
    const O = [],
      R = [],
      D = new Mn();
    D.layers.enable(1), (D.viewport = new $t());
    const F = new Mn();
    F.layers.enable(2), (F.viewport = new $t());
    const k = [D, F],
      l = new mg();
    l.layers.enable(1), l.layers.enable(2);
    let le = null,
      w = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (Q) {
        let se = O[Q];
        return se === void 0 && ((se = new Ta()), (O[Q] = se)), se.getTargetRaySpace();
      }),
      (this.getControllerGrip = function (Q) {
        let se = O[Q];
        return se === void 0 && ((se = new Ta()), (O[Q] = se)), se.getGripSpace();
      }),
      (this.getHand = function (Q) {
        let se = O[Q];
        return se === void 0 && ((se = new Ta()), (O[Q] = se)), se.getHandSpace();
      });
    function I(Q) {
      const se = R.indexOf(Q.inputSource);
      if (se === -1) return;
      const Le = O[se];
      Le !== void 0 &&
        (Le.update(Q.inputSource, Q.frame, p || u), Le.dispatchEvent({ type: Q.type, data: Q.inputSource }));
    }
    function pe() {
      s.removeEventListener('select', I),
        s.removeEventListener('selectstart', I),
        s.removeEventListener('selectend', I),
        s.removeEventListener('squeeze', I),
        s.removeEventListener('squeezestart', I),
        s.removeEventListener('squeezeend', I),
        s.removeEventListener('end', pe),
        s.removeEventListener('inputsourceschange', ve);
      for (let Q = 0; Q < O.length; Q++) {
        const se = R[Q];
        se !== null && ((R[Q] = null), O[Q].disconnect(se));
      }
      (le = null),
        (w = null),
        e.setRenderTarget(S),
        (y = null),
        (v = null),
        (_ = null),
        (s = null),
        (m = null),
        de.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (Q) {
      (a = Q),
        n.isPresenting === !0 && console.warn('THREE.WebXRManager: Cannot change framebuffer scale while presenting.');
    }),
      (this.setReferenceSpaceType = function (Q) {
        (c = Q),
          n.isPresenting === !0 &&
            console.warn('THREE.WebXRManager: Cannot change reference space type while presenting.');
      }),
      (this.getReferenceSpace = function () {
        return p || u;
      }),
      (this.setReferenceSpace = function (Q) {
        p = Q;
      }),
      (this.getBaseLayer = function () {
        return v !== null ? v : y;
      }),
      (this.getBinding = function () {
        return _;
      }),
      (this.getFrame = function () {
        return T;
      }),
      (this.getSession = function () {
        return s;
      }),
      (this.setSession = async function (Q) {
        if (((s = Q), s !== null)) {
          if (
            ((S = e.getRenderTarget()),
            s.addEventListener('select', I),
            s.addEventListener('selectstart', I),
            s.addEventListener('selectend', I),
            s.addEventListener('squeeze', I),
            s.addEventListener('squeezestart', I),
            s.addEventListener('squeezeend', I),
            s.addEventListener('end', pe),
            s.addEventListener('inputsourceschange', ve),
            b.xrCompatible !== !0 && (await t.makeXRCompatible()),
            s.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const se = {
              antialias: s.renderState.layers === void 0 ? b.antialias : !0,
              alpha: !0,
              depth: b.depth,
              stencil: b.stencil,
              framebufferScaleFactor: a
            };
            (y = new XRWebGLLayer(s, t, se)),
              s.updateRenderState({ baseLayer: y }),
              (m = new Li(y.framebufferWidth, y.framebufferHeight, {
                format: Ln,
                type: pi,
                colorSpace: e.outputColorSpace,
                stencilBuffer: b.stencil
              }));
          } else {
            let se = null,
              Le = null,
              De = null;
            b.depth &&
              ((De = b.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (se = b.stencil ? pr : wi),
              (Le = b.stencil ? Ai : ui));
            const Oe = { colorFormat: t.RGBA8, depthFormat: De, scaleFactor: a };
            (_ = new XRWebGLBinding(s, t)),
              (v = _.createProjectionLayer(Oe)),
              s.updateRenderState({ layers: [v] }),
              (m = new Li(v.textureWidth, v.textureHeight, {
                format: Ln,
                type: pi,
                depthTexture: new _g(
                  v.textureWidth,
                  v.textureHeight,
                  Le,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  se
                ),
                stencilBuffer: b.stencil,
                colorSpace: e.outputColorSpace,
                samples: b.antialias ? 4 : 0
              }));
            const Ve = e.properties.get(m);
            Ve.__ignoreDepthValues = v.ignoreDepthValues;
          }
          (m.isXRRenderTarget = !0),
            this.setFoveation(h),
            (p = null),
            (u = await s.requestReferenceSpace(c)),
            de.setContext(s),
            de.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: 'sessionstart' });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (s !== null) return s.environmentBlendMode;
      });
    function ve(Q) {
      for (let se = 0; se < Q.removed.length; se++) {
        const Le = Q.removed[se],
          De = R.indexOf(Le);
        De >= 0 && ((R[De] = null), O[De].disconnect(Le));
      }
      for (let se = 0; se < Q.added.length; se++) {
        const Le = Q.added[se];
        let De = R.indexOf(Le);
        if (De === -1) {
          for (let Ve = 0; Ve < O.length; Ve++)
            if (Ve >= R.length) {
              R.push(Le), (De = Ve);
              break;
            } else if (R[Ve] === null) {
              (R[Ve] = Le), (De = Ve);
              break;
            }
          if (De === -1) break;
        }
        const Oe = O[De];
        Oe && Oe.connect(Le);
      }
    }
    const W = new X(),
      ne = new X();
    function ie(Q, se, Le) {
      W.setFromMatrixPosition(se.matrixWorld), ne.setFromMatrixPosition(Le.matrixWorld);
      const De = W.distanceTo(ne),
        Oe = se.projectionMatrix.elements,
        Ve = Le.projectionMatrix.elements,
        Ze = Oe[14] / (Oe[10] - 1),
        Ge = Oe[14] / (Oe[10] + 1),
        gt = (Oe[9] + 1) / Oe[5],
        Tt = (Oe[9] - 1) / Oe[5],
        rt = (Oe[8] - 1) / Oe[0],
        q = (Ve[8] + 1) / Ve[0],
        Ct = Ze * rt,
        ze = Ze * q,
        Qe = De / (-rt + q),
        We = Qe * -rt;
      se.matrixWorld.decompose(Q.position, Q.quaternion, Q.scale),
        Q.translateX(We),
        Q.translateZ(Qe),
        Q.matrixWorld.compose(Q.position, Q.quaternion, Q.scale),
        Q.matrixWorldInverse.copy(Q.matrixWorld).invert();
      const St = Ze + Qe,
        je = Ge + Qe,
        tt = Ct - We,
        vt = ze + (De - We),
        Nt = ((gt * Ge) / je) * St,
        yt = ((Tt * Ge) / je) * St;
      Q.projectionMatrix.makePerspective(tt, vt, Nt, yt, St, je),
        Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert();
    }
    function ge(Q, se) {
      se === null ? Q.matrixWorld.copy(Q.matrix) : Q.matrixWorld.multiplyMatrices(se.matrixWorld, Q.matrix),
        Q.matrixWorldInverse.copy(Q.matrixWorld).invert();
    }
    this.updateCamera = function (Q) {
      if (s === null) return;
      (l.near = F.near = D.near = Q.near),
        (l.far = F.far = D.far = Q.far),
        (le !== l.near || w !== l.far) &&
          (s.updateRenderState({ depthNear: l.near, depthFar: l.far }), (le = l.near), (w = l.far));
      const se = Q.parent,
        Le = l.cameras;
      ge(l, se);
      for (let De = 0; De < Le.length; De++) ge(Le[De], se);
      Le.length === 2 ? ie(l, D, F) : l.projectionMatrix.copy(D.projectionMatrix), oe(Q, l, se);
    };
    function oe(Q, se, Le) {
      Le === null
        ? Q.matrix.copy(se.matrixWorld)
        : (Q.matrix.copy(Le.matrixWorld), Q.matrix.invert(), Q.matrix.multiply(se.matrixWorld)),
        Q.matrix.decompose(Q.position, Q.quaternion, Q.scale),
        Q.updateMatrixWorld(!0),
        Q.projectionMatrix.copy(se.projectionMatrix),
        Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),
        Q.isPerspectiveCamera && ((Q.fov = zr * 2 * Math.atan(1 / Q.projectionMatrix.elements[5])), (Q.zoom = 1));
    }
    (this.getCamera = function () {
      return l;
    }),
      (this.getFoveation = function () {
        if (!(v === null && y === null)) return h;
      }),
      (this.setFoveation = function (Q) {
        (h = Q),
          v !== null && (v.fixedFoveation = Q),
          y !== null && y.fixedFoveation !== void 0 && (y.fixedFoveation = Q);
      });
    let he = null;
    function xe(Q, se) {
      if (((g = se.getViewerPose(p || u)), (T = se), g !== null)) {
        const Le = g.views;
        y !== null && (e.setRenderTargetFramebuffer(m, y.framebuffer), e.setRenderTarget(m));
        let De = !1;
        Le.length !== l.cameras.length && ((l.cameras.length = 0), (De = !0));
        for (let Oe = 0; Oe < Le.length; Oe++) {
          const Ve = Le[Oe];
          let Ze = null;
          if (y !== null) Ze = y.getViewport(Ve);
          else {
            const gt = _.getViewSubImage(v, Ve);
            (Ze = gt.viewport),
              Oe === 0 &&
                (e.setRenderTargetTextures(m, gt.colorTexture, v.ignoreDepthValues ? void 0 : gt.depthStencilTexture),
                e.setRenderTarget(m));
          }
          let Ge = k[Oe];
          Ge === void 0 && ((Ge = new Mn()), Ge.layers.enable(Oe), (Ge.viewport = new $t()), (k[Oe] = Ge)),
            Ge.matrix.fromArray(Ve.transform.matrix),
            Ge.matrix.decompose(Ge.position, Ge.quaternion, Ge.scale),
            Ge.projectionMatrix.fromArray(Ve.projectionMatrix),
            Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),
            Ge.viewport.set(Ze.x, Ze.y, Ze.width, Ze.height),
            Oe === 0 && (l.matrix.copy(Ge.matrix), l.matrix.decompose(l.position, l.quaternion, l.scale)),
            De === !0 && l.cameras.push(Ge);
        }
      }
      for (let Le = 0; Le < O.length; Le++) {
        const De = R[Le],
          Oe = O[Le];
        De !== null && Oe !== void 0 && Oe.update(De, se, p || u);
      }
      he && he(Q, se), se.detectedPlanes && n.dispatchEvent({ type: 'planesdetected', data: se }), (T = null);
    }
    const de = new hc();
    de.setAnimationLoop(xe),
      (this.setAnimationLoop = function (Q) {
        he = Q;
      }),
      (this.dispose = function () {});
  }
}
function xg(i, e) {
  function t(S, m) {
    S.matrixAutoUpdate === !0 && S.updateMatrix(), m.value.copy(S.matrix);
  }
  function n(S, m) {
    m.color.getRGB(S.fogColor.value, lc(i)),
      m.isFog
        ? ((S.fogNear.value = m.near), (S.fogFar.value = m.far))
        : m.isFogExp2 && (S.fogDensity.value = m.density);
  }
  function s(S, m, O, R, D) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? a(S, m)
      : m.isMeshToonMaterial
      ? (a(S, m), _(S, m))
      : m.isMeshPhongMaterial
      ? (a(S, m), g(S, m))
      : m.isMeshStandardMaterial
      ? (a(S, m), v(S, m), m.isMeshPhysicalMaterial && y(S, m, D))
      : m.isMeshMatcapMaterial
      ? (a(S, m), T(S, m))
      : m.isMeshDepthMaterial
      ? a(S, m)
      : m.isMeshDistanceMaterial
      ? (a(S, m), b(S, m))
      : m.isMeshNormalMaterial
      ? a(S, m)
      : m.isLineBasicMaterial
      ? (u(S, m), m.isLineDashedMaterial && c(S, m))
      : m.isPointsMaterial
      ? h(S, m, O, R)
      : m.isSpriteMaterial
      ? p(S, m)
      : m.isShadowMaterial
      ? (S.color.value.copy(m.color), (S.opacity.value = m.opacity))
      : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function a(S, m) {
    (S.opacity.value = m.opacity),
      m.color && S.diffuse.value.copy(m.color),
      m.emissive && S.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && ((S.map.value = m.map), t(m.map, S.mapTransform)),
      m.alphaMap && ((S.alphaMap.value = m.alphaMap), t(m.alphaMap, S.alphaMapTransform)),
      m.bumpMap &&
        ((S.bumpMap.value = m.bumpMap),
        t(m.bumpMap, S.bumpMapTransform),
        (S.bumpScale.value = m.bumpScale),
        m.side === an && (S.bumpScale.value *= -1)),
      m.normalMap &&
        ((S.normalMap.value = m.normalMap),
        t(m.normalMap, S.normalMapTransform),
        S.normalScale.value.copy(m.normalScale),
        m.side === an && S.normalScale.value.negate()),
      m.displacementMap &&
        ((S.displacementMap.value = m.displacementMap),
        t(m.displacementMap, S.displacementMapTransform),
        (S.displacementScale.value = m.displacementScale),
        (S.displacementBias.value = m.displacementBias)),
      m.emissiveMap && ((S.emissiveMap.value = m.emissiveMap), t(m.emissiveMap, S.emissiveMapTransform)),
      m.specularMap && ((S.specularMap.value = m.specularMap), t(m.specularMap, S.specularMapTransform)),
      m.alphaTest > 0 && (S.alphaTest.value = m.alphaTest);
    const O = e.get(m).envMap;
    if (
      (O &&
        ((S.envMap.value = O),
        (S.flipEnvMap.value = O.isCubeTexture && O.isRenderTargetTexture === !1 ? -1 : 1),
        (S.reflectivity.value = m.reflectivity),
        (S.ior.value = m.ior),
        (S.refractionRatio.value = m.refractionRatio)),
      m.lightMap)
    ) {
      S.lightMap.value = m.lightMap;
      const R = i._useLegacyLights === !0 ? Math.PI : 1;
      (S.lightMapIntensity.value = m.lightMapIntensity * R), t(m.lightMap, S.lightMapTransform);
    }
    m.aoMap && ((S.aoMap.value = m.aoMap), (S.aoMapIntensity.value = m.aoMapIntensity), t(m.aoMap, S.aoMapTransform));
  }
  function u(S, m) {
    S.diffuse.value.copy(m.color),
      (S.opacity.value = m.opacity),
      m.map && ((S.map.value = m.map), t(m.map, S.mapTransform));
  }
  function c(S, m) {
    (S.dashSize.value = m.dashSize), (S.totalSize.value = m.dashSize + m.gapSize), (S.scale.value = m.scale);
  }
  function h(S, m, O, R) {
    S.diffuse.value.copy(m.color),
      (S.opacity.value = m.opacity),
      (S.size.value = m.size * O),
      (S.scale.value = R * 0.5),
      m.map && ((S.map.value = m.map), t(m.map, S.uvTransform)),
      m.alphaMap && ((S.alphaMap.value = m.alphaMap), t(m.alphaMap, S.alphaMapTransform)),
      m.alphaTest > 0 && (S.alphaTest.value = m.alphaTest);
  }
  function p(S, m) {
    S.diffuse.value.copy(m.color),
      (S.opacity.value = m.opacity),
      (S.rotation.value = m.rotation),
      m.map && ((S.map.value = m.map), t(m.map, S.mapTransform)),
      m.alphaMap && ((S.alphaMap.value = m.alphaMap), t(m.alphaMap, S.alphaMapTransform)),
      m.alphaTest > 0 && (S.alphaTest.value = m.alphaTest);
  }
  function g(S, m) {
    S.specular.value.copy(m.specular), (S.shininess.value = Math.max(m.shininess, 1e-4));
  }
  function _(S, m) {
    m.gradientMap && (S.gradientMap.value = m.gradientMap);
  }
  function v(S, m) {
    (S.metalness.value = m.metalness),
      m.metalnessMap && ((S.metalnessMap.value = m.metalnessMap), t(m.metalnessMap, S.metalnessMapTransform)),
      (S.roughness.value = m.roughness),
      m.roughnessMap && ((S.roughnessMap.value = m.roughnessMap), t(m.roughnessMap, S.roughnessMapTransform)),
      e.get(m).envMap && (S.envMapIntensity.value = m.envMapIntensity);
  }
  function y(S, m, O) {
    (S.ior.value = m.ior),
      m.sheen > 0 &&
        (S.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (S.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap && ((S.sheenColorMap.value = m.sheenColorMap), t(m.sheenColorMap, S.sheenColorMapTransform)),
        m.sheenRoughnessMap &&
          ((S.sheenRoughnessMap.value = m.sheenRoughnessMap), t(m.sheenRoughnessMap, S.sheenRoughnessMapTransform))),
      m.clearcoat > 0 &&
        ((S.clearcoat.value = m.clearcoat),
        (S.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap && ((S.clearcoatMap.value = m.clearcoatMap), t(m.clearcoatMap, S.clearcoatMapTransform)),
        m.clearcoatRoughnessMap &&
          ((S.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
          t(m.clearcoatRoughnessMap, S.clearcoatRoughnessMapTransform)),
        m.clearcoatNormalMap &&
          ((S.clearcoatNormalMap.value = m.clearcoatNormalMap),
          t(m.clearcoatNormalMap, S.clearcoatNormalMapTransform),
          S.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          m.side === an && S.clearcoatNormalScale.value.negate())),
      m.iridescence > 0 &&
        ((S.iridescence.value = m.iridescence),
        (S.iridescenceIOR.value = m.iridescenceIOR),
        (S.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (S.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap &&
          ((S.iridescenceMap.value = m.iridescenceMap), t(m.iridescenceMap, S.iridescenceMapTransform)),
        m.iridescenceThicknessMap &&
          ((S.iridescenceThicknessMap.value = m.iridescenceThicknessMap),
          t(m.iridescenceThicknessMap, S.iridescenceThicknessMapTransform))),
      m.transmission > 0 &&
        ((S.transmission.value = m.transmission),
        (S.transmissionSamplerMap.value = O.texture),
        S.transmissionSamplerSize.value.set(O.width, O.height),
        m.transmissionMap &&
          ((S.transmissionMap.value = m.transmissionMap), t(m.transmissionMap, S.transmissionMapTransform)),
        (S.thickness.value = m.thickness),
        m.thicknessMap && ((S.thicknessMap.value = m.thicknessMap), t(m.thicknessMap, S.thicknessMapTransform)),
        (S.attenuationDistance.value = m.attenuationDistance),
        S.attenuationColor.value.copy(m.attenuationColor)),
      m.anisotropy > 0 &&
        (S.anisotropyVector.value.set(
          m.anisotropy * Math.cos(m.anisotropyRotation),
          m.anisotropy * Math.sin(m.anisotropyRotation)
        ),
        m.anisotropyMap && ((S.anisotropyMap.value = m.anisotropyMap), t(m.anisotropyMap, S.anisotropyMapTransform))),
      (S.specularIntensity.value = m.specularIntensity),
      S.specularColor.value.copy(m.specularColor),
      m.specularColorMap &&
        ((S.specularColorMap.value = m.specularColorMap), t(m.specularColorMap, S.specularColorMapTransform)),
      m.specularIntensityMap &&
        ((S.specularIntensityMap.value = m.specularIntensityMap),
        t(m.specularIntensityMap, S.specularIntensityMapTransform));
  }
  function T(S, m) {
    m.matcap && (S.matcap.value = m.matcap);
  }
  function b(S, m) {
    const O = e.get(m).light;
    S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),
      (S.nearDistance.value = O.shadow.camera.near),
      (S.farDistance.value = O.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function Mg(i, e, t, n) {
  let s = {},
    a = {},
    u = [];
  const c = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function h(O, R) {
    const D = R.program;
    n.uniformBlockBinding(O, D);
  }
  function p(O, R) {
    let D = s[O.id];
    D === void 0 && (T(O), (D = g(O)), (s[O.id] = D), O.addEventListener('dispose', S));
    const F = R.program;
    n.updateUBOMapping(O, F);
    const k = e.render.frame;
    a[O.id] !== k && (v(O), (a[O.id] = k));
  }
  function g(O) {
    const R = _();
    O.__bindingPointIndex = R;
    const D = i.createBuffer(),
      F = O.__size,
      k = O.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, D),
      i.bufferData(i.UNIFORM_BUFFER, F, k),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, R, D),
      D
    );
  }
  function _() {
    for (let O = 0; O < c; O++) if (u.indexOf(O) === -1) return u.push(O), O;
    return console.error('THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.'), 0;
  }
  function v(O) {
    const R = s[O.id],
      D = O.uniforms,
      F = O.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, R);
    for (let k = 0, l = D.length; k < l; k++) {
      const le = D[k];
      if (y(le, k, F) === !0) {
        const w = le.__offset,
          I = Array.isArray(le.value) ? le.value : [le.value];
        let pe = 0;
        for (let ve = 0; ve < I.length; ve++) {
          const W = I[ve],
            ne = b(W);
          typeof W == 'number'
            ? ((le.__data[0] = W), i.bufferSubData(i.UNIFORM_BUFFER, w + pe, le.__data))
            : W.isMatrix3
            ? ((le.__data[0] = W.elements[0]),
              (le.__data[1] = W.elements[1]),
              (le.__data[2] = W.elements[2]),
              (le.__data[3] = W.elements[0]),
              (le.__data[4] = W.elements[3]),
              (le.__data[5] = W.elements[4]),
              (le.__data[6] = W.elements[5]),
              (le.__data[7] = W.elements[0]),
              (le.__data[8] = W.elements[6]),
              (le.__data[9] = W.elements[7]),
              (le.__data[10] = W.elements[8]),
              (le.__data[11] = W.elements[0]))
            : (W.toArray(le.__data, pe), (pe += ne.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        i.bufferSubData(i.UNIFORM_BUFFER, w, le.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function y(O, R, D) {
    const F = O.value;
    if (D[R] === void 0) {
      if (typeof F == 'number') D[R] = F;
      else {
        const k = Array.isArray(F) ? F : [F],
          l = [];
        for (let le = 0; le < k.length; le++) l.push(k[le].clone());
        D[R] = l;
      }
      return !0;
    } else if (typeof F == 'number') {
      if (D[R] !== F) return (D[R] = F), !0;
    } else {
      const k = Array.isArray(D[R]) ? D[R] : [D[R]],
        l = Array.isArray(F) ? F : [F];
      for (let le = 0; le < k.length; le++) {
        const w = k[le];
        if (w.equals(l[le]) === !1) return w.copy(l[le]), !0;
      }
    }
    return !1;
  }
  function T(O) {
    const R = O.uniforms;
    let D = 0;
    const F = 16;
    let k = 0;
    for (let l = 0, le = R.length; l < le; l++) {
      const w = R[l],
        I = { boundary: 0, storage: 0 },
        pe = Array.isArray(w.value) ? w.value : [w.value];
      for (let ve = 0, W = pe.length; ve < W; ve++) {
        const ne = pe[ve],
          ie = b(ne);
        (I.boundary += ie.boundary), (I.storage += ie.storage);
      }
      if (((w.__data = new Float32Array(I.storage / Float32Array.BYTES_PER_ELEMENT)), (w.__offset = D), l > 0)) {
        k = D % F;
        const ve = F - k;
        k !== 0 && ve - I.boundary < 0 && ((D += F - k), (w.__offset = D));
      }
      D += I.storage;
    }
    return (k = D % F), k > 0 && (D += F - k), (O.__size = D), (O.__cache = {}), this;
  }
  function b(O) {
    const R = { boundary: 0, storage: 0 };
    return (
      typeof O == 'number'
        ? ((R.boundary = 4), (R.storage = 4))
        : O.isVector2
        ? ((R.boundary = 8), (R.storage = 8))
        : O.isVector3 || O.isColor
        ? ((R.boundary = 16), (R.storage = 12))
        : O.isVector4
        ? ((R.boundary = 16), (R.storage = 16))
        : O.isMatrix3
        ? ((R.boundary = 48), (R.storage = 48))
        : O.isMatrix4
        ? ((R.boundary = 64), (R.storage = 64))
        : O.isTexture
        ? console.warn('THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.')
        : console.warn('THREE.WebGLRenderer: Unsupported uniform value type.', O),
      R
    );
  }
  function S(O) {
    const R = O.target;
    R.removeEventListener('dispose', S);
    const D = u.indexOf(R.__bindingPointIndex);
    u.splice(D, 1), i.deleteBuffer(s[R.id]), delete s[R.id], delete a[R.id];
  }
  function m() {
    for (const O in s) i.deleteBuffer(s[O]);
    (u = []), (s = {}), (a = {});
  }
  return { bind: h, update: p, dispose: m };
}
class _c {
  constructor(e = {}) {
    const {
      canvas: t = hf(),
      context: n = null,
      depth: s = !0,
      stencil: a = !0,
      alpha: u = !1,
      antialias: c = !1,
      premultipliedAlpha: h = !0,
      preserveDrawingBuffer: p = !1,
      powerPreference: g = 'default',
      failIfMajorPerformanceCaveat: _ = !1
    } = e;
    this.isWebGLRenderer = !0;
    let v;
    n !== null ? (v = n.getContextAttributes().alpha) : (v = u);
    const y = new Uint32Array(4),
      T = new Int32Array(4);
    let b = null,
      S = null;
    const m = [],
      O = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.outputColorSpace = Pt),
      (this._useLegacyLights = !1),
      (this.toneMapping = di),
      (this.toneMappingExposure = 1);
    const R = this;
    let D = !1,
      F = 0,
      k = 0,
      l = null,
      le = -1,
      w = null;
    const I = new $t(),
      pe = new $t();
    let ve = null;
    const W = new bt(0);
    let ne = 0,
      ie = t.width,
      ge = t.height,
      oe = 1,
      he = null,
      xe = null;
    const de = new $t(0, 0, ie, ge),
      Q = new $t(0, 0, ie, ge);
    let se = !1;
    const Le = new fc();
    let De = !1,
      Oe = !1,
      Ve = null;
    const Ze = new Gt(),
      Ge = new dt(),
      gt = new X(),
      Tt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function rt() {
      return l === null ? oe : 1;
    }
    let q = n;
    function Ct(L, Y) {
      for (let re = 0; re < L.length; re++) {
        const $ = L[re],
          ae = t.getContext($, Y);
        if (ae !== null) return ae;
      }
      return null;
    }
    try {
      const L = {
        alpha: !0,
        depth: s,
        stencil: a,
        antialias: c,
        premultipliedAlpha: h,
        preserveDrawingBuffer: p,
        powerPreference: g,
        failIfMajorPerformanceCaveat: _
      };
      if (
        ('setAttribute' in t && t.setAttribute('data-engine', `three.js r${za}`),
        t.addEventListener('webglcontextlost', Re, !1),
        t.addEventListener('webglcontextrestored', Z, !1),
        t.addEventListener('webglcontextcreationerror', _e, !1),
        q === null)
      ) {
        const Y = ['webgl2', 'webgl', 'experimental-webgl'];
        if ((R.isWebGL1Renderer === !0 && Y.shift(), (q = Ct(Y, L)), q === null))
          throw Ct(Y)
            ? new Error('Error creating WebGL context with your selected attributes.')
            : new Error('Error creating WebGL context.');
      }
      typeof WebGLRenderingContext < 'u' &&
        q instanceof WebGLRenderingContext &&
        console.warn('THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.'),
        q.getShaderPrecisionFormat === void 0 &&
          (q.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
    } catch (L) {
      throw (console.error('THREE.WebGLRenderer: ' + L.message), L);
    }
    let ze, Qe, We, St, je, tt, vt, Nt, yt, P, A, z, me, Me, ye, Be, Ee, ee, B, fe, we, Te, Pe, Xe;
    function ut() {
      (ze = new Lp(q)),
        (Qe = new Ep(q, ze, e)),
        ze.init(Qe),
        (Te = new pg(q, ze, Qe)),
        (We = new fg(q, ze, Qe)),
        (St = new Up(q)),
        (je = new Zm()),
        (tt = new hg(q, ze, We, je, Qe, Te, St)),
        (vt = new bp(R)),
        (Nt = new Cp(R)),
        (yt = new kf(q, Qe)),
        (Pe = new Sp(q, ze, yt, Qe)),
        (P = new Pp(q, yt, St, Pe)),
        (A = new Fp(q, P, yt, St)),
        (B = new Op(q, Qe, tt)),
        (Be = new Tp(je)),
        (z = new $m(R, vt, Nt, ze, Qe, Pe, Be)),
        (me = new xg(R, je)),
        (Me = new Qm()),
        (ye = new sg(ze, Qe)),
        (ee = new Mp(R, vt, Nt, We, A, v, h)),
        (Ee = new ug(R, A, Qe)),
        (Xe = new Mg(q, St, Qe, We)),
        (fe = new yp(q, ze, St, Qe)),
        (we = new Dp(q, ze, St, Qe)),
        (St.programs = z.programs),
        (R.capabilities = Qe),
        (R.extensions = ze),
        (R.properties = je),
        (R.renderLists = Me),
        (R.shadowMap = Ee),
        (R.state = We),
        (R.info = St);
    }
    ut();
    const G = new vg(R, q);
    (this.xr = G),
      (this.getContext = function () {
        return q;
      }),
      (this.getContextAttributes = function () {
        return q.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const L = ze.get('WEBGL_lose_context');
        L && L.loseContext();
      }),
      (this.forceContextRestore = function () {
        const L = ze.get('WEBGL_lose_context');
        L && L.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return oe;
      }),
      (this.setPixelRatio = function (L) {
        L !== void 0 && ((oe = L), this.setSize(ie, ge, !1));
      }),
      (this.getSize = function (L) {
        return L.set(ie, ge);
      }),
      (this.setSize = function (L, Y, re = !0) {
        if (G.isPresenting) {
          console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        (ie = L),
          (ge = Y),
          (t.width = Math.floor(L * oe)),
          (t.height = Math.floor(Y * oe)),
          re === !0 && ((t.style.width = L + 'px'), (t.style.height = Y + 'px')),
          this.setViewport(0, 0, L, Y);
      }),
      (this.getDrawingBufferSize = function (L) {
        return L.set(ie * oe, ge * oe).floor();
      }),
      (this.setDrawingBufferSize = function (L, Y, re) {
        (ie = L),
          (ge = Y),
          (oe = re),
          (t.width = Math.floor(L * re)),
          (t.height = Math.floor(Y * re)),
          this.setViewport(0, 0, L, Y);
      }),
      (this.getCurrentViewport = function (L) {
        return L.copy(I);
      }),
      (this.getViewport = function (L) {
        return L.copy(de);
      }),
      (this.setViewport = function (L, Y, re, $) {
        L.isVector4 ? de.set(L.x, L.y, L.z, L.w) : de.set(L, Y, re, $),
          We.viewport(I.copy(de).multiplyScalar(oe).floor());
      }),
      (this.getScissor = function (L) {
        return L.copy(Q);
      }),
      (this.setScissor = function (L, Y, re, $) {
        L.isVector4 ? Q.set(L.x, L.y, L.z, L.w) : Q.set(L, Y, re, $), We.scissor(pe.copy(Q).multiplyScalar(oe).floor());
      }),
      (this.getScissorTest = function () {
        return se;
      }),
      (this.setScissorTest = function (L) {
        We.setScissorTest((se = L));
      }),
      (this.setOpaqueSort = function (L) {
        he = L;
      }),
      (this.setTransparentSort = function (L) {
        xe = L;
      }),
      (this.getClearColor = function (L) {
        return L.copy(ee.getClearColor());
      }),
      (this.setClearColor = function () {
        ee.setClearColor.apply(ee, arguments);
      }),
      (this.getClearAlpha = function () {
        return ee.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ee.setClearAlpha.apply(ee, arguments);
      }),
      (this.clear = function (L = !0, Y = !0, re = !0) {
        let $ = 0;
        if (L) {
          let ae = !1;
          if (l !== null) {
            const Ne = l.texture.format;
            ae = Ne === Jl || Ne === Zl || Ne === $l;
          }
          if (ae) {
            const Ne = l.texture.type,
              He = Ne === pi || Ne === ui || Ne === Ga || Ne === Ai || Ne === Yl || Ne === Kl,
              Ye = ee.getClearColor(),
              $e = ee.getClearAlpha(),
              nt = Ye.r,
              qe = Ye.g,
              it = Ye.b;
            He
              ? ((y[0] = nt), (y[1] = qe), (y[2] = it), (y[3] = $e), q.clearBufferuiv(q.COLOR, 0, y))
              : ((T[0] = nt), (T[1] = qe), (T[2] = it), (T[3] = $e), q.clearBufferiv(q.COLOR, 0, T));
          } else $ |= q.COLOR_BUFFER_BIT;
        }
        Y && ($ |= q.DEPTH_BUFFER_BIT), re && ($ |= q.STENCIL_BUFFER_BIT), q.clear($);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener('webglcontextlost', Re, !1),
          t.removeEventListener('webglcontextrestored', Z, !1),
          t.removeEventListener('webglcontextcreationerror', _e, !1),
          Me.dispose(),
          ye.dispose(),
          je.dispose(),
          vt.dispose(),
          Nt.dispose(),
          A.dispose(),
          Pe.dispose(),
          Xe.dispose(),
          z.dispose(),
          G.dispose(),
          G.removeEventListener('sessionstart', At),
          G.removeEventListener('sessionend', dn),
          Ve && (Ve.dispose(), (Ve = null)),
          Wt.stop();
      });
    function Re(L) {
      L.preventDefault(), console.log('THREE.WebGLRenderer: Context Lost.'), (D = !0);
    }
    function Z() {
      console.log('THREE.WebGLRenderer: Context Restored.'), (D = !1);
      const L = St.autoReset,
        Y = Ee.enabled,
        re = Ee.autoUpdate,
        $ = Ee.needsUpdate,
        ae = Ee.type;
      ut(), (St.autoReset = L), (Ee.enabled = Y), (Ee.autoUpdate = re), (Ee.needsUpdate = $), (Ee.type = ae);
    }
    function _e(L) {
      console.error('THREE.WebGLRenderer: A WebGL context could not be created. Reason: ', L.statusMessage);
    }
    function be(L) {
      const Y = L.target;
      Y.removeEventListener('dispose', be), ot(Y);
    }
    function ot(L) {
      st(L), je.remove(L);
    }
    function st(L) {
      const Y = je.get(L).programs;
      Y !== void 0 &&
        (Y.forEach(function (re) {
          z.releaseProgram(re);
        }),
        L.isShaderMaterial && z.releaseShaderCache(L));
    }
    (this.renderBufferDirect = function (L, Y, re, $, ae, Ne) {
      Y === null && (Y = Tt);
      const He = ae.isMesh && ae.matrixWorld.determinant() < 0,
        Ye = Kr(L, Y, re, $, ae);
      We.setMaterial($, He);
      let $e = re.index,
        nt = 1;
      if ($.wireframe === !0) {
        if ((($e = P.getWireframeAttribute(re)), $e === void 0)) return;
        nt = 2;
      }
      const qe = re.drawRange,
        it = re.attributes.position;
      let Rt = qe.start * nt,
        Lt = (qe.start + qe.count) * nt;
      Ne !== null && ((Rt = Math.max(Rt, Ne.start * nt)), (Lt = Math.min(Lt, (Ne.start + Ne.count) * nt))),
        $e !== null
          ? ((Rt = Math.max(Rt, 0)), (Lt = Math.min(Lt, $e.count)))
          : it != null && ((Rt = Math.max(Rt, 0)), (Lt = Math.min(Lt, it.count)));
      const ln = Lt - Rt;
      if (ln < 0 || ln === 1 / 0) return;
      Pe.setup(ae, $, Ye, re, $e);
      let pn,
        Ut = fe;
      if (($e !== null && ((pn = yt.get($e)), (Ut = we), Ut.setIndex(pn)), ae.isMesh))
        $.wireframe === !0
          ? (We.setLineWidth($.wireframeLinewidth * rt()), Ut.setMode(q.LINES))
          : Ut.setMode(q.TRIANGLES);
      else if (ae.isLine) {
        let ft = $.linewidth;
        ft === void 0 && (ft = 1),
          We.setLineWidth(ft * rt()),
          ae.isLineSegments ? Ut.setMode(q.LINES) : ae.isLineLoop ? Ut.setMode(q.LINE_LOOP) : Ut.setMode(q.LINE_STRIP);
      } else ae.isPoints ? Ut.setMode(q.POINTS) : ae.isSprite && Ut.setMode(q.TRIANGLES);
      if (ae.isInstancedMesh) Ut.renderInstances(Rt, ln, ae.count);
      else if (re.isInstancedBufferGeometry) {
        const ft = re._maxInstanceCount !== void 0 ? re._maxInstanceCount : 1 / 0,
          Oi = Math.min(re.instanceCount, ft);
        Ut.renderInstances(Rt, ln, Oi);
      } else Ut.render(Rt, ln);
    }),
      (this.compile = function (L, Y) {
        function re($, ae, Ne) {
          $.transparent === !0 && $.side === Qn && $.forceSinglePass === !1
            ? (($.side = an),
              ($.needsUpdate = !0),
              Ni($, ae, Ne),
              ($.side = mi),
              ($.needsUpdate = !0),
              Ni($, ae, Ne),
              ($.side = Qn))
            : Ni($, ae, Ne);
        }
        (S = ye.get(L)),
          S.init(),
          O.push(S),
          L.traverseVisible(function ($) {
            $.isLight && $.layers.test(Y.layers) && (S.pushLight($), $.castShadow && S.pushShadow($));
          }),
          S.setupLights(R._useLegacyLights),
          L.traverse(function ($) {
            const ae = $.material;
            if (ae)
              if (Array.isArray(ae))
                for (let Ne = 0; Ne < ae.length; Ne++) {
                  const He = ae[Ne];
                  re(He, L, $);
                }
              else re(ae, L, $);
          }),
          O.pop(),
          (S = null);
      });
    let at = null;
    function qt(L) {
      at && at(L);
    }
    function At() {
      Wt.stop();
    }
    function dn() {
      Wt.start();
    }
    const Wt = new hc();
    Wt.setAnimationLoop(qt),
      typeof self < 'u' && Wt.setContext(self),
      (this.setAnimationLoop = function (L) {
        (at = L), G.setAnimationLoop(L), L === null ? Wt.stop() : Wt.start();
      }),
      G.addEventListener('sessionstart', At),
      G.addEventListener('sessionend', dn),
      (this.render = function (L, Y) {
        if (Y !== void 0 && Y.isCamera !== !0) {
          console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
          return;
        }
        if (D === !0) return;
        L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(),
          Y.parent === null && Y.matrixWorldAutoUpdate === !0 && Y.updateMatrixWorld(),
          G.enabled === !0 &&
            G.isPresenting === !0 &&
            (G.cameraAutoUpdate === !0 && G.updateCamera(Y), (Y = G.getCamera())),
          L.isScene === !0 && L.onBeforeRender(R, L, Y, l),
          (S = ye.get(L, O.length)),
          S.init(),
          O.push(S),
          Ze.multiplyMatrices(Y.projectionMatrix, Y.matrixWorldInverse),
          Le.setFromProjectionMatrix(Ze),
          (Oe = this.localClippingEnabled),
          (De = Be.init(this.clippingPlanes, Oe)),
          (b = Me.get(L, m.length)),
          b.init(),
          m.push(b),
          zn(L, Y, 0, R.sortObjects),
          b.finish(),
          R.sortObjects === !0 && b.sort(he, xe),
          this.info.render.frame++,
          De === !0 && Be.beginShadows();
        const re = S.state.shadowsArray;
        if (
          (Ee.render(re, L, Y),
          De === !0 && Be.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          ee.render(b, L),
          S.setupLights(R._useLegacyLights),
          Y.isArrayCamera)
        ) {
          const $ = Y.cameras;
          for (let ae = 0, Ne = $.length; ae < Ne; ae++) {
            const He = $[ae];
            Gn(b, L, He, He.viewport);
          }
        } else Gn(b, L, Y);
        l !== null && (tt.updateMultisampleRenderTarget(l), tt.updateRenderTargetMipmap(l)),
          L.isScene === !0 && L.onAfterRender(R, L, Y),
          Pe.resetDefaultState(),
          (le = -1),
          (w = null),
          O.pop(),
          O.length > 0 ? (S = O[O.length - 1]) : (S = null),
          m.pop(),
          m.length > 0 ? (b = m[m.length - 1]) : (b = null);
      });
    function zn(L, Y, re, $) {
      if (L.visible === !1) return;
      if (L.layers.test(Y.layers)) {
        if (L.isGroup) re = L.renderOrder;
        else if (L.isLOD) L.autoUpdate === !0 && L.update(Y);
        else if (L.isLight) S.pushLight(L), L.castShadow && S.pushShadow(L);
        else if (L.isSprite) {
          if (!L.frustumCulled || Le.intersectsSprite(L)) {
            $ && gt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ze);
            const He = A.update(L),
              Ye = L.material;
            Ye.visible && b.push(L, He, Ye, re, gt.z, null);
          }
        } else if ((L.isMesh || L.isLine || L.isPoints) && (!L.frustumCulled || Le.intersectsObject(L))) {
          const He = A.update(L),
            Ye = L.material;
          if (
            ($ &&
              (L.boundingSphere !== void 0
                ? (L.boundingSphere === null && L.computeBoundingSphere(), gt.copy(L.boundingSphere.center))
                : (He.boundingSphere === null && He.computeBoundingSphere(), gt.copy(He.boundingSphere.center)),
              gt.applyMatrix4(L.matrixWorld).applyMatrix4(Ze)),
            Array.isArray(Ye))
          ) {
            const $e = He.groups;
            for (let nt = 0, qe = $e.length; nt < qe; nt++) {
              const it = $e[nt],
                Rt = Ye[it.materialIndex];
              Rt && Rt.visible && b.push(L, He, Rt, re, gt.z, it);
            }
          } else Ye.visible && b.push(L, He, Ye, re, gt.z, null);
        }
      }
      const Ne = L.children;
      for (let He = 0, Ye = Ne.length; He < Ye; He++) zn(Ne[He], Y, re, $);
    }
    function Gn(L, Y, re, $) {
      const ae = L.opaque,
        Ne = L.transmissive,
        He = L.transparent;
      S.setupLightsView(re),
        De === !0 && Be.setGlobalState(R.clippingPlanes, re),
        Ne.length > 0 && xr(ae, Ne, Y, re),
        $ && We.viewport(I.copy($)),
        ae.length > 0 && kn(ae, Y, re),
        Ne.length > 0 && kn(Ne, Y, re),
        He.length > 0 && kn(He, Y, re),
        We.buffers.depth.setTest(!0),
        We.buffers.depth.setMask(!0),
        We.buffers.color.setMask(!0),
        We.setPolygonOffset(!1);
    }
    function xr(L, Y, re, $) {
      const ae = Qe.isWebGL2;
      Ve === null &&
        (Ve = new Li(1, 1, {
          generateMipmaps: !0,
          type: ze.has('EXT_color_buffer_half_float') ? Hr : pi,
          minFilter: Br,
          samples: ae ? 4 : 0
        })),
        R.getDrawingBufferSize(Ge),
        ae ? Ve.setSize(Ge.x, Ge.y) : Ve.setSize(Rs(Ge.x), Rs(Ge.y));
      const Ne = R.getRenderTarget();
      R.setRenderTarget(Ve),
        R.getClearColor(W),
        (ne = R.getClearAlpha()),
        ne < 1 && R.setClearColor(16777215, 0.5),
        R.clear();
      const He = R.toneMapping;
      (R.toneMapping = di), kn(L, re, $), tt.updateMultisampleRenderTarget(Ve), tt.updateRenderTargetMipmap(Ve);
      let Ye = !1;
      for (let $e = 0, nt = Y.length; $e < nt; $e++) {
        const qe = Y[$e],
          it = qe.object,
          Rt = qe.geometry,
          Lt = qe.material,
          ln = qe.group;
        if (Lt.side === Qn && it.layers.test($.layers)) {
          const pn = Lt.side;
          (Lt.side = an),
            (Lt.needsUpdate = !0),
            jr(it, re, $, Rt, Lt, ln),
            (Lt.side = pn),
            (Lt.needsUpdate = !0),
            (Ye = !0);
        }
      }
      Ye === !0 && (tt.updateMultisampleRenderTarget(Ve), tt.updateRenderTargetMipmap(Ve)),
        R.setRenderTarget(Ne),
        R.setClearColor(W, ne),
        (R.toneMapping = He);
    }
    function kn(L, Y, re) {
      const $ = Y.isScene === !0 ? Y.overrideMaterial : null;
      for (let ae = 0, Ne = L.length; ae < Ne; ae++) {
        const He = L[ae],
          Ye = He.object,
          $e = He.geometry,
          nt = $ === null ? He.material : $,
          qe = He.group;
        Ye.layers.test(re.layers) && jr(Ye, Y, re, $e, nt, qe);
      }
    }
    function jr(L, Y, re, $, ae, Ne) {
      L.onBeforeRender(R, Y, re, $, ae, Ne),
        L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse, L.matrixWorld),
        L.normalMatrix.getNormalMatrix(L.modelViewMatrix),
        ae.onBeforeRender(R, Y, re, $, L, Ne),
        ae.transparent === !0 && ae.side === Qn && ae.forceSinglePass === !1
          ? ((ae.side = an),
            (ae.needsUpdate = !0),
            R.renderBufferDirect(re, Y, $, ae, L, Ne),
            (ae.side = mi),
            (ae.needsUpdate = !0),
            R.renderBufferDirect(re, Y, $, ae, L, Ne),
            (ae.side = Qn))
          : R.renderBufferDirect(re, Y, $, ae, L, Ne),
        L.onAfterRender(R, Y, re, $, ae, Ne);
    }
    function Ni(L, Y, re) {
      Y.isScene !== !0 && (Y = Tt);
      const $ = je.get(L),
        ae = S.state.lights,
        Ne = S.state.shadowsArray,
        He = ae.state.version,
        Ye = z.getParameters(L, ae.state, Ne, Y, re),
        $e = z.getProgramCacheKey(Ye);
      let nt = $.programs;
      ($.environment = L.isMeshStandardMaterial ? Y.environment : null),
        ($.fog = Y.fog),
        ($.envMap = (L.isMeshStandardMaterial ? Nt : vt).get(L.envMap || $.environment)),
        nt === void 0 && (L.addEventListener('dispose', be), (nt = new Map()), ($.programs = nt));
      let qe = nt.get($e);
      if (qe !== void 0) {
        if ($.currentProgram === qe && $.lightsStateVersion === He) return Yr(L, Ye), qe;
      } else
        (Ye.uniforms = z.getUniforms(L)),
          L.onBuild(re, Ye, R),
          L.onBeforeCompile(Ye, R),
          (qe = z.acquireProgram(Ye, $e)),
          nt.set($e, qe),
          ($.uniforms = Ye.uniforms);
      const it = $.uniforms;
      ((!L.isShaderMaterial && !L.isRawShaderMaterial) || L.clipping === !0) && (it.clippingPlanes = Be.uniform),
        Yr(L, Ye),
        ($.needsLights = Os(L)),
        ($.lightsStateVersion = He),
        $.needsLights &&
          ((it.ambientLightColor.value = ae.state.ambient),
          (it.lightProbe.value = ae.state.probe),
          (it.directionalLights.value = ae.state.directional),
          (it.directionalLightShadows.value = ae.state.directionalShadow),
          (it.spotLights.value = ae.state.spot),
          (it.spotLightShadows.value = ae.state.spotShadow),
          (it.rectAreaLights.value = ae.state.rectArea),
          (it.ltc_1.value = ae.state.rectAreaLTC1),
          (it.ltc_2.value = ae.state.rectAreaLTC2),
          (it.pointLights.value = ae.state.point),
          (it.pointLightShadows.value = ae.state.pointShadow),
          (it.hemisphereLights.value = ae.state.hemi),
          (it.directionalShadowMap.value = ae.state.directionalShadowMap),
          (it.directionalShadowMatrix.value = ae.state.directionalShadowMatrix),
          (it.spotShadowMap.value = ae.state.spotShadowMap),
          (it.spotLightMatrix.value = ae.state.spotLightMatrix),
          (it.spotLightMap.value = ae.state.spotLightMap),
          (it.pointShadowMap.value = ae.state.pointShadowMap),
          (it.pointShadowMatrix.value = ae.state.pointShadowMatrix));
      const Rt = qe.getUniforms(),
        Lt = bs.seqWithValue(Rt.seq, it);
      return ($.currentProgram = qe), ($.uniformsList = Lt), qe;
    }
    function Yr(L, Y) {
      const re = je.get(L);
      (re.outputColorSpace = Y.outputColorSpace),
        (re.instancing = Y.instancing),
        (re.instancingColor = Y.instancingColor),
        (re.skinning = Y.skinning),
        (re.morphTargets = Y.morphTargets),
        (re.morphNormals = Y.morphNormals),
        (re.morphColors = Y.morphColors),
        (re.morphTargetsCount = Y.morphTargetsCount),
        (re.numClippingPlanes = Y.numClippingPlanes),
        (re.numIntersection = Y.numClipIntersection),
        (re.vertexAlphas = Y.vertexAlphas),
        (re.vertexTangents = Y.vertexTangents),
        (re.toneMapping = Y.toneMapping);
    }
    function Kr(L, Y, re, $, ae) {
      Y.isScene !== !0 && (Y = Tt), tt.resetTextureUnits();
      const Ne = Y.fog,
        He = $.isMeshStandardMaterial ? Y.environment : null,
        Ye = l === null ? R.outputColorSpace : l.isXRRenderTarget === !0 ? l.texture.colorSpace : Hn,
        $e = ($.isMeshStandardMaterial ? Nt : vt).get($.envMap || He),
        nt = $.vertexColors === !0 && !!re.attributes.color && re.attributes.color.itemSize === 4,
        qe = !!re.attributes.tangent && (!!$.normalMap || $.anisotropy > 0),
        it = !!re.morphAttributes.position,
        Rt = !!re.morphAttributes.normal,
        Lt = !!re.morphAttributes.color;
      let ln = di;
      $.toneMapped && (l === null || l.isXRRenderTarget === !0) && (ln = R.toneMapping);
      const pn = re.morphAttributes.position || re.morphAttributes.normal || re.morphAttributes.color,
        Ut = pn !== void 0 ? pn.length : 0,
        ft = je.get($),
        Oi = S.state.lights;
      if (De === !0 && (Oe === !0 || L !== w)) {
        const jt = L === w && $.id === le;
        Be.setState($, L, jt);
      }
      let Dt = !1;
      $.version === ft.__version
        ? ((ft.needsLights && ft.lightsStateVersion !== Oi.state.version) ||
            ft.outputColorSpace !== Ye ||
            (ae.isInstancedMesh && ft.instancing === !1) ||
            (!ae.isInstancedMesh && ft.instancing === !0) ||
            (ae.isSkinnedMesh && ft.skinning === !1) ||
            (!ae.isSkinnedMesh && ft.skinning === !0) ||
            (ae.isInstancedMesh && ft.instancingColor === !0 && ae.instanceColor === null) ||
            (ae.isInstancedMesh && ft.instancingColor === !1 && ae.instanceColor !== null) ||
            ft.envMap !== $e ||
            ($.fog === !0 && ft.fog !== Ne) ||
            (ft.numClippingPlanes !== void 0 &&
              (ft.numClippingPlanes !== Be.numPlanes || ft.numIntersection !== Be.numIntersection)) ||
            ft.vertexAlphas !== nt ||
            ft.vertexTangents !== qe ||
            ft.morphTargets !== it ||
            ft.morphNormals !== Rt ||
            ft.morphColors !== Lt ||
            ft.toneMapping !== ln ||
            (Qe.isWebGL2 === !0 && ft.morphTargetsCount !== Ut)) &&
          (Dt = !0)
        : ((Dt = !0), (ft.__version = $.version));
      let Sn = ft.currentProgram;
      Dt === !0 && (Sn = Ni($, Y, ae));
      let Mr = !1,
        Ot = !1,
        Pn = !1;
      const Ft = Sn.getUniforms(),
        Vn = ft.uniforms;
      if (
        (We.useProgram(Sn.program) && ((Mr = !0), (Ot = !0), (Pn = !0)),
        $.id !== le && ((le = $.id), (Ot = !0)),
        Mr || w !== L)
      ) {
        Ft.setValue(q, 'projectionMatrix', L.projectionMatrix), Ft.setValue(q, 'viewMatrix', L.matrixWorldInverse);
        const jt = Ft.map.cameraPosition;
        jt !== void 0 && jt.setValue(q, gt.setFromMatrixPosition(L.matrixWorld)),
          Qe.logarithmicDepthBuffer && Ft.setValue(q, 'logDepthBufFC', 2 / (Math.log(L.far + 1) / Math.LN2)),
          ($.isMeshPhongMaterial ||
            $.isMeshToonMaterial ||
            $.isMeshLambertMaterial ||
            $.isMeshBasicMaterial ||
            $.isMeshStandardMaterial ||
            $.isShaderMaterial) &&
            Ft.setValue(q, 'isOrthographic', L.isOrthographicCamera === !0),
          w !== L && ((w = L), (Ot = !0), (Pn = !0));
      }
      if (ae.isSkinnedMesh) {
        Ft.setOptional(q, ae, 'bindMatrix'), Ft.setOptional(q, ae, 'bindMatrixInverse');
        const jt = ae.skeleton;
        jt &&
          (Qe.floatVertexTextures
            ? (jt.boneTexture === null && jt.computeBoneTexture(),
              Ft.setValue(q, 'boneTexture', jt.boneTexture, tt),
              Ft.setValue(q, 'boneTextureSize', jt.boneTextureSize))
            : console.warn(
                'THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.'
              ));
      }
      const Sr = re.morphAttributes;
      if (
        ((Sr.position !== void 0 || Sr.normal !== void 0 || (Sr.color !== void 0 && Qe.isWebGL2 === !0)) &&
          B.update(ae, re, Sn),
        (Ot || ft.receiveShadow !== ae.receiveShadow) &&
          ((ft.receiveShadow = ae.receiveShadow), Ft.setValue(q, 'receiveShadow', ae.receiveShadow)),
        $.isMeshGouraudMaterial &&
          $.envMap !== null &&
          ((Vn.envMap.value = $e),
          (Vn.flipEnvMap.value = $e.isCubeTexture && $e.isRenderTargetTexture === !1 ? -1 : 1)),
        Ot &&
          (Ft.setValue(q, 'toneMappingExposure', R.toneMappingExposure),
          ft.needsLights && Ns(Vn, Pn),
          Ne && $.fog === !0 && me.refreshFogUniforms(Vn, Ne),
          me.refreshMaterialUniforms(Vn, $, oe, ge, Ve),
          bs.upload(q, ft.uniformsList, Vn, tt)),
        $.isShaderMaterial &&
          $.uniformsNeedUpdate === !0 &&
          (bs.upload(q, ft.uniformsList, Vn, tt), ($.uniformsNeedUpdate = !1)),
        $.isSpriteMaterial && Ft.setValue(q, 'center', ae.center),
        Ft.setValue(q, 'modelViewMatrix', ae.modelViewMatrix),
        Ft.setValue(q, 'normalMatrix', ae.normalMatrix),
        Ft.setValue(q, 'modelMatrix', ae.matrixWorld),
        $.isShaderMaterial || $.isRawShaderMaterial)
      ) {
        const jt = $.uniformsGroups;
        for (let Fi = 0, Bi = jt.length; Fi < Bi; Fi++)
          if (Qe.isWebGL2) {
            const yr = jt[Fi];
            Xe.update(yr, Sn), Xe.bind(yr, Sn);
          } else console.warn('THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.');
      }
      return Sn;
    }
    function Ns(L, Y) {
      (L.ambientLightColor.needsUpdate = Y),
        (L.lightProbe.needsUpdate = Y),
        (L.directionalLights.needsUpdate = Y),
        (L.directionalLightShadows.needsUpdate = Y),
        (L.pointLights.needsUpdate = Y),
        (L.pointLightShadows.needsUpdate = Y),
        (L.spotLights.needsUpdate = Y),
        (L.spotLightShadows.needsUpdate = Y),
        (L.rectAreaLights.needsUpdate = Y),
        (L.hemisphereLights.needsUpdate = Y);
    }
    function Os(L) {
      return (
        L.isMeshLambertMaterial ||
        L.isMeshToonMaterial ||
        L.isMeshPhongMaterial ||
        L.isMeshStandardMaterial ||
        L.isShadowMaterial ||
        (L.isShaderMaterial && L.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return F;
    }),
      (this.getActiveMipmapLevel = function () {
        return k;
      }),
      (this.getRenderTarget = function () {
        return l;
      }),
      (this.setRenderTargetTextures = function (L, Y, re) {
        (je.get(L.texture).__webglTexture = Y), (je.get(L.depthTexture).__webglTexture = re);
        const $ = je.get(L);
        ($.__hasExternalTextures = !0),
          $.__hasExternalTextures &&
            (($.__autoAllocateDepthBuffer = re === void 0),
            $.__autoAllocateDepthBuffer ||
              (ze.has('WEBGL_multisampled_render_to_texture') === !0 &&
                (console.warn(
                  'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided'
                ),
                ($.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (L, Y) {
        const re = je.get(L);
        (re.__webglFramebuffer = Y), (re.__useDefaultFramebuffer = Y === void 0);
      }),
      (this.setRenderTarget = function (L, Y = 0, re = 0) {
        (l = L), (F = Y), (k = re);
        let $ = !0,
          ae = null,
          Ne = !1,
          He = !1;
        if (L) {
          const $e = je.get(L);
          $e.__useDefaultFramebuffer !== void 0
            ? (We.bindFramebuffer(q.FRAMEBUFFER, null), ($ = !1))
            : $e.__webglFramebuffer === void 0
            ? tt.setupRenderTarget(L)
            : $e.__hasExternalTextures &&
              tt.rebindTextures(L, je.get(L.texture).__webglTexture, je.get(L.depthTexture).__webglTexture);
          const nt = L.texture;
          (nt.isData3DTexture || nt.isDataArrayTexture || nt.isCompressedArrayTexture) && (He = !0);
          const qe = je.get(L).__webglFramebuffer;
          L.isWebGLCubeRenderTarget
            ? (Array.isArray(qe[Y]) ? (ae = qe[Y][re]) : (ae = qe[Y]), (Ne = !0))
            : Qe.isWebGL2 && L.samples > 0 && tt.useMultisampledRTT(L) === !1
            ? (ae = je.get(L).__webglMultisampledFramebuffer)
            : Array.isArray(qe)
            ? (ae = qe[re])
            : (ae = qe),
            I.copy(L.viewport),
            pe.copy(L.scissor),
            (ve = L.scissorTest);
        } else I.copy(de).multiplyScalar(oe).floor(), pe.copy(Q).multiplyScalar(oe).floor(), (ve = se);
        if (
          (We.bindFramebuffer(q.FRAMEBUFFER, ae) && Qe.drawBuffers && $ && We.drawBuffers(L, ae),
          We.viewport(I),
          We.scissor(pe),
          We.setScissorTest(ve),
          Ne)
        ) {
          const $e = je.get(L.texture);
          q.framebufferTexture2D(
            q.FRAMEBUFFER,
            q.COLOR_ATTACHMENT0,
            q.TEXTURE_CUBE_MAP_POSITIVE_X + Y,
            $e.__webglTexture,
            re
          );
        } else if (He) {
          const $e = je.get(L.texture),
            nt = Y || 0;
          q.framebufferTextureLayer(q.FRAMEBUFFER, q.COLOR_ATTACHMENT0, $e.__webglTexture, re || 0, nt);
        }
        le = -1;
      }),
      (this.readRenderTargetPixels = function (L, Y, re, $, ae, Ne, He) {
        if (!(L && L.isWebGLRenderTarget)) {
          console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');
          return;
        }
        let Ye = je.get(L).__webglFramebuffer;
        if ((L.isWebGLCubeRenderTarget && He !== void 0 && (Ye = Ye[He]), Ye)) {
          We.bindFramebuffer(q.FRAMEBUFFER, Ye);
          try {
            const $e = L.texture,
              nt = $e.format,
              qe = $e.type;
            if (nt !== Ln && Te.convert(nt) !== q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
              );
              return;
            }
            const it =
              qe === Hr && (ze.has('EXT_color_buffer_half_float') || (Qe.isWebGL2 && ze.has('EXT_color_buffer_float')));
            if (
              qe !== pi &&
              Te.convert(qe) !== q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(qe === fi && (Qe.isWebGL2 || ze.has('OES_texture_float') || ze.has('WEBGL_color_buffer_float'))) &&
              !it
            ) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
              );
              return;
            }
            Y >= 0 &&
              Y <= L.width - $ &&
              re >= 0 &&
              re <= L.height - ae &&
              q.readPixels(Y, re, $, ae, Te.convert(nt), Te.convert(qe), Ne);
          } finally {
            const $e = l !== null ? je.get(l).__webglFramebuffer : null;
            We.bindFramebuffer(q.FRAMEBUFFER, $e);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (L, Y, re = 0) {
        const $ = Math.pow(2, -re),
          ae = Math.floor(Y.image.width * $),
          Ne = Math.floor(Y.image.height * $);
        tt.setTexture2D(Y, 0), q.copyTexSubImage2D(q.TEXTURE_2D, re, 0, 0, L.x, L.y, ae, Ne), We.unbindTexture();
      }),
      (this.copyTextureToTexture = function (L, Y, re, $ = 0) {
        const ae = Y.image.width,
          Ne = Y.image.height,
          He = Te.convert(re.format),
          Ye = Te.convert(re.type);
        tt.setTexture2D(re, 0),
          q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL, re.flipY),
          q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL, re.premultiplyAlpha),
          q.pixelStorei(q.UNPACK_ALIGNMENT, re.unpackAlignment),
          Y.isDataTexture
            ? q.texSubImage2D(q.TEXTURE_2D, $, L.x, L.y, ae, Ne, He, Ye, Y.image.data)
            : Y.isCompressedTexture
            ? q.compressedTexSubImage2D(
                q.TEXTURE_2D,
                $,
                L.x,
                L.y,
                Y.mipmaps[0].width,
                Y.mipmaps[0].height,
                He,
                Y.mipmaps[0].data
              )
            : q.texSubImage2D(q.TEXTURE_2D, $, L.x, L.y, He, Ye, Y.image),
          $ === 0 && re.generateMipmaps && q.generateMipmap(q.TEXTURE_2D),
          We.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (L, Y, re, $, ae = 0) {
        if (R.isWebGL1Renderer) {
          console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.');
          return;
        }
        const Ne = L.max.x - L.min.x + 1,
          He = L.max.y - L.min.y + 1,
          Ye = L.max.z - L.min.z + 1,
          $e = Te.convert($.format),
          nt = Te.convert($.type);
        let qe;
        if ($.isData3DTexture) tt.setTexture3D($, 0), (qe = q.TEXTURE_3D);
        else if ($.isDataArrayTexture) tt.setTexture2DArray($, 0), (qe = q.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.'
          );
          return;
        }
        q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL, $.flipY),
          q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $.premultiplyAlpha),
          q.pixelStorei(q.UNPACK_ALIGNMENT, $.unpackAlignment);
        const it = q.getParameter(q.UNPACK_ROW_LENGTH),
          Rt = q.getParameter(q.UNPACK_IMAGE_HEIGHT),
          Lt = q.getParameter(q.UNPACK_SKIP_PIXELS),
          ln = q.getParameter(q.UNPACK_SKIP_ROWS),
          pn = q.getParameter(q.UNPACK_SKIP_IMAGES),
          Ut = re.isCompressedTexture ? re.mipmaps[0] : re.image;
        q.pixelStorei(q.UNPACK_ROW_LENGTH, Ut.width),
          q.pixelStorei(q.UNPACK_IMAGE_HEIGHT, Ut.height),
          q.pixelStorei(q.UNPACK_SKIP_PIXELS, L.min.x),
          q.pixelStorei(q.UNPACK_SKIP_ROWS, L.min.y),
          q.pixelStorei(q.UNPACK_SKIP_IMAGES, L.min.z),
          re.isDataTexture || re.isData3DTexture
            ? q.texSubImage3D(qe, ae, Y.x, Y.y, Y.z, Ne, He, Ye, $e, nt, Ut.data)
            : re.isCompressedArrayTexture
            ? (console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.'),
              q.compressedTexSubImage3D(qe, ae, Y.x, Y.y, Y.z, Ne, He, Ye, $e, Ut.data))
            : q.texSubImage3D(qe, ae, Y.x, Y.y, Y.z, Ne, He, Ye, $e, nt, Ut),
          q.pixelStorei(q.UNPACK_ROW_LENGTH, it),
          q.pixelStorei(q.UNPACK_IMAGE_HEIGHT, Rt),
          q.pixelStorei(q.UNPACK_SKIP_PIXELS, Lt),
          q.pixelStorei(q.UNPACK_SKIP_ROWS, ln),
          q.pixelStorei(q.UNPACK_SKIP_IMAGES, pn),
          ae === 0 && $.generateMipmaps && q.generateMipmap(qe),
          We.unbindTexture();
      }),
      (this.initTexture = function (L) {
        L.isCubeTexture
          ? tt.setTextureCube(L, 0)
          : L.isData3DTexture
          ? tt.setTexture3D(L, 0)
          : L.isDataArrayTexture || L.isCompressedArrayTexture
          ? tt.setTexture2DArray(L, 0)
          : tt.setTexture2D(L, 0),
          We.unbindTexture();
      }),
      (this.resetState = function () {
        (F = 0), (k = 0), (l = null), We.reset(), Pe.reset();
      }),
      typeof __THREE_DEVTOOLS__ < 'u' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
  }
  get coordinateSystem() {
    return ei;
  }
  get physicallyCorrectLights() {
    return (
      console.warn(
        'THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead.'
      ),
      !this.useLegacyLights
    );
  }
  set physicallyCorrectLights(e) {
    console.warn(
      'THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead.'
    ),
      (this.useLegacyLights = !e);
  }
  get outputEncoding() {
    return (
      console.warn('THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.'),
      this.outputColorSpace === Pt ? Ri : Ql
    );
  }
  set outputEncoding(e) {
    console.warn('THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.'),
      (this.outputColorSpace = e === Ri ? Pt : Hn);
  }
  get useLegacyLights() {
    return (
      console.warn(
        'THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.'
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    console.warn(
      'THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.'
    ),
      (this._useLegacyLights = e);
  }
}
class Sg extends _c {}
Sg.prototype.isWebGL1Renderer = !0;
class yg extends on {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = 'Scene'),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < 'u' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
}
class qa extends _r {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = 'LineBasicMaterial'),
      (this.color = new bt(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = 'round'),
      (this.linejoin = 'round'),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Al = new X(),
  wl = new X(),
  Rl = new Gt(),
  ba = new Ps(),
  Ss = new Xr();
class vc extends on {
  constructor(e = new hn(), t = new qa()) {
    super(),
      (this.isLine = !0),
      (this.type = 'Line'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material) ? e.material.slice() : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let s = 1, a = t.count; s < a; s++)
        Al.fromBufferAttribute(t, s - 1), wl.fromBufferAttribute(t, s), (n[s] = n[s - 1]), (n[s] += Al.distanceTo(wl));
      e.setAttribute('lineDistance', new Zt(n, 1));
    } else
      console.warn('THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.');
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      s = this.matrixWorld,
      a = e.params.Line.threshold,
      u = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ss.copy(n.boundingSphere),
      Ss.applyMatrix4(s),
      (Ss.radius += a),
      e.ray.intersectsSphere(Ss) === !1)
    )
      return;
    Rl.copy(s).invert(), ba.copy(e.ray).applyMatrix4(Rl);
    const c = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      h = c * c,
      p = new X(),
      g = new X(),
      _ = new X(),
      v = new X(),
      y = this.isLineSegments ? 2 : 1,
      T = n.index,
      S = n.attributes.position;
    if (T !== null) {
      const m = Math.max(0, u.start),
        O = Math.min(T.count, u.start + u.count);
      for (let R = m, D = O - 1; R < D; R += y) {
        const F = T.getX(R),
          k = T.getX(R + 1);
        if ((p.fromBufferAttribute(S, F), g.fromBufferAttribute(S, k), ba.distanceSqToSegment(p, g, v, _) > h))
          continue;
        v.applyMatrix4(this.matrixWorld);
        const le = e.ray.origin.distanceTo(v);
        le < e.near ||
          le > e.far ||
          t.push({
            distance: le,
            point: _.clone().applyMatrix4(this.matrixWorld),
            index: R,
            face: null,
            faceIndex: null,
            object: this
          });
      }
    } else {
      const m = Math.max(0, u.start),
        O = Math.min(S.count, u.start + u.count);
      for (let R = m, D = O - 1; R < D; R += y) {
        if ((p.fromBufferAttribute(S, R), g.fromBufferAttribute(S, R + 1), ba.distanceSqToSegment(p, g, v, _) > h))
          continue;
        v.applyMatrix4(this.matrixWorld);
        const k = e.ray.origin.distanceTo(v);
        k < e.near ||
          k > e.far ||
          t.push({
            distance: k,
            point: _.clone().applyMatrix4(this.matrixWorld),
            index: R,
            face: null,
            faceIndex: null,
            object: this
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let a = 0, u = s.length; a < u; a++) {
          const c = s[a].name || String(a);
          this.morphTargetInfluences.push(0), (this.morphTargetDictionary[c] = a);
        }
      }
    }
  }
}
const Cl = new X(),
  Ll = new X();
class Eg extends vc {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = 'LineSegments');
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let s = 0, a = t.count; s < a; s += 2)
        Cl.fromBufferAttribute(t, s),
          Ll.fromBufferAttribute(t, s + 1),
          (n[s] = s === 0 ? 0 : n[s - 1]),
          (n[s + 1] = n[s] + Cl.distanceTo(Ll));
      e.setAttribute('lineDistance', new Zt(n, 1));
    } else
      console.warn(
        'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
      );
    return this;
  }
}
class Na extends _r {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = 'PointsMaterial'),
      (this.color = new bt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Pl = new Gt(),
  Oa = new Ps(),
  ys = new Xr(),
  Es = new X();
class Dl extends on {
  constructor(e = new hn(), t = new Na()) {
    super(),
      (this.isPoints = !0),
      (this.type = 'Points'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material) ? e.material.slice() : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      s = this.matrixWorld,
      a = e.params.Points.threshold,
      u = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ys.copy(n.boundingSphere),
      ys.applyMatrix4(s),
      (ys.radius += a),
      e.ray.intersectsSphere(ys) === !1)
    )
      return;
    Pl.copy(s).invert(), Oa.copy(e.ray).applyMatrix4(Pl);
    const c = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      h = c * c,
      p = n.index,
      _ = n.attributes.position;
    if (p !== null) {
      const v = Math.max(0, u.start),
        y = Math.min(p.count, u.start + u.count);
      for (let T = v, b = y; T < b; T++) {
        const S = p.getX(T);
        Es.fromBufferAttribute(_, S), Ul(Es, S, h, s, e, t, this);
      }
    } else {
      const v = Math.max(0, u.start),
        y = Math.min(_.count, u.start + u.count);
      for (let T = v, b = y; T < b; T++) Es.fromBufferAttribute(_, T), Ul(Es, T, h, s, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let a = 0, u = s.length; a < u; a++) {
          const c = s[a].name || String(a);
          this.morphTargetInfluences.push(0), (this.morphTargetDictionary[c] = a);
        }
      }
    }
  }
}
function Ul(i, e, t, n, s, a, u) {
  const c = Oa.distanceSqToPoint(i);
  if (c < t) {
    const h = new X();
    Oa.closestPointToPoint(i, h), h.applyMatrix4(n);
    const p = s.ray.origin.distanceTo(h);
    if (p < s.near || p > s.far) return;
    a.push({ distance: p, distanceToRay: Math.sqrt(c), point: h, index: e, face: null, object: u });
  }
}
class ja extends hn {
  constructor(e = 1, t = 32, n = 16, s = 0, a = Math.PI * 2, u = 0, c = Math.PI) {
    super(),
      (this.type = 'SphereGeometry'),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: s,
        phiLength: a,
        thetaStart: u,
        thetaLength: c
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const h = Math.min(u + c, Math.PI);
    let p = 0;
    const g = [],
      _ = new X(),
      v = new X(),
      y = [],
      T = [],
      b = [],
      S = [];
    for (let m = 0; m <= n; m++) {
      const O = [],
        R = m / n;
      let D = 0;
      m === 0 && u === 0 ? (D = 0.5 / t) : m === n && h === Math.PI && (D = -0.5 / t);
      for (let F = 0; F <= t; F++) {
        const k = F / t;
        (_.x = -e * Math.cos(s + k * a) * Math.sin(u + R * c)),
          (_.y = e * Math.cos(u + R * c)),
          (_.z = e * Math.sin(s + k * a) * Math.sin(u + R * c)),
          T.push(_.x, _.y, _.z),
          v.copy(_).normalize(),
          b.push(v.x, v.y, v.z),
          S.push(k + D, 1 - R),
          O.push(p++);
      }
      g.push(O);
    }
    for (let m = 0; m < n; m++)
      for (let O = 0; O < t; O++) {
        const R = g[m][O + 1],
          D = g[m][O],
          F = g[m + 1][O],
          k = g[m + 1][O + 1];
        (m !== 0 || u > 0) && y.push(R, D, k), (m !== n - 1 || h < Math.PI) && y.push(D, F, k);
      }
    this.setIndex(y),
      this.setAttribute('position', new Zt(T, 3)),
      this.setAttribute('normal', new Zt(b, 3)),
      this.setAttribute('uv', new Zt(S, 2));
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new ja(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
const Il = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  }
};
class Tg {
  constructor(e, t, n) {
    const s = this;
    let a = !1,
      u = 0,
      c = 0,
      h;
    const p = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (g) {
        c++, a === !1 && s.onStart !== void 0 && s.onStart(g, u, c), (a = !0);
      }),
      (this.itemEnd = function (g) {
        u++, s.onProgress !== void 0 && s.onProgress(g, u, c), u === c && ((a = !1), s.onLoad !== void 0 && s.onLoad());
      }),
      (this.itemError = function (g) {
        s.onError !== void 0 && s.onError(g);
      }),
      (this.resolveURL = function (g) {
        return h ? h(g) : g;
      }),
      (this.setURLModifier = function (g) {
        return (h = g), this;
      }),
      (this.addHandler = function (g, _) {
        return p.push(g, _), this;
      }),
      (this.removeHandler = function (g) {
        const _ = p.indexOf(g);
        return _ !== -1 && p.splice(_, 2), this;
      }),
      (this.getHandler = function (g) {
        for (let _ = 0, v = p.length; _ < v; _ += 2) {
          const y = p[_],
            T = p[_ + 1];
          if ((y.global && (y.lastIndex = 0), y.test(g))) return T;
        }
        return null;
      });
  }
}
const bg = new Tg();
class Ya {
  constructor(e) {
    (this.manager = e !== void 0 ? e : bg),
      (this.crossOrigin = 'anonymous'),
      (this.withCredentials = !1),
      (this.path = ''),
      (this.resourcePath = ''),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (s, a) {
      n.load(e, s, t, a);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
Ya.DEFAULT_MATERIAL_NAME = '__DEFAULT';
class Ag extends Ya {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    this.path !== void 0 && (e = this.path + e), (e = this.manager.resolveURL(e));
    const a = this,
      u = Il.get(e);
    if (u !== void 0)
      return (
        a.manager.itemStart(e),
        setTimeout(function () {
          t && t(u), a.manager.itemEnd(e);
        }, 0),
        u
      );
    const c = Gr('img');
    function h() {
      g(), Il.add(e, this), t && t(this), a.manager.itemEnd(e);
    }
    function p(_) {
      g(), s && s(_), a.manager.itemError(e), a.manager.itemEnd(e);
    }
    function g() {
      c.removeEventListener('load', h, !1), c.removeEventListener('error', p, !1);
    }
    return (
      c.addEventListener('load', h, !1),
      c.addEventListener('error', p, !1),
      e.slice(0, 5) !== 'data:' && this.crossOrigin !== void 0 && (c.crossOrigin = this.crossOrigin),
      a.manager.itemStart(e),
      (c.src = e),
      c
    );
  }
}
class Fa extends Ya {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    const a = new fn(),
      u = new Ag(this.manager);
    return (
      u.setCrossOrigin(this.crossOrigin),
      u.setPath(this.path),
      u.load(
        e,
        function (c) {
          (a.image = c), (a.needsUpdate = !0), t !== void 0 && t(a);
        },
        n,
        s
      ),
      a
    );
  }
}
class Nl {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this;
  }
  makeSafe() {
    return (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)), (this.phi = Math.acos(tn(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wg extends Eg {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      s = new hn();
    s.setAttribute('position', new Zt(t, 3)), s.setAttribute('color', new Zt(n, 3));
    const a = new qa({ vertexColors: !0, toneMapped: !1 });
    super(s, a), (this.type = 'AxesHelper');
  }
  setColors(e, t, n) {
    const s = new bt(),
      a = this.geometry.attributes.color.array;
    return (
      s.set(e),
      s.toArray(a, 0),
      s.toArray(a, 3),
      s.set(t),
      s.toArray(a, 6),
      s.toArray(a, 9),
      s.set(n),
      s.toArray(a, 12),
      s.toArray(a, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < 'u' &&
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', { detail: { revision: za } }));
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = za));
const Ol = { type: 'change' },
  Aa = { type: 'start' },
  Fl = { type: 'end' },
  Ts = new Ps(),
  Bl = new ci(),
  Rg = Math.cos(70 * ff.DEG2RAD);
class Cg extends Ui {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = 'none'),
      (this.enabled = !0),
      (this.target = new X()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' }),
      (this.mouseButtons = { LEFT: Gi.ROTATE, MIDDLE: Gi.DOLLY, RIGHT: Gi.PAN }),
      (this.touches = { ONE: ki.ROTATE, TWO: ki.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return c.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return c.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (B) {
        B.addEventListener('keydown', A), (this._domElementKeyEvents = B);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener('keydown', A), (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target), n.position0.copy(n.object.position), (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(Ol),
          n.update(),
          (a = s.NONE);
      }),
      (this.update = (function () {
        const B = new X(),
          fe = new Pi().setFromUnitVectors(e.up, new X(0, 1, 0)),
          we = fe.clone().invert(),
          Te = new X(),
          Pe = new Pi(),
          Xe = new X(),
          ut = 2 * Math.PI;
        return function (Re = null) {
          const Z = n.object.position;
          B.copy(Z).sub(n.target),
            B.applyQuaternion(fe),
            c.setFromVector3(B),
            n.autoRotate && a === s.NONE && pe(w(Re)),
            n.enableDamping
              ? ((c.theta += h.theta * n.dampingFactor), (c.phi += h.phi * n.dampingFactor))
              : ((c.theta += h.theta), (c.phi += h.phi));
          let _e = n.minAzimuthAngle,
            be = n.maxAzimuthAngle;
          isFinite(_e) &&
            isFinite(be) &&
            (_e < -Math.PI ? (_e += ut) : _e > Math.PI && (_e -= ut),
            be < -Math.PI ? (be += ut) : be > Math.PI && (be -= ut),
            _e <= be
              ? (c.theta = Math.max(_e, Math.min(be, c.theta)))
              : (c.theta = c.theta > (_e + be) / 2 ? Math.max(_e, c.theta) : Math.min(be, c.theta))),
            (c.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, c.phi))),
            c.makeSafe(),
            n.enableDamping === !0 ? n.target.addScaledVector(g, n.dampingFactor) : n.target.add(g),
            (n.zoomToCursor && k) || n.object.isOrthographicCamera
              ? (c.radius = xe(c.radius))
              : (c.radius = xe(c.radius * p)),
            B.setFromSpherical(c),
            B.applyQuaternion(we),
            Z.copy(n.target).add(B),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((h.theta *= 1 - n.dampingFactor),
                (h.phi *= 1 - n.dampingFactor),
                g.multiplyScalar(1 - n.dampingFactor))
              : (h.set(0, 0, 0), g.set(0, 0, 0));
          let ot = !1;
          if (n.zoomToCursor && k) {
            let st = null;
            if (n.object.isPerspectiveCamera) {
              const at = B.length();
              st = xe(at * p);
              const qt = at - st;
              n.object.position.addScaledVector(D, qt), n.object.updateMatrixWorld();
            } else if (n.object.isOrthographicCamera) {
              const at = new X(F.x, F.y, 0);
              at.unproject(n.object),
                (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / p))),
                n.object.updateProjectionMatrix(),
                (ot = !0);
              const qt = new X(F.x, F.y, 0);
              qt.unproject(n.object),
                n.object.position.sub(qt).add(at),
                n.object.updateMatrixWorld(),
                (st = B.length());
            } else
              console.warn('WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.'),
                (n.zoomToCursor = !1);
            st !== null &&
              (this.screenSpacePanning
                ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(st).add(n.object.position)
                : (Ts.origin.copy(n.object.position),
                  Ts.direction.set(0, 0, -1).transformDirection(n.object.matrix),
                  Math.abs(n.object.up.dot(Ts.direction)) < Rg
                    ? e.lookAt(n.target)
                    : (Bl.setFromNormalAndCoplanarPoint(n.object.up, n.target), Ts.intersectPlane(Bl, n.target))));
          } else
            n.object.isOrthographicCamera &&
              ((n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / p))),
              n.object.updateProjectionMatrix(),
              (ot = !0));
          return (
            (p = 1),
            (k = !1),
            ot ||
            Te.distanceToSquared(n.object.position) > u ||
            8 * (1 - Pe.dot(n.object.quaternion)) > u ||
            Xe.distanceToSquared(n.target) > 0
              ? (n.dispatchEvent(Ol),
                Te.copy(n.object.position),
                Pe.copy(n.object.quaternion),
                Xe.copy(n.target),
                (ot = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener('contextmenu', Me),
          n.domElement.removeEventListener('pointerdown', je),
          n.domElement.removeEventListener('pointercancel', vt),
          n.domElement.removeEventListener('wheel', P),
          n.domElement.removeEventListener('pointermove', tt),
          n.domElement.removeEventListener('pointerup', vt),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener('keydown', A), (n._domElementKeyEvents = null));
      });
    const n = this,
      s = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6
      };
    let a = s.NONE;
    const u = 1e-6,
      c = new Nl(),
      h = new Nl();
    let p = 1;
    const g = new X(),
      _ = new dt(),
      v = new dt(),
      y = new dt(),
      T = new dt(),
      b = new dt(),
      S = new dt(),
      m = new dt(),
      O = new dt(),
      R = new dt(),
      D = new X(),
      F = new dt();
    let k = !1;
    const l = [],
      le = {};
    function w(B) {
      return B !== null ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * B : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function I() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function pe(B) {
      h.theta -= B;
    }
    function ve(B) {
      h.phi -= B;
    }
    const W = (function () {
        const B = new X();
        return function (we, Te) {
          B.setFromMatrixColumn(Te, 0), B.multiplyScalar(-we), g.add(B);
        };
      })(),
      ne = (function () {
        const B = new X();
        return function (we, Te) {
          n.screenSpacePanning === !0
            ? B.setFromMatrixColumn(Te, 1)
            : (B.setFromMatrixColumn(Te, 0), B.crossVectors(n.object.up, B)),
            B.multiplyScalar(we),
            g.add(B);
        };
      })(),
      ie = (function () {
        const B = new X();
        return function (we, Te) {
          const Pe = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const Xe = n.object.position;
            B.copy(Xe).sub(n.target);
            let ut = B.length();
            (ut *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              W((2 * we * ut) / Pe.clientHeight, n.object.matrix),
              ne((2 * Te * ut) / Pe.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (W((we * (n.object.right - n.object.left)) / n.object.zoom / Pe.clientWidth, n.object.matrix),
                ne((Te * (n.object.top - n.object.bottom)) / n.object.zoom / Pe.clientHeight, n.object.matrix))
              : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'),
                (n.enablePan = !1));
        };
      })();
    function ge(B) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (p /= B)
        : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'),
          (n.enableZoom = !1));
    }
    function oe(B) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (p *= B)
        : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'),
          (n.enableZoom = !1));
    }
    function he(B) {
      if (!n.zoomToCursor) return;
      k = !0;
      const fe = n.domElement.getBoundingClientRect(),
        we = B.clientX - fe.left,
        Te = B.clientY - fe.top,
        Pe = fe.width,
        Xe = fe.height;
      (F.x = (we / Pe) * 2 - 1),
        (F.y = -(Te / Xe) * 2 + 1),
        D.set(F.x, F.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function xe(B) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, B));
    }
    function de(B) {
      _.set(B.clientX, B.clientY);
    }
    function Q(B) {
      he(B), m.set(B.clientX, B.clientY);
    }
    function se(B) {
      T.set(B.clientX, B.clientY);
    }
    function Le(B) {
      v.set(B.clientX, B.clientY), y.subVectors(v, _).multiplyScalar(n.rotateSpeed);
      const fe = n.domElement;
      pe((2 * Math.PI * y.x) / fe.clientHeight), ve((2 * Math.PI * y.y) / fe.clientHeight), _.copy(v), n.update();
    }
    function De(B) {
      O.set(B.clientX, B.clientY), R.subVectors(O, m), R.y > 0 ? ge(I()) : R.y < 0 && oe(I()), m.copy(O), n.update();
    }
    function Oe(B) {
      b.set(B.clientX, B.clientY), S.subVectors(b, T).multiplyScalar(n.panSpeed), ie(S.x, S.y), T.copy(b), n.update();
    }
    function Ve(B) {
      he(B), B.deltaY < 0 ? oe(I()) : B.deltaY > 0 && ge(I()), n.update();
    }
    function Ze(B) {
      let fe = !1;
      switch (B.code) {
        case n.keys.UP:
          B.ctrlKey || B.metaKey || B.shiftKey
            ? ve((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : ie(0, n.keyPanSpeed),
            (fe = !0);
          break;
        case n.keys.BOTTOM:
          B.ctrlKey || B.metaKey || B.shiftKey
            ? ve((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : ie(0, -n.keyPanSpeed),
            (fe = !0);
          break;
        case n.keys.LEFT:
          B.ctrlKey || B.metaKey || B.shiftKey
            ? pe((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : ie(n.keyPanSpeed, 0),
            (fe = !0);
          break;
        case n.keys.RIGHT:
          B.ctrlKey || B.metaKey || B.shiftKey
            ? pe((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : ie(-n.keyPanSpeed, 0),
            (fe = !0);
          break;
      }
      fe && (B.preventDefault(), n.update());
    }
    function Ge() {
      if (l.length === 1) _.set(l[0].pageX, l[0].pageY);
      else {
        const B = 0.5 * (l[0].pageX + l[1].pageX),
          fe = 0.5 * (l[0].pageY + l[1].pageY);
        _.set(B, fe);
      }
    }
    function gt() {
      if (l.length === 1) T.set(l[0].pageX, l[0].pageY);
      else {
        const B = 0.5 * (l[0].pageX + l[1].pageX),
          fe = 0.5 * (l[0].pageY + l[1].pageY);
        T.set(B, fe);
      }
    }
    function Tt() {
      const B = l[0].pageX - l[1].pageX,
        fe = l[0].pageY - l[1].pageY,
        we = Math.sqrt(B * B + fe * fe);
      m.set(0, we);
    }
    function rt() {
      n.enableZoom && Tt(), n.enablePan && gt();
    }
    function q() {
      n.enableZoom && Tt(), n.enableRotate && Ge();
    }
    function Ct(B) {
      if (l.length == 1) v.set(B.pageX, B.pageY);
      else {
        const we = ee(B),
          Te = 0.5 * (B.pageX + we.x),
          Pe = 0.5 * (B.pageY + we.y);
        v.set(Te, Pe);
      }
      y.subVectors(v, _).multiplyScalar(n.rotateSpeed);
      const fe = n.domElement;
      pe((2 * Math.PI * y.x) / fe.clientHeight), ve((2 * Math.PI * y.y) / fe.clientHeight), _.copy(v);
    }
    function ze(B) {
      if (l.length === 1) b.set(B.pageX, B.pageY);
      else {
        const fe = ee(B),
          we = 0.5 * (B.pageX + fe.x),
          Te = 0.5 * (B.pageY + fe.y);
        b.set(we, Te);
      }
      S.subVectors(b, T).multiplyScalar(n.panSpeed), ie(S.x, S.y), T.copy(b);
    }
    function Qe(B) {
      const fe = ee(B),
        we = B.pageX - fe.x,
        Te = B.pageY - fe.y,
        Pe = Math.sqrt(we * we + Te * Te);
      O.set(0, Pe), R.set(0, Math.pow(O.y / m.y, n.zoomSpeed)), ge(R.y), m.copy(O);
    }
    function We(B) {
      n.enableZoom && Qe(B), n.enablePan && ze(B);
    }
    function St(B) {
      n.enableZoom && Qe(B), n.enableRotate && Ct(B);
    }
    function je(B) {
      n.enabled !== !1 &&
        (l.length === 0 &&
          (n.domElement.setPointerCapture(B.pointerId),
          n.domElement.addEventListener('pointermove', tt),
          n.domElement.addEventListener('pointerup', vt)),
        ye(B),
        B.pointerType === 'touch' ? z(B) : Nt(B));
    }
    function tt(B) {
      n.enabled !== !1 && (B.pointerType === 'touch' ? me(B) : yt(B));
    }
    function vt(B) {
      Be(B),
        l.length === 0 &&
          (n.domElement.releasePointerCapture(B.pointerId),
          n.domElement.removeEventListener('pointermove', tt),
          n.domElement.removeEventListener('pointerup', vt)),
        n.dispatchEvent(Fl),
        (a = s.NONE);
    }
    function Nt(B) {
      let fe;
      switch (B.button) {
        case 0:
          fe = n.mouseButtons.LEFT;
          break;
        case 1:
          fe = n.mouseButtons.MIDDLE;
          break;
        case 2:
          fe = n.mouseButtons.RIGHT;
          break;
        default:
          fe = -1;
      }
      switch (fe) {
        case Gi.DOLLY:
          if (n.enableZoom === !1) return;
          Q(B), (a = s.DOLLY);
          break;
        case Gi.ROTATE:
          if (B.ctrlKey || B.metaKey || B.shiftKey) {
            if (n.enablePan === !1) return;
            se(B), (a = s.PAN);
          } else {
            if (n.enableRotate === !1) return;
            de(B), (a = s.ROTATE);
          }
          break;
        case Gi.PAN:
          if (B.ctrlKey || B.metaKey || B.shiftKey) {
            if (n.enableRotate === !1) return;
            de(B), (a = s.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            se(B), (a = s.PAN);
          }
          break;
        default:
          a = s.NONE;
      }
      a !== s.NONE && n.dispatchEvent(Aa);
    }
    function yt(B) {
      switch (a) {
        case s.ROTATE:
          if (n.enableRotate === !1) return;
          Le(B);
          break;
        case s.DOLLY:
          if (n.enableZoom === !1) return;
          De(B);
          break;
        case s.PAN:
          if (n.enablePan === !1) return;
          Oe(B);
          break;
      }
    }
    function P(B) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        a !== s.NONE ||
        (B.preventDefault(), n.dispatchEvent(Aa), Ve(B), n.dispatchEvent(Fl));
    }
    function A(B) {
      n.enabled === !1 || n.enablePan === !1 || Ze(B);
    }
    function z(B) {
      switch ((Ee(B), l.length)) {
        case 1:
          switch (n.touches.ONE) {
            case ki.ROTATE:
              if (n.enableRotate === !1) return;
              Ge(), (a = s.TOUCH_ROTATE);
              break;
            case ki.PAN:
              if (n.enablePan === !1) return;
              gt(), (a = s.TOUCH_PAN);
              break;
            default:
              a = s.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case ki.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              rt(), (a = s.TOUCH_DOLLY_PAN);
              break;
            case ki.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              q(), (a = s.TOUCH_DOLLY_ROTATE);
              break;
            default:
              a = s.NONE;
          }
          break;
        default:
          a = s.NONE;
      }
      a !== s.NONE && n.dispatchEvent(Aa);
    }
    function me(B) {
      switch ((Ee(B), a)) {
        case s.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Ct(B), n.update();
          break;
        case s.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ze(B), n.update();
          break;
        case s.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          We(B), n.update();
          break;
        case s.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          St(B), n.update();
          break;
        default:
          a = s.NONE;
      }
    }
    function Me(B) {
      n.enabled !== !1 && B.preventDefault();
    }
    function ye(B) {
      l.push(B);
    }
    function Be(B) {
      delete le[B.pointerId];
      for (let fe = 0; fe < l.length; fe++)
        if (l[fe].pointerId == B.pointerId) {
          l.splice(fe, 1);
          return;
        }
    }
    function Ee(B) {
      let fe = le[B.pointerId];
      fe === void 0 && ((fe = new dt()), (le[B.pointerId] = fe)), fe.set(B.pageX, B.pageY);
    }
    function ee(B) {
      const fe = B.pointerId === l[0].pointerId ? l[1] : l[0];
      return le[fe.pointerId];
    }
    n.domElement.addEventListener('contextmenu', Me),
      n.domElement.addEventListener('pointerdown', je),
      n.domElement.addEventListener('pointercancel', vt),
      n.domElement.addEventListener('wheel', P, { passive: !1 }),
      this.update();
  }
}
const kr = { width: 1024, height: 512 },
  sr = 40,
  Lg = kr.width / kr.height,
  Is = new _c();
Is.setSize(kr.width, kr.height);
document.querySelector('#container').appendChild(Is.domElement);
const fr = new yg(),
  Vr = new Mn(55, Lg, 0.1, 1e11);
Vr.position.set(-0.5, 0, 0);
Vr.lookAt(new X(0, -50, 0));
const Ii = new Cg(Vr, Is.domElement);
Ii.target.set(0, 0, 0);
Ii.enableZoom = !1;
Ii.enablePan = !1;
Ii.minPolarAngle = Math.PI / 2;
Ii.rotateSpeed = 0.25;
Ii.update();
const Hl = new hn(),
  zl = new hn(),
  Pg = new wg(3);
fr.add(Pg);
const Dg = new ja(90, 32, 32),
  Ka = new Fa().load('./bg.svg');
Ka.magFilter = un;
Ka.minFilter = Kt;
const Ug = new Va({ map: Ka, transparent: !1, side: an }),
  xc = new ti(Dg, Ug);
xc.position.set(0, 0, 0);
fr.add(xc);
const Ba = new Ha(),
  Ig = async () => {
    const e = await (await fetch('./constellations.json')).json(),
      t = [],
      n = [],
      s = new qa({ color: '#40e0d0' });
    e.forEach(y => {
      const T = { common: [], exact: [] };
      y.stars.forEach((R, D) => {
        R.forEach(({ x: F, y: k, z: l, rus: le }, w) => {
          const I = new X(F, k, l);
          I.normalize();
          const [pe, ve, W] = [0, 1, 2].map(ie => I.getComponent(ie));
          le ? T.exact.push(pe * sr, ve * sr, W * sr) : T.common.push(pe * sr, ve * sr, W * sr);
          const ne = new X(F, k, l);
          if ((le && Ba.add({ position: ne, name: le }), w === 0 && D === 0)) {
            const ie = new X(F, k, l);
            Ba.add({ position: ie, name: y.name });
          }
        });
      });
      const b = new hn(),
        S = T.common.concat(T.exact),
        m = new Zt(S, 3);
      b.setAttribute('position', m);
      const O = new vc(b, s);
      fr.add(O), n.push(...T.exact), t.push(...T.common);
    });
    const a = new Zt(t, 3),
      u = new Zt(n, 3);
    Hl.setAttribute('position', a), zl.setAttribute('position', u);
    const c = new Fa().load('./star.svg'),
      h = new Fa().load('./common.svg');
    [c, h].forEach(y => {
      (y.mapping = void 0), (y.magFilter = un), (y.minFilter = Kt);
    });
    const p = new Na({ color: 16777215, size: 5, map: c, blending: As, transparent: !0 }),
      g = new Na({ color: 16777215, size: 2, map: h, blending: As, transparent: !0 }),
      _ = new Dl(Hl, g),
      v = new Dl(zl, p);
    fr.add(_), fr.add(v);
  };
function Mc() {
  requestAnimationFrame(Mc), Ii.update(), Is.render(fr, Vr), Ba.update({ camera: Vr, screen: kr });
}
Mc();
Ig();
//# sourceMappingURL=index-ed2e8c38.js.map
