! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = me.type(e);
        return "function" === n || me.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (me.isFunction(t)) return me.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return me.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (De.test(t)) return me.filter(t, e, n);
            t = me.filter(t, e)
        }
        return me.grep(e, function(e) {
            return me.inArray(e, t) > -1 !== n
        })
    }

    function a(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return me.each(e.match(Se) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function i() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (i(), me.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ne, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : He.test(n) ? me.parseJSON(n) : n
                } catch (a) {}
                me.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !me.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function d(e, t, n, r) {
        if (Pe(e)) {
            var a, o, i = me.expando,
                s = e.nodeType,
                u = s ? me.cache : e,
                l = s ? e[i] : e[i] && i;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[i] = ne.pop() || me.guid++ : i), u[l] || (u[l] = s ? {} : {
                toJSON: me.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = me.extend(u[l], t) : u[l].data = me.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[me.camelCase(t)] = n), "string" == typeof t ? (a = o[t], null == a && (a = o[me.camelCase(t)])) : a = o, a
        }
    }

    function c(e, t, n) {
        if (Pe(e)) {
            var r, a, o = e.nodeType,
                i = o ? me.cache : e,
                s = o ? e[me.expando] : me.expando;
            if (i[s]) {
                if (t && (r = n ? i[s] : i[s].data)) {
                    me.isArray(t) ? t = t.concat(me.map(t, me.camelCase)) : t in r ? t = [t] : (t = me.camelCase(t), t = t in r ? [t] : t.split(" ")), a = t.length;
                    for (; a--;) delete r[t[a]];
                    if (n ? !l(r) : !me.isEmptyObject(r)) return
                }(n || (delete i[s].data, l(i[s]))) && (o ? me.cleanData([e], !0) : ce.deleteExpando || i != i.window ? delete i[s] : i[s] = void 0)
            }
        }
    }

    function p(e, t, n, r) {
        var a, o = 1,
            i = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return me.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (me.cssNumber[t] ? "" : "px"),
            d = (me.cssNumber[t] || "px" !== l && +u) && Ie.exec(me.css(e, t));
        if (d && d[3] !== l) {
            l = l || d[3], n = n || [], d = +u || 1;
            do o = o || ".5", d /= o, me.style(e, t, d + l); while (o !== (o = s() / u) && 1 !== o && --i)
        }
        return n && (d = +d || +u || 0, a = n[1] ? d + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = d, r.end = a)), a
    }

    function m(e) {
        var t = Be.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, r, a = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[a]); a++) !t || me.nodeName(r, t) ? o.push(r) : me.merge(o, h(r, t));
        return void 0 === t || t && me.nodeName(e, t) ? me.merge([e], o) : o
    }

    function f(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) me._data(n, "globalEval", !t || me._data(t[r], "globalEval"))
    }

    function _(e) {
        Fe.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t, n, r, a) {
        for (var o, i, s, u, l, d, c, p = e.length, y = m(t), g = [], v = 0; p > v; v++)
            if (i = e[v], i || 0 === i)
                if ("object" === me.type(i)) me.merge(g, i.nodeType ? [i] : i);
                else if (Ve.test(i)) {
            for (u = u || y.appendChild(t.createElement("div")), l = (We.exec(i) || ["", ""])[1].toLowerCase(), c = $e[l] || $e._default, u.innerHTML = c[1] + me.htmlPrefilter(i) + c[2], o = c[0]; o--;) u = u.lastChild;
            if (!ce.leadingWhitespace && ze.test(i) && g.push(t.createTextNode(ze.exec(i)[0])), !ce.tbody)
                for (i = "table" !== l || qe.test(i) ? "<table>" !== c[1] || qe.test(i) ? 0 : u : u.firstChild, o = i && i.childNodes.length; o--;) me.nodeName(d = i.childNodes[o], "tbody") && !d.childNodes.length && i.removeChild(d);
            for (me.merge(g, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = y.lastChild
        } else g.push(t.createTextNode(i));
        for (u && y.removeChild(u), ce.appendChecked || me.grep(h(g, "input"), _), v = 0; i = g[v++];)
            if (r && me.inArray(i, r) > -1) a && a.push(i);
            else if (s = me.contains(i.ownerDocument, i), u = h(y.appendChild(i), "script"), s && f(u), n)
            for (o = 0; i = u[o++];) Ue.test(i.type || "") && n.push(i);
        return u = null, y
    }

    function g() {
        return !0
    }

    function v() {
        return !1
    }

    function M() {
        try {
            return re.activeElement
        } catch (e) {}
    }

    function L(e, t, n, r, a, o) {
        var i, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) L(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), a === !1) a = v;
        else if (!a) return e;
        return 1 === o && (i = a, a = function(e) {
            return me().off(e), i.apply(this, arguments)
        }, a.guid = i.guid || (i.guid = me.guid++)), e.each(function() {
            me.event.add(this, t, a, r, n)
        })
    }

    function w(e, t) {
        return me.nodeName(e, "table") && me.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function D(e) {
        return e.type = (null !== me.find.attr(e, "type")) + "/" + e.type, e
    }

    function T(e) {
        var t = at.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        if (1 === t.nodeType && me.hasData(e)) {
            var n, r, a, o = me._data(e),
                i = me._data(t, o),
                s = o.events;
            if (s) {
                delete i.handle, i.events = {};
                for (n in s)
                    for (r = 0, a = s[n].length; a > r; r++) me.event.add(t, n, s[n][r])
            }
            i.data && (i.data = me.extend({}, i.data))
        }
    }

    function Y(e, t) {
        var n, r, a;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ce.noCloneEvent && t[me.expando]) {
                a = me._data(t);
                for (r in a.events) me.removeEvent(t, r, a.handle);
                t.removeAttribute(me.expando)
            }
            "script" === n && t.text !== e.text ? (D(t).text = e.text, T(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.html5Clone && e.innerHTML && !me.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Fe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function k(e, t, n, r) {
        t = oe.apply([], t);
        var a, o, i, s, u, l, d = 0,
            c = e.length,
            p = c - 1,
            m = t[0],
            f = me.isFunction(m);
        if (f || c > 1 && "string" == typeof m && !ce.checkClone && rt.test(m)) return e.each(function(a) {
            var o = e.eq(a);
            f && (t[0] = m.call(this, a, o.html())), k(o, t, n, r)
        });
        if (c && (l = y(t, e[0].ownerDocument, !1, e, r), a = l.firstChild, 1 === l.childNodes.length && (l = a), a || r)) {
            for (s = me.map(h(l, "script"), D), i = s.length; c > d; d++) o = l, d !== p && (o = me.clone(o, !0, !0), i && me.merge(s, h(o, "script"))), n.call(e[d], o, d);
            if (i)
                for (u = s[s.length - 1].ownerDocument, me.map(s, T), d = 0; i > d; d++) o = s[d], Ue.test(o.type || "") && !me._data(o, "globalEval") && me.contains(u, o) && (o.src ? me._evalUrl && me._evalUrl(o.src) : me.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            l = a = null
        }
        return e
    }

    function x(e, t, n) {
        for (var r, a = t ? me.filter(t, e) : e, o = 0; null != (r = a[o]); o++) n || 1 !== r.nodeType || me.cleanData(h(r)), r.parentNode && (n && me.contains(r.ownerDocument, r) && f(h(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function S(e, t) {
        var n = me(t.createElement(e)).appendTo(t.body),
            r = me.css(n[0], "display");
        return n.detach(), r
    }

    function E(e) {
        var t = re,
            n = lt[e];
        return n || (n = S(e, t), "none" !== n && n || (ut = (ut || me("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write(), t.close(), n = S(e, t), ut.detach()), lt[e] = n), n
    }

    function C(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function P(e) {
        if (e in Tt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Dt.length; n--;)
            if (e = Dt[n] + t, e in Tt) return e
    }

    function H(e, t) {
        for (var n, r, a, o = [], i = 0, s = e.length; s > i; i++) r = e[i], r.style && (o[i] = me._data(r, "olddisplay"), n = r.style.display, t ? (o[i] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (o[i] = me._data(r, "olddisplay", E(r.nodeName)))) : (a = Re(r), (n && "none" !== n || !a) && me._data(r, "olddisplay", a ? n : me.css(r, "display"))));
        for (i = 0; s > i; i++) r = e[i], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[i] || "" : "none"));
        return e
    }

    function N(e, t, n) {
        var r = Mt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function A(e, t, n, r, a) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; 4 > o; o += 2) "margin" === n && (i += me.css(e, n + je[o], !0, a)), r ? ("content" === n && (i -= me.css(e, "padding" + je[o], !0, a)), "margin" !== n && (i -= me.css(e, "border" + je[o] + "Width", !0, a))) : (i += me.css(e, "padding" + je[o], !0, a), "padding" !== n && (i += me.css(e, "border" + je[o] + "Width", !0, a)));
        return i
    }

    function I(t, n, r) {
        var a = !0,
            o = "width" === n ? t.offsetWidth : t.offsetHeight,
            i = ht(t),
            s = ce.boxSizing && "border-box" === me.css(t, "boxSizing", !1, i);
        if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = ft(t, n, i), (0 > o || null == o) && (o = t.style[n]), ct.test(o)) return o;
            a = s && (ce.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
        }
        return o + A(t, n, r || (s ? "border" : "content"), a, i) + "px"
    }

    function j(e, t, n, r, a) {
        return new j.prototype.init(e, t, n, r, a)
    }

    function R() {
        return e.setTimeout(function() {
            bt = void 0
        }), bt = me.now()
    }

    function O(e, t) {
        var n, r = {
                height: e
            },
            a = 0;
        for (t = t ? 1 : 0; 4 > a; a += 2 - t) n = je[a], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function F(e, t, n) {
        for (var r, a = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, i = a.length; i > o; o++)
            if (r = a[o].call(n, t, e)) return r
    }

    function W(e, t, n) {
        var r, a, o, i, s, u, l, d, c = this,
            p = {},
            m = e.style,
            h = e.nodeType && Re(e),
            f = me._data(e, "fxshow");
        n.queue || (s = me._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, me.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [m.overflow, m.overflowX, m.overflowY], l = me.css(e, "display"), d = "none" === l ? me._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === d && "none" === me.css(e, "float") && (ce.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? m.zoom = 1 : m.display = "inline-block")), n.overflow && (m.overflow = "hidden", ce.shrinkWrapBlocks() || c.always(function() {
            m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (a = t[r], kt.exec(a)) {
                if (delete t[r], o = o || "toggle" === a, a === (h ? "hide" : "show")) {
                    if ("show" !== a || !f || void 0 === f[r]) continue;
                    h = !0
                }
                p[r] = f && f[r] || me.style(e, r)
            } else l = void 0;
        if (me.isEmptyObject(p)) "inline" === ("none" === l ? E(e.nodeName) : l) && (m.display = l);
        else {
            f ? "hidden" in f && (h = f.hidden) : f = me._data(e, "fxshow", {}), o && (f.hidden = !h), h ? me(e).show() : c.done(function() {
                me(e).hide()
            }), c.done(function() {
                var t;
                me._removeData(e, "fxshow");
                for (t in p) me.style(e, t, p[t])
            });
            for (r in p) i = F(h ? f[r] : 0, r, c), r in f || (f[r] = i.start, h && (i.end = i.start, i.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function U(e, t) {
        var n, r, a, o, i;
        for (n in e)
            if (r = me.camelCase(n), a = t[r], o = e[n], me.isArray(o) && (a = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), i = me.cssHooks[r], i && "expand" in i) {
                o = i.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = a)
            } else t[r] = a
    }

    function z(e, t, n) {
        var r, a, o = 0,
            i = z.prefilters.length,
            s = me.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var t = bt || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, i = 0, u = l.tweens.length; u > i; i++) l.tweens[i].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: me.extend({}, t),
                opts: me.extend(!0, {
                    specialEasing: {},
                    easing: me.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: bt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = me.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            d = l.props;
        for (U(d, l.opts.specialEasing); i > o; o++)
            if (r = z.prefilters[o].call(l, e, d, l.opts)) return me.isFunction(r.stop) && (me._queueHooks(l.elem, l.opts.queue).stop = me.proxy(r.stop, r)), r;
        return me.map(d, F, l), me.isFunction(l.opts.start) && l.opts.start.call(e, l), me.fx.timer(me.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function B(e) {
        return me.attr(e, "class") || ""
    }

    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, a = 0,
                o = t.toLowerCase().match(Se) || [];
            if (me.isFunction(n))
                for (; r = o[a++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function V(e, t, n, r) {
        function a(s) {
            var u;
            return o[s] = !0, me.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        var o = {},
            i = e === Xt;
        return a(t.dataTypes[0]) || !o["*"] && a("*")
    }

    function q(e, t) {
        var n, r, a = me.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((a[r] ? e : n || (n = {}))[r] = t[r]);
        return n && me.extend(!0, e, n), e
    }

    function J(e, t, n) {
        for (var r, a, o, i, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a)
            for (i in s)
                if (s[i] && s[i].test(a)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                r || (r = i)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function G(e, t, n, r) {
        var a, o, i, s, u, l = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (i in e.converters) l[i.toLowerCase()] = e.converters[i];
        for (o = d.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = d.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (i = l[u + " " + o] || l["* " + o], !i)
                for (a in l)
                    if (s = a.split(" "), s[1] === o && (i = l[u + " " + s[0]] || l["* " + s[0]])) {
                        i === !0 ? i = l[a] : l[a] !== !0 && (o = s[0], d.unshift(s[1]));
                        break
                    }
            if (i !== !0)
                if (i && e["throws"]) t = i(t);
                else try {
                    t = i(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: i ? c : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function K(e) {
        return e.style && e.style.display || me.css(e, "display")
    }

    function X(e) {
        for (; e && 1 === e.nodeType;) {
            if ("none" === K(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Q(e, t, n, r) {
        var a;
        if (me.isArray(t)) me.each(t, function(t, a) {
            n || nn.test(e) ? r(e, a) : Q(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, r)
        });
        else if (n || "object" !== me.type(t)) r(e, t);
        else
            for (a in t) Q(e + "[" + a + "]", t[a], n, r)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function te(e) {
        return me.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var ne = [],
        re = e.document,
        ae = ne.slice,
        oe = ne.concat,
        ie = ne.push,
        se = ne.indexOf,
        ue = {},
        le = ue.toString,
        de = ue.hasOwnProperty,
        ce = {},
        pe = "1.12.0",
        me = function(e, t) {
            return new me.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fe = /^-ms-/,
        _e = /-([\da-z])/gi,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    me.fn = me.prototype = {
        jquery: pe,
        constructor: me,
        selector: "",
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : ae.call(this)
        },
        pushStack: function(e) {
            var t = me.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return me.each(this, e)
        },
        map: function(e) {
            return this.pushStack(me.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ie,
        sort: ne.sort,
        splice: ne.splice
    }, me.extend = me.fn.extend = function() {
        var e, t, n, r, a, o, i = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof i && (l = i, i = arguments[s] || {}, s++), "object" == typeof i || me.isFunction(i) || (i = {}), s === u && (i = this, s--); u > s; s++)
            if (null != (a = arguments[s]))
                for (r in a) e = i[r], n = a[r], i !== n && (l && n && (me.isPlainObject(n) || (t = me.isArray(n))) ? (t ? (t = !1, o = e && me.isArray(e) ? e : []) : o = e && me.isPlainObject(e) ? e : {}, i[r] = me.extend(l, o, n)) : void 0 !== n && (i[r] = n));
        return i
    }, me.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === me.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === me.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !me.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== me.type(e) || e.nodeType || me.isWindow(e)) return !1;
            try {
                if (e.constructor && !de.call(e, "constructor") && !de.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!ce.ownFirst)
                for (t in e) return de.call(e, t);
            for (t in e);
            return void 0 === t || de.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && me.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(fe, "ms-").replace(_e, ye)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, a = 0;
            if (n(e))
                for (r = e.length; r > a && t.call(e[a], a, e[a]) !== !1; a++);
            else
                for (a in e)
                    if (t.call(e[a], a, e[a]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? me.merge(r, "string" == typeof e ? [e] : e) : ie.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se) return se.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, a = e.length; n > r;) e[a++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[a++] = t[r++];
            return e.length = a, e
        },
        grep: function(e, t, n) {
            for (var r, a = [], o = 0, i = e.length, s = !n; i > o; o++) r = !t(e[o], o), r !== s && a.push(e[o]);
            return a
        },
        map: function(e, t, r) {
            var a, o, i = 0,
                s = [];
            if (n(e))
                for (a = e.length; a > i; i++) o = t(e[i], i, r), null != o && s.push(o);
            else
                for (i in e) o = t(e[i], i, r), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, a;
            return "string" == typeof t && (a = e[t], t = e, e = a), me.isFunction(e) ? (n = ae.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(ae.call(arguments)))
            }, r.guid = e.guid = e.guid || me.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ce
    }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = ne[Symbol.iterator]), me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var ge = function(e) {
        function t(e, t, n, r) {
            var a, o, i, s, u, l, c, m, h = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!r && ((t ? t.ownerDocument || t : F) !== P && C(t), t = t || P, N)) {
                if (11 !== f && (l = ye.exec(e)))
                    if (a = l[1]) {
                        if (9 === f) {
                            if (!(i = t.getElementById(a))) return n;
                            if (i.id === a) return n.push(i), n
                        } else if (h && (i = h.getElementById(a)) && R(t, i) && i.id === a) return n.push(i), n
                    } else {
                        if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = l[3]) && L.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                    }
                if (L.qsa && !$[e + " "] && (!A || !A.test(e))) {
                    if (1 !== f) h = t, m = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = O), c = b(e), o = c.length, u = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) c[o] = u + " " + p(c[o]);
                        m = c.join(","), h = ge.test(e) && d(t.parentNode) || t
                    }
                    if (m) try {
                        return Q.apply(n, h.querySelectorAll(m)), n
                    } catch (_) {} finally {
                        s === O && t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[O] = !0, e
        }

        function a(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
        }

        function i(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var a, o = e([], n.length, t), i = o.length; i--;) n[a = o[i]] && (n[a] = !(r[a] = n[a]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function c() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function m(e, t, n) {
            var r = t.dir,
                a = n && "parentNode" === r,
                o = U++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, o)
            } : function(t, n, i) {
                var s, u, l, d = [W, o];
                if (i) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, i)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) {
                            if (l = t[O] || (t[O] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === W && s[1] === o) return d[2] = s[2];
                            if (u[r] = d, d[2] = e(t, n, i)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var a = e.length; a--;)
                    if (!e[a](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function f(e, n, r) {
            for (var a = 0, o = n.length; o > a; a++) t(e, n[a], r);
            return r
        }

        function _(e, t, n, r, a) {
            for (var o, i = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, a)) && (i.push(o), l && t.push(s));
            return i
        }

        function y(e, t, n, a, o, i) {
            return a && !a[O] && (a = y(a)), o && !o[O] && (o = y(o, i)), r(function(r, i, s, u) {
                var l, d, c, p = [],
                    m = [],
                    h = i.length,
                    y = r || f(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || !r && t ? y : _(y, p, e, s, u),
                    v = n ? o || (r ? e : h || a) ? [] : i : g;
                if (n && n(g, v, s, u), a)
                    for (l = _(v, m), a(l, [], s, u), d = l.length; d--;)(c = l[d]) && (v[m[d]] = !(g[m[d]] = c));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], d = v.length; d--;)(c = v[d]) && l.push(g[d] = c);
                            o(null, v = [], l, u)
                        }
                        for (d = v.length; d--;)(c = v[d]) && (l = o ? ee(r, c) : p[d]) > -1 && (r[l] = !(i[l] = c))
                    }
                } else v = _(v === i ? v.splice(h, v.length) : v), o ? o(null, i, v, u) : Q.apply(i, v)
            })
        }

        function g(e) {
            for (var t, n, r, a = e.length, o = w.relative[e[0].type], i = o || w.relative[" "], s = o ? 1 : 0, u = m(function(e) {
                    return e === t
                }, i, !0), l = m(function(e) {
                    return ee(t, e) > -1
                }, i, !0), d = [function(e, n, r) {
                    var a = !o && (r || n !== x) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, a
                }]; a > s; s++)
                if (n = w.relative[e[s].type]) d = [m(h(d), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                        for (r = ++s; a > r && !w.relative[e[r].type]; r++);
                        return y(s > 1 && h(d), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, r > s && g(e.slice(s, r)), a > r && g(e = e.slice(r)), a > r && p(e))
                    }
                    d.push(n)
                }
            return h(d)
        }

        function v(e, n) {
            var a = n.length > 0,
                o = e.length > 0,
                i = function(r, i, s, u, l) {
                    var d, c, p, m = 0,
                        h = "0",
                        f = r && [],
                        y = [],
                        g = x,
                        v = r || o && w.find.TAG("*", l),
                        M = W += null == g ? 1 : Math.random() || .1,
                        L = v.length;
                    for (l && (x = i === P || i || l); h !== L && null != (d = v[h]); h++) {
                        if (o && d) {
                            for (c = 0, i || d.ownerDocument === P || (C(d), s = !N); p = e[c++];)
                                if (p(d, i || P, s)) {
                                    u.push(d);
                                    break
                                }
                            l && (W = M)
                        }
                        a && ((d = !p && d) && m--, r && f.push(d))
                    }
                    if (m += h, a && h !== m) {
                        for (c = 0; p = n[c++];) p(f, y, i, s);
                        if (r) {
                            if (m > 0)
                                for (; h--;) f[h] || y[h] || (y[h] = K.call(u));
                            y = _(y)
                        }
                        Q.apply(u, y), l && !r && y.length > 0 && m + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = M, x = g), f
                };
            return a ? r(i) : i
        }
        var M, L, w, D, T, b, Y, k, x, S, E, C, P, H, N, A, I, j, R, O = "sizzle" + 1 * new Date,
            F = e.document,
            W = 0,
            U = 0,
            z = n(),
            B = n(),
            $ = n(),
            V = function(e, t) {
                return e === t && (E = !0), 0
            },
            q = 1 << 31,
            J = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            X = G.push,
            Q = G.push,
            Z = G.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ae = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
            ie = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            ce = new RegExp(oe),
            pe = new RegExp("^" + re + "$"),
            me = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            _e = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            ve = /'|\\/g,
            Me = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Le = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            we = function() {
                C()
            };
        try {
            Q.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (De) {
            Q = {
                apply: G.length ? function(e, t) {
                    X.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        L = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, C = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : F;
            return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, H = P.documentElement, N = !T(P), (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), L.attributes = a(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), L.getElementsByTagName = a(function(e) {
                return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length
            }), L.getElementsByClassName = _e.test(P.getElementsByClassName), L.getById = a(function(e) {
                return H.appendChild(e).id = O, !P.getElementsByName || !P.getElementsByName(O).length
            }), L.getById ? (w.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(Me, Le);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(Me, Le);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = L.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : L.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    a = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[a++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = L.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && N ? t.getElementsByClassName(e) : void 0
            }, I = [], A = [], (L.qsa = _e.test(P.querySelectorAll)) && (a(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || A.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + O + "-]").length || A.push("~="), e.querySelectorAll(":checked").length || A.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || A.push(".#.+[+~]")
            }), a(function(e) {
                var t = P.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && A.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || A.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), A.push(",.*:")
            })), (L.matchesSelector = _e.test(j = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && a(function(e) {
                L.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), I.push("!=", oe)
            }), A = A.length && new RegExp(A.join("|")), I = I.length && new RegExp(I.join("|")), t = _e.test(H.compareDocumentPosition), R = t || _e.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return E = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !L.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === F && R(F, e) ? -1 : t === P || t.ownerDocument === F && R(F, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return E = !0, 0;
                var n, r = 0,
                    a = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!a || !o) return e === P ? -1 : t === P ? 1 : a ? -1 : o ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                if (a === o) return i(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? i(s[r], u[r]) : s[r] === F ? -1 : u[r] === F ? 1 : 0
            }, P) : P
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== P && C(e), n = n.replace(de, "='$1']"), L.matchesSelector && N && !$[n + " "] && (!I || !I.test(n)) && (!A || !A.test(n))) try {
                var r = j.call(e, n);
                if (r || L.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (a) {}
            return t(n, P, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && C(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== P && C(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && J.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== r ? r : L.attributes || !N ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                a = 0;
            if (E = !L.detectDuplicates, S = !L.sortStable && e.slice(0), e.sort(V), E) {
                for (; t = e[a++];) t === e[a] && (r = n.push(a));
                for (; r--;) e.splice(n[r], 1)
            }
            return S = null, e
        }, D = t.getText = function(e) {
            var t, n = "",
                r = 0,
                a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += D(e)
                } else if (3 === a || 4 === a) return e.nodeValue
            } else
                for (; t = e[r++];) n += D(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: me,
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
                    return e[1] = e[1].replace(Me, Le), e[3] = (e[3] || e[4] || e[5] || "").replace(Me, Le), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return me.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = b(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Me, Le).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(a) {
                        var o = t.attr(a, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, a) {
                    var o = "nth" !== e.slice(0, 3),
                        i = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === a ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, d, c, p, m, h, f = o !== i ? "nextSibling" : "previousSibling",
                            _ = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            g = !u && !s,
                            v = !1;
                        if (_) {
                            if (o) {
                                for (; f;) {
                                    for (p = t; p = p[f];)
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = f = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [i ? _.firstChild : _.lastChild], i && g) {
                                for (p = _, c = p[O] || (p[O] = {}),
                                    d = c[p.uniqueID] || (c[p.uniqueID] = {}), l = d[e] || [], m = l[0] === W && l[1], v = m && l[2], p = m && _.childNodes[m]; p = ++m && p && p[f] || (v = m = 0) || h.pop();)
                                    if (1 === p.nodeType && ++v && p === t) {
                                        d[e] = [W, m, v];
                                        break
                                    }
                            } else if (g && (p = t, c = p[O] || (p[O] = {}), d = c[p.uniqueID] || (c[p.uniqueID] = {}), l = d[e] || [], m = l[0] === W && l[1], v = m), v === !1)
                                for (;
                                    (p = ++m && p && p[f] || (v = m = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++v || (g && (c = p[O] || (p[O] = {}), d = c[p.uniqueID] || (c[p.uniqueID] = {}), d[e] = [W, v]), p !== t)););
                            return v -= a, v === r || v % r === 0 && v / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var a, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (a = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, a = o(e, n), i = a.length; i--;) r = ee(e, a[i]), e[r] = !(t[r] = a[i])
                    }) : function(e) {
                        return o(e, 0, a)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        a = Y(e.replace(se, "$1"));
                    return a[O] ? r(function(e, t, n, r) {
                        for (var o, i = a(e, null, r, []), s = e.length; s--;)(o = i[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, a(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(Me, Le),
                        function(t) {
                            return (t.textContent || t.innerText || D(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Me, Le).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
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
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (M in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[M] = s(M);
        for (M in {
                submit: !0,
                reset: !0
            }) w.pseudos[M] = u(M);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, b = t.tokenize = function(e, n) {
            var r, a, o, i, s, u, l, d = B[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (s = e, u = [], l = w.preFilter; s;) {
                (!r || (a = ue.exec(s))) && (a && (s = s.slice(a[0].length) || s), u.push(o = [])), r = !1, (a = le.exec(s)) && (r = a.shift(), o.push({
                    value: r,
                    type: a[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (i in w.filter) !(a = me[i].exec(s)) || l[i] && !(a = l[i](a)) || (r = a.shift(), o.push({
                    value: r,
                    type: i,
                    matches: a
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : B(e, u).slice(0)
        }, Y = t.compile = function(e, t) {
            var n, r = [],
                a = [],
                o = $[e + " "];
            if (!o) {
                for (t || (t = b(e)), n = t.length; n--;) o = g(t[n]), o[O] ? r.push(o) : a.push(o);
                o = $(e, v(a, r)), o.selector = e
            }
            return o
        }, k = t.select = function(e, t, n, r) {
            var a, o, i, s, u, l = "function" == typeof e && e,
                c = !r && b(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (i = o[0]).type && L.getById && 9 === t.nodeType && N && w.relative[o[1].type]) {
                    if (t = (w.find.ID(i.matches[0].replace(Me, Le), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (a = me.needsContext.test(e) ? 0 : o.length; a-- && (i = o[a], !w.relative[s = i.type]);)
                    if ((u = w.find[s]) && (r = u(i.matches[0].replace(Me, Le), ge.test(o[0].type) && d(t.parentNode) || t))) {
                        if (o.splice(a, 1), e = r.length && p(o), !e) return Q.apply(n, r), n;
                        break
                    }
            }
            return (l || Y(e, c))(r, t, !N, n, !t || ge.test(e) && d(t.parentNode) || t), n
        }, L.sortStable = O.split("").sort(V).join("") === O, L.detectDuplicates = !!E, C(), L.sortDetached = a(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }), a(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), L.attributes && a(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), a(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    me.find = ge, me.expr = ge.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = ge.uniqueSort, me.text = ge.getText, me.isXMLDoc = ge.isXML, me.contains = ge.contains;
    var ve = function(e, t, n) {
            for (var r = [], a = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (a && me(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        Me = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Le = me.expr.match.needsContext,
        we = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        De = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? me.find.matchesSelector(r, e) ? [r] : [] : me.find.matches(e, me.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, me.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                a = r.length;
            if ("string" != typeof e) return this.pushStack(me(e).filter(function() {
                for (t = 0; a > t; t++)
                    if (me.contains(r[t], this)) return !0
            }));
            for (t = 0; a > t; t++) me.find(e, r[t], n);
            return n = this.pushStack(a > 1 ? me.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && Le.test(e) ? me(e) : e || [], !1).length
        }
    });
    var Te, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Ye = me.fn.init = function(e, t, n) {
            var r, a;
            if (!e) return this;
            if (n = n || Te, "string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : be.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), we.test(r[1]) && me.isPlainObject(t))
                        for (r in t) me.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (a = re.getElementById(r[2]), a && a.parentNode) {
                    if (a.id !== r[2]) return Te.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = re, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : me.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(me) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), me.makeArray(e, this))
        };
    Ye.prototype = me.fn, Te = me(re);
    var ke = /^(?:parents|prev(?:Until|All))/,
        xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    me.fn.extend({
        has: function(e) {
            var t, n = me(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (me.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, a = this.length, o = [], i = Le.test(e) || "string" != typeof e ? me(e, t || this.context) : 0; a > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? me.inArray(this[0], me(e)) : me.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), me.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ve(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ve(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return ve(e, "nextSibling")
        },
        prevAll: function(e) {
            return ve(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ve(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ve(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Me((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Me(e.firstChild)
        },
        contents: function(e) {
            return me.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : me.merge([], e.childNodes)
        }
    }, function(e, t) {
        me.fn[e] = function(n, r) {
            var a = me.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = me.filter(r, a)), this.length > 1 && (xe[e] || (a = me.uniqueSort(a)), ke.test(e) && (a = a.reverse())), this.pushStack(a)
        }
    });
    var Se = /\S+/g;
    me.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : me.extend({}, e);
        var t, n, r, a, i = [],
            s = [],
            u = -1,
            l = function() {
                for (a = e.once, r = t = !0; s.length; u = -1)
                    for (n = s.shift(); ++u < i.length;) i[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = i.length, n = !1);
                e.memory || (n = !1), t = !1, a && (i = n ? [] : "")
            },
            d = {
                add: function() {
                    return i && (n && !t && (u = i.length - 1, s.push(n)), function r(t) {
                        me.each(t, function(t, n) {
                            me.isFunction(n) ? e.unique && d.has(n) || i.push(n) : n && n.length && "string" !== me.type(n) && r(n)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return me.each(arguments, function(e, t) {
                        for (var n;
                            (n = me.inArray(t, i, n)) > -1;) i.splice(n, 1), u >= n && u--
                    }), this
                },
                has: function(e) {
                    return e ? me.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []), this
                },
                disable: function() {
                    return a = s = [], i = n = "", this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return a = !0, n || d.disable(), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, n) {
                    return a || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, me.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", me.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", me.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", me.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return me.Deferred(function(n) {
                            me.each(t, function(t, o) {
                                var i = me.isFunction(e[t]) && e[t];
                                a[o[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? me.extend(e, r) : r
                    }
                },
                a = {};
            return r.pipe = r.then, me.each(t, function(e, o) {
                var i = o[2],
                    s = o[3];
                r[o[1]] = i.add, s && i.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), a[o[0]] = function() {
                    return a[o[0] + "With"](this === a ? r : this, arguments), this
                }, a[o[0] + "With"] = i.fireWith
            }), r.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var t, n, r, a = 0,
                o = ae.call(arguments),
                i = o.length,
                s = 1 !== i || e && me.isFunction(e.promise) ? i : 0,
                u = 1 === s ? e : me.Deferred(),
                l = function(e, n, r) {
                    return function(a) {
                        n[e] = this, r[e] = arguments.length > 1 ? ae.call(arguments) : a, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (i > 1)
                for (t = new Array(i), n = new Array(i), r = new Array(i); i > a; a++) o[a] && me.isFunction(o[a].promise) ? o[a].promise().progress(l(a, n, t)).done(l(a, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var Ee;
    me.fn.ready = function(e) {
        return me.ready.promise().done(e), this
    }, me.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? me.readyWait++ : me.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --me.readyWait : me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || (Ee.resolveWith(re, [me]), me.fn.triggerHandler && (me(re).triggerHandler("ready"), me(re).off("ready"))))
        }
    }), me.ready.promise = function(t) {
        if (!Ee)
            if (Ee = me.Deferred(), "complete" === re.readyState) e.setTimeout(me.ready);
            else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && re.documentElement
            } catch (r) {}
            n && n.doScroll && ! function a() {
                if (!me.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return e.setTimeout(a, 50)
                    }
                    i(), me.ready()
                }
            }()
        }
        return Ee.promise(t)
    }, me.ready.promise();
    var Ce;
    for (Ce in me(ce)) break;
    ce.ownFirst = "0" === Ce, ce.inlineBlockNeedsLayout = !1, me(function() {
            var e, t, n, r;
            n = re.getElementsByTagName("body")[0], n && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ce.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = re.createElement("div");
            ce.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                ce.deleteExpando = !1
            }
            e = null
        }();
    var Pe = function(e) {
            var t = me.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        },
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /([A-Z])/g;
    me.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? me.cache[e[me.expando]] : e[me.expando], !!e && !l(e)
            },
            data: function(e, t, n) {
                return d(e, t, n)
            },
            removeData: function(e, t) {
                return c(e, t)
            },
            _data: function(e, t, n) {
                return d(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return c(e, t, !0)
            }
        }), me.fn.extend({
            data: function(e, t) {
                var n, r, a, o = this[0],
                    i = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (a = me.data(o), 1 === o.nodeType && !me._data(o, "parsedAttrs"))) {
                        for (n = i.length; n--;) i[n] && (r = i[n].name, 0 === r.indexOf("data-") && (r = me.camelCase(r.slice(5)), u(o, r, a[r])));
                        me._data(o, "parsedAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof e ? this.each(function() {
                    me.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    me.data(this, e, t)
                }) : o ? u(o, e, me.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    me.removeData(this, e)
                })
            }
        }), me.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = me._data(e, t), n && (!r || me.isArray(n) ? r = me._data(e, t, me.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = me.queue(e, t),
                    r = n.length,
                    a = n.shift(),
                    o = me._queueHooks(e, t),
                    i = function() {
                        me.dequeue(e, t)
                    };
                "inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete o.stop, a.call(e, i, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return me._data(e, n) || me._data(e, n, {
                    empty: me.Callbacks("once memory").add(function() {
                        me._removeData(e, t + "queue"), me._removeData(e, n)
                    })
                })
            }
        }), me.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = me.queue(this, e, t);
                    me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    me.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    a = me.Deferred(),
                    o = this,
                    i = this.length,
                    s = function() {
                        --r || a.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;) n = me._data(o[i], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), a.promise(t)
            }
        }),
        function() {
            var e;
            ce.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
        je = ["Top", "Right", "Bottom", "Left"],
        Re = function(e, t) {
            return e = t || e, "none" === me.css(e, "display") || !me.contains(e.ownerDocument, e)
        },
        Oe = function(e, t, n, r, a, o, i) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === me.type(n)) {
                a = !0;
                for (s in n) Oe(e, t, s, n[s], !0, o, i)
            } else if (void 0 !== r && (a = !0, me.isFunction(r) || (i = !0), l && (i ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(me(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, i ? r : r.call(e[s], s, t(e[s], n)));
            return a ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Fe = /^(?:checkbox|radio)$/i,
        We = /<([\w:-]+)/,
        Ue = /^$|\/(?:java|ecma)script/i,
        ze = /^\s+/,
        Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = re.createElement("div"),
            t = re.createDocumentFragment(),
            n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ce.leadingWhitespace = 3 === e.firstChild.nodeType, ce.tbody = !e.getElementsByTagName("tbody").length, ce.htmlSerialize = !!e.getElementsByTagName("link").length, ce.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ce.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ce.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ce.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.noCloneEvent = !!e.addEventListener, e[me.expando] = 1, ce.attributes = !e.getAttribute(me.expando)
    }();
    var $e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ce.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    $e.optgroup = $e.option, $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td;
    var Ve = /<|&#?\w+;/,
        qe = /<tbody/i;
    ! function() {
        var t, n, r = re.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ce[t] = n in e) || (r.setAttribute(n, "t"), ce[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var Je = /^(?:input|select|textarea)$/i,
        Ge = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Xe = /^(?:focusinfocus|focusoutblur)$/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {},
        add: function(e, t, n, r, a) {
            var o, i, s, u, l, d, c, p, m, h, f, _ = me._data(e);
            if (_) {
                for (n.handler && (u = n, n = u.handler, a = u.selector), n.guid || (n.guid = me.guid++), (i = _.events) || (i = _.events = {}), (d = _.handle) || (d = _.handle = function(e) {
                        return "undefined" == typeof me || e && me.event.triggered === e.type ? void 0 : me.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), t = (t || "").match(Se) || [""], s = t.length; s--;) o = Qe.exec(t[s]) || [], m = f = o[1], h = (o[2] || "").split(".").sort(), m && (l = me.event.special[m] || {}, m = (a ? l.delegateType : l.bindType) || m, l = me.event.special[m] || {}, c = me.extend({
                    type: m,
                    origType: f,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: a,
                    needsContext: a && me.expr.match.needsContext.test(a),
                    namespace: h.join(".")
                }, u), (p = i[m]) || (p = i[m] = [], p.delegateCount = 0, l.setup && l.setup.call(e, r, h, d) !== !1 || (e.addEventListener ? e.addEventListener(m, d, !1) : e.attachEvent && e.attachEvent("on" + m, d))), l.add && (l.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), a ? p.splice(p.delegateCount++, 0, c) : p.push(c), me.event.global[m] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, a) {
            var o, i, s, u, l, d, c, p, m, h, f, _ = me.hasData(e) && me._data(e);
            if (_ && (d = _.events)) {
                for (t = (t || "").match(Se) || [""], l = t.length; l--;)
                    if (s = Qe.exec(t[l]) || [], m = f = s[1], h = (s[2] || "").split(".").sort(), m) {
                        for (c = me.event.special[m] || {}, m = (r ? c.delegateType : c.bindType) || m, p = d[m] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) i = p[o], !a && f !== i.origType || n && n.guid !== i.guid || s && !s.test(i.namespace) || r && r !== i.selector && ("**" !== r || !i.selector) || (p.splice(o, 1), i.selector && p.delegateCount--, c.remove && c.remove.call(e, i));
                        u && !p.length && (c.teardown && c.teardown.call(e, h, _.handle) !== !1 || me.removeEvent(e, m, _.handle), delete d[m])
                    } else
                        for (m in d) me.event.remove(e, m + t[l], n, r, !0);
                me.isEmptyObject(d) && (delete _.handle, me._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, a) {
            var o, i, s, u, l, d, c, p = [r || re],
                m = de.call(t, "type") ? t.type : t,
                h = de.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = d = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Xe.test(m + me.event.triggered) && (m.indexOf(".") > -1 && (h = m.split("."), m = h.shift(), h.sort()), i = m.indexOf(":") < 0 && "on" + m, t = t[me.expando] ? t : new me.Event(m, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : me.makeArray(n, [t]), l = me.event.special[m] || {}, a || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!a && !l.noBubble && !me.isWindow(r)) {
                    for (u = l.delegateType || m, Xe.test(u + m) || (s = s.parentNode); s; s = s.parentNode) p.push(s), d = s;
                    d === (r.ownerDocument || re) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (c = 0;
                    (s = p[c++]) && !t.isPropagationStopped();) t.type = c > 1 ? u : l.bindType || m, o = (me._data(s, "events") || {})[t.type] && me._data(s, "handle"), o && o.apply(s, n), o = i && s[i], o && o.apply && Pe(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = m, !a && !t.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), n) === !1) && Pe(r) && i && r[m] && !me.isWindow(r)) {
                    d = r[i], d && (r[i] = null), me.event.triggered = m;
                    try {
                        r[m]()
                    } catch (f) {}
                    me.event.triggered = void 0, d && (r[i] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = me.event.fix(e);
            var t, n, r, a, o, i = [],
                s = ae.call(arguments),
                u = (me._data(this, "events") || {})[e.type] || [],
                l = me.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (i = me.event.handlers.call(this, e, u), t = 0;
                    (a = i[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = a.elem, n = 0;
                        (o = a.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((me.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, a, o, i = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++) o = t[n], a = o.selector + " ", void 0 === r[a] && (r[a] = o.needsContext ? me(a, this).index(u) > -1 : me.find(a, this, null, [u]).length), r[a] && r.push(o);
                        r.length && i.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && i.push({
                elem: this,
                handlers: t.slice(s)
            }), i
        },
        fix: function(e) {
            if (e[me.expando]) return e;
            var t, n, r, a = e.type,
                o = e,
                i = this.fixHooks[a];
            for (i || (this.fixHooks[a] = i = Ke.test(a) ? this.mouseHooks : Ge.test(a) ? this.keyHooks : {}), r = i.props ? this.props.concat(i.props) : this.props, e = new me.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, a, o = t.button,
                    i = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, a = r.documentElement, n = r.body, e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && i && (e.relatedTarget = i === e.target ? t.toElement : i), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== M() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === M() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return me.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return me.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = me.extend(new me.Event, n, {
                type: e,
                isSimulated: !0
            });
            me.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, me.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, me.Event = function(e, t) {
        return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? g : v) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t)
    }, me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = g, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = g, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = g, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, me.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    a = e.relatedTarget,
                    o = e.handleObj;
                return (!a || a !== r && !me.contains(r, a)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ce.submit || (me.event.special.submit = {
        setup: function() {
            return me.nodeName(this, "form") ? !1 : void me.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = me.nodeName(t, "input") || me.nodeName(t, "button") ? me.prop(t, "form") : void 0;
                n && !me._data(n, "submit") && (me.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), me._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && me.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return me.nodeName(this, "form") ? !1 : void me.event.remove(this, "._submit")
        }
    }), ce.change || (me.event.special.change = {
        setup: function() {
            return Je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (me.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), me.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), me.event.simulate("change", this, e)
            })), !1) : void me.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Je.test(t.nodeName) && !me._data(t, "change") && (me.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || me.event.simulate("change", this.parentNode, e)
                }), me._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return me.event.remove(this, "._change"), !Je.test(this.nodeName)
        }
    }), ce.focusin || me.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            me.event.simulate(t, e.target, me.event.fix(e))
        };
        me.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    a = me._data(r, t);
                a || r.addEventListener(e, n, !0), me._data(r, t, (a || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    a = me._data(r, t) - 1;
                a ? me._data(r, t, a) : (r.removeEventListener(e, n, !0), me._removeData(r, t))
            }
        }
    }), me.fn.extend({
        on: function(e, t, n, r) {
            return L(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return L(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, a;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, me(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (a in e) this.off(a, t, e[a]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = v), this.each(function() {
                me.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                me.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? me.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + Be + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        at = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        it = m(re),
        st = it.appendChild(re.createElement("div"));
    me.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, a, o, i, s, u = me.contains(e.ownerDocument, e);
            if (ce.html5Clone || me.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(ce.noCloneEvent && ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (r = h(o), s = h(e), i = 0; null != (a = s[i]); ++i) r[i] && Y(a, r[i]);
            if (t)
                if (n)
                    for (s = s || h(e), r = r || h(o), i = 0; null != (a = s[i]); i++) b(a, r[i]);
                else b(e, o);
            return r = h(o, "script"), r.length > 0 && f(r, !u && h(e, "script")), r = s = a = null, o
        },
        cleanData: function(e, t) {
            for (var n, r, a, o, i = 0, s = me.expando, u = me.cache, l = ce.attributes, d = me.event.special; null != (n = e[i]); i++)
                if ((t || Pe(n)) && (a = n[s], o = a && u[a])) {
                    if (o.events)
                        for (r in o.events) d[r] ? me.event.remove(n, r) : me.removeEvent(n, r, o.handle);
                    u[a] && (delete u[a], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(a))
                }
        }
    }), me.fn.extend({
        domManip: k,
        detach: function(e) {
            return x(this, e, !0)
        },
        remove: function(e) {
            return x(this, e)
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? me.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return k(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return k(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return k(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return k(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && me.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && me.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return me.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (ce.htmlSerialize || !et.test(e)) && (ce.leadingWhitespace || !ze.test(e)) && !$e[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (me.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (a) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return k(this, arguments, function(t) {
                var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), me.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        me.fn[e] = function(e) {
            for (var n, r = 0, a = [], o = me(e), i = o.length - 1; i >= r; r++) n = r === i ? this : this.clone(!0), me(o[r])[t](n), ie.apply(a, n.get());
            return this.pushStack(a)
        }
    });
    var ut, lt = {
            HTML: "block",
            BODY: "block"
        },
        dt = /^margin/,
        ct = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
        pt = function(e, t, n, r) {
            var a, o, i = {};
            for (o in t) i[o] = e.style[o], e.style[o] = t[o];
            a = n.apply(e, r || []);
            for (o in t) e.style[o] = i[o];
            return a
        },
        mt = re.documentElement;
    ! function() {
        function t() {
            var t, d, c = re.documentElement;
            c.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = s = !1, r = i = !0, e.getComputedStyle && (d = e.getComputedStyle(l), n = "1%" !== (d || {}).top, s = "2px" === (d || {}).marginLeft, a = "4px" === (d || {
                width: "4px"
            }).width, l.style.marginRight = "50%", r = "4px" === (d || {
                marginRight: "4px"
            }).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", i = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), c.removeChild(u)
        }
        var n, r, a, o, i, s, u = re.createElement("div"),
            l = re.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", ce.opacity = "0.5" === l.style.opacity, ce.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ce.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), ce.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, me.extend(ce, {
            reliableHiddenOffsets: function() {
                return null == n && t(), o
            },
            boxSizingReliable: function() {
                return null == n && t(), a
            },
            pixelMarginRight: function() {
                return null == n && t(), r
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), i
            },
            reliableMarginLeft: function() {
                return null == n && t(), s
            }
        }))
    }();
    var ht, ft, _t = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n.opener || (n = e), n.getComputedStyle(t)
    }, ft = function(e, t, n) {
        var r, a, o, i, s = e.style;
        return n = n || ht(e), i = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== i || me.contains(e.ownerDocument, e) || (i = me.style(e, t)), !ce.pixelMarginRight() && ct.test(i) && dt.test(t) && (r = s.width, a = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = n.width, s.width = r, s.minWidth = a, s.maxWidth = o)), void 0 === i ? i : i + ""
    }) : mt.currentStyle && (ht = function(e) {
        return e.currentStyle
    }, ft = function(e, t, n) {
        var r, a, o, i, s = e.style;
        return n = n || ht(e), i = n ? n[t] : void 0, null == i && s && s[t] && (i = s[t]), ct.test(i) && !_t.test(t) && (r = s.left, a = e.runtimeStyle, o = a && a.left, o && (a.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : i, i = s.pixelLeft + "px", s.left = r, o && (a.left = o)), void 0 === i ? i : i + "" || "auto"
    });
    var yt = /alpha\([^)]*\)/i,
        gt = /opacity\s*=\s*([^)]*)/i,
        vt = /^(none|table(?!-c[ea]).+)/,
        Mt = new RegExp("^(" + Ae + ")(.*)$", "i"),
        Lt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Dt = ["Webkit", "O", "Moz", "ms"],
        Tt = re.createElement("div").style;
    me.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ft(e, "opacity");
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
            "float": ce.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, o, i, s = me.camelCase(t),
                    u = e.style;
                if (t = me.cssProps[s] || (me.cssProps[s] = P(s) || s), i = me.cssHooks[t] || me.cssHooks[s], void 0 === n) return i && "get" in i && void 0 !== (a = i.get(e, !1, r)) ? a : u[t];
                if (o = typeof n, "string" === o && (a = Ie.exec(n)) && a[1] && (n = p(e, t, a), o = "number"), null != n && n === n && ("number" === o && (n += a && a[3] || (me.cssNumber[s] ? "" : "px")), ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(i && "set" in i && void 0 === (n = i.set(e, n, r))))) try {
                    u[t] = n
                } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var a, o, i, s = me.camelCase(t);
            return t = me.cssProps[s] || (me.cssProps[s] = P(s) || s), i = me.cssHooks[t] || me.cssHooks[s], i && "get" in i && (o = i.get(e, !0, n)), void 0 === o && (o = ft(e, t, r)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (a = parseFloat(o), n === !0 || isFinite(a) ? a || 0 : o) : o
        }
    }), me.each(["height", "width"], function(e, t) {
        me.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? vt.test(me.css(e, "display")) && 0 === e.offsetWidth ? pt(e, Lt, function() {
                    return I(e, t, r)
                }) : I(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var a = r && ht(e);
                return N(e, n, r ? A(e, t, r, ce.boxSizing && "border-box" === me.css(e, "boxSizing", !1, a), a) : 0)
            }
        }
    }), ce.opacity || (me.cssHooks.opacity = {
        get: function(e, t) {
            return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                a = me.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === me.trim(o.replace(yt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = yt.test(o) ? o.replace(yt, a) : o + " " + a)
        }
    }), me.cssHooks.marginRight = C(ce.reliableMarginRight, function(e, t) {
        return t ? pt(e, {
            display: "inline-block"
        }, ft, [e, "marginRight"]) : void 0
    }), me.cssHooks.marginLeft = C(ce.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(ft(e, "marginLeft")) || (me.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), me.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        me.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, a = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) a[e + je[r] + t] = o[r] || o[r - 2] || o[0];
                return a
            }
        }, dt.test(e) || (me.cssHooks[e + t].set = N)
    }), me.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var r, a, o = {},
                    i = 0;
                if (me.isArray(t)) {
                    for (r = ht(e), a = t.length; a > i; i++) o[t[i]] = me.css(e, t[i], !1, r);
                    return o
                }
                return void 0 !== n ? me.style(e, t, n) : me.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? me(this).show() : me(this).hide()
            })
        }
    }), me.Tween = j, j.prototype = {
        constructor: j,
        init: function(e, t, n, r, a, o) {
            this.elem = e, this.prop = n, this.easing = a || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (me.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, me.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, me.fx = j.prototype.init, me.fx.step = {};
    var bt, Yt, kt = /^(?:toggle|show|hide)$/,
        xt = /queueHooks$/;
    me.Animation = me.extend(z, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return p(n.elem, e, Ie.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Se);
                for (var n, r = 0, a = e.length; a > r; r++) n = e[r], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
            },
            prefilters: [W],
            prefilter: function(e, t) {
                t ? z.prefilters.unshift(e) : z.prefilters.push(e)
            }
        }), me.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? me.extend({}, e) : {
                complete: n || !n && t || me.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !me.isFunction(t) && t
            };
            return r.duration = me.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in me.fx.speeds ? me.fx.speeds[r.duration] : me.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                me.isFunction(r.old) && r.old.call(this), r.queue && me.dequeue(this, r.queue)
            }, r
        }, me.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var a = me.isEmptyObject(e),
                    o = me.speed(t, n, r),
                    i = function() {
                        var t = z(this, me.extend({}, e), o);
                        (a || me._data(this, "finish")) && t.stop(!0)
                    };
                return i.finish = i, a || o.queue === !1 ? this.each(i) : this.queue(o.queue, i)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        a = null != e && e + "queueHooks",
                        o = me.timers,
                        i = me._data(this);
                    if (a) i[a] && i[a].stop && r(i[a]);
                    else
                        for (a in i) i[a] && i[a].stop && xt.test(a) && r(i[a]);
                    for (a = o.length; a--;) o[a].elem !== this || null != e && o[a].queue !== e || (o[a].anim.stop(n), t = !1, o.splice(a, 1));
                    (t || !n) && me.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = me._data(this),
                        r = n[e + "queue"],
                        a = n[e + "queueHooks"],
                        o = me.timers,
                        i = r ? r.length : 0;
                    for (n.finish = !0, me.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; i > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), me.each(["toggle", "show", "hide"], function(e, t) {
            var n = me.fn[t];
            me.fn[t] = function(e, r, a) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, a)
            }
        }), me.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            me.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), me.timers = [], me.fx.tick = function() {
            var e, t = me.timers,
                n = 0;
            for (bt = me.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || me.fx.stop(), bt = void 0
        }, me.fx.timer = function(e) {
            me.timers.push(e), e() ? me.fx.start() : me.timers.pop()
        }, me.fx.interval = 13, me.fx.start = function() {
            Yt || (Yt = e.setInterval(me.fx.tick, me.fx.interval))
        }, me.fx.stop = function() {
            e.clearInterval(Yt), Yt = null
        }, me.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, me.fn.delay = function(t, n) {
            return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var a = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(a)
                }
            })
        },
        function() {
            var e, t = re.createElement("input"),
                n = re.createElement("div"),
                r = re.createElement("select"),
                a = r.appendChild(re.createElement("option"));
            n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ce.getSetAttribute = "t" !== n.className, ce.style = /top/.test(e.getAttribute("style")), ce.hrefNormalized = "/a" === e.getAttribute("href"), ce.checkOn = !!t.value, ce.optSelected = a.selected, ce.enctype = !!re.createElement("form").enctype, r.disabled = !0, ce.optDisabled = !a.disabled, t = re.createElement("input"), t.setAttribute("value", ""), ce.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ce.radioValue = "t" === t.value
        }();
    var St = /\r/g;
    me.fn.extend({
        val: function(e) {
            var t, n, r, a = this[0];
            return arguments.length ? (r = me.isFunction(e), this.each(function(n) {
                var a;
                1 === this.nodeType && (a = r ? e.call(this, n, me(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : me.isArray(a) && (a = me.map(a, function(e) {
                    return null == e ? "" : e + ""
                })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
            })) : a ? (t = me.valHooks[a.type] || me.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)) : void 0
        }
    }), me.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = me.find.attr(e, "value");
                    return null != t ? t : me.trim(me.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, a = e.selectedIndex, o = "select-one" === e.type || 0 > a, i = o ? null : [], s = o ? a + 1 : r.length, u = 0 > a ? s : o ? a : 0; s > u; u++)
                        if (n = r[u], (n.selected || u === a) && (ce.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !me.nodeName(n.parentNode, "optgroup"))) {
                            if (t = me(n).val(), o) return t;
                            i.push(t)
                        }
                    return i
                },
                set: function(e, t) {
                    for (var n, r, a = e.options, o = me.makeArray(t), i = a.length; i--;)
                        if (r = a[i], me.inArray(me.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), me.each(["radio", "checkbox"], function() {
        me.valHooks[this] = {
            set: function(e, t) {
                return me.isArray(t) ? e.checked = me.inArray(me(e).val(), t) > -1 : void 0
            }
        }, ce.checkOn || (me.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et, Ct, Pt = me.expr.attrHandle,
        Ht = /^(?:checked|selected)$/i,
        Nt = ce.getSetAttribute,
        At = ce.input;
    me.fn.extend({
        attr: function(e, t) {
            return Oe(this, me.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                me.removeAttr(this, e)
            })
        }
    }), me.extend({
        attr: function(e, t, n) {
            var r, a, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (t = t.toLowerCase(), a = me.attrHooks[t] || (me.expr.match.bool.test(t) ? Ct : Et)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (r = a.get(e, t)) ? r : (r = me.find.attr(e, t), null == r ? void 0 : r)) : void 0
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ce.radioValue && "radio" === t && me.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, a = 0,
                o = t && t.match(Se);
            if (o && 1 === e.nodeType)
                for (; n = o[a++];) r = me.propFix[n] || n, me.expr.match.bool.test(n) ? At && Nt || !Ht.test(n) ? e[r] = !1 : e[me.camelCase("default-" + n)] = e[r] = !1 : me.attr(e, n, ""), e.removeAttribute(Nt ? n : r)
        }
    }), Ct = {
        set: function(e, t, n) {
            return t === !1 ? me.removeAttr(e, n) : At && Nt || !Ht.test(n) ? e.setAttribute(!Nt && me.propFix[n] || n, n) : e[me.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Pt[t] || me.find.attr;
        At && Nt || !Ht.test(t) ? Pt[t] = function(e, t, r) {
            var a, o;
            return r || (o = Pt[t], Pt[t] = a, a = null != n(e, t, r) ? t.toLowerCase() : null, Pt[t] = o), a
        } : Pt[t] = function(e, t, n) {
            return n ? void 0 : e[me.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), At && Nt || (me.attrHooks.value = {
        set: function(e, t, n) {
            return me.nodeName(e, "input") ? void(e.defaultValue = t) : Et && Et.set(e, t, n)
        }
    }), Nt || (Et = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Pt.id = Pt.name = Pt.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, me.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Et.set
    }, me.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Et.set(e, "" === t ? !1 : t, n)
        }
    }, me.each(["width", "height"], function(e, t) {
        me.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ce.style || (me.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var It = /^(?:input|select|textarea|button|object)$/i,
        jt = /^(?:a|area)$/i;
    me.fn.extend({
        prop: function(e, t) {
            return Oe(this, me.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = me.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), me.extend({
        prop: function(e, t, n) {
            var r, a, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? (1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, a = me.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = me.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : It.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ce.hrefNormalized || me.each(["href", "src"], function(e, t) {
        me.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ce.optSelected || (me.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        me.propFix[this.toLowerCase()] = this
    }), ce.enctype || (me.propFix.enctype = "encoding");
    var Rt = /[\t\r\n\f]/g;
    me.fn.extend({
        addClass: function(e) {
            var t, n, r, a, o, i, s, u = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).addClass(e.call(this, t, B(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Se) || []; n = this[u++];)
                    if (a = B(n), r = 1 === n.nodeType && (" " + a + " ").replace(Rt, " ")) {
                        for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = me.trim(r), a !== s && me.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, a, o, i, s, u = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).removeClass(e.call(this, t, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Se) || []; n = this[u++];)
                    if (a = B(n), r = 1 === n.nodeType && (" " + a + " ").replace(Rt, " ")) {
                        for (i = 0; o = t[i++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = me.trim(r), a !== s && me.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) {
                me(this).toggleClass(e.call(this, n, B(this), t), t)
            }) : this.each(function() {
                var t, r, a, o;
                if ("string" === n)
                    for (r = 0, a = me(this), o = e.match(Se) || []; t = o[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = B(this), t && me._data(this, "__className__", t), me.attr(this, "class", t || e === !1 ? "" : me._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + B(n) + " ").replace(Rt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), me.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        me.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), me.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ot = e.location,
        Ft = me.now(),
        Wt = /\?/,
        Ut = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    me.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            a = me.trim(t + "");
        return a && !me.trim(a.replace(Ut, function(e, t, a, o) {
            return n && t && (r = 0), 0 === r ? e : (n = a || t, r += !o - !a, "")
        })) ? Function("return " + a)() : me.error("Invalid JSON: " + t)
    }, me.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (a) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), n
    };
    var zt = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qt = /^(?:GET|HEAD)$/,
        Jt = /^\/\//,
        Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Kt = {},
        Xt = {},
        Qt = "*/".concat("*"),
        Zt = Ot.href,
        en = Gt.exec(Zt.toLowerCase()) || [];
    me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Zt,
            type: "GET",
            isLocal: Vt.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qt,
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
                "text json": me.parseJSON,
                "text xml": me.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? q(q(e, me.ajaxSettings), t) : q(me.ajaxSettings, e)
        },
        ajaxPrefilter: $(Kt),
        ajaxTransport: $(Xt),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var o, c, g, v, L, D = n;
                2 !== M && (M = 2, u && e.clearTimeout(u), d = void 0, s = a || "", w.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, r && (v = J(p, w, r)), v = G(p, v, w, o), o ? (p.ifModified && (L = w.getResponseHeader("Last-Modified"), L && (me.lastModified[i] = L), L = w.getResponseHeader("etag"), L && (me.etag[i] = L)), 204 === t || "HEAD" === p.type ? D = "nocontent" : 304 === t ? D = "notmodified" : (D = v.state, c = v.data, g = v.error, o = !g)) : (g = D, (t || !D) && (D = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (n || D) + "", o ? f.resolveWith(m, [c, D, w]) : f.rejectWith(m, [w, D, g]), w.statusCode(y), y = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? c : g]), _.fireWith(m, [w, D]), l && (h.trigger("ajaxComplete", [w, p]), --me.active || me.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var a, o, i, s, u, l, d, c, p = me.ajaxSetup({}, n),
                m = p.context || p,
                h = p.context && (m.nodeType || m.jquery) ? me(m) : me.event,
                f = me.Deferred(),
                _ = me.Callbacks("once memory"),
                y = p.statusCode || {},
                g = {},
                v = {},
                M = 0,
                L = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === M) {
                            if (!c)
                                for (c = {}; t = $t.exec(s);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === M ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return M || (e = v[n] = v[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return M || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > M)
                                for (t in e) y[t] = [y[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || L;
                        return d && d.abort(t), r(0, t), this
                    }
                };
            if (f.promise(w).complete = _.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || Zt) + "").replace(zt, "").replace(Jt, en[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = me.trim(p.dataType || "*").toLowerCase().match(Se) || [""], null == p.crossDomain && (a = Gt.exec(p.url.toLowerCase()), p.crossDomain = !(!a || a[1] === en[1] && a[2] === en[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = me.param(p.data, p.traditional)), V(Kt, p, n, w), 2 === M) return w;
            l = me.event && p.global, l && 0 === me.active++ && me.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !qt.test(p.type), i = p.url, p.hasContent || (p.data && (i = p.url += (Wt.test(i) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Bt.test(i) ? i.replace(Bt, "$1_=" + Ft++) : i + (Wt.test(i) ? "&" : "?") + "_=" + Ft++)), p.ifModified && (me.lastModified[i] && w.setRequestHeader("If-Modified-Since", me.lastModified[i]), me.etag[i] && w.setRequestHeader("If-None-Match", me.etag[i])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(m, w, p) === !1 || 2 === M)) return w.abort();
            L = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](p[o]);
            if (d = V(Xt, p, n, w)) {
                if (w.readyState = 1, l && h.trigger("ajaxSend", [w, p]), 2 === M) return w;
                p.async && p.timeout > 0 && (u = e.setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    M = 1, d.send(g, r)
                } catch (D) {
                    if (!(2 > M)) throw D;
                    r(-1, D)
                }
            } else r(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return me.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return me.get(e, void 0, t, "script")
        }
    }), me.each(["get", "post"], function(e, t) {
        me[t] = function(e, n, r, a) {
            return me.isFunction(n) && (a = a || r, r = n, n = void 0), me.ajax(me.extend({
                url: e,
                type: t,
                dataType: a,
                data: n,
                success: r
            }, me.isPlainObject(e) && e))
        }
    }), me._evalUrl = function(e) {
        return me.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, me.fn.extend({
        wrapAll: function(e) {
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = me(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return me.isFunction(e) ? this.each(function(t) {
                me(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = me(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = me.isFunction(e);
            return this.each(function(n) {
                me(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                me.nodeName(this, "body") || me(this).replaceWith(this.childNodes)
            }).end()
        }
    }), me.expr.filters.hidden = function(e) {
        return ce.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : X(e)
    }, me.expr.filters.visible = function(e) {
        return !me.expr.filters.hidden(e)
    };
    var tn = /%20/g,
        nn = /\[\]$/,
        rn = /\r?\n/g,
        an = /^(?:submit|button|image|reset|file)$/i,
        on = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) {
        var n, r = [],
            a = function(e, t) {
                t = me.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = me.ajaxSettings && me.ajaxSettings.traditional), me.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() {
            a(this.name, this.value)
        });
        else
            for (n in e) Q(n, e[n], t, a);
        return r.join("&").replace(tn, "+")
    }, me.fn.extend({
        serialize: function() {
            return me.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = me.prop(this, "elements");
                return e ? me.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !me(this).is(":disabled") && on.test(this.nodeName) && !an.test(e) && (this.checked || !Fe.test(e))
            }).map(function(e, t) {
                var n = me(this).val();
                return null == n ? null : me.isArray(n) ? me.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }), me.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var sn = 0,
        un = {},
        ln = me.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in un) un[e](void 0, !0)
    }), ce.cors = !!ln && "withCredentials" in ln, ln = ce.ajax = !!ln, ln && me.ajaxTransport(function(t) {
        if (!t.crossDomain || ce.cors) {
            var n;
            return {
                send: function(r, a) {
                    var o, i = t.xhr(),
                        s = ++sn;
                    if (i.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) i[o] = t.xhrFields[o];
                    t.mimeType && i.overrideMimeType && i.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && i.setRequestHeader(o, r[o] + "");
                    i.send(t.hasContent && t.data || null), n = function(e, r) {
                        var o, u, l;
                        if (n && (r || 4 === i.readyState))
                            if (delete un[s], n = void 0, i.onreadystatechange = me.noop, r) 4 !== i.readyState && i.abort();
                            else {
                                l = {}, o = i.status, "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    u = i.statusText
                                } catch (d) {
                                    u = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            }
                        l && a(o, u, l, i.getAllResponseHeaders())
                    }, t.async ? 4 === i.readyState ? e.setTimeout(n) : i.onreadystatechange = un[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), me.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), me.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return me.globalEval(e), e
            }
        }
    }), me.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), me.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || me("head")[0] || re.documentElement;
            return {
                send: function(r, a) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || a(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var dn = [],
        cn = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = dn.pop() || me.expando + "_" + Ft++;
            return this[e] = !0, e
        }
    }), me.ajaxPrefilter("json jsonp", function(t, n, r) {
        var a, o, i, s = t.jsonp !== !1 && (cn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(cn, "$1" + a) : t.jsonp !== !1 && (t.url += (Wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() {
            return i || me.error(a + " was not called"), i[0]
        }, t.dataTypes[0] = "json", o = e[a], e[a] = function() {
            i = arguments
        }, r.always(function() {
            void 0 === o ? me(e).removeProp(a) : e[a] = o, t[a] && (t.jsonpCallback = n.jsonpCallback, dn.push(a)), i && me.isFunction(o) && o(i[0]), i = o = void 0
        }), "script") : void 0
    }), ce.createHTMLDocument = function() {
        if (!re.implementation.createHTMLDocument) return !1;
        var e = re.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
    }(), me.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (ce.createHTMLDocument ? re.implementation.createHTMLDocument("") : re);
        var r = we.exec(e),
            a = !n && [];
        return r ? [t.createElement(r[1])] : (r = y([e], t, a), a && a.length && me(a).remove(), me.merge([], r.childNodes))
    };
    var pn = me.fn.load;
    me.fn.load = function(e, t, n) {
        if ("string" != typeof e && pn) return pn.apply(this, arguments);
        var r, a, o, i = this,
            s = e.indexOf(" ");
        return s > -1 && (r = me.trim(e.slice(s, e.length)), e = e.slice(0, s)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), i.length > 0 && me.ajax({
            url: e,
            type: a || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, i.html(r ? me("<div>").append(me.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            i.each(function() {
                n.apply(i, o || [e.responseText, t, e])
            })
        }), this
    }, me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        me.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), me.expr.filters.animated = function(e) {
        return me.grep(me.timers, function(t) {
            return e === t.elem
        }).length
    }, me.offset = {
        setOffset: function(e, t, n) {
            var r, a, o, i, s, u, l, d = me.css(e, "position"),
                c = me(e),
                p = {};
            "static" === d && (e.style.position = "relative"), s = c.offset(), o = me.css(e, "top"), u = me.css(e, "left"), l = ("absolute" === d || "fixed" === d) && me.inArray("auto", [o, u]) > -1, l ? (r = c.position(), i = r.top, a = r.left) : (i = parseFloat(o) || 0, a = parseFloat(u) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, s))), null != t.top && (p.top = t.top - s.top + i), null != t.left && (p.left = t.left - s.left + a), "using" in t ? t.using.call(e, p) : c.css(p)
        }
    }, me.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                me.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                a = this[0],
                o = a && a.ownerDocument;
            return o ? (t = o.documentElement, me.contains(t, a) ? ("undefined" != typeof a.getBoundingClientRect && (r = a.getBoundingClientRect()), n = te(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === me.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(), me.nodeName(e[0], "html") || (n = e.offset()), n.top += me.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += me.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                    top: t.top - n.top - me.css(r, "marginTop", !0),
                    left: t.left - n.left - me.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !me.nodeName(e, "html") && "static" === me.css(e, "position");) e = e.offsetParent;
                return e || mt
            })
        }
    }), me.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        me.fn[e] = function(r) {
            return Oe(this, function(e, r, a) {
                var o = te(e);
                return void 0 === a ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? me(o).scrollLeft() : a, n ? a : me(o).scrollTop()) : e[r] = a)
            }, e, r, arguments.length, null)
        }
    }), me.each(["top", "left"], function(e, t) {
        me.cssHooks[t] = C(ce.pixelPosition, function(e, n) {
            return n ? (n = ft(e, t), ct.test(n) ? me(e).position()[t] + "px" : n) : void 0
        })
    }), me.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        me.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            me.fn[r] = function(r, a) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    i = n || (r === !0 || a === !0 ? "margin" : "border");
                return Oe(this, function(t, n, r) {
                    var a;
                    return me.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? me.css(t, n, i) : me.style(t, n, r, i)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), me.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), me.fn.size = function() {
        return this.length
    }, me.fn.andSelf = me.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return me
    });
    var mn = e.jQuery,
        hn = e.$;
    return me.noConflict = function(t) {
        return e.$ === me && (e.$ = hn), t && e.jQuery === me && (e.jQuery = mn), me
    }, t || (e.jQuery = e.$ = me), me
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : e.fluidvids = t()
}(this, function() {
    "use strict";
    var e = {
            selector: "iframe",
            players: ["www.youtube.com", "player.vimeo.com"]
        },
        t = document.head || document.getElementsByTagName("head")[0],
        n = ".fluidvids{width:100%;position:relative;}.fluidvids iframe{position:absolute;top:0px;left:0px;width:100%;height:100%;}",
        r = function(t) {
            var n = new RegExp("^(https?:)?//(?:" + e.players.join("|") + ").*$", "i");
            return n.test(t)
        },
        a = function(e) {
            if (!e.getAttribute("data-fluidvids")) {
                var t = document.createElement("div"),
                    n = parseInt(e.height ? e.height : e.offsetHeight, 10) / parseInt(e.width ? e.width : e.offsetWidth, 10) * 100;
                e.parentNode.insertBefore(t, e), e.setAttribute("data-fluidvids", "loaded"), t.className += "fluidvids", t.style.paddingTop = n + "%", t.appendChild(e)
            }
        },
        o = function() {
            var e = document.createElement("div");
            e.innerHTML = "<p>x</p><style>" + n + "</style>", t.appendChild(e.childNodes[1])
        };
    return e.apply = function() {
        for (var t = document.querySelectorAll(e.selector), n = 0; n < t.length; n++) {
            var o = t[n];
            r(o.src) && a(o)
        }
    }, e.init = function(t) {
        for (var n in t) e[n] = t[n];
        e.apply(), o()
    }, e
}),
function(e) {
    "undefined" != typeof exports ? module.exports = e() : window.LightRouter = e(window)
}(function(e) {
    function t(t) {
        this.pathRoot = "", this.routes = [], this.type = "path", this.path = null, this.hash = null, this.context = this, this.handler = e;
        var n = "([\\w-]+)";
        if (this.namedParam = {
                match: new RegExp("{(" + n + ")}", "g"),
                replace: n
            }, t = t || {}, t.type && this.setType(t.type), t.path && this.setPath(t.path), t.pathRoot && this.setPathRoot(t.pathRoot), t.hash && this.setHash(t.hash), t.context && this.setContext(t.context), t.handler && this.setHandler(t.handler), t.routes) {
            var r;
            for (r in t.routes) this.add(r, t.routes[r])
        }
    }

    function n(e, t, n) {
        this.path = e, this.callback = t, this.router = n, this.values = []
    }
    return t.prototype = {
        Route: n,
        add: function(e, t) {
            return this.routes.push(new this.Route(e, t, this)), this
        },
        empty: function() {
            return this.routes = [], this
        },
        setType: function(e) {
            return this.type = e, this
        },
        setPathRoot: function(e) {
            return this.pathRoot = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        },
        setHash: function(e) {
            return this.hash = e, this
        },
        setContext: function(e) {
            return this.context = e, this
        },
        setHandler: function(e) {
            return this.handler = e, this
        },
        getUrl: function(t) {
            var n;
            if (t = t || this.type, "path" == t) {
                var r = new RegExp("^" + this.pathRoot + "/?");
                n = this.path || e.location.pathname.substring(1), n = n.replace(r, "")
            } else "hash" == t && (n = this.hash || e.location.hash.substring(1));
            return decodeURI(n)
        },
        match: function(e, t) {
            var n = new this.Route(e, t, this);
            return n.test(this.getUrl()) ? n.run() : void 0
        },
        run: function() {
            var e, t = this.getUrl();
            for (var n in this.routes)
                if (e = this.routes[n], e.test(t)) return e.run(), e
        }
    }, n.prototype = {
        regex: function() {
            var e = this.path;
            return "string" == typeof e ? new RegExp("^" + e.replace(/\//g, "\\/").replace(this.router.namedParam.match, this.router.namedParam.replace) + "$") : e
        },
        params: function() {
            var e, t, n = {},
                r = this.values,
                a = r,
                o = 0,
                i = this.path;
            "string" == typeof i && (o = 1, a = i.match(this.router.namedParam.match));
            for (t in a) e = o ? a[t].replace(this.router.namedParam.match, "$1") : t, n[e] = r[t];
            return n
        },
        test: function(e) {
            var t;
            return (t = e.match(this.regex())) ? (this.values = t.slice(1), !0) : !1
        },
        run: function() {
            return "string" == typeof this.callback ? this.router.handler[this.callback](this.params()) : this.callback.apply(this.router.context, [this.params()])
        }
    }, t
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";

    function e() {
        return Or.apply(null, arguments)
    }

    function t(e) {
        Or = e
    }

    function n(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function r(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function a(e, t) {
        var n, r = [];
        for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
        return r
    }

    function o(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function i(e, t) {
        for (var n in t) o(t, n) && (e[n] = t[n]);
        return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function s(e, t, n, r) {
        return xe(e, t, n, r, !0).utc()
    }

    function u() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function l(e) {
        return null == e._pf && (e._pf = u()), e._pf
    }

    function d(e) {
        if (null == e._isValid) {
            var t = l(e);
            e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
        }
        return e._isValid
    }

    function c(e) {
        var t = s(NaN);
        return null != e ? i(l(t), e) : l(t).userInvalidated = !0, t
    }

    function p(e, t) {
        var n, r, a;
        if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = l(t)), "undefined" != typeof t._locale && (e._locale = t._locale), Wr.length > 0)
            for (n in Wr) r = Wr[n], a = t[r], "undefined" != typeof a && (e[r] = a);
        return e
    }

    function m(t) {
        p(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), Ur === !1 && (Ur = !0, e.updateOffset(this), Ur = !1)
    }

    function h(e) {
        return e instanceof m || null != e && null != e._isAMomentObject
    }

    function f(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function _(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = f(t)), n
    }

    function y(e, t, n) {
        var r, a = Math.min(e.length, t.length),
            o = Math.abs(e.length - t.length),
            i = 0;
        for (r = 0; a > r; r++)(n && e[r] !== t[r] || !n && _(e[r]) !== _(t[r])) && i++;
        return i + o
    }

    function g() {}

    function v(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function M(e) {
        for (var t, n, r, a, o = 0; o < e.length;) {
            for (a = v(e[o]).split("-"), t = a.length, n = v(e[o + 1]), n = n ? n.split("-") : null; t > 0;) {
                if (r = L(a.slice(0, t).join("-"))) return r;
                if (n && n.length >= t && y(a, n, !0) >= t - 1) break;
                t--
            }
            o++
        }
        return null
    }

    function L(e) {
        var t = null;
        if (!zr[e] && "undefined" != typeof module && module && module.exports) try {
            t = Fr._abbr, require("./locale/" + e), w(t)
        } catch (n) {}
        return zr[e]
    }

    function w(e, t) {
        var n;
        return e && (n = "undefined" == typeof t ? T(e) : D(e, t), n && (Fr = n)), Fr._abbr
    }

    function D(e, t) {
        return null !== t ? (t.abbr = e, zr[e] = zr[e] || new g, zr[e].set(t), w(e), zr[e]) : (delete zr[e], null)
    }

    function T(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Fr;
        if (!n(e)) {
            if (t = L(e)) return t;
            e = [e]
        }
        return M(e)
    }

    function b(e, t) {
        var n = e.toLowerCase();
        Br[n] = Br[n + "s"] = Br[t] = e
    }

    function Y(e) {
        return "string" == typeof e ? Br[e] || Br[e.toLowerCase()] : void 0
    }

    function k(e) {
        var t, n, r = {};
        for (n in e) o(e, n) && (t = Y(n), t && (r[t] = e[n]));
        return r
    }

    function x(t, n) {
        return function(r) {
            return null != r ? (E(this, t, r), e.updateOffset(this, n), this) : S(this, t)
        }
    }

    function S(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function E(e, t, n) {
        return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function C(e, t) {
        var n;
        if ("object" == typeof e)
            for (n in e) this.set(n, e[n]);
        else if (e = Y(e), "function" == typeof this[e]) return this[e](t);
        return this
    }

    function P(e, t, n) {
        var r = "" + Math.abs(e),
            a = t - r.length,
            o = e >= 0;
        return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r
    }

    function H(e, t, n, r) {
        var a = r;
        "string" == typeof r && (a = function() {
            return this[r]()
        }), e && (Jr[e] = a), t && (Jr[t[0]] = function() {
            return P(a.apply(this, arguments), t[1], t[2])
        }), n && (Jr[n] = function() {
            return this.localeData().ordinal(a.apply(this, arguments), e)
        })
    }

    function N(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function A(e) {
        var t, n, r = e.match($r);
        for (t = 0, n = r.length; n > t; t++) Jr[r[t]] ? r[t] = Jr[r[t]] : r[t] = N(r[t]);
        return function(a) {
            var o = "";
            for (t = 0; n > t; t++) o += r[t] instanceof Function ? r[t].call(a, e) : r[t];
            return o
        }
    }

    function I(e, t) {
        return e.isValid() ? (t = j(t, e.localeData()), qr[t] = qr[t] || A(t), qr[t](e)) : e.localeData().invalidDate()
    }

    function j(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var r = 5;
        for (Vr.lastIndex = 0; r >= 0 && Vr.test(e);) e = e.replace(Vr, n), Vr.lastIndex = 0, r -= 1;
        return e
    }

    function R(e) {
        return "function" == typeof e && "[object Function]" === Object.prototype.toString.call(e)
    }

    function O(e, t, n) {
        la[e] = R(t) ? t : function(e) {
            return e && n ? n : t
        }
    }

    function F(e, t) {
        return o(la, e) ? la[e](t._strict, t._locale) : new RegExp(W(e))
    }

    function W(e) {
        return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, a) {
            return t || n || r || a
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function U(e, t) {
        var n, r = t;
        for ("string" == typeof e && (e = [e]), "number" == typeof t && (r = function(e, n) {
                n[t] = _(e)
            }), n = 0; n < e.length; n++) da[e[n]] = r
    }

    function z(e, t) {
        U(e, function(e, n, r, a) {
            r._w = r._w || {}, t(e, r._w, r, a)
        })
    }

    function B(e, t, n) {
        null != t && o(da, e) && da[e](t, n._a, n, e)
    }

    function $(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function V(e) {
        return this._months[e.month()]
    }

    function q(e) {
        return this._monthsShort[e.month()]
    }

    function J(e, t, n) {
        var r, a, o;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
            if (a = s([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
            if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
            if (!n && this._monthsParse[r].test(e)) return r
        }
    }

    function G(e, t) {
        var n;
        return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), $(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function K(t) {
        return null != t ? (G(this, t), e.updateOffset(this, !0), this) : S(this, "Month")
    }

    function X() {
        return $(this.year(), this.month())
    }

    function Q(e) {
        var t, n = e._a;
        return n && -2 === l(e).overflow && (t = n[pa] < 0 || n[pa] > 11 ? pa : n[ma] < 1 || n[ma] > $(n[ca], n[pa]) ? ma : n[ha] < 0 || n[ha] > 24 || 24 === n[ha] && (0 !== n[fa] || 0 !== n[_a] || 0 !== n[ya]) ? ha : n[fa] < 0 || n[fa] > 59 ? fa : n[_a] < 0 || n[_a] > 59 ? _a : n[ya] < 0 || n[ya] > 999 ? ya : -1, l(e)._overflowDayOfYear && (ca > t || t > ma) && (t = ma), l(e).overflow = t), e
    }

    function Z(t) {
        e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function ee(e, t) {
        var n = !0;
        return i(function() {
            return n && (Z(e + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
        }, t)
    }

    function te(e, t) {
        Ma[e] || (Z(t), Ma[e] = !0)
    }

    function ne(e) {
        var t, n, r = e._i,
            a = La.exec(r);
        if (a) {
            for (l(e).iso = !0, t = 0, n = wa.length; n > t; t++)
                if (wa[t][1].exec(r)) {
                    e._f = wa[t][0];
                    break
                }
            for (t = 0, n = Da.length; n > t; t++)
                if (Da[t][1].exec(r)) {
                    e._f += (a[6] || " ") + Da[t][0];
                    break
                }
            r.match(ia) && (e._f += "Z"), Le(e)
        } else e._isValid = !1
    }

    function re(t) {
        var n = Ta.exec(t._i);
        return null !== n ? void(t._d = new Date(+n[1])) : (ne(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
    }

    function ae(e, t, n, r, a, o, i) {
        var s = new Date(e, t, n, r, a, o, i);
        return 1970 > e && s.setFullYear(e), s
    }

    function oe(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }

    function ie(e) {
        return se(e) ? 366 : 365
    }

    function se(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function ue() {
        return se(this.year())
    }

    function le(e, t, n) {
        var r, a = n - t,
            o = n - e.day();
        return o > a && (o -= 7), a - 7 > o && (o += 7), r = Se(e).add(o, "d"), {
            week: Math.ceil(r.dayOfYear() / 7),
            year: r.year()
        }
    }

    function de(e) {
        return le(e, this._week.dow, this._week.doy).week
    }

    function ce() {
        return this._week.dow
    }

    function pe() {
        return this._week.doy
    }

    function me(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }

    function he(e) {
        var t = le(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }

    function fe(e, t, n, r, a) {
        var o, i = 6 + a - r,
            s = oe(e, 0, 1 + i),
            u = s.getUTCDay();
        return a > u && (u += 7), n = null != n ? 1 * n : a, o = 1 + i + 7 * (t - 1) - u + n, {
            year: o > 0 ? e : e - 1,
            dayOfYear: o > 0 ? o : ie(e - 1) + o
        }
    }

    function _e(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }

    function ye(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function ge(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function ve(e) {
        var t, n, r, a, o = [];
        if (!e._d) {
            for (r = ge(e), e._w && null == e._a[ma] && null == e._a[pa] && Me(e), e._dayOfYear && (a = ye(e._a[ca], r[ca]), e._dayOfYear > ie(a) && (l(e)._overflowDayOfYear = !0), n = oe(a, 0, e._dayOfYear), e._a[pa] = n.getUTCMonth(), e._a[ma] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
            for (; 7 > t; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ha] && 0 === e._a[fa] && 0 === e._a[_a] && 0 === e._a[ya] && (e._nextDay = !0, e._a[ha] = 0), e._d = (e._useUTC ? oe : ae).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ha] = 24)
        }
    }

    function Me(e) {
        var t, n, r, a, o, i, s;
        t = e._w, null != t.GG || null != t.W || null != t.E ? (o = 1, i = 4, n = ye(t.GG, e._a[ca], le(Se(), 1, 4).year), r = ye(t.W, 1), a = ye(t.E, 1)) : (o = e._locale._week.dow, i = e._locale._week.doy, n = ye(t.gg, e._a[ca], le(Se(), o, i).year), r = ye(t.w, 1), null != t.d ? (a = t.d, o > a && ++r) : a = null != t.e ? t.e + o : o), s = fe(n, r, a, i, o), e._a[ca] = s.year, e._dayOfYear = s.dayOfYear
    }

    function Le(t) {
        if (t._f === e.ISO_8601) return void ne(t);
        t._a = [], l(t).empty = !0;
        var n, r, a, o, i, s = "" + t._i,
            u = s.length,
            d = 0;
        for (a = j(t._f, t._locale).match($r) || [], n = 0; n < a.length; n++) o = a[n], r = (s.match(F(o, t)) || [])[0], r && (i = s.substr(0, s.indexOf(r)), i.length > 0 && l(t).unusedInput.push(i), s = s.slice(s.indexOf(r) + r.length), d += r.length), Jr[o] ? (r ? l(t).empty = !1 : l(t).unusedTokens.push(o), B(o, r, t)) : t._strict && !r && l(t).unusedTokens.push(o);
        l(t).charsLeftOver = u - d, s.length > 0 && l(t).unusedInput.push(s), l(t).bigHour === !0 && t._a[ha] <= 12 && t._a[ha] > 0 && (l(t).bigHour = void 0), t._a[ha] = we(t._locale, t._a[ha], t._meridiem), ve(t), Q(t)
    }

    function we(e, t, n) {
        var r;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (r = e.isPM(n), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
    }

    function De(e) {
        var t, n, r, a, o;
        if (0 === e._f.length) return l(e).invalidFormat = !0, void(e._d = new Date(NaN));
        for (a = 0; a < e._f.length; a++) o = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], Le(t), d(t) && (o += l(t).charsLeftOver, o += 10 * l(t).unusedTokens.length, l(t).score = o, (null == r || r > o) && (r = o, n = t));
        i(e, n || t)
    }

    function Te(e) {
        if (!e._d) {
            var t = k(e._i);
            e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], ve(e)
        }
    }

    function be(e) {
        var t = new m(Q(Ye(e)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
    }

    function Ye(e) {
        var t = e._i,
            a = e._f;
        return e._locale = e._locale || T(e._l), null === t || void 0 === a && "" === t ? c({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), h(t) ? new m(Q(t)) : (n(a) ? De(e) : a ? Le(e) : r(t) ? e._d = t : ke(e), e))
    }

    function ke(t) {
        var o = t._i;
        void 0 === o ? t._d = new Date : r(o) ? t._d = new Date(+o) : "string" == typeof o ? re(t) : n(o) ? (t._a = a(o.slice(0), function(e) {
            return parseInt(e, 10)
        }), ve(t)) : "object" == typeof o ? Te(t) : "number" == typeof o ? t._d = new Date(o) : e.createFromInputFallback(t)
    }

    function xe(e, t, n, r, a) {
        var o = {};
        return "boolean" == typeof n && (r = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = n, o._i = e, o._f = t, o._strict = r, be(o)
    }

    function Se(e, t, n, r) {
        return xe(e, t, n, r, !1)
    }

    function Ee(e, t) {
        var r, a;
        if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return Se();
        for (r = t[0], a = 1; a < t.length; ++a)(!t[a].isValid() || t[a][e](r)) && (r = t[a]);
        return r
    }

    function Ce() {
        var e = [].slice.call(arguments, 0);
        return Ee("isBefore", e)
    }

    function Pe() {
        var e = [].slice.call(arguments, 0);
        return Ee("isAfter", e)
    }

    function He(e) {
        var t = k(e),
            n = t.year || 0,
            r = t.quarter || 0,
            a = t.month || 0,
            o = t.week || 0,
            i = t.day || 0,
            s = t.hour || 0,
            u = t.minute || 0,
            l = t.second || 0,
            d = t.millisecond || 0;
        this._milliseconds = +d + 1e3 * l + 6e4 * u + 36e5 * s, this._days = +i + 7 * o, this._months = +a + 3 * r + 12 * n, this._data = {}, this._locale = T(), this._bubble()
    }

    function Ne(e) {
        return e instanceof He
    }

    function Ae(e, t) {
        H(e, 0, 0, function() {
            var e = this.utcOffset(),
                n = "+";
            return 0 > e && (e = -e, n = "-"), n + P(~~(e / 60), 2) + t + P(~~e % 60, 2)
        })
    }

    function Ie(e) {
        var t = (e || "").match(ia) || [],
            n = t[t.length - 1] || [],
            r = (n + "").match(Sa) || ["-", 0, 0],
            a = +(60 * r[1]) + _(r[2]);
        return "+" === r[0] ? a : -a
    }

    function je(t, n) {
        var a, o;
        return n._isUTC ? (a = n.clone(), o = (h(t) || r(t) ? +t : +Se(t)) - +a, a._d.setTime(+a._d + o), e.updateOffset(a, !1), a) : Se(t).local()
    }

    function Re(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function Oe(t, n) {
        var r, a = this._offset || 0;
        return null != t ? ("string" == typeof t && (t = Ie(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && n && (r = Re(this)), this._offset = t, this._isUTC = !0, null != r && this.add(r, "m"), a !== t && (!n || this._changeInProgress ? tt(this, Ke(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? a : Re(this)
    }

    function Fe(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }

    function We(e) {
        return this.utcOffset(0, e)
    }

    function Ue(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Re(this), "m")), this
    }

    function ze() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ie(this._i)), this
    }

    function Be(e) {
        return e = e ? Se(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
    }

    function $e() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ve() {
        if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
        var e = {};
        if (p(e, this), e = Ye(e), e._a) {
            var t = e._isUTC ? s(e._a) : Se(e._a);
            this._isDSTShifted = this.isValid() && y(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function qe() {
        return !this._isUTC
    }

    function Je() {
        return this._isUTC
    }

    function Ge() {
        return this._isUTC && 0 === this._offset
    }

    function Ke(e, t) {
        var n, r, a, i = e,
            s = null;
        return Ne(e) ? i = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (s = Ea.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
            y: 0,
            d: _(s[ma]) * n,
            h: _(s[ha]) * n,
            m: _(s[fa]) * n,
            s: _(s[_a]) * n,
            ms: _(s[ya]) * n
        }) : (s = Ca.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
            y: Xe(s[2], n),
            M: Xe(s[3], n),
            d: Xe(s[4], n),
            h: Xe(s[5], n),
            m: Xe(s[6], n),
            s: Xe(s[7], n),
            w: Xe(s[8], n)
        }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (a = Ze(Se(i.from), Se(i.to)), i = {}, i.ms = a.milliseconds, i.M = a.months), r = new He(i), Ne(e) && o(e, "_locale") && (r._locale = e._locale), r
    }

    function Xe(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }

    function Qe(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function Ze(e, t) {
        var n;
        return t = je(t, e), e.isBefore(t) ? n = Qe(e, t) : (n = Qe(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function et(e, t) {
        return function(n, r) {
            var a, o;
            return null === r || isNaN(+r) || (te(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), o = n, n = r, r = o), n = "string" == typeof n ? +n : n, a = Ke(n, r), tt(this, a, e), this
        }
    }

    function tt(t, n, r, a) {
        var o = n._milliseconds,
            i = n._days,
            s = n._months;
        a = null == a ? !0 : a, o && t._d.setTime(+t._d + o * r), i && E(t, "Date", S(t, "Date") + i * r), s && G(t, S(t, "Month") + s * r), a && e.updateOffset(t, i || s)
    }

    function nt(e, t) {
        var n = e || Se(),
            r = je(n, this).startOf("day"),
            a = this.diff(r, "days", !0),
            o = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse";
        return this.format(t && t[o] || this.localeData().calendar(o, this, Se(n)))
    }

    function rt() {
        return new m(this)
    }

    function at(e, t) {
        var n;
        return t = Y("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = h(e) ? e : Se(e), +this > +e) : (n = h(e) ? +e : +Se(e), n < +this.clone().startOf(t))
    }

    function ot(e, t) {
        var n;
        return t = Y("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = h(e) ? e : Se(e), +e > +this) : (n = h(e) ? +e : +Se(e), +this.clone().endOf(t) < n)
    }

    function it(e, t, n) {
        return this.isAfter(e, n) && this.isBefore(t, n)
    }

    function st(e, t) {
        var n;
        return t = Y(t || "millisecond"), "millisecond" === t ? (e = h(e) ? e : Se(e), +this === +e) : (n = +Se(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
    }

    function ut(e, t, n) {
        var r, a, o = je(e, this),
            i = 6e4 * (o.utcOffset() - this.utcOffset());
        return t = Y(t), "year" === t || "month" === t || "quarter" === t ? (a = lt(this, o), "quarter" === t ? a /= 3 : "year" === t && (a /= 12)) : (r = this - o, a = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - i) / 864e5 : "week" === t ? (r - i) / 6048e5 : r), n ? a : f(a)
    }

    function lt(e, t) {
        var n, r, a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            o = e.clone().add(a, "months");
        return 0 > t - o ? (n = e.clone().add(a - 1, "months"), r = (t - o) / (o - n)) : (n = e.clone().add(a + 1, "months"), r = (t - o) / (n - o)), -(a + r)
    }

    function dt() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ct() {
        var e = this.clone().utc();
        return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : I(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function pt(t) {
        var n = I(this, t || e.defaultFormat);
        return this.localeData().postformat(n)
    }

    function mt(e, t) {
        return this.isValid() ? Ke({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function ht(e) {
        return this.from(Se(), e)
    }

    function ft(e, t) {
        return this.isValid() ? Ke({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function _t(e) {
        return this.to(Se(), e)
    }

    function yt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (t = T(e), null != t && (this._locale = t), this)
    }

    function gt() {
        return this._locale
    }

    function vt(e) {
        switch (e = Y(e)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function Mt(e) {
        return e = Y(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
    }

    function Lt() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function wt() {
        return Math.floor(+this / 1e3)
    }

    function Dt() {
        return this._offset ? new Date(+this) : this._d
    }

    function Tt() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }

    function bt() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }

    function Yt() {
        return d(this)
    }

    function kt() {
        return i({}, l(this))
    }

    function xt() {
        return l(this).overflow
    }

    function St(e, t) {
        H(0, [e, e.length], 0, t)
    }

    function Et(e, t, n) {
        return le(Se([e, 11, 31 + t - n]), t, n).week
    }

    function Ct(e) {
        var t = le(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == e ? t : this.add(e - t, "y")
    }

    function Pt(e) {
        var t = le(this, 1, 4).year;
        return null == e ? t : this.add(e - t, "y")
    }

    function Ht() {
        return Et(this.year(), 1, 4)
    }

    function Nt() {
        var e = this.localeData()._week;
        return Et(this.year(), e.dow, e.doy)
    }

    function At(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }

    function It(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
    }

    function jt(e) {
        return this._weekdays[e.day()]
    }

    function Rt(e) {
        return this._weekdaysShort[e.day()]
    }

    function Ot(e) {
        return this._weekdaysMin[e.day()]
    }

    function Ft(e) {
        var t, n, r;
        for (this._weekdaysParse = this._weekdaysParse || [], t = 0; 7 > t; t++)
            if (this._weekdaysParse[t] || (n = Se([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
    }

    function Wt(e) {
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = It(e, this.localeData()), this.add(e - t, "d")) : t
    }

    function Ut(e) {
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }

    function zt(e) {
        return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
    }

    function Bt(e, t) {
        H(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function $t(e, t) {
        return t._meridiemParse
    }

    function Vt(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }

    function qt(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }

    function Jt(e, t) {
        t[ya] = _(1e3 * ("0." + e))
    }

    function Gt() {
        return this._isUTC ? "UTC" : ""
    }

    function Kt() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Xt(e) {
        return Se(1e3 * e)
    }

    function Qt() {
        return Se.apply(null, arguments).parseZone()
    }

    function Zt(e, t, n) {
        var r = this._calendar[e];
        return "function" == typeof r ? r.call(t, n) : r
    }

    function en(e) {
        var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }

    function tn() {
        return this._invalidDate
    }

    function nn(e) {
        return this._ordinal.replace("%d", e)
    }

    function rn(e) {
        return e
    }

    function an(e, t, n, r) {
        var a = this._relativeTime[n];
        return "function" == typeof a ? a(e, t, n, r) : a.replace(/%d/i, e)
    }

    function on(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
    }

    function sn(e) {
        var t, n;
        for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function un(e, t, n, r) {
        var a = T(),
            o = s().set(r, t);
        return a[n](o, e)
    }

    function ln(e, t, n, r, a) {
        if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return un(e, t, n, a);
        var o, i = [];
        for (o = 0; r > o; o++) i[o] = un(e, o, n, a);
        return i
    }

    function dn(e, t) {
        return ln(e, t, "months", 12, "month")
    }

    function cn(e, t) {
        return ln(e, t, "monthsShort", 12, "month")
    }

    function pn(e, t) {
        return ln(e, t, "weekdays", 7, "day")
    }

    function mn(e, t) {
        return ln(e, t, "weekdaysShort", 7, "day")
    }

    function hn(e, t) {
        return ln(e, t, "weekdaysMin", 7, "day")
    }

    function fn() {
        var e = this._data;
        return this._milliseconds = eo(this._milliseconds), this._days = eo(this._days), this._months = eo(this._months), e.milliseconds = eo(e.milliseconds), e.seconds = eo(e.seconds), e.minutes = eo(e.minutes), e.hours = eo(e.hours), e.months = eo(e.months), e.years = eo(e.years), this
    }

    function _n(e, t, n, r) {
        var a = Ke(t, n);
        return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble()
    }

    function yn(e, t) {
        return _n(this, e, t, 1)
    }

    function gn(e, t) {
        return _n(this, e, t, -1)
    }

    function vn(e) {
        return 0 > e ? Math.floor(e) : Math.ceil(e)
    }

    function Mn() {
        var e, t, n, r, a, o = this._milliseconds,
            i = this._days,
            s = this._months,
            u = this._data;
        return o >= 0 && i >= 0 && s >= 0 || 0 >= o && 0 >= i && 0 >= s || (o += 864e5 * vn(wn(s) + i), i = 0, s = 0), u.milliseconds = o % 1e3, e = f(o / 1e3), u.seconds = e % 60, t = f(e / 60), u.minutes = t % 60, n = f(t / 60), u.hours = n % 24, i += f(n / 24), a = f(Ln(i)), s += a, i -= vn(wn(a)), r = f(s / 12), s %= 12, u.days = i, u.months = s, u.years = r, this
    }

    function Ln(e) {
        return 4800 * e / 146097
    }

    function wn(e) {
        return 146097 * e / 4800
    }

    function Dn(e) {
        var t, n, r = this._milliseconds;
        if (e = Y(e), "month" === e || "year" === e) return t = this._days + r / 864e5, n = this._months + Ln(t), "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(wn(this._months)), e) {
            case "week":
                return t / 7 + r / 6048e5;
            case "day":
                return t + r / 864e5;
            case "hour":
                return 24 * t + r / 36e5;
            case "minute":
                return 1440 * t + r / 6e4;
            case "second":
                return 86400 * t + r / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + r;
            default:
                throw new Error("Unknown unit " + e)
        }
    }

    function Tn() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12)
    }

    function bn(e) {
        return function() {
            return this.as(e)
        }
    }

    function Yn(e) {
        return e = Y(e), this[e + "s"]()
    }

    function kn(e) {
        return function() {
            return this._data[e]
        }
    }

    function xn() {
        return f(this.days() / 7)
    }

    function Sn(e, t, n, r, a) {
        return a.relativeTime(t || 1, !!n, e, r)
    }

    function En(e, t, n) {
        var r = Ke(e).abs(),
            a = yo(r.as("s")),
            o = yo(r.as("m")),
            i = yo(r.as("h")),
            s = yo(r.as("d")),
            u = yo(r.as("M")),
            l = yo(r.as("y")),
            d = a < go.s && ["s", a] || 1 === o && ["m"] || o < go.m && ["mm", o] || 1 === i && ["h"] || i < go.h && ["hh", i] || 1 === s && ["d"] || s < go.d && ["dd", s] || 1 === u && ["M"] || u < go.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
        return d[2] = t, d[3] = +e > 0, d[4] = n, Sn.apply(null, d)
    }

    function Cn(e, t) {
        return void 0 === go[e] ? !1 : void 0 === t ? go[e] : (go[e] = t, !0)
    }

    function Pn(e) {
        var t = this.localeData(),
            n = En(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
    }

    function Hn() {
        var e, t, n, r = vo(this._milliseconds) / 1e3,
            a = vo(this._days),
            o = vo(this._months);
        e = f(r / 60), t = f(e / 60), r %= 60, e %= 60, n = f(o / 12), o %= 12;
        var i = n,
            s = o,
            u = a,
            l = t,
            d = e,
            c = r,
            p = this.asSeconds();
        return p ? (0 > p ? "-" : "") + "P" + (i ? i + "Y" : "") + (s ? s + "M" : "") + (u ? u + "D" : "") + (l || d || c ? "T" : "") + (l ? l + "H" : "") + (d ? d + "M" : "") + (c ? c + "S" : "") : "P0D"
    }

    function Nn(e, t) {
        var n = e.split("_");
        return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }

    function An(e, t, n) {
        var r = {
            mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
            hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
            dd: "дзень_дні_дзён",
            MM: "месяц_месяцы_месяцаў",
            yy: "год_гады_гадоў"
        };
        return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + Nn(r[n], +e)
    }

    function In(e, t) {
        var n = {
                nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),
                accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")
            },
            r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[r][e.month()]
    }

    function jn(e, t) {
        var n = {
                nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")
            },
            r = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
        return n[r][e.day()]
    }

    function Rn(e, t, n) {
        var r = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        };
        return e + " " + Wn(r[n], e)
    }

    function On(e) {
        switch (Fn(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return e + " bloaz";
            default:
                return e + " vloaz"
        }
    }

    function Fn(e) {
        return e > 9 ? Fn(e % 10) : e
    }

    function Wn(e, t) {
        return 2 === t ? Un(e) : e
    }

    function Un(e) {
        var t = {
            m: "v",
            b: "v",
            d: "z"
        };
        return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
    }

    function zn(e, t, n) {
        var r = e + " ";
        switch (n) {
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return r += 1 === e ? "dan" : "dana";
            case "MM":
                return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }

    function Bn(e) {
        return e > 1 && 5 > e && 1 !== ~~(e / 10)
    }

    function $n(e, t, n, r) {
        var a = e + " ";
        switch (n) {
            case "s":
                return t || r ? "pár sekund" : "pár sekundami";
            case "m":
                return t ? "minuta" : r ? "minutu" : "minutou";
            case "mm":
                return t || r ? a + (Bn(e) ? "minuty" : "minut") : a + "minutami";
            case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
                return t || r ? a + (Bn(e) ? "hodiny" : "hodin") : a + "hodinami";
            case "d":
                return t || r ? "den" : "dnem";
            case "dd":
                return t || r ? a + (Bn(e) ? "dny" : "dní") : a + "dny";
            case "M":
                return t || r ? "měsíc" : "měsícem";
            case "MM":
                return t || r ? a + (Bn(e) ? "měsíce" : "měsíců") : a + "měsíci";
            case "y":
                return t || r ? "rok" : "rokem";
            case "yy":
                return t || r ? a + (Bn(e) ? "roky" : "let") : a + "lety"
        }
    }

    function Vn(e, t, n, r) {
        var a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? a[n][0] : a[n][1]
    }

    function qn(e, t, n, r) {
        var a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? a[n][0] : a[n][1]
    }

    function Jn(e, t, n, r) {
        var a = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: [e + " minuti", e + " minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: [e + " tunni", e + " tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: [e + " kuu", e + " kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: [e + " aasta", e + " aastat"]
        };
        return t ? a[n][2] ? a[n][2] : a[n][1] : r ? a[n][0] : a[n][1]
    }

    function Gn(e, t, n, r) {
        var a = "";
        switch (n) {
            case "s":
                return r ? "muutaman sekunnin" : "muutama sekunti";
            case "m":
                return r ? "minuutin" : "minuutti";
            case "mm":
                a = r ? "minuutin" : "minuuttia";
                break;
            case "h":
                return r ? "tunnin" : "tunti";
            case "hh":
                a = r ? "tunnin" : "tuntia";
                break;
            case "d":
                return r ? "päivän" : "päivä";
            case "dd":
                a = r ? "päivän" : "päivää";
                break;
            case "M":
                return r ? "kuukauden" : "kuukausi";
            case "MM":
                a = r ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return r ? "vuoden" : "vuosi";
            case "yy":
                a = r ? "vuoden" : "vuotta"
        }
        return a = Kn(e, r) + " " + a
    }

    function Kn(e, t) {
        return 10 > e ? t ? Uo[e] : Wo[e] : e
    }

    function Xn(e, t, n) {
        var r = e + " ";
        switch (n) {
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return r += 1 === e ? "dan" : "dana";
            case "MM":
                return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }

    function Qn(e, t, n, r) {
        var a = e;
        switch (n) {
            case "s":
                return r || t ? "néhány másodperc" : "néhány másodperce";
            case "m":
                return "egy" + (r || t ? " perc" : " perce");
            case "mm":
                return a + (r || t ? " perc" : " perce");
            case "h":
                return "egy" + (r || t ? " óra" : " órája");
            case "hh":
                return a + (r || t ? " óra" : " órája");
            case "d":
                return "egy" + (r || t ? " nap" : " napja");
            case "dd":
                return a + (r || t ? " nap" : " napja");
            case "M":
                return "egy" + (r || t ? " hónap" : " hónapja");
            case "MM":
                return a + (r || t ? " hónap" : " hónapja");
            case "y":
                return "egy" + (r || t ? " év" : " éve");
            case "yy":
                return a + (r || t ? " év" : " éve")
        }
        return ""
    }

    function Zn(e) {
        return (e ? "" : "[múlt] ") + "[" + qo[this.day()] + "] LT[-kor]"
    }

    function er(e, t) {
        var n = {
                nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),
                accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")
            },
            r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[r][e.month()]
    }

    function tr(e, t) {
        var n = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
        return n[e.month()]
    }

    function nr(e, t) {
        var n = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
        return n[e.day()]
    }

    function rr(e) {
        return e % 100 === 11 ? !0 : e % 10 === 1 ? !1 : !0
    }

    function ar(e, t, n, r) {
        var a = e + " ";
        switch (n) {
            case "s":
                return t || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "m":
                return t ? "mínúta" : "mínútu";
            case "mm":
                return rr(e) ? a + (t || r ? "mínútur" : "mínútum") : t ? a + "mínúta" : a + "mínútu";
            case "hh":
                return rr(e) ? a + (t || r ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
            case "d":
                return t ? "dagur" : r ? "dag" : "degi";
            case "dd":
                return rr(e) ? t ? a + "dagar" : a + (r ? "daga" : "dögum") : t ? a + "dagur" : a + (r ? "dag" : "degi");
            case "M":
                return t ? "mánuður" : r ? "mánuð" : "mánuði";
            case "MM":
                return rr(e) ? t ? a + "mánuðir" : a + (r ? "mánuði" : "mánuðum") : t ? a + "mánuður" : a + (r ? "mánuð" : "mánuði");
            case "y":
                return t || r ? "ár" : "ári";
            case "yy":
                return rr(e) ? a + (t || r ? "ár" : "árum") : a + (t || r ? "ár" : "ári")
        }
    }

    function or(e, t) {
        var n = {
                nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            r = /D[oD] *MMMM?/.test(t) ? "accusative" : "nominative";
        return n[r][e.month()]
    }

    function ir(e, t) {
        var n = {
                nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
            },
            r = /(წინა|შემდეგ)/.test(t) ? "accusative" : "nominative";
        return n[r][e.day()]
    }

    function sr(e, t, n, r) {
        var a = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
        };
        return t ? a[n][0] : a[n][1]
    }

    function ur(e) {
        var t = e.substr(0, e.indexOf(" "));
        return dr(t) ? "a " + e : "an " + e
    }

    function lr(e) {
        var t = e.substr(0, e.indexOf(" "));
        return dr(t) ? "viru " + e : "virun " + e
    }

    function dr(e) {
        if (e = parseInt(e, 10), isNaN(e)) return !1;
        if (0 > e) return !0;
        if (10 > e) return e >= 4 && 7 >= e ? !0 : !1;
        if (100 > e) {
            var t = e % 10,
                n = e / 10;
            return dr(0 === t ? n : t)
        }
        if (1e4 > e) {
            for (; e >= 10;) e /= 10;
            return dr(e)
        }
        return e /= 1e3, dr(e)
    }

    function cr(e, t, n, r) {
        return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
    }

    function pr(e, t) {
        var n = {
                nominative: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                accusative: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_")
            },
            r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[r][e.month()]
    }

    function mr(e, t, n, r) {
        return t ? fr(n)[0] : r ? fr(n)[1] : fr(n)[2]
    }

    function hr(e) {
        return e % 10 === 0 || e > 10 && 20 > e
    }

    function fr(e) {
        return Jo[e].split("_")
    }

    function _r(e, t, n, r) {
        var a = e + " ";
        return 1 === e ? a + mr(e, t, n[0], r) : t ? a + (hr(e) ? fr(n)[1] : fr(n)[0]) : r ? a + fr(n)[1] : a + (hr(e) ? fr(n)[1] : fr(n)[2])
    }

    function yr(e, t) {
        var n = -1 === t.indexOf("dddd HH:mm"),
            r = Go[e.day()];
        return n ? r : r.substring(0, r.length - 2) + "į"
    }

    function gr(e, t, n) {
        return n ? t % 10 === 1 && 11 !== t ? e[2] : e[3] : t % 10 === 1 && 11 !== t ? e[0] : e[1]
    }

    function vr(e, t, n) {
        return e + " " + gr(Ko[n], e, t)
    }

    function Mr(e, t, n) {
        return gr(Ko[n], e, t)
    }

    function Lr(e, t) {
        return t ? "dažas sekundes" : "dažām sekundēm"
    }

    function wr(e) {
        return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
    }

    function Dr(e, t, n) {
        var r = e + " ";
        switch (n) {
            case "m":
                return t ? "minuta" : "minutę";
            case "mm":
                return r + (wr(e) ? "minuty" : "minut");
            case "h":
                return t ? "godzina" : "godzinę";
            case "hh":
                return r + (wr(e) ? "godziny" : "godzin");
            case "MM":
                return r + (wr(e) ? "miesiące" : "miesięcy");
            case "yy":
                return r + (wr(e) ? "lata" : "lat")
        }
    }

    function Tr(e, t, n) {
        var r = {
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            },
            a = " ";
        return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (a = " de "), e + a + r[n]
    }

    function br(e, t) {
        var n = e.split("_");
        return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }

    function Yr(e, t, n) {
        var r = {
            mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        };
        return "m" === n ? t ? "минута" : "минуту" : e + " " + br(r[n], +e)
    }

    function kr(e, t) {
        var n = {
                nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
            },
            r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[r][e.month()]
    }

    function xr(e, t) {
        var n = {
                nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
            },
            r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[r][e.month()]
    }

    function Sr(e, t) {
        var n = {
                nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
            },
            r = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
        return n[r][e.day()]
    }

    function Er(e) {
        return e > 1 && 5 > e
    }

    function Cr(e, t, n, r) {
        var a = e + " ";
        switch (n) {
            case "s":
                return t || r ? "pár sekúnd" : "pár sekundami";
            case "m":
                return t ? "minúta" : r ? "minútu" : "minútou";
            case "mm":
                return t || r ? a + (Er(e) ? "minúty" : "minút") : a + "minútami";
            case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
                return t || r ? a + (Er(e) ? "hodiny" : "hodín") : a + "hodinami";
            case "d":
                return t || r ? "deň" : "dňom";
            case "dd":
                return t || r ? a + (Er(e) ? "dni" : "dní") : a + "dňami";
            case "M":
                return t || r ? "mesiac" : "mesiacom";
            case "MM":
                return t || r ? a + (Er(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
            case "y":
                return t || r ? "rok" : "rokom";
            case "yy":
                return t || r ? a + (Er(e) ? "roky" : "rokov") : a + "rokmi"
        }
    }

    function Pr(e, t, n, r) {
        var a = e + " ";
        switch (n) {
            case "s":
                return t || r ? "nekaj sekund" : "nekaj sekundami";
            case "m":
                return t ? "ena minuta" : "eno minuto";
            case "mm":
                return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : 5 > e ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
            case "h":
                return t ? "ena ura" : "eno uro";
            case "hh":
                return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : 5 > e ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
            case "d":
                return t || r ? "en dan" : "enim dnem";
            case "dd":
                return a += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
            case "M":
                return t || r ? "en mesec" : "enim mesecem";
            case "MM":
                return a += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : 5 > e ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
            case "y":
                return t || r ? "eno leto" : "enim letom";
            case "yy":
                return a += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : 5 > e ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
        }
    }

    function Hr(e, t, n, r) {
        var a = {
            s: ["viensas secunds", "'iensas secunds"],
            m: ["'n míut", "'iens míut"],
            mm: [e + " míuts", " " + e + " míuts"],
            h: ["'n þora", "'iensa þora"],
            hh: [e + " þoras", " " + e + " þoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + " ziuas", " " + e + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [e + " mesen", " " + e + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [e + " ars", " " + e + " ars"]
        };
        return r ? a[n][0] : t ? a[n][0] : a[n][1].trim()
    }

    function Nr(e, t) {
        var n = e.split("_");
        return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }

    function Ar(e, t, n) {
        var r = {
            mm: "хвилина_хвилини_хвилин",
            hh: "година_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
        };
        return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + Nr(r[n], +e)
    }

    function Ir(e, t) {
        var n = {
                nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
                accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
            },
            r = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
        return n[r][e.month()]
    }

    function jr(e, t) {
        var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            },
            r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
        return n[r][e.day()]
    }

    function Rr(e) {
        return function() {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
        }
    }
    var Or, Fr, Wr = e.momentProperties = [],
        Ur = !1,
        zr = {},
        Br = {},
        $r = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Vr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        qr = {},
        Jr = {},
        Gr = /\d/,
        Kr = /\d\d/,
        Xr = /\d{3}/,
        Qr = /\d{4}/,
        Zr = /[+-]?\d{6}/,
        ea = /\d\d?/,
        ta = /\d{1,3}/,
        na = /\d{1,4}/,
        ra = /[+-]?\d{1,6}/,
        aa = /\d+/,
        oa = /[+-]?\d+/,
        ia = /Z|[+-]\d\d:?\d\d/gi,
        sa = /[+-]?\d+(\.\d{1,3})?/,
        ua = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        la = {},
        da = {},
        ca = 0,
        pa = 1,
        ma = 2,
        ha = 3,
        fa = 4,
        _a = 5,
        ya = 6;
    H("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), H("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }), H("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }), b("month", "M"), O("M", ea), O("MM", ea, Kr), O("MMM", ua), O("MMMM", ua), U(["M", "MM"], function(e, t) {
        t[pa] = _(e) - 1
    }), U(["MMM", "MMMM"], function(e, t, n, r) {
        var a = n._locale.monthsParse(e, r, n._strict);
        null != a ? t[pa] = a : l(n).invalidMonth = e
    });
    var ga = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        va = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Ma = {};
    e.suppressDeprecationWarnings = !1;
    var La = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        wa = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ],
        Da = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ],
        Ta = /^\/?Date\((\-?\d+)/i;
    e.createFromInputFallback = ee("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), H(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), b("year", "y"), O("Y", oa), O("YY", ea, Kr), O("YYYY", na, Qr), O("YYYYY", ra, Zr), O("YYYYYY", ra, Zr), U(["YYYYY", "YYYYYY"], ca), U("YYYY", function(t, n) {
        n[ca] = 2 === t.length ? e.parseTwoDigitYear(t) : _(t)
    }), U("YY", function(t, n) {
        n[ca] = e.parseTwoDigitYear(t)
    }), e.parseTwoDigitYear = function(e) {
        return _(e) + (_(e) > 68 ? 1900 : 2e3)
    };
    var ba = x("FullYear", !1);
    H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), b("week", "w"), b("isoWeek", "W"), O("w", ea), O("ww", ea, Kr), O("W", ea), O("WW", ea, Kr), z(["w", "ww", "W", "WW"], function(e, t, n, r) {
        t[r.substr(0, 1)] = _(e)
    });
    var Ya = {
        dow: 0,
        doy: 6
    };
    H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), b("dayOfYear", "DDD"), O("DDD", ta), O("DDDD", Xr), U(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = _(e)
    }), e.ISO_8601 = function() {};
    var ka = ee("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var e = Se.apply(null, arguments);
            return this > e ? this : e
        }),
        xa = ee("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var e = Se.apply(null, arguments);
            return e > this ? this : e
        });
    Ae("Z", ":"), Ae("ZZ", ""), O("Z", ia), O("ZZ", ia), U(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0, n._tzm = Ie(e)
    });
    var Sa = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {};
    var Ea = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        Ca = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Ke.fn = He.prototype;
    var Pa = et(1, "add"),
        Ha = et(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Na = ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    H(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), H(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), St("gggg", "weekYear"), St("ggggg", "weekYear"), St("GGGG", "isoWeekYear"), St("GGGGG", "isoWeekYear"), b("weekYear", "gg"), b("isoWeekYear", "GG"), O("G", oa), O("g", oa), O("GG", ea, Kr), O("gg", ea, Kr), O("GGGG", na, Qr), O("gggg", na, Qr), O("GGGGG", ra, Zr), O("ggggg", ra, Zr), z(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
        t[r.substr(0, 2)] = _(e)
    }), z(["gg", "GG"], function(t, n, r, a) {
        n[a] = e.parseTwoDigitYear(t)
    }), H("Q", 0, 0, "quarter"), b("quarter", "Q"), O("Q", Gr), U("Q", function(e, t) {
        t[pa] = 3 * (_(e) - 1)
    }), H("D", ["DD", 2], "Do", "date"), b("date", "D"), O("D", ea), O("DD", ea, Kr), O("Do", function(e, t) {
        return e ? t._ordinalParse : t._ordinalParseLenient
    }), U(["D", "DD"], ma), U("Do", function(e, t) {
        t[ma] = _(e.match(ea)[0], 10)
    });
    var Aa = x("Date", !0);
    H("d", 0, "do", "day"), H("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }), H("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }), H("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), b("day", "d"), b("weekday", "e"), b("isoWeekday", "E"), O("d", ea), O("e", ea), O("E", ea), O("dd", ua), O("ddd", ua), O("dddd", ua), z(["dd", "ddd", "dddd"], function(e, t, n) {
        var r = n._locale.weekdaysParse(e);
        null != r ? t.d = r : l(n).invalidWeekday = e
    }), z(["d", "e", "E"], function(e, t, n, r) {
        t[r] = _(e)
    });
    var Ia = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        ja = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ra = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, function() {
        return this.hours() % 12 || 12
    }), Bt("a", !0), Bt("A", !1), b("hour", "h"), O("a", $t), O("A", $t), O("H", ea), O("h", ea), O("HH", ea, Kr), O("hh", ea, Kr), U(["H", "HH"], ha), U(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), U(["h", "hh"], function(e, t, n) {
        t[ha] = _(e), l(n).bigHour = !0
    });
    var Oa = /[ap]\.?m?\.?/i,
        Fa = x("Hours", !0);
    H("m", ["mm", 2], 0, "minute"), b("minute", "m"), O("m", ea), O("mm", ea, Kr), U(["m", "mm"], fa);
    var Wa = x("Minutes", !1);
    H("s", ["ss", 2], 0, "second"), b("second", "s"), O("s", ea), O("ss", ea, Kr), U(["s", "ss"], _a);
    var Ua = x("Seconds", !1);
    H("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), H(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), H(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), H(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), H(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), H(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), H(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), b("millisecond", "ms"), O("S", ta, Gr), O("SS", ta, Kr), O("SSS", ta, Xr);
    var za;
    for (za = "SSSS"; za.length <= 9; za += "S") O(za, aa);
    for (za = "S"; za.length <= 9; za += "S") U(za, Jt);
    var Ba = x("Milliseconds", !1);
    H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
    var $a = m.prototype;
    $a.add = Pa, $a.calendar = nt, $a.clone = rt, $a.diff = ut, $a.endOf = Mt, $a.format = pt, $a.from = mt, $a.fromNow = ht, $a.to = ft, $a.toNow = _t, $a.get = C, $a.invalidAt = xt, $a.isAfter = at, $a.isBefore = ot, $a.isBetween = it, $a.isSame = st, $a.isValid = Yt, $a.lang = Na, $a.locale = yt, $a.localeData = gt, $a.max = xa, $a.min = ka, $a.parsingFlags = kt, $a.set = C, $a.startOf = vt, $a.subtract = Ha, $a.toArray = Tt, $a.toObject = bt, $a.toDate = Dt, $a.toISOString = ct, $a.toJSON = ct, $a.toString = dt, $a.unix = wt, $a.valueOf = Lt, $a.year = ba, $a.isLeapYear = ue, $a.weekYear = Ct, $a.isoWeekYear = Pt, $a.quarter = $a.quarters = At, $a.month = K, $a.daysInMonth = X, $a.week = $a.weeks = me, $a.isoWeek = $a.isoWeeks = he, $a.weeksInYear = Nt, $a.isoWeeksInYear = Ht, $a.date = Aa, $a.day = $a.days = Wt, $a.weekday = Ut, $a.isoWeekday = zt, $a.dayOfYear = _e, $a.hour = $a.hours = Fa, $a.minute = $a.minutes = Wa, $a.second = $a.seconds = Ua, $a.millisecond = $a.milliseconds = Ba, $a.utcOffset = Oe, $a.utc = We, $a.local = Ue, $a.parseZone = ze, $a.hasAlignedHourOffset = Be, $a.isDST = $e, $a.isDSTShifted = Ve, $a.isLocal = qe, $a.isUtcOffset = Je, $a.isUtc = Ge, $a.isUTC = Ge, $a.zoneAbbr = Gt, $a.zoneName = Kt, $a.dates = ee("dates accessor is deprecated. Use date instead.", Aa), $a.months = ee("months accessor is deprecated. Use month instead", K), $a.years = ee("years accessor is deprecated. Use year instead", ba), $a.zone = ee("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Fe);
    var Va = $a,
        qa = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Ja = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Ga = "Invalid date",
        Ka = "%d",
        Xa = /\d{1,2}/,
        Qa = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Za = g.prototype;
    Za._calendar = qa, Za.calendar = Zt, Za._longDateFormat = Ja, Za.longDateFormat = en, Za._invalidDate = Ga, Za.invalidDate = tn, Za._ordinal = Ka, Za.ordinal = nn, Za._ordinalParse = Xa, Za.preparse = rn, Za.postformat = rn, Za._relativeTime = Qa, Za.relativeTime = an, Za.pastFuture = on, Za.set = sn, Za.months = V, Za._months = ga, Za.monthsShort = q, Za._monthsShort = va, Za.monthsParse = J, Za.week = de, Za._week = Ya, Za.firstDayOfYear = pe, Za.firstDayOfWeek = ce, Za.weekdays = jt, Za._weekdays = Ia, Za.weekdaysMin = Ot, Za._weekdaysMin = Ra, Za.weekdaysShort = Rt, Za._weekdaysShort = ja, Za.weekdaysParse = Ft, Za.isPM = Vt, Za._meridiemParse = Oa, Za.meridiem = qt, w("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10,
                n = 1 === _(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }), e.lang = ee("moment.lang is deprecated. Use moment.locale instead.", w), e.langData = ee("moment.langData is deprecated. Use moment.localeData instead.", T);
    var eo = Math.abs,
        to = bn("ms"),
        no = bn("s"),
        ro = bn("m"),
        ao = bn("h"),
        oo = bn("d"),
        io = bn("w"),
        so = bn("M"),
        uo = bn("y"),
        lo = kn("milliseconds"),
        co = kn("seconds"),
        po = kn("minutes"),
        mo = kn("hours"),
        ho = kn("days"),
        fo = kn("months"),
        _o = kn("years"),
        yo = Math.round,
        go = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        vo = Math.abs,
        Mo = He.prototype;
    Mo.abs = fn, Mo.add = yn, Mo.subtract = gn, Mo.as = Dn, Mo.asMilliseconds = to, Mo.asSeconds = no, Mo.asMinutes = ro, Mo.asHours = ao, Mo.asDays = oo, Mo.asWeeks = io, Mo.asMonths = so, Mo.asYears = uo, Mo.valueOf = Tn, Mo._bubble = Mn, Mo.get = Yn, Mo.milliseconds = lo, Mo.seconds = co, Mo.minutes = po, Mo.hours = mo, Mo.days = ho, Mo.weeks = xn, Mo.months = fo, Mo.years = _o, Mo.humanize = Pn, Mo.toISOString = Hn, Mo.toString = Hn, Mo.toJSON = Hn, Mo.locale = yt, Mo.localeData = gt, Mo.toIsoString = ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Hn), Mo.lang = Na, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), O("x", oa), O("X", sa), U("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }), U("x", function(e, t, n) {
        n._d = new Date(_(e))
    }), e.version = "2.10.6", t(Se), e.fn = Va, e.min = Ce, e.max = Pe, e.utc = s, e.unix = Xt, e.months = dn, e.isDate = r, e.locale = w, e.invalid = c, e.duration = Ke, e.isMoment = h, e.weekdays = pn, e.parseZone = Qt, e.localeData = T, e.isDuration = Ne, e.monthsShort = cn, e.weekdaysMin = hn, e.defineLocale = D, e.weekdaysShort = mn, e.normalizeUnits = Y, e.relativeTimeThreshold = Cn;
    var Lo = e,
        wo = (Lo.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return 12 > e ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }),
        Do = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        },
        To = (Lo.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return Do[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return wo[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), Lo.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }),
        bo = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        },
        Yo = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
        },
        ko = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        },
        xo = function(e) {
            return function(t, n, r, a) {
                var o = Yo(t),
                    i = ko[e][Yo(t)];
                return 2 === o && (i = i[n ? 0 : 1]), i.replace(/%d/i, t)
            }
        },
        So = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"],
        Eo = (Lo.defineLocale("ar", {
            months: So,
            monthsShort: So,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: xo("s"),
                m: xo("m"),
                mm: xo("m"),
                h: xo("h"),
                hh: xo("h"),
                d: xo("d"),
                dd: xo("d"),
                M: xo("M"),
                MM: xo("M"),
                y: xo("y"),
                yy: xo("y")
            },
            preparse: function(e) {
                return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return bo[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return To[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        }),
        Co = (Lo.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "gecə" : 12 > e ? "səhər" : 17 > e ? "gündüz" : "axşam"
            },
            ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-ıncı";
                var t = e % 10,
                    n = e % 100 - t,
                    r = e >= 100 ? 100 : null;
                return e + (Eo[t] || Eo[n] || Eo[r])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("be", {
            months: In,
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: jn,
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: An,
                mm: An,
                h: An,
                hh: An,
                d: "дзень",
                dd: An,
                M: "месяц",
                MM: An,
                y: "год",
                yy: An
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара"
            },
            ordinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০"
        }),
        Po = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
        },
        Ho = (Lo.defineLocale("bn", {
            months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),
            weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কএক সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                    return Po[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Co[e]
                })
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকেল|রাত/,
            isPM: function(e) {
                return /^(দুপুর|বিকেল|রাত)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "রাত" : 10 > e ? "সকাল" : 17 > e ? "দুপুর" : 20 > e ? "বিকেল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠"
        }),
        No = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
        },
        Ao = (Lo.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                    return No[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Ho[e]
                })
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            isPM: function(e) {
                return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "མཚན་མོ" : 10 > e ? "ཞོགས་ཀས" : 17 > e ? "ཉིན་གུང" : 20 > e ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Lo.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                m: "ur vunutenn",
                mm: Rn,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: Rn,
                M: "ur miz",
                MM: Rn,
                y: "ur bloaz",
                yy: On
            },
            ordinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                var t = 1 === e ? "añ" : "vet";
                return e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: zn,
                mm: zn,
                h: zn,
                hh: zn,
                d: "dan",
                dd: zn,
                M: "mjesec",
                MM: zn,
                y: "godinu",
                yy: zn
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("ca", {
            months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return ("w" === t || "W" === t) && (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),
        Io = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
        jo = (Lo.defineLocale("cs", {
            months: Ao,
            monthsShort: Io,
            monthsParse: function(e, t) {
                var n, r = [];
                for (n = 0; 12 > n; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                return r
            }(Ao, Io),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: $n,
                m: $n,
                mm: $n,
                h: $n,
                hh: $n,
                d: $n,
                dd: $n,
                M: $n,
                MM: $n,
                y: $n,
                yy: $n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                    return e + t
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            ordinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = e,
                    n = "",
                    r = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = r[t]), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I går kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[Morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[Gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: Vn,
                mm: "%d Minuten",
                h: Vn,
                hh: "%d Stunden",
                d: Vn,
                dd: Vn,
                M: Vn,
                MM: Vn,
                y: Vn,
                yy: Vn
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[Morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[Gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: qn,
                mm: "%d Minuten",
                h: qn,
                hh: "%d Stunden",
                d: qn,
                dd: qn,
                M: qn,
                MM: qn,
                y: qn,
                yy: qn
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n = this._calendarEl[e],
                    r = t && t.hours();
                return "function" == typeof n && (n = n.apply(t)), n.replace("{}", r % 12 === 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            ordinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "D MMMM, YYYY",
                LLL: "D MMMM, YYYY h:mm A",
                LLLL: "dddd, D MMMM, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), Lo.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-an de] MMMM, YYYY",
                LLL: "D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "je %s",
                past: "antaŭ %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            ordinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        }), "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_")),
        Ro = "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),
        Oo = (Lo.defineLocale("es", {
            months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
            monthsShort: function(e, t) {
                return /-MMM-/.test(t) ? Ro[e.month()] : jo[e.month()]
            },
            weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: Jn,
                m: Jn,
                mm: Jn,
                h: Jn,
                hh: Jn,
                d: Jn,
                dd: "%d päeva",
                M: Jn,
                MM: Jn,
                y: Jn,
                yy: Jn
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰"
        }),
        Fo = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
        },
        Wo = (Lo.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چندین ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, function(e) {
                    return Fo[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Oo[e]
                }).replace(/,/g, "،")
            },
            ordinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        }), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),
        Uo = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Wo[7], Wo[8], Wo[9]],
        zo = (Lo.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: Gn,
                m: Gn,
                mm: Gn,
                h: Gn,
                hh: Gn,
                d: Gn,
                dd: Gn,
                M: Gn,
                MM: Gn,
                y: Gn,
                yy: Gn
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e) {
                return e + (1 === e ? "er" : "e")
            }
        }), Lo.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function(e) {
                return e + (1 === e ? "er" : "")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),
        Bo = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        $o = (Lo.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, t) {
                return /-MMM-/.test(t) ? Bo[e.month()] : zo[e.month()]
            },
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return "uns segundos" === e ? "nuns segundos" : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            }
        }), {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }),
        Vo = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        },
        qo = (Lo.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return Vo[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return $o[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Lo.defineLocale("hr", {
            months: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: Xn,
                mm: Xn,
                h: Xn,
                hh: Xn,
                d: "dan",
                dd: Xn,
                M: "mjesec",
                MM: Xn,
                y: "godinu",
                yy: Xn
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")),
        Jo = (Lo.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return 12 > e ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return Zn.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return Zn.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: Qn,
                m: Qn,
                mm: Qn,
                h: Qn,
                hh: Qn,
                d: Qn,
                dd: Qn,
                M: Qn,
                MM: Qn,
                y: Qn,
                yy: Qn
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("hy-am", {
            months: er,
            monthsShort: tr,
            weekdays: nr,
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function(e) {
                return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան"
            },
            ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: ar,
                m: ar,
                mm: ar,
                h: "klukkustund",
                hh: ar,
                d: ar,
                dd: ar,
                M: ar,
                MM: ar,
                y: ar,
                yy: ar
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "Ah時m分",
                LTS: "Ah時m分s秒",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah時m分",
                LLLL: "YYYY年M月D日Ah時m分 dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(e) {
                return "午後" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        }), Lo.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 11 > e ? "enjing" : 15 > e ? "siyang" : 19 > e ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("ka", {
            months: or,
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: ir,
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function(e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនៈ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h시 m분",
                LTS: "A h시 m분 s초",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h시 m분",
                LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇초",
                ss: "%d초",
                m: "일분",
                mm: "%d분",
                h: "한시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한달",
                MM: "%d달",
                y: "일년",
                yy: "%d년"
            },
            ordinalParse: /\d{1,2}일/,
            ordinal: "%d일",
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "오전" : "오후"
            }
        }), Lo.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: ur,
                past: lr,
                s: "e puer Sekonnen",
                m: sr,
                mm: "%d Minutten",
                h: sr,
                hh: "%d Stonnen",
                d: sr,
                dd: "%d Deeg",
                M: sr,
                MM: "%d Méint",
                y: sr,
                yy: "%d Joer"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        }),
        Go = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
        Ko = (Lo.defineLocale("lt", {
            months: pr,
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: yr,
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: cr,
                m: mr,
                mm: _r,
                h: mr,
                hh: _r,
                d: mr,
                dd: _r,
                M: mr,
                MM: _r,
                y: mr,
                yy: _r
            },
            ordinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        }),
        Xo = (Lo.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: Lr,
                m: Mr,
                mm: vr,
                h: Mr,
                hh: vr,
                d: Mr,
                dd: vr,
                M: Mr,
                MM: vr,
                y: Mr,
                yy: vr
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            words: {
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
            },
            translate: function(e, t, n) {
                var r = Xo.words[n];
                return 1 === n.length ? t ? r[0] : r[1] : e + " " + Xo.correctGrammaticalCase(e, r)
            }
        }),
        Qo = (Lo.defineLocale("me", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    var e = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                    return e[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                m: Xo.translate,
                mm: Xo.translate,
                h: Xo.translate,
                hh: Xo.translate,
                d: "dan",
                dd: Xo.translate,
                M: "mjesec",
                MM: Xo.translate,
                y: "godinu",
                yy: Xo.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Во изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Во изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            isPM: function(e) {
                return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
            }
        }), {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }),
        Zo = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        },
        ei = (Lo.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s नंतर",
                past: "%s पूर्वी",
                s: "सेकंद",
                m: "एक मिनिट",
                mm: "%d मिनिटे",
                h: "एक तास",
                hh: "%d तास",
                d: "एक दिवस",
                dd: "%d दिवस",
                M: "एक महिना",
                MM: "%d महिने",
                y: "एक वर्ष",
                yy: "%d वर्षे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return Zo[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return Qo[e]
                })
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? 4 > e ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Lo.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀"
        }),
        ti = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
        },
        ni = (Lo.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                    return ti[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return ei[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "H.mm",
                LTS: "H.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H.mm",
                LLLL: "dddd D. MMMM YYYY [kl.] H.mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }),
        ri = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        },
        ai = (Lo.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return ri[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return ni[e]
                })
            },
            meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "राती" === t ? 3 > e ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "बेलुका" === t || "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return 3 > e ? "राती" : 10 > e ? "बिहान" : 15 > e ? "दिउँसो" : 18 > e ? "बेलुका" : 20 > e ? "साँझ" : "राती"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोली] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडी",
                s: "केही समय",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
        oi = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        ii = (Lo.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, t) {
                return /-MMM-/.test(t) ? oi[e.month()] : ai[e.month()]
            },
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s sidan",
                s: "nokre sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),
        si = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
        ui = (Lo.defineLocale("pl", {
            months: function(e, t) {
                return "" === t ? "(" + si[e.month()] + "|" + ii[e.month()] + ")" : /D MMMM/.test(t) ? si[e.month()] : ii[e.month()]
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
            weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: Dr,
                mm: Dr,
                h: Dr,
                hh: Dr,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: Dr,
                y: "rok",
                yy: Dr
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        }), Lo.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                m: "un minut",
                mm: Tr,
                h: "o oră",
                hh: Tr,
                d: "o zi",
                dd: Tr,
                M: "o lună",
                MM: Tr,
                y: "un an",
                yy: Tr
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("ru", {
            months: kr,
            monthsShort: xr,
            weekdays: Sr,
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function() {
                    return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: Yr,
                mm: Yr,
                h: "час",
                hh: Yr,
                d: "день",
                dd: Yr,
                M: "месяц",
                MM: Yr,
                y: "год",
                yy: Yr
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
            },
            ordinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            ordinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        }), "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),
        li = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
        di = (Lo.defineLocale("sk", {
            months: ui,
            monthsShort: li,
            monthsParse: function(e, t) {
                var n, r = [];
                for (n = 0; 12 > n; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                return r
            }(ui, li),
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: Cr,
                m: Cr,
                mm: Cr,
                h: Cr,
                hh: Cr,
                d: Cr,
                dd: Cr,
                M: Cr,
                MM: Cr,
                y: Cr,
                yy: Cr
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: Pr,
                m: Pr,
                mm: Pr,
                h: Pr,
                hh: Pr,
                d: Pr,
                dd: Pr,
                M: Pr,
                MM: Pr,
                y: Pr,
                yy: Pr
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            words: {
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
            },
            translate: function(e, t, n) {
                var r = di.words[n];
                return 1 === n.length ? t ? r[0] : r[1] : e + " " + di.correctGrammaticalCase(e, r)
            }
        }),
        ci = (Lo.defineLocale("sr-cyrl", {
            months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
            monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
            weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
            weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
            weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                    return e[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                m: di.translate,
                mm: di.translate,
                h: di.translate,
                hh: di.translate,
                d: "дан",
                dd: di.translate,
                M: "месец",
                MM: di.translate,
                y: "годину",
                yy: di.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            words: {
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
            },
            translate: function(e, t, n) {
                var r = ci.words[n];
                return 1 === n.length ? t ? r[0] : r[1] : e + " " + ci.correctGrammaticalCase(e, r)
            }
        }),
        pi = (Lo.defineLocale("sr", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                    return e[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                m: ci.translate,
                mm: ci.translate,
                h: ci.translate,
                hh: ci.translate,
                d: "dan",
                dd: ci.translate,
                M: "mesec",
                MM: ci.translate,
                y: "godinu",
                yy: ci.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                return e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            ordinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது"
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, n) {
                return 2 > e ? " யாமம்" : 6 > e ? " வைகறை" : 10 > e ? " காலை" : 14 > e ? " நண்பகல்" : 18 > e ? " எற்பாடு" : 22 > e ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? 2 > e ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Lo.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            longDateFormat: {
                LT: "H นาฬิกา m นาที",
                LTS: "H นาฬิกา m นาที s วินาที",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function(e, t, n) {
                return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        }), Lo.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ngayon sa] LT",
                nextDay: "[Bukas sa] LT",
                nextWeek: "dddd [sa] LT",
                lastDay: "[Kahapon sa] LT",
                lastWeek: "dddd [huling linggo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        }),
        mi = (Lo.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function(e) {
                if (0 === e) return e + "'ıncı";
                var t = e % 10,
                    n = e % 100 - t,
                    r = e >= 100 ? 100 : null;
                return e + (pi[t] || pi[n] || pi[r])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "LT.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY LT",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY LT"
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: Hr,
                m: Hr,
                mm: Hr,
                h: Hr,
                hh: Hr,
                d: Hr,
                dd: Hr,
                M: Hr,
                MM: Hr,
                y: Hr,
                yy: Hr
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), Lo.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), Lo.defineLocale("uk", {
            months: Ir,
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: jr,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: Rr("[Сьогодні "),
                nextDay: Rr("[Завтра "),
                lastDay: Rr("[Вчора "),
                nextWeek: Rr("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return Rr("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return Rr("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                m: Ar,
                mm: Ar,
                h: "годину",
                hh: Ar,
                d: "день",
                dd: Ar,
                M: "місяць",
                MM: Ar,
                y: "рік",
                yy: Ar
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
            },
            ordinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("uz", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Lo.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah点mm分",
                LTS: "Ah点m分s秒",
                L: "YYYY-MM-DD",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah点mm分",
                LLLL: "YYYY年MMMD日ddddAh点mm分",
                l: "YYYY-MM-DD",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah点mm分",
                llll: "YYYY年MMMD日ddddAh点mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return 600 > r ? "凌晨" : 900 > r ? "早上" : 1130 > r ? "上午" : 1230 > r ? "中午" : 1800 > r ? "下午" : "晚上"
            },
            calendar: {
                sameDay: function() {
                    return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                },
                nextDay: function() {
                    return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                },
                lastDay: function() {
                    return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                },
                nextWeek: function() {
                    var e, t;
                    return e = Lo().startOf("week"), t = this.unix() - e.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
                },
                lastWeek: function() {
                    var e, t;
                    return e = Lo().startOf("week"), t = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
                },
                sameElse: "LL"
            },
            ordinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Lo.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm分",
                LTS: "Ah點m分s秒",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah點mm分",
                LLLL: "YYYY年MMMD日ddddAh點mm分",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah點mm分",
                llll: "YYYY年MMMD日ddddAh點mm分"
            },
            meridiemParse: /早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var r = 100 * e + t;
                return 900 > r ? "早上" : 1130 > r ? "上午" : 1230 > r ? "中午" : 1800 > r ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "一分鐘",
                mm: "%d分鐘",
                h: "一小時",
                hh: "%d小時",
                d: "一天",
                dd: "%d天",
                M: "一個月",
                MM: "%d個月",
                y: "一年",
                yy: "%d年"
            }
        }), Lo);
    return mi.locale("en"), mi
}),
function(e) {
    e.fn.openWeather = function(t) {
        if (!this.length) return this;
        var n, r = {
                descriptionTarget: null,
                maxTemperatureTarget: null,
                minTemperatureTarget: null,
                windSpeedTarget: null,
                humidityTarget: null,
                sunriseTarget: null,
                sunsetTarget: null,
                placeTarget: null,
                iconTarget: null,
                customIcons: null,
                units: "c",
                city: null,
                id: null,
                lat: null,
                lng: null,
                key: null,
                lang: "en",
                success: function() {},
                error: function(e) {}
            },
            a = this,
            o = e(this);
        a.settings = {}, a.settings = e.extend({}, r, t);
        var i = a.settings;
        n = "http://api.openweathermap.org/data/2.5/weather?lang=" + i.lang, null != i.city ? n += "&q=" + i.city.replace(" ", "") : null != i.id ? n += "&id=" + i.id : null != i.lat && null != i.lng && (n += "&lat=" + i.lat + "&lon=" + i.lng), null != i.key && (n += "&APPID=" + i.key);
        var s = function(e) {
            var t = 1e3 * e,
                n = new Date(t),
                r = n.getHours();
            r > 12 && (hoursRemaining = 24 - r, r = 12 - hoursRemaining);
            var a = n.getMinutes();
            a = a.toString(), a.length < 2 && (a = 0 + a);
            var o = r + ":" + a;
            return o
        };
        e.ajax({
            type: "GET",
            url: n,
            dataType: "jsonp",
            success: function(t) {
                if ("f" == i.units) var n = Math.round(1.8 * (t.main.temp - 273.15) + 32) + "°F",
                    r = Math.round(1.8 * (t.main.temp_min - 273.15) + 32) + "°F",
                    a = Math.round(1.8 * (t.main.temp_max - 273.15) + 32) + "°F";
                else var n = Math.round(t.main.temp - 273.15) + "°C",
                    r = Math.round(t.main.temp_min - 273.15) + "°C",
                    a = Math.round(t.main.temp_max - 273.15) + "°C";
                if (o.html(n), null != i.minTemperatureTarget && e(i.minTemperatureTarget).text(r), null != i.maxTemperatureTarget && e(i.maxTemperatureTarget).text(a), e(i.descriptionTarget).text(t.weather[0].description), null != i.iconTarget && null != t.weather[0].icon) {
                    if (null != i.customIcons) {
                        var u, l, d = t.weather[0].icon;
                        l = -1 != d.indexOf("d") ? "day" : "night", ("01d" == d || "01n" == d) && (u = "clear"), ("02d" == d || "02n" == d || "03d" == d || "03n" == d || "04d" == d || "04n" == d) && (u = "clouds"), ("09d" == d || "09n" == d || "10d" == d || "10n" == d) && (u = "rain"), ("11d" == d || "11n" == d) && (u = "storm"), ("13d" == d || "13n" == d) && (u = "snow"), ("50d" == d || "50n" == d) && (u = "mist");
                        var c = i.customIcons + l + "/" + u + ".png"
                    } else var c = "http://openweathermap.org/img/w/" + t.weather[0].icon + ".png";
                    e(i.iconTarget).attr("src", c)
                }
                if (null != i.placeTarget && e(i.placeTarget).text(t.name + ", " + t.sys.country), null != i.windSpeedTarget && e(i.windSpeedTarget).text(Math.round(t.wind.speed) + " Mps"), null != i.humidityTarget && e(i.humidityTarget).text(t.main.humidity + "%"), null != i.sunriseTarget) {
                    var p = s(t.sys.sunrise);
                    e(i.sunriseTarget).text(p + " AM")
                }
                if (null != i.sunsetTarget) {
                    var m = s(t.sys.sunset);
                    e(i.sunsetTarget).text(m + " PM")
                }
                i.success.call(this)
            },
            error: function(e, t, n) {
                i.error.call(this, t)
            }
        })
    }
}(jQuery), "function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e, t, n) {
        var r = {
            init: function(t, n) {
                var r = this;
                r.$elem = e(n), r.options = e.extend({}, e.fn.owlCarousel.options, r.$elem.data(), t), r.userOptions = t, r.loadContent()
            },
            loadContent: function() {
                function t(e) {
                    var t, n = "";
                    if ("function" == typeof r.options.jsonSuccess) r.options.jsonSuccess.apply(this, [e]);
                    else {
                        for (t in e.owl) e.owl.hasOwnProperty(t) && (n += e.owl[t].item);
                        r.$elem.html(n)
                    }
                    r.logIn()
                }
                var n, r = this;
                "function" == typeof r.options.beforeInit && r.options.beforeInit.apply(this, [r.$elem]), "string" == typeof r.options.jsonPath ? (n = r.options.jsonPath, e.getJSON(n, t)) : r.logIn()
            },
            logIn: function() {
                var e = this;
                e.$elem.data("owl-originalStyles", e.$elem.attr("style")), e.$elem.data("owl-originalClasses", e.$elem.attr("class")), e.$elem.css({
                    opacity: 0
                }), e.orignalItems = e.options.items, e.checkBrowser(), e.wrapperWidth = 0, e.checkVisible = null, e.setVars()
            },
            setVars: function() {
                var e = this;
                return 0 === e.$elem.children().length ? !1 : (e.baseClass(), e.eventTypes(), e.$userItems = e.$elem.children(), e.itemsAmount = e.$userItems.length, e.wrapItems(), e.$owlItems = e.$elem.find(".owl-item"), e.$owlWrapper = e.$elem.find(".owl-wrapper"), e.playDirection = "next", e.prevItem = 0, e.prevArr = [0], e.currentItem = 0, e.customEvents(), void e.onStartup())
            },
            onStartup: function() {
                var e = this;
                e.updateItems(), e.calculateAll(), e.buildControls(), e.updateControls(), e.response(), e.moveEvents(), e.stopOnHover(), e.owlStatus(), e.options.transitionStyle !== !1 && e.transitionTypes(e.options.transitionStyle), e.options.autoPlay === !0 && (e.options.autoPlay = 5e3), e.play(), e.$elem.find(".owl-wrapper").css("display", "block"), e.$elem.is(":visible") ? e.$elem.css("opacity", 1) : e.watchVisibility(), e.onstartup = !1, e.eachMoveUpdate(), "function" == typeof e.options.afterInit && e.options.afterInit.apply(this, [e.$elem])
            },
            eachMoveUpdate: function() {
                var e = this;
                e.options.lazyLoad === !0 && e.lazyLoad(), e.options.autoHeight === !0 && e.autoHeight(), e.onVisibleItems(), "function" == typeof e.options.afterAction && e.options.afterAction.apply(this, [e.$elem])
            },
            updateVars: function() {
                var e = this;
                "function" == typeof e.options.beforeUpdate && e.options.beforeUpdate.apply(this, [e.$elem]), e.watchVisibility(), e.updateItems(), e.calculateAll(), e.updatePosition(), e.updateControls(), e.eachMoveUpdate(), "function" == typeof e.options.afterUpdate && e.options.afterUpdate.apply(this, [e.$elem])
            },
            reload: function() {
                var e = this;
                t.setTimeout(function() {
                    e.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var e = this;
                return e.$elem.is(":visible") !== !1 ? !1 : (e.$elem.css({
                    opacity: 0
                }), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible), void(e.checkVisible = t.setInterval(function() {
                    e.$elem.is(":visible") && (e.reload(), e.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(e.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                var e = this;
                e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), e.wrapperOuter = e.$elem.find(".owl-wrapper-outer"), e.$elem.css("display", "block")
            },
            baseClass: function() {
                var e = this,
                    t = e.$elem.hasClass(e.options.baseClass),
                    n = e.$elem.hasClass(e.options.theme);
                t || e.$elem.addClass(e.options.baseClass), n || e.$elem.addClass(e.options.theme)
            },
            updateItems: function() {
                var t, n, r = this;
                if (r.options.responsive === !1) return !1;
                if (r.options.singleItem === !0) return r.options.items = r.orignalItems = 1, r.options.itemsCustom = !1, r.options.itemsDesktop = !1, r.options.itemsDesktopSmall = !1, r.options.itemsTablet = !1, r.options.itemsTabletSmall = !1, r.options.itemsMobile = !1, !1;
                if (t = e(r.options.responsiveBaseWidth).width(), t > (r.options.itemsDesktop[0] || r.orignalItems) && (r.options.items = r.orignalItems), r.options.itemsCustom !== !1)
                    for (r.options.itemsCustom.sort(function(e, t) {
                            return e[0] - t[0]
                        }), n = 0; n < r.options.itemsCustom.length; n += 1) r.options.itemsCustom[n][0] <= t && (r.options.items = r.options.itemsCustom[n][1]);
                else t <= r.options.itemsDesktop[0] && r.options.itemsDesktop !== !1 && (r.options.items = r.options.itemsDesktop[1]), t <= r.options.itemsDesktopSmall[0] && r.options.itemsDesktopSmall !== !1 && (r.options.items = r.options.itemsDesktopSmall[1]), t <= r.options.itemsTablet[0] && r.options.itemsTablet !== !1 && (r.options.items = r.options.itemsTablet[1]), t <= r.options.itemsTabletSmall[0] && r.options.itemsTabletSmall !== !1 && (r.options.items = r.options.itemsTabletSmall[1]), t <= r.options.itemsMobile[0] && r.options.itemsMobile !== !1 && (r.options.items = r.options.itemsMobile[1]);
                r.options.items > r.itemsAmount && r.options.itemsScaleUp === !0 && (r.options.items = r.itemsAmount)
            },
            response: function() {
                var n, r, a = this;
                return a.options.responsive !== !0 ? !1 : (r = e(t).width(), a.resizer = function() {
                    e(t).width() !== r && (a.options.autoPlay !== !1 && t.clearInterval(a.autoPlayInterval), t.clearTimeout(n), n = t.setTimeout(function() {
                        r = e(t).width(), a.updateVars()
                    }, a.options.responsiveRefreshRate))
                }, void e(t).resize(a.resizer))
            },
            updatePosition: function() {
                var e = this;
                e.jumpTo(e.currentItem), e.options.autoPlay !== !1 && e.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    n = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function(a) {
                    var o = e(this);
                    o.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(a)), (a % t.options.items === 0 || a === r) && (a > r || (n += 1)), o.data("owl-roundPages", n)
                })
            },
            appendWrapperSizes: function() {
                var e = this,
                    t = e.$owlItems.length * e.itemWidth;
                e.$owlWrapper.css({
                    width: 2 * t,
                    left: 0
                }), e.appendItemsSizes()
            },
            calculateAll: function() {
                var e = this;
                e.calculateWidth(), e.appendWrapperSizes(), e.loops(), e.max()
            },
            calculateWidth: function() {
                var e = this;
                e.itemWidth = Math.round(e.$elem.width() / e.options.items)
            },
            max: function() {
                var e = this,
                    t = -1 * (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth);
                return e.options.items > e.itemsAmount ? (e.maximumItem = 0, t = 0, e.maximumPixels = 0) : (e.maximumItem = e.itemsAmount - e.options.items, e.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var t, n, r, a = this,
                    o = 0,
                    i = 0;
                for (a.positionsInArray = [0], a.pagesInArray = [], t = 0; t < a.itemsAmount; t += 1) i += a.itemWidth, a.positionsInArray.push(-i), a.options.scrollPerPage === !0 && (n = e(a.$owlItems[t]), r = n.data("owl-roundPages"), r !== o && (a.pagesInArray[o] = a.positionsInArray[t], o = r))
            },
            buildControls: function() {
                var t = this;
                (t.options.navigation === !0 || t.options.pagination === !0) && (t.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem)), t.options.pagination === !0 && t.buildPagination(), t.options.navigation === !0 && t.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    n = e('<div class="owl-buttons"/>');
                t.owlControls.append(n), t.buttonPrev = e("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                }), t.buttonNext = e("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                }), n.append(t.buttonPrev).append(t.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(e) {
                    e.preventDefault()
                }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault(), e(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = e('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                    n.preventDefault(), Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var t, n, r, a, o, i, s = this;
                if (s.options.pagination === !1) return !1;
                for (s.paginationWrapper.html(""), t = 0, n = s.itemsAmount - s.itemsAmount % s.options.items, a = 0; a < s.itemsAmount; a += 1) a % s.options.items === 0 && (t += 1, n === a && (r = s.itemsAmount - s.options.items), o = e("<div/>", {
                    "class": "owl-page"
                }), i = e("<span></span>", {
                    text: s.options.paginationNumbers === !0 ? t : "",
                    "class": s.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), o.append(i), o.data("owl-page", n === a ? r : a), o.data("owl-roundPages", t), s.paginationWrapper.append(o));
                s.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                return t.options.pagination === !1 ? !1 : void t.paginationWrapper.find(".owl-page").each(function() {
                    e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var e = this;
                return e.options.navigation === !1 ? !1 : void(e.options.rewindNav === !1 && (0 === e.currentItem && 0 === e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.addClass("disabled")) : 0 === e.currentItem && 0 !== e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.removeClass("disabled")) : e.currentItem === e.maximumItem ? (e.buttonPrev.removeClass("disabled"), e.buttonNext.addClass("disabled")) : 0 !== e.currentItem && e.currentItem !== e.maximumItem && (e.buttonPrev.removeClass("disabled"), e.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                var e = this;
                e.updatePagination(), e.checkNavigation(), e.owlControls && (e.options.items >= e.itemsAmount ? e.owlControls.hide() : e.owlControls.show())
            },
            destroyControls: function() {
                var e = this;
                e.owlControls && e.owlControls.remove()
            },
            next: function(e) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem > t.maximumItem + (t.options.scrollPerPage === !0 ? t.options.items - 1 : 0)) {
                    if (t.options.rewindNav !== !0) return t.currentItem = t.maximumItem, !1;
                    t.currentItem = 0, e = "rewind"
                }
                t.goTo(t.currentItem, e)
            },
            prev: function(e) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem < 0) {
                    if (t.options.rewindNav !== !0) return t.currentItem = 0, !1;
                    t.currentItem = t.maximumItem, e = "rewind"
                }
                t.goTo(t.currentItem, e)
            },
            goTo: function(e, n, r) {
                var a, o = this;
                return o.isTransition ? !1 : ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), e >= o.maximumItem ? e = o.maximumItem : 0 >= e && (e = 0), o.currentItem = o.owl.currentItem = e, o.options.transitionStyle !== !1 && "drag" !== r && 1 === o.options.items && o.browser.support3d === !0 ? (o.swapSpeed(0), o.browser.support3d === !0 ? o.transition3d(o.positionsInArray[e]) : o.css2slide(o.positionsInArray[e], 1), o.afterGo(), o.singleItemTransition(), !1) : (a = o.positionsInArray[e], o.browser.support3d === !0 ? (o.isCss3Finish = !1, n === !0 ? (o.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.paginationSpeed)) : "rewind" === n ? (o.swapSpeed(o.options.rewindSpeed), t.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.slideSpeed)), o.transition3d(a)) : n === !0 ? o.css2slide(a, o.options.paginationSpeed) : "rewind" === n ? o.css2slide(a, o.options.rewindSpeed) : o.css2slide(a, o.options.slideSpeed), void o.afterGo()))
            },
            jumpTo: function(e) {
                var t = this;
                "function" == typeof t.options.beforeMove && t.options.beforeMove.apply(this, [t.$elem]), e >= t.maximumItem || -1 === e ? e = t.maximumItem : 0 >= e && (e = 0), t.swapSpeed(0), t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[e]) : t.css2slide(t.positionsInArray[e], 1), t.currentItem = t.owl.currentItem = e, t.afterGo()
            },
            afterGo: function() {
                var e = this;
                e.prevArr.push(e.currentItem), e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2], e.prevArr.shift(0), e.prevItem !== e.currentItem && (e.checkPagination(), e.checkNavigation(), e.eachMoveUpdate(), e.options.autoPlay !== !1 && e.checkAp()), "function" == typeof e.options.afterMove && e.prevItem !== e.currentItem && e.options.afterMove.apply(this, [e.$elem])
            },
            stop: function() {
                var e = this;
                e.apStatus = "stop", t.clearInterval(e.autoPlayInterval)
            },
            checkAp: function() {
                var e = this;
                "stop" !== e.apStatus && e.play()
            },
            play: function() {
                var e = this;
                return e.apStatus = "play", e.options.autoPlay === !1 ? !1 : (t.clearInterval(e.autoPlayInterval), void(e.autoPlayInterval = t.setInterval(function() {
                    e.next(!0)
                }, e.options.autoPlay)))
            },
            swapSpeed: function(e) {
                var t = this;
                "slideSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : "paginationSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : "string" != typeof e && t.$owlWrapper.css(t.addCssSpeed(e))
            },
            addCssSpeed: function(e) {
                return {
                    "-webkit-transition": "all " + e + "ms ease",
                    "-moz-transition": "all " + e + "ms ease",
                    "-o-transition": "all " + e + "ms ease",
                    transition: "all " + e + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(e) {
                return {
                    "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                    transform: "translate3d(" + e + "px, 0px,0px)"
                }
            },
            transition3d: function(e) {
                var t = this;
                t.$owlWrapper.css(t.doTranslate(e))
            },
            css2move: function(e) {
                var t = this;
                t.$owlWrapper.css({
                    left: e
                })
            },
            css2slide: function(e, t) {
                var n = this;
                n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({
                    left: e
                }, {
                    duration: t || n.options.slideSpeed,
                    complete: function() {
                        n.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var e, r, a, o, i = this,
                    s = "translate3d(0px, 0px, 0px)",
                    u = n.createElement("div");
                u.style.cssText = "  -moz-transform:" + s + "; -ms-transform:" + s + "; -o-transform:" + s + "; -webkit-transform:" + s + "; transform:" + s, e = /translate3d\(0px, 0px, 0px\)/g, r = u.style.cssText.match(e), a = null !== r && 1 === r.length, o = "ontouchstart" in t || t.navigator.msMaxTouchPoints, i.browser = {
                    support3d: a,
                    isTouch: o
                }
            },
            moveEvents: function() {
                var e = this;
                (e.options.mouseDrag !== !1 || e.options.touchDrag !== !1) && (e.gestures(), e.disabledEvents())
            },
            eventTypes: function() {
                var e = this,
                    t = ["s", "e", "x"];
                e.ev_types = {}, e.options.mouseDrag === !0 && e.options.touchDrag === !0 ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : e.options.mouseDrag === !1 && e.options.touchDrag === !0 ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : e.options.mouseDrag === !0 && e.options.touchDrag === !1 && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), e.ev_types.start = t[0], e.ev_types.move = t[1], e.ev_types.end = t[2]
            },
            disabledEvents: function() {
                var t = this;
                t.$elem.on("dragstart.owl", function(e) {
                    e.preventDefault()
                }), t.$elem.on("mousedown.disableTextSelect", function(t) {
                    return e(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function r(e) {
                    if (void 0 !== e.touches) return {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    };
                    if (void 0 === e.touches) {
                        if (void 0 !== e.pageX) return {
                            x: e.pageX,
                            y: e.pageY
                        };
                        if (void 0 === e.pageX) return {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }
                }

                function a(t) {
                    "on" === t ? (e(n).on(u.ev_types.move, i), e(n).on(u.ev_types.end, s)) : "off" === t && (e(n).off(u.ev_types.move), e(n).off(u.ev_types.end))
                }

                function o(n) {
                    var o, i = n.originalEvent || n || t.event;
                    if (3 === i.which) return !1;
                    if (!(u.itemsAmount <= u.options.items)) {
                        if (u.isCssFinish === !1 && !u.options.dragBeforeAnimFinish) return !1;
                        if (u.isCss3Finish === !1 && !u.options.dragBeforeAnimFinish) return !1;
                        u.options.autoPlay !== !1 && t.clearInterval(u.autoPlayInterval), u.browser.isTouch === !0 || u.$owlWrapper.hasClass("grabbing") || u.$owlWrapper.addClass("grabbing"), u.newPosX = 0, u.newRelativeX = 0, e(this).css(u.removeTransition()), o = e(this).position(), l.relativePos = o.left, l.offsetX = r(i).x - o.left, l.offsetY = r(i).y - o.top, a("on"), l.sliding = !1, l.targetElement = i.target || i.srcElement
                    }
                }

                function i(a) {
                    var o, i, s = a.originalEvent || a || t.event;
                    u.newPosX = r(s).x - l.offsetX, u.newPosY = r(s).y - l.offsetY, u.newRelativeX = u.newPosX - l.relativePos, "function" == typeof u.options.startDragging && l.dragging !== !0 && 0 !== u.newRelativeX && (l.dragging = !0, u.options.startDragging.apply(u, [u.$elem])), (u.newRelativeX > 8 || u.newRelativeX < -8) && u.browser.isTouch === !0 && (void 0 !== s.preventDefault ? s.preventDefault() : s.returnValue = !1, l.sliding = !0), (u.newPosY > 10 || u.newPosY < -10) && l.sliding === !1 && e(n).off("touchmove.owl"), o = function() {
                        return u.newRelativeX / 5
                    }, i = function() {
                        return u.maximumPixels + u.newRelativeX / 5
                    }, u.newPosX = Math.max(Math.min(u.newPosX, o()), i()), u.browser.support3d === !0 ? u.transition3d(u.newPosX) : u.css2move(u.newPosX)
                }

                function s(n) {
                    var r, o, i, s = n.originalEvent || n || t.event;
                    s.target = s.target || s.srcElement, l.dragging = !1, u.browser.isTouch !== !0 && u.$owlWrapper.removeClass("grabbing"), u.newRelativeX < 0 ? u.dragDirection = u.owl.dragDirection = "left" : u.dragDirection = u.owl.dragDirection = "right", 0 !== u.newRelativeX && (r = u.getNewPosition(), u.goTo(r, !1, "drag"), l.targetElement === s.target && u.browser.isTouch !== !0 && (e(s.target).on("click.disable", function(t) {
                        t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.disable")
                    }), o = e._data(s.target, "events").click, i = o.pop(), o.splice(0, 0, i))), a("off")
                }
                var u = this,
                    l = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                u.isCssFinish = !0, u.$elem.on(u.ev_types.start, ".owl-wrapper", o)
            },
            getNewPosition: function() {
                var e = this,
                    t = e.closestItem();
                return t > e.maximumItem ? (e.currentItem = e.maximumItem, t = e.maximumItem) : e.newPosX >= 0 && (t = 0, e.currentItem = 0), t
            },
            closestItem: function() {
                var t = this,
                    n = t.options.scrollPerPage === !0 ? t.pagesInArray : t.positionsInArray,
                    r = t.newPosX,
                    a = null;
                return e.each(n, function(o, i) {
                    r - t.itemWidth / 20 > n[o + 1] && r - t.itemWidth / 20 < i && "left" === t.moveDirection() ? (a = i, t.options.scrollPerPage === !0 ? t.currentItem = e.inArray(a, t.positionsInArray) : t.currentItem = o) : r + t.itemWidth / 20 < i && r + t.itemWidth / 20 > (n[o + 1] || n[o] - t.itemWidth) && "right" === t.moveDirection() && (t.options.scrollPerPage === !0 ? (a = n[o + 1] || n[n.length - 1], t.currentItem = e.inArray(a, t.positionsInArray)) : (a = n[o + 1], t.currentItem = o + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var e, t = this;
                return t.newRelativeX < 0 ? (e = "right", t.playDirection = "next") : (e = "left", t.playDirection = "prev"), e
            },
            customEvents: function() {
                var e = this;
                e.$elem.on("owl.next", function() {
                    e.next()
                }), e.$elem.on("owl.prev", function() {
                    e.prev()
                }), e.$elem.on("owl.play", function(t, n) {
                    e.options.autoPlay = n, e.play(), e.hoverStatus = "play"
                }), e.$elem.on("owl.stop", function() {
                    e.stop(), e.hoverStatus = "stop"
                }), e.$elem.on("owl.goTo", function(t, n) {
                    e.goTo(n)
                }), e.$elem.on("owl.jumpTo", function(t, n) {
                    e.jumpTo(n)
                })
            },
            stopOnHover: function() {
                var e = this;
                e.options.stopOnHover === !0 && e.browser.isTouch !== !0 && e.options.autoPlay !== !1 && (e.$elem.on("mouseover", function() {
                    e.stop()
                }), e.$elem.on("mouseout", function() {
                    "stop" !== e.hoverStatus && e.play()
                }))
            },
            lazyLoad: function() {
                var t, n, r, a, o, i = this;
                if (i.options.lazyLoad === !1) return !1;
                for (t = 0; t < i.itemsAmount; t += 1) n = e(i.$owlItems[t]), "loaded" !== n.data("owl-loaded") && (r = n.data("owl-item"), a = n.find(".lazyOwl"), "string" == typeof a.data("src") ? (void 0 === n.data("owl-loaded") && (a.hide(), n.addClass("loading").data("owl-loaded", "checked")), o = i.options.lazyFollow === !0 ? r >= i.currentItem : !0, o && r < i.currentItem + i.options.items && a.length && i.lazyPreload(n, a)) : n.data("owl-loaded", "loaded"))
            },
            lazyPreload: function(e, n) {
                function r() {
                    e.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === i.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof i.options.afterLazyLoad && i.options.afterLazyLoad.apply(this, [i.$elem])
                }

                function a() {
                    s += 1, i.completeImg(n.get(0)) || o === !0 ? r() : 100 >= s ? t.setTimeout(a, 100) : r()
                }
                var o, i = this,
                    s = 0;
                "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), o = !0) : n[0].src = n.data("src"), a()
            },
            autoHeight: function() {
                function n() {
                    var n = e(o.$owlItems[o.currentItem]).height();
                    o.wrapperOuter.css("height", n + "px"), o.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                        o.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function r() {
                    a += 1, o.completeImg(i.get(0)) ? n() : 100 >= a ? t.setTimeout(r, 100) : o.wrapperOuter.css("height", "")
                }
                var a, o = this,
                    i = e(o.$owlItems[o.currentItem]).find("img");
                void 0 !== i.get(0) ? (a = 0, r()) : n()
            },
            completeImg: function(e) {
                var t;
                return e.complete ? (t = typeof e.naturalWidth, "undefined" !== t && 0 === e.naturalWidth ? !1 : !0) : !1
            },
            onVisibleItems: function() {
                var t, n = this;
                for (n.options.addClassActive === !0 && n.$owlItems.removeClass("active"), n.visibleItems = [], t = n.currentItem; t < n.currentItem + n.options.items; t += 1) n.visibleItems.push(t), n.options.addClassActive === !0 && e(n.$owlItems[t]).addClass("active");
                n.owl.visibleItems = n.visibleItems
            },
            transitionTypes: function(e) {
                var t = this;
                t.outClass = "owl-" + e + "-out", t.inClass = "owl-" + e + "-in"
            },
            singleItemTransition: function() {
                function e(e) {
                    return {
                        position: "relative",
                        left: e + "px"
                    }
                }
                var t = this,
                    n = t.outClass,
                    r = t.inClass,
                    a = t.$owlItems.eq(t.currentItem),
                    o = t.$owlItems.eq(t.prevItem),
                    i = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                    s = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2,
                    u = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": s + "px",
                    "-moz-perspective-origin": s + "px",
                    "perspective-origin": s + "px"
                }), o.css(e(i, 10)).addClass(n).on(u, function() {
                    t.endPrev = !0, o.off(u), t.clearTransStyle(o, n)
                }), a.addClass(r).on(u, function() {
                    t.endCurrent = !0, a.off(u), t.clearTransStyle(a, r)
                })
            },
            clearTransStyle: function(e, t) {
                var n = this;
                e.css({
                    position: "",
                    left: ""
                }).removeClass(t), n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"), n.endPrev = !1, n.endCurrent = !1, n.isTransition = !1)
            },
            owlStatus: function() {
                var e = this;
                e.owl = {
                    userOptions: e.userOptions,
                    baseElement: e.$elem,
                    userItems: e.$userItems,
                    owlItems: e.$owlItems,
                    currentItem: e.currentItem,
                    prevItem: e.prevItem,
                    visibleItems: e.visibleItems,
                    isTouch: e.browser.isTouch,
                    browser: e.browser,
                    dragDirection: e.dragDirection
                }
            },
            clearEvents: function() {
                var r = this;
                r.$elem.off(".owl owl mousedown.disableTextSelect"), e(n).off(".owl owl"), e(t).off("resize", r.resizer)
            },
            unWrap: function() {
                var e = this;
                0 !== e.$elem.children().length && (e.$owlWrapper.unwrap(), e.$userItems.unwrap().unwrap(), e.owlControls && e.owlControls.remove()), e.clearEvents(), e.$elem.attr("style", e.$elem.data("owl-originalStyles") || "").attr("class", e.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var e = this;
                e.stop(), t.clearInterval(e.checkVisible), e.unWrap(), e.$elem.removeData()
            },
            reinit: function(t) {
                var n = this,
                    r = e.extend({}, n.userOptions, t);
                n.unWrap(), n.init(r, n.$elem)
            },
            addItem: function(e, t) {
                var n, r = this;
                return e ? 0 === r.$elem.children().length ? (r.$elem.append(e), r.setVars(), !1) : (r.unWrap(), n = void 0 === t || -1 === t ? -1 : t, n >= r.$userItems.length || -1 === n ? r.$userItems.eq(-1).after(e) : r.$userItems.eq(n).before(e), void r.setVars()) : !1
            },
            removeItem: function(e) {
                var t, n = this;
                return 0 === n.$elem.children().length ? !1 : (t = void 0 === e || -1 === e ? -1 : e, n.unWrap(), n.$userItems.eq(t).remove(), void n.setVars())
            }
        };
        e.fn.owlCarousel = function(t) {
            return this.each(function() {
                if (e(this).data("owl-init") === !0) return !1;
                e(this).data("owl-init", !0);
                var n = Object.create(r);
                n.init(t, this), e.data(this, "owlCarousel", n)
            })
        }, e.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document), ! function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            var t;
            t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.React = e()
        }
    }(function() {
        return function e(t, n, r) {
            function a(i, s) {
                if (!n[i]) {
                    if (!t[i]) {
                        var u = "function" == typeof require && require;
                        if (!s && u) return u(i, !0);
                        if (o) return o(i, !0);
                        var l = new Error("Cannot find module '" + i + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                    }
                    var d = n[i] = {
                        exports: {}
                    };
                    t[i][0].call(d.exports, function(e) {
                        var n = t[i][1][e];
                        return a(n ? n : e)
                    }, d, d.exports, e, t, n, r)
                }
                return n[i].exports
            }
            for (var o = "function" == typeof require && require, i = 0; i < r.length; i++) a(r[i]);
            return a
        }({
            1: [function(e, t, n) {
                "use strict";
                var r = e(19),
                    a = e(32),
                    o = e(34),
                    i = e(33),
                    s = e(38),
                    u = e(39),
                    l = e(55),
                    d = (e(56), e(40)),
                    c = e(51),
                    p = e(54),
                    m = e(64),
                    h = e(68),
                    f = e(73),
                    _ = e(76),
                    y = e(79),
                    g = e(82),
                    v = e(27),
                    M = e(115),
                    L = e(142);
                p.inject();
                var w = l.createElement,
                    D = l.createFactory,
                    T = l.cloneElement,
                    b = f.measure("React", "render", h.render),
                    Y = {
                        Children: {
                            map: a.map,
                            forEach: a.forEach,
                            count: a.count,
                            only: L
                        },
                        Component: o,
                        DOM: d,
                        PropTypes: _,
                        initializeTouchEvents: function(e) {
                            r.useTouchEvents = e
                        },
                        createClass: i.createClass,
                        createElement: w,
                        cloneElement: T,
                        createFactory: D,
                        createMixin: function(e) {
                            return e
                        },
                        constructAndRenderComponent: h.constructAndRenderComponent,
                        constructAndRenderComponentByID: h.constructAndRenderComponentByID,
                        findDOMNode: M,
                        render: b,
                        renderToString: g.renderToString,
                        renderToStaticMarkup: g.renderToStaticMarkup,
                        unmountComponentAtNode: h.unmountComponentAtNode,
                        isValidElement: l.isValidElement,
                        withContext: s.withContext,
                        __spread: v
                    };
                "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
                    CurrentOwner: u,
                    InstanceHandles: m,
                    Mount: h,
                    Reconciler: y,
                    TextComponent: c
                }), Y.version = "0.13.3", t.exports = Y
            }, {
                115: 115,
                142: 142,
                19: 19,
                27: 27,
                32: 32,
                33: 33,
                34: 34,
                38: 38,
                39: 39,
                40: 40,
                51: 51,
                54: 54,
                55: 55,
                56: 56,
                64: 64,
                68: 68,
                73: 73,
                76: 76,
                79: 79,
                82: 82
            }],
            2: [function(e, t, n) {
                "use strict";
                var r = e(117),
                    a = {
                        componentDidMount: function() {
                            this.props.autoFocus && r(this.getDOMNode())
                        }
                    };
                t.exports = a
            }, {
                117: 117
            }],
            3: [function(e, t, n) {
                "use strict";

                function r() {
                    var e = window.opera;
                    return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12
                }

                function a(e) {
                    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
                }

                function o(e) {
                    switch (e) {
                        case x.topCompositionStart:
                            return S.compositionStart;
                        case x.topCompositionEnd:
                            return S.compositionEnd;
                        case x.topCompositionUpdate:
                            return S.compositionUpdate
                    }
                }

                function i(e, t) {
                    return e === x.topKeyDown && t.keyCode === L
                }

                function s(e, t) {
                    switch (e) {
                        case x.topKeyUp:
                            return -1 !== M.indexOf(t.keyCode);
                        case x.topKeyDown:
                            return t.keyCode !== L;
                        case x.topKeyPress:
                        case x.topMouseDown:
                        case x.topBlur:
                            return !0;
                        default:
                            return !1
                    }
                }

                function u(e) {
                    var t = e.detail;
                    return "object" == typeof t && "data" in t ? t.data : null
                }

                function l(e, t, n, r) {
                    var a, l;
                    if (w ? a = o(e) : C ? s(e, r) && (a = S.compositionEnd) : i(e, r) && (a = S.compositionStart), !a) return null;
                    b && (C || a !== S.compositionStart ? a === S.compositionEnd && C && (l = C.getData()) : C = _.getPooled(t));
                    var d = y.getPooled(a, n, r);
                    if (l) d.data = l;
                    else {
                        var c = u(r);
                        null !== c && (d.data = c)
                    }
                    return h.accumulateTwoPhaseDispatches(d), d
                }

                function d(e, t) {
                    switch (e) {
                        case x.topCompositionEnd:
                            return u(t);
                        case x.topKeyPress:
                            var n = t.which;
                            return n !== Y ? null : (E = !0, k);
                        case x.topTextInput:
                            var r = t.data;
                            return r === k && E ? null : r;
                        default:
                            return null
                    }
                }

                function c(e, t) {
                    if (C) {
                        if (e === x.topCompositionEnd || s(e, t)) {
                            var n = C.getData();
                            return _.release(C), C = null, n
                        }
                        return null
                    }
                    switch (e) {
                        case x.topPaste:
                            return null;
                        case x.topKeyPress:
                            return t.which && !a(t) ? String.fromCharCode(t.which) : null;
                        case x.topCompositionEnd:
                            return b ? null : t.data;
                        default:
                            return null
                    }
                }

                function p(e, t, n, r) {
                    var a;
                    if (a = T ? d(e, r) : c(e, r), !a) return null;
                    var o = g.getPooled(S.beforeInput, n, r);
                    return o.data = a, h.accumulateTwoPhaseDispatches(o), o
                }
                var m = e(15),
                    h = e(20),
                    f = e(21),
                    _ = e(22),
                    y = e(91),
                    g = e(95),
                    v = e(139),
                    M = [9, 13, 27, 32],
                    L = 229,
                    w = f.canUseDOM && "CompositionEvent" in window,
                    D = null;
                f.canUseDOM && "documentMode" in document && (D = document.documentMode);
                var T = f.canUseDOM && "TextEvent" in window && !D && !r(),
                    b = f.canUseDOM && (!w || D && D > 8 && 11 >= D),
                    Y = 32,
                    k = String.fromCharCode(Y),
                    x = m.topLevelTypes,
                    S = {
                        beforeInput: {
                            phasedRegistrationNames: {
                                bubbled: v({
                                    onBeforeInput: null
                                }),
                                captured: v({
                                    onBeforeInputCapture: null
                                })
                            },
                            dependencies: [x.topCompositionEnd, x.topKeyPress, x.topTextInput, x.topPaste]
                        },
                        compositionEnd: {
                            phasedRegistrationNames: {
                                bubbled: v({
                                    onCompositionEnd: null
                                }),
                                captured: v({
                                    onCompositionEndCapture: null
                                })
                            },
                            dependencies: [x.topBlur, x.topCompositionEnd, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
                        },
                        compositionStart: {
                            phasedRegistrationNames: {
                                bubbled: v({
                                    onCompositionStart: null
                                }),
                                captured: v({
                                    onCompositionStartCapture: null
                                })
                            },
                            dependencies: [x.topBlur, x.topCompositionStart, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
                        },
                        compositionUpdate: {
                            phasedRegistrationNames: {
                                bubbled: v({
                                    onCompositionUpdate: null
                                }),
                                captured: v({
                                    onCompositionUpdateCapture: null
                                })
                            },
                            dependencies: [x.topBlur, x.topCompositionUpdate, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
                        }
                    },
                    E = !1,
                    C = null,
                    P = {
                        eventTypes: S,
                        extractEvents: function(e, t, n, r) {
                            return [l(e, t, n, r), p(e, t, n, r)]
                        }
                    };
                t.exports = P
            }, {
                139: 139,
                15: 15,
                20: 20,
                21: 21,
                22: 22,
                91: 91,
                95: 95
            }],
            4: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    return e + t.charAt(0).toUpperCase() + t.substring(1)
                }
                var a = {
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        columnCount: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        strokeDashoffset: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    o = ["Webkit", "ms", "Moz", "O"];
                Object.keys(a).forEach(function(e) {
                    o.forEach(function(t) {
                        a[r(t, e)] = a[e]
                    })
                });
                var i = {
                        background: {
                            backgroundImage: !0,
                            backgroundPosition: !0,
                            backgroundRepeat: !0,
                            backgroundColor: !0
                        },
                        border: {
                            borderWidth: !0,
                            borderStyle: !0,
                            borderColor: !0
                        },
                        borderBottom: {
                            borderBottomWidth: !0,
                            borderBottomStyle: !0,
                            borderBottomColor: !0
                        },
                        borderLeft: {
                            borderLeftWidth: !0,
                            borderLeftStyle: !0,
                            borderLeftColor: !0
                        },
                        borderRight: {
                            borderRightWidth: !0,
                            borderRightStyle: !0,
                            borderRightColor: !0
                        },
                        borderTop: {
                            borderTopWidth: !0,
                            borderTopStyle: !0,
                            borderTopColor: !0
                        },
                        font: {
                            fontStyle: !0,
                            fontVariant: !0,
                            fontWeight: !0,
                            fontSize: !0,
                            lineHeight: !0,
                            fontFamily: !0
                        }
                    },
                    s = {
                        isUnitlessNumber: a,
                        shorthandPropertyExpansions: i
                    };
                t.exports = s
            }, {}],
            5: [function(e, t, n) {
                "use strict";
                var r = e(4),
                    a = e(21),
                    o = (e(106), e(111)),
                    i = e(131),
                    s = e(141),
                    u = (e(150), s(function(e) {
                        return i(e)
                    })),
                    l = "cssFloat";
                a.canUseDOM && void 0 === document.documentElement.style.cssFloat && (l = "styleFloat");
                var d = {
                    createMarkupForStyles: function(e) {
                        var t = "";
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var r = e[n];
                                null != r && (t += u(n) + ":", t += o(n, r) + ";")
                            }
                        return t || null
                    },
                    setValueForStyles: function(e, t) {
                        var n = e.style;
                        for (var a in t)
                            if (t.hasOwnProperty(a)) {
                                var i = o(a, t[a]);
                                if ("float" === a && (a = l), i) n[a] = i;
                                else {
                                    var s = r.shorthandPropertyExpansions[a];
                                    if (s)
                                        for (var u in s) n[u] = "";
                                    else n[a] = ""
                                }
                            }
                    }
                };
                t.exports = d
            }, {
                106: 106,
                111: 111,
                131: 131,
                141: 141,
                150: 150,
                21: 21,
                4: 4
            }],
            6: [function(e, t, n) {
                "use strict";

                function r() {
                    this._callbacks = null, this._contexts = null
                }
                var a = e(28),
                    o = e(27),
                    i = e(133);
                o(r.prototype, {
                    enqueue: function(e, t) {
                        this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e), this._contexts.push(t)
                    },
                    notifyAll: function() {
                        var e = this._callbacks,
                            t = this._contexts;
                        if (e) {
                            i(e.length === t.length), this._callbacks = null, this._contexts = null;
                            for (var n = 0, r = e.length; r > n; n++) e[n].call(t[n]);
                            e.length = 0, t.length = 0
                        }
                    },
                    reset: function() {
                        this._callbacks = null, this._contexts = null
                    },
                    destructor: function() {
                        this.reset()
                    }
                }), a.addPoolingTo(r), t.exports = r
            }, {
                133: 133,
                27: 27,
                28: 28
            }],
            7: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return "SELECT" === e.nodeName || "INPUT" === e.nodeName && "file" === e.type
                }

                function a(e) {
                    var t = D.getPooled(x.change, E, e);
                    M.accumulateTwoPhaseDispatches(t), w.batchedUpdates(o, t)
                }

                function o(e) {
                    v.enqueueEvents(e), v.processEventQueue()
                }

                function i(e, t) {
                    S = e, E = t, S.attachEvent("onchange", a)
                }

                function s() {
                    S && (S.detachEvent("onchange", a), S = null, E = null)
                }

                function u(e, t, n) {
                    return e === k.topChange ? n : void 0
                }

                function l(e, t, n) {
                    e === k.topFocus ? (s(), i(t, n)) : e === k.topBlur && s()
                }

                function d(e, t) {
                    S = e, E = t, C = e.value, P = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(S, "value", A), S.attachEvent("onpropertychange", p)
                }

                function c() {
                    S && (delete S.value, S.detachEvent("onpropertychange", p), S = null, E = null, C = null, P = null)
                }

                function p(e) {
                    if ("value" === e.propertyName) {
                        var t = e.srcElement.value;
                        t !== C && (C = t, a(e))
                    }
                }

                function m(e, t, n) {
                    return e === k.topInput ? n : void 0
                }

                function h(e, t, n) {
                    e === k.topFocus ? (c(), d(t, n)) : e === k.topBlur && c()
                }

                function f(e, t, n) {
                    return e !== k.topSelectionChange && e !== k.topKeyUp && e !== k.topKeyDown || !S || S.value === C ? void 0 : (C = S.value, E)
                }

                function _(e) {
                    return "INPUT" === e.nodeName && ("checkbox" === e.type || "radio" === e.type)
                }

                function y(e, t, n) {
                    return e === k.topClick ? n : void 0
                }
                var g = e(15),
                    v = e(17),
                    M = e(20),
                    L = e(21),
                    w = e(85),
                    D = e(93),
                    T = e(134),
                    b = e(136),
                    Y = e(139),
                    k = g.topLevelTypes,
                    x = {
                        change: {
                            phasedRegistrationNames: {
                                bubbled: Y({
                                    onChange: null
                                }),
                                captured: Y({
                                    onChangeCapture: null
                                })
                            },
                            dependencies: [k.topBlur, k.topChange, k.topClick, k.topFocus, k.topInput, k.topKeyDown, k.topKeyUp, k.topSelectionChange]
                        }
                    },
                    S = null,
                    E = null,
                    C = null,
                    P = null,
                    H = !1;
                L.canUseDOM && (H = T("change") && (!("documentMode" in document) || document.documentMode > 8));
                var N = !1;
                L.canUseDOM && (N = T("input") && (!("documentMode" in document) || document.documentMode > 9));
                var A = {
                        get: function() {
                            return P.get.call(this)
                        },
                        set: function(e) {
                            C = "" + e, P.set.call(this, e)
                        }
                    },
                    I = {
                        eventTypes: x,
                        extractEvents: function(e, t, n, a) {
                            var o, i;
                            if (r(t) ? H ? o = u : i = l : b(t) ? N ? o = m : (o = f, i = h) : _(t) && (o = y), o) {
                                var s = o(e, t, n);
                                if (s) {
                                    var d = D.getPooled(x.change, s, a);
                                    return M.accumulateTwoPhaseDispatches(d), d
                                }
                            }
                            i && i(e, t, n)
                        }
                    };
                t.exports = I
            }, {
                134: 134,
                136: 136,
                139: 139,
                15: 15,
                17: 17,
                20: 20,
                21: 21,
                85: 85,
                93: 93
            }],
            8: [function(e, t, n) {
                "use strict";
                var r = 0,
                    a = {
                        createReactRootIndex: function() {
                            return r++
                        }
                    };
                t.exports = a
            }, {}],
            9: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    e.insertBefore(t, e.childNodes[n] || null)
                }
                var a = e(12),
                    o = e(70),
                    i = e(145),
                    s = e(133),
                    u = {
                        dangerouslyReplaceNodeWithMarkup: a.dangerouslyReplaceNodeWithMarkup,
                        updateTextContent: i,
                        processUpdates: function(e, t) {
                            for (var n, u = null, l = null, d = 0; d < e.length; d++)
                                if (n = e[d], n.type === o.MOVE_EXISTING || n.type === o.REMOVE_NODE) {
                                    var c = n.fromIndex,
                                        p = n.parentNode.childNodes[c],
                                        m = n.parentID;
                                    s(p), u = u || {}, u[m] = u[m] || [], u[m][c] = p, l = l || [], l.push(p)
                                }
                            var h = a.dangerouslyRenderMarkup(t);
                            if (l)
                                for (var f = 0; f < l.length; f++) l[f].parentNode.removeChild(l[f]);
                            for (var _ = 0; _ < e.length; _++) switch (n = e[_], n.type) {
                                case o.INSERT_MARKUP:
                                    r(n.parentNode, h[n.markupIndex], n.toIndex);
                                    break;
                                case o.MOVE_EXISTING:
                                    r(n.parentNode, u[n.parentID][n.fromIndex], n.toIndex);
                                    break;
                                case o.TEXT_CONTENT:
                                    i(n.parentNode, n.textContent);
                                    break;
                                case o.REMOVE_NODE:
                            }
                        }
                    };
                t.exports = u
            }, {
                12: 12,
                133: 133,
                145: 145,
                70: 70
            }],
            10: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    return (e & t) === t
                }
                var a = e(133),
                    o = {
                        MUST_USE_ATTRIBUTE: 1,
                        MUST_USE_PROPERTY: 2,
                        HAS_SIDE_EFFECTS: 4,
                        HAS_BOOLEAN_VALUE: 8,
                        HAS_NUMERIC_VALUE: 16,
                        HAS_POSITIVE_NUMERIC_VALUE: 48,
                        HAS_OVERLOADED_BOOLEAN_VALUE: 64,
                        injectDOMPropertyConfig: function(e) {
                            var t = e.Properties || {},
                                n = e.DOMAttributeNames || {},
                                i = e.DOMPropertyNames || {},
                                u = e.DOMMutationMethods || {};
                            e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
                            for (var l in t) {
                                a(!s.isStandardName.hasOwnProperty(l)), s.isStandardName[l] = !0;
                                var d = l.toLowerCase();
                                if (s.getPossibleStandardName[d] = l, n.hasOwnProperty(l)) {
                                    var c = n[l];
                                    s.getPossibleStandardName[c] = l, s.getAttributeName[l] = c
                                } else s.getAttributeName[l] = d;
                                s.getPropertyName[l] = i.hasOwnProperty(l) ? i[l] : l, u.hasOwnProperty(l) ? s.getMutationMethod[l] = u[l] : s.getMutationMethod[l] = null;
                                var p = t[l];
                                s.mustUseAttribute[l] = r(p, o.MUST_USE_ATTRIBUTE), s.mustUseProperty[l] = r(p, o.MUST_USE_PROPERTY), s.hasSideEffects[l] = r(p, o.HAS_SIDE_EFFECTS), s.hasBooleanValue[l] = r(p, o.HAS_BOOLEAN_VALUE), s.hasNumericValue[l] = r(p, o.HAS_NUMERIC_VALUE), s.hasPositiveNumericValue[l] = r(p, o.HAS_POSITIVE_NUMERIC_VALUE), s.hasOverloadedBooleanValue[l] = r(p, o.HAS_OVERLOADED_BOOLEAN_VALUE), a(!s.mustUseAttribute[l] || !s.mustUseProperty[l]), a(s.mustUseProperty[l] || !s.hasSideEffects[l]), a(!!s.hasBooleanValue[l] + !!s.hasNumericValue[l] + !!s.hasOverloadedBooleanValue[l] <= 1)
                            }
                        }
                    },
                    i = {},
                    s = {
                        ID_ATTRIBUTE_NAME: "data-reactid",
                        isStandardName: {},
                        getPossibleStandardName: {},
                        getAttributeName: {},
                        getPropertyName: {},
                        getMutationMethod: {},
                        mustUseAttribute: {},
                        mustUseProperty: {},
                        hasSideEffects: {},
                        hasBooleanValue: {},
                        hasNumericValue: {},
                        hasPositiveNumericValue: {},
                        hasOverloadedBooleanValue: {},
                        _isCustomAttributeFunctions: [],
                        isCustomAttribute: function(e) {
                            for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                                var n = s._isCustomAttributeFunctions[t];
                                if (n(e)) return !0
                            }
                            return !1
                        },
                        getDefaultValueForProperty: function(e, t) {
                            var n, r = i[e];
                            return r || (i[e] = r = {}), t in r || (n = document.createElement(e), r[t] = n[t]), r[t]
                        },
                        injection: o
                    };
                t.exports = s
            }, {
                133: 133
            }],
            11: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    return null == t || a.hasBooleanValue[e] && !t || a.hasNumericValue[e] && isNaN(t) || a.hasPositiveNumericValue[e] && 1 > t || a.hasOverloadedBooleanValue[e] && t === !1
                }
                var a = e(10),
                    o = e(143),
                    i = (e(150), {
                        createMarkupForID: function(e) {
                            return a.ID_ATTRIBUTE_NAME + "=" + o(e)
                        },
                        createMarkupForProperty: function(e, t) {
                            if (a.isStandardName.hasOwnProperty(e) && a.isStandardName[e]) {
                                if (r(e, t)) return "";
                                var n = a.getAttributeName[e];
                                return a.hasBooleanValue[e] || a.hasOverloadedBooleanValue[e] && t === !0 ? n : n + "=" + o(t)
                            }
                            return a.isCustomAttribute(e) ? null == t ? "" : e + "=" + o(t) : null
                        },
                        setValueForProperty: function(e, t, n) {
                            if (a.isStandardName.hasOwnProperty(t) && a.isStandardName[t]) {
                                var o = a.getMutationMethod[t];
                                if (o) o(e, n);
                                else if (r(t, n)) this.deleteValueForProperty(e, t);
                                else if (a.mustUseAttribute[t]) e.setAttribute(a.getAttributeName[t], "" + n);
                                else {
                                    var i = a.getPropertyName[t];
                                    a.hasSideEffects[t] && "" + e[i] == "" + n || (e[i] = n)
                                }
                            } else a.isCustomAttribute(t) && (null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n));
                        },
                        deleteValueForProperty: function(e, t) {
                            if (a.isStandardName.hasOwnProperty(t) && a.isStandardName[t]) {
                                var n = a.getMutationMethod[t];
                                if (n) n(e, void 0);
                                else if (a.mustUseAttribute[t]) e.removeAttribute(a.getAttributeName[t]);
                                else {
                                    var r = a.getPropertyName[t],
                                        o = a.getDefaultValueForProperty(e.nodeName, r);
                                    a.hasSideEffects[t] && "" + e[r] === o || (e[r] = o)
                                }
                            } else a.isCustomAttribute(t) && e.removeAttribute(t)
                        }
                    });
                t.exports = i
            }, {
                10: 10,
                143: 143,
                150: 150
            }],
            12: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return e.substring(1, e.indexOf(" "))
                }
                var a = e(21),
                    o = e(110),
                    i = e(112),
                    s = e(125),
                    u = e(133),
                    l = /^(<[^ \/>]+)/,
                    d = "data-danger-index",
                    c = {
                        dangerouslyRenderMarkup: function(e) {
                            u(a.canUseDOM);
                            for (var t, n = {}, c = 0; c < e.length; c++) u(e[c]), t = r(e[c]), t = s(t) ? t : "*", n[t] = n[t] || [], n[t][c] = e[c];
                            var p = [],
                                m = 0;
                            for (t in n)
                                if (n.hasOwnProperty(t)) {
                                    var h, f = n[t];
                                    for (h in f)
                                        if (f.hasOwnProperty(h)) {
                                            var _ = f[h];
                                            f[h] = _.replace(l, "$1 " + d + '="' + h + '" ')
                                        }
                                    for (var y = o(f.join(""), i), g = 0; g < y.length; ++g) {
                                        var v = y[g];
                                        v.hasAttribute && v.hasAttribute(d) && (h = +v.getAttribute(d), v.removeAttribute(d), u(!p.hasOwnProperty(h)), p[h] = v, m += 1)
                                    }
                                }
                            return u(m === p.length), u(p.length === e.length), p
                        },
                        dangerouslyReplaceNodeWithMarkup: function(e, t) {
                            u(a.canUseDOM), u(t), u("html" !== e.tagName.toLowerCase());
                            var n = o(t, i)[0];
                            e.parentNode.replaceChild(n, e)
                        }
                    };
                t.exports = c
            }, {
                110: 110,
                112: 112,
                125: 125,
                133: 133,
                21: 21
            }],
            13: [function(e, t, n) {
                "use strict";
                var r = e(139),
                    a = [r({
                        ResponderEventPlugin: null
                    }), r({
                        SimpleEventPlugin: null
                    }), r({
                        TapEventPlugin: null
                    }), r({
                        EnterLeaveEventPlugin: null
                    }), r({
                        ChangeEventPlugin: null
                    }), r({
                        SelectEventPlugin: null
                    }), r({
                        BeforeInputEventPlugin: null
                    }), r({
                        AnalyticsEventPlugin: null
                    }), r({
                        MobileSafariClickEventPlugin: null
                    })];
                t.exports = a
            }, {
                139: 139
            }],
            14: [function(e, t, n) {
                "use strict";
                var r = e(15),
                    a = e(20),
                    o = e(97),
                    i = e(68),
                    s = e(139),
                    u = r.topLevelTypes,
                    l = i.getFirstReactDOM,
                    d = {
                        mouseEnter: {
                            registrationName: s({
                                onMouseEnter: null
                            }),
                            dependencies: [u.topMouseOut, u.topMouseOver]
                        },
                        mouseLeave: {
                            registrationName: s({
                                onMouseLeave: null
                            }),
                            dependencies: [u.topMouseOut, u.topMouseOver]
                        }
                    },
                    c = [null, null],
                    p = {
                        eventTypes: d,
                        extractEvents: function(e, t, n, r) {
                            if (e === u.topMouseOver && (r.relatedTarget || r.fromElement)) return null;
                            if (e !== u.topMouseOut && e !== u.topMouseOver) return null;
                            var s;
                            if (t.window === t) s = t;
                            else {
                                var p = t.ownerDocument;
                                s = p ? p.defaultView || p.parentWindow : window
                            }
                            var m, h;
                            if (e === u.topMouseOut ? (m = t, h = l(r.relatedTarget || r.toElement) || s) : (m = s, h = t), m === h) return null;
                            var f = m ? i.getID(m) : "",
                                _ = h ? i.getID(h) : "",
                                y = o.getPooled(d.mouseLeave, f, r);
                            y.type = "mouseleave", y.target = m, y.relatedTarget = h;
                            var g = o.getPooled(d.mouseEnter, _, r);
                            return g.type = "mouseenter", g.target = h, g.relatedTarget = m, a.accumulateEnterLeaveDispatches(y, g, f, _), c[0] = y, c[1] = g, c
                        }
                    };
                t.exports = p
            }, {
                139: 139,
                15: 15,
                20: 20,
                68: 68,
                97: 97
            }],
            15: [function(e, t, n) {
                "use strict";
                var r = e(138),
                    a = r({
                        bubbled: null,
                        captured: null
                    }),
                    o = r({
                        topBlur: null,
                        topChange: null,
                        topClick: null,
                        topCompositionEnd: null,
                        topCompositionStart: null,
                        topCompositionUpdate: null,
                        topContextMenu: null,
                        topCopy: null,
                        topCut: null,
                        topDoubleClick: null,
                        topDrag: null,
                        topDragEnd: null,
                        topDragEnter: null,
                        topDragExit: null,
                        topDragLeave: null,
                        topDragOver: null,
                        topDragStart: null,
                        topDrop: null,
                        topError: null,
                        topFocus: null,
                        topInput: null,
                        topKeyDown: null,
                        topKeyPress: null,
                        topKeyUp: null,
                        topLoad: null,
                        topMouseDown: null,
                        topMouseMove: null,
                        topMouseOut: null,
                        topMouseOver: null,
                        topMouseUp: null,
                        topPaste: null,
                        topReset: null,
                        topScroll: null,
                        topSelectionChange: null,
                        topSubmit: null,
                        topTextInput: null,
                        topTouchCancel: null,
                        topTouchEnd: null,
                        topTouchMove: null,
                        topTouchStart: null,
                        topWheel: null
                    }),
                    i = {
                        topLevelTypes: o,
                        PropagationPhases: a
                    };
                t.exports = i
            }, {
                138: 138
            }],
            16: [function(e, t, n) {
                var r = e(112),
                    a = {
                        listen: function(e, t, n) {
                            return e.addEventListener ? (e.addEventListener(t, n, !1), {
                                remove: function() {
                                    e.removeEventListener(t, n, !1)
                                }
                            }) : e.attachEvent ? (e.attachEvent("on" + t, n), {
                                remove: function() {
                                    e.detachEvent("on" + t, n)
                                }
                            }) : void 0
                        },
                        capture: function(e, t, n) {
                            return e.addEventListener ? (e.addEventListener(t, n, !0), {
                                remove: function() {
                                    e.removeEventListener(t, n, !0)
                                }
                            }) : {
                                remove: r
                            }
                        },
                        registerDefault: function() {}
                    };
                t.exports = a
            }, {
                112: 112
            }],
            17: [function(e, t, n) {
                "use strict";
                var r = e(18),
                    a = e(19),
                    o = e(103),
                    i = e(118),
                    s = e(133),
                    u = {},
                    l = null,
                    d = function(e) {
                        if (e) {
                            var t = a.executeDispatch,
                                n = r.getPluginModuleForEvent(e);
                            n && n.executeDispatch && (t = n.executeDispatch), a.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e)
                        }
                    },
                    c = null,
                    p = {
                        injection: {
                            injectMount: a.injection.injectMount,
                            injectInstanceHandle: function(e) {
                                c = e
                            },
                            getInstanceHandle: function() {
                                return c
                            },
                            injectEventPluginOrder: r.injectEventPluginOrder,
                            injectEventPluginsByName: r.injectEventPluginsByName
                        },
                        eventNameDispatchConfigs: r.eventNameDispatchConfigs,
                        registrationNameModules: r.registrationNameModules,
                        putListener: function(e, t, n) {
                            s(!n || "function" == typeof n);
                            var r = u[t] || (u[t] = {});
                            r[e] = n
                        },
                        getListener: function(e, t) {
                            var n = u[t];
                            return n && n[e]
                        },
                        deleteListener: function(e, t) {
                            var n = u[t];
                            n && delete n[e]
                        },
                        deleteAllListeners: function(e) {
                            for (var t in u) delete u[t][e]
                        },
                        extractEvents: function(e, t, n, a) {
                            for (var i, s = r.plugins, u = 0, l = s.length; l > u; u++) {
                                var d = s[u];
                                if (d) {
                                    var c = d.extractEvents(e, t, n, a);
                                    c && (i = o(i, c))
                                }
                            }
                            return i
                        },
                        enqueueEvents: function(e) {
                            e && (l = o(l, e))
                        },
                        processEventQueue: function() {
                            var e = l;
                            l = null, i(e, d), s(!l)
                        },
                        __purge: function() {
                            u = {}
                        },
                        __getListenerBank: function() {
                            return u
                        }
                    };
                t.exports = p
            }, {
                103: 103,
                118: 118,
                133: 133,
                18: 18,
                19: 19
            }],
            18: [function(e, t, n) {
                "use strict";

                function r() {
                    if (s)
                        for (var e in u) {
                            var t = u[e],
                                n = s.indexOf(e);
                            if (i(n > -1), !l.plugins[n]) {
                                i(t.extractEvents), l.plugins[n] = t;
                                var r = t.eventTypes;
                                for (var o in r) i(a(r[o], t, o))
                            }
                        }
                }

                function a(e, t, n) {
                    i(!l.eventNameDispatchConfigs.hasOwnProperty(n)), l.eventNameDispatchConfigs[n] = e;
                    var r = e.phasedRegistrationNames;
                    if (r) {
                        for (var a in r)
                            if (r.hasOwnProperty(a)) {
                                var s = r[a];
                                o(s, t, n)
                            }
                        return !0
                    }
                    return e.registrationName ? (o(e.registrationName, t, n), !0) : !1
                }

                function o(e, t, n) {
                    i(!l.registrationNameModules[e]), l.registrationNameModules[e] = t, l.registrationNameDependencies[e] = t.eventTypes[n].dependencies
                }
                var i = e(133),
                    s = null,
                    u = {},
                    l = {
                        plugins: [],
                        eventNameDispatchConfigs: {},
                        registrationNameModules: {},
                        registrationNameDependencies: {},
                        injectEventPluginOrder: function(e) {
                            i(!s), s = Array.prototype.slice.call(e), r()
                        },
                        injectEventPluginsByName: function(e) {
                            var t = !1;
                            for (var n in e)
                                if (e.hasOwnProperty(n)) {
                                    var a = e[n];
                                    u.hasOwnProperty(n) && u[n] === a || (i(!u[n]), u[n] = a, t = !0)
                                }
                            t && r()
                        },
                        getPluginModuleForEvent: function(e) {
                            var t = e.dispatchConfig;
                            if (t.registrationName) return l.registrationNameModules[t.registrationName] || null;
                            for (var n in t.phasedRegistrationNames)
                                if (t.phasedRegistrationNames.hasOwnProperty(n)) {
                                    var r = l.registrationNameModules[t.phasedRegistrationNames[n]];
                                    if (r) return r
                                }
                            return null
                        },
                        _resetEventPlugins: function() {
                            s = null;
                            for (var e in u) u.hasOwnProperty(e) && delete u[e];
                            l.plugins.length = 0;
                            var t = l.eventNameDispatchConfigs;
                            for (var n in t) t.hasOwnProperty(n) && delete t[n];
                            var r = l.registrationNameModules;
                            for (var a in r) r.hasOwnProperty(a) && delete r[a]
                        }
                    };
                t.exports = l
            }, {
                133: 133
            }],
            19: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return e === _.topMouseUp || e === _.topTouchEnd || e === _.topTouchCancel
                }

                function a(e) {
                    return e === _.topMouseMove || e === _.topTouchMove
                }

                function o(e) {
                    return e === _.topMouseDown || e === _.topTouchStart
                }

                function i(e, t) {
                    var n = e._dispatchListeners,
                        r = e._dispatchIDs;
                    if (Array.isArray(n))
                        for (var a = 0; a < n.length && !e.isPropagationStopped(); a++) t(e, n[a], r[a]);
                    else n && t(e, n, r)
                }

                function s(e, t, n) {
                    e.currentTarget = f.Mount.getNode(n);
                    var r = t(e, n);
                    return e.currentTarget = null, r
                }

                function u(e, t) {
                    i(e, t), e._dispatchListeners = null, e._dispatchIDs = null
                }

                function l(e) {
                    var t = e._dispatchListeners,
                        n = e._dispatchIDs;
                    if (Array.isArray(t)) {
                        for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                            if (t[r](e, n[r])) return n[r]
                    } else if (t && t(e, n)) return n;
                    return null
                }

                function d(e) {
                    var t = l(e);
                    return e._dispatchIDs = null, e._dispatchListeners = null, t
                }

                function c(e) {
                    var t = e._dispatchListeners,
                        n = e._dispatchIDs;
                    h(!Array.isArray(t));
                    var r = t ? t(e, n) : null;
                    return e._dispatchListeners = null, e._dispatchIDs = null, r
                }

                function p(e) {
                    return !!e._dispatchListeners
                }
                var m = e(15),
                    h = e(133),
                    f = {
                        Mount: null,
                        injectMount: function(e) {
                            f.Mount = e
                        }
                    },
                    _ = m.topLevelTypes,
                    y = {
                        isEndish: r,
                        isMoveish: a,
                        isStartish: o,
                        executeDirectDispatch: c,
                        executeDispatch: s,
                        executeDispatchesInOrder: u,
                        executeDispatchesInOrderStopAtTrue: d,
                        hasDispatches: p,
                        injection: f,
                        useTouchEvents: !1
                    };
                t.exports = y
            }, {
                133: 133,
                15: 15
            }],
            20: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    var r = t.dispatchConfig.phasedRegistrationNames[n];
                    return _(e, r)
                }

                function a(e, t, n) {
                    var a = t ? f.bubbled : f.captured,
                        o = r(e, n, a);
                    o && (n._dispatchListeners = m(n._dispatchListeners, o), n._dispatchIDs = m(n._dispatchIDs, e))
                }

                function o(e) {
                    e && e.dispatchConfig.phasedRegistrationNames && p.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker, a, e)
                }

                function i(e, t, n) {
                    if (n && n.dispatchConfig.registrationName) {
                        var r = n.dispatchConfig.registrationName,
                            a = _(e, r);
                        a && (n._dispatchListeners = m(n._dispatchListeners, a), n._dispatchIDs = m(n._dispatchIDs, e))
                    }
                }

                function s(e) {
                    e && e.dispatchConfig.registrationName && i(e.dispatchMarker, null, e)
                }

                function u(e) {
                    h(e, o)
                }

                function l(e, t, n, r) {
                    p.injection.getInstanceHandle().traverseEnterLeave(n, r, i, e, t)
                }

                function d(e) {
                    h(e, s)
                }
                var c = e(15),
                    p = e(17),
                    m = e(103),
                    h = e(118),
                    f = c.PropagationPhases,
                    _ = p.getListener,
                    y = {
                        accumulateTwoPhaseDispatches: u,
                        accumulateDirectDispatches: d,
                        accumulateEnterLeaveDispatches: l
                    };
                t.exports = y
            }, {
                103: 103,
                118: 118,
                15: 15,
                17: 17
            }],
            21: [function(e, t, n) {
                "use strict";
                var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
                    a = {
                        canUseDOM: r,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: r && !!window.screen,
                        isInWorker: !r
                    };
                t.exports = a
            }, {}],
            22: [function(e, t, n) {
                "use strict";

                function r(e) {
                    this._root = e, this._startText = this.getText(), this._fallbackText = null
                }
                var a = e(28),
                    o = e(27),
                    i = e(128);
                o(r.prototype, {
                    getText: function() {
                        return "value" in this._root ? this._root.value : this._root[i()]
                    },
                    getData: function() {
                        if (this._fallbackText) return this._fallbackText;
                        var e, t, n = this._startText,
                            r = n.length,
                            a = this.getText(),
                            o = a.length;
                        for (e = 0; r > e && n[e] === a[e]; e++);
                        var i = r - e;
                        for (t = 1; i >= t && n[r - t] === a[o - t]; t++);
                        var s = t > 1 ? 1 - t : void 0;
                        return this._fallbackText = a.slice(e, s), this._fallbackText
                    }
                }), a.addPoolingTo(r), t.exports = r
            }, {
                128: 128,
                27: 27,
                28: 28
            }],
            23: [function(e, t, n) {
                "use strict";
                var r, a = e(10),
                    o = e(21),
                    i = a.injection.MUST_USE_ATTRIBUTE,
                    s = a.injection.MUST_USE_PROPERTY,
                    u = a.injection.HAS_BOOLEAN_VALUE,
                    l = a.injection.HAS_SIDE_EFFECTS,
                    d = a.injection.HAS_NUMERIC_VALUE,
                    c = a.injection.HAS_POSITIVE_NUMERIC_VALUE,
                    p = a.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
                if (o.canUseDOM) {
                    var m = document.implementation;
                    r = m && m.hasFeature && m.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
                }
                var h = {
                    isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
                    Properties: {
                        accept: null,
                        acceptCharset: null,
                        accessKey: null,
                        action: null,
                        allowFullScreen: i | u,
                        allowTransparency: i,
                        alt: null,
                        async: u,
                        autoComplete: null,
                        autoPlay: u,
                        cellPadding: null,
                        cellSpacing: null,
                        charSet: i,
                        checked: s | u,
                        classID: i,
                        className: r ? i : s,
                        cols: i | c,
                        colSpan: null,
                        content: null,
                        contentEditable: null,
                        contextMenu: i,
                        controls: s | u,
                        coords: null,
                        crossOrigin: null,
                        data: null,
                        dateTime: i,
                        defer: u,
                        dir: null,
                        disabled: i | u,
                        download: p,
                        draggable: null,
                        encType: null,
                        form: i,
                        formAction: i,
                        formEncType: i,
                        formMethod: i,
                        formNoValidate: u,
                        formTarget: i,
                        frameBorder: i,
                        headers: null,
                        height: i,
                        hidden: i | u,
                        high: null,
                        href: null,
                        hrefLang: null,
                        htmlFor: null,
                        httpEquiv: null,
                        icon: null,
                        id: s,
                        label: null,
                        lang: null,
                        list: i,
                        loop: s | u,
                        low: null,
                        manifest: i,
                        marginHeight: null,
                        marginWidth: null,
                        max: null,
                        maxLength: i,
                        media: i,
                        mediaGroup: null,
                        method: null,
                        min: null,
                        multiple: s | u,
                        muted: s | u,
                        name: null,
                        noValidate: u,
                        open: u,
                        optimum: null,
                        pattern: null,
                        placeholder: null,
                        poster: null,
                        preload: null,
                        radioGroup: null,
                        readOnly: s | u,
                        rel: null,
                        required: u,
                        role: i,
                        rows: i | c,
                        rowSpan: null,
                        sandbox: null,
                        scope: null,
                        scoped: u,
                        scrolling: null,
                        seamless: i | u,
                        selected: s | u,
                        shape: null,
                        size: i | c,
                        sizes: i,
                        span: c,
                        spellCheck: null,
                        src: null,
                        srcDoc: s,
                        srcSet: i,
                        start: d,
                        step: null,
                        style: null,
                        tabIndex: null,
                        target: null,
                        title: null,
                        type: null,
                        useMap: null,
                        value: s | l,
                        width: i,
                        wmode: i,
                        autoCapitalize: null,
                        autoCorrect: null,
                        itemProp: i,
                        itemScope: i | u,
                        itemType: i,
                        itemID: i,
                        itemRef: i,
                        property: null,
                        unselectable: i
                    },
                    DOMAttributeNames: {
                        acceptCharset: "accept-charset",
                        className: "class",
                        htmlFor: "for",
                        httpEquiv: "http-equiv"
                    },
                    DOMPropertyNames: {
                        autoCapitalize: "autocapitalize",
                        autoComplete: "autocomplete",
                        autoCorrect: "autocorrect",
                        autoFocus: "autofocus",
                        autoPlay: "autoplay",
                        encType: "encoding",
                        hrefLang: "hreflang",
                        radioGroup: "radiogroup",
                        spellCheck: "spellcheck",
                        srcDoc: "srcdoc",
                        srcSet: "srcset"
                    }
                };
                t.exports = h
            }, {
                10: 10,
                21: 21
            }],
            24: [function(e, t, n) {
                "use strict";

                function r(e) {
                    l(null == e.props.checkedLink || null == e.props.valueLink)
                }

                function a(e) {
                    r(e), l(null == e.props.value && null == e.props.onChange)
                }

                function o(e) {
                    r(e), l(null == e.props.checked && null == e.props.onChange)
                }

                function i(e) {
                    this.props.valueLink.requestChange(e.target.value)
                }

                function s(e) {
                    this.props.checkedLink.requestChange(e.target.checked)
                }
                var u = e(76),
                    l = e(133),
                    d = {
                        button: !0,
                        checkbox: !0,
                        image: !0,
                        hidden: !0,
                        radio: !0,
                        reset: !0,
                        submit: !0
                    },
                    c = {
                        Mixin: {
                            propTypes: {
                                value: function(e, t, n) {
                                    return !e[t] || d[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
                                },
                                checked: function(e, t, n) {
                                    return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
                                },
                                onChange: u.func
                            }
                        },
                        getValue: function(e) {
                            return e.props.valueLink ? (a(e), e.props.valueLink.value) : e.props.value
                        },
                        getChecked: function(e) {
                            return e.props.checkedLink ? (o(e), e.props.checkedLink.value) : e.props.checked
                        },
                        getOnChange: function(e) {
                            return e.props.valueLink ? (a(e), i) : e.props.checkedLink ? (o(e), s) : e.props.onChange
                        }
                    };
                t.exports = c
            }, {
                133: 133,
                76: 76
            }],
            25: [function(e, t, n) {
                "use strict";

                function r(e) {
                    e.remove()
                }
                var a = e(30),
                    o = e(103),
                    i = e(118),
                    s = e(133),
                    u = {
                        trapBubbledEvent: function(e, t) {
                            s(this.isMounted());
                            var n = this.getDOMNode();
                            s(n);
                            var r = a.trapBubbledEvent(e, t, n);
                            this._localEventListeners = o(this._localEventListeners, r)
                        },
                        componentWillUnmount: function() {
                            this._localEventListeners && i(this._localEventListeners, r)
                        }
                    };
                t.exports = u
            }, {
                103: 103,
                118: 118,
                133: 133,
                30: 30
            }],
            26: [function(e, t, n) {
                "use strict";
                var r = e(15),
                    a = e(112),
                    o = r.topLevelTypes,
                    i = {
                        eventTypes: null,
                        extractEvents: function(e, t, n, r) {
                            if (e === o.topTouchStart) {
                                var i = r.target;
                                i && !i.onclick && (i.onclick = a)
                            }
                        }
                    };
                t.exports = i
            }, {
                112: 112,
                15: 15
            }],
            27: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (null == e) throw new TypeError("Object.assign target cannot be null or undefined");
                    for (var n = Object(e), r = Object.prototype.hasOwnProperty, a = 1; a < arguments.length; a++) {
                        var o = arguments[a];
                        if (null != o) {
                            var i = Object(o);
                            for (var s in i) r.call(i, s) && (n[s] = i[s])
                        }
                    }
                    return n
                }
                t.exports = r
            }, {}],
            28: [function(e, t, n) {
                "use strict";
                var r = e(133),
                    a = function(e) {
                        var t = this;
                        if (t.instancePool.length) {
                            var n = t.instancePool.pop();
                            return t.call(n, e), n
                        }
                        return new t(e)
                    },
                    o = function(e, t) {
                        var n = this;
                        if (n.instancePool.length) {
                            var r = n.instancePool.pop();
                            return n.call(r, e, t), r
                        }
                        return new n(e, t)
                    },
                    i = function(e, t, n) {
                        var r = this;
                        if (r.instancePool.length) {
                            var a = r.instancePool.pop();
                            return r.call(a, e, t, n), a
                        }
                        return new r(e, t, n)
                    },
                    s = function(e, t, n, r, a) {
                        var o = this;
                        if (o.instancePool.length) {
                            var i = o.instancePool.pop();
                            return o.call(i, e, t, n, r, a), i
                        }
                        return new o(e, t, n, r, a)
                    },
                    u = function(e) {
                        var t = this;
                        r(e instanceof t), e.destructor && e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
                    },
                    l = 10,
                    d = a,
                    c = function(e, t) {
                        var n = e;
                        return n.instancePool = [], n.getPooled = t || d, n.poolSize || (n.poolSize = l), n.release = u, n
                    },
                    p = {
                        addPoolingTo: c,
                        oneArgumentPooler: a,
                        twoArgumentPooler: o,
                        threeArgumentPooler: i,
                        fiveArgumentPooler: s
                    };
                t.exports = p
            }, {
                133: 133
            }],
            29: [function(e, t, n) {
                "use strict";
                var r = e(115),
                    a = {
                        getDOMNode: function() {
                            return r(this)
                        }
                    };
                t.exports = a
            }, {
                115: 115
            }],
            30: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return Object.prototype.hasOwnProperty.call(e, f) || (e[f] = m++, c[e[f]] = {}), c[e[f]]
                }
                var a = e(15),
                    o = e(17),
                    i = e(18),
                    s = e(59),
                    u = e(102),
                    l = e(27),
                    d = e(134),
                    c = {},
                    p = !1,
                    m = 0,
                    h = {
                        topBlur: "blur",
                        topChange: "change",
                        topClick: "click",
                        topCompositionEnd: "compositionend",
                        topCompositionStart: "compositionstart",
                        topCompositionUpdate: "compositionupdate",
                        topContextMenu: "contextmenu",
                        topCopy: "copy",
                        topCut: "cut",
                        topDoubleClick: "dblclick",
                        topDrag: "drag",
                        topDragEnd: "dragend",
                        topDragEnter: "dragenter",
                        topDragExit: "dragexit",
                        topDragLeave: "dragleave",
                        topDragOver: "dragover",
                        topDragStart: "dragstart",
                        topDrop: "drop",
                        topFocus: "focus",
                        topInput: "input",
                        topKeyDown: "keydown",
                        topKeyPress: "keypress",
                        topKeyUp: "keyup",
                        topMouseDown: "mousedown",
                        topMouseMove: "mousemove",
                        topMouseOut: "mouseout",
                        topMouseOver: "mouseover",
                        topMouseUp: "mouseup",
                        topPaste: "paste",
                        topScroll: "scroll",
                        topSelectionChange: "selectionchange",
                        topTextInput: "textInput",
                        topTouchCancel: "touchcancel",
                        topTouchEnd: "touchend",
                        topTouchMove: "touchmove",
                        topTouchStart: "touchstart",
                        topWheel: "wheel"
                    },
                    f = "_reactListenersID" + String(Math.random()).slice(2),
                    _ = l({}, s, {
                        ReactEventListener: null,
                        injection: {
                            injectReactEventListener: function(e) {
                                e.setHandleTopLevel(_.handleTopLevel), _.ReactEventListener = e
                            }
                        },
                        setEnabled: function(e) {
                            _.ReactEventListener && _.ReactEventListener.setEnabled(e)
                        },
                        isEnabled: function() {
                            return !(!_.ReactEventListener || !_.ReactEventListener.isEnabled())
                        },
                        listenTo: function(e, t) {
                            for (var n = t, o = r(n), s = i.registrationNameDependencies[e], u = a.topLevelTypes, l = 0, c = s.length; c > l; l++) {
                                var p = s[l];
                                o.hasOwnProperty(p) && o[p] || (p === u.topWheel ? d("wheel") ? _.ReactEventListener.trapBubbledEvent(u.topWheel, "wheel", n) : d("mousewheel") ? _.ReactEventListener.trapBubbledEvent(u.topWheel, "mousewheel", n) : _.ReactEventListener.trapBubbledEvent(u.topWheel, "DOMMouseScroll", n) : p === u.topScroll ? d("scroll", !0) ? _.ReactEventListener.trapCapturedEvent(u.topScroll, "scroll", n) : _.ReactEventListener.trapBubbledEvent(u.topScroll, "scroll", _.ReactEventListener.WINDOW_HANDLE) : p === u.topFocus || p === u.topBlur ? (d("focus", !0) ? (_.ReactEventListener.trapCapturedEvent(u.topFocus, "focus", n), _.ReactEventListener.trapCapturedEvent(u.topBlur, "blur", n)) : d("focusin") && (_.ReactEventListener.trapBubbledEvent(u.topFocus, "focusin", n), _.ReactEventListener.trapBubbledEvent(u.topBlur, "focusout", n)), o[u.topBlur] = !0, o[u.topFocus] = !0) : h.hasOwnProperty(p) && _.ReactEventListener.trapBubbledEvent(p, h[p], n), o[p] = !0)
                            }
                        },
                        trapBubbledEvent: function(e, t, n) {
                            return _.ReactEventListener.trapBubbledEvent(e, t, n)
                        },
                        trapCapturedEvent: function(e, t, n) {
                            return _.ReactEventListener.trapCapturedEvent(e, t, n)
                        },
                        ensureScrollValueMonitoring: function() {
                            if (!p) {
                                var e = u.refreshScrollValues;
                                _.ReactEventListener.monitorScrollValue(e), p = !0
                            }
                        },
                        eventNameDispatchConfigs: o.eventNameDispatchConfigs,
                        registrationNameModules: o.registrationNameModules,
                        putListener: o.putListener,
                        getListener: o.getListener,
                        deleteListener: o.deleteListener,
                        deleteAllListeners: o.deleteAllListeners
                    });
                t.exports = _
            }, {
                102: 102,
                134: 134,
                15: 15,
                17: 17,
                18: 18,
                27: 27,
                59: 59
            }],
            31: [function(e, t, n) {
                "use strict";
                var r = e(79),
                    a = e(116),
                    o = e(132),
                    i = e(147),
                    s = {
                        instantiateChildren: function(e, t, n) {
                            var r = a(e);
                            for (var i in r)
                                if (r.hasOwnProperty(i)) {
                                    var s = r[i],
                                        u = o(s, null);
                                    r[i] = u
                                }
                            return r
                        },
                        updateChildren: function(e, t, n, s) {
                            var u = a(t);
                            if (!u && !e) return null;
                            var l;
                            for (l in u)
                                if (u.hasOwnProperty(l)) {
                                    var d = e && e[l],
                                        c = d && d._currentElement,
                                        p = u[l];
                                    if (i(c, p)) r.receiveComponent(d, p, n, s), u[l] = d;
                                    else {
                                        d && r.unmountComponent(d, l);
                                        var m = o(p, null);
                                        u[l] = m
                                    }
                                }
                            for (l in e) !e.hasOwnProperty(l) || u && u.hasOwnProperty(l) || r.unmountComponent(e[l]);
                            return u
                        },
                        unmountChildren: function(e) {
                            for (var t in e) {
                                var n = e[t];
                                r.unmountComponent(n)
                            }
                        }
                    };
                t.exports = s
            }, {
                116: 116,
                132: 132,
                147: 147,
                79: 79
            }],
            32: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    this.forEachFunction = e, this.forEachContext = t
                }

                function a(e, t, n, r) {
                    var a = e;
                    a.forEachFunction.call(a.forEachContext, t, r)
                }

                function o(e, t, n) {
                    if (null == e) return e;
                    var o = r.getPooled(t, n);
                    m(e, a, o), r.release(o)
                }

                function i(e, t, n) {
                    this.mapResult = e, this.mapFunction = t, this.mapContext = n
                }

                function s(e, t, n, r) {
                    var a = e,
                        o = a.mapResult,
                        i = !o.hasOwnProperty(n);
                    if (i) {
                        var s = a.mapFunction.call(a.mapContext, t, r);
                        o[n] = s
                    }
                }

                function u(e, t, n) {
                    if (null == e) return e;
                    var r = {},
                        a = i.getPooled(r, t, n);
                    return m(e, s, a), i.release(a), p.create(r)
                }

                function l(e, t, n, r) {
                    return null
                }

                function d(e, t) {
                    return m(e, l, null)
                }
                var c = e(28),
                    p = e(61),
                    m = e(149),
                    h = (e(150), c.twoArgumentPooler),
                    f = c.threeArgumentPooler;
                c.addPoolingTo(r, h), c.addPoolingTo(i, f);
                var _ = {
                    forEach: o,
                    map: u,
                    count: d
                };
                t.exports = _
            }, {
                149: 149,
                150: 150,
                28: 28,
                61: 61
            }],
            33: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    var n = T.hasOwnProperty(t) ? T[t] : null;
                    Y.hasOwnProperty(t) && g(n === w.OVERRIDE_BASE), e.hasOwnProperty(t) && g(n === w.DEFINE_MANY || n === w.DEFINE_MANY_MERGED)
                }

                function a(e, t) {
                    if (t) {
                        g("function" != typeof t), g(!p.isValidElement(t));
                        var n = e.prototype;
                        t.hasOwnProperty(L) && b.mixins(e, t.mixins);
                        for (var a in t)
                            if (t.hasOwnProperty(a) && a !== L) {
                                var o = t[a];
                                if (r(n, a), b.hasOwnProperty(a)) b[a](e, o);
                                else {
                                    var i = T.hasOwnProperty(a),
                                        l = n.hasOwnProperty(a),
                                        d = o && o.__reactDontBind,
                                        c = "function" == typeof o,
                                        m = c && !i && !l && !d;
                                    if (m) n.__reactAutoBindMap || (n.__reactAutoBindMap = {}), n.__reactAutoBindMap[a] = o, n[a] = o;
                                    else if (l) {
                                        var h = T[a];
                                        g(i && (h === w.DEFINE_MANY_MERGED || h === w.DEFINE_MANY)), h === w.DEFINE_MANY_MERGED ? n[a] = s(n[a], o) : h === w.DEFINE_MANY && (n[a] = u(n[a], o))
                                    } else n[a] = o
                                }
                            }
                    }
                }

                function o(e, t) {
                    if (t)
                        for (var n in t) {
                            var r = t[n];
                            if (t.hasOwnProperty(n)) {
                                var a = n in b;
                                g(!a);
                                var o = n in e;
                                g(!o), e[n] = r
                            }
                        }
                }

                function i(e, t) {
                    g(e && t && "object" == typeof e && "object" == typeof t);
                    for (var n in t) t.hasOwnProperty(n) && (g(void 0 === e[n]), e[n] = t[n]);
                    return e
                }

                function s(e, t) {
                    return function() {
                        var n = e.apply(this, arguments),
                            r = t.apply(this, arguments);
                        if (null == n) return r;
                        if (null == r) return n;
                        var a = {};
                        return i(a, n), i(a, r), a
                    }
                }

                function u(e, t) {
                    return function() {
                        e.apply(this, arguments), t.apply(this, arguments)
                    }
                }

                function l(e, t) {
                    var n = t.bind(e);
                    return n
                }

                function d(e) {
                    for (var t in e.__reactAutoBindMap)
                        if (e.__reactAutoBindMap.hasOwnProperty(t)) {
                            var n = e.__reactAutoBindMap[t];
                            e[t] = l(e, m.guard(n, e.constructor.displayName + "." + t))
                        }
                }
                var c = e(34),
                    p = (e(39), e(55)),
                    m = e(58),
                    h = e(65),
                    f = e(66),
                    _ = (e(75), e(74), e(84)),
                    y = e(27),
                    g = e(133),
                    v = e(138),
                    M = e(139),
                    L = (e(150), M({
                        mixins: null
                    })),
                    w = v({
                        DEFINE_ONCE: null,
                        DEFINE_MANY: null,
                        OVERRIDE_BASE: null,
                        DEFINE_MANY_MERGED: null
                    }),
                    D = [],
                    T = {
                        mixins: w.DEFINE_MANY,
                        statics: w.DEFINE_MANY,
                        propTypes: w.DEFINE_MANY,
                        contextTypes: w.DEFINE_MANY,
                        childContextTypes: w.DEFINE_MANY,
                        getDefaultProps: w.DEFINE_MANY_MERGED,
                        getInitialState: w.DEFINE_MANY_MERGED,
                        getChildContext: w.DEFINE_MANY_MERGED,
                        render: w.DEFINE_ONCE,
                        componentWillMount: w.DEFINE_MANY,
                        componentDidMount: w.DEFINE_MANY,
                        componentWillReceiveProps: w.DEFINE_MANY,
                        shouldComponentUpdate: w.DEFINE_ONCE,
                        componentWillUpdate: w.DEFINE_MANY,
                        componentDidUpdate: w.DEFINE_MANY,
                        componentWillUnmount: w.DEFINE_MANY,
                        updateComponent: w.OVERRIDE_BASE
                    },
                    b = {
                        displayName: function(e, t) {
                            e.displayName = t
                        },
                        mixins: function(e, t) {
                            if (t)
                                for (var n = 0; n < t.length; n++) a(e, t[n])
                        },
                        childContextTypes: function(e, t) {
                            e.childContextTypes = y({}, e.childContextTypes, t)
                        },
                        contextTypes: function(e, t) {
                            e.contextTypes = y({}, e.contextTypes, t)
                        },
                        getDefaultProps: function(e, t) {
                            e.getDefaultProps ? e.getDefaultProps = s(e.getDefaultProps, t) : e.getDefaultProps = t
                        },
                        propTypes: function(e, t) {
                            e.propTypes = y({}, e.propTypes, t)
                        },
                        statics: function(e, t) {
                            o(e, t)
                        }
                    },
                    Y = {
                        replaceState: function(e, t) {
                            _.enqueueReplaceState(this, e), t && _.enqueueCallback(this, t)
                        },
                        isMounted: function() {
                            var e = h.get(this);
                            return e && e !== f.currentlyMountingInstance
                        },
                        setProps: function(e, t) {
                            _.enqueueSetProps(this, e), t && _.enqueueCallback(this, t)
                        },
                        replaceProps: function(e, t) {
                            _.enqueueReplaceProps(this, e), t && _.enqueueCallback(this, t)
                        }
                    },
                    k = function() {};
                y(k.prototype, c.prototype, Y);
                var x = {
                    createClass: function(e) {
                        var t = function(e, t) {
                            this.__reactAutoBindMap && d(this), this.props = e, this.context = t, this.state = null;
                            var n = this.getInitialState ? this.getInitialState() : null;
                            g("object" == typeof n && !Array.isArray(n)), this.state = n
                        };
                        t.prototype = new k, t.prototype.constructor = t, D.forEach(a.bind(null, t)), a(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), g(t.prototype.render);
                        for (var n in T) t.prototype[n] || (t.prototype[n] = null);
                        return t.type = t, t
                    },
                    injection: {
                        injectMixin: function(e) {
                            D.push(e)
                        }
                    }
                };
                t.exports = x
            }, {
                133: 133,
                138: 138,
                139: 139,
                150: 150,
                27: 27,
                34: 34,
                39: 39,
                55: 55,
                58: 58,
                65: 65,
                66: 66,
                74: 74,
                75: 75,
                84: 84
            }],
            34: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    this.props = e, this.context = t
                }
                var a = e(84),
                    o = e(133);
                e(150), r.prototype.setState = function(e, t) {
                    o("object" == typeof e || "function" == typeof e || null == e), a.enqueueSetState(this, e), t && a.enqueueCallback(this, t)
                }, r.prototype.forceUpdate = function(e) {
                    a.enqueueForceUpdate(this), e && a.enqueueCallback(this, e)
                }, t.exports = r
            }, {
                133: 133,
                150: 150,
                84: 84
            }],
            35: [function(e, t, n) {
                "use strict";
                var r = e(44),
                    a = e(68),
                    o = {
                        processChildrenUpdates: r.dangerouslyProcessChildrenUpdates,
                        replaceNodeWithMarkupByID: r.dangerouslyReplaceNodeWithMarkupByID,
                        unmountIDFromEnvironment: function(e) {
                            a.purgeID(e)
                        }
                    };
                t.exports = o
            }, {
                44: 44,
                68: 68
            }],
            36: [function(e, t, n) {
                "use strict";
                var r = e(133),
                    a = !1,
                    o = {
                        unmountIDFromEnvironment: null,
                        replaceNodeWithMarkupByID: null,
                        processChildrenUpdates: null,
                        injection: {
                            injectEnvironment: function(e) {
                                r(!a), o.unmountIDFromEnvironment = e.unmountIDFromEnvironment, o.replaceNodeWithMarkupByID = e.replaceNodeWithMarkupByID, o.processChildrenUpdates = e.processChildrenUpdates, a = !0
                            }
                        }
                    };
                t.exports = o
            }, {
                133: 133
            }],
            37: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = e._currentElement._owner || null;
                    if (t) {
                        var n = t.getName();
                        if (n) return " Check the render method of `" + n + "`."
                    }
                    return ""
                }
                var a = e(36),
                    o = e(38),
                    i = e(39),
                    s = e(55),
                    u = (e(56), e(65)),
                    l = e(66),
                    d = e(71),
                    c = e(73),
                    p = e(75),
                    m = (e(74), e(79)),
                    h = e(85),
                    f = e(27),
                    _ = e(113),
                    y = e(133),
                    g = e(147),
                    v = (e(150), 1),
                    M = {
                        construct: function(e) {
                            this._currentElement = e, this._rootNodeID = null, this._instance = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._isTopLevel = !1, this._pendingCallbacks = null
                        },
                        mountComponent: function(e, t, n) {
                            this._context = n, this._mountOrder = v++, this._rootNodeID = e;
                            var r = this._processProps(this._currentElement.props),
                                a = this._processContext(this._currentElement._context),
                                o = d.getComponentClassForElement(this._currentElement),
                                i = new o(r, a);
                            i.props = r, i.context = a, i.refs = _, this._instance = i, u.set(i, this);
                            var s = i.state;
                            void 0 === s && (i.state = s = null), y("object" == typeof s && !Array.isArray(s)), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                            var c, p, h = l.currentlyMountingInstance;
                            l.currentlyMountingInstance = this;
                            try {
                                i.componentWillMount && (i.componentWillMount(), this._pendingStateQueue && (i.state = this._processPendingState(i.props, i.context))), c = this._getValidatedChildContext(n), p = this._renderValidatedComponent(c)
                            } finally {
                                l.currentlyMountingInstance = h
                            }
                            this._renderedComponent = this._instantiateReactComponent(p, this._currentElement.type);
                            var f = m.mountComponent(this._renderedComponent, e, t, this._mergeChildContext(n, c));
                            return i.componentDidMount && t.getReactMountReady().enqueue(i.componentDidMount, i), f
                        },
                        unmountComponent: function() {
                            var e = this._instance;
                            if (e.componentWillUnmount) {
                                var t = l.currentlyUnmountingInstance;
                                l.currentlyUnmountingInstance = this;
                                try {
                                    e.componentWillUnmount()
                                } finally {
                                    l.currentlyUnmountingInstance = t
                                }
                            }
                            m.unmountComponent(this._renderedComponent), this._renderedComponent = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = null, u.remove(e)
                        },
                        _setPropsInternal: function(e, t) {
                            var n = this._pendingElement || this._currentElement;
                            this._pendingElement = s.cloneAndReplaceProps(n, f({}, n.props, e)), h.enqueueUpdate(this, t)
                        },
                        _maskContext: function(e) {
                            var t = null;
                            if ("string" == typeof this._currentElement.type) return _;
                            var n = this._currentElement.type.contextTypes;
                            if (!n) return _;
                            t = {};
                            for (var r in n) t[r] = e[r];
                            return t
                        },
                        _processContext: function(e) {
                            var t = this._maskContext(e);
                            return t
                        },
                        _getValidatedChildContext: function(e) {
                            var t = this._instance,
                                n = t.getChildContext && t.getChildContext();
                            if (n) {
                                y("object" == typeof t.constructor.childContextTypes);
                                for (var r in n) y(r in t.constructor.childContextTypes);
                                return n
                            }
                            return null
                        },
                        _mergeChildContext: function(e, t) {
                            return t ? f({}, e, t) : e
                        },
                        _processProps: function(e) {
                            return e
                        },
                        _checkPropTypes: function(e, t, n) {
                            var a = this.getName();
                            for (var o in e)
                                if (e.hasOwnProperty(o)) {
                                    var i;
                                    try {
                                        y("function" == typeof e[o]), i = e[o](t, o, a, n)
                                    } catch (s) {
                                        i = s
                                    }
                                    i instanceof Error && (r(this), n === p.prop)
                                }
                        },
                        receiveComponent: function(e, t, n) {
                            var r = this._currentElement,
                                a = this._context;
                            this._pendingElement = null, this.updateComponent(t, r, e, a, n)
                        },
                        performUpdateIfNecessary: function(e) {
                            null != this._pendingElement && m.receiveComponent(this, this._pendingElement || this._currentElement, e, this._context), (null !== this._pendingStateQueue || this._pendingForceUpdate) && this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context)
                        },
                        _warnIfContextsDiffer: function(e, t) {
                            e = this._maskContext(e), t = this._maskContext(t);
                            for (var n = Object.keys(t).sort(), r = (this.getName() || "ReactCompositeComponent", 0); r < n.length; r++) n[r]
                        },
                        updateComponent: function(e, t, n, r, a) {
                            var o = this._instance,
                                i = o.context,
                                s = o.props;
                            t !== n && (i = this._processContext(n._context), s = this._processProps(n.props), o.componentWillReceiveProps && o.componentWillReceiveProps(s, i));
                            var u = this._processPendingState(s, i),
                                l = this._pendingForceUpdate || !o.shouldComponentUpdate || o.shouldComponentUpdate(s, u, i);
                            l ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, s, u, i, e, a)) : (this._currentElement = n, this._context = a, o.props = s, o.state = u, o.context = i)
                        },
                        _processPendingState: function(e, t) {
                            var n = this._instance,
                                r = this._pendingStateQueue,
                                a = this._pendingReplaceState;
                            if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !r) return n.state;
                            if (a && 1 === r.length) return r[0];
                            for (var o = f({}, a ? r[0] : n.state), i = a ? 1 : 0; i < r.length; i++) {
                                var s = r[i];
                                f(o, "function" == typeof s ? s.call(n, o, e, t) : s)
                            }
                            return o
                        },
                        _performComponentUpdate: function(e, t, n, r, a, o) {
                            var i = this._instance,
                                s = i.props,
                                u = i.state,
                                l = i.context;
                            i.componentWillUpdate && i.componentWillUpdate(t, n, r), this._currentElement = e, this._context = o, i.props = t, i.state = n, i.context = r, this._updateRenderedComponent(a, o), i.componentDidUpdate && a.getReactMountReady().enqueue(i.componentDidUpdate.bind(i, s, u, l), i)
                        },
                        _updateRenderedComponent: function(e, t) {
                            var n = this._renderedComponent,
                                r = n._currentElement,
                                a = this._getValidatedChildContext(),
                                o = this._renderValidatedComponent(a);
                            if (g(r, o)) m.receiveComponent(n, o, e, this._mergeChildContext(t, a));
                            else {
                                var i = this._rootNodeID,
                                    s = n._rootNodeID;
                                m.unmountComponent(n), this._renderedComponent = this._instantiateReactComponent(o, this._currentElement.type);
                                var u = m.mountComponent(this._renderedComponent, i, e, this._mergeChildContext(t, a));
                                this._replaceNodeWithMarkupByID(s, u)
                            }
                        },
                        _replaceNodeWithMarkupByID: function(e, t) {
                            a.replaceNodeWithMarkupByID(e, t)
                        },
                        _renderValidatedComponentWithoutOwnerOrContext: function() {
                            var e = this._instance,
                                t = e.render();
                            return t
                        },
                        _renderValidatedComponent: function(e) {
                            var t, n = o.current;
                            o.current = this._mergeChildContext(this._currentElement._context, e), i.current = this;
                            try {
                                t = this._renderValidatedComponentWithoutOwnerOrContext()
                            } finally {
                                o.current = n, i.current = null
                            }
                            return y(null === t || t === !1 || s.isValidElement(t)), t
                        },
                        attachRef: function(e, t) {
                            var n = this.getPublicInstance(),
                                r = n.refs === _ ? n.refs = {} : n.refs;
                            r[e] = t.getPublicInstance()
                        },
                        detachRef: function(e) {
                            var t = this.getPublicInstance().refs;
                            delete t[e]
                        },
                        getName: function() {
                            var e = this._currentElement.type,
                                t = this._instance && this._instance.constructor;
                            return e.displayName || t && t.displayName || e.name || t && t.name || null
                        },
                        getPublicInstance: function() {
                            return this._instance
                        },
                        _instantiateReactComponent: null
                    };
                c.measureMethods(M, "ReactCompositeComponent", {
                    mountComponent: "mountComponent",
                    updateComponent: "updateComponent",
                    _renderValidatedComponent: "_renderValidatedComponent"
                });
                var L = {
                    Mixin: M
                };
                t.exports = L
            }, {
                113: 113,
                133: 133,
                147: 147,
                150: 150,
                27: 27,
                36: 36,
                38: 38,
                39: 39,
                55: 55,
                56: 56,
                65: 65,
                66: 66,
                71: 71,
                73: 73,
                74: 74,
                75: 75,
                79: 79,
                85: 85
            }],
            38: [function(e, t, n) {
                "use strict";
                var r = e(27),
                    a = e(113),
                    o = (e(150), {
                        current: a,
                        withContext: function(e, t) {
                            var n, a = o.current;
                            o.current = r({}, a, e);
                            try {
                                n = t()
                            } finally {
                                o.current = a
                            }
                            return n
                        }
                    });
                t.exports = o
            }, {
                113: 113,
                150: 150,
                27: 27
            }],
            39: [function(e, t, n) {
                "use strict";
                var r = {
                    current: null
                };
                t.exports = r
            }, {}],
            40: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return a.createFactory(e)
                }
                var a = e(55),
                    o = (e(56), e(140)),
                    i = o({
                        a: "a",
                        abbr: "abbr",
                        address: "address",
                        area: "area",
                        article: "article",
                        aside: "aside",
                        audio: "audio",
                        b: "b",
                        base: "base",
                        bdi: "bdi",
                        bdo: "bdo",
                        big: "big",
                        blockquote: "blockquote",
                        body: "body",
                        br: "br",
                        button: "button",
                        canvas: "canvas",
                        caption: "caption",
                        cite: "cite",
                        code: "code",
                        col: "col",
                        colgroup: "colgroup",
                        data: "data",
                        datalist: "datalist",
                        dd: "dd",
                        del: "del",
                        details: "details",
                        dfn: "dfn",
                        dialog: "dialog",
                        div: "div",
                        dl: "dl",
                        dt: "dt",
                        em: "em",
                        embed: "embed",
                        fieldset: "fieldset",
                        figcaption: "figcaption",
                        figure: "figure",
                        footer: "footer",
                        form: "form",
                        h1: "h1",
                        h2: "h2",
                        h3: "h3",
                        h4: "h4",
                        h5: "h5",
                        h6: "h6",
                        head: "head",
                        header: "header",
                        hr: "hr",
                        html: "html",
                        i: "i",
                        iframe: "iframe",
                        img: "img",
                        input: "input",
                        ins: "ins",
                        kbd: "kbd",
                        keygen: "keygen",
                        label: "label",
                        legend: "legend",
                        li: "li",
                        link: "link",
                        main: "main",
                        map: "map",
                        mark: "mark",
                        menu: "menu",
                        menuitem: "menuitem",
                        meta: "meta",
                        meter: "meter",
                        nav: "nav",
                        noscript: "noscript",
                        object: "object",
                        ol: "ol",
                        optgroup: "optgroup",
                        option: "option",
                        output: "output",
                        p: "p",
                        param: "param",
                        picture: "picture",
                        pre: "pre",
                        progress: "progress",
                        q: "q",
                        rp: "rp",
                        rt: "rt",
                        ruby: "ruby",
                        s: "s",
                        samp: "samp",
                        script: "script",
                        section: "section",
                        select: "select",
                        small: "small",
                        source: "source",
                        span: "span",
                        strong: "strong",
                        style: "style",
                        sub: "sub",
                        summary: "summary",
                        sup: "sup",
                        table: "table",
                        tbody: "tbody",
                        td: "td",
                        textarea: "textarea",
                        tfoot: "tfoot",
                        th: "th",
                        thead: "thead",
                        time: "time",
                        title: "title",
                        tr: "tr",
                        track: "track",
                        u: "u",
                        ul: "ul",
                        "var": "var",
                        video: "video",
                        wbr: "wbr",
                        circle: "circle",
                        clipPath: "clipPath",
                        defs: "defs",
                        ellipse: "ellipse",
                        g: "g",
                        line: "line",
                        linearGradient: "linearGradient",
                        mask: "mask",
                        path: "path",
                        pattern: "pattern",
                        polygon: "polygon",
                        polyline: "polyline",
                        radialGradient: "radialGradient",
                        rect: "rect",
                        stop: "stop",
                        svg: "svg",
                        text: "text",
                        tspan: "tspan"
                    }, r);
                t.exports = i
            }, {
                140: 140,
                55: 55,
                56: 56
            }],
            41: [function(e, t, n) {
                "use strict";
                var r = e(2),
                    a = e(29),
                    o = e(33),
                    i = e(55),
                    s = e(138),
                    u = i.createFactory("button"),
                    l = s({
                        onClick: !0,
                        onDoubleClick: !0,
                        onMouseDown: !0,
                        onMouseMove: !0,
                        onMouseUp: !0,
                        onClickCapture: !0,
                        onDoubleClickCapture: !0,
                        onMouseDownCapture: !0,
                        onMouseMoveCapture: !0,
                        onMouseUpCapture: !0
                    }),
                    d = o.createClass({
                        displayName: "ReactDOMButton",
                        tagName: "BUTTON",
                        mixins: [r, a],
                        render: function() {
                            var e = {};
                            for (var t in this.props) !this.props.hasOwnProperty(t) || this.props.disabled && l[t] || (e[t] = this.props[t]);
                            return u(e, this.props.children)
                        }
                    });
                t.exports = d
            }, {
                138: 138,
                2: 2,
                29: 29,
                33: 33,
                55: 55
            }],
            42: [function(e, t, n) {
                "use strict";

                function r(e) {
                    e && (null != e.dangerouslySetInnerHTML && (y(null == e.children), y("object" == typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML)), y(null == e.style || "object" == typeof e.style))
                }

                function a(e, t, n, r) {
                    var a = p.findReactContainerForID(e);
                    if (a) {
                        var o = a.nodeType === T ? a.ownerDocument : a;
                        M(t, o)
                    }
                    r.getPutListenerQueue().enqueuePutListener(e, t, n)
                }

                function o(e) {
                    S.call(x, e) || (y(k.test(e)), x[e] = !0)
                }

                function i(e) {
                    o(e), this._tag = e, this._renderedChildren = null, this._previousStyleCopy = null, this._rootNodeID = null
                }
                var s = e(5),
                    u = e(10),
                    l = e(11),
                    d = e(30),
                    c = e(35),
                    p = e(68),
                    m = e(69),
                    h = e(73),
                    f = e(27),
                    _ = e(114),
                    y = e(133),
                    g = (e(134), e(139)),
                    v = (e(150), d.deleteListener),
                    M = d.listenTo,
                    L = d.registrationNameModules,
                    w = {
                        string: !0,
                        number: !0
                    },
                    D = g({
                        style: null
                    }),
                    T = 1,
                    b = null,
                    Y = {
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
                    },
                    k = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
                    x = {},
                    S = {}.hasOwnProperty;
                i.displayName = "ReactDOMComponent", i.Mixin = {
                    construct: function(e) {
                        this._currentElement = e
                    },
                    mountComponent: function(e, t, n) {
                        this._rootNodeID = e, r(this._currentElement.props);
                        var a = Y[this._tag] ? "" : "</" + this._tag + ">";
                        return this._createOpenTagMarkupAndPutListeners(t) + this._createContentMarkup(t, n) + a
                    },
                    _createOpenTagMarkupAndPutListeners: function(e) {
                        var t = this._currentElement.props,
                            n = "<" + this._tag;
                        for (var r in t)
                            if (t.hasOwnProperty(r)) {
                                var o = t[r];
                                if (null != o)
                                    if (L.hasOwnProperty(r)) a(this._rootNodeID, r, o, e);
                                    else {
                                        r === D && (o && (o = this._previousStyleCopy = f({}, t.style)), o = s.createMarkupForStyles(o));
                                        var i = l.createMarkupForProperty(r, o);
                                        i && (n += " " + i)
                                    }
                            }
                        if (e.renderToStaticMarkup) return n + ">";
                        var u = l.createMarkupForID(this._rootNodeID);
                        return n + " " + u + ">"
                    },
                    _createContentMarkup: function(e, t) {
                        var n = "";
                        ("listing" === this._tag || "pre" === this._tag || "textarea" === this._tag) && (n = "\n");
                        var r = this._currentElement.props,
                            a = r.dangerouslySetInnerHTML;
                        if (null != a) {
                            if (null != a.__html) return n + a.__html
                        } else {
                            var o = w[typeof r.children] ? r.children : null,
                                i = null != o ? null : r.children;
                            if (null != o) return n + _(o);
                            if (null != i) {
                                var s = this.mountChildren(i, e, t);
                                return n + s.join("")
                            }
                        }
                        return n
                    },
                    receiveComponent: function(e, t, n) {
                        var r = this._currentElement;
                        this._currentElement = e, this.updateComponent(t, r, e, n)
                    },
                    updateComponent: function(e, t, n, a) {
                        r(this._currentElement.props), this._updateDOMProperties(t.props, e), this._updateDOMChildren(t.props, e, a)
                    },
                    _updateDOMProperties: function(e, t) {
                        var n, r, o, i = this._currentElement.props;
                        for (n in e)
                            if (!i.hasOwnProperty(n) && e.hasOwnProperty(n))
                                if (n === D) {
                                    var s = this._previousStyleCopy;
                                    for (r in s) s.hasOwnProperty(r) && (o = o || {}, o[r] = "");
                                    this._previousStyleCopy = null
                                } else L.hasOwnProperty(n) ? v(this._rootNodeID, n) : (u.isStandardName[n] || u.isCustomAttribute(n)) && b.deletePropertyByID(this._rootNodeID, n);
                        for (n in i) {
                            var l = i[n],
                                d = n === D ? this._previousStyleCopy : e[n];
                            if (i.hasOwnProperty(n) && l !== d)
                                if (n === D)
                                    if (l ? l = this._previousStyleCopy = f({}, l) : this._previousStyleCopy = null, d) {
                                        for (r in d) !d.hasOwnProperty(r) || l && l.hasOwnProperty(r) || (o = o || {}, o[r] = "");
                                        for (r in l) l.hasOwnProperty(r) && d[r] !== l[r] && (o = o || {}, o[r] = l[r])
                                    } else o = l;
                            else L.hasOwnProperty(n) ? a(this._rootNodeID, n, l, t) : (u.isStandardName[n] || u.isCustomAttribute(n)) && b.updatePropertyByID(this._rootNodeID, n, l)
                        }
                        o && b.updateStylesByID(this._rootNodeID, o)
                    },
                    _updateDOMChildren: function(e, t, n) {
                        var r = this._currentElement.props,
                            a = w[typeof e.children] ? e.children : null,
                            o = w[typeof r.children] ? r.children : null,
                            i = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                            s = r.dangerouslySetInnerHTML && r.dangerouslySetInnerHTML.__html,
                            u = null != a ? null : e.children,
                            l = null != o ? null : r.children,
                            d = null != a || null != i,
                            c = null != o || null != s;
                        null != u && null == l ? this.updateChildren(null, t, n) : d && !c && this.updateTextContent(""), null != o ? a !== o && this.updateTextContent("" + o) : null != s ? i !== s && b.updateInnerHTMLByID(this._rootNodeID, s) : null != l && this.updateChildren(l, t, n)
                    },
                    unmountComponent: function() {
                        this.unmountChildren(), d.deleteAllListeners(this._rootNodeID), c.unmountIDFromEnvironment(this._rootNodeID), this._rootNodeID = null
                    }
                }, h.measureMethods(i, "ReactDOMComponent", {
                    mountComponent: "mountComponent",
                    updateComponent: "updateComponent"
                }), f(i.prototype, i.Mixin, m.Mixin), i.injection = {
                    injectIDOperations: function(e) {
                        i.BackendIDOperations = b = e
                    }
                }, t.exports = i
            }, {
                10: 10,
                11: 11,
                114: 114,
                133: 133,
                134: 134,
                139: 139,
                150: 150,
                27: 27,
                30: 30,
                35: 35,
                5: 5,
                68: 68,
                69: 69,
                73: 73
            }],
            43: [function(e, t, n) {
                "use strict";
                var r = e(15),
                    a = e(25),
                    o = e(29),
                    i = e(33),
                    s = e(55),
                    u = s.createFactory("form"),
                    l = i.createClass({
                        displayName: "ReactDOMForm",
                        tagName: "FORM",
                        mixins: [o, a],
                        render: function() {
                            return u(this.props)
                        },
                        componentDidMount: function() {
                            this.trapBubbledEvent(r.topLevelTypes.topReset, "reset"), this.trapBubbledEvent(r.topLevelTypes.topSubmit, "submit")
                        }
                    });
                t.exports = l
            }, {
                15: 15,
                25: 25,
                29: 29,
                33: 33,
                55: 55
            }],
            44: [function(e, t, n) {
                "use strict";
                var r = e(5),
                    a = e(9),
                    o = e(11),
                    i = e(68),
                    s = e(73),
                    u = e(133),
                    l = e(144),
                    d = {
                        dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
                        style: "`style` must be set using `updateStylesByID()`."
                    },
                    c = {
                        updatePropertyByID: function(e, t, n) {
                            var r = i.getNode(e);
                            u(!d.hasOwnProperty(t)), null != n ? o.setValueForProperty(r, t, n) : o.deleteValueForProperty(r, t)
                        },
                        deletePropertyByID: function(e, t, n) {
                            var r = i.getNode(e);
                            u(!d.hasOwnProperty(t)), o.deleteValueForProperty(r, t, n)
                        },
                        updateStylesByID: function(e, t) {
                            var n = i.getNode(e);
                            r.setValueForStyles(n, t)
                        },
                        updateInnerHTMLByID: function(e, t) {
                            var n = i.getNode(e);
                            l(n, t)
                        },
                        updateTextContentByID: function(e, t) {
                            var n = i.getNode(e);
                            a.updateTextContent(n, t)
                        },
                        dangerouslyReplaceNodeWithMarkupByID: function(e, t) {
                            var n = i.getNode(e);
                            a.dangerouslyReplaceNodeWithMarkup(n, t)
                        },
                        dangerouslyProcessChildrenUpdates: function(e, t) {
                            for (var n = 0; n < e.length; n++) e[n].parentNode = i.getNode(e[n].parentID);
                            a.processUpdates(e, t)
                        }
                    };
                s.measureMethods(c, "ReactDOMIDOperations", {
                    updatePropertyByID: "updatePropertyByID",
                    deletePropertyByID: "deletePropertyByID",
                    updateStylesByID: "updateStylesByID",
                    updateInnerHTMLByID: "updateInnerHTMLByID",
                    updateTextContentByID: "updateTextContentByID",
                    dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID",
                    dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates"
                }), t.exports = c
            }, {
                11: 11,
                133: 133,
                144: 144,
                5: 5,
                68: 68,
                73: 73,
                9: 9
            }],
            45: [function(e, t, n) {
                "use strict";
                var r = e(15),
                    a = e(25),
                    o = e(29),
                    i = e(33),
                    s = e(55),
                    u = s.createFactory("iframe"),
                    l = i.createClass({
                        displayName: "ReactDOMIframe",
                        tagName: "IFRAME",
                        mixins: [o, a],
                        render: function() {
                            return u(this.props)
                        },
                        componentDidMount: function() {
                            this.trapBubbledEvent(r.topLevelTypes.topLoad, "load")
                        }
                    });
                t.exports = l
            }, {
                15: 15,
                25: 25,
                29: 29,
                33: 33,
                55: 55
            }],
            46: [function(e, t, n) {
                "use strict";
                var r = e(15),
                    a = e(25),
                    o = e(29),
                    i = e(33),
                    s = e(55),
                    u = s.createFactory("img"),
                    l = i.createClass({
                        displayName: "ReactDOMImg",
                        tagName: "IMG",
                        mixins: [o, a],
                        render: function() {
                            return u(this.props)
                        },
                        componentDidMount: function() {
                            this.trapBubbledEvent(r.topLevelTypes.topLoad, "load"), this.trapBubbledEvent(r.topLevelTypes.topError, "error")
                        }
                    });
                t.exports = l
            }, {
                15: 15,
                25: 25,
                29: 29,
                33: 33,
                55: 55
            }],
            47: [function(e, t, n) {
                "use strict";

                function r() {
                    this.isMounted() && this.forceUpdate()
                }
                var a = e(2),
                    o = e(11),
                    i = e(24),
                    s = e(29),
                    u = e(33),
                    l = e(55),
                    d = e(68),
                    c = e(85),
                    p = e(27),
                    m = e(133),
                    h = l.createFactory("input"),
                    f = {},
                    _ = u.createClass({
                        displayName: "ReactDOMInput",
                        tagName: "INPUT",
                        mixins: [a, i.Mixin, s],
                        getInitialState: function() {
                            var e = this.props.defaultValue;
                            return {
                                initialChecked: this.props.defaultChecked || !1,
                                initialValue: null != e ? e : null
                            }
                        },
                        render: function() {
                            var e = p({}, this.props);
                            e.defaultChecked = null, e.defaultValue = null;
                            var t = i.getValue(this);
                            e.value = null != t ? t : this.state.initialValue;
                            var n = i.getChecked(this);
                            return e.checked = null != n ? n : this.state.initialChecked, e.onChange = this._handleChange, h(e, this.props.children)
                        },
                        componentDidMount: function() {
                            var e = d.getID(this.getDOMNode());
                            f[e] = this
                        },
                        componentWillUnmount: function() {
                            var e = this.getDOMNode(),
                                t = d.getID(e);
                            delete f[t]
                        },
                        componentDidUpdate: function(e, t, n) {
                            var r = this.getDOMNode();
                            null != this.props.checked && o.setValueForProperty(r, "checked", this.props.checked || !1);
                            var a = i.getValue(this);
                            null != a && o.setValueForProperty(r, "value", "" + a)
                        },
                        _handleChange: function(e) {
                            var t, n = i.getOnChange(this);
                            n && (t = n.call(this, e)), c.asap(r, this);
                            var a = this.props.name;
                            if ("radio" === this.props.type && null != a) {
                                for (var o = this.getDOMNode(), s = o; s.parentNode;) s = s.parentNode;
                                for (var u = s.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), l = 0, p = u.length; p > l; l++) {
                                    var h = u[l];
                                    if (h !== o && h.form === o.form) {
                                        var _ = d.getID(h);
                                        m(_);
                                        var y = f[_];
                                        m(y), c.asap(r, y)
                                    }
                                }
                            }
                            return t
                        }
                    });
                t.exports = _
            }, {
                11: 11,
                133: 133,
                2: 2,
                24: 24,
                27: 27,
                29: 29,
                33: 33,
                55: 55,
                68: 68,
                85: 85
            }],
            48: [function(e, t, n) {
                "use strict";
                var r = e(29),
                    a = e(33),
                    o = e(55),
                    i = (e(150), o.createFactory("option")),
                    s = a.createClass({
                        displayName: "ReactDOMOption",
                        tagName: "OPTION",
                        mixins: [r],
                        componentWillMount: function() {},
                        render: function() {
                            return i(this.props, this.props.children)
                        }
                    });
                t.exports = s
            }, {
                150: 150,
                29: 29,
                33: 33,
                55: 55
            }],
            49: [function(e, t, n) {
                "use strict";

                function r() {
                    if (this._pendingUpdate) {
                        this._pendingUpdate = !1;
                        var e = s.getValue(this);
                        null != e && this.isMounted() && o(this, e)
                    }
                }

                function a(e, t, n) {
                    if (null == e[t]) return null;
                    if (e.multiple) {
                        if (!Array.isArray(e[t])) return new Error("The `" + t + "` prop supplied to <select> must be an array if `multiple` is true.")
                    } else if (Array.isArray(e[t])) return new Error("The `" + t + "` prop supplied to <select> must be a scalar value if `multiple` is false.")
                }

                function o(e, t) {
                    var n, r, a, o = e.getDOMNode().options;
                    if (e.props.multiple) {
                        for (n = {}, r = 0, a = t.length; a > r; r++) n["" + t[r]] = !0;
                        for (r = 0, a = o.length; a > r; r++) {
                            var i = n.hasOwnProperty(o[r].value);
                            o[r].selected !== i && (o[r].selected = i)
                        }
                    } else {
                        for (n = "" + t, r = 0, a = o.length; a > r; r++)
                            if (o[r].value === n) return void(o[r].selected = !0);
                        o.length && (o[0].selected = !0)
                    }
                }
                var i = e(2),
                    s = e(24),
                    u = e(29),
                    l = e(33),
                    d = e(55),
                    c = e(85),
                    p = e(27),
                    m = d.createFactory("select"),
                    h = l.createClass({
                        displayName: "ReactDOMSelect",
                        tagName: "SELECT",
                        mixins: [i, s.Mixin, u],
                        propTypes: {
                            defaultValue: a,
                            value: a
                        },
                        render: function() {
                            var e = p({}, this.props);
                            return e.onChange = this._handleChange, e.value = null, m(e, this.props.children)
                        },
                        componentWillMount: function() {
                            this._pendingUpdate = !1
                        },
                        componentDidMount: function() {
                            var e = s.getValue(this);
                            null != e ? o(this, e) : null != this.props.defaultValue && o(this, this.props.defaultValue)
                        },
                        componentDidUpdate: function(e) {
                            var t = s.getValue(this);
                            null != t ? (this._pendingUpdate = !1, o(this, t)) : !e.multiple != !this.props.multiple && (null != this.props.defaultValue ? o(this, this.props.defaultValue) : o(this, this.props.multiple ? [] : ""))
                        },
                        _handleChange: function(e) {
                            var t, n = s.getOnChange(this);
                            return n && (t = n.call(this, e)), this._pendingUpdate = !0, c.asap(r, this), t
                        }
                    });
                t.exports = h
            }, {
                2: 2,
                24: 24,
                27: 27,
                29: 29,
                33: 33,
                55: 55,
                85: 85
            }],
            50: [function(e, t, n) {
                "use strict";

                function r(e, t, n, r) {
                    return e === n && t === r
                }

                function a(e) {
                    var t = document.selection,
                        n = t.createRange(),
                        r = n.text.length,
                        a = n.duplicate();
                    a.moveToElementText(e), a.setEndPoint("EndToStart", n);
                    var o = a.text.length,
                        i = o + r;
                    return {
                        start: o,
                        end: i
                    }
                }

                function o(e) {
                    var t = window.getSelection && window.getSelection();
                    if (!t || 0 === t.rangeCount) return null;
                    var n = t.anchorNode,
                        a = t.anchorOffset,
                        o = t.focusNode,
                        i = t.focusOffset,
                        s = t.getRangeAt(0),
                        u = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
                        l = u ? 0 : s.toString().length,
                        d = s.cloneRange();
                    d.selectNodeContents(e), d.setEnd(s.startContainer, s.startOffset);
                    var c = r(d.startContainer, d.startOffset, d.endContainer, d.endOffset),
                        p = c ? 0 : d.toString().length,
                        m = p + l,
                        h = document.createRange();
                    h.setStart(n, a), h.setEnd(o, i);
                    var f = h.collapsed;
                    return {
                        start: f ? m : p,
                        end: f ? p : m
                    }
                }

                function i(e, t) {
                    var n, r, a = document.selection.createRange().duplicate();
                    "undefined" == typeof t.end ? (n = t.start, r = n) : t.start > t.end ? (n = t.end, r = t.start) : (n = t.start, r = t.end), a.moveToElementText(e), a.moveStart("character", n), a.setEndPoint("EndToStart", a), a.moveEnd("character", r - n), a.select()
                }

                function s(e, t) {
                    if (window.getSelection) {
                        var n = window.getSelection(),
                            r = e[d()].length,
                            a = Math.min(t.start, r),
                            o = "undefined" == typeof t.end ? a : Math.min(t.end, r);
                        if (!n.extend && a > o) {
                            var i = o;
                            o = a, a = i
                        }
                        var s = l(e, a),
                            u = l(e, o);
                        if (s && u) {
                            var c = document.createRange();
                            c.setStart(s.node, s.offset), n.removeAllRanges(), a > o ? (n.addRange(c), n.extend(u.node, u.offset)) : (c.setEnd(u.node, u.offset), n.addRange(c))
                        }
                    }
                }
                var u = e(21),
                    l = e(126),
                    d = e(128),
                    c = u.canUseDOM && "selection" in document && !("getSelection" in window),
                    p = {
                        getOffsets: c ? a : o,
                        setOffsets: c ? i : s
                    };
                t.exports = p
            }, {
                126: 126,
                128: 128,
                21: 21
            }],
            51: [function(e, t, n) {
                "use strict";
                var r = e(11),
                    a = e(35),
                    o = e(42),
                    i = e(27),
                    s = e(114),
                    u = function(e) {};
                i(u.prototype, {
                    construct: function(e) {
                        this._currentElement = e, this._stringText = "" + e, this._rootNodeID = null, this._mountIndex = 0
                    },
                    mountComponent: function(e, t, n) {
                        this._rootNodeID = e;
                        var a = s(this._stringText);
                        return t.renderToStaticMarkup ? a : "<span " + r.createMarkupForID(e) + ">" + a + "</span>"
                    },
                    receiveComponent: function(e, t) {
                        if (e !== this._currentElement) {
                            this._currentElement = e;
                            var n = "" + e;
                            n !== this._stringText && (this._stringText = n, o.BackendIDOperations.updateTextContentByID(this._rootNodeID, n))
                        }
                    },
                    unmountComponent: function() {
                        a.unmountIDFromEnvironment(this._rootNodeID)
                    }
                }), t.exports = u
            }, {
                11: 11,
                114: 114,
                27: 27,
                35: 35,
                42: 42
            }],
            52: [function(e, t, n) {
                "use strict";

                function r() {
                    this.isMounted() && this.forceUpdate()
                }
                var a = e(2),
                    o = e(11),
                    i = e(24),
                    s = e(29),
                    u = e(33),
                    l = e(55),
                    d = e(85),
                    c = e(27),
                    p = e(133),
                    m = (e(150), l.createFactory("textarea")),
                    h = u.createClass({
                        displayName: "ReactDOMTextarea",
                        tagName: "TEXTAREA",
                        mixins: [a, i.Mixin, s],
                        getInitialState: function() {
                            var e = this.props.defaultValue,
                                t = this.props.children;
                            null != t && (p(null == e), Array.isArray(t) && (p(t.length <= 1), t = t[0]), e = "" + t), null == e && (e = "");
                            var n = i.getValue(this);
                            return {
                                initialValue: "" + (null != n ? n : e)
                            }
                        },
                        render: function() {
                            var e = c({}, this.props);
                            return p(null == e.dangerouslySetInnerHTML), e.defaultValue = null, e.value = null, e.onChange = this._handleChange, m(e, this.state.initialValue)
                        },
                        componentDidUpdate: function(e, t, n) {
                            var r = i.getValue(this);
                            if (null != r) {
                                var a = this.getDOMNode();
                                o.setValueForProperty(a, "value", "" + r)
                            }
                        },
                        _handleChange: function(e) {
                            var t, n = i.getOnChange(this);
                            return n && (t = n.call(this, e)), d.asap(r, this), t
                        }
                    });
                t.exports = h
            }, {
                11: 11,
                133: 133,
                150: 150,
                2: 2,
                24: 24,
                27: 27,
                29: 29,
                33: 33,
                55: 55,
                85: 85
            }],
            53: [function(e, t, n) {
                "use strict";

                function r() {
                    this.reinitializeTransaction()
                }
                var a = e(85),
                    o = e(101),
                    i = e(27),
                    s = e(112),
                    u = {
                        initialize: s,
                        close: function() {
                            p.isBatchingUpdates = !1
                        }
                    },
                    l = {
                        initialize: s,
                        close: a.flushBatchedUpdates.bind(a)
                    },
                    d = [l, u];
                i(r.prototype, o.Mixin, {
                    getTransactionWrappers: function() {
                        return d
                    }
                });
                var c = new r,
                    p = {
                        isBatchingUpdates: !1,
                        batchedUpdates: function(e, t, n, r, a) {
                            var o = p.isBatchingUpdates;
                            p.isBatchingUpdates = !0, o ? e(t, n, r, a) : c.perform(e, null, t, n, r, a)
                        }
                    };
                t.exports = p
            }, {
                101: 101,
                112: 112,
                27: 27,
                85: 85
            }],
            54: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return h.createClass({
                        tagName: e.toUpperCase(),
                        render: function() {
                            return new x(e, null, null, null, null, this.props)
                        }
                    })
                }

                function a() {
                    E.EventEmitter.injectReactEventListener(S), E.EventPluginHub.injectEventPluginOrder(u), E.EventPluginHub.injectInstanceHandle(C), E.EventPluginHub.injectMount(P), E.EventPluginHub.injectEventPluginsByName({
                        SimpleEventPlugin: I,
                        EnterLeaveEventPlugin: l,
                        ChangeEventPlugin: i,
                        MobileSafariClickEventPlugin: p,
                        SelectEventPlugin: N,
                        BeforeInputEventPlugin: o
                    }), E.NativeComponent.injectGenericComponentClass(y), E.NativeComponent.injectTextComponentClass(k), E.NativeComponent.injectAutoWrapper(r), E.Class.injectMixin(m), E.NativeComponent.injectComponentClasses({
                        button: g,
                        form: v,
                        iframe: w,
                        img: M,
                        input: D,
                        option: T,
                        select: b,
                        textarea: Y,
                        html: R("html"),
                        head: R("head"),
                        body: R("body")
                    }), E.DOMProperty.injectDOMPropertyConfig(c), E.DOMProperty.injectDOMPropertyConfig(j), E.EmptyComponent.injectEmptyComponent("noscript"), E.Updates.injectReconcileTransaction(H), E.Updates.injectBatchingStrategy(_), E.RootIndex.injectCreateReactRootIndex(d.canUseDOM ? s.createReactRootIndex : A.createReactRootIndex), E.Component.injectEnvironment(f), E.DOMComponent.injectIDOperations(L)
                }
                var o = e(3),
                    i = e(7),
                    s = e(8),
                    u = e(13),
                    l = e(14),
                    d = e(21),
                    c = e(23),
                    p = e(26),
                    m = e(29),
                    h = e(33),
                    f = e(35),
                    _ = e(53),
                    y = e(42),
                    g = e(41),
                    v = e(43),
                    M = e(46),
                    L = e(44),
                    w = e(45),
                    D = e(47),
                    T = e(48),
                    b = e(49),
                    Y = e(52),
                    k = e(51),
                    x = e(55),
                    S = e(60),
                    E = e(62),
                    C = e(64),
                    P = e(68),
                    H = e(78),
                    N = e(87),
                    A = e(88),
                    I = e(89),
                    j = e(86),
                    R = e(109);
                t.exports = {
                    inject: a
                }
            }, {
                109: 109,
                13: 13,
                14: 14,
                21: 21,
                23: 23,
                26: 26,
                29: 29,
                3: 3,
                33: 33,
                35: 35,
                41: 41,
                42: 42,
                43: 43,
                44: 44,
                45: 45,
                46: 46,
                47: 47,
                48: 48,
                49: 49,
                51: 51,
                52: 52,
                53: 53,
                55: 55,
                60: 60,
                62: 62,
                64: 64,
                68: 68,
                7: 7,
                78: 78,
                8: 8,
                86: 86,
                87: 87,
                88: 88,
                89: 89
            }],
            55: [function(e, t, n) {
                "use strict";
                var r = e(38),
                    a = e(39),
                    o = e(27),
                    i = (e(150), {
                        key: !0,
                        ref: !0
                    }),
                    s = function(e, t, n, r, a, o) {
                        this.type = e, this.key = t, this.ref = n, this._owner = r, this._context = a, this.props = o
                    };
                s.prototype = {
                    _isReactElement: !0
                }, s.createElement = function(e, t, n) {
                    var o, u = {},
                        l = null,
                        d = null;
                    if (null != t) {
                        d = void 0 === t.ref ? null : t.ref, l = void 0 === t.key ? null : "" + t.key;
                        for (o in t) t.hasOwnProperty(o) && !i.hasOwnProperty(o) && (u[o] = t[o])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) u.children = n;
                    else if (c > 1) {
                        for (var p = Array(c), m = 0; c > m; m++) p[m] = arguments[m + 2];
                        u.children = p
                    }
                    if (e && e.defaultProps) {
                        var h = e.defaultProps;
                        for (o in h) "undefined" == typeof u[o] && (u[o] = h[o])
                    }
                    return new s(e, l, d, a.current, r.current, u)
                }, s.createFactory = function(e) {
                    var t = s.createElement.bind(null, e);
                    return t.type = e, t
                }, s.cloneAndReplaceProps = function(e, t) {
                    var n = new s(e.type, e.key, e.ref, e._owner, e._context, t);
                    return n
                }, s.cloneElement = function(e, t, n) {
                    var r, u = o({}, e.props),
                        l = e.key,
                        d = e.ref,
                        c = e._owner;
                    if (null != t) {
                        void 0 !== t.ref && (d = t.ref, c = a.current), void 0 !== t.key && (l = "" + t.key);
                        for (r in t) t.hasOwnProperty(r) && !i.hasOwnProperty(r) && (u[r] = t[r])
                    }
                    var p = arguments.length - 2;
                    if (1 === p) u.children = n;
                    else if (p > 1) {
                        for (var m = Array(p), h = 0; p > h; h++) m[h] = arguments[h + 2];
                        u.children = m
                    }
                    return new s(e.type, l, d, c, e._context, u)
                }, s.isValidElement = function(e) {
                    var t = !(!e || !e._isReactElement);
                    return t
                }, t.exports = s
            }, {
                150: 150,
                27: 27,
                38: 38,
                39: 39
            }],
            56: [function(e, t, n) {
                "use strict";

                function r() {
                    if (g.current) {
                        var e = g.current.getName();
                        if (e) return " Check the render method of `" + e + "`."
                    }
                    return ""
                }

                function a(e) {
                    var t = e && e.getPublicInstance();
                    if (!t) return void 0;
                    var n = t.constructor;
                    return n ? n.displayName || n.name || void 0 : void 0
                }

                function o() {
                    var e = g.current;
                    return e && a(e) || void 0
                }

                function i(e, t) {
                    e._store.validated || null != e.key || (e._store.validated = !0, u('Each child in an array or iterator should have a unique "key" prop.', e, t))
                }

                function s(e, t, n) {
                    T.test(e) && u("Child objects should have non-numeric keys so ordering is preserved.", t, n)
                }

                function u(e, t, n) {
                    var r = o(),
                        i = "string" == typeof n ? n : n.displayName || n.name,
                        s = r || i,
                        u = w[e] || (w[e] = {});
                    if (!u.hasOwnProperty(s)) {
                        u[s] = !0;
                        var l = "";
                        if (t && t._owner && t._owner !== g.current) {
                            var d = a(t._owner);
                            l = " It was passed a child from " + d + "."
                        }
                    }
                }

                function l(e, t) {
                    if (Array.isArray(e))
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            f.isValidElement(r) && i(r, t)
                        } else if (f.isValidElement(e)) e._store.validated = !0;
                        else if (e) {
                        var a = M(e);
                        if (a) {
                            if (a !== e.entries)
                                for (var o, u = a.call(e); !(o = u.next()).done;) f.isValidElement(o.value) && i(o.value, t)
                        } else if ("object" == typeof e) {
                            var l = _.extractIfFragment(e);
                            for (var d in l) l.hasOwnProperty(d) && s(d, l[d], t)
                        }
                    }
                }

                function d(e, t, n, a) {
                    for (var o in t)
                        if (t.hasOwnProperty(o)) {
                            var i;
                            try {
                                L("function" == typeof t[o]), i = t[o](n, o, e, a)
                            } catch (s) {
                                i = s
                            }
                            i instanceof Error && !(i.message in D) && (D[i.message] = !0, r(this))
                        }
                }

                function c(e, t) {
                    var n = t.type,
                        r = "string" == typeof n ? n : n.displayName,
                        a = t._owner ? t._owner.getPublicInstance().constructor.displayName : null,
                        o = e + "|" + r + "|" + a;
                    if (!b.hasOwnProperty(o)) {
                        b[o] = !0;
                        var i = "";
                        r && (i = " <" + r + " />");
                        var s = "";
                        a && (s = " The element was created by " + a + ".")
                    }
                }

                function p(e, t) {
                    return e !== e ? t !== t : 0 === e && 0 === t ? 1 / e === 1 / t : e === t
                }

                function m(e) {
                    if (e._store) {
                        var t = e._store.originalProps,
                            n = e.props;
                        for (var r in n) n.hasOwnProperty(r) && (t.hasOwnProperty(r) && p(t[r], n[r]) || (c(r, e), t[r] = n[r]))
                    }
                }

                function h(e) {
                    if (null != e.type) {
                        var t = v.getComponentClassForElement(e),
                            n = t.displayName || t.name;
                        t.propTypes && d(n, t.propTypes, e.props, y.prop), "function" == typeof t.getDefaultProps
                    }
                }
                var f = e(55),
                    _ = e(61),
                    y = e(75),
                    g = (e(74), e(39)),
                    v = e(71),
                    M = e(124),
                    L = e(133),
                    w = (e(150), {}),
                    D = {},
                    T = /^\d+$/,
                    b = {},
                    Y = {
                        checkAndWarnForMutatedProps: m,
                        createElement: function(e, t, n) {
                            var r = f.createElement.apply(this, arguments);
                            if (null == r) return r;
                            for (var a = 2; a < arguments.length; a++) l(arguments[a], e);
                            return h(r), r
                        },
                        createFactory: function(e) {
                            var t = Y.createElement.bind(null, e);
                            return t.type = e, t
                        },
                        cloneElement: function(e, t, n) {
                            for (var r = f.cloneElement.apply(this, arguments), a = 2; a < arguments.length; a++) l(arguments[a], r.type);
                            return h(r), r
                        }
                    };
                t.exports = Y
            }, {
                124: 124,
                133: 133,
                150: 150,
                39: 39,
                55: 55,
                61: 61,
                71: 71,
                74: 74,
                75: 75
            }],
            57: [function(e, t, n) {
                "use strict";

                function r(e) {
                    d[e] = !0
                }

                function a(e) {
                    delete d[e]
                }

                function o(e) {
                    return !!d[e]
                }
                var i, s = e(55),
                    u = e(65),
                    l = e(133),
                    d = {},
                    c = {
                        injectEmptyComponent: function(e) {
                            i = s.createFactory(e)
                        }
                    },
                    p = function() {};
                p.prototype.componentDidMount = function() {
                    var e = u.get(this);
                    e && r(e._rootNodeID)
                }, p.prototype.componentWillUnmount = function() {
                    var e = u.get(this);
                    e && a(e._rootNodeID)
                }, p.prototype.render = function() {
                    return l(i), i()
                };
                var m = s.createElement(p),
                    h = {
                        emptyElement: m,
                        injection: c,
                        isNullComponentID: o
                    };
                t.exports = h
            }, {
                133: 133,
                55: 55,
                65: 65
            }],
            58: [function(e, t, n) {
                "use strict";
                var r = {
                    guard: function(e, t) {
                        return e
                    }
                };
                t.exports = r
            }, {}],
            59: [function(e, t, n) {
                "use strict";

                function r(e) {
                    a.enqueueEvents(e), a.processEventQueue()
                }
                var a = e(17),
                    o = {
                        handleTopLevel: function(e, t, n, o) {
                            var i = a.extractEvents(e, t, n, o);
                            r(i)
                        }
                    };
                t.exports = o
            }, {
                17: 17
            }],
            60: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = c.getID(e),
                        n = d.getReactRootIDFromNodeID(t),
                        r = c.findReactContainerForID(n),
                        a = c.getFirstReactDOM(r);
                    return a
                }

                function a(e, t) {
                    this.topLevelType = e, this.nativeEvent = t, this.ancestors = []
                }

                function o(e) {
                    for (var t = c.getFirstReactDOM(h(e.nativeEvent)) || window, n = t; n;) e.ancestors.push(n), n = r(n);
                    for (var a = 0, o = e.ancestors.length; o > a; a++) {
                        t = e.ancestors[a];
                        var i = c.getID(t) || "";
                        _._handleTopLevel(e.topLevelType, t, i, e.nativeEvent)
                    }
                }

                function i(e) {
                    var t = f(window);
                    e(t)
                }
                var s = e(16),
                    u = e(21),
                    l = e(28),
                    d = e(64),
                    c = e(68),
                    p = e(85),
                    m = e(27),
                    h = e(123),
                    f = e(129);
                m(a.prototype, {
                    destructor: function() {
                        this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
                    }
                }), l.addPoolingTo(a, l.twoArgumentPooler);
                var _ = {
                    _enabled: !0,
                    _handleTopLevel: null,
                    WINDOW_HANDLE: u.canUseDOM ? window : null,
                    setHandleTopLevel: function(e) {
                        _._handleTopLevel = e
                    },
                    setEnabled: function(e) {
                        _._enabled = !!e
                    },
                    isEnabled: function() {
                        return _._enabled
                    },
                    trapBubbledEvent: function(e, t, n) {
                        var r = n;
                        return r ? s.listen(r, t, _.dispatchEvent.bind(null, e)) : null
                    },
                    trapCapturedEvent: function(e, t, n) {
                        var r = n;
                        return r ? s.capture(r, t, _.dispatchEvent.bind(null, e)) : null
                    },
                    monitorScrollValue: function(e) {
                        var t = i.bind(null, e);
                        s.listen(window, "scroll", t)
                    },
                    dispatchEvent: function(e, t) {
                        if (_._enabled) {
                            var n = a.getPooled(e, t);
                            try {
                                p.batchedUpdates(o, n)
                            } finally {
                                a.release(n)
                            }
                        }
                    }
                };
                t.exports = _
            }, {
                123: 123,
                129: 129,
                16: 16,
                21: 21,
                27: 27,
                28: 28,
                64: 64,
                68: 68,
                85: 85
            }],
            61: [function(e, t, n) {
                "use strict";
                var r = (e(55), e(150), {
                    create: function(e) {
                        return e
                    },
                    extract: function(e) {
                        return e
                    },
                    extractIfFragment: function(e) {
                        return e
                    }
                });
                t.exports = r
            }, {
                150: 150,
                55: 55
            }],
            62: [function(e, t, n) {
                "use strict";
                var r = e(10),
                    a = e(17),
                    o = e(36),
                    i = e(33),
                    s = e(57),
                    u = e(30),
                    l = e(71),
                    d = e(42),
                    c = e(73),
                    p = e(81),
                    m = e(85),
                    h = {
                        Component: o.injection,
                        Class: i.injection,
                        DOMComponent: d.injection,
                        DOMProperty: r.injection,
                        EmptyComponent: s.injection,
                        EventPluginHub: a.injection,
                        EventEmitter: u.injection,
                        NativeComponent: l.injection,
                        Perf: c.injection,
                        RootIndex: p.injection,
                        Updates: m.injection
                    };
                t.exports = h
            }, {
                10: 10,
                17: 17,
                30: 30,
                33: 33,
                36: 36,
                42: 42,
                57: 57,
                71: 71,
                73: 73,
                81: 81,
                85: 85
            }],
            63: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return o(document.documentElement, e)
                }
                var a = e(50),
                    o = e(107),
                    i = e(117),
                    s = e(119),
                    u = {
                        hasSelectionCapabilities: function(e) {
                            return e && ("INPUT" === e.nodeName && "text" === e.type || "TEXTAREA" === e.nodeName || "true" === e.contentEditable)
                        },
                        getSelectionInformation: function() {
                            var e = s();
                            return {
                                focusedElem: e,
                                selectionRange: u.hasSelectionCapabilities(e) ? u.getSelection(e) : null
                            }
                        },
                        restoreSelection: function(e) {
                            var t = s(),
                                n = e.focusedElem,
                                a = e.selectionRange;
                            t !== n && r(n) && (u.hasSelectionCapabilities(n) && u.setSelection(n, a), i(n))
                        },
                        getSelection: function(e) {
                            var t;
                            if ("selectionStart" in e) t = {
                                start: e.selectionStart,
                                end: e.selectionEnd
                            };
                            else if (document.selection && "INPUT" === e.nodeName) {
                                var n = document.selection.createRange();
                                n.parentElement() === e && (t = {
                                    start: -n.moveStart("character", -e.value.length),
                                    end: -n.moveEnd("character", -e.value.length)
                                })
                            } else t = a.getOffsets(e);
                            return t || {
                                start: 0,
                                end: 0
                            }
                        },
                        setSelection: function(e, t) {
                            var n = t.start,
                                r = t.end;
                            if ("undefined" == typeof r && (r = n), "selectionStart" in e) e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length);
                            else if (document.selection && "INPUT" === e.nodeName) {
                                var o = e.createTextRange();
                                o.collapse(!0), o.moveStart("character", n), o.moveEnd("character", r - n), o.select()
                            } else a.setOffsets(e, t)
                        }
                    };
                t.exports = u
            }, {
                107: 107,
                117: 117,
                119: 119,
                50: 50
            }],
            64: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return m + e.toString(36)
                }

                function a(e, t) {
                    return e.charAt(t) === m || t === e.length
                }

                function o(e) {
                    return "" === e || e.charAt(0) === m && e.charAt(e.length - 1) !== m
                }

                function i(e, t) {
                    return 0 === t.indexOf(e) && a(t, e.length)
                }

                function s(e) {
                    return e ? e.substr(0, e.lastIndexOf(m)) : ""
                }

                function u(e, t) {
                    if (p(o(e) && o(t)), p(i(e, t)), e === t) return e;
                    var n, r = e.length + h;
                    for (n = r; n < t.length && !a(t, n); n++);
                    return t.substr(0, n)
                }

                function l(e, t) {
                    var n = Math.min(e.length, t.length);
                    if (0 === n) return "";
                    for (var r = 0, i = 0; n >= i; i++)
                        if (a(e, i) && a(t, i)) r = i;
                        else if (e.charAt(i) !== t.charAt(i)) break;
                    var s = e.substr(0, r);
                    return p(o(s)), s
                }

                function d(e, t, n, r, a, o) {
                    e = e || "", t = t || "", p(e !== t);
                    var l = i(t, e);
                    p(l || i(e, t));
                    for (var d = 0, c = l ? s : u, m = e;; m = c(m, t)) {
                        var h;
                        if (a && m === e || o && m === t || (h = n(m, l, r)), h === !1 || m === t) break;
                        p(d++ < f)
                    }
                }
                var c = e(81),
                    p = e(133),
                    m = ".",
                    h = m.length,
                    f = 100,
                    _ = {
                        createReactRootID: function() {
                            return r(c.createReactRootIndex())
                        },
                        createReactID: function(e, t) {
                            return e + t
                        },
                        getReactRootIDFromNodeID: function(e) {
                            if (e && e.charAt(0) === m && e.length > 1) {
                                var t = e.indexOf(m, 1);
                                return t > -1 ? e.substr(0, t) : e
                            }
                            return null
                        },
                        traverseEnterLeave: function(e, t, n, r, a) {
                            var o = l(e, t);
                            o !== e && d(e, o, n, r, !1, !0), o !== t && d(o, t, n, a, !0, !1)
                        },
                        traverseTwoPhase: function(e, t, n) {
                            e && (d("", e, t, n, !0, !1), d(e, "", t, n, !1, !0))
                        },
                        traverseAncestors: function(e, t, n) {
                            d("", e, t, n, !0, !1)
                        },
                        _getFirstCommonAncestorID: l,
                        _getNextDescendantID: u,
                        isAncestorIDOf: i,
                        SEPARATOR: m
                    };
                t.exports = _
            }, {
                133: 133,
                81: 81
            }],
            65: [function(e, t, n) {
                "use strict";
                var r = {
                    remove: function(e) {
                        e._reactInternalInstance = void 0
                    },
                    get: function(e) {
                        return e._reactInternalInstance
                    },
                    has: function(e) {
                        return void 0 !== e._reactInternalInstance
                    },
                    set: function(e, t) {
                        e._reactInternalInstance = t
                    }
                };
                t.exports = r
            }, {}],
            66: [function(e, t, n) {
                "use strict";
                var r = {
                    currentlyMountingInstance: null,
                    currentlyUnmountingInstance: null
                };
                t.exports = r
            }, {}],
            67: [function(e, t, n) {
                "use strict";
                var r = e(104),
                    a = {
                        CHECKSUM_ATTR_NAME: "data-react-checksum",
                        addChecksumToMarkup: function(e) {
                            var t = r(e);
                            return e.replace(">", " " + a.CHECKSUM_ATTR_NAME + '="' + t + '">')
                        },
                        canReuseMarkup: function(e, t) {
                            var n = t.getAttribute(a.CHECKSUM_ATTR_NAME);
                            n = n && parseInt(n, 10);
                            var o = r(e);
                            return o === n
                        }
                    };
                t.exports = a
            }, {
                104: 104
            }],
            68: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    for (var n = Math.min(e.length, t.length), r = 0; n > r; r++)
                        if (e.charAt(r) !== t.charAt(r)) return r;
                    return e.length === t.length ? -1 : n
                }

                function a(e) {
                    var t = S(e);
                    return t && z.getID(t)
                }

                function o(e) {
                    var t = i(e);
                    if (t)
                        if (I.hasOwnProperty(t)) {
                            var n = I[t];
                            n !== e && (C(!d(n, t)), I[t] = e)
                        } else I[t] = e;
                    return t
                }

                function i(e) {
                    return e && e.getAttribute && e.getAttribute(A) || ""
                }

                function s(e, t) {
                    var n = i(e);
                    n !== t && delete I[n], e.setAttribute(A, t), I[t] = e
                }

                function u(e) {
                    return I.hasOwnProperty(e) && d(I[e], e) || (I[e] = z.findReactNodeByID(e)), I[e]
                }

                function l(e) {
                    var t = L.get(e)._rootNodeID;
                    return v.isNullComponentID(t) ? null : (I.hasOwnProperty(t) && d(I[t], t) || (I[t] = z.findReactNodeByID(t)), I[t])
                }

                function d(e, t) {
                    if (e) {
                        C(i(e) === t);
                        var n = z.findReactContainerForID(t);
                        if (n && x(n, e)) return !0
                    }
                    return !1
                }

                function c(e) {
                    delete I[e]
                }

                function p(e) {
                    var t = I[e];
                    return t && d(t, e) ? void(U = t) : !1
                }

                function m(e) {
                    U = null, M.traverseAncestors(e, p);
                    var t = U;
                    return U = null, t
                }

                function h(e, t, n, r, a) {
                    var o = T.mountComponent(e, t, r, k);
                    e._isTopLevel = !0, z._mountImageIntoNode(o, n, a)
                }

                function f(e, t, n, r) {
                    var a = Y.ReactReconcileTransaction.getPooled();
                    a.perform(h, null, e, t, n, a, r), Y.ReactReconcileTransaction.release(a)
                }
                var _ = e(10),
                    y = e(30),
                    g = (e(39), e(55)),
                    v = (e(56), e(57)),
                    M = e(64),
                    L = e(65),
                    w = e(67),
                    D = e(73),
                    T = e(79),
                    b = e(84),
                    Y = e(85),
                    k = e(113),
                    x = e(107),
                    S = e(127),
                    E = e(132),
                    C = e(133),
                    P = e(144),
                    H = e(147),
                    N = (e(150), M.SEPARATOR),
                    A = _.ID_ATTRIBUTE_NAME,
                    I = {},
                    j = 1,
                    R = 9,
                    O = {},
                    F = {},
                    W = [],
                    U = null,
                    z = {
                        _instancesByReactRootID: O,
                        scrollMonitor: function(e, t) {
                            t()
                        },
                        _updateRootComponent: function(e, t, n, r) {
                            return z.scrollMonitor(n, function() {
                                b.enqueueElementInternal(e, t), r && b.enqueueCallbackInternal(e, r)
                            }), e
                        },
                        _registerComponent: function(e, t) {
                            C(t && (t.nodeType === j || t.nodeType === R)), y.ensureScrollValueMonitoring();
                            var n = z.registerContainer(t);
                            return O[n] = e, n
                        },
                        _renderNewRootComponent: function(e, t, n) {
                            var r = E(e, null),
                                a = z._registerComponent(r, t);
                            return Y.batchedUpdates(f, r, a, t, n), r
                        },
                        render: function(e, t, n) {
                            C(g.isValidElement(e));
                            var r = O[a(t)];
                            if (r) {
                                var o = r._currentElement;
                                if (H(o, e)) return z._updateRootComponent(r, e, t, n).getPublicInstance();
                                z.unmountComponentAtNode(t)
                            }
                            var i = S(t),
                                s = i && z.isRenderedByReact(i),
                                u = s && !r,
                                l = z._renderNewRootComponent(e, t, u).getPublicInstance();
                            return n && n.call(l), l
                        },
                        constructAndRenderComponent: function(e, t, n) {
                            var r = g.createElement(e, t);
                            return z.render(r, n)
                        },
                        constructAndRenderComponentByID: function(e, t, n) {
                            var r = document.getElementById(n);
                            return C(r), z.constructAndRenderComponent(e, t, r)
                        },
                        registerContainer: function(e) {
                            var t = a(e);
                            return t && (t = M.getReactRootIDFromNodeID(t)), t || (t = M.createReactRootID()), F[t] = e, t
                        },
                        unmountComponentAtNode: function(e) {
                            C(e && (e.nodeType === j || e.nodeType === R));
                            var t = a(e),
                                n = O[t];
                            return n ? (z.unmountComponentFromNode(n, e), delete O[t], delete F[t], !0) : !1
                        },
                        unmountComponentFromNode: function(e, t) {
                            for (T.unmountComponent(e), t.nodeType === R && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
                        },
                        findReactContainerForID: function(e) {
                            var t = M.getReactRootIDFromNodeID(e),
                                n = F[t];
                            return n
                        },
                        findReactNodeByID: function(e) {
                            var t = z.findReactContainerForID(e);
                            return z.findComponentRoot(t, e)
                        },
                        isRenderedByReact: function(e) {
                            if (1 !== e.nodeType) return !1;
                            var t = z.getID(e);
                            return t ? t.charAt(0) === N : !1;
                        },
                        getFirstReactDOM: function(e) {
                            for (var t = e; t && t.parentNode !== t;) {
                                if (z.isRenderedByReact(t)) return t;
                                t = t.parentNode
                            }
                            return null
                        },
                        findComponentRoot: function(e, t) {
                            var n = W,
                                r = 0,
                                a = m(t) || e;
                            for (n[0] = a.firstChild, n.length = 1; r < n.length;) {
                                for (var o, i = n[r++]; i;) {
                                    var s = z.getID(i);
                                    s ? t === s ? o = i : M.isAncestorIDOf(s, t) && (n.length = r = 0, n.push(i.firstChild)) : n.push(i.firstChild), i = i.nextSibling
                                }
                                if (o) return n.length = 0, o
                            }
                            n.length = 0, C(!1)
                        },
                        _mountImageIntoNode: function(e, t, n) {
                            if (C(t && (t.nodeType === j || t.nodeType === R)), n) {
                                var a = S(t);
                                if (w.canReuseMarkup(e, a)) return;
                                var o = a.getAttribute(w.CHECKSUM_ATTR_NAME);
                                a.removeAttribute(w.CHECKSUM_ATTR_NAME);
                                var i = a.outerHTML;
                                a.setAttribute(w.CHECKSUM_ATTR_NAME, o);
                                var s = r(e, i);
                                " (client) " + e.substring(s - 20, s + 20) + "\n (server) " + i.substring(s - 20, s + 20), C(t.nodeType !== R)
                            }
                            C(t.nodeType !== R), P(t, e)
                        },
                        getReactRootID: a,
                        getID: o,
                        setID: s,
                        getNode: u,
                        getNodeFromInstance: l,
                        purgeID: c
                    };
                D.measureMethods(z, "ReactMount", {
                    _renderNewRootComponent: "_renderNewRootComponent",
                    _mountImageIntoNode: "_mountImageIntoNode"
                }), t.exports = z
            }, {
                10: 10,
                107: 107,
                113: 113,
                127: 127,
                132: 132,
                133: 133,
                144: 144,
                147: 147,
                150: 150,
                30: 30,
                39: 39,
                55: 55,
                56: 56,
                57: 57,
                64: 64,
                65: 65,
                67: 67,
                73: 73,
                79: 79,
                84: 84,
                85: 85
            }],
            69: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    h.push({
                        parentID: e,
                        parentNode: null,
                        type: d.INSERT_MARKUP,
                        markupIndex: f.push(t) - 1,
                        textContent: null,
                        fromIndex: null,
                        toIndex: n
                    })
                }

                function a(e, t, n) {
                    h.push({
                        parentID: e,
                        parentNode: null,
                        type: d.MOVE_EXISTING,
                        markupIndex: null,
                        textContent: null,
                        fromIndex: t,
                        toIndex: n
                    })
                }

                function o(e, t) {
                    h.push({
                        parentID: e,
                        parentNode: null,
                        type: d.REMOVE_NODE,
                        markupIndex: null,
                        textContent: null,
                        fromIndex: t,
                        toIndex: null
                    })
                }

                function i(e, t) {
                    h.push({
                        parentID: e,
                        parentNode: null,
                        type: d.TEXT_CONTENT,
                        markupIndex: null,
                        textContent: t,
                        fromIndex: null,
                        toIndex: null
                    })
                }

                function s() {
                    h.length && (l.processChildrenUpdates(h, f), u())
                }

                function u() {
                    h.length = 0, f.length = 0
                }
                var l = e(36),
                    d = e(70),
                    c = e(79),
                    p = e(31),
                    m = 0,
                    h = [],
                    f = [],
                    _ = {
                        Mixin: {
                            mountChildren: function(e, t, n) {
                                var r = p.instantiateChildren(e, t, n);
                                this._renderedChildren = r;
                                var a = [],
                                    o = 0;
                                for (var i in r)
                                    if (r.hasOwnProperty(i)) {
                                        var s = r[i],
                                            u = this._rootNodeID + i,
                                            l = c.mountComponent(s, u, t, n);
                                        s._mountIndex = o, a.push(l), o++
                                    }
                                return a
                            },
                            updateTextContent: function(e) {
                                m++;
                                var t = !0;
                                try {
                                    var n = this._renderedChildren;
                                    p.unmountChildren(n);
                                    for (var r in n) n.hasOwnProperty(r) && this._unmountChildByName(n[r], r);
                                    this.setTextContent(e), t = !1
                                } finally {
                                    m--, m || (t ? u() : s())
                                }
                            },
                            updateChildren: function(e, t, n) {
                                m++;
                                var r = !0;
                                try {
                                    this._updateChildren(e, t, n), r = !1
                                } finally {
                                    m--, m || (r ? u() : s())
                                }
                            },
                            _updateChildren: function(e, t, n) {
                                var r = this._renderedChildren,
                                    a = p.updateChildren(r, e, t, n);
                                if (this._renderedChildren = a, a || r) {
                                    var o, i = 0,
                                        s = 0;
                                    for (o in a)
                                        if (a.hasOwnProperty(o)) {
                                            var u = r && r[o],
                                                l = a[o];
                                            u === l ? (this.moveChild(u, s, i), i = Math.max(u._mountIndex, i), u._mountIndex = s) : (u && (i = Math.max(u._mountIndex, i), this._unmountChildByName(u, o)), this._mountChildByNameAtIndex(l, o, s, t, n)), s++
                                        }
                                    for (o in r) !r.hasOwnProperty(o) || a && a.hasOwnProperty(o) || this._unmountChildByName(r[o], o)
                                }
                            },
                            unmountChildren: function() {
                                var e = this._renderedChildren;
                                p.unmountChildren(e), this._renderedChildren = null
                            },
                            moveChild: function(e, t, n) {
                                e._mountIndex < n && a(this._rootNodeID, e._mountIndex, t)
                            },
                            createChild: function(e, t) {
                                r(this._rootNodeID, t, e._mountIndex)
                            },
                            removeChild: function(e) {
                                o(this._rootNodeID, e._mountIndex)
                            },
                            setTextContent: function(e) {
                                i(this._rootNodeID, e)
                            },
                            _mountChildByNameAtIndex: function(e, t, n, r, a) {
                                var o = this._rootNodeID + t,
                                    i = c.mountComponent(e, o, r, a);
                                e._mountIndex = n, this.createChild(e, i)
                            },
                            _unmountChildByName: function(e, t) {
                                this.removeChild(e), e._mountIndex = null
                            }
                        }
                    };
                t.exports = _
            }, {
                31: 31,
                36: 36,
                70: 70,
                79: 79
            }],
            70: [function(e, t, n) {
                "use strict";
                var r = e(138),
                    a = r({
                        INSERT_MARKUP: null,
                        MOVE_EXISTING: null,
                        REMOVE_NODE: null,
                        TEXT_CONTENT: null
                    });
                t.exports = a
            }, {
                138: 138
            }],
            71: [function(e, t, n) {
                "use strict";

                function r(e) {
                    if ("function" == typeof e.type) return e.type;
                    var t = e.type,
                        n = c[t];
                    return null == n && (c[t] = n = l(t)), n
                }

                function a(e) {
                    return u(d), new d(e.type, e.props)
                }

                function o(e) {
                    return new p(e)
                }

                function i(e) {
                    return e instanceof p
                }
                var s = e(27),
                    u = e(133),
                    l = null,
                    d = null,
                    c = {},
                    p = null,
                    m = {
                        injectGenericComponentClass: function(e) {
                            d = e
                        },
                        injectTextComponentClass: function(e) {
                            p = e
                        },
                        injectComponentClasses: function(e) {
                            s(c, e)
                        },
                        injectAutoWrapper: function(e) {
                            l = e
                        }
                    },
                    h = {
                        getComponentClassForElement: r,
                        createInternalComponent: a,
                        createInstanceForText: o,
                        isTextComponent: i,
                        injection: m
                    };
                t.exports = h
            }, {
                133: 133,
                27: 27
            }],
            72: [function(e, t, n) {
                "use strict";
                var r = e(133),
                    a = {
                        isValidOwner: function(e) {
                            return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
                        },
                        addComponentAsRefTo: function(e, t, n) {
                            r(a.isValidOwner(n)), n.attachRef(t, e)
                        },
                        removeComponentAsRefFrom: function(e, t, n) {
                            r(a.isValidOwner(n)), n.getPublicInstance().refs[t] === e.getPublicInstance() && n.detachRef(t)
                        }
                    };
                t.exports = a
            }, {
                133: 133
            }],
            73: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    return n
                }
                var a = {
                    enableMeasure: !1,
                    storedMeasure: r,
                    measureMethods: function(e, t, n) {},
                    measure: function(e, t, n) {
                        return n
                    },
                    injection: {
                        injectMeasure: function(e) {
                            a.storedMeasure = e
                        }
                    }
                };
                t.exports = a
            }, {}],
            74: [function(e, t, n) {
                "use strict";
                var r = {};
                t.exports = r
            }, {}],
            75: [function(e, t, n) {
                "use strict";
                var r = e(138),
                    a = r({
                        prop: null,
                        context: null,
                        childContext: null
                    });
                t.exports = a
            }, {
                138: 138
            }],
            76: [function(e, t, n) {
                "use strict";

                function r(e) {
                    function t(t, n, r, a, o) {
                        if (a = a || L, null == n[r]) {
                            var i = v[o];
                            return t ? new Error("Required " + i + " `" + r + "` was not specified in " + ("`" + a + "`.")) : null
                        }
                        return e(n, r, a, o)
                    }
                    var n = t.bind(null, !1);
                    return n.isRequired = t.bind(null, !0), n
                }

                function a(e) {
                    function t(t, n, r, a) {
                        var o = t[n],
                            i = f(o);
                        if (i !== e) {
                            var s = v[a],
                                u = _(o);
                            return new Error("Invalid " + s + " `" + n + "` of type `" + u + "` " + ("supplied to `" + r + "`, expected `" + e + "`."))
                        }
                        return null
                    }
                    return r(t)
                }

                function o() {
                    return r(M.thatReturns(null))
                }

                function i(e) {
                    function t(t, n, r, a) {
                        var o = t[n];
                        if (!Array.isArray(o)) {
                            var i = v[a],
                                s = f(o);
                            return new Error("Invalid " + i + " `" + n + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected an array."))
                        }
                        for (var u = 0; u < o.length; u++) {
                            var l = e(o, u, r, a);
                            if (l instanceof Error) return l
                        }
                        return null
                    }
                    return r(t)
                }

                function s() {
                    function e(e, t, n, r) {
                        if (!y.isValidElement(e[t])) {
                            var a = v[r];
                            return new Error("Invalid " + a + " `" + t + "` supplied to " + ("`" + n + "`, expected a ReactElement."))
                        }
                        return null
                    }
                    return r(e)
                }

                function u(e) {
                    function t(t, n, r, a) {
                        if (!(t[n] instanceof e)) {
                            var o = v[a],
                                i = e.name || L;
                            return new Error("Invalid " + o + " `" + n + "` supplied to " + ("`" + r + "`, expected instance of `" + i + "`."))
                        }
                        return null
                    }
                    return r(t)
                }

                function l(e) {
                    function t(t, n, r, a) {
                        for (var o = t[n], i = 0; i < e.length; i++)
                            if (o === e[i]) return null;
                        var s = v[a],
                            u = JSON.stringify(e);
                        return new Error("Invalid " + s + " `" + n + "` of value `" + o + "` " + ("supplied to `" + r + "`, expected one of " + u + "."))
                    }
                    return r(t)
                }

                function d(e) {
                    function t(t, n, r, a) {
                        var o = t[n],
                            i = f(o);
                        if ("object" !== i) {
                            var s = v[a];
                            return new Error("Invalid " + s + " `" + n + "` of type " + ("`" + i + "` supplied to `" + r + "`, expected an object."))
                        }
                        for (var u in o)
                            if (o.hasOwnProperty(u)) {
                                var l = e(o, u, r, a);
                                if (l instanceof Error) return l
                            }
                        return null
                    }
                    return r(t)
                }

                function c(e) {
                    function t(t, n, r, a) {
                        for (var o = 0; o < e.length; o++) {
                            var i = e[o];
                            if (null == i(t, n, r, a)) return null
                        }
                        var s = v[a];
                        return new Error("Invalid " + s + " `" + n + "` supplied to " + ("`" + r + "`."))
                    }
                    return r(t)
                }

                function p() {
                    function e(e, t, n, r) {
                        if (!h(e[t])) {
                            var a = v[r];
                            return new Error("Invalid " + a + " `" + t + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
                        }
                        return null
                    }
                    return r(e)
                }

                function m(e) {
                    function t(t, n, r, a) {
                        var o = t[n],
                            i = f(o);
                        if ("object" !== i) {
                            var s = v[a];
                            return new Error("Invalid " + s + " `" + n + "` of type `" + i + "` " + ("supplied to `" + r + "`, expected `object`."))
                        }
                        for (var u in e) {
                            var l = e[u];
                            if (l) {
                                var d = l(o, u, r, a);
                                if (d) return d
                            }
                        }
                        return null
                    }
                    return r(t)
                }

                function h(e) {
                    switch (typeof e) {
                        case "number":
                        case "string":
                        case "undefined":
                            return !0;
                        case "boolean":
                            return !e;
                        case "object":
                            if (Array.isArray(e)) return e.every(h);
                            if (null === e || y.isValidElement(e)) return !0;
                            e = g.extractIfFragment(e);
                            for (var t in e)
                                if (!h(e[t])) return !1;
                            return !0;
                        default:
                            return !1
                    }
                }

                function f(e) {
                    var t = typeof e;
                    return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t
                }

                function _(e) {
                    var t = f(e);
                    if ("object" === t) {
                        if (e instanceof Date) return "date";
                        if (e instanceof RegExp) return "regexp"
                    }
                    return t
                }
                var y = e(55),
                    g = e(61),
                    v = e(74),
                    M = e(112),
                    L = "<<anonymous>>",
                    w = s(),
                    D = p(),
                    T = {
                        array: a("array"),
                        bool: a("boolean"),
                        func: a("function"),
                        number: a("number"),
                        object: a("object"),
                        string: a("string"),
                        any: o(),
                        arrayOf: i,
                        element: w,
                        instanceOf: u,
                        node: D,
                        objectOf: d,
                        oneOf: l,
                        oneOfType: c,
                        shape: m
                    };
                t.exports = T
            }, {
                112: 112,
                55: 55,
                61: 61,
                74: 74
            }],
            77: [function(e, t, n) {
                "use strict";

                function r() {
                    this.listenersToPut = []
                }
                var a = e(28),
                    o = e(30),
                    i = e(27);
                i(r.prototype, {
                    enqueuePutListener: function(e, t, n) {
                        this.listenersToPut.push({
                            rootNodeID: e,
                            propKey: t,
                            propValue: n
                        })
                    },
                    putListeners: function() {
                        for (var e = 0; e < this.listenersToPut.length; e++) {
                            var t = this.listenersToPut[e];
                            o.putListener(t.rootNodeID, t.propKey, t.propValue)
                        }
                    },
                    reset: function() {
                        this.listenersToPut.length = 0
                    },
                    destructor: function() {
                        this.reset()
                    }
                }), a.addPoolingTo(r), t.exports = r
            }, {
                27: 27,
                28: 28,
                30: 30
            }],
            78: [function(e, t, n) {
                "use strict";

                function r() {
                    this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = a.getPooled(null), this.putListenerQueue = u.getPooled()
                }
                var a = e(6),
                    o = e(28),
                    i = e(30),
                    s = e(63),
                    u = e(77),
                    l = e(101),
                    d = e(27),
                    c = {
                        initialize: s.getSelectionInformation,
                        close: s.restoreSelection
                    },
                    p = {
                        initialize: function() {
                            var e = i.isEnabled();
                            return i.setEnabled(!1), e
                        },
                        close: function(e) {
                            i.setEnabled(e)
                        }
                    },
                    m = {
                        initialize: function() {
                            this.reactMountReady.reset()
                        },
                        close: function() {
                            this.reactMountReady.notifyAll()
                        }
                    },
                    h = {
                        initialize: function() {
                            this.putListenerQueue.reset()
                        },
                        close: function() {
                            this.putListenerQueue.putListeners()
                        }
                    },
                    f = [h, c, p, m],
                    _ = {
                        getTransactionWrappers: function() {
                            return f
                        },
                        getReactMountReady: function() {
                            return this.reactMountReady
                        },
                        getPutListenerQueue: function() {
                            return this.putListenerQueue
                        },
                        destructor: function() {
                            a.release(this.reactMountReady), this.reactMountReady = null, u.release(this.putListenerQueue), this.putListenerQueue = null
                        }
                    };
                d(r.prototype, l.Mixin, _), o.addPoolingTo(r), t.exports = r
            }, {
                101: 101,
                27: 27,
                28: 28,
                30: 30,
                6: 6,
                63: 63,
                77: 77
            }],
            79: [function(e, t, n) {
                "use strict";

                function r() {
                    a.attachRefs(this, this._currentElement)
                }
                var a = e(80),
                    o = (e(56), {
                        mountComponent: function(e, t, n, a) {
                            var o = e.mountComponent(t, n, a);
                            return n.getReactMountReady().enqueue(r, e), o
                        },
                        unmountComponent: function(e) {
                            a.detachRefs(e, e._currentElement), e.unmountComponent()
                        },
                        receiveComponent: function(e, t, n, o) {
                            var i = e._currentElement;
                            if (t !== i || null == t._owner) {
                                var s = a.shouldUpdateRefs(i, t);
                                s && a.detachRefs(e, i), e.receiveComponent(t, n, o), s && n.getReactMountReady().enqueue(r, e)
                            }
                        },
                        performUpdateIfNecessary: function(e, t) {
                            e.performUpdateIfNecessary(t)
                        }
                    });
                t.exports = o
            }, {
                56: 56,
                80: 80
            }],
            80: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    "function" == typeof e ? e(t.getPublicInstance()) : o.addComponentAsRefTo(t, e, n)
                }

                function a(e, t, n) {
                    "function" == typeof e ? e(null) : o.removeComponentAsRefFrom(t, e, n)
                }
                var o = e(72),
                    i = {};
                i.attachRefs = function(e, t) {
                    var n = t.ref;
                    null != n && r(n, e, t._owner)
                }, i.shouldUpdateRefs = function(e, t) {
                    return t._owner !== e._owner || t.ref !== e.ref
                }, i.detachRefs = function(e, t) {
                    var n = t.ref;
                    null != n && a(n, e, t._owner)
                }, t.exports = i
            }, {
                72: 72
            }],
            81: [function(e, t, n) {
                "use strict";
                var r = {
                        injectCreateReactRootIndex: function(e) {
                            a.createReactRootIndex = e
                        }
                    },
                    a = {
                        createReactRootIndex: null,
                        injection: r
                    };
                t.exports = a
            }, {}],
            82: [function(e, t, n) {
                "use strict";

                function r(e) {
                    c(o.isValidElement(e));
                    var t;
                    try {
                        var n = i.createReactRootID();
                        return t = u.getPooled(!1), t.perform(function() {
                            var r = d(e, null),
                                a = r.mountComponent(n, t, l);
                            return s.addChecksumToMarkup(a)
                        }, null)
                    } finally {
                        u.release(t)
                    }
                }

                function a(e) {
                    c(o.isValidElement(e));
                    var t;
                    try {
                        var n = i.createReactRootID();
                        return t = u.getPooled(!0), t.perform(function() {
                            var r = d(e, null);
                            return r.mountComponent(n, t, l)
                        }, null)
                    } finally {
                        u.release(t)
                    }
                }
                var o = e(55),
                    i = e(64),
                    s = e(67),
                    u = e(83),
                    l = e(113),
                    d = e(132),
                    c = e(133);
                t.exports = {
                    renderToString: r,
                    renderToStaticMarkup: a
                }
            }, {
                113: 113,
                132: 132,
                133: 133,
                55: 55,
                64: 64,
                67: 67,
                83: 83
            }],
            83: [function(e, t, n) {
                "use strict";

                function r(e) {
                    this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.reactMountReady = o.getPooled(null), this.putListenerQueue = i.getPooled()
                }
                var a = e(28),
                    o = e(6),
                    i = e(77),
                    s = e(101),
                    u = e(27),
                    l = e(112),
                    d = {
                        initialize: function() {
                            this.reactMountReady.reset()
                        },
                        close: l
                    },
                    c = {
                        initialize: function() {
                            this.putListenerQueue.reset()
                        },
                        close: l
                    },
                    p = [c, d],
                    m = {
                        getTransactionWrappers: function() {
                            return p
                        },
                        getReactMountReady: function() {
                            return this.reactMountReady
                        },
                        getPutListenerQueue: function() {
                            return this.putListenerQueue
                        },
                        destructor: function() {
                            o.release(this.reactMountReady), this.reactMountReady = null, i.release(this.putListenerQueue), this.putListenerQueue = null
                        }
                    };
                u(r.prototype, s.Mixin, m), a.addPoolingTo(r), t.exports = r
            }, {
                101: 101,
                112: 112,
                27: 27,
                28: 28,
                6: 6,
                77: 77
            }],
            84: [function(e, t, n) {
                "use strict";

                function r(e) {
                    e !== o.currentlyMountingInstance && l.enqueueUpdate(e)
                }

                function a(e, t) {
                    c(null == i.current);
                    var n = u.get(e);
                    return n ? n === o.currentlyUnmountingInstance ? null : n : null
                }
                var o = e(66),
                    i = e(39),
                    s = e(55),
                    u = e(65),
                    l = e(85),
                    d = e(27),
                    c = e(133),
                    p = (e(150), {
                        enqueueCallback: function(e, t) {
                            c("function" == typeof t);
                            var n = a(e);
                            return n && n !== o.currentlyMountingInstance ? (n._pendingCallbacks ? n._pendingCallbacks.push(t) : n._pendingCallbacks = [t], void r(n)) : null
                        },
                        enqueueCallbackInternal: function(e, t) {
                            c("function" == typeof t), e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], r(e)
                        },
                        enqueueForceUpdate: function(e) {
                            var t = a(e, "forceUpdate");
                            t && (t._pendingForceUpdate = !0, r(t))
                        },
                        enqueueReplaceState: function(e, t) {
                            var n = a(e, "replaceState");
                            n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, r(n))
                        },
                        enqueueSetState: function(e, t) {
                            var n = a(e, "setState");
                            if (n) {
                                var o = n._pendingStateQueue || (n._pendingStateQueue = []);
                                o.push(t), r(n)
                            }
                        },
                        enqueueSetProps: function(e, t) {
                            var n = a(e, "setProps");
                            if (n) {
                                c(n._isTopLevel);
                                var o = n._pendingElement || n._currentElement,
                                    i = d({}, o.props, t);
                                n._pendingElement = s.cloneAndReplaceProps(o, i), r(n)
                            }
                        },
                        enqueueReplaceProps: function(e, t) {
                            var n = a(e, "replaceProps");
                            if (n) {
                                c(n._isTopLevel);
                                var o = n._pendingElement || n._currentElement;
                                n._pendingElement = s.cloneAndReplaceProps(o, t), r(n)
                            }
                        },
                        enqueueElementInternal: function(e, t) {
                            e._pendingElement = t, r(e)
                        }
                    });
                t.exports = p
            }, {
                133: 133,
                150: 150,
                27: 27,
                39: 39,
                55: 55,
                65: 65,
                66: 66,
                85: 85
            }],
            85: [function(e, t, n) {
                "use strict";

                function r() {
                    _(Y.ReactReconcileTransaction && M)
                }

                function a() {
                    this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = d.getPooled(), this.reconcileTransaction = Y.ReactReconcileTransaction.getPooled()
                }

                function o(e, t, n, a, o) {
                    r(), M.batchedUpdates(e, t, n, a, o)
                }

                function i(e, t) {
                    return e._mountOrder - t._mountOrder
                }

                function s(e) {
                    var t = e.dirtyComponentsLength;
                    _(t === y.length), y.sort(i);
                    for (var n = 0; t > n; n++) {
                        var r = y[n],
                            a = r._pendingCallbacks;
                        if (r._pendingCallbacks = null, m.performUpdateIfNecessary(r, e.reconcileTransaction), a)
                            for (var o = 0; o < a.length; o++) e.callbackQueue.enqueue(a[o], r.getPublicInstance())
                    }
                }

                function u(e) {
                    return r(), M.isBatchingUpdates ? void y.push(e) : void M.batchedUpdates(u, e)
                }

                function l(e, t) {
                    _(M.isBatchingUpdates), g.enqueue(e, t), v = !0
                }
                var d = e(6),
                    c = e(28),
                    p = (e(39), e(73)),
                    m = e(79),
                    h = e(101),
                    f = e(27),
                    _ = e(133),
                    y = (e(150), []),
                    g = d.getPooled(),
                    v = !1,
                    M = null,
                    L = {
                        initialize: function() {
                            this.dirtyComponentsLength = y.length
                        },
                        close: function() {
                            this.dirtyComponentsLength !== y.length ? (y.splice(0, this.dirtyComponentsLength), T()) : y.length = 0
                        }
                    },
                    w = {
                        initialize: function() {
                            this.callbackQueue.reset()
                        },
                        close: function() {
                            this.callbackQueue.notifyAll()
                        }
                    },
                    D = [L, w];
                f(a.prototype, h.Mixin, {
                    getTransactionWrappers: function() {
                        return D
                    },
                    destructor: function() {
                        this.dirtyComponentsLength = null, d.release(this.callbackQueue), this.callbackQueue = null, Y.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
                    },
                    perform: function(e, t, n) {
                        return h.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n)
                    }
                }), c.addPoolingTo(a);
                var T = function() {
                    for (; y.length || v;) {
                        if (y.length) {
                            var e = a.getPooled();
                            e.perform(s, null, e), a.release(e)
                        }
                        if (v) {
                            v = !1;
                            var t = g;
                            g = d.getPooled(), t.notifyAll(), d.release(t)
                        }
                    }
                };
                T = p.measure("ReactUpdates", "flushBatchedUpdates", T);
                var b = {
                        injectReconcileTransaction: function(e) {
                            _(e), Y.ReactReconcileTransaction = e
                        },
                        injectBatchingStrategy: function(e) {
                            _(e), _("function" == typeof e.batchedUpdates), _("boolean" == typeof e.isBatchingUpdates), M = e
                        }
                    },
                    Y = {
                        ReactReconcileTransaction: null,
                        batchedUpdates: o,
                        enqueueUpdate: u,
                        flushBatchedUpdates: T,
                        injection: b,
                        asap: l
                    };
                t.exports = Y
            }, {
                101: 101,
                133: 133,
                150: 150,
                27: 27,
                28: 28,
                39: 39,
                6: 6,
                73: 73,
                79: 79
            }],
            86: [function(e, t, n) {
                "use strict";
                var r = e(10),
                    a = r.injection.MUST_USE_ATTRIBUTE,
                    o = {
                        Properties: {
                            clipPath: a,
                            cx: a,
                            cy: a,
                            d: a,
                            dx: a,
                            dy: a,
                            fill: a,
                            fillOpacity: a,
                            fontFamily: a,
                            fontSize: a,
                            fx: a,
                            fy: a,
                            gradientTransform: a,
                            gradientUnits: a,
                            markerEnd: a,
                            markerMid: a,
                            markerStart: a,
                            offset: a,
                            opacity: a,
                            patternContentUnits: a,
                            patternUnits: a,
                            points: a,
                            preserveAspectRatio: a,
                            r: a,
                            rx: a,
                            ry: a,
                            spreadMethod: a,
                            stopColor: a,
                            stopOpacity: a,
                            stroke: a,
                            strokeDasharray: a,
                            strokeLinecap: a,
                            strokeOpacity: a,
                            strokeWidth: a,
                            textAnchor: a,
                            transform: a,
                            version: a,
                            viewBox: a,
                            x1: a,
                            x2: a,
                            x: a,
                            y1: a,
                            y2: a,
                            y: a
                        },
                        DOMAttributeNames: {
                            clipPath: "clip-path",
                            fillOpacity: "fill-opacity",
                            fontFamily: "font-family",
                            fontSize: "font-size",
                            gradientTransform: "gradientTransform",
                            gradientUnits: "gradientUnits",
                            markerEnd: "marker-end",
                            markerMid: "marker-mid",
                            markerStart: "marker-start",
                            patternContentUnits: "patternContentUnits",
                            patternUnits: "patternUnits",
                            preserveAspectRatio: "preserveAspectRatio",
                            spreadMethod: "spreadMethod",
                            stopColor: "stop-color",
                            stopOpacity: "stop-opacity",
                            strokeDasharray: "stroke-dasharray",
                            strokeLinecap: "stroke-linecap",
                            strokeOpacity: "stroke-opacity",
                            strokeWidth: "stroke-width",
                            textAnchor: "text-anchor",
                            viewBox: "viewBox"
                        }
                    };
                t.exports = o
            }, {
                10: 10
            }],
            87: [function(e, t, n) {
                "use strict";

                function r(e) {
                    if ("selectionStart" in e && s.hasSelectionCapabilities(e)) return {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    };
                    if (window.getSelection) {
                        var t = window.getSelection();
                        return {
                            anchorNode: t.anchorNode,
                            anchorOffset: t.anchorOffset,
                            focusNode: t.focusNode,
                            focusOffset: t.focusOffset
                        }
                    }
                    if (document.selection) {
                        var n = document.selection.createRange();
                        return {
                            parentElement: n.parentElement(),
                            text: n.text,
                            top: n.boundingTop,
                            left: n.boundingLeft
                        }
                    }
                }

                function a(e) {
                    if (g || null == f || f !== l()) return null;
                    var t = r(f);
                    if (!y || !p(y, t)) {
                        y = t;
                        var n = u.getPooled(h.select, _, e);
                        return n.type = "select", n.target = f, i.accumulateTwoPhaseDispatches(n), n
                    }
                }
                var o = e(15),
                    i = e(20),
                    s = e(63),
                    u = e(93),
                    l = e(119),
                    d = e(136),
                    c = e(139),
                    p = e(146),
                    m = o.topLevelTypes,
                    h = {
                        select: {
                            phasedRegistrationNames: {
                                bubbled: c({
                                    onSelect: null
                                }),
                                captured: c({
                                    onSelectCapture: null
                                })
                            },
                            dependencies: [m.topBlur, m.topContextMenu, m.topFocus, m.topKeyDown, m.topMouseDown, m.topMouseUp, m.topSelectionChange]
                        }
                    },
                    f = null,
                    _ = null,
                    y = null,
                    g = !1,
                    v = {
                        eventTypes: h,
                        extractEvents: function(e, t, n, r) {
                            switch (e) {
                                case m.topFocus:
                                    (d(t) || "true" === t.contentEditable) && (f = t, _ = n, y = null);
                                    break;
                                case m.topBlur:
                                    f = null, _ = null, y = null;
                                    break;
                                case m.topMouseDown:
                                    g = !0;
                                    break;
                                case m.topContextMenu:
                                case m.topMouseUp:
                                    return g = !1, a(r);
                                case m.topSelectionChange:
                                case m.topKeyDown:
                                case m.topKeyUp:
                                    return a(r)
                            }
                        }
                    };
                t.exports = v
            }, {
                119: 119,
                136: 136,
                139: 139,
                146: 146,
                15: 15,
                20: 20,
                63: 63,
                93: 93
            }],
            88: [function(e, t, n) {
                "use strict";
                var r = Math.pow(2, 53),
                    a = {
                        createReactRootIndex: function() {
                            return Math.ceil(Math.random() * r)
                        }
                    };
                t.exports = a
            }, {}],
            89: [function(e, t, n) {
                "use strict";
                var r = e(15),
                    a = e(19),
                    o = e(20),
                    i = e(90),
                    s = e(93),
                    u = e(94),
                    l = e(96),
                    d = e(97),
                    c = e(92),
                    p = e(98),
                    m = e(99),
                    h = e(100),
                    f = e(120),
                    _ = e(133),
                    y = e(139),
                    g = (e(150), r.topLevelTypes),
                    v = {
                        blur: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onBlur: !0
                                }),
                                captured: y({
                                    onBlurCapture: !0
                                })
                            }
                        },
                        click: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onClick: !0
                                }),
                                captured: y({
                                    onClickCapture: !0
                                })
                            }
                        },
                        contextMenu: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onContextMenu: !0
                                }),
                                captured: y({
                                    onContextMenuCapture: !0
                                })
                            }
                        },
                        copy: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onCopy: !0
                                }),
                                captured: y({
                                    onCopyCapture: !0
                                })
                            }
                        },
                        cut: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onCut: !0
                                }),
                                captured: y({
                                    onCutCapture: !0
                                })
                            }
                        },
                        doubleClick: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDoubleClick: !0
                                }),
                                captured: y({
                                    onDoubleClickCapture: !0
                                })
                            }
                        },
                        drag: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDrag: !0
                                }),
                                captured: y({
                                    onDragCapture: !0
                                })
                            }
                        },
                        dragEnd: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDragEnd: !0
                                }),
                                captured: y({
                                    onDragEndCapture: !0
                                })
                            }
                        },
                        dragEnter: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDragEnter: !0
                                }),
                                captured: y({
                                    onDragEnterCapture: !0
                                })
                            }
                        },
                        dragExit: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDragExit: !0
                                }),
                                captured: y({
                                    onDragExitCapture: !0
                                })
                            }
                        },
                        dragLeave: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDragLeave: !0
                                }),
                                captured: y({
                                    onDragLeaveCapture: !0
                                })
                            }
                        },
                        dragOver: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDragOver: !0
                                }),
                                captured: y({
                                    onDragOverCapture: !0
                                })
                            }
                        },
                        dragStart: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDragStart: !0
                                }),
                                captured: y({
                                    onDragStartCapture: !0
                                })
                            }
                        },
                        drop: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onDrop: !0
                                }),
                                captured: y({
                                    onDropCapture: !0
                                })
                            }
                        },
                        focus: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onFocus: !0
                                }),
                                captured: y({
                                    onFocusCapture: !0
                                })
                            }
                        },
                        input: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onInput: !0
                                }),
                                captured: y({
                                    onInputCapture: !0
                                })
                            }
                        },
                        keyDown: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onKeyDown: !0
                                }),
                                captured: y({
                                    onKeyDownCapture: !0
                                })
                            }
                        },
                        keyPress: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onKeyPress: !0
                                }),
                                captured: y({
                                    onKeyPressCapture: !0
                                })
                            }
                        },
                        keyUp: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onKeyUp: !0
                                }),
                                captured: y({
                                    onKeyUpCapture: !0
                                })
                            }
                        },
                        load: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onLoad: !0
                                }),
                                captured: y({
                                    onLoadCapture: !0
                                })
                            }
                        },
                        error: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onError: !0
                                }),
                                captured: y({
                                    onErrorCapture: !0
                                })
                            }
                        },
                        mouseDown: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onMouseDown: !0
                                }),
                                captured: y({
                                    onMouseDownCapture: !0
                                })
                            }
                        },
                        mouseMove: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onMouseMove: !0
                                }),
                                captured: y({
                                    onMouseMoveCapture: !0
                                })
                            }
                        },
                        mouseOut: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onMouseOut: !0
                                }),
                                captured: y({
                                    onMouseOutCapture: !0
                                })
                            }
                        },
                        mouseOver: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onMouseOver: !0
                                }),
                                captured: y({
                                    onMouseOverCapture: !0
                                })
                            }
                        },
                        mouseUp: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onMouseUp: !0
                                }),
                                captured: y({
                                    onMouseUpCapture: !0
                                })
                            }
                        },
                        paste: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onPaste: !0
                                }),
                                captured: y({
                                    onPasteCapture: !0
                                })
                            }
                        },
                        reset: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onReset: !0
                                }),
                                captured: y({
                                    onResetCapture: !0
                                })
                            }
                        },
                        scroll: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onScroll: !0
                                }),
                                captured: y({
                                    onScrollCapture: !0
                                })
                            }
                        },
                        submit: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onSubmit: !0
                                }),
                                captured: y({
                                    onSubmitCapture: !0
                                })
                            }
                        },
                        touchCancel: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onTouchCancel: !0
                                }),
                                captured: y({
                                    onTouchCancelCapture: !0
                                })
                            }
                        },
                        touchEnd: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onTouchEnd: !0
                                }),
                                captured: y({
                                    onTouchEndCapture: !0
                                })
                            }
                        },
                        touchMove: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onTouchMove: !0
                                }),
                                captured: y({
                                    onTouchMoveCapture: !0
                                })
                            }
                        },
                        touchStart: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onTouchStart: !0
                                }),
                                captured: y({
                                    onTouchStartCapture: !0
                                })
                            }
                        },
                        wheel: {
                            phasedRegistrationNames: {
                                bubbled: y({
                                    onWheel: !0
                                }),
                                captured: y({
                                    onWheelCapture: !0
                                })
                            }
                        }
                    },
                    M = {
                        topBlur: v.blur,
                        topClick: v.click,
                        topContextMenu: v.contextMenu,
                        topCopy: v.copy,
                        topCut: v.cut,
                        topDoubleClick: v.doubleClick,
                        topDrag: v.drag,
                        topDragEnd: v.dragEnd,
                        topDragEnter: v.dragEnter,
                        topDragExit: v.dragExit,
                        topDragLeave: v.dragLeave,
                        topDragOver: v.dragOver,
                        topDragStart: v.dragStart,
                        topDrop: v.drop,
                        topError: v.error,
                        topFocus: v.focus,
                        topInput: v.input,
                        topKeyDown: v.keyDown,
                        topKeyPress: v.keyPress,
                        topKeyUp: v.keyUp,
                        topLoad: v.load,
                        topMouseDown: v.mouseDown,
                        topMouseMove: v.mouseMove,
                        topMouseOut: v.mouseOut,
                        topMouseOver: v.mouseOver,
                        topMouseUp: v.mouseUp,
                        topPaste: v.paste,
                        topReset: v.reset,
                        topScroll: v.scroll,
                        topSubmit: v.submit,
                        topTouchCancel: v.touchCancel,
                        topTouchEnd: v.touchEnd,
                        topTouchMove: v.touchMove,
                        topTouchStart: v.touchStart,
                        topWheel: v.wheel
                    };
                for (var L in M) M[L].dependencies = [L];
                var w = {
                    eventTypes: v,
                    executeDispatch: function(e, t, n) {
                        var r = a.executeDispatch(e, t, n);
                        r === !1 && (e.stopPropagation(), e.preventDefault())
                    },
                    extractEvents: function(e, t, n, r) {
                        var a = M[e];
                        if (!a) return null;
                        var y;
                        switch (e) {
                            case g.topInput:
                            case g.topLoad:
                            case g.topError:
                            case g.topReset:
                            case g.topSubmit:
                                y = s;
                                break;
                            case g.topKeyPress:
                                if (0 === f(r)) return null;
                            case g.topKeyDown:
                            case g.topKeyUp:
                                y = l;
                                break;
                            case g.topBlur:
                            case g.topFocus:
                                y = u;
                                break;
                            case g.topClick:
                                if (2 === r.button) return null;
                            case g.topContextMenu:
                            case g.topDoubleClick:
                            case g.topMouseDown:
                            case g.topMouseMove:
                            case g.topMouseOut:
                            case g.topMouseOver:
                            case g.topMouseUp:
                                y = d;
                                break;
                            case g.topDrag:
                            case g.topDragEnd:
                            case g.topDragEnter:
                            case g.topDragExit:
                            case g.topDragLeave:
                            case g.topDragOver:
                            case g.topDragStart:
                            case g.topDrop:
                                y = c;
                                break;
                            case g.topTouchCancel:
                            case g.topTouchEnd:
                            case g.topTouchMove:
                            case g.topTouchStart:
                                y = p;
                                break;
                            case g.topScroll:
                                y = m;
                                break;
                            case g.topWheel:
                                y = h;
                                break;
                            case g.topCopy:
                            case g.topCut:
                            case g.topPaste:
                                y = i
                        }
                        _(y);
                        var v = y.getPooled(a, n, r);
                        return o.accumulateTwoPhaseDispatches(v), v
                    }
                };
                t.exports = w
            }, {
                100: 100,
                120: 120,
                133: 133,
                139: 139,
                15: 15,
                150: 150,
                19: 19,
                20: 20,
                90: 90,
                92: 92,
                93: 93,
                94: 94,
                96: 96,
                97: 97,
                98: 98,
                99: 99
            }],
            90: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(93),
                    o = {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    };
                a.augmentClass(r, o), t.exports = r
            }, {
                93: 93
            }],
            91: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(93),
                    o = {
                        data: null
                    };
                a.augmentClass(r, o), t.exports = r
            }, {
                93: 93
            }],
            92: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(97),
                    o = {
                        dataTransfer: null
                    };
                a.augmentClass(r, o), t.exports = r
            }, {
                97: 97
            }],
            93: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    this.dispatchConfig = e, this.dispatchMarker = t, this.nativeEvent = n;
                    var r = this.constructor.Interface;
                    for (var a in r)
                        if (r.hasOwnProperty(a)) {
                            var o = r[a];
                            o ? this[a] = o(n) : this[a] = n[a]
                        }
                    var s = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
                    s ? this.isDefaultPrevented = i.thatReturnsTrue : this.isDefaultPrevented = i.thatReturnsFalse, this.isPropagationStopped = i.thatReturnsFalse
                }
                var a = e(28),
                    o = e(27),
                    i = e(112),
                    s = e(123),
                    u = {
                        type: null,
                        target: s,
                        currentTarget: i.thatReturnsNull,
                        eventPhase: null,
                        bubbles: null,
                        cancelable: null,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: null,
                        isTrusted: null
                    };
                o(r.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.isDefaultPrevented = i.thatReturnsTrue
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this.isPropagationStopped = i.thatReturnsTrue
                    },
                    persist: function() {
                        this.isPersistent = i.thatReturnsTrue
                    },
                    isPersistent: i.thatReturnsFalse,
                    destructor: function() {
                        var e = this.constructor.Interface;
                        for (var t in e) this[t] = null;
                        this.dispatchConfig = null, this.dispatchMarker = null, this.nativeEvent = null
                    }
                }), r.Interface = u, r.augmentClass = function(e, t) {
                    var n = this,
                        r = Object.create(n.prototype);
                    o(r, e.prototype), e.prototype = r, e.prototype.constructor = e, e.Interface = o({}, n.Interface, t), e.augmentClass = n.augmentClass, a.addPoolingTo(e, a.threeArgumentPooler)
                }, a.addPoolingTo(r, a.threeArgumentPooler), t.exports = r
            }, {
                112: 112,
                123: 123,
                27: 27,
                28: 28
            }],
            94: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(99),
                    o = {
                        relatedTarget: null
                    };
                a.augmentClass(r, o), t.exports = r
            }, {
                99: 99
            }],
            95: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(93),
                    o = {
                        data: null
                    };
                a.augmentClass(r, o), t.exports = r
            }, {
                93: 93
            }],
            96: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(99),
                    o = e(120),
                    i = e(121),
                    s = e(122),
                    u = {
                        key: i,
                        location: null,
                        ctrlKey: null,
                        shiftKey: null,
                        altKey: null,
                        metaKey: null,
                        repeat: null,
                        locale: null,
                        getModifierState: s,
                        charCode: function(e) {
                            return "keypress" === e.type ? o(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? o(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    };
                a.augmentClass(r, u), t.exports = r
            }, {
                120: 120,
                121: 121,
                122: 122,
                99: 99
            }],
            97: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(99),
                    o = e(102),
                    i = e(122),
                    s = {
                        screenX: null,
                        screenY: null,
                        clientX: null,
                        clientY: null,
                        ctrlKey: null,
                        shiftKey: null,
                        altKey: null,
                        metaKey: null,
                        getModifierState: i,
                        button: function(e) {
                            var t = e.button;
                            return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
                        },
                        buttons: null,
                        relatedTarget: function(e) {
                            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                        },
                        pageX: function(e) {
                            return "pageX" in e ? e.pageX : e.clientX + o.currentScrollLeft
                        },
                        pageY: function(e) {
                            return "pageY" in e ? e.pageY : e.clientY + o.currentScrollTop
                        }
                    };
                a.augmentClass(r, s), t.exports = r
            }, {
                102: 102,
                122: 122,
                99: 99
            }],
            98: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(99),
                    o = e(122),
                    i = {
                        touches: null,
                        targetTouches: null,
                        changedTouches: null,
                        altKey: null,
                        metaKey: null,
                        ctrlKey: null,
                        shiftKey: null,
                        getModifierState: o
                    };
                a.augmentClass(r, i), t.exports = r
            }, {
                122: 122,
                99: 99
            }],
            99: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(93),
                    o = e(123),
                    i = {
                        view: function(e) {
                            if (e.view) return e.view;
                            var t = o(e);
                            if (null != t && t.window === t) return t;
                            var n = t.ownerDocument;
                            return n ? n.defaultView || n.parentWindow : window
                        },
                        detail: function(e) {
                            return e.detail || 0
                        }
                    };
                a.augmentClass(r, i), t.exports = r
            }, {
                123: 123,
                93: 93
            }],
            100: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    a.call(this, e, t, n)
                }
                var a = e(97),
                    o = {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: null,
                        deltaMode: null
                    };
                a.augmentClass(r, o), t.exports = r
            }, {
                97: 97
            }],
            101: [function(e, t, n) {
                "use strict";
                var r = e(133),
                    a = {
                        reinitializeTransaction: function() {
                            this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
                        },
                        _isInTransaction: !1,
                        getTransactionWrappers: null,
                        isInTransaction: function() {
                            return !!this._isInTransaction
                        },
                        perform: function(e, t, n, a, o, i, s, u) {
                            r(!this.isInTransaction());
                            var l, d;
                            try {
                                this._isInTransaction = !0, l = !0, this.initializeAll(0), d = e.call(t, n, a, o, i, s, u), l = !1
                            } finally {
                                try {
                                    if (l) try {
                                        this.closeAll(0)
                                    } catch (c) {} else this.closeAll(0)
                                } finally {
                                    this._isInTransaction = !1
                                }
                            }
                            return d
                        },
                        initializeAll: function(e) {
                            for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                                var r = t[n];
                                try {
                                    this.wrapperInitData[n] = o.OBSERVED_ERROR, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null
                                } finally {
                                    if (this.wrapperInitData[n] === o.OBSERVED_ERROR) try {
                                        this.initializeAll(n + 1)
                                    } catch (a) {}
                                }
                            }
                        },
                        closeAll: function(e) {
                            r(this.isInTransaction());
                            for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                                var a, i = t[n],
                                    s = this.wrapperInitData[n];
                                try {
                                    a = !0, s !== o.OBSERVED_ERROR && i.close && i.close.call(this, s), a = !1
                                } finally {
                                    if (a) try {
                                        this.closeAll(n + 1)
                                    } catch (u) {}
                                }
                            }
                            this.wrapperInitData.length = 0
                        }
                    },
                    o = {
                        Mixin: a,
                        OBSERVED_ERROR: {}
                    };
                t.exports = o
            }, {
                133: 133
            }],
            102: [function(e, t, n) {
                "use strict";
                var r = {
                    currentScrollLeft: 0,
                    currentScrollTop: 0,
                    refreshScrollValues: function(e) {
                        r.currentScrollLeft = e.x, r.currentScrollTop = e.y
                    }
                };
                t.exports = r
            }, {}],
            103: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (a(null != t), null == e) return t;
                    var n = Array.isArray(e),
                        r = Array.isArray(t);
                    return n && r ? (e.push.apply(e, t), e) : n ? (e.push(t), e) : r ? [e].concat(t) : [e, t]
                }
                var a = e(133);
                t.exports = r
            }, {
                133: 133
            }],
            104: [function(e, t, n) {
                "use strict";

                function r(e) {
                    for (var t = 1, n = 0, r = 0; r < e.length; r++) t = (t + e.charCodeAt(r)) % a, n = (n + t) % a;
                    return t | n << 16
                }
                var a = 65521;
                t.exports = r
            }, {}],
            105: [function(e, t, n) {
                function r(e) {
                    return e.replace(a, function(e, t) {
                        return t.toUpperCase()
                    })
                }
                var a = /-(.)/g;
                t.exports = r
            }, {}],
            106: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return a(e.replace(o, "ms-"))
                }
                var a = e(105),
                    o = /^-ms-/;
                t.exports = r
            }, {
                105: 105
            }],
            107: [function(e, t, n) {
                function r(e, t) {
                    return e && t ? e === t ? !0 : a(e) ? !1 : a(t) ? r(e, t.parentNode) : e.contains ? e.contains(t) : e.compareDocumentPosition ? !!(16 & e.compareDocumentPosition(t)) : !1 : !1
                }
                var a = e(137);
                t.exports = r
            }, {
                137: 137
            }],
            108: [function(e, t, n) {
                function r(e) {
                    return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
                }

                function a(e) {
                    return r(e) ? Array.isArray(e) ? e.slice() : o(e) : [e]
                }
                var o = e(148);
                t.exports = a
            }, {
                148: 148
            }],
            109: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = o.createFactory(e),
                        n = a.createClass({
                            tagName: e.toUpperCase(),
                            displayName: "ReactFullPageComponent" + e,
                            componentWillUnmount: function() {
                                i(!1)
                            },
                            render: function() {
                                return t(this.props)
                            }
                        });
                    return n
                }
                var a = e(33),
                    o = e(55),
                    i = e(133);
                t.exports = r
            }, {
                133: 133,
                33: 33,
                55: 55
            }],
            110: [function(e, t, n) {
                function r(e) {
                    var t = e.match(d);
                    return t && t[1].toLowerCase()
                }

                function a(e, t) {
                    var n = l;
                    u(!!l);
                    var a = r(e),
                        o = a && s(a);
                    if (o) {
                        n.innerHTML = o[1] + e + o[2];
                        for (var d = o[0]; d--;) n = n.lastChild
                    } else n.innerHTML = e;
                    var c = n.getElementsByTagName("script");
                    c.length && (u(t), i(c).forEach(t));
                    for (var p = i(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
                    return p
                }
                var o = e(21),
                    i = e(108),
                    s = e(125),
                    u = e(133),
                    l = o.canUseDOM ? document.createElement("div") : null,
                    d = /^\s*<(\w+)/;
                t.exports = a
            }, {
                108: 108,
                125: 125,
                133: 133,
                21: 21
            }],
            111: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    var n = null == t || "boolean" == typeof t || "" === t;
                    if (n) return "";
                    var r = isNaN(t);
                    return r || 0 === t || o.hasOwnProperty(e) && o[e] ? "" + t : ("string" == typeof t && (t = t.trim()), t + "px")
                }
                var a = e(4),
                    o = a.isUnitlessNumber;
                t.exports = r
            }, {
                4: 4
            }],
            112: [function(e, t, n) {
                function r(e) {
                    return function() {
                        return e
                    }
                }

                function a() {}
                a.thatReturns = r, a.thatReturnsFalse = r(!1), a.thatReturnsTrue = r(!0), a.thatReturnsNull = r(null), a.thatReturnsThis = function() {
                    return this
                }, a.thatReturnsArgument = function(e) {
                    return e
                }, t.exports = a
            }, {}],
            113: [function(e, t, n) {
                "use strict";
                var r = {};
                t.exports = r
            }, {}],
            114: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return o[e]
                }

                function a(e) {
                    return ("" + e).replace(i, r)
                }
                var o = {
                        "&": "&amp;",
                        ">": "&gt;",
                        "<": "&lt;",
                        '"': "&quot;",
                        "'": "&#x27;"
                    },
                    i = /[&><"']/g;
                t.exports = a
            }, {}],
            115: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return null == e ? null : s(e) ? e : a.has(e) ? o.getNodeFromInstance(e) : (i(null == e.render || "function" != typeof e.render), void i(!1))
                }
                var a = (e(39), e(65)),
                    o = e(68),
                    i = e(133),
                    s = e(135);
                e(150), t.exports = r
            }, {
                133: 133,
                135: 135,
                150: 150,
                39: 39,
                65: 65,
                68: 68
            }],
            116: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    var r = e,
                        a = !r.hasOwnProperty(n);
                    a && null != t && (r[n] = t)
                }

                function a(e) {
                    if (null == e) return e;
                    var t = {};
                    return o(e, r, t), t
                }
                var o = e(149);
                e(150), t.exports = a
            }, {
                149: 149,
                150: 150
            }],
            117: [function(e, t, n) {
                "use strict";

                function r(e) {
                    try {
                        e.focus()
                    } catch (t) {}
                }
                t.exports = r
            }, {}],
            118: [function(e, t, n) {
                "use strict";
                var r = function(e, t, n) {
                    Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
                };
                t.exports = r
            }, {}],
            119: [function(e, t, n) {
                function r() {
                    try {
                        return document.activeElement || document.body
                    } catch (e) {
                        return document.body
                    }
                }
                t.exports = r
            }, {}],
            120: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t, n = e.keyCode;
                    return "charCode" in e ? (t = e.charCode, 0 === t && 13 === n && (t = 13)) : t = n, t >= 32 || 13 === t ? t : 0
                }
                t.exports = r
            }, {}],
            121: [function(e, t, n) {
                "use strict";

                function r(e) {
                    if (e.key) {
                        var t = o[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    if ("keypress" === e.type) {
                        var n = a(e);
                        return 13 === n ? "Enter" : String.fromCharCode(n)
                    }
                    return "keydown" === e.type || "keyup" === e.type ? i[e.keyCode] || "Unidentified" : ""
                }
                var a = e(120),
                    o = {
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
                    },
                    i = {
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
                    };
                t.exports = r
            }, {
                120: 120
            }],
            122: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = this,
                        n = t.nativeEvent;
                    if (n.getModifierState) return n.getModifierState(e);
                    var r = o[e];
                    return r ? !!n[r] : !1
                }

                function a(e) {
                    return r
                }
                var o = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey"
                };
                t.exports = a
            }, {}],
            123: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = e.target || e.srcElement || window;
                    return 3 === t.nodeType ? t.parentNode : t
                }
                t.exports = r
            }, {}],
            124: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = e && (a && e[a] || e[o]);
                    return "function" == typeof t ? t : void 0
                }
                var a = "function" == typeof Symbol && Symbol.iterator,
                    o = "@@iterator";
                t.exports = r
            }, {}],
            125: [function(e, t, n) {
                function r(e) {
                    return o(!!i), p.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || ("*" === e ? i.innerHTML = "<link />" : i.innerHTML = "<" + e + "></" + e + ">", s[e] = !i.firstChild), s[e] ? p[e] : null
                }
                var a = e(21),
                    o = e(133),
                    i = a.canUseDOM ? document.createElement("div") : null,
                    s = {
                        circle: !0,
                        clipPath: !0,
                        defs: !0,
                        ellipse: !0,
                        g: !0,
                        line: !0,
                        linearGradient: !0,
                        path: !0,
                        polygon: !0,
                        polyline: !0,
                        radialGradient: !0,
                        rect: !0,
                        stop: !0,
                        text: !0
                    },
                    u = [1, '<select multiple="true">', "</select>"],
                    l = [1, "<table>", "</table>"],
                    d = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    c = [1, "<svg>", "</svg>"],
                    p = {
                        "*": [1, "?<div>", "</div>"],
                        area: [1, "<map>", "</map>"],
                        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                        legend: [1, "<fieldset>", "</fieldset>"],
                        param: [1, "<object>", "</object>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        optgroup: u,
                        option: u,
                        caption: l,
                        colgroup: l,
                        tbody: l,
                        tfoot: l,
                        thead: l,
                        td: d,
                        th: d,
                        circle: c,
                        clipPath: c,
                        defs: c,
                        ellipse: c,
                        g: c,
                        line: c,
                        linearGradient: c,
                        path: c,
                        polygon: c,
                        polyline: c,
                        radialGradient: c,
                        rect: c,
                        stop: c,
                        text: c
                    };
                t.exports = r
            }, {
                133: 133,
                21: 21
            }],
            126: [function(e, t, n) {
                "use strict";

                function r(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function a(e) {
                    for (; e;) {
                        if (e.nextSibling) return e.nextSibling;
                        e = e.parentNode
                    }
                }

                function o(e, t) {
                    for (var n = r(e), o = 0, i = 0; n;) {
                        if (3 === n.nodeType) {
                            if (i = o + n.textContent.length, t >= o && i >= t) return {
                                node: n,
                                offset: t - o
                            };
                            o = i
                        }
                        n = r(a(n))
                    }
                }
                t.exports = o
            }, {}],
            127: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return e ? e.nodeType === a ? e.documentElement : e.firstChild : null
                }
                var a = 9;
                t.exports = r
            }, {}],
            128: [function(e, t, n) {
                "use strict";

                function r() {
                    return !o && a.canUseDOM && (o = "textContent" in document.documentElement ? "textContent" : "innerText"), o
                }
                var a = e(21),
                    o = null;
                t.exports = r
            }, {
                21: 21
            }],
            129: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return e === window ? {
                        x: window.pageXOffset || document.documentElement.scrollLeft,
                        y: window.pageYOffset || document.documentElement.scrollTop
                    } : {
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }
                }
                t.exports = r
            }, {}],
            130: [function(e, t, n) {
                function r(e) {
                    return e.replace(a, "-$1").toLowerCase()
                }
                var a = /([A-Z])/g;
                t.exports = r
            }, {}],
            131: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return a(e).replace(o, "-ms-")
                }
                var a = e(130),
                    o = /^ms-/;
                t.exports = r
            }, {
                130: 130
            }],
            132: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
                }

                function a(e, t) {
                    var n;
                    if ((null === e || e === !1) && (e = i.emptyElement), "object" == typeof e) {
                        var a = e;
                        n = t === a.type && "string" == typeof a.type ? s.createInternalComponent(a) : r(a.type) ? new a.type(a) : new d
                    } else "string" == typeof e || "number" == typeof e ? n = s.createInstanceForText(e) : l(!1);
                    return n.construct(e), n._mountIndex = 0, n._mountImage = null, n
                }
                var o = e(37),
                    i = e(57),
                    s = e(71),
                    u = e(27),
                    l = e(133),
                    d = (e(150), function() {});
                u(d.prototype, o.Mixin, {
                    _instantiateReactComponent: a
                }), t.exports = a
            }, {
                133: 133,
                150: 150,
                27: 27,
                37: 37,
                57: 57,
                71: 71
            }],
            133: [function(e, t, n) {
                "use strict";
                var r = function(e, t, n, r, a, o, i, s) {
                    if (!e) {
                        var u;
                        if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var l = [n, r, a, o, i, s],
                                d = 0;
                            u = new Error("Invariant Violation: " + t.replace(/%s/g, function() {
                                return l[d++]
                            }))
                        }
                        throw u.framesToPop = 1, u
                    }
                };
                t.exports = r
            }, {}],
            134: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (!o.canUseDOM || t && !("addEventListener" in document)) return !1;
                    var n = "on" + e,
                        r = n in document;
                    if (!r) {
                        var i = document.createElement("div");
                        i.setAttribute(n, "return;"), r = "function" == typeof i[n]
                    }
                    return !r && a && "wheel" === e && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r
                }
                var a, o = e(21);
                o.canUseDOM && (a = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), t.exports = r
            }, {
                21: 21
            }],
            135: [function(e, t, n) {
                function r(e) {
                    return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
                }
                t.exports = r
            }, {}],
            136: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && ("INPUT" === e.nodeName && a[e.type] || "TEXTAREA" === e.nodeName)
                }
                var a = {
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
                t.exports = r
            }, {}],
            137: [function(e, t, n) {
                function r(e) {
                    return a(e) && 3 == e.nodeType
                }
                var a = e(135);
                t.exports = r
            }, {
                135: 135
            }],
            138: [function(e, t, n) {
                "use strict";
                var r = e(133),
                    a = function(e) {
                        var t, n = {};
                        r(e instanceof Object && !Array.isArray(e));
                        for (t in e) e.hasOwnProperty(t) && (n[t] = t);
                        return n
                    };
                t.exports = a
            }, {
                133: 133
            }],
            139: [function(e, t, n) {
                var r = function(e) {
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return t;
                    return null
                };
                t.exports = r
            }, {}],
            140: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    if (!e) return null;
                    var r = {};
                    for (var o in e) a.call(e, o) && (r[o] = t.call(n, e[o], o, e));
                    return r
                }
                var a = Object.prototype.hasOwnProperty;
                t.exports = r
            }, {}],
            141: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = {};
                    return function(n) {
                        return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n]
                    }
                }
                t.exports = r
            }, {}],
            142: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return o(a.isValidElement(e)), e
                }
                var a = e(55),
                    o = e(133);
                t.exports = r
            }, {
                133: 133,
                55: 55
            }],
            143: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return '"' + a(e) + '"'
                }
                var a = e(114);
                t.exports = r
            }, {
                114: 114
            }],
            144: [function(e, t, n) {
                "use strict";
                var r = e(21),
                    a = /^[ \r\n\t\f]/,
                    o = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
                    i = function(e, t) {
                        e.innerHTML = t
                    };
                if ("undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction && (i = function(e, t) {
                        MSApp.execUnsafeLocalFunction(function() {
                            e.innerHTML = t
                        })
                    }), r.canUseDOM) {
                    var s = document.createElement("div");
                    s.innerHTML = " ", "" === s.innerHTML && (i = function(e, t) {
                        if (e.parentNode && e.parentNode.replaceChild(e, e), a.test(t) || "<" === t[0] && o.test(t)) {
                            e.innerHTML = "\ufeff" + t;
                            var n = e.firstChild;
                            1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
                        } else e.innerHTML = t
                    })
                }
                t.exports = i
            }, {
                21: 21
            }],
            145: [function(e, t, n) {
                "use strict";
                var r = e(21),
                    a = e(114),
                    o = e(144),
                    i = function(e, t) {
                        e.textContent = t
                    };
                r.canUseDOM && ("textContent" in document.documentElement || (i = function(e, t) {
                    o(e, a(t))
                })), t.exports = i
            }, {
                114: 114,
                144: 144,
                21: 21
            }],
            146: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (e === t) return !0;
                    var n;
                    for (n in e)
                        if (e.hasOwnProperty(n) && (!t.hasOwnProperty(n) || e[n] !== t[n])) return !1;
                    for (n in t)
                        if (t.hasOwnProperty(n) && !e.hasOwnProperty(n)) return !1;
                    return !0
                }
                t.exports = r
            }, {}],
            147: [function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (null != e && null != t) {
                        var n = typeof e,
                            r = typeof t;
                        if ("string" === n || "number" === n) return "string" === r || "number" === r;
                        if ("object" === r && e.type === t.type && e.key === t.key) {
                            var a = e._owner === t._owner;
                            return a
                        }
                    }
                    return !1
                }
                e(150), t.exports = r
            }, {
                150: 150
            }],
            148: [function(e, t, n) {
                function r(e) {
                    var t = e.length;
                    if (a(!Array.isArray(e) && ("object" == typeof e || "function" == typeof e)), a("number" == typeof t), a(0 === t || t - 1 in e), e.hasOwnProperty) try {
                        return Array.prototype.slice.call(e)
                    } catch (n) {}
                    for (var r = Array(t), o = 0; t > o; o++) r[o] = e[o];
                    return r
                }
                var a = e(133);
                t.exports = r
            }, {
                133: 133
            }],
            149: [function(e, t, n) {
                "use strict";

                function r(e) {
                    return _[e]
                }

                function a(e, t) {
                    return e && null != e.key ? i(e.key) : t.toString(36)
                }

                function o(e) {
                    return ("" + e).replace(y, r)
                }

                function i(e) {
                    return "$" + o(e)
                }

                function s(e, t, n, r, o) {
                    var u = typeof e;
                    if (("undefined" === u || "boolean" === u) && (e = null), null === e || "string" === u || "number" === u || l.isValidElement(e)) return r(o, e, "" === t ? h + a(e, 0) : t, n), 1;
                    var c, _, y, g = 0;
                    if (Array.isArray(e))
                        for (var v = 0; v < e.length; v++) c = e[v], _ = ("" !== t ? t + f : h) + a(c, v), y = n + g, g += s(c, _, y, r, o);
                    else {
                        var M = p(e);
                        if (M) {
                            var L, w = M.call(e);
                            if (M !== e.entries)
                                for (var D = 0; !(L = w.next()).done;) c = L.value, _ = ("" !== t ? t + f : h) + a(c, D++), y = n + g, g += s(c, _, y, r, o);
                            else
                                for (; !(L = w.next()).done;) {
                                    var T = L.value;
                                    T && (c = T[1], _ = ("" !== t ? t + f : h) + i(T[0]) + f + a(c, 0), y = n + g, g += s(c, _, y, r, o))
                                }
                        } else if ("object" === u) {
                            m(1 !== e.nodeType);
                            var b = d.extract(e);
                            for (var Y in b) b.hasOwnProperty(Y) && (c = b[Y], _ = ("" !== t ? t + f : h) + i(Y) + f + a(c, 0), y = n + g, g += s(c, _, y, r, o))
                        }
                    }
                    return g
                }

                function u(e, t, n) {
                    return null == e ? 0 : s(e, "", 0, t, n)
                }
                var l = e(55),
                    d = e(61),
                    c = e(64),
                    p = e(124),
                    m = e(133),
                    h = (e(150), c.SEPARATOR),
                    f = ":",
                    _ = {
                        "=": "=0",
                        ".": "=1",
                        ":": "=2"
                    },
                    y = /[=.:]/g;
                t.exports = u
            }, {
                124: 124,
                133: 133,
                150: 150,
                55: 55,
                61: 61,
                64: 64
            }],
            150: [function(e, t, n) {
                "use strict";
                var r = e(112),
                    a = r;
                t.exports = a
            }, {
                112: 112
            }]
        }, {}, [1])(1)
    });
var path = {
        image: "http://admin.mangomolo.com/analytics/",
        video: "http://lb218.mangomolo.com"
    },
    ProgramWithEpisode = React.createClass({
        displayName: "ProgramWithEpisode",
        render: function() {
            var e;
            return e = $(this.props.episode).length > 0 ? React.createElement("div", {
                className: "li-episode"
            }, React.createElement(EpisodeCover, {
                data: this.props.episode
            }), React.createElement("h4", null, React.createElement("a", {
                href: "/episode/" + this.props.episode.id
            }, this.props.episode.title_ar)), React.createElement("p", null, this.props.episode.recorder_date)) : "", React.createElement("li", null, React.createElement("div", {
                className: "li-program"
            }, React.createElement("a", {
                href: "/show/" + this.props.id
            }, React.createElement("img", {
                src: this.props.image
            })), React.createElement("h4", null, this.props.name), React.createElement("p", null, this.props.summary)), React.createElement("div", {
                className: "strike-through-header"
            }, React.createElement("h3", null, React.createElement("a", {
                href: "/show/" + this.props.id
            }, "تصفح البرنامج"))), e)
        }
    }),
    Program = React.createClass({
        displayName: "Program",
        render: function() {
            return React.createElement("li", null, React.createElement("a", {
                href: "/show/" + this.props.id
            }, React.createElement("img", {
                src: this.props.image
            })), React.createElement("h4", null, this.props.name), React.createElement("p", null, this.props.summary))
        }
    }),
    EpisodeCover = React.createClass({
        displayName: "EpisodeCover",
        render: function() {
            return React.createElement("a", {
                href: "/episode/" + this.props.data.id
            }, React.createElement("img", {
                src: path.image + this.props.data.img
            }), React.createElement("i", {
                className: "fa fa-play"
            }))
        }
    }),
    EpisodePlayer = React.createClass({
        displayName: "EpisodePlayer",
        render: function() {
            return React.createElement("video", {
                id: "example_video_1",
                className: "video-js vjs-default-skin",
                controls: !0,
                preload: "none",
                width: "597",
                height: "350",
                poster: path.image + this.props.data.img,
                "data-setup": ""
            }, React.createElement("source", {
                src: path.video + this.props.data.url,
                type: "video/mp4"
            }))
        }
    }),
    Episode = React.createClass({
        displayName: "Episode",
        render: function() {
            if ("summary" == this.props.view) var e = this.props.data.description_ar;
            else var e = this.props.data.recorder_date;
            return React.createElement("li", null, React.createElement(EpisodeCover, {
                data: this.props.data
            }), React.createElement("h4", null, React.createElement("a", {
                href: "/episode/" + this.props.data.id
            }, this.props.data.title_ar)), React.createElement("p", null, e))
        }
    }),
    EpisodeList = React.createClass({
        displayName: "EpisodeList",
        render: function() {
            var e = this.props.view,
                t = this.props.data.map(function(t, n) {
                    return React.createElement(Episode, {
                        data: t,
                        view: e
                    })
                });
            return React.createElement("ul", null, t)
        }
    }),
    ProgramList = React.createClass({
        displayName: "ProgramList",
        render: function() {
            var e = this.props.data.map(function(e) {
                return React.createElement(Program, {
                    name: e.title_ar,
                    summary: e.description_ar,
                    image: path.image + e.icon,
                    id: e.id
                })
            });
            return React.createElement("ul", null, e)
        }
    }),
    TodayBox = React.createClass({
        displayName: "TodayBox",
        getInitialState: function() {
            return {
                data: []
            }
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                dataType: "json",
                cache: !1,
                success: function(e) {
                    this.setState({
                        data: e
                    }), $("#" + this.props.id + ">ul").owlCarousel({
                        items: 3,
                        nav: !0
                    })
                }.bind(this),
                error: function(e, t, n) {
                    console.error(this.props.url, t, n.toString())
                }.bind(this)
            })
        },
        render: function() {
            return React.createElement(EpisodeList, {
                data: this.state.data,
                view: "summary"
            })
        }
    }),
    ProgramsPage = React.createClass({
        displayName: "ProgramsPage",
        getInitialState: function() {
            return {
                data: []
            }
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                dataType: "json",
                cache: !1,
                success: function(e) {
                    this.setState({
                        data: e
                    })
                }.bind(this),
                error: function(e, t, n) {
                    console.error(this.props.url, t, n.toString())
                }.bind(this)
            })
        },
        render: function() {
            var e = this.state.data.map(function(e) {
                return React.createElement(ProgramWithEpisode, {
                    episode: e.videos[0],
                    name: e.title_ar,
                    summary: e.description_ar,
                    image: path.image + e.icon,
                    id: e.id
                })
            });
            return React.createElement("ul", null, e)
        }
    }),
    ShowPage = React.createClass({
        displayName: "ShowPage",
        getInitialState: function() {
            return {
                data: [],
                category: [],
                videos: [],
                episode: []
            }
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                dataType: "json",
                cache: !1,
                success: function(e) {
                    this.setState({
                        data: e,
                        category: e.category,
                        videos: e.videos,
                        episode: e.videos[0]
                    })
                }.bind(this),
                error: function(e, t, n) {
                    console.error(this.props.url, t, n.toString())
                }.bind(this)
            })
        },
        render: function() {
            return React.createElement("div", null, React.createElement("div", {
                className: "show-featured"
            }, React.createElement("div", {
                className: "first"
            }, React.createElement(ProgramList, {
                data: [this.state.category]
            })), React.createElement("div", {
                className: "second"
            }, React.createElement("ul", null, React.createElement(Episode, {
                data: this.state.episode,
                first: !0
            })))), React.createElement("div", {
                className: "show-episodes"
            }, React.createElement(EpisodeList, {
                data: this.state.videos
            })))
        }
    }),
    EpisodePage = React.createClass({
        displayName: "EpisodePage",
        getInitialState: function() {
            return {
                data: []
            }
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                cache: !1,
                success: function(e) {
                    this.setState({
                        data: e
                    })
                }.bind(this),
                error: function(e, t, n) {
                    console.error(this.props.url, t, n.toString())
                }.bind(this)
            })
        },
        render: function() {
            return React.createElement("div", {
                className: "iframe-holder"
            }, React.createElement("iframe", {
                width: "100%",
                height: "100%",
                src: this.state.data,
                frameborder: "0",
                allowfullscreen: !0,
                scrolling: "no"
            }))
        }
    }),
    EpisodeHeadline = React.createClass({
        displayName: "EpisodeHeadline",
        getInitialState: function() {
            return {
                data: []
            }
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    this.setState({
                        data: e
                    })
                }.bind(this),
                error: function(e, t, n) {
                    console.error(this.props.url, t, n.toString())
                }.bind(this)
            })
        },
        render: function() {
            return "undefined" != typeof this.state.data.category_id && React.render(React.createElement(EpisodeRelated, {
                url: "http://admin.mangomolo.com/analytics/index.php/nand/RelatedVideosInCat?id=" + this.state.data.category_id + "&user_id=97"
            }), document.getElementById("episode-related")), React.createElement("div", null, React.createElement("h3", {
                className: "node-title"
            }, this.state.data.title_ar), React.createElement("div", {
                className: "a-date"
            }, moment(this.state.data.publish_time).locale("ar-tn").format("LLLL")))
        }
    }),
    EpisodeRelated = React.createClass({
        displayName: "EpisodeRelated",
        getInitialState: function() {
            return {
                data: []
            }
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    this.setState({
                        data: e
                    })
                }.bind(this),
                error: function(e, t, n) {
                    console.error(this.props.url, t, n.toString())
                }.bind(this)
            })
        },
        render: function() {
            var e = this.state.data.slice(0, 3),
                t = e.map(function(e) {
                    return React.createElement("li", null, React.createElement("div", null, React.createElement("a", {
                        href: "/episode/" + e.id
                    }, React.createElement("img", {
                        src: path.image + e.img
                    })), React.createElement("div", null, React.createElement("h5", null, React.createElement("a", {
                        href: "/episode/" + e.id
                    }, e.title_ar)))))
                });
            return React.createElement("ol", {
                className: "topfive"
            }, t)
        }
    }),
    EpisodeBody = React.createClass({
        displayName: "EpisodeBody",
        getInitialState: function() {
            return {
                data: []
            }
        },
        componentDidMount: function() {
            $.ajax({
                url: this.props.url,
                cache: !1,
                dataType: "json",
                success: function(e) {
                    this.setState({
                        data: e
                    })
                }.bind(this),
                error: function(e, t, n) {
                    console.error(this.props.url, t, n.toString())
                }.bind(this)
            })
        },
        render: function() {
            return React.createElement("div", {
                className: "node-body"
            }, React.createElement("p", null, this.state.data.description_ar))
        }
    }),
    router = new LightRouter({
        type: "path",
        pathRoot: "/"
    });
router.add("", function(e) {
        React.render(React.createElement(TodayBox, {
            id: "vod-today",
            url: "http://admin.mangomolo.com/analytics/index.php/nand/featured?user_id=97"
        }), document.getElementById("vod-today"))
    }), router.add("show/{id}", function(e) {
        React.render(React.createElement(ShowPage, {
            url: "http://admin.mangomolo.com/analytics/index.php/nand/GetVideosWithProgramInfo?cat_id=" + e.id + "&user_id=97"
        }), document.getElementById("show-page"))
    }), router.add("programs", function(e) {
        React.render(React.createElement(ProgramsPage, {
            url: "http://admin.mangomolo.com/analytics/index.php/plus/category?id=45&o=channel&videos=1&user_id=97"
        }), document.getElementById("show-episodes"))
    }), router.add("episode/{id}", function(e) {
        React.render(React.createElement(EpisodePage, {
            url: "http://admin.mangomolo.com/analytics/index.php/plus/getEmbed?id=" + e.id + "&code=1&user_id=97"
        }), document.getElementById("episode-page")), React.render(React.createElement(EpisodeHeadline, {
            url: "http://admin.mangomolo.com/analytics/index.php/nand/VideoWithProgramInfo?video_id=" + e.id + "&user_id=97"
        }), document.getElementById("episode-headline")), React.render(React.createElement(EpisodeBody, {
            url: "http://admin.mangomolo.com/analytics/index.php/nand/VideoWithProgramInfo?video_id=" + e.id + "&user_id=97"
        }), document.getElementById("episode-body"))
    }), router.run(), ! function() {
        "use strict";

        function e(r) {
            if (!r) throw new Error("No options passed to Waypoint constructor");
            if (!r.element) throw new Error("No element option passed to Waypoint constructor");
            if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, r), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = r.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
        }
        var t = 0,
            n = {};
        e.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete n[this.key]
        }, e.prototype.disable = function() {
            return this.enabled = !1, this
        }, e.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function() {
            return this.group.next(this)
        }, e.prototype.previous = function() {
            return this.group.previous(this)
        }, e.invokeAll = function(e) {
            var t = [];
            for (var r in n) t.push(n[r]);
            for (var a = 0, o = t.length; o > a; a++) t[a][e]()
        }, e.destroyAll = function() {
            e.invokeAll("destroy")
        }, e.disableAll = function() {
            e.invokeAll("disable")
        }, e.enableAll = function() {
            e.invokeAll("enable")
        }, e.refreshAll = function() {
            e.Context.refreshAll()
        }, e.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(),
    function() {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = a.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, r[e.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var n = 0,
            r = {},
            a = window.Waypoint,
            o = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete r[this.key])
        }, t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, a.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                (!t.didScroll || a.isTouch) && (t.didScroll = !0, a.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function() {
            a.Context.refreshAll()
        }, t.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in t) {
                var r = t[n],
                    a = r.newScroll > r.oldScroll,
                    o = a ? r.forward : r.backward;
                for (var i in this.waypoints[n]) {
                    var s = this.waypoints[n][i],
                        u = r.oldScroll < s.triggerPoint,
                        l = r.newScroll >= s.triggerPoint,
                        d = u && l,
                        c = !u && !l;
                    (d || c) && (s.queueTrigger(o), e[s.group.id] = s.group)
                }
            }
            for (var p in e) e[p].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function() {
            return this.element == this.element.window ? a.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function() {
            return this.element == this.element.window ? a.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
            for (var r = 0, a = e.length; a > r; r++) e[r].destroy()
        }, t.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                n = t ? void 0 : this.adapter.offset(),
                r = {};
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var o in e) {
                var i = e[o];
                for (var s in this.waypoints[o]) {
                    var u, l, d, c, p, m = this.waypoints[o][s],
                        h = m.options.offset,
                        f = m.triggerPoint,
                        _ = 0,
                        y = null == f;
                    m.element !== m.element.window && (_ = m.adapter.offset()[i.offsetProp]), "function" == typeof h ? h = h.apply(m) : "string" == typeof h && (h = parseFloat(h), m.options.offset.indexOf("%") > -1 && (h = Math.ceil(i.contextDimension * h / 100))), u = i.contextScroll - i.contextOffset, m.triggerPoint = _ + u - h, l = f < i.oldScroll, d = m.triggerPoint >= i.oldScroll, c = l && d, p = !l && !d, !y && c ? (m.queueTrigger(i.backward), r[m.group.id] = m.group) : !y && p ? (m.queueTrigger(i.forward), r[m.group.id] = m.group) : y && i.oldScroll >= m.triggerPoint && (m.queueTrigger(i.forward), r[m.group.id] = m.group)
                }
            }
            return a.requestAnimationFrame(function() {
                for (var e in r) r[e].flushTriggers()
            }), this
        }, t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function() {
            for (var e in r) r[e].refresh()
        }, t.findByElement = function(e) {
            return r[e.waypointContextKey]
        }, window.onload = function() {
            o && o(), t.refreshAll()
        }, a.requestAnimationFrame = function(t) {
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            n.call(window, t)
        }, a.Context = t
    }(),
    function() {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function n(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), r[this.axis][this.name] = this
        }
        var r = {
                vertical: {},
                horizontal: {}
            },
            a = window.Waypoint;
        n.prototype.add = function(e) {
            this.waypoints.push(e)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var r = this.triggerQueues[n],
                    a = "up" === n || "left" === n;
                r.sort(a ? t : e);
                for (var o = 0, i = r.length; i > o; o += 1) {
                    var s = r[o];
                    (s.options.continuous || o === r.length - 1) && s.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function(t) {
            this.waypoints.sort(e);
            var n = a.Adapter.inArray(t, this.waypoints),
                r = n === this.waypoints.length - 1;
            return r ? null : this.waypoints[n + 1]
        }, n.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var n = a.Adapter.inArray(t, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, n.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, n.prototype.remove = function(e) {
            var t = a.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(e) {
            return r[e.axis][e.name] || new n(e)
        }, a.Group = n
    }(),
    function() {
        "use strict";

        function e(e) {
            this.$element = t(e)
        }
        var t = window.jQuery,
            n = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, n) {
            e.prototype[n] = function() {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[n].apply(this.$element, e)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function(n, r) {
            e[r] = t[r]
        }), n.adapters.push({
            name: "jquery",
            Adapter: e
        }), n.Adapter = e
    }(),
    function() {
        "use strict";

        function e(e) {
            return function() {
                var n = [],
                    r = arguments[0];
                return e.isFunction(arguments[0]) && (r = e.extend({}, arguments[1]), r.handler = arguments[0]), this.each(function() {
                    var a = e.extend({}, r, {
                        element: this
                    });
                    "string" == typeof a.context && (a.context = e(this).closest(a.context)[0]), n.push(new t(a))
                }), n
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }(), $(function() {
        function e() {
            a.toggleClass(l), r.toggleClass(u), o.toggleClass(d), i.toggleClass(c)
        }

        function t() {
            a.addClass(l), r.animate({
                left: "0px"
            }, m), o.animate({
                left: h
            }, m), i.animate({
                left: h
            }, m)
        }

        function n() {
            a.removeClass(l), r.animate({
                left: "-" + h
            }, m), o.animate({
                left: "0px"
            }, m), i.animate({
                left: "0px"
            }, m)
        }
        var r = $(".pushy"),
            a = $("body"),
            o = $("#container"),
            i = $(".push"),
            s = $(".site-overlay"),
            u = "pushy-left pushy-open",
            l = "pushy-active",
            d = "container-push",
            c = "push-push",
            p = $(".menu-btn, .pushy a"),
            m = 200,
            h = r.width() + "px";
        if (cssTransforms3d = function() {
                var e = document.createElement("p"),
                    t = !1,
                    n = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.insertBefore(e, null);
                for (var r in n) void 0 !== e.style[r] && (e.style[r] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(e).getPropertyValue(n[r]));
                return document.body.removeChild(e), void 0 !== t && t.length > 0 && "none" !== t
            }(), cssTransforms3d) p.click(function() {
            e()
        }), s.click(function() {
            e()
        });
        else {
            r.css({
                left: "-" + h
            }), o.css({
                "overflow-x": "hidden"
            });
            var f = !0;
            p.click(function() {
                f ? (t(), f = !1) : (n(), f = !0)
            }), s.click(function() {
                f ? (t(), f = !1) : (n(), f = !0)
            })
        }
    }), $(function() {
        fluidvids.init({}), $(".node-body img[alt]").each(function(e, t) {
            var n = $(this).attr("alt");
            n.length > 0 && $(this).after($("<div/>").html(n).addClass("img-caption"))
        }), $("#owl-gallery").owlCarousel({
            items: 1,
            direction: "rtl"
        });
        var e = "3cf5624a5c79fd0ab3f0578b1c703f3f";
        $(".weather-temperature-tr").openWeather({
            id: "2210247",
            key: e,
            iconTarget: ".weather-icon-tr",
            customIcons: Drupal.settings.core.themePath + "/assets/weather/",
            success: function() {
                $(".icon.tr, .weather-temperature-tr").css("visibility", "visible")
            }
        }), $(".weather-temperature-ny").openWeather({
            key: e,
            city: "Sabha, Libya",
            iconTarget: ".weather-icon-ny",
            customIcons: Drupal.settings.core.themePath + "/assets/weather/",
            success: function() {
                $(".icon.ny, .weather-temperature-ny").css("visibility", "visible")
            }
        }), $(".weather-temperature-ca").openWeather({
            key: e,
            id: "88319",
            iconTarget: ".weather-icon-ca",
            customIcons: Drupal.settings.core.themePath + "/assets/weather/",
            success: function() {
                $(".icon.ca, .weather-temperature-ca").css("visibility", "visible")
            }
        })
    });