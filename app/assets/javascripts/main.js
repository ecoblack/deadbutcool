!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    function g(e, t) {
        var n = (t = t || ne).createElement("script");
        n.text = e,
        t.head.appendChild(n).parentNode.removeChild(n)
    }
    function a(e) {
        var t = !!e && "length"in e && e.length
          , n = ge.type(e);
        return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function t(e, n, i) {
        return ge.isFunction(n) ? ge.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? ge.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? ge.grep(e, function(e) {
            return -1 < ae.call(n, e) !== i
        }) : ke.test(n) ? ge.filter(n, e, i) : (n = ge.filter(n, e),
        ge.grep(e, function(e) {
            return -1 < ae.call(n, e) !== i && 1 === e.nodeType
        }))
    }
    function n(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function c(e) {
        var n = {};
        return ge.each(e.match(Ne) || [], function(e, t) {
            n[t] = !0
        }),
        n
    }
    function d(e) {
        return e
    }
    function f(e) {
        throw e
    }
    function l(e, t, n, i) {
        var r;
        try {
            e && ge.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && ge.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(undefined, [e].slice(i))
        } catch (e) {
            n.apply(undefined, [e])
        }
    }
    function i() {
        ne.removeEventListener("DOMContentLoaded", i),
        T.removeEventListener("load", i),
        ge.ready()
    }
    function r() {
        this.expando = ge.expando + r.uid++
    }
    function o(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
    }
    function p(e, t, n) {
        var i;
        if (n === undefined && 1 === e.nodeType)
            if (i = "data-" + t.replace(Oe, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = o(n)
                } catch (r) {}
                He.set(e, t, n)
            } else
                n = undefined;
        return n
    }
    function h(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return ge.css(e, t, "")
        }
        , l = a(), u = n && n[3] || (ge.cssNumber[t] ? "" : "px"), c = (ge.cssNumber[t] || "px" !== u && +l) && $e.exec(ge.css(e, t));
        if (c && c[3] !== u)
            for (u = u || c[3],
            n = n || [],
            c = +l || 1; c /= o = o || ".5",
            ge.style(e, t, c + u),
            o !== (o = a() / l) && 1 !== o && --s; )
                ;
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    function m(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = _e[i];
        return r || (t = n.body.appendChild(n.createElement(i)),
        r = ge.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === r && (r = "block"),
        _e[i] = r)
    }
    function v(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
            (i = e[o]).style && (n = i.style.display,
            t ? ("none" === n && (r[o] = Ie.get(i, "display") || null,
            r[o] || (i.style.display = "")),
            "" === i.style.display && ze(i) && (r[o] = m(i))) : "none" !== n && (r[o] = "none",
            Ie.set(i, "display", n)));
        for (o = 0; o < s; o++)
            null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    function y(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        t === undefined || t && u(e, t) ? ge.merge([e], n) : n
    }
    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"))
    }
    function x(e, t, n, i, r) {
        for (var o, s, a, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === ge.type(o))
                    ge.merge(f, o.nodeType ? [o] : o);
                else if (Je.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (Ve.exec(o) || ["", ""])[1].toLowerCase(),
                    l = Ye[a] || Ye._default,
                    s.innerHTML = l[1] + ge.htmlPrefilter(o) + l[2],
                    c = l[0]; c--; )
                        s = s.lastChild;
                    ge.merge(f, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (d.textContent = "",
        p = 0; o = f[p++]; )
            if (i && -1 < ge.inArray(o, i))
                r && r.push(o);
            else if (u = ge.contains(o.ownerDocument, o),
            s = y(d.appendChild(o), "script"),
            u && b(s),
            n)
                for (c = 0; o = s[c++]; )
                    Ue.test(o.type || "") && n.push(o);
        return d
    }
    function s() {
        return !0
    }
    function w() {
        return !1
    }
    function S() {
        try {
            return ne.activeElement
        } catch (e) {}
    }
    function C(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = undefined),
            t)
                C(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = undefined) : null == r && ("string" == typeof n ? (r = i,
        i = undefined) : (r = i,
        i = n,
        n = undefined)),
        !1 === r)
            r = w;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        (r = function(e) {
            return ge().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = ge.guid++)),
        e.each(function() {
            ge.event.add(this, t, r, i, n)
        })
    }
    function k(e, t) {
        return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") && ge(">tbody", e)[0] || e
    }
    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function j(e) {
        var t = ot.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function D(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Ie.hasData(e) && (o = Ie.access(e),
            s = Ie.set(t, o),
            u = o.events))
                for (r in delete s.handle,
                s.events = {},
                u)
                    for (n = 0,
                    i = u[r].length; n < i; n++)
                        ge.event.add(t, r, u[r][n]);
            He.hasData(e) && (a = He.access(e),
            l = ge.extend({}, a),
            He.set(t, l))
        }
    }
    function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function N(n, i, r, o) {
        i = oe.apply([], i);
        var e, t, s, a, l, u, c = 0, d = n.length, f = d - 1, p = i[0], h = ge.isFunction(p);
        if (h || 1 < d && "string" == typeof p && !pe.checkClone && rt.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = p.call(this, e, t.html())),
                N(t, i, r, o)
            });
        if (d && (t = (e = x(i, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (a = (s = ge.map(y(e, "script"), E)).length; c < d; c++)
                l = e,
                c !== f && (l = ge.clone(l, !0, !0),
                a && ge.merge(s, y(l, "script"))),
                r.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument,
                ge.map(s, j),
                c = 0; c < a; c++)
                    l = s[c],
                    Ue.test(l.type || "") && !Ie.access(l, "globalEval") && ge.contains(u, l) && (l.src ? ge._evalUrl && ge._evalUrl(l.src) : g(l.textContent.replace(st, ""), u))
        }
        return n
    }
    function P(e, t, n) {
        for (var i, r = t ? ge.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || ge.cleanData(y(i)),
            i.parentNode && (n && ge.contains(i.ownerDocument, i) && b(y(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    function q(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || ut(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ge.contains(e.ownerDocument, e) || (s = ge.style(e, t)),
        !pe.pixelMarginRight() && lt.test(s) && at.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        s !== undefined ? s + "" : s
    }
    function L(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function M(e) {
        if (e in gt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--; )
            if ((e = ht[n] + t)in gt)
                return e
    }
    function I(e) {
        var t = ge.cssProps[e];
        return t || (t = ge.cssProps[e] = M(e) || e),
        t
    }
    function H(e, t, n) {
        var i = $e.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function F(e, t, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (s += ge.css(e, n + We[o], !0, r)),
            i ? ("content" === n && (s -= ge.css(e, "padding" + We[o], !0, r)),
            "margin" !== n && (s -= ge.css(e, "border" + We[o] + "Width", !0, r))) : (s += ge.css(e, "padding" + We[o], !0, r),
            "padding" !== n && (s += ge.css(e, "border" + We[o] + "Width", !0, r)));
        return s
    }
    function O(e, t, n) {
        var i, r = ut(e), o = q(e, t, r), s = "border-box" === ge.css(e, "boxSizing", !1, r);
        return lt.test(o) ? o : (i = s && (pe.boxSizingReliable() || o === e.style[t]),
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (o = parseFloat(o) || 0) + F(e, t, n || (s ? "border" : "content"), i, r) + "px")
    }
    function R(e, t, n, i, r) {
        return new R.prototype.init(e,t,n,i,r)
    }
    function $() {
        vt && (!1 === ne.hidden && T.requestAnimationFrame ? T.requestAnimationFrame($) : T.setTimeout($, ge.fx.interval),
        ge.fx.tick())
    }
    function W() {
        return T.setTimeout(function() {
            mt = undefined
        }),
        mt = ge.now()
    }
    function z(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = We[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function B(e, t, n) {
        for (var i, r = (V.tweeners[t] || []).concat(V.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function _(e, t, n) {
        var i, r, o, s, a, l, u, c, d = "width"in t || "height"in t, f = this, p = {}, h = e.style, g = e.nodeType && ze(e), m = Ie.get(e, "fxshow");
        for (i in n.queue || (null == (s = ge._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
        a = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || a()
        }
        ),
        s.unqueued++,
        f.always(function() {
            f.always(function() {
                s.unqueued--,
                ge.queue(e, "fx").length || s.empty.fire()
            })
        })),
        t)
            if (r = t[i],
            xt.test(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || m[i] === undefined)
                        continue;
                    g = !0
                }
                p[i] = m && m[i] || ge.style(e, i)
            }
        if ((l = !ge.isEmptyObject(t)) || !ge.isEmptyObject(p))
            for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            null == (u = m && m.display) && (u = Ie.get(e, "display")),
            "none" === (c = ge.css(e, "display")) && (u ? c = u : (v([e], !0),
            u = e.style.display || u,
            c = ge.css(e, "display"),
            v([e]))),
            ("inline" === c || "inline-block" === c && null != u) && "none" === ge.css(e, "float") && (l || (f.done(function() {
                h.display = u
            }),
            null == u && (c = h.display,
            u = "none" === c ? "" : c)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            f.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            l = !1,
            p)
                l || (m ? "hidden"in m && (g = m.hidden) : m = Ie.access(e, "fxshow", {
                    display: u
                }),
                o && (m.hidden = !g),
                g && v([e], !0),
                f.done(function() {
                    for (i in g || v([e]),
                    Ie.remove(e, "fxshow"),
                    p)
                        ge.style(e, i, p[i])
                })),
                l = B(g ? m[i] : 0, i, f),
                i in m || (m[i] = l.start,
                g && (l.end = l.start,
                l.start = 0))
    }
    function X(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (r = t[i = ge.camelCase(n)],
            o = e[n],
            Array.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            (s = ge.cssHooks[i]) && "expand"in s)
                for (n in o = s.expand(o),
                delete e[i],
                o)
                    n in e || (e[n] = o[n],
                    t[n] = r);
            else
                t[i] = r
    }
    function V(o, e, t) {
        var n, s, i = 0, r = V.prefilters.length, a = ge.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var e = mt || W(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++)
                u.tweens[i].run(n);
            return a.notifyWith(o, [u, n, t]),
            n < 1 && r ? t : (r || a.notifyWith(o, [u, 1, 0]),
            a.resolveWith(o, [u]),
            !1)
        }, u = a.promise({
            elem: o,
            props: ge.extend({}, e),
            opts: ge.extend(!0, {
                specialEasing: {},
                easing: ge.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: mt || W(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = ge.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? u.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; t < n; t++)
                    u.tweens[t].run(1);
                return e ? (a.notifyWith(o, [u, 1, 0]),
                a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]),
                this
            }
        }), c = u.props;
        for (X(c, u.opts.specialEasing); i < r; i++)
            if (n = V.prefilters[i].call(u, o, c, u.opts))
                return ge.isFunction(n.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(n.stop, n)),
                n;
        return ge.map(c, B, u),
        ge.isFunction(u.opts.start) && u.opts.start.call(o, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        ge.fx.timer(ge.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    function U(e) {
        return (e.match(Ne) || []).join(" ")
    }
    function Y(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Q(n, e, i, r) {
        var t;
        if (Array.isArray(e))
            ge.each(e, function(e, t) {
                i || Pt.test(n) ? r(n, t) : Q(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
            });
        else if (i || "object" !== ge.type(e))
            r(n, e);
        else
            for (t in e)
                Q(n + "[" + t + "]", e[t], i, r)
    }
    function G(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, r = e.toLowerCase().match(Ne) || [];
            if (ge.isFunction(t))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function J(t, r, o, s) {
        function a(e) {
            var i;
            return l[e] = !0,
            ge.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n),
                a(n),
                !1)
            }),
            i
        }
        var l = {}
          , u = t === Bt;
        return a(r.dataTypes[0]) || !l["*"] && a("*")
    }
    function K(e, t) {
        var n, i, r = ge.ajaxSettings.flatOptions || {};
        for (n in t)
            t[n] !== undefined && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ge.extend(!0, e, i),
        e
    }
    function Z(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o)
            return o !== l[0] && l.unshift(o),
            n[o]
    }
    function ee(e, t, n, i) {
        var r, o, s, a, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (!(s = u[l + " " + o] || u["* " + o]))
                        for (r in u)
                            if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: s ? d : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var te = []
      , ne = T.document
      , ie = Object.getPrototypeOf
      , re = te.slice
      , oe = te.concat
      , se = te.push
      , ae = te.indexOf
      , le = {}
      , ue = le.toString
      , ce = le.hasOwnProperty
      , de = ce.toString
      , fe = de.call(Object)
      , pe = {}
      , he = "3.2.1"
      , ge = function(e, t) {
        return new ge.fn.init(e,t)
    }
      , me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ve = /^-ms-/
      , ye = /-([a-z])/g
      , be = function(e, t) {
        return t.toUpperCase()
    };
    ge.fn = ge.prototype = {
        jquery: he,
        constructor: ge,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return ge.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ge.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: te.sort,
        splice: te.splice
    },
    ge.extend = ge.fn.extend = function(e) {
        var t, n, i, r, o, s, a = e || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[l] || {},
        l++),
        "object" == typeof a || ge.isFunction(a) || (a = {}),
        l === u && (a = this,
        l--); l < u; l++)
            if (null != (t = arguments[l]))
                for (n in t)
                    i = a[n],
                    a !== (r = t[n]) && (c && r && (ge.isPlainObject(r) || (o = Array.isArray(r))) ? (o ? (o = !1,
                    s = i && Array.isArray(i) ? i : []) : s = i && ge.isPlainObject(i) ? i : {},
                    a[n] = ge.extend(c, s, r)) : r !== undefined && (a[n] = r));
        return a
    }
    ,
    ge.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ge.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = ge.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ie(e)) || "function" == typeof (n = ce.call(t, "constructor") && t.constructor) && de.call(n) === fe)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            g(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(ye, be)
        },
        each: function(e, t) {
            var n, i = 0;
            if (a(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0, s = [];
            if (a(e))
                for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, n)) && s.push(r);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            ge.isFunction(e) ? (i = re.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(re.call(arguments)))
            }
            ).guid = e.guid = e.guid || ge.guid++,
            r) : undefined
        },
        now: Date.now,
        support: pe
    }),
    "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]),
    ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function(n) {
        function x(e, t, n, i) {
            var r, o, s, a, l, u, c, d = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)
                return n;
            if (!i && ((t ? t.ownerDocument || t : W) !== L && q(t),
            t = t || L,
            I)) {
                if (11 !== f && (l = ve.exec(e)))
                    if (r = l[1]) {
                        if (9 === f) {
                            if (!(s = t.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (d && (s = d.getElementById(r)) && R(t, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (l[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = l[3]) && S.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (S.qsa && !V[e + " "] && (!H || !H.test(e))) {
                    if (1 !== f)
                        d = t,
                        c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(we, Se) : t.setAttribute("id", a = $),
                        o = (u = E(e)).length; o--; )
                            u[o] = "#" + a + " " + g(u[o]);
                        c = u.join(","),
                        d = ye.test(e) && h(t.parentNode) || t
                    }
                    if (c)
                        try {
                            return K.apply(n, d.querySelectorAll(c)),
                            n
                        } catch (p) {} finally {
                            a === $ && t.removeAttribute("id")
                        }
                }
            }
            return D(e.replace(ae, "$1"), t, n, i)
        }
        function e() {
            function n(e, t) {
                return i.push(e + " ") > C.cacheLength && delete n[i.shift()],
                n[e + " "] = t
            }
            var i = [];
            return n
        }
        function l(e) {
            return e[$] = !0,
            e
        }
        function r(e) {
            var t = L.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function t(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                C.attrHandle[n[i]] = t
        }
        function u(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function i(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function o(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function s(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Te(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function a(s) {
            return l(function(o) {
                return o = +o,
                l(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--; )
                        e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function h(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function c() {}
        function g(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function d(a, e, t) {
            var l = e.dir
              , u = e.next
              , c = u || l
              , d = t && "parentNode" === c
              , f = B++;
            return e.first ? function(e, t, n) {
                for (; e = e[l]; )
                    if (1 === e.nodeType || d)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var i, r, o, s = [z, f];
                if (n) {
                    for (; e = e[l]; )
                        if ((1 === e.nodeType || d) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[l]; )
                        if (1 === e.nodeType || d)
                            if (r = (o = e[$] || (e[$] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            u && u === e.nodeName.toLowerCase())
                                e = e[l] || e;
                            else {
                                if ((i = r[c]) && i[0] === z && i[1] === f)
                                    return s[2] = i[2];
                                if ((r[c] = s)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function f(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; )
                    if (!r[i](e, t, n))
                        return !1;
                return !0
            }
            : r[0]
        }
        function y(e, t, n) {
            for (var i = 0, r = t.length; i < r; i++)
                x(e, t[i], n);
            return n
        }
        function w(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                u && t.push(a)));
            return s
        }
        function b(p, h, g, m, v, e) {
            return m && !m[$] && (m = b(m)),
            v && !v[$] && (v = b(v, e)),
            l(function(e, t, n, i) {
                var r, o, s, a = [], l = [], u = t.length, c = e || y(h || "*", n.nodeType ? [n] : n, []), d = !p || !e && h ? c : w(c, a, p, n, i), f = g ? v || (e ? p : u || m) ? [] : t : d;
                if (g && g(d, f, n, i),
                m)
                    for (r = w(f, l),
                    m(r, [], n, i),
                    o = r.length; o--; )
                        (s = r[o]) && (f[l[o]] = !(d[l[o]] = s));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (r = [],
                            o = f.length; o--; )
                                (s = f[o]) && r.push(d[o] = s);
                            v(null, f = [], r, i)
                        }
                        for (o = f.length; o--; )
                            (s = f[o]) && -1 < (r = v ? ee(e, s) : a[o]) && (e[r] = !(t[r] = s))
                    }
                } else
                    f = w(f === t ? f.splice(u, f.length) : f),
                    v ? v(null, t, f, i) : K.apply(t, f)
            })
        }
        function p(e) {
            for (var r, t, n, i = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                return e === r
            }, s, !0), u = d(function(e) {
                return -1 < ee(r, e)
            }, s, !0), c = [function(e, t, n) {
                var i = !o && (n || t !== A) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                return r = null,
                i
            }
            ]; a < i; a++)
                if (t = C.relative[e[a].type])
                    c = [d(f(c), t)];
                else {
                    if ((t = C.filter[e[a].type].apply(null, e[a].matches))[$]) {
                        for (n = ++a; n < i && !C.relative[e[n].type]; n++)
                            ;
                        return b(1 < a && f(c), 1 < a && g(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), t, a < n && p(e.slice(a, n)), n < i && p(e = e.slice(n)), n < i && g(e))
                    }
                    c.push(t)
                }
            return f(c)
        }
        function m(m, v) {
            var y = 0 < v.length
              , b = 0 < m.length
              , e = function(e, t, n, i, r) {
                var o, s, a, l = 0, u = "0", c = e && [], d = [], f = A, p = e || b && C.find.TAG("*", r), h = z += null == f ? 1 : Math.random() || .1, g = p.length;
                for (r && (A = t === L || t || r); u !== g && null != (o = p[u]); u++) {
                    if (b && o) {
                        for (s = 0,
                        t || o.ownerDocument === L || (q(o),
                        n = !I); a = m[s++]; )
                            if (a(o, t || L, n)) {
                                i.push(o);
                                break
                            }
                        r && (z = h)
                    }
                    y && ((o = !a && o) && l--,
                    e && c.push(o))
                }
                if (l += u,
                y && u !== l) {
                    for (s = 0; a = v[s++]; )
                        a(c, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; u--; )
                                c[u] || d[u] || (d[u] = G.call(i));
                        d = w(d)
                    }
                    K.apply(i, d),
                    r && !e && 0 < d.length && 1 < l + v.length && x.uniqueSort(i)
                }
                return r && (z = h,
                A = f),
                c
            };
            return y ? l(e) : e
        }
        var v, S, C, T, k, E, j, D, A, N, P, q, L, M, I, H, F, O, R, $ = "sizzle" + 1 * new Date, W = n.document, z = 0, B = 0, _ = e(), X = e(), V = e(), U = function(e, t) {
            return e === t && (P = !0),
            0
        }, Y = {}.hasOwnProperty, Q = [], G = Q.pop, J = Q.push, K = Q.push, Z = Q.slice, ee = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), fe = new RegExp("^" + ie + "$"), pe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), xe = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Se = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, Ce = function() {
            q()
        }, Te = d(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            K.apply(Q = Z.call(W.childNodes), W.childNodes),
            Q[W.childNodes.length].nodeType
        } catch (ke) {
            K = {
                apply: Q.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (v in S = x.support = {},
        k = x.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        q = x.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : W;
            return i !== L && 9 === i.nodeType && i.documentElement && (M = (L = i).documentElement,
            I = !k(L),
            W !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
            S.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            S.getElementsByTagName = r(function(e) {
                return e.appendChild(L.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            S.getElementsByClassName = me.test(L.getElementsByClassName),
            S.getById = r(function(e) {
                return M.appendChild(e).id = $,
                !L.getElementsByName || !L.getElementsByName($).length
            }),
            S.getById ? (C.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (C.filter.ID = function(e) {
                var n = e.replace(be, xe);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            C.find.TAG = S.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : S.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            C.find.CLASS = S.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && I)
                    return t.getElementsByClassName(e)
            }
            ,
            F = [],
            H = [],
            (S.qsa = me.test(L.querySelectorAll)) && (r(function(e) {
                M.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + $ + "-]").length || H.push("~="),
                e.querySelectorAll(":checked").length || H.push(":checked"),
                e.querySelectorAll("a#" + $ + "+*").length || H.push(".#.+[+~]")
            }),
            r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"),
                M.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                H.push(",.*:")
            })),
            (S.matchesSelector = me.test(O = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(e) {
                S.disconnectedMatch = O.call(e, "*"),
                O.call(e, "[s!='']:x"),
                F.push("!=", oe)
            }),
            H = H.length && new RegExp(H.join("|")),
            F = F.length && new RegExp(F.join("|")),
            t = me.test(M.compareDocumentPosition),
            R = t || me.test(M.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return P = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !S.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === W && R(W, e) ? -1 : t === L || t.ownerDocument === W && R(W, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return P = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o)
                    return e === L ? -1 : t === L ? 1 : r ? -1 : o ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                if (r === o)
                    return u(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? u(s[i], a[i]) : s[i] === W ? -1 : a[i] === W ? 1 : 0
            }
            ),
            L
        }
        ,
        x.matches = function(e, t) {
            return x(e, null, null, t)
        }
        ,
        x.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && q(e),
            t = t.replace(ce, "='$1']"),
            S.matchesSelector && I && !V[t + " "] && (!F || !F.test(t)) && (!H || !H.test(t)))
                try {
                    var n = O.call(e, t);
                    if (n || S.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (ke) {}
            return 0 < x(t, L, null, [e]).length
        }
        ,
        x.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && q(e),
            R(e, t)
        }
        ,
        x.attr = function(e, t) {
            (e.ownerDocument || e) !== L && q(e);
            var n = C.attrHandle[t.toLowerCase()]
              , i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !I) : undefined;
            return i !== undefined ? i : S.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        x.escape = function(e) {
            return (e + "").replace(we, Se)
        }
        ,
        x.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        x.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (P = !S.detectDuplicates,
            N = !S.sortStable && e.slice(0),
            e.sort(U),
            P) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return N = null,
            e
        }
        ,
        T = x.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += T(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += T(t);
            return n
        }
        ,
        (C = x.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: pe,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = x.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "",
                        "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(se, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(h, e, t, g, m) {
                    var v = "nth" !== h.slice(0, 3)
                      , y = "last" !== h.slice(-4)
                      , b = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, r, o, s, a, l, u = v !== y ? "nextSibling" : "previousSibling", c = e.parentNode, d = b && e.nodeName.toLowerCase(), f = !n && !b, p = !1;
                        if (c) {
                            if (v) {
                                for (; u; ) {
                                    for (s = e; s = s[u]; )
                                        if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType)
                                            return !1;
                                    l = u = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? c.firstChild : c.lastChild],
                            y && f) {
                                for (p = (a = (i = (r = (o = (s = c)[$] || (s[$] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === z && i[1]) && i[2],
                                s = a && c.childNodes[a]; s = ++a && s && s[u] || (p = a = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++p && s === e) {
                                        r[h] = [z, a, p];
                                        break
                                    }
                            } else if (f && (p = a = (i = (r = (o = (s = e)[$] || (s[$] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === z && i[1]),
                            !1 === p)
                                for (; (s = ++a && s && s[u] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (f && ((r = (o = s[$] || (s[$] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [z, p]),
                                s !== e)); )
                                    ;
                            return (p -= m) === g || p % g == 0 && 0 <= p / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = C.pseudos[e] || C.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                    return s[$] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                    C.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                        for (var n, i = s(e, o), r = i.length; r--; )
                            e[n = ee(e, i[r])] = !(t[n] = i[r])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: l(function(e) {
                    var i = []
                      , r = []
                      , a = j(e.replace(ae, "$1"));
                    return a[$] ? l(function(e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--; )
                            (r = o[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        a(i, null, n, r),
                        i[0] = null,
                        !r.pop()
                    }
                }),
                has: l(function(t) {
                    return function(e) {
                        return 0 < x(t, e).length
                    }
                }),
                contains: l(function(t) {
                    return t = t.replace(be, xe),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || T(e)).indexOf(t)
                    }
                }),
                lang: l(function(n) {
                    return fe.test(n || "") || x.error("unsupported lang: " + n),
                    n = n.replace(be, xe).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === M
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(e, t) {
                    return [t - 1]
                }),
                eq: a(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: a(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: a(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: a(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: a(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = C.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            C.pseudos[v] = i(v);
        for (v in {
            submit: !0,
            reset: !0
        })
            C.pseudos[v] = o(v);
        return c.prototype = C.filters = C.pseudos,
        C.setFilters = new c,
        E = x.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, u = X[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (s = e,
            a = [],
            l = C.preFilter; s; ) {
                for (o in n && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                a.push(r = [])),
                n = !1,
                (i = ue.exec(s)) && (n = i.shift(),
                r.push({
                    value: n,
                    type: i[0].replace(ae, " ")
                }),
                s = s.slice(n.length)),
                C.filter)
                    !(i = pe[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(),
                    r.push({
                        value: n,
                        type: o,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? x.error(e) : X(e, a).slice(0)
        }
        ,
        j = x.compile = function(e, t) {
            var n, i = [], r = [], o = V[e + " "];
            if (!o) {
                for (t || (t = E(e)),
                n = t.length; n--; )
                    (o = p(t[n]))[$] ? i.push(o) : r.push(o);
                (o = V(e, m(r, i))).selector = e
            }
            return o
        }
        ,
        D = x.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e, c = !i && E(e = u.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && I && C.relative[o[1].type]) {
                    if (!(t = (C.find.ID(s.matches[0].replace(be, xe), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !C.relative[a = s.type]); )
                    if ((l = C.find[a]) && (i = l(s.matches[0].replace(be, xe), ye.test(o[0].type) && h(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        !(e = i.length && g(o)))
                            return K.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || j(e, c))(i, t, !I, n, !t || ye.test(e) && h(t.parentNode) || t),
            n
        }
        ,
        S.sortStable = $.split("").sort(U).join("") === $,
        S.detectDuplicates = !!P,
        q(),
        S.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        S.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        x
    }(T);
    ge.find = xe,
    ge.expr = xe.selectors,
    ge.expr[":"] = ge.expr.pseudos,
    ge.uniqueSort = ge.unique = xe.uniqueSort,
    ge.text = xe.getText,
    ge.isXMLDoc = xe.isXML,
    ge.contains = xe.contains,
    ge.escapeSelector = xe.escape;
    var we = function(e, t, n) {
        for (var i = [], r = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && ge(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , Se = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , Ce = ge.expr.match.needsContext
      , Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , ke = /^.[^:#\[\.,]*$/;
    ge.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? ge.find.matchesSelector(i, e) ? [i] : [] : ge.find.matches(e, ge.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    ge.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(ge(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (ge.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                ge.find(e, r[t], n);
            return 1 < i ? ge.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && Ce.test(e) ? ge(e) : e || [], !1).length
        }
    });
    var Ee, je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ge.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || Ee,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : je.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof ge ? t[0] : t,
                ge.merge(this, ge.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)),
                Te.test(i[1]) && ge.isPlainObject(t))
                    for (i in t)
                        ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = ne.getElementById(i[2])) && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : ge.isFunction(e) ? n.ready !== undefined ? n.ready(e) : e(ge) : ge.makeArray(e, this)
    }
    ).prototype = ge.fn,
    Ee = ge(ne);
    var De = /^(?:parents|prev(?:Until|All))/
      , Ae = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ge.fn.extend({
        has: function(e) {
            var t = ge(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ge.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && ge(e);
            if (!Ce.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ge.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(ge(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ge.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return we(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return we(e, "nextSibling")
        },
        prevAll: function(e) {
            return we(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Se((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Se(e.firstChild)
        },
        contents: function(e) {
            return u(e, "iframe") ? e.contentDocument : (u(e, "template") && (e = e.content || e),
            ge.merge([], e.childNodes))
        }
    }, function(i, r) {
        ge.fn[i] = function(e, t) {
            var n = ge.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ge.filter(t, n)),
            1 < this.length && (Ae[i] || ge.uniqueSort(n),
            De.test(i) && n.reverse()),
            this.pushStack(n)
        }
    });
    var Ne = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function(i) {
        i = "string" == typeof i ? c(i) : ge.extend({}, i);
        var r, e, t, n, o = [], s = [], a = -1, l = function() {
            for (n = n || i.once,
            t = r = !0; s.length; a = -1)
                for (e = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(e[0], e[1]) && i.stopOnFalse && (a = o.length,
                    e = !1);
            i.memory || (e = !1),
            r = !1,
            n && (o = e ? [] : "")
        }, u = {
            add: function() {
                return o && (e && !r && (a = o.length - 1,
                s.push(e)),
                function n(e) {
                    ge.each(e, function(e, t) {
                        ge.isFunction(t) ? i.unique && u.has(t) || o.push(t) : t && t.length && "string" !== ge.type(t) && n(t)
                    })
                }(arguments),
                e && !r && l()),
                this
            },
            remove: function() {
                return ge.each(arguments, function(e, t) {
                    for (var n; -1 < (n = ge.inArray(t, o, n)); )
                        o.splice(n, 1),
                        n <= a && a--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < ge.inArray(e, o) : 0 < o.length
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return n = s = [],
                o = e = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return n = s = [],
                e || r || (o = e = ""),
                this
            },
            locked: function() {
                return !!n
            },
            fireWith: function(e, t) {
                return n || (t = [e, (t = t || []).slice ? t.slice() : t],
                s.push(t),
                r || l()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!t
            }
        };
        return u
    }
    ,
    ge.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2], ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , s = {
                state: function() {
                    return r
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var r = arguments;
                    return ge.Deferred(function(i) {
                        ge.each(o, function(e, t) {
                            var n = ge.isFunction(r[t[4]]) && r[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && ge.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(t, n, i) {
                    function u(o, s, a, l) {
                        return function() {
                            var n = this
                              , i = arguments
                              , t = function() {
                                var e, t;
                                if (!(o < c)) {
                                    if ((e = a.apply(n, i)) === s.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    ge.isFunction(t) ? l ? t.call(e, u(c, s, d, l), u(c, s, f, l)) : (c++,
                                    t.call(e, u(c, s, d, l), u(c, s, f, l), u(c, s, d, s.notifyWith))) : (a !== d && (n = undefined,
                                    i = [e]),
                                    (l || s.resolveWith)(n, i))
                                }
                            }
                              , r = l ? t : function() {
                                try {
                                    t()
                                } catch (e) {
                                    ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, r.stackTrace),
                                    c <= o + 1 && (a !== f && (n = undefined,
                                    i = [e]),
                                    s.rejectWith(n, i))
                                }
                            }
                            ;
                            o ? r() : (ge.Deferred.getStackHook && (r.stackTrace = ge.Deferred.getStackHook()),
                            T.setTimeout(r))
                        }
                    }
                    var c = 0;
                    return ge.Deferred(function(e) {
                        o[0][3].add(u(0, e, ge.isFunction(i) ? i : d, e.notifyWith)),
                        o[1][3].add(u(0, e, ge.isFunction(t) ? t : d)),
                        o[2][3].add(u(0, e, ge.isFunction(n) ? n : f))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ge.extend(e, s) : s
                }
            }
              , a = {};
            return ge.each(o, function(e, t) {
                var n = t[2]
                  , i = t[5];
                s[t[1]] = n.add,
                i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[0][2].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? undefined : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , i = Array(t)
              , r = re.call(arguments)
              , o = ge.Deferred()
              , s = function(t) {
                return function(e) {
                    i[t] = this,
                    r[t] = 1 < arguments.length ? re.call(arguments) : e,
                    --n || o.resolveWith(i, r)
                }
            };
            if (n <= 1 && (l(e, o.done(s(t)).resolve, o.reject, !n),
            "pending" === o.state() || ge.isFunction(r[t] && r[t].then)))
                return o.then();
            for (; t--; )
                l(r[t], s(t), o.reject);
            return o.promise()
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && Pe.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    ge.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    }
    ;
    var qe = ge.Deferred();
    ge.fn.ready = function(e) {
        return qe.then(e)["catch"](function(e) {
            ge.readyException(e)
        }),
        this
    }
    ,
    ge.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0) !== e && 0 < --ge.readyWait || qe.resolveWith(ne, [ge])
        }
    }),
    ge.ready.then = qe.then,
    "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? T.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", i),
    T.addEventListener("load", i));
    var Le = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , u = null == n;
        if ("object" === ge.type(n))
            for (a in r = !0,
            n)
                Le(e, t, a, n[a], !0, o, s);
        else if (i !== undefined && (r = !0,
        ge.isFunction(i) || (s = !0),
        u && (s ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(ge(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , Me = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    r.uid = 1,
    r.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[ge.camelCase(t)] = n;
            else
                for (i in t)
                    r[ge.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
        },
        access: function(e, t, n) {
            return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n),
            n !== undefined ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (i !== undefined) {
                if (t !== undefined) {
                    n = (t = Array.isArray(t) ? t.map(ge.camelCase) : (t = ge.camelCase(t))in i ? [t] : t.match(Ne) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (t === undefined || ge.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return t !== undefined && !ge.isEmptyObject(t)
        }
    };
    var Ie = new r
      , He = new r
      , Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Oe = /[A-Z]/g;
    ge.extend({
        hasData: function(e) {
            return He.hasData(e) || Ie.hasData(e)
        },
        data: function(e, t, n) {
            return He.access(e, t, n)
        },
        removeData: function(e, t) {
            He.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ie.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ie.remove(e, t)
        }
    }),
    ge.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], s = o && o.attributes;
            if (n === undefined) {
                if (this.length && (r = He.get(o),
                1 === o.nodeType && !Ie.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--; )
                        s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = ge.camelCase(i.slice(5)),
                        p(o, i, r[i]));
                    Ie.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof n ? this.each(function() {
                He.set(this, n)
            }) : Le(this, function(e) {
                var t;
                if (o && e === undefined)
                    return (t = He.get(o, n)) !== undefined ? t : (t = p(o, n)) !== undefined ? t : void 0;
                this.each(function() {
                    He.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                He.remove(this, e)
            })
        }
    }),
    ge.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Ie.get(e, t),
                n && (!i || Array.isArray(n) ? i = Ie.access(e, t, ge.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ge.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = ge._queueHooks(e, t)
              , s = function() {
                ge.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ie.get(e, n) || Ie.access(e, n, {
                empty: ge.Callbacks("once memory").add(function() {
                    Ie.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ge.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? ge.queue(this[0], t) : n === undefined ? this : this.each(function() {
                var e = ge.queue(this, t, n);
                ge._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && ge.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ge.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = ge.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = undefined),
            e = e || "fx"; s--; )
                (n = Ie.get(o[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , $e = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$","i")
      , We = ["Top", "Right", "Bottom", "Left"]
      , ze = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
    }
      , Be = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.apply(e, i || []),
        t)
            e.style[o] = s[o];
        return r
    }
      , _e = {};
    ge.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ze(this) ? ge(this).show() : ge(this).hide()
            })
        }
    });
    var Xe = /^(?:checkbox|radio)$/i
      , Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Ue = /^$|\/(?:java|ecma)script/i
      , Ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ye.optgroup = Ye.option,
    Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead,
    Ye.th = Ye.td;
    var Qe, Ge, Je = /<|&#?\w+;/;
    Qe = ne.createDocumentFragment().appendChild(ne.createElement("div")),
    (Ge = ne.createElement("input")).setAttribute("type", "radio"),
    Ge.setAttribute("checked", "checked"),
    Ge.setAttribute("name", "t"),
    Qe.appendChild(Ge),
    pe.checkClone = Qe.cloneNode(!0).cloneNode(!0).lastChild.checked,
    Qe.innerHTML = "<textarea>x</textarea>",
    pe.noCloneChecked = !!Qe.cloneNode(!0).lastChild.defaultValue;
    var Ke = ne.documentElement
      , Ze = /^key/
      , et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , tt = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, f, p, h, g, m = Ie.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && ge.find.matchesSelector(Ke, r),
                n.guid || (n.guid = ge.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) || (s = m.handle = function(e) {
                    return void 0 !== ge && ge.event.triggered !== e.type ? ge.event.dispatch.apply(t, arguments) : undefined
                }
                ),
                u = (e = (e || "").match(Ne) || [""]).length; u--; )
                    p = g = (a = tt.exec(e[u]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p && (d = ge.event.special[p] || {},
                    p = (r ? d.delegateType : d.bindType) || p,
                    d = ge.event.special[p] || {},
                    c = ge.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ge.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o),
                    (f = l[p]) || ((f = l[p] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(p, s)),
                    d.add && (d.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                    ge.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, f, p, h, g, m = Ie.hasData(e) && Ie.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(Ne) || [""]).length; u--; )
                    if (p = g = (a = tt.exec(t[u]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p) {
                        for (d = ge.event.special[p] || {},
                        f = l[p = (i ? d.delegateType : d.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = f.length; o--; )
                            c = f[o],
                            !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, c));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || ge.removeEvent(e, p, m.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            ge.event.remove(e, p + t[u], n, i, !0);
                ge.isEmptyObject(l) && Ie.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = ge.event.fix(e), l = new Array(arguments.length), u = (Ie.get(this, "events") || {})[a.type] || [], c = ge.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = ge.event.handlers.call(this, a, u),
                t = 0; (r = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        (i = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) !== undefined && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            s[r = (i = t[n]).selector + " "] === undefined && (s[r] = i.needsContext ? -1 < ge(r, this).index(u) : ge.find(r, this, null, [u]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(ge.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ge.isFunction(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ge.expando] ? e : new ge.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== S() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === S() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && u(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return u(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ge.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    ge.Event = function(e, t) {
        if (!(this instanceof ge.Event))
            return new ge.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? s : w,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && ge.extend(this, t),
        this.timeStamp = e && e.timeStamp || ge.now(),
        this[ge.expando] = !0
    }
    ,
    ge.Event.prototype = {
        constructor: ge.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = s,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = s,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = s,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ge.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && et.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ge.event.addProp),
    ge.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        ge.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this, i = e.relatedTarget, r = e.handleObj;
                return i && (i === n || ge.contains(n, i)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = o),
                t
            }
        }
    }),
    ge.fn.extend({
        on: function(e, t, n, i) {
            return C(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return C(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                ge(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = undefined),
            !1 === n && (n = w),
            this.each(function() {
                ge.event.remove(this, e, n, t)
            })
        }
    });
    var nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , it = /<script|<style|<link/i
      , rt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ot = /^true\/(.*)/
      , st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
        htmlPrefilter: function(e) {
            return e.replace(nt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = ge.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                for (s = y(a),
                i = 0,
                r = (o = y(e)).length; i < r; i++)
                    A(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || y(e),
                    s = s || y(a),
                    i = 0,
                    r = o.length; i < r; i++)
                        D(o[i], s[i]);
                else
                    D(e, a);
            return 0 < (s = y(a, "script")).length && b(s, !l && y(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, i, r = ge.event.special, o = 0; (n = e[o]) !== undefined; o++)
                if (Me(n)) {
                    if (t = n[Ie.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, t.handle);
                        n[Ie.expando] = undefined
                    }
                    n[He.expando] && (n[He.expando] = undefined)
                }
        }
    }),
    ge.fn.extend({
        detach: function(e) {
            return P(this, e, !0)
        },
        remove: function(e) {
            return P(this, e)
        },
        text: function(e) {
            return Le(this, function(e) {
                return e === undefined ? ge.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return N(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ge.cleanData(y(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return ge.clone(this, e, t)
            })
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (e === undefined && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !it.test(e) && !Ye[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ge.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (ge.cleanData(y(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return N(this, arguments, function(e) {
                var t = this.parentNode;
                ge.inArray(this, n) < 0 && (ge.cleanData(y(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    ge.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        ge.fn[e] = function(e) {
            for (var t, n = [], i = ge(e), r = i.length - 1, o = 0; o <= r; o++)
                t = o === r ? this : this.clone(!0),
                ge(i[o])[s](t),
                se.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var at = /^margin/
      , lt = new RegExp("^(" + Re + ")(?!px)[a-z%]+$","i")
      , ut = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = T),
        t.getComputedStyle(e)
    };
    !function() {
        function e() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                s.innerHTML = "",
                Ke.appendChild(o);
                var e = T.getComputedStyle(s);
                t = "1%" !== e.top,
                r = "2px" === e.marginLeft,
                n = "4px" === e.width,
                s.style.marginRight = "50%",
                i = "4px" === e.marginRight,
                Ke.removeChild(o),
                s = null
            }
        }
        var t, n, i, r, o = ne.createElement("div"), s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        pe.clearCloneStyle = "content-box" === s.style.backgroundClip,
        o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        o.appendChild(s),
        ge.extend(pe, {
            pixelPosition: function() {
                return e(),
                t
            },
            boxSizingReliable: function() {
                return e(),
                n
            },
            pixelMarginRight: function() {
                return e(),
                i
            },
            reliableMarginLeft: function() {
                return e(),
                r
            }
        }))
    }();
    var ct = /^(none|table(?!-c[ea]).+)/
      , dt = /^--/
      , ft = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , pt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ht = ["Webkit", "Moz", "ms"]
      , gt = ne.createElement("div").style;
    ge.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = q(e, "opacity");
                        return "" === n ? "1" : n
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = ge.camelCase(t), l = dt.test(t), u = e.style;
                if (l || (t = I(a)),
                s = ge.cssHooks[t] || ge.cssHooks[a],
                n === undefined)
                    return s && "get"in s && (r = s.get(e, !1, i)) !== undefined ? r : u[t];
                "string" === (o = typeof n) && (r = $e.exec(n)) && r[1] && (n = h(e, t, r),
                o = "number"),
                null != n && n == n && ("number" === o && (n += r && r[3] || (ge.cssNumber[a] ? "" : "px")),
                pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set"in s && (n = s.set(e, n, i)) === undefined || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = ge.camelCase(t);
            return dt.test(t) || (t = I(a)),
            (s = ge.cssHooks[t] || ge.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
            r === undefined && (r = q(e, t, i)),
            "normal" === r && t in pt && (r = pt[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    ge.each(["height", "width"], function(e, s) {
        ge.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !ct.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? O(e, s, n) : Be(e, ft, function() {
                        return O(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var i, r = n && ut(e), o = n && F(e, s, n, "border-box" === ge.css(e, "boxSizing", !1, r), r);
                return o && (i = $e.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t,
                t = ge.css(e, s)),
                H(e, t, o)
            }
        }
    }),
    ge.cssHooks.marginLeft = L(pe.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    ge.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        ge.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[r + We[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        at.test(r) || (ge.cssHooks[r + o].set = H)
    }),
    ge.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = ut(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = ge.css(e, t[s], !1, i);
                    return o
                }
                return n !== undefined ? ge.style(e, t, n) : ge.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    (ge.Tween = R).prototype = {
        constructor: R,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || ge.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (ge.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = R.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : R.propHooks._default.set(this),
            this
        }
    },
    R.prototype.init.prototype = R.prototype,
    R.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ge.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    ge.fx = R.prototype.init,
    ge.fx.step = {};
    var mt, vt, yt, bt, xt = /^(?:toggle|show|hide)$/, wt = /queueHooks$/;
    ge.Animation = ge.extend(V, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, $e.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            ge.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(Ne);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                V.tweeners[n] = V.tweeners[n] || [],
                V.tweeners[n].unshift(t)
        },
        prefilters: [_],
        prefilter: function(e, t) {
            t ? V.prefilters.unshift(e) : V.prefilters.push(e)
        }
    }),
    ge.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? ge.extend({}, e) : {
            complete: n || !n && t || ge.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ge.isFunction(t) && t
        };
        return ge.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ge.fx.speeds ? i.duration = ge.fx.speeds[i.duration] : i.duration = ge.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            ge.isFunction(i.old) && i.old.call(this),
            i.queue && ge.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    ge.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ze).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = ge.isEmptyObject(t)
              , o = ge.speed(e, n, i)
              , s = function() {
                var e = V(this, ge.extend({}, t), o);
                (r || Ie.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof r && (o = e,
            e = r,
            r = undefined),
            e && !1 !== r && this.queue(r || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != r && r + "queueHooks"
                  , n = ge.timers
                  , i = Ie.get(this);
                if (t)
                    i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && wt.test(t) && s(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || ge.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = Ie.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = ge.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                ge.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    ge.each(["toggle", "show", "hide"], function(e, i) {
        var r = ge.fn[i];
        ge.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(z(i, !0), e, t, n)
        }
    }),
    ge.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        ge.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    ge.timers = [],
    ge.fx.tick = function() {
        var e, t = 0, n = ge.timers;
        for (mt = ge.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ge.fx.stop(),
        mt = undefined
    }
    ,
    ge.fx.timer = function(e) {
        ge.timers.push(e),
        ge.fx.start()
    }
    ,
    ge.fx.interval = 13,
    ge.fx.start = function() {
        vt || (vt = !0,
        $())
    }
    ,
    ge.fx.stop = function() {
        vt = null
    }
    ,
    ge.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ge.fn.delay = function(i, e) {
        return i = ge.fx && ge.fx.speeds[i] || i,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = T.setTimeout(e, i);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }
    ,
    yt = ne.createElement("input"),
    bt = ne.createElement("select").appendChild(ne.createElement("option")),
    yt.type = "checkbox",
    pe.checkOn = "" !== yt.value,
    pe.optSelected = bt.selected,
    (yt = ne.createElement("input")).value = "t",
    yt.type = "radio",
    pe.radioValue = "t" === yt.value;
    var St, Ct = ge.expr.attrHandle;
    ge.fn.extend({
        attr: function(e, t) {
            return Le(this, ge.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ge.removeAttr(this, e)
            })
        }
    }),
    ge.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (r = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? St : undefined)),
                n !== undefined ? null === n ? void ge.removeAttr(e, t) : r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = ge.find.attr(e, t)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && u(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    St = {
        set: function(e, t, n) {
            return !1 === t ? ge.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = Ct[t] || ge.find.attr;
        Ct[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = Ct[o],
            Ct[o] = i,
            i = null != s(e, t, n) ? o : null,
            Ct[o] = r),
            i
        }
    });
    var Tt = /^(?:input|select|textarea|button)$/i
      , kt = /^(?:a|area)$/i;
    ge.fn.extend({
        prop: function(e, t) {
            return Le(this, ge.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ge.propFix[e] || e]
            })
        }
    }),
    ge.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t,
                r = ge.propHooks[t]),
                n !== undefined ? r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ge.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    pe.optSelected || (ge.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ge.propFix[this.toLowerCase()] = this
    }),
    ge.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ge.isFunction(t))
                return this.each(function(e) {
                    ge(this).addClass(t.call(this, e, Y(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(Ne) || []; n = this[l++]; )
                    if (r = Y(n),
                    i = 1 === n.nodeType && " " + U(r) + " ") {
                        for (s = 0; o = e[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = U(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ge.isFunction(t))
                return this.each(function(e) {
                    ge(this).removeClass(t.call(this, e, Y(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Ne) || []; n = this[l++]; )
                    if (r = Y(n),
                    i = 1 === n.nodeType && " " + U(r) + " ") {
                        for (s = 0; o = e[s++]; )
                            for (; -1 < i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = U(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : ge.isFunction(r) ? this.each(function(e) {
                ge(this).toggleClass(r.call(this, e, Y(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if ("string" === o)
                    for (t = 0,
                    n = ge(this),
                    i = r.match(Ne) || []; e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    r !== undefined && "boolean" !== o || ((e = Y(this)) && Ie.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Ie.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + U(Y(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var Et = /\r/g;
    ge.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = ge.isFunction(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, ge(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ge.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (i = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set"in i && i.set(this, t, "value") !== undefined || (this.value = t))
            })) : t ? (i = ge.valHooks[t.type] || ge.valHooks[t.nodeName.toLowerCase()]) && "get"in i && (e = i.get(t, "value")) !== undefined ? e : "string" == typeof (e = t.value) ? e.replace(Et, "") : null == e ? "" : e : void 0
        }
    }),
    ge.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ge.find.attr(e, "value");
                    return null != t ? t : U(ge.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) {
                            if (t = ge(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = ge.makeArray(t), s = r.length; s--; )
                        ((i = r[s]).selected = -1 < ge.inArray(ge.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ge.each(["radio", "checkbox"], function() {
        ge.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < ge.inArray(ge(e).val(), t)
            }
        },
        pe.checkOn || (ge.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var jt = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, u, c, d = [n || ne], f = ce.call(e, "type") ? e.type : e, p = ce.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = s = n = n || ne,
            3 !== n.nodeType && 8 !== n.nodeType && !jt.test(f + ge.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(),
            p.sort()),
            l = f.indexOf(":") < 0 && "on" + f,
            (e = e[ge.expando] ? e : new ge.Event(f,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = p.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = undefined,
            e.target || (e.target = n),
            t = null == t ? [e] : ge.makeArray(t, [e]),
            c = ge.event.special[f] || {},
            i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !ge.isWindow(n)) {
                    for (a = c.delegateType || f,
                    jt.test(a + f) || (o = o.parentNode); o; o = o.parentNode)
                        d.push(o),
                        s = o;
                    s === (n.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || T)
                }
                for (r = 0; (o = d[r++]) && !e.isPropagationStopped(); )
                    e.type = 1 < r ? a : c.bindType || f,
                    (u = (Ie.get(o, "events") || {})[e.type] && Ie.get(o, "handle")) && u.apply(o, t),
                    (u = l && o[l]) && u.apply && Me(o) && (e.result = u.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = f,
                i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Me(n) || l && ge.isFunction(n[f]) && !ge.isWindow(n) && ((s = n[l]) && (n[l] = null),
                n[ge.event.triggered = f](),
                ge.event.triggered = undefined,
                s && (n[l] = s)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var i = ge.extend(new ge.Event, n, {
                type: e,
                isSimulated: !0
            });
            ge.event.trigger(i, null, t)
        }
    }),
    ge.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ge.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return ge.event.trigger(e, t, n, !0)
        }
    }),
    ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ge.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    ge.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    pe.focusin = "onfocusin"in T,
    pe.focusin || ge.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            ge.event.simulate(i, e.target, ge.event.fix(e))
        };
        ge.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Ie.access(e, i);
                t || e.addEventListener(n, r, !0),
                Ie.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Ie.access(e, i) - 1;
                t ? Ie.access(e, i, t) : (e.removeEventListener(n, r, !0),
                Ie.remove(e, i))
            }
        }
    });
    var Dt = T.location
      , At = ge.now()
      , Nt = /\?/;
    ge.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (n) {
            t = undefined
        }
        return t && !t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e),
        t
    }
    ;
    var Pt = /\[\]$/
      , qt = /\r?\n/g
      , Lt = /^(?:submit|button|image|reset|file)$/i
      , Mt = /^(?:input|select|textarea|keygen)/i;
    ge.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = ge.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e))
            ge.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                Q(n, e[n], t, r);
        return i.join("&")
    }
    ,
    ge.fn.extend({
        serialize: function() {
            return ge.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && Mt.test(this.nodeName) && !Lt.test(e) && (this.checked || !Xe.test(e))
            }).map(function(e, t) {
                var n = ge(this).val();
                return null == n ? null : Array.isArray(n) ? ge.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(qt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(qt, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g
      , Ht = /#.*$/
      , Ft = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , $t = /^(?:GET|HEAD)$/
      , Wt = /^\/\//
      , zt = {}
      , Bt = {}
      , _t = "*/".concat("*")
      , Xt = ne.createElement("a");
    Xt.href = Dt.href,
    ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: Rt.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
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
                "text xml": ge.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, ge.ajaxSettings), t) : K(ge.ajaxSettings, e)
        },
        ajaxPrefilter: G(zt),
        ajaxTransport: G(Bt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, o, s, a, l, u = t;
                h || (h = !0,
                p && T.clearTimeout(p),
                c = undefined,
                f = i || "",
                S.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (a = Z(m, S, n)),
                a = ee(m, a, S, r),
                r ? (m.ifModified && ((l = S.getResponseHeader("Last-Modified")) && (ge.lastModified[d] = l),
                (l = S.getResponseHeader("etag")) && (ge.etag[d] = l)),
                204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state,
                o = a.data,
                r = !(s = a.error))) : (s = u,
                !e && u || (u = "error",
                e < 0 && (e = 0))),
                S.status = e,
                S.statusText = (t || u) + "",
                r ? b.resolveWith(v, [o, u, S]) : b.rejectWith(v, [S, u, s]),
                S.statusCode(w),
                w = undefined,
                g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [S, m, r ? o : s]),
                x.fireWith(v, [S, u]),
                g && (y.trigger("ajaxComplete", [S, m]),
                --ge.active || ge.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = undefined),
            t = t || {};
            var c, d, f, i, p, r, h, g, o, s, m = ge.ajaxSetup({}, t), v = m.context || m, y = m.context && (v.nodeType || v.jquery) ? ge(v) : ge.event, b = ge.Deferred(), x = ge.Callbacks("once memory"), w = m.statusCode || {}, a = {}, l = {}, u = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!i)
                            for (i = {}; t = Ot.exec(f); )
                                i[t[1].toLowerCase()] = t[2];
                        t = i[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return h ? f : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = l[e.toLowerCase()] = l[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (m.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            S.always(e[S.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    n(0, t),
                    this
                }
            };
            if (b.promise(S),
            m.url = ((e || m.url || Dt.href) + "").replace(Wt, Dt.protocol + "//"),
            m.type = t.method || t.type || m.method || m.type,
            m.dataTypes = (m.dataType || "*").toLowerCase().match(Ne) || [""],
            null == m.crossDomain) {
                r = ne.createElement("a");
                try {
                    r.href = m.url,
                    r.href = r.href,
                    m.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                } catch (C) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = ge.param(m.data, m.traditional)),
            J(zt, m, t, S),
            h)
                return S;
            for (o in (g = ge.event && m.global) && 0 == ge.active++ && ge.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !$t.test(m.type),
            d = m.url.replace(Ht, ""),
            m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(It, "+")) : (s = m.url.slice(d.length),
            m.data && (d += (Nt.test(d) ? "&" : "?") + m.data,
            delete m.data),
            !1 === m.cache && (d = d.replace(Ft, "$1"),
            s = (Nt.test(d) ? "&" : "?") + "_=" + At++ + s),
            m.url = d + s),
            m.ifModified && (ge.lastModified[d] && S.setRequestHeader("If-Modified-Since", ge.lastModified[d]),
            ge.etag[d] && S.setRequestHeader("If-None-Match", ge.etag[d])),
            (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && S.setRequestHeader("Content-Type", m.contentType),
            S.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : m.accepts["*"]),
            m.headers)
                S.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, S, m) || h))
                return S.abort();
            if (u = "abort",
            x.add(m.complete),
            S.done(m.success),
            S.fail(m.error),
            c = J(Bt, m, t, S)) {
                if (S.readyState = 1,
                g && y.trigger("ajaxSend", [S, m]),
                h)
                    return S;
                m.async && 0 < m.timeout && (p = T.setTimeout(function() {
                    S.abort("timeout")
                }, m.timeout));
                try {
                    h = !1,
                    c.send(a, n)
                } catch (C) {
                    if (h)
                        throw C;
                    n(-1, C)
                }
            } else
                n(-1, "No Transport");
            return S
        },
        getJSON: function(e, t, n) {
            return ge.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ge.get(e, undefined, t, "script")
        }
    }),
    ge.each(["get", "post"], function(e, r) {
        ge[r] = function(e, t, n, i) {
            return ge.isFunction(t) && (i = i || n,
            n = t,
            t = undefined),
            ge.ajax(ge.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, ge.isPlainObject(e) && e))
        }
    }),
    ge._evalUrl = function(e) {
        return ge.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    ge.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ge.isFunction(e) && (e = e.call(this[0])),
            t = ge(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return ge.isFunction(n) ? this.each(function(e) {
                ge(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ge(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = ge.isFunction(t);
            return this.each(function(e) {
                ge(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ge(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    ge.expr.pseudos.hidden = function(e) {
        return !ge.expr.pseudos.visible(e)
    }
    ,
    ge.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    ge.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Ut = ge.ajaxSettings.xhr();
    pe.cors = !!Ut && "withCredentials"in Ut,
    pe.ajax = Ut = !!Ut,
    ge.ajaxTransport(function(o) {
        var s, a;
        if (pe.cors || Ut && !o.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password),
                    o.xhrFields)
                        for (n in o.xhrFields)
                            i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType),
                    o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    s = function(e) {
                        return function() {
                            s && (s = a = i.onload = i.onerror = i.onabort = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Vt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = s(),
                    a = i.onerror = s("error"),
                    i.onabort !== undefined ? i.onabort = a : i.onreadystatechange = function() {
                        4 === i.readyState && T.setTimeout(function() {
                            s && a()
                        })
                    }
                    ,
                    s = s("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (r) {
                        if (s)
                            throw r
                    }
                },
                abort: function() {
                    s && s()
                }
            }
    }),
    ge.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    ge.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ge.globalEval(e),
                e
            }
        }
    }),
    ge.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ge.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain)
            return {
                send: function(e, t) {
                    i = ge("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove(),
                        r = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    ne.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var Yt, Qt = [], Gt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Qt.pop() || ge.expando + "_" + At++;
            return this[e] = !0,
            e
        }
    }),
    ge.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return o || ge.error(i + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = T[i],
            T[i] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                r === undefined ? ge(T).removeProp(i) : T[i] = r,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                Qt.push(i)),
                o && ge.isFunction(r) && r(o[0]),
                o = r = undefined
            }),
            "script"
    }),
    pe.createHTMLDocument = ((Yt = ne.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Yt.childNodes.length),
    ge.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (pe.createHTMLDocument ? ((i = (t = ne.implementation.createHTMLDocument("")).createElement("base")).href = ne.location.href,
        t.head.appendChild(i)) : t = ne),
        o = !n && [],
        (r = Te.exec(e)) ? [t.createElement(r[1])] : (r = x([e], t, o),
        o && o.length && ge(o).remove(),
        ge.merge([], r.childNodes)));
        var i, r, o
    }
    ,
    ge.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return -1 < a && (i = U(e.slice(a)),
        e = e.slice(0, a)),
        ge.isFunction(t) ? (n = t,
        t = undefined) : t && "object" == typeof t && (r = "POST"),
        0 < s.length && ge.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(i ? ge("<div>").append(ge.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ge.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ge.expr.pseudos.animated = function(t) {
        return ge.grep(ge.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ge.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = ge.css(e, "position"), c = ge(e), d = {};
            "static" === u && (e.style.position = "relative"),
            a = c.offset(),
            o = ge.css(e, "top"),
            l = ge.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, d) : c.css(d)
        }
    },
    ge.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return t === undefined ? this : this.each(function(e) {
                    ge.offset.setOffset(this, t, e)
                });
            var e, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(),
            n = (e = o.ownerDocument).documentElement,
            r = e.defaultView,
            {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                u(e[0], "html") || (i = e.offset()),
                i = {
                    top: i.top + ge.css(e[0], "borderTopWidth", !0),
                    left: i.left + ge.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - i.top - ge.css(n, "marginTop", !0),
                    left: t.left - i.left - ge.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ge.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ke
            })
        }
    }),
    ge.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        ge.fn[t] = function(e) {
            return Le(this, function(e, t, n) {
                var i;
                if (ge.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                n === undefined)
                    return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    ge.each(["top", "left"], function(e, n) {
        ge.cssHooks[n] = L(pe.pixelPosition, function(e, t) {
            if (t)
                return t = q(e, n),
                lt.test(t) ? ge(e).position()[n] + "px" : t
        })
    }),
    ge.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        ge.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            ge.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , r = i || (!0 === e || !0 === t ? "margin" : "border");
                return Le(this, function(e, t, n) {
                    var i;
                    return ge.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : n === undefined ? ge.css(e, t, r) : ge.style(e, t, n, r)
                }, a, n ? e : undefined, n)
            }
        })
    }),
    ge.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    ge.holdReady = function(e) {
        e ? ge.readyWait++ : ge.ready(!0)
    }
    ,
    ge.isArray = Array.isArray,
    ge.parseJSON = JSON.parse,
    ge.nodeName = u,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ge
    });
    var Jt = T.jQuery
      , Kt = T.$;
    return ge.noConflict = function(e) {
        return T.$ === ge && (T.$ = Kt),
        e && T.jQuery === ge && (T.jQuery = Jt),
        ge
    }
    ,
    e || (T.jQuery = T.$ = ge),
    ge
}),
function(c, l) {
    "use strict";
    var u;
    c.rails !== l && c.error("jquery-ujs has already been loaded!");
    var e = c(document);
    c.rails = u = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return c("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return c("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = u.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            c('form input[name="' + u.csrfParam() + '"]').val(u.csrfToken())
        },
        fire: function(e, t, n) {
            var i = c.Event(t);
            return e.trigger(i, n),
            !1 !== i.result
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(e) {
            return c.ajax(e)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== l && !1 !== e.data("remote")
        },
        handleRemote: function(i) {
            var e, t, n, r, o, s;
            if (u.fire(i, "ajax:before")) {
                if (r = i.data("with-credentials") || null,
                o = i.data("type") || c.ajaxSettings && c.ajaxSettings.dataType,
                i.is("form")) {
                    e = i.data("ujs:submit-button-formmethod") || i.attr("method"),
                    t = i.data("ujs:submit-button-formaction") || i.attr("action"),
                    n = c(i[0]).serializeArray();
                    var a = i.data("ujs:submit-button");
                    a && (n.push(a),
                    i.data("ujs:submit-button", null)),
                    i.data("ujs:submit-button-formmethod", null),
                    i.data("ujs:submit-button-formaction", null)
                } else
                    i.is(u.inputChangeSelector) ? (e = i.data("method"),
                    t = i.data("url"),
                    n = i.serialize(),
                    i.data("params") && (n = n + "&" + i.data("params"))) : i.is(u.buttonClickSelector) ? (e = i.data("method") || "get",
                    t = i.data("url"),
                    n = i.serialize(),
                    i.data("params") && (n = n + "&" + i.data("params"))) : (e = i.data("method"),
                    t = u.href(i),
                    n = i.data("params") || null);
                return s = {
                    type: e || "GET",
                    data: n,
                    dataType: o,
                    beforeSend: function(e, t) {
                        if (t.dataType === l && e.setRequestHeader("accept", "*/*;q=0.5, " + t.accepts.script),
                        !u.fire(i, "ajax:beforeSend", [e, t]))
                            return !1;
                        i.trigger("ajax:send", e)
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: u.isCrossDomain(t)
                },
                r && (s.xhrFields = {
                    withCredentials: r
                }),
                t && (s.url = t),
                u.ajax(s)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e,
                n.href = n.href,
                !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(e) {
            var t = u.href(e)
              , n = e.data("method")
              , i = e.attr("target")
              , r = u.csrfToken()
              , o = u.csrfParam()
              , s = c('<form method="post" action="' + t + '"></form>')
              , a = '<input name="_method" value="' + n + '" type="hidden" />';
            o === l || r === l || u.isCrossDomain(t) || (a += '<input name="' + o + '" value="' + r + '" type="hidden" />'),
            i && s.attr("target", i),
            s.hide().append(a).appendTo("body"),
            s.submit()
        },
        formElements: function(e, t) {
            return e.is("form") ? c(e[0].elements).filter(t) : e.find(t)
        },
        disableFormElements: function(e) {
            u.formElements(e, u.disableSelector).each(function() {
                u.disableFormElement(c(this))
            })
        },
        disableFormElement: function(e) {
            var t, n;
            t = e.is("button") ? "html" : "val",
            (n = e.data("disable-with")) !== l && (e.data("ujs:enable-with", e[t]()),
            e[t](n)),
            e.prop("disabled", !0),
            e.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            u.formElements(e, u.enableSelector).each(function() {
                u.enableFormElement(c(this))
            })
        },
        enableFormElement: function(e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== l && (e[t](e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.prop("disabled", !1),
            e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, n = e.data("confirm"), i = !1;
            if (!n)
                return !0;
            if (u.fire(e, "confirm")) {
                try {
                    i = u.confirm(n)
                } catch (r) {
                    (console.error || console.log).call(console, r.stack || r)
                }
                t = u.fire(e, "confirm:complete", [i])
            }
            return i && t
        },
        blankInputs: function(e, t, n) {
            var i, r, o, s = c(), a = t || "input,textarea", l = e.find(a), u = {};
            return l.each(function() {
                (i = c(this)).is("input[type=radio]") ? (o = i.attr("name"),
                u[o] || (0 === e.find('input[type=radio]:checked[name="' + o + '"]').length && (r = e.find('input[type=radio][name="' + o + '"]'),
                s = s.add(r)),
                u[o] = o)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n && (s = s.add(i))
            }),
            !!s.length && s
        },
        nonBlankInputs: function(e, t) {
            return u.blankInputs(e, t, !0)
        },
        stopEverything: function(e) {
            return c(e.target).trigger("ujs:everythingStopped"),
            e.stopImmediatePropagation(),
            !1
        },
        disableElement: function(e) {
            var t = e.data("disable-with");
            t !== l && (e.data("ujs:enable-with", e.html()),
            e.html(t)),
            e.bind("click.railsDisable", function(e) {
                return u.stopEverything(e)
            }),
            e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== l && (e.html(e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable"),
            e.removeData("ujs:disabled")
        }
    },
    u.fire(e, "rails:attachBindings") && (c.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || u.CSRFProtection(n)
    }),
    c(window).on("pageshow.rails", function() {
        c(c.rails.enableSelector).each(function() {
            var e = c(this);
            e.data("ujs:disabled") && c.rails.enableFormElement(e)
        }),
        c(c.rails.linkDisableSelector).each(function() {
            var e = c(this);
            e.data("ujs:disabled") && c.rails.enableElement(e)
        })
    }),
    e.on("ajax:complete", u.linkDisableSelector, function() {
        u.enableElement(c(this))
    }),
    e.on("ajax:complete", u.buttonDisableSelector, function() {
        u.enableFormElement(c(this))
    }),
    e.on("click.rails", u.linkClickSelector, function(e) {
        var t = c(this)
          , n = t.data("method")
          , i = t.data("params")
          , r = e.metaKey || e.ctrlKey;
        if (!u.allowAction(t))
            return u.stopEverything(e);
        if (!r && t.is(u.linkDisableSelector) && u.disableElement(t),
        u.isRemote(t)) {
            if (r && (!n || "GET" === n) && !i)
                return !0;
            var o = u.handleRemote(t);
            return !1 === o ? u.enableElement(t) : o.fail(function() {
                u.enableElement(t)
            }),
            !1
        }
        return n ? (u.handleMethod(t),
        !1) : void 0
    }),
    e.on("click.rails", u.buttonClickSelector, function(e) {
        var t = c(this);
        if (!u.allowAction(t) || !u.isRemote(t))
            return u.stopEverything(e);
        t.is(u.buttonDisableSelector) && u.disableFormElement(t);
        var n = u.handleRemote(t);
        return !1 === n ? u.enableFormElement(t) : n.fail(function() {
            u.enableFormElement(t)
        }),
        !1
    }),
    e.on("change.rails", u.inputChangeSelector, function(e) {
        var t = c(this);
        return u.allowAction(t) && u.isRemote(t) ? (u.handleRemote(t),
        !1) : u.stopEverything(e)
    }),
    e.on("submit.rails", u.formSubmitSelector, function(e) {
        var t, n, i = c(this), r = u.isRemote(i);
        if (!u.allowAction(i))
            return u.stopEverything(e);
        if (i.attr("novalidate") === l)
            if (i.data("ujs:formnovalidate-button") === l) {
                if ((t = u.blankInputs(i, u.requiredInputSelector, !1)) && u.fire(i, "ajax:aborted:required", [t]))
                    return u.stopEverything(e)
            } else
                i.data("ujs:formnovalidate-button", l);
        if (r) {
            if (n = u.nonBlankInputs(i, u.fileInputSelector)) {
                setTimeout(function() {
                    u.disableFormElements(i)
                }, 13);
                var o = u.fire(i, "ajax:aborted:file", [n]);
                return o || setTimeout(function() {
                    u.enableFormElements(i)
                }, 13),
                o
            }
            return u.handleRemote(i),
            !1
        }
        setTimeout(function() {
            u.disableFormElements(i)
        }, 13)
    }),
    e.on("click.rails", u.formInputClickSelector, function(e) {
        var t = c(this);
        if (!u.allowAction(t))
            return u.stopEverything(e);
        var n = t.attr("name")
          , i = n ? {
            name: n,
            value: t.val()
        } : null
          , r = t.closest("form");
        0 === r.length && (r = c("#" + t.attr("form"))),
        r.data("ujs:submit-button", i),
        r.data("ujs:formnovalidate-button", t.attr("formnovalidate")),
        r.data("ujs:submit-button-formaction", t.attr("formaction")),
        r.data("ujs:submit-button-formmethod", t.attr("formmethod"))
    }),
    e.on("ajax:send.rails", u.formSubmitSelector, function(e) {
        this === e.target && u.disableFormElements(c(this))
    }),
    e.on("ajax:complete.rails", u.formSubmitSelector, function(e) {
        this === e.target && u.enableFormElements(c(this))
    }),
    c(function() {
        u.refreshCSRFTokens()
    }))
}(jQuery),
function(s, c) {
    var d = {
        catchMethods: {
            methodreturn: [],
            count: 0
        },
        init: function(e) {
            var t, n, i;
            console.log(e),
            e.originalEvent.origin.match(/vimeo/gi) && "data"in e.originalEvent && ((i = "string" === s.type(e.originalEvent.data) ? s.parseJSON(e.originalEvent.data) : e.originalEvent.data) && ((t = this.setPlayerID(i)).length && (n = this.setVimeoAPIurl(t),
            i.hasOwnProperty("event") && this.handleEvent(i, t, n),
            i.hasOwnProperty("method") && this.handleMethod(i, t, n))))
        },
        setPlayerID: function(e) {
            return s("iframe[src*=" + e.player_id + "]")
        },
        setVimeoAPIurl: function(e) {
            return "http" !== e.attr("src").substr(0, 4) ? "https:" + e.attr("src").split("?")[0] : e.attr("src").split("?")[0]
        },
        handleMethod: function(e) {
            this.catchMethods.methodreturn.push(e.value)
        },
        handleEvent: function(e, t, n) {
            switch (e.event.toLowerCase()) {
            case "ready":
                for (var i in s._data(t[0], "events"))
                    i.match(/loadProgress|playProgress|play|pause|finish|seek|cuechange/) && t[0].contentWindow.postMessage(JSON.stringify({
                        method: "addEventListener",
                        value: i
                    }), n);
                if (t.data("vimeoAPICall")) {
                    for (var r = t.data("vimeoAPICall"), o = 0; o < r.length; o++)
                        t[0].contentWindow.postMessage(JSON.stringify(r[o].message), r[o].api);
                    t.removeData("vimeoAPICall")
                }
                t.data("vimeoReady", !0),
                t.triggerHandler("ready");
                break;
            case "seek":
                t.triggerHandler("seek", [e.data]);
                break;
            case "loadprogress":
                t.triggerHandler("loadProgress", [e.data]);
                break;
            case "playprogress":
                t.triggerHandler("playProgress", [e.data]);
                break;
            case "pause":
                t.triggerHandler("pause");
                break;
            case "finish":
                t.triggerHandler("finish");
                break;
            case "play":
                t.triggerHandler("play");
                break;
            case "cuechange":
                t.triggerHandler("cuechange")
            }
        }
    }
      , e = s.fn.vimeoLoad = function() {
        var e = s(this).attr("src")
          , t = !1;
        ("https:" !== e.substr(0, 6) && (e = "http" === e.substr(0, 4) ? "https" + e.substr(4) : "https:" + e,
        t = !0),
        null === e.match(/player_id/g)) && (t = !0,
        e = e + (-1 === e.indexOf("?") ? "?" : "&") + s.param({
            api: 1,
            player_id: "vvvvimeoVideo-" + Math.floor(1e7 * Math.random() + 1).toString()
        }));
        return t && s(this).attr("src", e),
        this
    }
    ;
    jQuery(document).ready(function() {
        s("iframe[src*='vimeo.com']").each(function() {
            e.call(this)
        })
    }),
    s(["loadProgress", "playProgress", "play", "pause", "finish", "seek", "cuechange"]).each(function(e, i) {
        jQuery.event.special[i] = {
            setup: function() {
                var e = s(this).attr("src");
                if (s(this).is("iframe") && e.match(/vimeo/gi)) {
                    var t = s(this);
                    if (void 0 !== t.data("vimeoReady"))
                        t[0].contentWindow.postMessage(JSON.stringify({
                            method: "addEventListener",
                            value: i
                        }), d.setVimeoAPIurl(s(this)));
                    else {
                        var n = void 0 !== t.data("vimeoAPICall") ? t.data("vimeoAPICall") : [];
                        n.push({
                            message: i,
                            api: d.setVimeoAPIurl(t)
                        }),
                        t.data("vimeoAPICall", n)
                    }
                }
            }
        }
    }),
    s(c).on("message", function(e) {
        d.init(e)
    }),
    s.vimeo = function(e, t, n) {
        var i, r, o, s, a = {}, l = d.catchMethods.methodreturn.length;
        if ("string" == typeof t && (a.method = t),
        void 0 !== typeof n && "function" != typeof n && (a.value = n),
        e.is("iframe") && a.hasOwnProperty("method"))
            if (e.data("vimeoReady"))
                e[0].contentWindow.postMessage(JSON.stringify(a), d.setVimeoAPIurl(e));
            else {
                var u = e.data("vimeoAPICall") ? e.data("vimeoAPICall") : [];
                u.push({
                    message: a,
                    api: d.setVimeoAPIurl(e)
                }),
                e.data("vimeoAPICall", u)
            }
        return "get" !== t.toString().substr(0, 3) && "paused" !== t.toString() || "function" != typeof n || (i = l,
        r = n,
        o = d.catchMethods.count,
        s = c.setInterval(function() {
            d.catchMethods.methodreturn.length != i && (c.clearInterval(s),
            r(d.catchMethods.methodreturn[o]))
        }, 10),
        d.catchMethods.count++),
        e
    }
    ,
    s.fn.vimeo = function(e, t) {
        return s.vimeo(this, e, t)
    }
}(jQuery, window),
function(X) {
    var V = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function() {
            return !0
            alert('yo');
        },
        onSlideBefore: function() {
            return !0
        },
        onSlideAfter: function() {
            return !0
        },
        onSlideNext: function() {
            return !0
        },
        onSlidePrev: function() {
            return !0
        },
        onSliderResize: function() {
            return !0
        }
    };
    X.fn.bxSlider = function(t) {
        if (0 === this.length)
            return this;
        if (1 < this.length)
            return this.each(function() {
                X(this).bxSlider(t)
            }),
            this;
        var c = {}
          , d = this
          , n = X(window).width()
          , r = X(window).height();
        if (!X(d).data("bxSlider")) {
            var o = function() {
                X(d).data("bxSlider") || (c.settings = X.extend({}, V, t),
                c.settings.slideWidth = parseInt(c.settings.slideWidth),
                c.children = d.children(c.settings.slideSelector),
                c.children.length < c.settings.minSlides && (c.settings.minSlides = c.children.length),
                c.children.length < c.settings.maxSlides && (c.settings.maxSlides = c.children.length),
                c.settings.randomStart && (c.settings.startSlide = Math.floor(Math.random() * c.children.length)),
                c.active = {
                    index: c.settings.startSlide
                },
                c.carousel = 1 < c.settings.minSlides || 1 < c.settings.maxSlides,
                c.carousel && (c.settings.preloadImages = "all"),
                c.minThreshold = c.settings.minSlides * c.settings.slideWidth + (c.settings.minSlides - 1) * c.settings.slideMargin,
                c.maxThreshold = c.settings.maxSlides * c.settings.slideWidth + (c.settings.maxSlides - 1) * c.settings.slideMargin,
                c.working = !1,
                c.controls = {},
                c.interval = null,
                c.animProp = "vertical" === c.settings.mode ? "top" : "left",
                c.usingCSS = c.settings.useCSS && "fade" !== c.settings.mode && function() {
                    for (var e = document.createElement("div"), t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], n = 0; n < t.length; n++)
                        if (void 0 !== e.style[t[n]])
                            return c.cssPrefix = t[n].replace("Perspective", "").toLowerCase(),
                            c.animProp = "-" + c.cssPrefix + "-transform",
                            !0;
                    return !1
                }(),
                "vertical" === c.settings.mode && (c.settings.maxSlides = c.settings.minSlides),
                d.data("origStyle", d.attr("style")),
                d.children(c.settings.slideSelector).each(function() {
                    X(this).data("origStyle", X(this).attr("style"))
                }),
                e())
            }
              , e = function() {
                var e = c.children.eq(c.settings.startSlide);
                d.wrap('<div class="' + c.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'),
                c.viewport = d.parent(),
                c.settings.ariaLive && !c.settings.ticker && c.viewport.attr("aria-live", "polite"),
                c.loader = X('<div class="bx-loading" />'),
                c.viewport.prepend(c.loader),
                d.css({
                    width: "horizontal" === c.settings.mode ? 1e3 * c.children.length + 215 + "%" : "auto",
                    position: "relative"
                }),
                c.usingCSS && c.settings.easing ? d.css("-" + c.cssPrefix + "-transition-timing-function", c.settings.easing) : c.settings.easing || (c.settings.easing = "swing"),
                c.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }),
                c.viewport.parent().css({
                    maxWidth: l()
                }),
                c.children.css({
                    "float": "horizontal" === c.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }),
                c.children.css("width", u()),
                "horizontal" === c.settings.mode && 0 < c.settings.slideMargin && c.children.css("marginRight", c.settings.slideMargin),
                "vertical" === c.settings.mode && 0 < c.settings.slideMargin && c.children.css("marginBottom", c.settings.slideMargin),
                "fade" === c.settings.mode && (c.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }),
                c.children.eq(c.settings.startSlide).css({
                    zIndex: c.settings.slideZIndex,
                    display: "block"
                })),
                c.controls.el = X('<div class="bx-controls" />'),
                c.settings.captions && S(),
                c.active.last = c.settings.startSlide === h() - 1,
                c.settings.video && d.fitVids(),
                ("all" === c.settings.preloadImages || c.settings.ticker) && (e = c.children),
                c.settings.ticker ? c.settings.pager = !1 : (c.settings.controls && x(),
                c.settings.auto && c.settings.autoControls && w(),
                c.settings.pager && b(),
                (c.settings.controls || c.settings.autoControls || c.settings.pager) && c.viewport.after(c.controls.el)),
                s(e, a)
            }
              , s = function(e, t) {
                var n = e.find('img:not([src=""]), iframe').length
                  , i = 0;
                return 0 === n ? void t() : void e.find('img:not([src=""]), iframe').each(function() {
                    X(this).one("load error", function() {
                        ++i === n && t()
                    }).each(function() {
                        this.complete && X(this).trigger("load")
                    })
                })
            }
              , a = function() {
                if (c.settings.infiniteLoop && "fade" !== c.settings.mode && !c.settings.ticker) {
                    var e = "vertical" === c.settings.mode ? c.settings.minSlides : c.settings.maxSlides
                      , t = c.children.slice(0, e).clone(!0).addClass("bx-clone")
                      , n = c.children.slice(-e).clone(!0).addClass("bx-clone");
                    c.settings.ariaHidden && (t.attr("aria-hidden", !0),
                    n.attr("aria-hidden", !0)),
                    d.append(t).prepend(n)
                }
                c.loader.remove(),
                m(),
                "vertical" === c.settings.mode && (c.settings.adaptiveHeight = !0),
                c.viewport.height(f()),
                d.redrawSlider(),
                c.settings.onSliderLoad.call(d, c.active.index),
                c.initialized = !0,
                c.settings.responsive && X(window).bind("resize", z),
                c.settings.auto && c.settings.autoStart && (1 < h() || c.settings.autoSlideForOnePage) && q(),
                c.settings.ticker && L(),
                c.settings.pager && D(c.settings.startSlide),
                c.settings.controls && P(),
                c.settings.touchEnabled && !c.settings.ticker && F(),
                c.settings.keyboardEnabled && !c.settings.ticker && X(document).keydown(H)
            }
              , f = function() {
                var e = 0
                  , t = X();
                if ("vertical" === c.settings.mode || c.settings.adaptiveHeight)
                    if (c.carousel) {
                        var n = 1 === c.settings.moveSlides ? c.active.index : c.active.index * g();
                        for (t = c.children.eq(n),
                        i = 1; i <= c.settings.maxSlides - 1; i++)
                            t = n + i >= c.children.length ? t.add(c.children.eq(i - 1)) : t.add(c.children.eq(n + i))
                    } else
                        t = c.children.eq(c.active.index);
                else
                    t = c.children;
                return "vertical" === c.settings.mode ? (t.each(function() {
                    e += X(this).outerHeight()
                }),
                0 < c.settings.slideMargin && (e += c.settings.slideMargin * (c.settings.minSlides - 1))) : e = Math.max.apply(Math, t.map(function() {
                    return X(this).outerHeight(!1)
                }).get()),
                "border-box" === c.viewport.css("box-sizing") ? e += parseFloat(c.viewport.css("padding-top")) + parseFloat(c.viewport.css("padding-bottom")) + parseFloat(c.viewport.css("border-top-width")) + parseFloat(c.viewport.css("border-bottom-width")) : "padding-box" === c.viewport.css("box-sizing") && (e += parseFloat(c.viewport.css("padding-top")) + parseFloat(c.viewport.css("padding-bottom"))),
                e
            }
              , l = function() {
                var e = "100%";
                return 0 < c.settings.slideWidth && (e = "horizontal" === c.settings.mode ? c.settings.maxSlides * c.settings.slideWidth + (c.settings.maxSlides - 1) * c.settings.slideMargin : c.settings.slideWidth),
                e
            }
              , u = function() {
                var e = c.settings.slideWidth
                  , t = c.viewport.width();
                if (0 === c.settings.slideWidth || c.settings.slideWidth > t && !c.carousel || "vertical" === c.settings.mode)
                    e = t;
                else if (1 < c.settings.maxSlides && "horizontal" === c.settings.mode) {
                    if (t > c.maxThreshold)
                        return e;
                    t < c.minThreshold ? e = (t - c.settings.slideMargin * (c.settings.minSlides - 1)) / c.settings.minSlides : c.settings.shrinkItems && (e = Math.floor((t + c.settings.slideMargin) / Math.ceil((t + c.settings.slideMargin) / (e + c.settings.slideMargin)) - c.settings.slideMargin))
                }
                return e
            }
              , p = function() {
                var e = 1
                  , t = null;
                return "horizontal" === c.settings.mode && 0 < c.settings.slideWidth ? c.viewport.width() < c.minThreshold ? e = c.settings.minSlides : c.viewport.width() > c.maxThreshold ? e = c.settings.maxSlides : (t = c.children.first().width() + c.settings.slideMargin,
                e = Math.floor((c.viewport.width() + c.settings.slideMargin) / t)) : "vertical" === c.settings.mode && (e = c.settings.minSlides),
                e
            }
              , h = function() {
                var e = 0
                  , t = 0
                  , n = 0;
                if (0 < c.settings.moveSlides)
                    if (c.settings.infiniteLoop)
                        e = Math.ceil(c.children.length / g());
                    else
                        for (; t < c.children.length; )
                            ++e,
                            t = n + p(),
                            n += c.settings.moveSlides <= p() ? c.settings.moveSlides : p();
                else
                    e = Math.ceil(c.children.length / p());
                return e
            }
              , g = function() {
                return 0 < c.settings.moveSlides && c.settings.moveSlides <= p() ? c.settings.moveSlides : p()
            }
              , m = function() {
                var e, t, n;
                c.children.length > c.settings.maxSlides && c.active.last && !c.settings.infiniteLoop ? "horizontal" === c.settings.mode ? (e = (t = c.children.last()).position(),
                v(-(e.left - (c.viewport.width() - t.outerWidth())), "reset", 0)) : "vertical" === c.settings.mode && (n = c.children.length - c.settings.minSlides,
                e = c.children.eq(n).position(),
                v(-e.top, "reset", 0)) : (e = c.children.eq(c.active.index * g()).position(),
                c.active.index === h() - 1 && (c.active.last = !0),
                void 0 !== e && ("horizontal" === c.settings.mode ? v(-e.left, "reset", 0) : "vertical" === c.settings.mode && v(-e.top, "reset", 0)))
            }
              , v = function(e, t, n, i) {
                var r, o;
                c.usingCSS ? (o = "vertical" === c.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)",
                d.css("-" + c.cssPrefix + "-transition-duration", n / 1e3 + "s"),
                "slide" === t ? (d.css(c.animProp, o),
                0 !== n ? d.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                    X(e.target).is(d) && (d.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                    A())
                }) : A()) : "reset" === t ? d.css(c.animProp, o) : "ticker" === t && (d.css("-" + c.cssPrefix + "-transition-timing-function", "linear"),
                d.css(c.animProp, o),
                0 !== n ? d.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                    X(e.target).is(d) && (d.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                    v(i.resetValue, "reset", 0),
                    M())
                }) : (v(i.resetValue, "reset", 0),
                M()))) : ((r = {})[c.animProp] = e,
                "slide" === t ? d.animate(r, n, c.settings.easing, function() {
                    A()
                }) : "reset" === t ? d.css(c.animProp, e) : "ticker" === t && d.animate(r, n, "linear", function() {
                    v(i.resetValue, "reset", 0),
                    M()
                }))
            }
              , y = function() {
                for (var e = "", t = "", n = h(), i = 0; i < n; i++)
                    t = "",
                    c.settings.buildPager && X.isFunction(c.settings.buildPager) || c.settings.pagerCustom ? (t = c.settings.buildPager(i),
                    c.pagerEl.addClass("bx-custom-pager")) : (t = i + 1,
                    c.pagerEl.addClass("bx-default-pager")),
                    e += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + t + "</a></div>";
                c.pagerEl.html(e)
            }
              , b = function() {
                c.settings.pagerCustom ? c.pagerEl = X(c.settings.pagerCustom) : (c.pagerEl = X('<div class="bx-pager" />'),
                c.settings.pagerSelector ? X(c.settings.pagerSelector).html(c.pagerEl) : c.controls.el.addClass("bx-has-pager").append(c.pagerEl),
                y()),
                c.pagerEl.on("click touchend", "a", j)
            }
              , x = function() {
                c.controls.next = X('<a class="bx-next" href="">' + c.settings.nextText + "</a>"),
                c.controls.prev = X('<a class="bx-prev" href="">' + c.settings.prevText + "</a>"),
                c.controls.next.bind("click touchend", C),
                c.controls.prev.bind("click touchend", T),
                c.settings.nextSelector && X(c.settings.nextSelector).append(c.controls.next),
                c.settings.prevSelector && X(c.settings.prevSelector).append(c.controls.prev),
                c.settings.nextSelector || c.settings.prevSelector || (c.controls.directionEl = X('<div class="bx-controls-direction" />'),
                c.controls.directionEl.append(c.controls.prev).append(c.controls.next),
                c.controls.el.addClass("bx-has-controls-direction").append(c.controls.directionEl))
            }
              , w = function() {
                c.controls.start = X('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + c.settings.startText + "</a></div>"),
                c.controls.stop = X('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + c.settings.stopText + "</a></div>"),
                c.controls.autoEl = X('<div class="bx-controls-auto" />'),
                c.controls.autoEl.on("click", ".bx-start", k),
                c.controls.autoEl.on("click", ".bx-stop", E),
                c.settings.autoControlsCombine ? c.controls.autoEl.append(c.controls.start) : c.controls.autoEl.append(c.controls.start).append(c.controls.stop),
                c.settings.autoControlsSelector ? X(c.settings.autoControlsSelector).html(c.controls.autoEl) : c.controls.el.addClass("bx-has-controls-auto").append(c.controls.autoEl),
                N(c.settings.autoStart ? "stop" : "start")
            }
              , S = function() {
                c.children.each(function() {
                    var e = X(this).find("img:first").attr("title");
                    void 0 !== e && ("" + e).length && X(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                })
            }
              , C = function(e) {
                e.preventDefault(),
                c.controls.el.hasClass("disabled") || (c.settings.auto && c.settings.stopAutoOnClick && d.stopAuto(),
                d.goToNextSlide())
            }
              , T = function(e) {
                e.preventDefault(),
                c.controls.el.hasClass("disabled") || (c.settings.auto && c.settings.stopAutoOnClick && d.stopAuto(),
                d.goToPrevSlide())
            }
              , k = function(e) {
                d.startAuto(),
                e.preventDefault()
            }
              , E = function(e) {
                d.stopAuto(),
                e.preventDefault()
            }
              , j = function(e) {
                var t, n;
                e.preventDefault(),
                c.controls.el.hasClass("disabled") || (c.settings.auto && c.settings.stopAutoOnClick && d.stopAuto(),
                void 0 !== (t = X(e.currentTarget)).attr("data-slide-index") && ((n = parseInt(t.attr("data-slide-index"))) !== c.active.index && d.goToSlide(n)))
            }
              , D = function(n) {
                var e = c.children.length;
                return "short" === c.settings.pagerType ? (1 < c.settings.maxSlides && (e = Math.ceil(c.children.length / c.settings.maxSlides)),
                void c.pagerEl.html(n + 1 + c.settings.pagerShortSeparator + e)) : (c.pagerEl.find("a").removeClass("active"),
                void c.pagerEl.each(function(e, t) {
                    X(t).find("a").eq(n).addClass("active")
                }))
            }
              , A = function() {
                if (c.settings.infiniteLoop) {
                    var e = "";
                    0 === c.active.index ? e = c.children.eq(0).position() : c.active.index === h() - 1 && c.carousel ? e = c.children.eq((h() - 1) * g()).position() : c.active.index === c.children.length - 1 && (e = c.children.eq(c.children.length - 1).position()),
                    e && ("horizontal" === c.settings.mode ? v(-e.left, "reset", 0) : "vertical" === c.settings.mode && v(-e.top, "reset", 0))
                }
                c.working = !1,
                c.settings.onSlideAfter.call(d, c.children.eq(c.active.index), c.oldIndex, c.active.index)
            }
              , N = function(e) {
                c.settings.autoControlsCombine ? c.controls.autoEl.html(c.controls[e]) : (c.controls.autoEl.find("a").removeClass("active"),
                c.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
            }
              , P = function() {
                1 === h() ? (c.controls.prev.addClass("disabled"),
                c.controls.next.addClass("disabled")) : !c.settings.infiniteLoop && c.settings.hideControlOnEnd && (0 === c.active.index ? (c.controls.prev.addClass("disabled"),
                c.controls.next.removeClass("disabled")) : c.active.index === h() - 1 ? (c.controls.next.addClass("disabled"),
                c.controls.prev.removeClass("disabled")) : (c.controls.prev.removeClass("disabled"),
                c.controls.next.removeClass("disabled")))
            }
              , q = function() {
                0 < c.settings.autoDelay ? setTimeout(d.startAuto, c.settings.autoDelay) : (d.startAuto(),
                X(window).focus(function() {
                    d.startAuto()
                }).blur(function() {
                    d.stopAuto()
                })),
                c.settings.autoHover && d.hover(function() {
                    c.interval && (d.stopAuto(!0),
                    c.autoPaused = !0)
                }, function() {
                    c.autoPaused && (d.startAuto(!0),
                    c.autoPaused = null)
                })
            }
              , L = function() {
                var e, t, n, i, r, o, s, a, l = 0;
                "next" === c.settings.autoDirection ? d.append(c.children.clone().addClass("bx-clone")) : (d.prepend(c.children.clone().addClass("bx-clone")),
                e = c.children.first().position(),
                l = "horizontal" === c.settings.mode ? -e.left : -e.top),
                v(l, "reset", 0),
                c.settings.pager = !1,
                c.settings.controls = !1,
                c.settings.autoControls = !1,
                c.settings.tickerHover && (c.usingCSS ? (i = "horizontal" === c.settings.mode ? 4 : 5,
                c.viewport.hover(function() {
                    t = d.css("-" + c.cssPrefix + "-transform"),
                    n = parseFloat(t.split(",")[i]),
                    v(n, "reset", 0)
                }, function() {
                    a = 0,
                    c.children.each(function() {
                        a += "horizontal" === c.settings.mode ? X(this).outerWidth(!0) : X(this).outerHeight(!0)
                    }),
                    r = c.settings.speed / a,
                    o = "horizontal" === c.settings.mode ? "left" : "top",
                    s = r * (a - Math.abs(parseInt(n))),
                    M(s)
                })) : c.viewport.hover(function() {
                    d.stop()
                }, function() {
                    a = 0,
                    c.children.each(function() {
                        a += "horizontal" === c.settings.mode ? X(this).outerWidth(!0) : X(this).outerHeight(!0)
                    }),
                    r = c.settings.speed / a,
                    o = "horizontal" === c.settings.mode ? "left" : "top",
                    s = r * (a - Math.abs(parseInt(d.css(o)))),
                    M(s)
                })),
                M()
            }
              , M = function(e) {
                var t, n, i = e || c.settings.speed, r = {
                    left: 0,
                    top: 0
                }, o = {
                    left: 0,
                    top: 0
                };
                "next" === c.settings.autoDirection ? r = d.find(".bx-clone").first().position() : o = c.children.first().position(),
                t = "horizontal" === c.settings.mode ? -r.left : -r.top,
                n = "horizontal" === c.settings.mode ? -o.left : -o.top,
                v(t, "ticker", i, {
                    resetValue: n
                })
            }
              , I = function(e) {
                var t = X(window)
                  , n = {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
                  , i = e.offset();
                return n.right = n.left + t.width(),
                n.bottom = n.top + t.height(),
                i.right = i.left + e.outerWidth(),
                i.bottom = i.top + e.outerHeight(),
                !(n.right < i.left || n.left > i.right || n.bottom < i.top || n.top > i.bottom)
            }
              , H = function(e) {
                var t = document.activeElement.tagName.toLowerCase()
                  , n = "input|textarea";
                if (null == new RegExp(t,["i"]).exec(n) && I(d)) {
                    if (39 === e.keyCode)
                        return C(e),
                        !1;
                    if (37 === e.keyCode)
                        return T(e),
                        !1
                }
            }
              , F = function() {
                c.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                },
                c.viewport.bind("touchstart MSPointerDown pointerdown", O),
                c.viewport.on("click", ".bxslider a", function(e) {
                    c.viewport.hasClass("click-disabled") && (e.preventDefault(),
                    c.viewport.removeClass("click-disabled"))
                })
            }
              , O = function(e) {
                if (c.controls.el.addClass("disabled"),
                c.working)
                    e.preventDefault(),
                    c.controls.el.removeClass("disabled");
                else {
                    c.touch.originalPos = d.position();
                    var t = e.originalEvent
                      , n = "undefined" != typeof t.changedTouches ? t.changedTouches : [t];
                    c.touch.start.x = n[0].pageX,
                    c.touch.start.y = n[0].pageY,
                    c.viewport.get(0).setPointerCapture && (c.pointerId = t.pointerId,
                    c.viewport.get(0).setPointerCapture(c.pointerId)),
                    c.viewport.bind("touchmove MSPointerMove pointermove", $),
                    c.viewport.bind("touchend MSPointerUp pointerup", W),
                    c.viewport.bind("MSPointerCancel pointercancel", R)
                }
            }
              , R = function() {
                v(c.touch.originalPos.left, "reset", 0),
                c.controls.el.removeClass("disabled"),
                c.viewport.unbind("MSPointerCancel pointercancel", R),
                c.viewport.unbind("touchmove MSPointerMove pointermove", $),
                c.viewport.unbind("touchend MSPointerUp pointerup", W),
                c.viewport.get(0).releasePointerCapture && c.viewport.get(0).releasePointerCapture(c.pointerId)
            }
              , $ = function(e) {
                var t = e.originalEvent
                  , n = "undefined" != typeof t.changedTouches ? t.changedTouches : [t]
                  , i = Math.abs(n[0].pageX - c.touch.start.x)
                  , r = Math.abs(n[0].pageY - c.touch.start.y)
                  , o = 0
                  , s = 0;
                r < 3 * i && c.settings.preventDefaultSwipeX ? e.preventDefault() : i < 3 * r && c.settings.preventDefaultSwipeY && e.preventDefault(),
                "fade" !== c.settings.mode && c.settings.oneToOneTouch && ("horizontal" === c.settings.mode ? (s = n[0].pageX - c.touch.start.x,
                o = c.touch.originalPos.left + s) : (s = n[0].pageY - c.touch.start.y,
                o = c.touch.originalPos.top + s),
                v(o, "reset", 0))
            }
              , W = function(e) {
                c.viewport.unbind("touchmove MSPointerMove pointermove", $),
                c.controls.el.removeClass("disabled");
                var t = e.originalEvent
                  , n = "undefined" != typeof t.changedTouches ? t.changedTouches : [t]
                  , i = 0
                  , r = 0;
                c.touch.end.x = n[0].pageX,
                c.touch.end.y = n[0].pageY,
                "fade" === c.settings.mode ? (r = Math.abs(c.touch.start.x - c.touch.end.x)) >= c.settings.swipeThreshold && (c.touch.start.x > c.touch.end.x ? d.goToNextSlide() : d.goToPrevSlide(),
                d.stopAuto()) : ("horizontal" === c.settings.mode ? (r = c.touch.end.x - c.touch.start.x,
                i = c.touch.originalPos.left) : (r = c.touch.end.y - c.touch.start.y,
                i = c.touch.originalPos.top),
                !c.settings.infiniteLoop && (0 === c.active.index && 0 < r || c.active.last && r < 0) ? v(i, "reset", 200) : Math.abs(r) >= c.settings.swipeThreshold ? (r < 0 ? d.goToNextSlide() : d.goToPrevSlide(),
                d.stopAuto()) : v(i, "reset", 200)),
                c.viewport.unbind("touchend MSPointerUp pointerup", W),
                c.viewport.get(0).releasePointerCapture && c.viewport.get(0).releasePointerCapture(c.pointerId)
            }
              , z = function() {
                if (c.initialized)
                    if (c.working)
                        window.setTimeout(z, 10);
                    else {
                        var e = X(window).width()
                          , t = X(window).height();
                        n === e && r === t || (n = e,
                        r = t,
                        d.redrawSlider(),
                        c.settings.onSliderResize.call(d, c.active.index))
                    }
            }
              , B = function(e) {
                var t = p();
                c.settings.ariaHidden && !c.settings.ticker && (c.children.attr("aria-hidden", "true"),
                c.children.slice(e, e + t).attr("aria-hidden", "false"))
            }
              , _ = function(e) {
                return e < 0 ? c.settings.infiniteLoop ? h() - 1 : c.active.index : e >= h() ? c.settings.infiniteLoop ? 0 : c.active.index : e
            };
            return d.goToSlide = function(e, t) {
                var n, i, r, o, s = !0, a = 0, l = {
                    left: 0,
                    top: 0
                }, u = null;
                if (c.oldIndex = c.active.index,
                c.active.index = _(e),
                !c.working && c.active.index !== c.oldIndex) {
                    if (c.working = !0,
                    void 0 !== (s = c.settings.onSlideBefore.call(d, c.children.eq(c.active.index), c.oldIndex, c.active.index)) && !s)
                        return c.active.index = c.oldIndex,
                        void (c.working = !1);
                    "next" === t ? c.settings.onSlideNext.call(d, c.children.eq(c.active.index), c.oldIndex, c.active.index) || (s = !1) : "prev" === t && (c.settings.onSlidePrev.call(d, c.children.eq(c.active.index), c.oldIndex, c.active.index) || (s = !1)),
                    c.active.last = c.active.index >= h() - 1,
                    (c.settings.pager || c.settings.pagerCustom) && D(c.active.index),
                    c.settings.controls && P(),
                    "fade" === c.settings.mode ? (c.settings.adaptiveHeight && c.viewport.height() !== f() && c.viewport.animate({
                        height: f()
                    }, c.settings.adaptiveHeightSpeed),
                    c.children.filter(":visible").fadeOut(c.settings.speed).css({
                        zIndex: 0
                    }),
                    c.children.eq(c.active.index).css("zIndex", c.settings.slideZIndex + 1).fadeIn(c.settings.speed, function() {
                        X(this).css("zIndex", c.settings.slideZIndex),
                        A()
                    })) : (c.settings.adaptiveHeight && c.viewport.height() !== f() && c.viewport.animate({
                        height: f()
                    }, c.settings.adaptiveHeightSpeed),
                    !c.settings.infiniteLoop && c.carousel && c.active.last ? "horizontal" === c.settings.mode ? (l = (u = c.children.eq(c.children.length - 1)).position(),
                    a = c.viewport.width() - u.outerWidth()) : (n = c.children.length - c.settings.minSlides,
                    l = c.children.eq(n).position()) : c.carousel && c.active.last && "prev" === t ? (i = 1 === c.settings.moveSlides ? c.settings.maxSlides - g() : (h() - 1) * g() - (c.children.length - c.settings.maxSlides),
                    l = (u = d.children(".bx-clone").eq(i)).position()) : "next" === t && 0 === c.active.index ? (l = d.find("> .bx-clone").eq(c.settings.maxSlides).position(),
                    c.active.last = !1) : 0 <= e && (o = e * parseInt(g()),
                    l = c.children.eq(o).position()),
                    void 0 !== l ? (r = "horizontal" === c.settings.mode ? -(l.left - a) : -l.top,
                    v(r, "slide", c.settings.speed)) : c.working = !1),
                    c.settings.ariaHidden && B(c.active.index * g())
                }
            }
            ,
            d.goToNextSlide = function() {
                if (c.settings.infiniteLoop || !c.active.last) {
                    var e = parseInt(c.active.index) + 1;
                    d.goToSlide(e, "next")
                }
            }
            ,
            d.goToPrevSlide = function() {
                if (c.settings.infiniteLoop || 0 !== c.active.index) {
                    var e = parseInt(c.active.index) - 1;
                    d.goToSlide(e, "prev")
                }
            }
            ,
            d.startAuto = function(e) {
                c.interval || (c.interval = setInterval(function() {
                    "next" === c.settings.autoDirection ? d.goToNextSlide() : d.goToPrevSlide()
                }, c.settings.pause),
                c.settings.autoControls && !0 !== e && N("stop"))
            }
            ,
            d.stopAuto = function(e) {
                c.interval && (clearInterval(c.interval),
                c.interval = null,
                c.settings.autoControls && !0 !== e && N("start"))
            }
            ,
            d.getCurrentSlide = function() {
                return c.active.index
            }
            ,
            d.getCurrentSlideElement = function() {
                return c.children.eq(c.active.index)
            }
            ,
            d.getSlideElement = function(e) {
                return c.children.eq(e)
            }
            ,
            d.getSlideCount = function() {
                return c.children.length
            }
            ,
            d.isWorking = function() {
                return c.working
            }
            ,
            d.redrawSlider = function() {
                c.children.add(d.find(".bx-clone")).outerWidth(u()),
                c.viewport.css("height", f()),
                c.settings.ticker || m(),
                c.active.last && (c.active.index = h() - 1),
                c.active.index >= h() && (c.active.last = !0),
                c.settings.pager && !c.settings.pagerCustom && (y(),
                D(c.active.index)),
                c.settings.ariaHidden && B(c.active.index * g())
            }
            ,
            d.destroySlider = function() {
                c.initialized && (c.initialized = !1,
                X(".bx-clone", this).remove(),
                c.children.each(function() {
                    void 0 !== X(this).data("origStyle") ? X(this).attr("style", X(this).data("origStyle")) : X(this).removeAttr("style")
                }),
                void 0 !== X(this).data("origStyle") ? this.attr("style", X(this).data("origStyle")) : X(this).removeAttr("style"),
                X(this).unwrap().unwrap(),
                c.controls.el && c.controls.el.remove(),
                c.controls.next && c.controls.next.remove(),
                c.controls.prev && c.controls.prev.remove(),
                c.pagerEl && c.settings.controls && !c.settings.pagerCustom && c.pagerEl.remove(),
                X(".bx-caption", this).remove(),
                c.controls.autoEl && c.controls.autoEl.remove(),
                clearInterval(c.interval),
                c.settings.responsive && X(window).unbind("resize", z),
                c.settings.keyboardEnabled && X(document).unbind("keydown", H),
                X(this).removeData("bxSlider"))
            }
            ,
            d.reloadSlider = function(e) {
                void 0 !== e && (t = e),
                d.destroySlider(),
                o(),
                X(d).data("bxSlider", this)
            }
            ,
            o(),
            X(d).data("bxSlider", this),
            this
        }
    }
}(jQuery),
$(window).scroll(function() {
    $("#header");
    120 < $(this).scrollTop() && $("#header").fadeOut(215),
    $(this).scrollTop() < 120 && $("#header").fadeIn(511)
}),
$(document).on("click", "#playpause", function() {}),
$(".bxslider").bxSlider(),
$("#video").on("finish", function() {
    $(".bx-next").click()
}),
$(document).on("click", ".bottom-left", function(e) {
    e.preventDefault(),
    $(".bx-prev").click()
}),
$(document).on("click", ".bottom-right", function(e) {
    e.preventDefault(),
    $(".bx-next").click()
}),
$(document).on("click", ".bx-viewport", function() {
    $(".static").animate({
        opacity: 0
    }, "2000", function() {
        $("#curtain").slideToggle(2555),
        $(".nav:visible").hide(),
        $("#closebtn:hidden").show()
    })
}),
//$(document).on("click", "#closebtn", function() {
//    $(".static").animate({
 //       opacity: 1
 //   }, "2000", function() {
 //       $("#curtain").slideToggle(2555),
  //      $("#closebtn:visible").hide(),
  //      $(".nav:hidden").show()
  //  })
//}),
$(document).on("click", ".youtube", function() {
    window.open("http://www.youtube.com/", "_blank")
}),
$(document).on("click", ".facebook", function() {
    window.open("http://www.facebook.com/", "_blank")
}),
$(document).on("click", ".soundcloud", function() {
    window.open("http://www.soundcloud.com/", "_blank")
}),
$(document).on("click", ".overlay a", function() {
    $(this).attr("href");
    return $(".overlay").fadeOut(500, function() {
        $("html").removeClass("modal-open"),
        $("#myNav").fadeOut(),
        $("#menu").text("MENU")
    }),
    !1
}),
$(document).on("click", ".onhover", function() {
    var e = $(this).parents(".img-item").find("a").attr("href");
    return $(".gallery").fadeOut(1500, function() {
        window.location = e
    }),
    !1
}),
$(document).on("click", "a", function(e) {
    return e.preventDefault(),
   
    window.history.pushState(null, "page title", this.href)
}),
$(window).on("popstate", function(e) {
    return e.preventDefault(),
    $.getScript(document.location)
});

$(document).on("click", "#viewcase", function() {
    $(this).attr("href");
    return $("#maincontent").fadeOut(1500, function() {
        $("html").removeClass("modal-open");
        
    }),
    !1
});

$(document).on("click", ".nav a", function() {
    $(this).attr("href");
    return $("#maincontent").fadeOut(500, function() {
        $("html").removeClass("modal-open"),
        $("#menu").text("MENU")
    }),
    !1
});


function startupAnime() {

    $("#curtain").slideToggle(2200);
    $(".static").fadeTo( 2000, 0 ).promise().then(function(){

        return $(".nav").fadeToggle(1400).promise();
    }).done(function(){
        $("#closebtn, #viewcase").fadeToggle(500);
    });

}  

$(document).on("click", "#curtain", function() {

    startupAnime();

    //})    
});


function finishAnime() {
$("#closebtn, #viewcase").fadeToggle(500);
    $("#curtain").slideToggle(1500);
    $(".static").fadeToggle(1500).promise().then(function(){
        
        return $("#closebtn, #viewcase").fadeOut(800).promise();
       }).done(function(){
       $(".nav").fadeIn(1400)
    });

}  

$(document).on("click", "#closebtn", function() {

    finishAnime();

    //})    
});

