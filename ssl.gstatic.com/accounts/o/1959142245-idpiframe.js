/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    },
    ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    },
    ca = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    },
    da = ca(this),
    n = function(a, b) {
        if (b) a: {
            var c = da;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
n("Symbol", function(a) {
    if (a) return a;
    var b = function(f, g) {
        this.le = f;
        ba(this, "description", {
            configurable: !0,
            writable: !0,
            value: g
        })
    };
    b.prototype.toString = function() {
        return this.le
    };
    var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        d = 0,
        e = function(f) {
            if (this instanceof e) throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++, f)
        };
    return e
});
n("Symbol.iterator", function(a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = da[b[c]];
        "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ea(aa(this))
            }
        })
    }
    return a
});
var ea = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    },
    t = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    },
    fa = function(a) {
        if (!(a instanceof Array)) {
            a = t(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    },
    ha = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    },
    ia;
if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
else {
    var ja;
    a: {
        var ka = {
                a: !0
            },
            la = {};
        try {
            la.__proto__ = ka;
            ja = la.a;
            break a
        } catch (a) {}
        ja = !1
    }
    ia = ja ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var ma = ia,
    u = function(a, b) {
        a.prototype = ha(b.prototype);
        a.prototype.constructor = a;
        if (ma) ma(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ta = b.prototype
    },
    na = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
n("Promise", function(a) {
    function b() {
        this.ha = null
    }

    function c(g) {
        return g instanceof e ? g : new e(function(h) {
            h(g)
        })
    }
    if (a) return a;
    b.prototype.Xc = function(g) {
        if (null == this.ha) {
            this.ha = [];
            var h = this;
            this.Yc(function() {
                h.Ve()
            })
        }
        this.ha.push(g)
    };
    var d = da.setTimeout;
    b.prototype.Yc = function(g) {
        d(g, 0)
    };
    b.prototype.Ve = function() {
        for (; this.ha && this.ha.length;) {
            var g = this.ha;
            this.ha = [];
            for (var h = 0; h < g.length; ++h) {
                var k = g[h];
                g[h] = null;
                try {
                    k()
                } catch (l) {
                    this.xe(l)
                }
            }
        }
        this.ha = null
    };
    b.prototype.xe = function(g) {
        this.Yc(function() {
            throw g;
        })
    };
    var e = function(g) {
        this.Ha = 0;
        this.eb = void 0;
        this.Da = [];
        this.Ed = !1;
        var h = this.Zb();
        try {
            g(h.resolve, h.reject)
        } catch (k) {
            h.reject(k)
        }
    };
    e.prototype.Zb = function() {
        function g(l) {
            return function(r) {
                k || (k = !0, l.call(h, r))
            }
        }
        var h = this,
            k = !1;
        return {
            resolve: g(this.Sf),
            reject: g(this.yc)
        }
    };
    e.prototype.Sf = function(g) {
        if (g === this) this.yc(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof e) this.eg(g);
        else {
            a: switch (typeof g) {
                case "object":
                    var h = null != g;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
            }
            h ? this.Rf(g) : this.qd(g)
        }
    };
    e.prototype.Rf = function(g) {
        var h = void 0;
        try {
            h = g.then
        } catch (k) {
            this.yc(k);
            return
        }
        "function" == typeof h ? this.fg(h, g) : this.qd(g)
    };
    e.prototype.yc = function(g) {
        this.he(2, g)
    };
    e.prototype.qd = function(g) {
        this.he(1, g)
    };
    e.prototype.he = function(g, h) {
        if (0 != this.Ha) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.Ha);
        this.Ha = g;
        this.eb = h;
        2 === this.Ha && this.Vf();
        this.We()
    };
    e.prototype.Vf = function() {
        var g = this;
        d(function() {
            if (g.Hf()) {
                var h = da.console;
                "undefined" !== typeof h && h.error(g.eb)
            }
        }, 1)
    };
    e.prototype.Hf = function() {
        if (this.Ed) return !1;
        var g = da.CustomEvent,
            h = da.Event,
            k = da.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof g ? g = new g("unhandledrejection", {
            cancelable: !0
        }) : "function" === typeof h ? g = new h("unhandledrejection", {
            cancelable: !0
        }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.eb;
        return k(g)
    };
    e.prototype.We = function() {
        if (null != this.Da) {
            for (var g =
                    0; g < this.Da.length; ++g) f.Xc(this.Da[g]);
            this.Da = null
        }
    };
    var f = new b;
    e.prototype.eg = function(g) {
        var h = this.Zb();
        g.ob(h.resolve, h.reject)
    };
    e.prototype.fg = function(g, h) {
        var k = this.Zb();
        try {
            g.call(h, k.resolve, k.reject)
        } catch (l) {
            k.reject(l)
        }
    };
    e.prototype.then = function(g, h) {
        function k(w, p) {
            return "function" == typeof w ? function(v) {
                try {
                    l(w(v))
                } catch (y) {
                    r(y)
                }
            } : p
        }
        var l, r, q = new e(function(w, p) {
            l = w;
            r = p
        });
        this.ob(k(g, l), k(h, r));
        return q
    };
    e.prototype.catch = function(g) {
        return this.then(void 0, g)
    };
    e.prototype.ob = function(g,
        h) {
        function k() {
            switch (l.Ha) {
                case 1:
                    g(l.eb);
                    break;
                case 2:
                    h(l.eb);
                    break;
                default:
                    throw Error("Unexpected state: " + l.Ha);
            }
        }
        var l = this;
        null == this.Da ? f.Xc(k) : this.Da.push(k);
        this.Ed = !0
    };
    e.resolve = c;
    e.reject = function(g) {
        return new e(function(h, k) {
            k(g)
        })
    };
    e.race = function(g) {
        return new e(function(h, k) {
            for (var l = t(g), r = l.next(); !r.done; r = l.next()) c(r.value).ob(h, k)
        })
    };
    e.all = function(g) {
        var h = t(g),
            k = h.next();
        return k.done ? c([]) : new e(function(l, r) {
            function q(v) {
                return function(y) {
                    w[v] = y;
                    p--;
                    0 == p && l(w)
                }
            }
            var w = [],
                p = 0;
            do w.push(void 0), p++, c(k.value).ob(q(w.length - 1), r), k = h.next(); while (!k.done)
        })
    };
    return e
});
var oa = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
n("WeakMap", function(a) {
    function b() {}

    function c(k) {
        var l = typeof k;
        return "object" === l && null !== k || "function" === l
    }

    function d(k) {
        if (!oa(k, f)) {
            var l = new b;
            ba(k, f, {
                value: l
            })
        }
    }

    function e(k) {
        var l = Object[k];
        l && (Object[k] = function(r) {
            if (r instanceof b) return r;
            Object.isExtensible(r) && d(r);
            return l(r)
        })
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var k = Object.seal({}),
                    l = Object.seal({}),
                    r = new a([
                        [k, 2],
                        [l, 3]
                    ]);
                if (2 != r.get(k) || 3 != r.get(l)) return !1;
                r.delete(k);
                r.set(l, 4);
                return !r.has(k) && 4 == r.get(l)
            } catch (q) {
                return !1
            }
        }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
        h = function(k) {
            this.Sa = (g += Math.random() + 1).toString();
            if (k) {
                k = t(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
    h.prototype.set = function(k, l) {
        if (!c(k)) throw Error("Invalid WeakMap key");
        d(k);
        if (!oa(k, f)) throw Error("WeakMap key fail: " + k);
        k[f][this.Sa] = l;
        return this
    };
    h.prototype.get = function(k) {
        return c(k) && oa(k, f) ? k[f][this.Sa] : void 0
    };
    h.prototype.has = function(k) {
        return c(k) && oa(k, f) && oa(k[f],
            this.Sa)
    };
    h.prototype.delete = function(k) {
        return c(k) && oa(k, f) && oa(k[f], this.Sa) ? delete k[f][this.Sa] : !1
    };
    return h
});
n("Map", function(a) {
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({
                        x: 4
                    }),
                    k = new a(t([
                        [h, "s"]
                    ]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || 2 != k.size) return !1;
                var l = k.entries(),
                    r = l.next();
                if (r.done || r.value[0] != h || "s" != r.value[1]) return !1;
                r = l.next();
                return r.done || 4 != r.value[0].x || "t" != r.value[1] || !l.next().done ? !1 : !0
            } catch (q) {
                return !1
            }
        }()) return a;
    var b = new WeakMap,
        c = function(h) {
            this.Oa = {};
            this.ea =
                f();
            this.size = 0;
            if (h) {
                h = t(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        };
    c.prototype.set = function(h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.Oa[l.id] = []);
        l.C ? l.C.value = k : (l.C = {
            next: this.ea,
            fa: this.ea.fa,
            head: this.ea,
            key: h,
            value: k
        }, l.list.push(l.C), this.ea.fa.next = l.C, this.ea.fa = l.C, this.size++);
        return this
    };
    c.prototype.delete = function(h) {
        h = d(this, h);
        return h.C && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.Oa[h.id], h.C.fa.next = h.C.next, h.C.next.fa = h.C.fa,
            h.C.head = null, this.size--, !0) : !1
    };
    c.prototype.clear = function() {
        this.Oa = {};
        this.ea = this.ea.fa = f();
        this.size = 0
    };
    c.prototype.has = function(h) {
        return !!d(this, h).C
    };
    c.prototype.get = function(h) {
        return (h = d(this, h).C) && h.value
    };
    c.prototype.entries = function() {
        return e(this, function(h) {
            return [h.key, h.value]
        })
    };
    c.prototype.keys = function() {
        return e(this, function(h) {
            return h.key
        })
    };
    c.prototype.values = function() {
        return e(this, function(h) {
            return h.value
        })
    };
    c.prototype.forEach = function(h, k) {
        for (var l = this.entries(),
                r; !(r = l.next()).done;) r = r.value, h.call(k, r[1], r[0], this)
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
            var r = h.Oa[l];
            if (r && oa(h.Oa, l))
                for (h = 0; h < r.length; h++) {
                    var q = r[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: r,
                        index: h,
                        C: q
                    }
                }
            return {
                id: l,
                list: r,
                index: -1,
                C: void 0
            }
        },
        e = function(h, k) {
            var l = h.ea;
            return ea(function() {
                if (l) {
                    for (; l.head != h.ea;) l = l.fa;
                    for (; l.next != l.head;) return l =
                        l.next, {
                            done: !1,
                            value: k(l)
                        };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        },
        f = function() {
            var h = {};
            return h.fa = h.next = h.head = h
        },
        g = 0;
    return c
});
n("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
        a: {
            var d = this;d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                    b = g;
                    break a
                }
            }
            b = void 0
        }
        return b
    }
});
n("Set", function(a) {
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({
                        x: 4
                    }),
                    d = new a(t([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size) return !1;
                var e = d.entries(),
                    f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }()) return a;
    var b = function(c) {
        this.aa = new Map;
        if (c) {
            c =
                t(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
        this.size = this.aa.size
    };
    b.prototype.add = function(c) {
        c = 0 === c ? 0 : c;
        this.aa.set(c, c);
        this.size = this.aa.size;
        return this
    };
    b.prototype.delete = function(c) {
        c = this.aa.delete(c);
        this.size = this.aa.size;
        return c
    };
    b.prototype.clear = function() {
        this.aa.clear();
        this.size = 0
    };
    b.prototype.has = function(c) {
        return this.aa.has(c)
    };
    b.prototype.entries = function() {
        return this.aa.entries()
    };
    b.prototype.values = function() {
        return this.aa.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
        var e = this;
        this.aa.forEach(function(f) {
            return c.call(d, f, f, e)
        })
    };
    return b
});
var pa = function(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
};
n("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return pa(this, function(b, c) {
            return [b, c]
        })
    }
});
n("Array.prototype.values", function(a) {
    return a ? a : function() {
        return pa(this, function(b, c) {
            return c
        })
    }
});
n("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return pa(this, function(b) {
            return b
        })
    }
});
n("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = null != c ? c : function(h) {
            return h
        };
        var e = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
        return e
    }
});
var qa = qa || {},
    x = this || self,
    ra = function() {},
    sa = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    },
    ta = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    },
    ua = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    wa = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b,
                arguments)
        }
    },
    xa = function(a, b, c) {
        xa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ua : wa;
        return xa.apply(null, arguments)
    },
    ya = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    },
    z = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ta = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.qg = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h -
                2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    },
    za = function(a) {
        return a
    };

function Aa(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Aa);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
z(Aa, Error);
Aa.prototype.name = "CustomError";
var Ba = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    Aa.call(this, c + a[d])
};
z(Ba, Aa);
Ba.prototype.name = "AssertionError";
var Ca = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Ba("" + e, f || []);
    },
    A = function(a, b, c) {
        a || Ca("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    Da = function(a, b) {
        throw new Ba("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    Ea = function(a, b, c) {
        "string" !== typeof a && Ca("Expected string but got %s: %s.", [sa(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    Fa = function(a, b, c) {
        Array.isArray(a) || Ca("Expected array but got %s: %s.", [sa(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    Ha = function(a, b, c, d) {
        a instanceof b || Ca("Expected instanceof %s but got %s.", [Ga(b), Ga(a)], c, Array.prototype.slice.call(arguments, 3));
        return a
    },
    Ga = function(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
var Ia = function(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
    }
    return b
};
var Ja = Array.prototype.indexOf ? function(a, b) {
        A(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Ka = Array.prototype.forEach ? function(a, b) {
        A(null != a.length);
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

function La(a, b) {
    b = Ja(a, b);
    var c;
    if (c = 0 <= b) A(null != a.length), Array.prototype.splice.call(a, b, 1);
    return c
};
var Ma = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    Na = /&/g,
    Oa = /</g,
    Pa = />/g,
    Qa = /"/g,
    Ra = /'/g,
    Sa = /\x00/g,
    Ta = /[\x00&<>"']/,
    Va = function(a, b) {
        var c = 0;
        a = Ma(String(a)).split(".");
        b = Ma(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Ua(0 == f[1].length ? 0 : parseInt(f[1],
                    10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ua(0 == f[2].length, 0 == g[2].length) || Ua(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    },
    Ua = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

function Wa() {
    var a = x.navigator;
    return a && (a = a.userAgent) ? a : ""
}

function B(a) {
    return -1 != Wa().indexOf(a)
}

function Xa(a) {
    for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
    return c
};

function Ya() {
    return B("Opera")
}

function Za() {
    return B("Trident") || B("MSIE")
}

function $a() {
    return B("Firefox") || B("FxiOS")
}

function ab() {
    return B("Safari") && !(bb() || B("Coast") || Ya() || B("Edge") || B("Edg/") || B("OPR") || $a() || B("Silk") || B("Android"))
}

function bb() {
    return (B("Chrome") || B("CriOS")) && !B("Edge") || B("Silk")
}

function cb() {
    return B("Android") && !(bb() || $a() || Ya() || B("Silk"))
}

function db(a) {
    var b = {};
    a.forEach(function(c) {
        b[c[0]] = c[1]
    });
    return function(c) {
        return b[c.find(function(d) {
            return d in b
        })] || ""
    }
}

function eb() {
    var a = Wa();
    if (Za()) return fb(a);
    a = Xa(a);
    var b = db(a);
    return Ya() ? b(["Version", "Opera"]) : B("Edge") ? b(["Edge"]) : B("Edg/") ? b(["Edg"]) : B("Silk") ? b(["Silk"]) : bb() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
}

function fb(a) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1]) return b[1];
    b = "";
    var c = /MSIE +([\d\.]+)/.exec(a);
    if (c && c[1])
        if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
            if (a && a[1]) switch (a[1]) {
                case "4.0":
                    b = "8.0";
                    break;
                case "5.0":
                    b = "9.0";
                    break;
                case "6.0":
                    b = "10.0";
                    break;
                case "7.0":
                    b = "11.0"
            } else b = "7.0";
            else b = c[1];
    return b
}

function gb(a) {
    var b = Wa();
    if ("Internet Explorer" === a) return Za() ? fb(b) : "";
    b = Xa(b);
    var c = db(b);
    switch (a) {
        case "Opera":
            if (Ya()) return c(["Version", "Opera"]);
            if (B("OPR")) return c(["OPR"]);
            break;
        case "Microsoft Edge":
            if (B("Edge")) return c(["Edge"]);
            if (B("Edg/")) return c(["Edg"]);
            break;
        case "Chromium":
            if (bb()) return c(["Chrome", "CriOS", "HeadlessChrome"])
    }
    return "Firefox" === a && $a() || "Safari" === a && ab() || "Android Browser" === a && cb() || "Silk" === a && B("Silk") ? (a = b[2]) && a[1] || "" : ""
}

function hb(a, b) {
    A(Math.floor(b) === b, "Major version must be an integer");
    a = gb(a);
    "" === a ? a = NaN : (a = a.split("."), a = 0 === a.length ? NaN : Number(a[0]));
    return a >= b
};

function ib() {
    return B("iPhone") && !B("iPod") && !B("iPad")
}

function jb() {
    var a = Wa(),
        b = "";
    B("Windows") ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : ib() || B("iPad") || B("iPod") ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : B("Macintosh") ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : -1 != Wa().toLowerCase().indexOf("kaios") ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : B("Android") ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : B("CrOS") && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
        b = (a = b.exec(a)) && a[1]);
    return 0 <= Va(b || "", 12)
};
var kb = function(a) {
    kb[" "](a);
    return a
};
kb[" "] = ra;
var mb = function(a) {
    var b = lb;
    return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9)
};
var nb = Ya(),
    ob = Za(),
    pb = B("Edge"),
    qb = B("Gecko") && !(-1 != Wa().toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
    rb = -1 != Wa().toLowerCase().indexOf("webkit") && !B("Edge"),
    sb;
a: {
    var tb = "",
        ub = function() {
            var a = Wa();
            if (qb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (pb) return /Edge\/([\d\.]+)/.exec(a);
            if (ob) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (rb) return /WebKit\/(\S+)/.exec(a);
            if (nb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();ub && (tb = ub ? ub[1] : "");
    if (ob) {
        var vb, wb = x.document;
        vb = wb ? wb.documentMode : void 0;
        if (null != vb && vb > parseFloat(tb)) {
            sb = String(vb);
            break a
        }
    }
    sb = tb
}
var xb = sb,
    lb = {},
    yb = function() {
        return mb(function() {
            return 0 <= Va(xb, 9)
        })
    };
cb();
bb();
ab();
var zb = {},
    Ab = null,
    Bb = function(a, b) {
        var c = sa(a);
        A("array" == c || "object" == c && "number" == typeof a.length, "encodeByteArray takes an array as a parameter");
        void 0 === b && (b = 0);
        if (!Ab) {
            Ab = {};
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
            for (var d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                zb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g],
                        k = Ab[h];
                    void 0 === k ? Ab[h] = g : A(k === g)
                }
            }
        }
        b = zb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f +=
            3) {
            k = a[f];
            var l = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = "" + g + k + l + h
        }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g = a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
var Cb = function() {
    this.blockSize = -1
};
var Db = function(a, b, c) {
    this.blockSize = -1;
    this.O = a;
    this.blockSize = c || a.blockSize || 16;
    this.Hd = Array(this.blockSize);
    this.sc = Array(this.blockSize);
    a = b;
    a.length > this.blockSize && (this.O.update(a), a = this.O.digest(), this.O.reset());
    for (c = 0; c < this.blockSize; c++) b = c < a.length ? a[c] : 0, this.Hd[c] = b ^ 92, this.sc[c] = b ^ 54;
    this.O.update(this.sc)
};
z(Db, Cb);
Db.prototype.reset = function() {
    this.O.reset();
    this.O.update(this.sc)
};
Db.prototype.update = function(a, b) {
    this.O.update(a, b)
};
Db.prototype.digest = function() {
    var a = this.O.digest();
    this.O.reset();
    this.O.update(this.Hd);
    this.O.update(a);
    return this.O.digest()
};
var Eb = function() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.A = Array(4);
    this.Ae = Array(this.blockSize);
    this.Jb = this.Ma = 0;
    this.reset()
};
z(Eb, Cb);
Eb.prototype.reset = function() {
    this.A[0] = 1732584193;
    this.A[1] = 4023233417;
    this.A[2] = 2562383102;
    this.A[3] = 271733878;
    this.Jb = this.Ma = 0
};
var Fb = function(a, b, c) {
    c || (c = 0);
    var d = Array(16);
    if ("string" === typeof b)
        for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
    else
        for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
    b = a.A[0];
    c = a.A[1];
    e = a.A[2];
    var f = a.A[3];
    var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>>
        15);
    g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
    f = b + (g << 12 & 4294967295 |
        g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
    b = c + (g <<
        5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
    c =
        e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
    f = b + (g << 11 & 4294967295 |
        g >>> 21);
    g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[12] +
        3873151461 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
        4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
        4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
    a.A[0] = a.A[0] + b & 4294967295;
    a.A[1] = a.A[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
    a.A[2] = a.A[2] + e & 4294967295;
    a.A[3] = a.A[3] + f & 4294967295
};
Eb.prototype.update = function(a, b) {
    void 0 === b && (b = a.length);
    for (var c = b - this.blockSize, d = this.Ae, e = this.Ma, f = 0; f < b;) {
        if (0 == e)
            for (; f <= c;) Fb(this, a, f), f += this.blockSize;
        if ("string" === typeof a)
            for (; f < b;) {
                if (d[e++] = a.charCodeAt(f++), e == this.blockSize) {
                    Fb(this, d);
                    e = 0;
                    break
                }
            } else
                for (; f < b;)
                    if (d[e++] = a[f++], e == this.blockSize) {
                        Fb(this, d);
                        e = 0;
                        break
                    }
    }
    this.Ma = e;
    this.Jb += b
};
Eb.prototype.digest = function() {
    var a = Array((56 > this.Ma ? this.blockSize : 2 * this.blockSize) - this.Ma);
    a[0] = 128;
    for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
    var c = 8 * this.Jb;
    for (b = a.length - 8; b < a.length; ++b) a[b] = c & 255, c /= 256;
    this.update(a);
    a = Array(16);
    for (b = c = 0; 4 > b; ++b)
        for (var d = 0; 32 > d; d += 8) a[c++] = this.A[b] >>> d & 255;
    return a
};
/*

 SPDX-License-Identifier: Apache-2.0
*/
var Gb = {};

function Hb(a, b) {
    for (var c in a)
        if (b.call(void 0, a[c], c, a)) return !0;
    return !1
}
var Ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Jb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Ib.length; f++) c = Ib[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var Kb;
var Nb = function(a, b) {
    this.Gc = a === Lb && b || "";
    this.te = Mb
};
Nb.prototype.tb = !0;
Nb.prototype.Ra = function() {
    return this.Gc
};
Nb.prototype.toString = function() {
    return "Const{" + this.Gc + "}"
};
var Ob = function(a) {
        if (a instanceof Nb && a.constructor === Nb && a.te === Mb) return a.Gc;
        Da("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    },
    Mb = {},
    Lb = {};
var Qb = function(a, b) {
    this.xc = b === Pb ? a : ""
};
m = Qb.prototype;
m.tb = !0;
m.Ra = function() {
    return this.xc.toString()
};
m.yd = !0;
m.hc = function() {
    return 1
};
m.toString = function() {
    return this.xc.toString()
};
var Rb = function(a) {
        if (a instanceof Qb && a.constructor === Qb) return a.xc;
        Da("expected object of type SafeUrl, got '" + a + "' of type " + sa(a));
        return "type_error:SafeUrl"
    },
    Sb = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
    Tb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Ub = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Pb = {},
    Vb = new Qb("about:invalid#zClosurez", Pb);
var Wb = {},
    Xb = function(a, b, c) {
        this.wc = c === Wb ? a : "";
        this.Oe = b;
        this.tb = this.yd = !0
    };
Xb.prototype.hc = function() {
    return this.Oe
};
Xb.prototype.Ra = function() {
    return this.wc.toString()
};
Xb.prototype.toString = function() {
    return this.wc.toString()
};
var Yb = function(a) {
        if (a instanceof Xb && a.constructor === Xb) return a.wc;
        Da("expected object of type SafeHtml, got '" + a + "' of type " + sa(a));
        return "type_error:SafeHtml"
    },
    $b = function(a) {
        if (a instanceof Xb) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.yd && (c = a.hc());
        a = b && a.tb ? a.Ra() : String(a);
        Ta.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Na, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Oa, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Pa, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Qa, "&quot;")), -1 != a.indexOf("'") &&
            (a = a.replace(Ra, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Sa, "&#0;")));
        return Zb(a, c)
    },
    Zb = function(a, b) {
        if (void 0 === Kb) {
            var c = null;
            var d = x.trustedTypes;
            if (d && d.createPolicy) try {
                c = d.createPolicy("goog#html", {
                    createHTML: za,
                    createScript: za,
                    createScriptURL: za
                })
            } catch (e) {
                x.console && x.console.error(e.message)
            }
            Kb = c
        }
        a = (c = Kb) ? c.createHTML(a) : a;
        return new Xb(a, b, Wb)
    },
    ac = new Xb(x.trustedTypes && x.trustedTypes.emptyHTML || "", 0, Wb);
var bc = function() {},
    cc = function(a, b) {
        if (b !== Gb) throw Error("Bad secret");
        this.Wd = a
    };
u(cc, bc);
cc.prototype.toString = function() {
    return this.Wd
};
var dc = new cc("about:invalid#zTSz", Gb);

function ec(a) {
    if (a instanceof bc)
        if (a instanceof cc) a = a.Wd;
        else throw Error("Unexpected type when unwrapping SafeUrl");
    else a = Rb(a);
    return a
};

function fc(a, b) {
    a.href = ec(b)
};
var gc = function(a) {
    this.vf = a
};

function hc(a) {
    return new gc(function(b) {
        return b.substr(0, a.length + 1).toLowerCase() === a + ":"
    })
}
var jc = [hc("data"), hc("http"), hc("https"), hc("mailto"), hc("ftp"), new gc(function(a) {
    return /^[^:]*([/?#]|$)/.test(a)
})];

function kc(a) {
    var b = void 0 === b ? jc : b;
    a: {
        b = void 0 === b ? jc : b;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof gc && d.vf(a)) {
                a = new cc(a, Gb);
                break a
            }
        }
        a = void 0
    }
    return a || dc
};
var lc = function(a) {
    var b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
};
var mc = function(a) {
    var b = !1,
        c;
    return function() {
        b || (c = a(), b = !0);
        return c
    }
}(function() {
    if ("undefined" === typeof document) return !1;
    var a = document.createElement("div"),
        b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    if (!a.firstChild) return !1;
    b = a.firstChild.firstChild;
    a.innerHTML = Yb(ac);
    return !b.parentElement
});
var nc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
    oc = function(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    },
    pc = function(a, b, c) {
        Ea(a);
        if (Array.isArray(b)) {
            Fa(b);
            for (var d = 0; d < b.length; d++) pc(a, String(b[d]), c)
        } else null != b &&
            c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    },
    qc = function(a, b) {
        A(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
        var c = [];
        for (b = b || 0; b < a.length; b += 2) pc(a[b], a[b + 1], c);
        return c.join("&")
    },
    rc = function(a, b) {
        var c = 2 == arguments.length ? qc(arguments[1], 0) : qc(arguments, 1);
        return oc(a, c)
    },
    sc = function(a, b, c) {
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        return oc(a, b + c)
    },
    tc = function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b -
                1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    },
    uc = /#|$/,
    vc = /[?&]($|#)/,
    wc = function(a, b) {
        for (var c = a.search(uc), d = 0, e, f = []; 0 <= (e = tc(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
        f.push(a.substr(d));
        return f.join("").replace(vc, "$1")
    },
    xc = function(a) {
        return sc(wc(document.location.href, "hl"), "hl", a)
    };
var yc = {
        xg: !0
    },
    zc = function() {
        throw Error("Do not instantiate directly");
    };
zc.prototype.Yb = null;
zc.prototype.toString = function() {
    return this.content
};
var Ac = function() {
    zc.call(this)
};
z(Ac, zc);
Ac.prototype.wa = yc;
var Bc = function(a) {
    var b = null != a && a.wa === yc;
    b && A(a.constructor === Ac);
    return b
};
var Cc = Object.freeze || function(a) {
    return a
};
var Dc = function(a) {
        if (null != a) switch (a.Yb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    },
    Gc = function(a) {
        return Bc(a) ? a : a instanceof Xb ? C(Yb(a).toString(), a.hc()) : C(String(String(a)).replace(Ec, Fc), Dc(a))
    },
    C = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Yb = d);
            return c
        }
    }(Ac),
    D = {},
    E = function(a) {
        if (Bc(a)) {
            var b = String;
            a = String(a.content).replace(Hc, "").replace(Ic, "&lt;");
            b = b(a).replace(Jc, Fc)
        } else b = String(a).replace(Ec,
            Fc);
        return b
    },
    Kc = function(a, b) {
        a || (a = b instanceof Function ? b.displayName || b.name || "unknown type name" : b instanceof Object ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : null === b ? "null" : typeof b, Da("expected @param origin of type string, but got " + a + "."))
    },
    Lc = {},
    Mc = function() {
        A(Lc === Lc, "found an incorrect call marker, was an internal function called from the top level?")
    },
    Nc = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    },
    Fc = function(a) {
        return Nc[a]
    },
    Ec = /[\x00\x22\x26\x27\x3c\x3e]/g,
    Jc = /[\x00\x22\x27\x3c\x3e]/g,
    Hc = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Ic = /</g;
var Oc = function(a, b) {
    return a + Math.random() * (b - a)
};
var Pc = function(a) {
    var b = document;
    return "string" === typeof a ? b.getElementById(a) : a
};
/*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function Qc(a, b, c, d) {
    c = b(c || Rc, d);
    if (ta(c))
        if (c instanceof zc) {
            if (c.wa !== yc) throw Error("Sanitized content was not of kind HTML.");
            b = c.toString();
            c = c.Yb;
            d = new Nb(Lb, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
            Ea(Ob(d), "must provide justification");
            A(!/^[\s\xa0]*$/.test(Ob(d)), "must provide non-empty justification");
            b = Zb(b, c || null)
        } else Da("Soy template output is unsafe for use as HTML: " + c), b = $b("zSoyz");
    else b = $b(String(c));
    a = A(a);
    if (mc())
        for (; a.lastChild;) a.removeChild(a.lastChild);
    a.innerHTML = Yb(b)
}
var Rc = {};
var Sc = function(a) {
        if (D["oauth2.gsi.soy.common.dialogHeader"]) return D["oauth2.gsi.soy.common.dialogHeader"](null, a);
        var b = '<div class="' + E("dialog-header") + '"><div class="' + E("google-icon") + '">';
        a = D["oauth2.gsi.soy.common.googleIcon"] ? D["oauth2.gsi.soy.common.googleIcon"](null, a) : C('<svg class="' + E("icon") + '" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/><path fill="none" d="M2 2h44v44H2z"/></svg>');
        return C(b + a + "</div><p>Continue with Google</p></div>")
    },
    Tc = function(a) {
        if (D["oauth2.gsi.soy.common.dialogFooter"]) var b = D["oauth2.gsi.soy.common.dialogFooter"](null, a);
        else {
            b = C;
            var c = '<div class="' + E("dialog-footer") + '">';
            if (D["oauth2.gsi.soy.common.languageSelector"]) var d = D["oauth2.gsi.soy.common.languageSelector"](null, a);
            else {
                var e = a.$b;
                d = a.languages;
                var f = '<div id="language_selector" class="' + E("language-selector") + '"><div class="' + E("language-selected") + '">';
                if ((e instanceof zc ? e.content : e) &&
                    (d instanceof zc ? d.content : d)) {
                    for (var g = "", h = d.length, k = 0; k < h; k++) {
                        var l = d[k],
                            r = l.code;
                        g += (r && e && r.tf && e.tf ? r.wa !== e.wa ? 0 : r.toString() === e.toString() : r instanceof zc && e instanceof zc ? r.wa != e.wa ? 0 : r.toString() == e.toString() : r == e) ? "" + l.displayName : ""
                    }
                    f += "<div>" + Gc(g) + "</div>"
                }
                f += '<div class="' + E("chevron") + '"></div></div><div id="language_list" class="' + E("language-list") + '">';
                if (d)
                    for (e = d.length, g = 0; g < e; g++) h = d[g], f += '<div class="' + E("language-option") + '" data-languagecode="' + E(h.code) + '">' + Gc(h.displayName) +
                        "</div>";
                d = C(f + "</div></div>")
            }
            c += d;
            D["oauth2.gsi.soy.common.footerMenu"] ? a = D["oauth2.gsi.soy.common.footerMenu"](null, a) : (a = '<ul class="' + E("footer-menu") + '"><li class="' + E("menu-item") + '"><a class="' + E("menu-content") + '" href="#">', a = a + 'Help</a></li><li class="' + (E("menu-item") + '"><a class="' + E("menu-content") + '" href="#">'), a = a + 'Privacy</a></li><li class="' + (E("menu-item") + '"><a class="' + E("menu-content") + '" href="#">'), a = C(a + "Terms</a></li></ul>"));
            b = b(c + a + "</div>")
        }
        return b
    };
var Uc = function(a, b) {
    var c = a.origin;
    Mc();
    if (D["oauth2.gsi.soy.itp.newgrant.dialog"]) b = D["oauth2.gsi.soy.itp.newgrant.dialog"]({
        origin: c
    }, b);
    else {
        Kc("string" === typeof c, c);
        a = C;
        var d = '<div class="' + E("dialog-container dialog-modal") + '"><div class="' + E("dialog inflated-dialog") + '"><div class="' + E("dialog-body") + '">' + Sc(b) + '<div class="' + E("dialog-content") + '">';
        if (D["oauth2.gsi.soy.itp.newgrant.title"]) var e = D["oauth2.gsi.soy.itp.newgrant.title"](null, b);
        else e = '<h1 class="' + E("title") + '">', e = C(e + "You'll need to give Safari permission to continue</h1>");
        d += e;
        Mc();
        D["oauth2.gsi.soy.itp.newgrant.consentForm"] ? c = D["oauth2.gsi.soy.itp.newgrant.consentForm"]({
            origin: c
        }, b) : (Kc("string" === typeof c, c), e = '<div class="' + E("consent-form") + '"><p class="' + E("consent-text") + '">', c = "In order to continue with your Google Account, Safari will ask if it's ok for Google to use cookies on " + Gc(c) + ".", c = C(e + c + "</p></div>"));
        c = d + c;
        D["oauth2.gsi.soy.itp.newgrant.buttonGroup"] ? d = D["oauth2.gsi.soy.itp.newgrant.buttonGroup"](null, b) : (d = '<div class="' + E("button-group") + '"><div class="' +
            E("button button-cancel") + '" id="confirm_no">', d = d + 'Cancel</div><div class="' + (E("button button-confirm") + '" id="confirm_yes">'), d = C(d + "Continue</div></div>"));
        b = a(c + d + "</div></div>" + Tc(b) + "</div></div>")
    }
    return b
};
var Vc = function(a, b) {
    var c = a.origin;
    Mc();
    if (D["oauth2.gsi.soy.itp.regrant.dialog"]) b = D["oauth2.gsi.soy.itp.regrant.dialog"]({
        origin: c
    }, b);
    else {
        Kc("string" === typeof c, c);
        a = C;
        var d = '<div class="' + E("dialog-container dialog-modal") + '"><div class="' + E("dialog") + '"><div class="' + E("dialog-body") + '">' + Sc(b) + '<div class="' + E("dialog-content") + '">';
        Mc();
        if (D["oauth2.gsi.soy.itp.regrant.title"]) var e = D["oauth2.gsi.soy.itp.regrant.title"]({
            origin: c
        }, b);
        else Kc("string" === typeof c, c), e = '<h1 class="' + E("title") +
            '">', c = "Do you still want Safari to let Google use cookies on " + Gc(c) + "?", e = C(e + c + "</h1>");
        d += e;
        D["oauth2.gsi.soy.itp.regrant.buttonGroup"] ? e = D["oauth2.gsi.soy.itp.regrant.buttonGroup"](null, b) : (e = '<div class="' + E("button-group button-group-high") + '"><div class="' + E("button button-cancel") + '" id="confirm_no">', e = e + 'No thanks</div><div class="' + (E("button button-confirm") + '" id="confirm_yes">'), e = C(e + "Yes</div></div>"));
        b = a(d + e + "</div></div>" + Tc(b) + "</div></div>")
    }
    return b
};

function Wc(a) {
    a && "function" == typeof a.U && a.U()
};
var Xc = function() {
    this.Aa = this.Aa;
    this.qa = this.qa
};
Xc.prototype.Aa = !1;
Xc.prototype.U = function() {
    this.Aa || (this.Aa = !0, this.da())
};
var Yc = function(a, b) {
    a.Aa ? b() : (a.qa || (a.qa = []), a.qa.push(b))
};
Xc.prototype.da = function() {
    if (this.qa)
        for (; this.qa.length;) this.qa.shift()()
};
var Zc = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Za = !1
};
Zc.prototype.stopPropagation = function() {
    this.Za = !0
};
Zc.prototype.preventDefault = function() {
    this.defaultPrevented = !0
};
var $c = function() {
    if (!x.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
        b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
    try {
        x.addEventListener("test", ra, b), x.removeEventListener("test", ra, b)
    } catch (c) {}
    return a
}();
var ad;
ad = rb ? "webkitTransitionEnd" : "transitionend";
var bd = function(a, b) {
    Zc.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.Qa = null;
    a && this.V(a, b)
};
z(bd, Zc);
var cd = Cc({
    2: "touch",
    3: "pen",
    4: "mouse"
});
bd.prototype.V = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) {
        if (qb) {
            a: {
                try {
                    kb(b.nodeName);
                    var e = !0;
                    break a
                } catch (f) {}
                e = !1
            }
            e || (b = null)
        }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
        d.screenY || 0) : (this.offsetX = rb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = rb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : cd[a.pointerType] || "";
    this.state = a.state;
    this.Qa = a;
    a.defaultPrevented && bd.ta.preventDefault.call(this)
};
bd.prototype.stopPropagation = function() {
    bd.ta.stopPropagation.call(this);
    this.Qa.stopPropagation ? this.Qa.stopPropagation() : this.Qa.cancelBubble = !0
};
bd.prototype.preventDefault = function() {
    bd.ta.preventDefault.call(this);
    var a = this.Qa;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
};
var dd = "closure_listenable_" + (1E6 * Math.random() | 0);
var ed = 0;
var fd = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.l = e;
        this.key = ++ed;
        this.cb = this.nb = !1
    },
    gd = function(a) {
        a.cb = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.l = null
    };
var hd = function(a) {
    this.src = a;
    this.D = {};
    this.jb = 0
};
hd.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.D[f];
    a || (a = this.D[f] = [], this.jb++);
    var g = id(a, b, d, e); - 1 < g ? (b = a[g], c || (b.nb = !1)) : (b = new fd(b, this.src, f, !!d, e), b.nb = c, a.push(b));
    return b
};
hd.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.D)) return !1;
    var e = this.D[a];
    b = id(e, b, c, d);
    return -1 < b ? (gd(e[b]), A(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.D[a], this.jb--), !0) : !1
};
var jd = function(a, b) {
    var c = b.type;
    c in a.D && La(a.D[c], b) && (gd(b), 0 == a.D[c].length && (delete a.D[c], a.jb--))
};
hd.prototype.ic = function(a, b, c, d) {
    a = this.D[a.toString()];
    var e = -1;
    a && (e = id(a, b, c, d));
    return -1 < e ? a[e] : null
};
hd.prototype.hasListener = function(a, b) {
    var c = void 0 !== a,
        d = c ? a.toString() : "",
        e = void 0 !== b;
    return Hb(this.D, function(f) {
        for (var g = 0; g < f.length; ++g)
            if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
        return !1
    })
};
var id = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.cb && f.listener == b && f.capture == !!c && f.l == d) return e
    }
    return -1
};
var kd = "closure_lm_" + (1E6 * Math.random() | 0),
    ld = {},
    md = 0,
    od = function(a, b, c, d, e) {
        if (d && d.once) return nd(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) od(a, b[f], c, d, e);
            return null
        }
        c = pd(c);
        return a && a[dd] ? a.P(b, c, ta(d) ? !!d.capture : !!d, e) : qd(a, b, c, !1, d, e)
    },
    qd = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = ta(e) ? !!e.capture : !!e,
            h = rd(a);
        h || (a[kd] = h = new hd(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = sd();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) $c || (e = g), void 0 ===
            e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(td(b.toString()), d);
        else if (a.addListener && a.removeListener) A("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        md++;
        return c
    },
    sd = function() {
        var a = ud,
            b = function(c) {
                return a.call(b.src, b.listener, c)
            };
        return b
    },
    nd = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) nd(a, b[f], c, d, e);
            return null
        }
        c = pd(c);
        return a &&
            a[dd] ? a.N.add(String(b), c, !0, ta(d) ? !!d.capture : !!d, e) : qd(a, b, c, !0, d, e)
    },
    vd = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) vd(a, b[f], c, d, e);
        else d = ta(d) ? !!d.capture : !!d, c = pd(c), a && a[dd] ? a.kb(b, c, d, e) : a && (a = rd(a)) && (b = a.ic(b, c, d, e)) && wd(b)
    },
    wd = function(a) {
        if ("number" !== typeof a && a && !a.cb) {
            var b = a.src;
            if (b && b[dd]) jd(b.N, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(td(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                md--;
                (c = rd(b)) ? (jd(c, a), 0 == c.jb && (c.src = null, b[kd] = null)) : gd(a)
            }
        }
    },
    td = function(a) {
        return a in ld ? ld[a] : ld[a] = "on" + a
    },
    ud = function(a, b) {
        if (a.cb) a = !0;
        else {
            b = new bd(b, this);
            var c = a.listener,
                d = a.l || a.src;
            a.nb && wd(a);
            a = c.call(d, b)
        }
        return a
    },
    rd = function(a) {
        a = a[kd];
        return a instanceof hd ? a : null
    },
    xd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    pd = function(a) {
        A(a, "Listener can not be null.");
        if ("function" === typeof a) return a;
        A(a.handleEvent, "An object listener must have handleEvent method.");
        a[xd] || (a[xd] =
            function(b) {
                return a.handleEvent(b)
            });
        return a[xd]
    };
var yd = function() {
    this.Bb = new Set;
    this.md = !1
};
yd.prototype.P = function(a, b, c) {
    a = od(a, b, c);
    this.Bb.add(a);
    return a
};
yd.prototype.kb = function(a) {
    wd(a);
    this.Bb.delete(a)
};
yd.prototype.U = function() {
    this.md || (this.Bb.forEach(function(a) {
        wd(a)
    }), this.Bb.clear(), this.md = !0)
};
var zd = function() {
    yd.call(this);
    this.qb = null;
    this.Xb = !1
};
u(zd, yd);
var Ad = function(a, b) {
    if (a.qb) throw Error("Component already rendered.");
    a.Xb = !1;
    a.qb = b
};
zd.prototype.U = function() {
    if (!this.Xb) {
        yd.prototype.U.call(this);
        for (var a = this.qb, b; b = a.firstChild;) a.removeChild(b);
        this.qb = null;
        this.Xb = !0
    }
};
var Bd = function() {
    yd.call(this);
    this.ja = this.Fb = this.Eb = null;
    this.Yd = this.Kd = !1
};
u(Bd, yd);
Bd.prototype.register = function(a, b) {
    var c = this;
    if (this.Yd) throw Error("LanguageSelectorModel is already registered.");
    this.Yd = !0;
    this.Fb = a;
    this.ja = b;
    this.Jd = this.P(this.Fb, "click", function() {
        return Cd(c)
    })
};
var Cd = function(a) {
        a.ja.style.visibility = "visible";
        a.ja.style.opacity = 1;
        a.kb(a.Jd);
        a.yf = a.P(document, "mouseup", function(b) {
            return Dd(a, b)
        })
    },
    Dd = function(a, b) {
        a.Eb = b.target.getAttribute("data-languagecode");
        if (null != a.Eb || b.target != a.ja) a.kb(a.yf), a.xf = a.P(a.ja, ad, function() {
            return Ed(a)
        }), a.ja.style.opacity = 0
    },
    Ed = function(a) {
        a.kb(a.xf);
        a.ja.style.visibility = "hidden";
        a.Jd = a.P(a.Fb, "click", function() {
            return Cd(a)
        });
        if (null != a.Eb) {
            var b = xc(a.Eb);
            fc(document.location, kc(b))
        }
    };
Bd.prototype.U = function() {
    this.Kd || (yd.prototype.U.call(this), this.ja = this.Fb = null, this.Kd = !0)
};
var Fd = function(a) {
    var b = a.origin,
        c = a.$b;
    a = a.languages;
    zd.call(this);
    this.i = b;
    this.jd = c;
    this.Ld = a;
    this.Gd = !1
};
u(Fd, zd);
Fd.prototype.Of = function(a, b, c) {
    Ad(this, a);
    Qc(a, Uc, {
        origin: this.i
    }, {
        $b: this.jd,
        languages: this.Ld
    });
    a = Pc("confirm_yes");
    this.P(a, "click", function() {
        (void 0 == document.hasStorageAccess ? Promise.resolve() : document.requestStorageAccess()).then(function() {
            return b()
        }, function() {
            return c()
        })
    });
    a = Pc("confirm_no");
    this.P(a, "click", function() {
        return c()
    });
    Gd(this)
};
Fd.prototype.Pf = function(a, b, c) {
    Ad(this, a);
    Qc(a, Vc, {
        origin: this.i
    }, {
        $b: this.jd,
        languages: this.Ld
    });
    a = Pc("confirm_yes");
    this.P(a, "click", function() {
        return b()
    });
    a = Pc("confirm_no");
    this.P(a, "click", function() {
        return c()
    });
    Gd(this)
};
var Gd = function(a) {
    void 0 == a.zb && (a.zb = new Bd);
    var b = Pc("language_selector"),
        c = Pc("language_list");
    a.zb.register(b, c)
};
Fd.prototype.U = function() {
    this.Gd || (zd.prototype.U.call(this), void 0 != this.zb && this.zb.U(), this.Gd = !0)
};
var Hd, Id, Jd = void 0,
    Kd = function(a) {
        try {
            return x.JSON.parse.call(x.JSON, a)
        } catch (b) {
            return !1
        }
    },
    Ld = function(a) {
        return Object.prototype.toString.call(a)
    },
    Md = Ld(0),
    Nd = Ld(new Date(0)),
    Od = Ld(!0),
    Pd = Ld(""),
    Qd = Ld({}),
    Rd = Ld([]),
    Sd = function(a, b) {
        if (b)
            for (var c = 0, d = b.length; c < d; ++c)
                if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = Ld(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a,
                    "toJSON") || (e !== Rd || a.constructor !== Array && a.constructor !== Object) && (e !== Qd || a.constructor !== Array && a.constructor !== Object) && e !== Pd && e !== Md && e !== Od && e !== Nd)) return Sd(a.toJSON.call(a), c);
            if (null == a) b[b.length] = "null";
            else if (e === Md) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
            else if (e === Od) b[b.length] = String(!!Number(a));
            else {
                if (e === Nd) return Sd(a.toISOString.call(a), c);
                if (e === Rd && Ld(a.length) === Md) {
                    b[b.length] = "[";
                    var f = 0;
                    for (d = Number(a.length) >> 0; f < d; ++f) f &&
                        (b[b.length] = ","), b[b.length] = Sd(a[f], c) || "null";
                    b[b.length] = "]"
                } else if (e == Pd && Ld(a.length) === Md) {
                    b[b.length] = '"';
                    f = 0;
                    for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                    b[b.length] = '"'
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (f in a) Object.prototype.hasOwnProperty.call(a,
                        f) && (e = Sd(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = Sd(f), b[b.length] = ":", b[b.length] = e));
                    b[b.length] = "}"
                } else return
            }
            return b.join("")
        }
    },
    Td = /[\0-\x07\x0b\x0e-\x1f]/,
    Ud = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
    Vd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
    Wd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
    Xd = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
    Yd = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
    Zd = /[ \t\n\r]+/g,
    $d = /[^"]:/,
    ae = /""/g,
    be = /true|false|null/g,
    ce = /00/,
    de = /[\{]([^0\}]|0[^:])/,
    ee = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
    fe = /[^\[,:][\[\{]/,
    ge = /^(\{|\}|\[|\]|,|:|0)+/,
    he = /\u2028/g,
    ie = /\u2029/g,
    je = function(a) {
        a = String(a);
        if (Td.test(a) || Ud.test(a) || Vd.test(a) || Wd.test(a)) return !1;
        var b = a.replace(Xd, '""');
        b = b.replace(Yd, "0");
        b = b.replace(Zd, "");
        if ($d.test(b)) return !1;
        b = b.replace(ae, "0");
        b = b.replace(be, "0");
        if (ce.test(b) || de.test(b) || ee.test(b) || fe.test(b) || !b || (b = b.replace(ge, ""))) return !1;
        a = a.replace(he, "\\u2028").replace(ie,
            "\\u2029");
        b = void 0;
        try {
            b = Jd ? [Kd(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (c) {
            return !1
        }
        return b && 1 === b.length ? b[0] : !1
    },
    ke = function() {
        var a = ((x.document || {}).scripts || []).length;
        if ((void 0 === Hd || void 0 === Jd || Id !== a) && -1 !== Id) {
            Hd = Jd = !1;
            Id = -1;
            try {
                try {
                    Jd = !!x.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === x.JSON.stringify.call(x.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === Kd("true") && 3 === Kd('[{"a":3}]')[0].a
                } catch (b) {}
                Hd = Jd &&
                    !Kd("[00]") && !Kd('"\u0007"') && !Kd('"\\0"') && !Kd('"\\v"')
            } finally {
                Id = a
            }
        }
    },
    le = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
    me = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T",
            String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"
        ].join("")
    };
Date.prototype.toISOString = le ? me : Date.prototype.toISOString;
var ne, oe = !1,
    F = function(a) {
        try {
            oe && window.console && window.console.log && window.console.log(a)
        } catch (b) {}
    },
    pe = function(a, b) {
        if (!a) return -1;
        if (a.indexOf) return a.indexOf(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b) return c;
        return -1
    },
    G = function(a, b) {
        function c() {}
        if (!a) throw Error("Child class cannot be empty.");
        if (!b) throw Error("Parent class cannot be empty.");
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    },
    qe = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    },
    re = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (null === d || void 0 === d) d = "";
                b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
        return b.join("&")
    },
    se = function(a) {
        var b = window.location.hash;
        a = new RegExp("[&#]" + a + "=([^&]*)");
        b = decodeURIComponent(b);
        b = a.exec(b);
        return null == b ? "" : b[1].replace(/\+/g, " ")
    },
    te = function(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, !1);
        else if (a.attachEvent) a.attachEvent("on" + b, c);
        else throw Error("Add event handler for " + b + " failed.");
    },
    ue = function(a, b) {
        a = (a || "").split(" ");
        b = (b || "").split(" ");
        for (var c = 0; c < b.length; c++)
            if (b[c] && 0 > pe(a, b[c])) return !1;
        return !0
    },
    ve = function() {
        if ("undefined" != typeof ne) return ne;
        a: {
            try {
                if (window.localStorage) {
                    var a = window.localStorage;
                    break a
                }
            } catch (b) {}
            a = void 0
        }
        if (!a) return ne = !1;
        try {
            a.setItem("test", "test"), a.removeItem("test"), ne = !0
        } catch (b) {
            ne = !1
        }
        return ne
    },
    we = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10)
    },
    xe = function() {
        return Object.hasOwnProperty.call(window,
            "ActiveXObject") && !window.ActiveXObject
    },
    ye = function() {
        var a = navigator.userAgent.toLowerCase();
        return 0 > a.indexOf("edge/") && (-1 < a.indexOf("chrome/") || -1 < a.indexOf("crios/"))
    },
    ze = function() {
        var a = navigator.userAgent,
            b;
        if (b = !!a && -1 != a.indexOf("CriOS")) b = -1, (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1), b = 48 > b;
        return b
    },
    Ae = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android")
    },
    I = window.JSON,
    Be = function(a) {
        this.Oc = a || [];
        this.R = {}
    };
Be.prototype.addEventListener = function(a, b) {
    if (!(0 <= pe(this.Oc, a))) throw Error("Unrecognized event type: " + a);
    if (!qe(b)) throw Error("The listener for event '" + a + "' is not a function.");
    this.R[a] || (this.R[a] = []);
    0 > pe(this.R[a], b) && this.R[a].push(b)
};
Be.prototype.removeEventListener = function(a, b) {
    if (!(0 <= pe(this.Oc, a))) throw Error("Unrecognized event type: " + a);
    qe(b) && this.R[a] && this.R[a].length && (b = pe(this.R[a], b), 0 <= b && this.R[a].splice(b, 1))
};
Be.prototype.dispatchEvent = function(a) {
    var b = a.type;
    if (!(b && 0 <= pe(this.Oc, b))) throw Error("Failed to dispatch unrecognized event type: " + b);
    if (this.R[b] && this.R[b].length)
        for (var c = 0, d = this.R[b].length; c < d; c++) this.R[b][c](a)
};
I = {
    parse: function(a) {
        a = "[" + String(a) + "]"; - 1 === Id ? a = !1 : (ke(), a = (Hd ? Kd : je)(a));
        if (!1 === a || 1 !== a.length) throw new SyntaxError("JSON parsing failed.");
        return a[0]
    },
    stringify: function(a) {
        -1 !== Id ? (ke(), a = Jd ? x.JSON.stringify.call(x.JSON, a) : Sd(a)) : a = void 0;
        return a
    }
};
var Ce = function(a) {
    this.cd = a
};
var De = function(a, b, c) {
    this.Wa = a;
    this.Ee = b;
    this.sb = c || [];
    this.ua = new Map
};
m = De.prototype;
m.ag = function(a) {
    this.ua.set(this.ud(na.apply(1, arguments)), [new Ce(a)])
};
m.sd = function() {
    var a = this.ud(na.apply(0, arguments));
    return this.ua.has(a) ? this.ua.get(a) : void 0
};
m.df = function() {
    var a = this.sd(na.apply(0, arguments));
    return a && a.length ? a[0] : void 0
};
m.clear = function() {
    this.ua.clear()
};
m.ud = function() {
    var a = na.apply(0, arguments);
    return a ? a.join(",") : "key"
};
var Ee = function(a, b) {
    De.call(this, a, 3, b)
};
u(Ee, De);
Ee.prototype.zd = function() {
    this.vb(1, na.apply(0, arguments))
};
Ee.prototype.vb = function(a) {
    var b = na.apply(1, arguments),
        c = 0,
        d = this.df(b);
    d && (c = d.cd);
    this.ag(c + a, b)
};
var J = function() {
    Xc.call(this);
    this.N = new hd(this);
    this.ue = this;
    this.vc = null
};
z(J, Xc);
J.prototype[dd] = !0;
m = J.prototype;
m.addEventListener = function(a, b, c, d) {
    od(this, a, b, c, d)
};
m.removeEventListener = function(a, b, c, d) {
    vd(this, a, b, c, d)
};
m.dispatchEvent = function(a) {
    Fe(this);
    var b = this.vc;
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.vc) c.push(b), A(1E3 > ++d, "infinite loop")
    }
    b = this.ue;
    d = a.type || a;
    if ("string" === typeof a) a = new Zc(a, b);
    else if (a instanceof Zc) a.target = a.target || b;
    else {
        var e = a;
        a = new Zc(d, b);
        Jb(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.Za && 0 <= f; f--) {
            var g = a.currentTarget = c[f];
            e = Ge(g, d, !0, a) && e
        }
    a.Za || (g = a.currentTarget = b, e = Ge(g, d, !0, a) && e, a.Za || (e = Ge(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.Za && f < c.length; f++) g = a.currentTarget = c[f], e = Ge(g, d, !1, a) &&
            e;
    return e
};
m.da = function() {
    J.ta.da.call(this);
    if (this.N) {
        var a = this.N,
            b = 0,
            c;
        for (c in a.D) {
            for (var d = a.D[c], e = 0; e < d.length; e++) ++b, gd(d[e]);
            delete a.D[c];
            a.jb--
        }
    }
    this.vc = null
};
m.P = function(a, b, c, d) {
    Fe(this);
    return this.N.add(String(a), b, !1, c, d)
};
m.kb = function(a, b, c, d) {
    this.N.remove(String(a), b, c, d)
};
var Ge = function(a, b, c, d) {
    b = a.N.D[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.cb && g.capture == c) {
            var h = g.listener,
                k = g.l || g.src;
            g.nb && jd(a.N, g);
            e = !1 !== h.call(k, d) && e
        }
    }
    return e && !d.defaultPrevented
};
J.prototype.ic = function(a, b, c, d) {
    return this.N.ic(String(a), b, c, d)
};
J.prototype.hasListener = function(a, b) {
    return this.N.hasListener(void 0 !== a ? String(a) : void 0, b)
};
var Fe = function(a) {
    A(a.N, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var He = function(a, b) {
    J.call(this);
    this.xb = a || 1;
    this.ib = b || x;
    this.Zc = xa(this.mg, this);
    this.Od = Date.now()
};
z(He, J);
m = He.prototype;
m.enabled = !1;
m.j = null;
m.setInterval = function(a) {
    this.xb = a;
    this.j && this.enabled ? (this.stop(), this.start()) : this.j && this.stop()
};
m.mg = function() {
    if (this.enabled) {
        var a = Date.now() - this.Od;
        0 < a && a < .8 * this.xb ? this.j = this.ib.setTimeout(this.Zc, this.xb - a) : (this.j && (this.ib.clearTimeout(this.j), this.j = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
    }
};
m.start = function() {
    this.enabled = !0;
    this.j || (this.j = this.ib.setTimeout(this.Zc, this.xb), this.Od = Date.now())
};
m.stop = function() {
    this.enabled = !1;
    this.j && (this.ib.clearTimeout(this.j), this.j = null)
};
m.da = function() {
    He.ta.da.call(this);
    this.stop();
    delete this.ib
};
var Ie = function(a, b, c) {
    if ("function" === typeof a) c && (a = xa(a, c));
    else if (a && "function" == typeof a.handleEvent) a = xa(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
};
var Je = function(a) {
    this.kg = a;
    this.Cb = new Map;
    this.Qe = new Set;
    this.qc = 0;
    this.sf = 100;
    this.bf = 3E4;
    this.s = new He(this.bf);
    this.s.P("tick", this.Cc, !1, this);
    this.Xf = !1
};
m = Je.prototype;
m.Cc = function() {
    var a = this.Cb.values();
    a = [].concat(fa(a)).filter(function(b) {
        return b.ua.size
    });
    a.length && this.kg.flush(a, this.Xf);
    Ke(a);
    this.qc = 0;
    this.s.enabled && this.s.stop()
};
m.ve = function(a) {
    var b = na.apply(1, arguments);
    this.Cb.has(a) || this.Cb.set(a, new Ee(a, b))
};
m.jc = function(a) {
    return this.Qe.has(a) ? void 0 : this.Cb.get(a)
};
m.zd = function(a) {
    this.vb.apply(this, [a, 1].concat(fa(na.apply(1, arguments))))
};
m.vb = function(a, b) {
    var c = na.apply(2, arguments),
        d = this.jc(a);
    d && d instanceof Ee && (d.vb(b, c), this.s.enabled || this.s.start(), this.qc++, this.qc >= this.sf && this.Cc())
};
var Ke = function(a) {
    for (var b = 0; b < a.length; b++) a[b].clear()
};
var Le = function(a) {
    this.Wa = "/client_streamz/google_sign_in_web_client/idpiframe/cookie_blocked_count";
    this.Fc = a;
    this.Fc.ve(this.Wa, {
        od: 3,
        nd: "browser"
    }, {
        od: 3,
        nd: "browser_version"
    })
};
Le.prototype.oc = function(a, b) {
    this.Fc.zd(this.Wa, a, b)
};
Le.prototype.jc = function() {
    return this.Fc.jc(this.Wa)
};
A(!0);
var Me = "function" === typeof Uint8Array;
var Ne = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;

function Oe(a) {
    Fa(a, "state is only maintained on arrays.");
    Object.isFrozen(a) || (Ne ? a[Ne] |= 1 : void 0 !== a.wb ? a.wb |= 1 : Object.defineProperties(a, {
        wb: {
            value: 1,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }));
    return a
};

function Pe(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
var Qe, Re = Symbol("exempted jspb subclass"),
    Se = Symbol("generated by jspb");

function Te(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "object":
            if (a && !Array.isArray(a) && Me && null != a && a instanceof Uint8Array) return Bb(a)
    }
    return a
};

function Ue(a, b) {
    if (null != a) {
        if (Array.isArray(a)) a = Ve(a, b);
        else if (Pe(a)) {
            var c = {},
                d;
            for (d in a) c[d] = Ue(a[d], b);
            a = c
        } else a = b(a);
        return a
    }
}

function Ve(a, b) {
    Fa(a);
    for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Ue(c[d], b);
    if (b = Array.isArray(a)) Fa(a, "state is only maintained on arrays."), a = Ne ? a[Ne] : a.wb, b = (null == a ? 0 : a) & 1;
    b && Oe(c);
    return c
}

function We(a) {
    if (a && "object" == typeof a && a.toJSON) return a.toJSON();
    a = Te(a);
    return Array.isArray(a) ? Xe(a) : a
}

function Xe(a) {
    Fa(a);
    return Ve(a, We)
}

function Ye(a) {
    return Me && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
};
var Ze;
var K = function(a, b, c) {
        Ha(this, K, "The message constructor should only be used by subclasses");
        A(this.constructor !== K, "Message is an abstract class and cannot be directly constructed");
        if (!0 !== this[Re]) {
            A(!0 === this[Se], "Message can only be subclassed by proto gencode.");
            var d = Object.getPrototypeOf(A(Object.getPrototypeOf(this)));
            A(d.hasOwnProperty(Se), "Generated jspb classes should not be extended")
        }
        d = Ze;
        Ze = null;
        a || (a = d);
        d = this.constructor.vg;
        a || (a = d ? [d] : []);
        this.la = (d ? 0 : -1) - (this.constructor.tg || 0);
        this.o = void 0;
        this.K = a;
        a: {
            d = this.K.length;a = d - 1;
            if (d && (d = this.K[a], Pe(d))) {
                this.ra = a - this.la;
                this.$ = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.ra = Math.max(b, a + 1 - this.la), this.$ = void 0) : this.ra = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.ra) a += this.la, (d = this.K[a]) ? Array.isArray(d) && Oe(d) : this.K[a] = $e;
                else {
                    d = this.$ || (this.$ = this.K[this.ra + this.la] = {});
                    var e = d[a];
                    e ? Array.isArray(e) && Oe(e) : d[a] = $e
                }
    },
    $e = Object.freeze(Oe([])),
    af = function(a, b, c) {
        return -1 === b ? null : b >= a.ra ? a.$ ? a.$[b] : void 0 : (void 0 ===
            c ? 0 : c) && a.$ && (c = a.$[b], null != c) ? c : a.K[b + a.la]
    },
    bf = function(a, b) {
        a = af(a, 1);
        return null == a ? b : a
    },
    L = function(a, b, c, d) {
        b < a.ra && (void 0 === d || !d) ? a.K[b + a.la] = c : (a.$ || (a.$ = a.K[a.ra + a.la] = {}))[b] = c;
        return a
    },
    cf = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return L(a, b, null == c ? Oe([]) : Array.isArray(c) ? Oe(c) : c, d)
    },
    df = function(a, b, c, d) {
        for (var e = 0, f = 0; f < c.length; f++) {
            var g = c[f];
            null != af(a, g) && (0 !== e && L(a, e, void 0, !1), e = g)
        }(c = e) && c !== b && null != d && (a.o && c in a.o && (a.o[c] = void 0), L(a, c, void 0));
        L(a, b, d)
    },
    ef = function(a, b,
        c, d, e) {
        if (-1 === c) return null;
        a.o || (a.o = {});
        var f = a.o[c];
        if (f) return f;
        e = af(a, c, void 0 === e ? !1 : e);
        if (null == e && !d) return f;
        b = new b(e);
        return a.o[c] = b
    },
    ff = function(a, b, c, d) {
        a.o || (a.o = {});
        var e = a.o[c];
        if (!e) {
            e = void 0 === d ? !1 : d;
            e = void 0 === e ? !1 : e;
            d = af(a, c, e);
            null == d && (d = $e);
            d === $e && (d = Oe(d.slice()), L(a, c, d, e));
            e = [];
            for (var f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.o[c] = e
        }
        return e
    },
    gf = function(a, b, c) {
        var d;
        a.o || (a.o = {});
        var e = c ? c.K : c;
        a.o[b] = c;
        return L(a, b, e, void 0 === d ? !1 : d)
    },
    hf = function(a, b, c) {
        var d = void 0 ===
            d ? !1 : d;
        if (c) {
            var e = Oe([]);
            for (var f = 0; f < c.length; f++) e[f] = c[f].K;
            a.o || (a.o = {});
            a.o[b] = c
        } else a.o && (a.o[b] = void 0), e = $e;
        return L(a, b, e, d)
    };
K.prototype.toJSON = function() {
    var a = this.K;
    return Qe ? a : Xe(a)
};

function jf(a, b) {
    return Te(b)
}
var kf = function(a) {
    Qe = !0;
    try {
        return JSON.stringify(a.toJSON(), jf)
    } finally {
        Qe = !1
    }
};
K.prototype.toString = function() {
    return this.K.toString()
};
K.prototype.getExtension = function(a) {
    return a.ff(this)
};
K.prototype.clone = function() {
    var a = Ha(this, K),
        b = a.constructor;
    var c = a.K;
    Fa(c);
    Ze = c = Ve(c, Ye);
    b = new b(c);
    Ze = null;
    lf(b, a);
    return b
};

function lf(a, b) {
    A(a, "expected `to` to be non-null");
    A(b, "expected `from` to be non-null");
    b.Bd && (a.Bd = b.Bd.slice());
    var c = b.o;
    if (c) {
        b = b.$;
        for (var d in c) {
            var e = c[d];
            if (e) {
                var f = !(!b || !b[d]),
                    g = +d;
                if (Array.isArray(e)) {
                    if (e.length)
                        for (f = ff(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) lf(f[g], Ha(e[g], K))
                } else Ha(e, K), (f = ef(a, e.constructor, g, void 0, f)) && lf(f, e)
            }
        }
    }
};

function mf(a) {
    var b = this.Ke,
        c = this.af;
    return this.uf ? ff(a, b, c, !0) : ef(a, b, c, void 0, !0)
};
var M = function() {
    K.apply(this, arguments)
};
u(M, K);
M.prototype[Se] = !0;
var of = function(a) {
    M.call(this, a, -1, nf)
};
u( of , M);
var nf = [2];
var pf = function(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !==
        c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};

function qf() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        r = l = 0
    }

    function b(q) {
        for (var w = g, p = 0; 64 > p; p += 4) w[p / 4] = q[p] << 24 | q[p + 1] << 16 | q[p + 2] << 8 | q[p + 3];
        for (p = 16; 80 > p; p++) q = w[p - 3] ^ w[p - 8] ^ w[p - 14] ^ w[p - 16], w[p] = (q << 1 | q >>> 31) & 4294967295;
        q = e[0];
        var v = e[1],
            y = e[2],
            H = e[3],
            X = e[4];
        for (p = 0; 80 > p; p++) {
            if (40 > p)
                if (20 > p) {
                    var T = H ^ v & (y ^ H);
                    var va = 1518500249
                } else T = v ^ y ^ H, va = 1859775393;
            else 60 > p ? (T = v & y | H & (v | y), va = 2400959708) : (T = v ^ y ^ H, va = 3395469782);
            T = ((q << 5 | q >>> 27) & 4294967295) +
                T + X + va + w[p] & 4294967295;
            X = H;
            H = y;
            y = (v << 30 | v >>> 2) & 4294967295;
            v = q;
            q = T
        }
        e[0] = e[0] + q & 4294967295;
        e[1] = e[1] + v & 4294967295;
        e[2] = e[2] + y & 4294967295;
        e[3] = e[3] + H & 4294967295;
        e[4] = e[4] + X & 4294967295
    }

    function c(q, w) {
        if ("string" === typeof q) {
            q = unescape(encodeURIComponent(q));
            for (var p = [], v = 0, y = q.length; v < y; ++v) p.push(q.charCodeAt(v));
            q = p
        }
        w || (w = q.length);
        p = 0;
        if (0 == l)
            for (; p + 64 < w;) b(q.slice(p, p + 64)), p += 64, r += 64;
        for (; p < w;)
            if (f[l++] = q[p++], r++, 64 == l)
                for (l = 0, b(f); p + 64 < w;) b(q.slice(p, p + 64)), p += 64, r += 64
    }

    function d() {
        var q = [],
            w = 8 * r;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var p = 63; 56 <= p; p--) f[p] = w & 255, w >>>= 8;
        b(f);
        for (p = w = 0; 5 > p; p++)
            for (var v = 24; 0 <= v; v -= 8) q[w++] = e[p] >> v & 255;
        return q
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, r;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Ne: function() {
            for (var q = d(), w = "", p = 0; p < q.length; p++) w += "0123456789ABCDEF".charAt(Math.floor(q[p] / 16)) + "0123456789ABCDEF".charAt(q[p] % 16);
            return w
        }
    }
};
var sf = function(a, b, c) {
        var d = String(x.location.href);
        return d && a && b ? [b, rf(pf(d), a, c || null)].join(" ") : null
    },
    rf = function(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], Ka(d, function(h) {
            e.push(h)
        }), tf(e.join(" "));
        var f = [],
            g = [];
        Ka(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        Ka(d, function(h) {
            e.push(h)
        });
        a = tf(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    },
    tf = function(a) {
        var b =
            qf();
        b.update(a);
        return b.Ne().toLowerCase()
    };
var uf = {};
var vf = function(a) {
    this.rb = a || {
        cookie: ""
    }
};
m = vf.prototype;
m.isEnabled = function() {
    if (!x.navigator.cookieEnabled) return !1;
    if (this.rb.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        Pd: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
m.set = function(a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
        var e = c.wg;
        d = c.Wf || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.Pd
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.rb.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
};
m.get = function(a, b) {
    for (var c = a + "=", d = (this.rb.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = Ma(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
m.remove = function(a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, "", {
        Pd: 0,
        path: b,
        domain: c
    });
    return d
};
m.clear = function() {
    for (var a = wf(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
};
var wf = function(a) {
        a = (a.rb.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ma(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    },
    xf = new vf("undefined" == typeof document ? null : document);
var yf = function(a) {
        return !!uf.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    },
    zf = function(a, b, c, d) {
        (a = x[a]) || (a = (new vf(document)).get(b));
        return a ? sf(a, c, d) : null
    },
    Af = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = pf(String(x.location.href)),
            d = [];
        var e = b;
        e = void 0 === e ? !1 : e;
        var f = x.__SAPISID || x.__APISID || x.__3PSAPISID || x.__OVERRIDE_SID;
        yf(e) && (f = f || x.__1PSAPISID);
        if (f) e = !0;
        else {
            var g = new vf(document);
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID");
            yf(e) && (f = f || g.get("__Secure-1PAPISID"));
            e = !!f
        }
        e && (e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ? x.__SAPISID : x.__APISID, e || (e = new vf(document), e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")), (e = e ? sf(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e), c && yf(b) && ((b = zf("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = zf("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
        return 0 == d.length ? null : d.join(" ")
    };
var Cf = function(a) {
    M.call(this, a, -1, Bf)
};
u(Cf, M);
var Ef = function(a) {
    M.call(this, a, -1, Df)
};
u(Ef, M);
var Ff = function(a) {
    M.call(this, a)
};
u(Ff, M);
var Gf = function(a) {
    M.call(this, a)
};
u(Gf, M);
var Bf = [3, 6, 4],
    Df = [1],
    Hf = [1, 2, 3],
    If = [1, 2, 3];
var Kf = function(a) {
    M.call(this, a, -1, Jf)
};
u(Kf, M);
var Jf = [1];
var Lf = function(a, b) {
    this.name = a;
    this.value = b
};
Lf.prototype.toString = function() {
    return this.name
};
var Mf = new Lf("OFF", Infinity),
    Nf = new Lf("SEVERE", 1E3),
    Of = new Lf("WARNING", 900),
    Pf = new Lf("INFO", 800),
    Qf = new Lf("CONFIG", 700),
    Rf = new Lf("FINE", 500),
    Sf = function() {
        this.pb = 0;
        this.clear()
    },
    Tf;
Sf.prototype.clear = function() {
    this.$c = Array(this.pb);
    this.hd = -1;
    this.Cd = !1
};
var Uf = function(a, b, c) {
    this.reset(a || Mf, b, c, void 0, void 0)
};
Uf.prototype.reset = function() {};
var Vf = function(a, b) {
        this.level = null;
        this.nf = [];
        this.parent = (void 0 === b ? null : b) || null;
        this.children = [];
        this.S = {
            kc: function() {
                return a
            }
        }
    },
    Wf = function(a) {
        if (a.level) return a.level;
        if (a.parent) return Wf(a.parent);
        Da("Root logger has no level set.");
        return Mf
    },
    Xf = function(a, b) {
        for (; a;) a.nf.forEach(function(c) {
            c(b)
        }), a = a.parent
    },
    Yf = function() {
        this.entries = {};
        var a = new Vf("");
        a.level = Qf;
        this.entries[""] = a
    },
    Zf, $f = function(a, b, c) {
        var d = a.entries[b];
        if (d) return void 0 !== c && (d.level = c), d;
        d = $f(a, b.substr(0,
            b.lastIndexOf(".")));
        var e = new Vf(b, d);
        a.entries[b] = e;
        d.children.push(e);
        void 0 !== c && (e.level = c);
        return e
    },
    ag = function() {
        Zf || (Zf = new Yf);
        return Zf
    },
    bg = function(a, b, c) {
        var d;
        if (d = a)
            if (d = a && b) {
                d = b.value;
                var e = a ? Wf($f(ag(), a.kc())) : Mf;
                d = d >= e.value
            }
        if (d) {
            b = b || Mf;
            d = $f(ag(), a.kc());
            "function" === typeof c && (c = c());
            Tf || (Tf = new Sf);
            e = Tf;
            a = a.kc();
            if (0 < e.pb) {
                var f = (e.hd + 1) % e.pb;
                e.hd = f;
                e.Cd ? (e = e.$c[f], e.reset(b, c, a), a = e) : (e.Cd = f == e.pb - 1, a = e.$c[f] = new Uf(b, c, a))
            } else a = new Uf(b, c, a);
            Xf(d, a)
        }
    },
    cg = function(a, b) {
        a &&
            bg(a, Pf, b)
    },
    N = function(a, b) {
        a && bg(a, Rf, b)
    };
var dg = function(a) {
    A(0 < a, "Initial value must be greater than zero.");
    A(3E5 >= a, "Max value should be at least as large as initial value.");
    A(!0, "Randomness factor should be between 0 and 1.");
    this.Ad = a;
    this.Qd = 3E5;
    this.Na = this.xa = a;
    this.Xd = .1;
    this.ze = 2
};
dg.prototype.reset = function() {
    this.Na = this.xa = this.Ad
};
var eg = function() {};
eg.prototype.bd = null;
var gg = function(a) {
    var b;
    (b = a.bd) || (b = {}, fg(a) && (b[0] = !0, b[1] = !0), b = a.bd = b);
    return b
};
var hg, ig = function() {};
z(ig, eg);
var jg = function(a) {
        return (a = fg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    fg = function(a) {
        if (!a.xd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.xd = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.xd
    };
hg = new ig;
var O = function(a) {
    J.call(this);
    this.headers = new Map;
    this.Mb = a || null;
    this.ga = !1;
    this.Lb = this.g = null;
    this.Ta = this.Nd = this.Ab = "";
    this.pa = this.nc = this.ub = this.cc = !1;
    this.Ia = 0;
    this.Ib = null;
    this.Zd = "";
    this.Kb = this.Mf = this.Pc = !1;
    this.Jc = null
};
z(O, J);
O.prototype.L = $f(ag(), "goog.net.XhrIo", void 0).S;
var kg = /^https?$/i,
    lg = ["POST", "PUT"],
    mg = [],
    ng = function(a, b, c, d, e, f, g) {
        var h = new O;
        mg.push(h);
        b && h.P("complete", b);
        h.N.add("ready", h.Ge, !0, void 0, void 0);
        f && (h.Ia = Math.max(0, f));
        g && (h.Pc = g);
        h.send(a, c, d, e)
    };
O.prototype.Ge = function() {
    this.U();
    La(mg, this)
};
O.prototype.setTrustToken = function(a) {
    this.Jc = a
};
O.prototype.send = function(a, b, c, d) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ab + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Ab = a;
    this.Ta = "";
    this.Nd = b;
    this.cc = !1;
    this.ga = !0;
    this.g = this.Mb ? jg(this.Mb) : jg(hg);
    this.Lb = this.Mb ? gg(this.Mb) : gg(hg);
    this.g.onreadystatechange = xa(this.Ud, this);
    this.Mf && "onprogress" in this.g && (this.g.onprogress = xa(function(g) {
        this.Td(g, !0)
    }, this), this.g.upload && (this.g.upload.onprogress = xa(this.Td, this)));
    try {
        N(this.L, P(this, "Opening Xhr")),
            this.nc = !0, this.g.open(b, String(a), !0), this.nc = !1
    } catch (g) {
        N(this.L, P(this, "Error opening Xhr: " + g.message));
        og(this, g);
        return
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
        if (Object.getPrototypeOf(d) === Object.prototype)
            for (var e in d) c.set(e, d[e]);
        else if ("function" === typeof d.keys && "function" === typeof d.get) {
        e = t(d.keys());
        for (var f = e.next(); !f.done; f = e.next()) f = f.value, c.set(f, d.get(f))
    } else throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find(function(g) {
        return "content-type" ==
            g.toLowerCase()
    });
    e = x.FormData && a instanceof x.FormData;
    !(0 <= Ja(lg, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = t(c);
    for (d = b.next(); !d.done; d = b.next()) c = t(d.value), d = c.next().value, c = c.next().value, this.g.setRequestHeader(d, c);
    this.Zd && (this.g.responseType = this.Zd);
    "withCredentials" in this.g && this.g.withCredentials !== this.Pc && (this.g.withCredentials = this.Pc);
    if ("setTrustToken" in this.g && this.Jc) try {
        this.g.setTrustToken(this.Jc)
    } catch (g) {
        N(this.L, P(this, "Error SetTrustToken: " +
            g.message))
    }
    try {
        pg(this), 0 < this.Ia && (this.Kb = qg(this.g), N(this.L, P(this, "Will abort after " + this.Ia + "ms if incomplete, xhr2 " + this.Kb)), this.Kb ? (this.g.timeout = this.Ia, this.g.ontimeout = xa(this.ie, this)) : this.Ib = Ie(this.ie, this.Ia, this)), N(this.L, P(this, "Sending request")), this.ub = !0, this.g.send(a), this.ub = !1
    } catch (g) {
        N(this.L, P(this, "Send error: " + g.message)), og(this, g)
    }
};
var qg = function(a) {
    return ob && yb() && "number" === typeof a.timeout && void 0 !== a.ontimeout
};
O.prototype.ie = function() {
    "undefined" != typeof qa && this.g && (this.Ta = "Timed out after " + this.Ia + "ms, aborting", N(this.L, P(this, this.Ta)), this.dispatchEvent("timeout"), this.abort(8))
};
var og = function(a, b) {
        a.ga = !1;
        a.g && (a.pa = !0, a.g.abort(), a.pa = !1);
        a.Ta = b;
        rg(a);
        sg(a)
    },
    rg = function(a) {
        a.cc || (a.cc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
O.prototype.abort = function() {
    this.g && this.ga && (N(this.L, P(this, "Aborting")), this.ga = !1, this.pa = !0, this.g.abort(), this.pa = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), sg(this))
};
O.prototype.da = function() {
    this.g && (this.ga && (this.ga = !1, this.pa = !0, this.g.abort(), this.pa = !1), sg(this, !0));
    O.ta.da.call(this)
};
O.prototype.Ud = function() {
    this.Aa || (this.nc || this.ub || this.pa ? tg(this) : this.If())
};
O.prototype.If = function() {
    tg(this)
};
var tg = function(a) {
    if (a.ga && "undefined" != typeof qa)
        if (a.Lb[1] && 4 == ug(a) && 2 == vg(a)) N(a.L, P(a, "Local request error detected and ignored"));
        else if (a.ub && 4 == ug(a)) Ie(a.Ud, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == ug(a)) {
        N(a.L, P(a, "Request complete"));
        a.ga = !1;
        try {
            if (wg(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
                try {
                    var b = 2 < ug(a) ? a.g.statusText : ""
                } catch (c) {
                    N(a.L, "Can not get status: " + c.message), b = ""
                }
                a.Ta = b + " [" + vg(a) + "]";
                rg(a)
            }
        } finally {
            sg(a)
        }
    }
};
O.prototype.Td = function(a, b) {
    A("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
    this.dispatchEvent(xg(a, "progress"));
    this.dispatchEvent(xg(a, b ? "downloadprogress" : "uploadprogress"))
};
var xg = function(a, b) {
        return {
            type: b,
            lengthComputable: a.lengthComputable,
            loaded: a.loaded,
            total: a.total
        }
    },
    sg = function(a, b) {
        if (a.g) {
            pg(a);
            var c = a.g,
                d = a.Lb[0] ? ra : null;
            a.g = null;
            a.Lb = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                (a = a.L) && bg(a, Nf, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    },
    pg = function(a) {
        a.g && a.Kb && (a.g.ontimeout = null);
        a.Ib && (x.clearTimeout(a.Ib), a.Ib = null)
    },
    wg = function(a) {
        var b = vg(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.Ab).match(nc)[1] || null, !a && x.self && x.self.location && (a = x.self.location.protocol, a = a.substr(0, a.length - 1)), b = !kg.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    },
    ug = function(a) {
        return a.g ? a.g.readyState : 0
    },
    vg = function(a) {
        try {
            return 2 < ug(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    };
O.prototype.getResponseHeader = function(a) {
    if (this.g && 4 == ug(this)) return a = this.g.getResponseHeader(a), null === a ? void 0 : a
};
O.prototype.getAllResponseHeaders = function() {
    return this.g && 4 == ug(this) ? this.g.getAllResponseHeaders() || "" : ""
};
var P = function(a, b) {
    return b + " [" + a.Nd + " " + a.Ab + " " + vg(a) + "]"
};
var yg = function(a) {
    M.call(this, a)
};
u(yg, M);
yg.prototype.sa = function(a) {
    L(this, 7, a)
};
var zg = function(a) {
    M.call(this, a)
};
u(zg, M);
var Bg = function(a) {
    M.call(this, a, 31, Ag)
};
u(Bg, M);
Bg.prototype.gb = function(a) {
    return L(this, 26, a)
};
var Ag = [3, 20, 27];
var Dg = function(a) {
    M.call(this, a, 17, Cg)
};
u(Dg, M);
Dg.prototype.fb = function(a) {
    gf(this, 1, a)
};
Dg.prototype.Bc = function(a) {
    L(this, 2, a)
};
var Cg = [3, 5];
var Fg = function(a) {
    M.call(this, a, 6, Eg)
};
u(Fg, M);
var Eg = [5];
var Gg = function(a) {
    M.call(this, a)
};
u(Gg, M);
var Hg = new function(a, b, c) {
    this.af = a;
    this.Ke = b;
    this.uf = c;
    this.ff = mf
}(175237375, Gg, 0);
var Kg = function(a, b, c, d, e, f, g, h, k, l, r) {
    J.call(this);
    var q = this;
    this.ia = "";
    this.M = [];
    this.Md = "";
    this.Kc = this.Mc = this.Wb = !1;
    this.Rd = this.Dc = -1;
    this.fd = !1;
    this.oa = this.Y = null;
    this.Xa = 0;
    this.Yf = 1;
    this.Hc = 0;
    this.Gb = !1;
    J.call(this);
    this.tc = a;
    this.rd = b || ra;
    this.Va = new Ig(a, f);
    this.Ef = r || {
        send: d
    };
    this.bufferSize = 1E3;
    this.ng = ya(Oc, 0, 1);
    this.Vb = e || null;
    this.Fa = c || null;
    this.bc = g || !1;
    this.uc = k || null;
    this.S = $f(ag(), "playlog.clearcut.ClearcutBase", void 0).S;
    this.withCredentials = !h;
    this.yb = f || !1;
    this.Fd = !this.yb &&
        (hb("Chromium", 65) || hb("Firefox", 45) || hb("Safari", 12) || (ib() || B("iPad") || B("iPod")) && jb()) && !!window && !!window.navigator && !!window.navigator.sendBeacon;
    a = L(new zg, 1, 1);
    this.Va.fb(a);
    this.na = new dg(1E4);
    this.s = new He(this.na.xa);
    Yc(this, ya(Wc, this.s));
    od(this.s, "tick", lc(Jg(this, l)), !1, this);
    this.Ub = new He(6E5);
    Yc(this, ya(Wc, this.Ub));
    od(this.Ub, "tick", lc(Jg(this, l)), !1, this);
    this.bc || this.Ub.start();
    this.yb || (od(document, "visibilitychange", function() {
            "hidden" === document.visibilityState && q.dc()
        }),
        od(document, "pagehide", this.dc, !1, this))
};
u(Kg, J);
var Jg = function(a, b) {
    return b ? function() {
        b().then(a.flush.bind(a))
    } : a.flush
};
Kg.prototype.da = function() {
    this.dc();
    J.prototype.da.call(this)
};
var Lg = function(a) {
    a.Vb || (a.Vb = .01 > a.ng() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.Vb
};
m = Kg.prototype;
m.ce = function(a) {
    this.Va.fb(a)
};
m.gb = function(a) {
    this.ia = a
};
m.ge = function(a) {
    this.Y || (this.Y = new of );
    cf(this.Y, 2, a)
};
m.be = function(a) {
    a ? (this.Y || (this.Y = new of ), a = kf(a), L(this.Y, 4, a)) : this.Y && L(this.Y, 4, void 0, !1)
};
m.fe = function(a) {
    this.oa = a
};
m.sa = function(a) {
    this.Va.sa(a)
};
m.ee = function(a) {
    this.fd = !0;
    Mg(this, a)
};
var Mg = function(a, b) {
    a.na = new dg(1 > b ? 1 : b);
    a.s.setInterval(a.na.xa)
};
Kg.prototype.log = function(a) {
    a = a.clone();
    var b = this.Yf++;
    L(a, 21, b);
    this.ia && a.gb(this.ia);
    af(a, 1) || L(a, 1, Date.now().toString());
    null != af(a, 15) || L(a, 15, 60 * (new Date).getTimezoneOffset());
    this.Y && (b = this.Y.clone(), gf(a, 16, b));
    for (; this.M.length >= this.bufferSize;) this.M.shift(), ++this.Xa;
    this.M.push(a);
    this.dispatchEvent(new Ng(a));
    this.bc || this.s.enabled || this.s.start()
};
Kg.prototype.flush = function(a, b) {
    var c = this;
    if (0 === this.M.length) a && a();
    else if (this.Gb) Og(this);
    else {
        var d = Date.now();
        if (this.Rd > d && this.Dc < d) cg(this.S, "Not flushing because server requested delay."), b && b("throttled");
        else {
            var e = this.Va.mb(this.M, this.Xa);
            d = {};
            var f = this.rd();
            f && (d.Authorization = f);
            var g = Lg(this);
            this.Fa && (d["X-Goog-AuthUser"] = this.Fa, g = sc(g, "authuser", this.Fa));
            this.uc && (d["X-Goog-PageId"] = this.uc, g = sc(g, "pageId", this.uc));
            if (f && this.Md === f) cg(this.S, "XHR with unauthorized request not retried"),
                b && b("stale-auth-token");
            else if (cg(this.S, "Flushing log to clearcut."), this.M = [], this.s.enabled && this.s.stop(), this.Xa = 0, this.Wb) cg(this.S, kf(e)), d && cg(this.S, JSON.stringify(d)), a && a();
            else {
                var h = kf(e),
                    k;
                this.oa && this.oa.ug(h.length) && (k = this.oa.sg(h));
                var l = {
                        url: g,
                        body: h,
                        Be: 1,
                        zc: d,
                        Qf: "POST",
                        withCredentials: this.withCredentials,
                        Hc: this.Hc
                    },
                    r = function(p) {
                        c.na.reset();
                        c.s.setInterval(c.na.xa);
                        if (p) {
                            var v = null;
                            try {
                                var y = JSON.parse(p.replace(")]}'\n", ""));
                                v = new Fg(y)
                            } catch (H) {
                                (p = c.S) && bg(p, Of, "Response parse failed: " +
                                    H.toString())
                            }
                            v && (p = Number(bf(v, "-1")), 0 < p && (c.Dc = Date.now(), c.Rd = c.Dc + p), v = v.getExtension(Hg)) && (v = bf(v, -1), -1 != v && (c.fd || Mg(c, v)))
                        }
                        a && a()
                    },
                    q = function(p) {
                        var v = ff(e, Bg, 3),
                            y = c.na;
                        y.Na = Math.min(y.Qd, y.Na * y.ze);
                        y.xa = Math.min(y.Qd, y.Na + (y.Xd ? Math.round(y.Xd * (Math.random() - .5) * 2 * y.Na) : 0));
                        c.s.setInterval(c.na.xa);
                        401 === p && f && (c.Md = f);
                        if (500 <= p && 600 > p || 401 === p || 0 === p) c.M = v.concat(c.M), c.bc || c.s.enabled || c.s.start();
                        (v = c.S) && bg(v, Of, "Flush failed. Status code: " + p);
                        b && b("net-send-failed", p)
                    },
                    w = function() {
                        c.Ef.send(l,
                            r, q)
                    };
                k ? k.then(function(p) {
                    l.zc["Content-Encoding"] = "gzip";
                    l.zc["Content-Type"] = "application/binary";
                    l.body = p;
                    l.Be = 2;
                    w()
                }, function() {
                    w()
                }) : w()
            }
        }
    }
};
Kg.prototype.dc = function() {
    this.Wb || (this.Mc && Og(this), this.Kc && Pg(this), this.flush())
};
var Og = function(a) {
        cg(a.S, "Flushing log using sendBeacon.");
        Qg(a, 32, 10, function(b, c) {
            b = sc(b, "format", "json");
            b = window.navigator.sendBeacon(b, kf(c));
            a.Gb && !b && (a.Gb = !1);
            return b
        })
    },
    Pg = function(a) {
        cg(a.S, "Flushing log using Image GET.");
        Qg(a, 6, 5, function(b, c) {
            c = kf(c);
            c = Bb(Ia(c), 3);
            c = rc(b, "format", "base64json", "p", c);
            if (15360 < c.length) return !1;
            b = new Image;
            a: {
                try {
                    var d = b && b.ownerDocument,
                        e = d && (d.defaultView || d.parentWindow);
                    e = e || x;
                    if (e.Element && e.Location) {
                        var f = e;
                        break a
                    }
                } catch (h) {}
                f = null
            }
            if (f && "undefined" !=
                typeof f.HTMLImageElement && (!b || !(b instanceof f.HTMLImageElement) && (b instanceof f.Location || b instanceof f.Element))) {
                if (ta(b)) try {
                    var g = b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b)
                } catch (h) {
                    g = "<object could not be stringified>"
                } else g = void 0 === b ? "undefined" : null === b ? "null" : typeof b;
                Da("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLImageElement", g)
            }
            if (c instanceof Qb) f = c;
            else a: if (f = c, d = /^data:image\//i.test(c), !(f instanceof Qb)) {
                f =
                    "object" == typeof f && f.tb ? f.Ra() : String(f);
                if (d && /^data:/i.test(f) && (d = String(f), d = d.replace(/(%0A|%0D)/g, ""), d = ((e = d.match(Tb)) && Sb.test(e[1]) ? new Qb(d, Pb) : null) || Vb, d.Ra() == f)) {
                    f = d;
                    break a
                }
                A(Ub.test(f), "%s does not match the safe URL pattern", f) || (f = "about:invalid#zClosurez");
                f = new Qb(f, Pb)
            }
            b.src = Rb(f);
            return !0
        })
    },
    Qg = function(a, b, c, d) {
        if (0 !== a.M.length) {
            var e = wc(Lg(a), "format");
            e = rc(e, "auth", a.rd(), "authuser", a.Fa || "0");
            for (var f = 0; f < c && a.M.length; ++f) {
                var g = a.M.slice(0, b),
                    h = a.Va.mb(g, a.Xa);
                if (!d(e,
                        h)) break;
                a.Xa = 0;
                a.M = a.M.slice(g.length)
            }
            a.s.enabled && a.s.stop()
        }
    },
    Ng = function() {
        Zc.call(this, "event-logged", void 0)
    };
u(Ng, Zc);
var Ig = function(a, b) {
    this.yb = b = void 0 === b ? !1 : b;
    this.locale = null;
    this.Ua = new Dg;
    this.Ua.Bc(a);
    b || (this.locale = document.documentElement.getAttribute("lang"));
    this.fb(new zg)
};
Ig.prototype.Bc = function(a) {
    this.Ua.Bc(a)
};
Ig.prototype.fb = function(a) {
    this.Ua.fb(a);
    af(a, 1) || L(a, 1, 1);
    this.yb || (a = Rg(this), af(a, 5) || L(a, 5, this.locale))
};
Ig.prototype.sa = function(a) {
    Rg(this).sa(a)
};
var Rg = function(a) {
    a = ef(a.Ua, zg, 1);
    var b = ef(a, yg, 11);
    b || (b = new yg, gf(a, 11, b));
    return b
};
Ig.prototype.mb = function(a, b) {
    b = void 0 === b ? 0 : b;
    var c = this.Ua.clone();
    c = L(c, 4, Date.now().toString());
    a = hf(c, 3, a);
    b && L(a, 14, b);
    return a
};

function Sg(a, b, c) {
    ng(a.url, function(d) {
        d = d.target;
        if (wg(d)) {
            try {
                var e = d.g ? d.g.responseText : ""
            } catch (f) {
                N(d.L, "Can not get responseText: " + f.message), e = ""
            }
            b(e)
        } else c(vg(d))
    }, a.Qf, a.body, a.zc, a.Hc, a.withCredentials)
};

function Tg(a) {
    this.tc = a;
    this.Fa = "0";
    this.kd = "https://play.google.com/log?format=json&hasfast=true";
    this.Pe = !1;
    this.wf = !0;
    this.ld = !1;
    this.Ff = Sg;
    this.ia = "";
    this.Se = this.Lc = this.Nc = !1
}
m = Tg.prototype;
m.sa = function(a) {
    this.ad = a
};
m.fe = function(a) {
    this.oa = a
};
m.gb = function(a) {
    this.ia = a;
    return this
};
m.be = function(a) {
    this.dd = a
};
m.ge = function(a) {
    this.Vd = a
};
m.ce = function(a) {
    this.ed = a
};
m.Mc = function() {
    this.Nc = !0;
    return this
};
m.Kc = function() {
    this.Lc = !0;
    return this
};
m.ee = function(a) {
    this.pd = Math.max(a, 5E3)
};
m.mb = function() {
    var a = new Kg(this.tc, this.cf ? this.cf : Af, this.Fa, this.Ff, this.kd, this.ld, this.Pe, void 0, void 0, void 0, this.Gf ? this.Gf : void 0);
    this.wf || (a.Wb = !0);
    this.ed && a.ce(this.ed);
    this.ad && a.sa(this.ad);
    this.oa && a.fe(this.oa);
    this.ia && a.gb(this.ia);
    this.dd && a.be(this.dd);
    this.Vd && a.ge(this.Vd);
    this.Nc && (a.Mc = this.Nc && a.Fd);
    this.Lc && (a.Kc = this.Lc);
    this.pd && a.ee(this.pd);
    this.Se && (a.Gb = a.Fd);
    return a
};
var Ug = function() {
    var a = 1609;
    a = void 0 === a ? -1 : a;
    var b = void 0 === b ? "" : b;
    var c = void 0 === c ? "" : c;
    var d = void 0 === d ? !1 : d;
    var e = void 0 === e ? "" : e;
    var f = (new Tg(a)).gb(b);
    "" != c && (f.kd = c);
    d && (f.ld = !0);
    e && f.sa(e);
    c = f.mb();
    this.tc = a;
    this.ia = b;
    this.je = c
};
Ug.prototype.flush = function(a) {
    var b = a || [];
    if (b.length) {
        a = new Kf;
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
                f = e;
            var g = new Cf;
            g = L(g, 1, f.Wa);
            for (var h = f, k = [], l = 0; l < h.sb.length; l++) k.push(h.sb[l].nd);
            g = cf(g, 3, k);
            h = [];
            k = [];
            l = t(f.ua.keys());
            for (var r = l.next(); !r.done; r = l.next()) k.push(r.value.split(","));
            for (l = 0; l < k.length; l++) {
                r = k[l];
                var q = f.Ee;
                for (var w = f.sd(r) || [], p = [], v = 0; v < w.length; v++) {
                    var y = w[v];
                    y = y && y.cd;
                    var H = new Gf;
                    switch (q) {
                        case 3:
                            df(H, 1, If, Number(y));
                            break;
                        case 2:
                            df(H, 2, If, Number(y))
                    }
                    p.push(H)
                }
                q =
                    p;
                for (w = 0; w < q.length; w++) {
                    p = q[w];
                    v = new Ef;
                    p = gf(v, 2, p);
                    v = r;
                    y = [];
                    H = f;
                    for (var X = [], T = 0; T < H.sb.length; T++) X.push(H.sb[T].od);
                    H = X;
                    for (X = 0; X < H.length; X++) {
                        T = H[X];
                        var va = v[X],
                            ic = new Ff;
                        switch (T) {
                            case 3:
                                df(ic, 1, Hf, String(va));
                                break;
                            case 2:
                                df(ic, 2, Hf, Number(va));
                                break;
                            case 1:
                                df(ic, 3, Hf, "true" == va)
                        }
                        y.push(ic)
                    }
                    hf(p, 1, y);
                    h.push(p)
                }
            }
            hf(g, 4, h);
            c.push(g);
            e.clear()
        }
        hf(a, 1, c);
        b = this.je;
        a instanceof Bg ? b.log(a) : (c = new Bg, a = kf(a), a = L(c, 8, a), b.log(a));
        this.je.flush()
    }
};
var Q = {
        pg: {}
    },
    R = R || {};
R.Tb = "APISID";
R.Sb = "SAPISID";
R.Qb = "__Secure-3PAPISID";
R.Z = function(a) {
    a = encodeURIComponent(a);
    if (a = xf.get(a)) return decodeURIComponent(a)
};
R.ec = function(a) {
    var b;
    (a = R.Z(a)) && (b = String(Vg(a)));
    return b
};
R.bg = function(a, b, c) {
    xf.set(a, b, c)
};
Q = Q || {};
Q.qf = function(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!0 === Q.pc) a();
    else {
        var e = 2,
            f = function() {
                e--;
                0 == e && (Q.pc = !0, a())
            },
            g = function(h) {
                b(h)
            };
        switch (Wg()) {
            case "sessionStorage":
                Q.hb = new Xg;
                Q.hb.V(f, g);
                if (c) try {
                    Q.hb.clear()
                } catch (h) {}
                break;
            case "inMemoryStorage":
                Q.hb = new Yg;
                Q.hb.V(f, g);
                break;
            default:
                c = Error("Unsupported storage type: " + Wg());
                b(c);
                return
        }
        switch (Zg()) {
            case "localStorage":
                Q.Ea = new $g;
                Q.Ea.V(f, g);
                break;
            case "indexedDb":
                Q.Ea = new ah;
                Q.Ea.V(f, g);
                break;
            case "cookieStorage":
                Q.Ea = new bh;
                d ? f() : Q.Ea.V(f, g);
                break;
            default:
                c = Error("Unsupported storage type: " + Zg()), b(c)
        }
    }
};
Q.vd = function() {
    if (!Q.pc) throw Error("Storages are not initialized yet!");
    return Q.Ea
};
Q.lf = function() {
    if (!Q.pc) throw Error("Storages are not initialized yet!");
    return Q.hb
};
var $g = function() {
    this.Ba = null
};
m = $g.prototype;
m.V = function(a, b) {
    ve() ? (this.Ba = window.localStorage, a()) : b && b(Error("localStorage is not available in the current environment."))
};
m.getItem = function(a, b) {
    b(this.Ba.getItem(a))
};
m.setItem = function(a, b, c) {
    void 0 === b || null === b ? this.Ba.removeItem(a) : this.Ba.setItem(a, b);
    c && c()
};
m.removeItem = function(a, b) {
    this.Ba.removeItem(a);
    b && b()
};
m.clear = function(a) {
    this.Ba.clear();
    a && a()
};
var ah = function() {
    this.Pa = void 0
};
m = ah.prototype;
m.V = function(a, b) {
    var c = this,
        d = window.indexedDB.open("oauth");
    d.onsuccess = function(e) {
        c.Pa = e.target.result;
        a()
    };
    d.onupgradeneeded = function(e) {
        e.target.result.createObjectStore("oauth")
    };
    d.onerror = function(e) {
        e = e.target.errorCode;
        b && b(Error("IndexedDb initialization failed: " + e))
    }
};
m.getItem = function(a, b) {
    var c = this.Pa.transaction("oauth", "readwrite").objectStore("oauth").get(a);
    c.onsuccess = function() {
        b(c.result)
    }
};
m.setItem = function(a, b, c) {
    var d = this.Pa.transaction("oauth", "readwrite").objectStore("oauth");
    if (void 0 === b || null === b) d["delete"](a);
    else d.put(b, a);
    d.transaction.oncomplete = function() {
        c && c()
    }
};
m.removeItem = function(a, b) {
    var c = this.Pa.transaction("oauth", "readwrite").objectStore("oauth");
    c["delete"](a);
    c.transaction.oncomplete = function() {
        b && b()
    }
};
m.clear = function(a) {
    var b = this.Pa.transaction("oauth", "readwrite").objectStore("oauth");
    b.clear();
    b.transaction.oncomplete = function() {
        a && a()
    }
};
var Yg = function() {};
m = Yg.prototype;
m.V = function(a) {
    this.Hb = {};
    a()
};
m.getItem = function(a, b) {
    b(this.Hb[a] || null)
};
m.setItem = function(a, b, c) {
    this.Hb[a] = b;
    c && c()
};
m.removeItem = function(a, b) {
    delete this.Hb[a];
    b && b()
};
m.clear = function(a) {
    this.Hb = {};
    a && a()
};
var Xg = function() {
    this.Ga = null
};
m = Xg.prototype;
m.V = function(a, b) {
    ve() ? (this.Ga = window.sessionStorage, a()) : b && b(Error("sessionStorage is not available in the current environment."))
};
m.getItem = function(a, b) {
    b(this.Ga.getItem(a))
};
m.setItem = function(a, b, c) {
    void 0 === b || null === b ? this.Ga.removeItem(a) : this.Ga.setItem(a, b);
    c && c()
};
m.removeItem = function(a, b) {
    this.Ga.removeItem(a);
    b && b()
};
m.clear = function(a) {
    this.Ga.clear();
    a && a()
};
var bh = function() {
    this.Bf = S.ne
};
m = bh.prototype;
m.V = function(a, b) {
    navigator.cookieEnabled ? a() : b && b(Error("Cookies are not enabled in current environment."))
};
m.getItem = function(a, b) {
    for (var c = null, d = ch(a), e = 0; e < d.length; e++)
        if (d[e].key == a) {
            c = d[e].value;
            break
        }
    b(c)
};
m.setItem = function(a, b, c) {
    var d = S.fc(a.split(S.v)[0]);
    if (d) {
        var e = dh(d);
        b = {
            key: a,
            value: b
        };
        for (var f = 0; f < e.length; f++)
            if (e[f].key == a) {
                e.splice(f, 1);
                break
            }
        e.push(b);
        eh(this, d, e)
    }
    c && c()
};
m.removeItem = function(a, b) {
    for (var c = ch(a), d = 0; d < c.length; d++)
        if (c[d].key == a) {
            c.splice(d, 1);
            break
        }(a = S.fc(a.split(S.v)[0])) && eh(this, a, c);
    b && b()
};
m.clear = function(a) {
    Q.Ie();
    a && a()
};
var ch = function(a) {
        return (a = S.fc(a.split(S.v)[0])) ? dh(a) : []
    },
    dh = function(a) {
        a = R.Z(a);
        return Q.Me(a || null)
    },
    eh = function(a, b, c) {
        var d = Q.Ue(c);
        d.length > a.Bf ? (c.splice(0, 1), 0 < c.length ? eh(a, b, c) : F("Failed to write Cookie based cache due to the big size.")) : Q.de(b, d)
    };
Q.Le = function(a) {
    try {
        return atob(a)
    } catch (b) {
        return a
    }
};
Q.Te = function(a) {
    try {
        return btoa(a)
    } catch (b) {
        return a
    }
};
Q.Me = function(a) {
    if (!a) return [];
    a = Q.Le(a);
    try {
        return I.parse(a).items || []
    } catch (b) {
        return F("Error while parsing items from cookie:" + b.message), []
    }
};
Q.Ue = function(a) {
    return Q.Te(I.stringify({
        items: a
    }))
};
Q.de = function(a, b) {
    var c = window.location.pathname;
    c = {
        domain: window.location.hostname,
        path: -1 != navigator.userAgent.toLowerCase().indexOf("msie") || xe() ? void 0 : c,
        Wf: "https:" === window.location.protocol ? !0 : void 0
    };
    R.bg(encodeURIComponent(a), encodeURIComponent(b), c)
};
Q.Ie = function() {
    var a = S.Ob;
    var b = wf(xf).keys;
    for (var c = 0; c < b.length; c++) {
        var d = decodeURIComponent(b[c]);
        0 == d.indexOf(a) && Q.de(d, "")
    }
};
var fh = function(a) {
    this.Id = a;
    this.j = void 0;
    Be.call(this, ["storageValueChanged"])
};
G(fh, Be);
var gh = function(a, b) {
    Q.vd().getItem(a.Id, b)
};
fh.prototype.addListener = function(a) {
    this.addEventListener("storageValueChanged", a)
};
fh.prototype.start = function() {
    var a = this;
    gh(this, function(b) {
        a.Kf = b;
        a.Sd = 0;
        a.j = new He;
        od(a.j, "tick", hh(a));
        a.j.setInterval(200);
        a.j.start()
    })
};
fh.prototype.stop = function() {
    void 0 !== this.j && (this.j.stop(), this.j = void 0)
};
var hh = function(a) {
        return function() {
            a.Sd++;
            gh(a, function(b) {
                b != a.Kf ? (a.dispatchEvent({
                    type: "storageValueChanged",
                    key: a.Id,
                    newValue: b
                }), a.stop()) : 1500 <= a.Sd && a.stop()
            })
        }
    },
    Vg = function(a) {
        var b = 0,
            c;
        if (a) {
            var d = 0;
            for (c = a.length; d < c; d++) {
                var e = a.charCodeAt(d);
                b = (b << 5) - b + e;
                b |= 0
            }
        }
        return b
    },
    U = function(a) {
        return !!a && 0 <= a.indexOf(S.v)
    },
    ih = function(a, b) {
        if (!a && !b) return !0;
        if (!a || !b) return !1;
        a = a.extraQueryParams;
        b = b.extraQueryParams;
        if (!a && !b) return !0;
        if (!a || !b || Object.keys && Object.keys(a).length != Object.keys(b).length) return !1;
        for (var c in a)
            if (a[c] !== b[c]) return !1;
        if (!Object.keys)
            for (c in b)
                if (a[c] !== b[c]) return !1;
        return !0
    },
    S = S || {};
S.me = 100;
S.Wc = "/oauth2/sessionstate/action/updateState";
S.Qc = "/oauth2/sessionstate/action/checkOrigin";
S.Uc = "/oauth2/permission/action/refresh";
S.Tc = "/oauth2/permission/action/code";
S.Rb = "/oauth2/permission/action/listSessions";
S.se = "/o/oauth2/revoke";
S.lb = "response_type login_hint client_id origin scope ss_domain authuser hd enable_serial_consent include_granted_scopes nonce".split(" ");
S.pe = "login_hint client_id origin scope ss_domain authuser hd enable_serial_consent include_granted_scopes".split(" ");
S.qe = "client_id origin scope ss_domain authuser hd enable_serial_consent".split(" ");
S.v = "::";
S.Pb = "_ss_";
S.Sc = "_tr_";
S.La = "oauth2_ss";
S.Rc = "oauth2_cs";
S.Vc = "oauth2_tr";
S.oe = "oauth2_is";
S.Ka = "oauth2_ar";
S.Ob = "oauth2c_";
S.ne = 1500;
S.og = function() {
    var a = {
            Pb: 1,
            Sc: 2,
            La: 3,
            Rc: 4,
            Vc: 5,
            Ka: 6
        },
        b;
    for (b in a)
        if (a = S[b], !a || 0 <= a.indexOf(S.v)) throw Error("Invalid value for 'oauth2.spi." + b + "'.");
};
S.og();
S.re = 512;
S.we = function(a) {
    var b;
    (b = void 0 === a.hint) || (b = a.hint, b = ("" === b ? !0 : b ? "string" == typeof b || "object" == typeof b && b.constructor === String : !1) && a.hint.length <= S.re);
    return !a.id && b
};
S.jf = function() {
    var a = R.Z("https:" == window.location.protocol ? R.Sb : R.Tb);
    a || (a = R.Z(R.Qb));
    return a
};
S.fc = function(a) {
    switch (a) {
        case S.Ka:
            return S.Ob + S.Ka;
        case S.La:
            return S.Ob + S.La;
        default:
            return null
    }
};
var Zg = function() {
        return (Ae() || ye()) && !ve() || xe() && !window.indexedDB ? "cookieStorage" : xe() ? "indexedDb" : "localStorage"
    },
    Wg = function() {
        return !Ae() && !ye() || ve() ? "sessionStorage" : "inMemoryStorage"
    };
R = R || {};
R.Nb = "cookieValueChanged";
var jh = function(a) {
    this.j = void 0;
    this.rf = a;
    Be.call(this, [R.Nb])
};
G(jh, Be);
jh.prototype.Z = function() {
    return R.Z(R.Tb) || R.Z(R.Sb) || R.Z(R.Qb)
};
var kh = function() {
    return R.ec(R.Tb) || R.ec(R.Sb) || R.ec(R.Qb)
};
jh.prototype.addListener = function(a) {
    this.addEventListener(R.Nb, a)
};
var nh = function(a) {
        lh(a);
        a.Db = a.Z();
        a.j = new He;
        od(a.j, "tick", mh(a));
        a.j.setInterval(a.rf);
        a.j.start();
        F("IDP Session Cookie monitor is started.")
    },
    lh = function(a) {
        void 0 !== a.j && (a.j.stop(), a.j = void 0, F("IDP Session Cookie monitor is stoped."))
    },
    mh = function(a) {
        return function() {
            var b = a.Z();
            if (a.Db != b) {
                var c = {
                    type: R.Nb,
                    newHash: b && Vg(b),
                    oldHash: a.Db && Vg(a.Db)
                };
                a.Db = b;
                a.dispatchEvent(c)
            }
        }
    },
    oh = function(a) {
        this.i = a;
        this.ke = void 0
    },
    ph = function(a, b, c) {
        var d = S.se,
            e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            if (4 ==
                e.readyState && 200 == e.status) {
                var h;
                e.responseText && (h = I.parse(e.responseText));
                c(h)
            } else 4 == e.readyState && 0 == e.status ? c({
                error: "network_error"
            }) : 4 == e.readyState && c({
                error: "server_error",
                error_subtype: e.responseText
            })
        };
        e.open("POST", d, !0);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var f = "xsrfToken=";
        a.ke && (f += a.ke);
        if (b)
            for (var g in b) g && b[g] && (f += "&" + g + "=" + encodeURIComponent(b[g]));
        F("Call " + d + " with postData: " + f);
        e.send(f)
    },
    qh = function(a, b, c, d) {
        var e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            if (4 == e.readyState && 200 == e.status) {
                var g;
                if (e.responseText && (g = I.parse(e.responseText))) {
                    var h = g;
                    if (h.error) {
                        h.thrown_by = "server";
                        try {
                            h.error = h.error.toLowerCase()
                        } catch (k) {}
                    }
                }
                d(g)
            } else 4 == e.readyState && 0 == e.status ? d({
                error: "network_error"
            }) : 4 == e.readyState && d({
                error: "server_error",
                error_subtype: e.responseText
            })
        };
        if (b = re(b)) a += 0 > a.indexOf("?") ? "?" : "&", a += b;
        e.open("GET", a, !0);
        e.setRequestHeader("X-Requested-With", "XmlHttpRequest");
        if (c)
            for (var f in c)
                if (c.hasOwnProperty(f)) {
                    b =
                        c[f];
                    if (null === b || void 0 === b) b = "";
                    e.setRequestHeader(f, b)
                }
        F("Call " + a + " with Get method.");
        e.send()
    },
    rh = function(a, b, c) {
        qh(S.Qc, {
            origin: a.i,
            client_id: b
        }, null, c)
    },
    sh = function(a, b, c) {
        b && b.length ? qh(S.Wc, {
            login_hint: b.join(" "),
            origin: a.i
        }, null, c) : c({
            activeHints: {}
        })
    },
    uh = function(a, b, c) {
        b.origin = a.i;
        0 > S.lb.indexOf("enable_serial_consent") && S.lb.push("enable_serial_consent");
        b = th(b, S.lb);
        qh(S.Uc, b, null, c)
    },
    vh = function(a, b, c) {
        b.origin = a.i;
        b = th(b, S.pe);
        qh(S.Tc, b, null, c)
    },
    wh = function(a, b, c) {
        b.origin = a.i;
        b = th(b, S.qe);
        qh(S.Rb, b, null, c)
    };
oh.prototype.revoke = function(a, b) {
    ph(this, {
        token: a
    }, b)
};
var th = function(a, b) {
    for (var c = {}, d = 0; d < b.length; d++) {
        var e = b[d];
        void 0 !== a[e] && null !== a[e] && (c[e] = a[e])
    }
    return c
};
Q = Q || {};
var xh = function() {};
xh.prototype.J = function() {
    return !1
};
var yh = {};
Q.Nf = function() {
    var a = new zh;
    if (!a) throw Error("policy cannot be empty.");
    if (Q.Dd("DEFAULT")) throw Error("Duplicate policyName [DEFAULT].");
    yh.DEFAULT = a
};
Q.Dd = function(a) {
    for (var b in yh)
        if (a == b) return !0;
    return !1
};
Q.td = function(a) {
    return a && Q.Dd(a) ? a : "DEFAULT"
};
Q.ef = function(a) {
    return yh[Q.td(a)]
};
Q.J = function(a, b, c, d) {
    return Q.ef(d).J(a, b, c)
};
Q.rg = function(a, b, c, d) {
    if (!Q.J(a, b, c, d)) throw Error("permission_error");
};
var Ah = function() {};
G(Ah, xh);
Ah.prototype.J = function(a, b, c) {
    a = c ? this.lc(a) : this.mc(a);
    return 0 <= pe(a, b)
};
Ah.prototype.mc = function(a) {
    var b = [];
    if (a && (b.push(a), "http://" == a.substring(0, 7) || "https://" == a.substring(0, 8))) {
        var c = document.createElement("a");
        c.href = a;
        a != c.protocol + "//" + c.hostname && b.push(c.protocol + "//" + c.hostname);
        "https:" == c.protocol && b.push("http://" + c.hostname)
    }
    return b
};
Ah.prototype.lc = function(a) {
    var b = [];
    if (a) {
        b.push(a);
        var c = document.createElement("a");
        c.href = a;
        if ("http:" == c.protocol || "https:" == c.protocol)
            for (a = c.hostname.split("."); 1 < a.length;) b.push(c.protocol + "//" + a.join(".")), "https:" == c.protocol && b.push("http://" + a.join(".")), a.shift()
    }
    return b
};
var zh = function() {};
G(zh, xh);
zh.prototype.J = function(a, b, c) {
    a = c ? this.lc(a) : this.mc(a);
    return 0 <= pe(a, b)
};
zh.prototype.mc = function(a) {
    var b = [];
    if (a && (b.push(a), "https://" == a.substring(0, 8))) {
        var c = document.createElement("a");
        c.href = a;
        "" != c.port && 0 != c.port && 443 != c.port || b.push("http://" + c.hostname)
    }
    return b
};
zh.prototype.lc = function(a) {
    var b = [];
    if (a) {
        var c = document.createElement("a");
        c.href = a;
        if ("https:" == c.protocol && ("" == c.port || 0 == c.port || 443 == c.port) || "http:" == c.protocol && ("" == c.port || 0 == c.port || 80 == c.port))
            for (a = c.hostname.split("."); 1 < a.length;) b.push(c.protocol + "//" + a.join(".")), "https:" == c.protocol && b.push("http://" + a.join(".")), a.shift();
        else b.push(a)
    }
    return b
};
Q.Nf();
var Bh = function() {};
Bh.prototype.rc = function() {
    return !0
};
var V = function(a) {
    return a.rc() ? Q.lf() : Q.vd()
};
Bh.prototype.u = function() {
    throw Error("unimplemented abstract method");
};
Bh.prototype.Ca = function() {
    throw Error("unimplemented abstract method");
};
Bh.prototype.G = function() {
    throw Error("unimplemented abstract method");
};
Bh.prototype.H = function() {
    throw Error("unimplemented abstract method");
};
var W = function() {};
G(W, Bh);
W.prototype.G = function(a, b, c) {
    var d = this,
        e = this.u(a);
    V(this).getItem(e, function(f) {
        if (f) try {
            var g = I.parse(f);
            if (g.cookieHash != b) {
                V(d).removeItem(e, function() {
                    c(void 0)
                });
                return
            }
            var h = g && g.cachedValue
        } catch (k) {}
        c(h)
    })
};
W.prototype.H = function(a, b, c, d) {
    a = this.u(a);
    void 0 === b || null === b ? V(this).removeItem(a, d) : (b = I.stringify({
        cookieHash: c,
        cachedValue: b
    }), V(this).setItem(a, b, d))
};
var Ch = function() {};
G(Ch, Bh);
Ch.prototype.G = function(a, b, c) {
    V(this).getItem(this.u(a), function(d) {
        if (d) try {
            var e = I.parse(d);
            var f = e && e.cachedValue
        } catch (g) {}
        c(f)
    })
};
Ch.prototype.H = function(a, b, c, d) {
    a = this.u(a);
    void 0 === b || null === b ? V(this).removeItem(a, d) : (b = I.stringify({
        cachedValue: b
    }), V(this).setItem(a, b, d))
};
var Dh = function() {};
G(Dh, Ch);
Dh.prototype.rc = function() {
    return !1
};
Dh.prototype.u = function(a) {
    return [S.Ka, a.origin, a.clientId, a.id].join(S.v)
};
Dh.prototype.Ca = function(a) {
    var b = {};
    a && (a = a.split(S.v), 4 == a.length && (b.origin = a[1], b.clientId = a[2], b.id = a[3]));
    return b
};
var Eh = function() {};
G(Eh, W);
Eh.prototype.u = function(a) {
    return [S.Rc, a.origin, a.clientId].join(S.v)
};
Eh.prototype.Ca = function(a) {
    a = a.split(S.v);
    var b = {};
    3 == a.length && (b.origin = a[1], b.clientId = a[2]);
    return b
};
var Fh = function() {};
G(Fh, W);
Fh.prototype.u = function(a) {
    return [S.oe, a.origin, a.clientId].join(S.v)
};
Fh.prototype.G = function(a, b, c) {
    var d = this;
    W.prototype.G.call(this, a, b, function(e) {
        e && e.expires_at ? 6E4 > e.expires_at - (new Date).getTime() ? V(d).removeItem(d.u(a), c) : ue(e.scope, a.scope) && ue(a.scope, e.scope) ? (e.expires_in = Math.floor((e.expires_at - (new Date).getTime()) / 1E3), c && c(e)) : V(d).removeItem(d.u(a), c) : c && c(void 0)
    })
};
Fh.prototype.H = function(a, b, c, d) {
    var e;
    b && b.expires_at && 18E4 < b.expires_at - (new Date).getTime() && (e = b);
    W.prototype.H.call(this, a, e, c, d)
};
var Gh = function() {};
G(Gh, Ch);
Gh.prototype.rc = function() {
    return !1
};
Gh.prototype.u = function(a) {
    return [S.La, a.domain, a.crossSubDomains ? "1" : "0", Q.td(a.policy), a.id || S.Pb].join(S.v)
};
Gh.prototype.Ca = function(a) {
    a = a.split(S.v);
    var b = {};
    5 == a.length && (b.domain = a[1], b.crossSubDomains = "1" == a[2], b.policy = a[3], b.id = a[4]);
    "DEFAULT" == b.policy && delete b.policy;
    b.id == S.Pb && delete b.id;
    return b
};
var Hh = function(a) {
    this.Jf = a || S.Vc
};
G(Hh, W);
Hh.prototype.u = function(a) {
    return [this.Jf, a.origin, a.clientId, a.id || S.Sc].join(S.v)
};
Hh.prototype.G = function(a, b, c) {
    var d = this;
    W.prototype.G.call(this, a, b, function(e) {
        e && e.Ja && e.Ja.expires_at ? a.loginHint != e.Ja.login_hint ? V(d).removeItem(d.u(a), c) : 6E4 > e.Ja.expires_at - (new Date).getTime() ? V(d).removeItem(d.u(a), c) : ue(e.Ja.scope, a.scope) ? ue(e.responseType, a.responseType) ? (e = e.Ja, e.expires_in = Math.floor((e.expires_at - (new Date).getTime()) / 1E3), c && c(e)) : V(d).removeItem(d.u(a), c) : V(d).removeItem(d.u(a), c) : c && c(void 0)
    })
};
Hh.prototype.H = function(a, b, c, d) {
    var e;
    b && b.expires_at && 18E4 < b.expires_at - (new Date).getTime() && (e = {
        Ja: b,
        responseType: a.responseType
    });
    W.prototype.H.call(this, a, e, c, d)
};
var Ih = function(a, b) {
        this.i = a;
        this.Ac = b;
        this.ac = !1;
        this.bb = {};
        this.ab = {};
        this.$a = {}
    },
    Jh = function(a, b) {
        if (!b) throw Error("message object cannot be null.");
        b.rpcToken = a.Ac;
        b = I.stringify(b);
        F("IDP IFrame sends message: " + b);
        window.parent.postMessage(b, a.i)
    },
    Y = function(a, b, c) {
        b && Jh(a, {
            id: b,
            result: c
        })
    };
Ih.prototype.Lf = function(a) {
    if (a.source == window.parent && a.origin == this.i) {
        F("IDP Session State IFrame receive message:" + a.data);
        try {
            var b = I.parse(a.data)
        } catch (d) {
            return
        }
        if ((b.rpcToken || this.Ac) && b.rpcToken != this.Ac) F("RPC token mismatch.");
        else if (b && b.method && ("showDialog" == b.method || this.bb[b.method]))
            if ("showDialog" == b.method)
                if (this.ac) Jh(this, {
                    id: b.id,
                    error: "dialog_already_displayed"
                });
                else if (a = b.params, b.id && a && a.dialogType && this.$a[a.dialogType]) {
            var c = this.$a[a.dialogType];
            c.B && !c.B(a) ?
                (F("Bad request."), Jh(this, {
                    id: b.id,
                    error: "bad_request"
                })) : c.l(b)
        } else F("Bad dialog request.");
        else a = this.bb[b.method], a.ba && !b.id ? F("Bad request.") : a.B && !a.B(b) ? (F("Bad request."), Jh(this, {
            id: b.id,
            error: "bad_request"
        })) : a.l(b);
        else F("Bad request.")
    }
};
var Kh = function(a, b) {
        if (b && b.type && a.ab[b.type]) {
            var c = a.ab[b.type].filter;
            c && !c(b) || Jh(a, {
                method: "fireIdpEvent",
                params: b
            })
        } else F("Invalid event type.")
    },
    Lh = function(a) {
        Kh(a, {
            type: "displayIFrame",
            pf: !1,
            options: {
                fullScreen: !0
            }
        });
        a.ac = !0
    },
    Mh = function(a) {
        Kh(a, {
            type: "displayIFrame",
            pf: !0
        });
        a.ac = !1
    },
    Nh = function(a, b) {
        a.bb = {};
        a.ab = {};
        a.$a = {};
        if (b) {
            if (b.F)
                for (var c = 0; c < b.F.length; c++) {
                    var d = b.F[c];
                    if (!d.method || !d.l) throw Error("Error in RPC policy: method or handler is empty.");
                    if (a.bb[d.method]) throw Error("Error in RPC policy: duplicate entry for RPC '" +
                        d.method + "'.");
                    var e = d.method;
                    a.bb[e] = {
                        l: d.l,
                        ba: d.ba,
                        B: d.B,
                        method: e
                    }
                }
            if (b.X)
                for (c = 0; c < b.X.length; c++) {
                    d = b.X[c];
                    if (!d.type) throw Error("Error in Event policy: type is empty.");
                    if (a.ab[d.type]) throw Error("Error in Event policy: duplicate entry for type '" + d.type + "'.");
                    e = d.type;
                    a.ab[e] = {
                        filter: d.filter,
                        type: e
                    }
                }
            if (b.ya)
                for (c = 0; c < b.ya.length; c++) {
                    d = b.ya[c];
                    if (!d.za) throw Error("Error in Dialog policy: dialogType is empty.");
                    if (a.$a[d.za]) throw Error("Error in Dialog policy: duplicate entry for dialogType '" +
                        d.za + "'.");
                    e = d.za;
                    a.$a[e] = {
                        za: e,
                        l: d.l,
                        B: d.B
                    }
                }
        }
    },
    Oh = function(a, b, c, d) {
        Kh(a, {
            type: "sessionStateChanged",
            clientId: b,
            user: c,
            sessionState: d
        })
    },
    Ph = function(a) {
        var b = new Gh,
            c = S.La + S.v;
        return function(d) {
            if (d.key && 0 === d.key.indexOf(c)) {
                var e = b.Ca(d.key);
                if (Q.J(a.i, e.domain, e.crossSubDomains, e.policy)) {
                    var f;
                    if (d.newValue) try {
                        var g = I.parse(d.newValue);
                        g && (f = g.cachedValue)
                    } catch (h) {
                        return
                    }
                    Kh(a, {
                        type: "sessionSelectorChanged",
                        newValue: f,
                        crossSubDomains: e.crossSubDomains,
                        domain: e.domain,
                        policy: e.policy,
                        id: e.id
                    })
                }
            }
        }
    },
    Qh = function(a) {
        var b = new Dh,
            c = [S.Ka, a.i].join(S.v) + S.v;
        return function(d) {
            if (!d.key && we()) {
                var e = null,
                    f = [];
                for (d = 0; d < window.localStorage.length; d++) {
                    var g = window.localStorage.key(d);
                    if (0 === g.indexOf(c))
                        if (e) f.push(g);
                        else {
                            var h = window.localStorage.getItem(g);
                            f.push(g);
                            if (h) {
                                try {
                                    var k = I.parse(h)
                                } catch (l) {
                                    continue
                                }
                                k && k.cachedValue && (e = b.Ca(g), e = {
                                    type: "authResult",
                                    clientId: e.clientId,
                                    id: e.id,
                                    authResult: k.cachedValue
                                })
                            }
                        }
                }
                for (d = 0; d < f.length; d++) window.localStorage.removeItem(f[d]);
                (k = e) && Kh(a, k)
            } else if (d.key &&
                0 === d.key.indexOf(c) && d.newValue) {
                try {
                    f = I.parse(d.newValue)
                } catch (l) {
                    return
                }
                f && f.cachedValue && (k = b.Ca(d.key), k = {
                    type: "authResult",
                    clientId: k.clientId,
                    id: k.id,
                    authResult: f.cachedValue
                }, Kh(a, k))
            }
        }
    },
    Rh = function(a, b) {
        this.i = a;
        this.ma = b;
        this.gd = new Eh;
        this.ae = new Gh;
        this.Ic = new Hh;
        this.wd = new Fh
    },
    Sh = function(a, b, c, d, e) {
        a.gd.H({
            origin: a.i,
            clientId: b
        }, {
            user: c.T,
            session: c.T ? c.ka : void 0
        }, d, e)
    },
    Th = function(a, b, c) {
        a.gd.G({
            origin: a.i,
            clientId: b
        }, kh(), c)
    },
    Uh = function(a, b, c, d, e, f, g) {
        a.Ic.G({
            loginHint: b,
            origin: a.i,
            clientId: c,
            responseType: d,
            scope: e,
            id: f
        }, kh(), g)
    },
    Vh = function(a, b, c, d, e, f, g) {
        a.Ic.H({
            origin: a.i,
            clientId: c,
            responseType: d,
            id: f
        }, e, b, g)
    },
    Wh = function(a, b, c) {
        var d = a.Ic;
        a = {
            origin: a.i,
            clientId: b
        };
        V(d).removeItem(d.u(a), c)
    },
    Xh = function(a, b, c, d, e, f) {
        if (!a.J(b, c, e)) throw Error("Permission denied for '" + a.i + "' to read session selector for domain '" + b + "'.");
        a.ae.G({
            domain: b,
            crossSubDomains: c,
            policy: e,
            id: d
        }, void 0, function(g) {
            f && f(g)
        })
    },
    Yh = function(a, b, c, d, e, f, g) {
        if (!a.J(b, c, f)) throw Error("Permission denied for '" +
            a.i + "' to write session selector for domain '" + b + "'.");
        a.ae.H({
            domain: b,
            crossSubDomains: c,
            policy: f,
            id: e
        }, d, void 0, g)
    };
Rh.prototype.J = function(a, b, c) {
    return Q.J(this.i, a, b, c)
};
var Zh = function(a, b, c, d) {
        a.wd.G({
            origin: a.i,
            clientId: b,
            scope: c
        }, kh(), d)
    },
    $h = function(a, b, c, d, e) {
        a.wd.H({
            origin: a.i,
            clientId: c
        }, d, b, e)
    },
    ai = function(a, b, c) {
        this.va = a;
        this.h = b;
        this.m = c;
        this.ka = this.T = void 0
    },
    bi = function(a, b, c) {
        a.T ? c && void 0 !== c[a.T] ? (c = c[a.T], ih(a.ka, c) || (a.ka = c, Sh(a.m, a.va, a, b, function() {
            Oh(a.h, a.va, a.T, a.ka)
        }))) : a.ka && (a.ka = void 0, Sh(a.m, a.va, a, b, function() {
            Oh(a.h, a.va, a.T, void 0)
        })) : b && Oh(a.h, a.va, a.T, void 0)
    },
    di = function(a, b, c, d) {
        this.ma = a;
        this.h = b;
        this.W = c;
        this.m = d;
        this.Ya = void 0;
        this.I = {};
        this.Ec = [];
        var e = this;
        this.ma.addListener(function(f) {
            ci(e, f)
        })
    },
    ei = function(a) {
        var b = [],
            c;
        for (c in a.I) {
            var d = a.I[c].T;
            d && b.push(d)
        }
        return b
    },
    ci = function(a, b) {
        if (b.newHash) sh(a.W, ei(a), function(d) {
            for (var e in a.I) bi(a.I[e], b.newHash, d && d.activeHints)
        });
        else
            for (var c in a.I) bi(a.I[c], b.newHash, void 0)
    },
    fi = function(a, b, c, d, e) {
        var f = a.I[b];
        f || (f = new ai(b, a.h, a.m), a.I[b] = f);
        a = f;
        b = c.login_hint;
        c = c.session_state;
        a.T != b ? (a.T = b, a.ka = b ? c : void 0, Sh(a.m, a.va, a, d, e)) : e && e()
    },
    gi = function(a, b, c) {
        var d =
            a.I[b];
        d ? c(!0) : Th(a.m, b, function(e) {
            e ? (d = new ai(b, a.h, a.m), a.I[b] = d, d.T = e.user, d.ka = e.session, c(!0)) : rh(a.W, b, function(f) {
                f && f.valid ? (f = new ai(b, a.h, a.m), a.I[b] = f, Sh(a.m, b, f, kh(), function() {
                    c(!0)
                })) : c(!1)
            })
        })
    },
    hi = function(a, b) {
        xe() || ze() ? a.Ec.push(b) : te(we() ? document : window, "storage", b)
    },
    ii = function(a, b, c, d) {
        this.i = a;
        this.He = c;
        this.lg = void 0 === d ? !1 : d;
        this.h = new Ih(a, b);
        this.ma = new jh(S.me);
        this.W = new oh(a);
        this.m = new Rh(a, this.ma);
        this.ca = new di(this.ma, this.h, this.W, this.m)
    };
m = ii.prototype;
m.start = function() {
    var a = this,
        b = function() {
            a.h.Lf.apply(a.h, arguments)
        },
        c = function() {
            Kh(a.h, {
                type: "idpReady",
                cookieDisabled: !navigator.cookieEnabled
            });
            F("Initialize IDP IFrame successfully.")
        },
        d = function(e) {
            var f = window;
            if (f.removeEventListener) f.removeEventListener("message", b, !1);
            else if (f.detachEvent) f.detachEvent("onmessage", b);
            else throw Error("Remove event handler for message failed.");
            lh(a.ma);
            Kh(a.h, {
                type: "idpError",
                error: e.message
            })
        };
    try {
        Nh(this.h, this.createPolicy()), te(window, "message",
            b), hi(this.ca, Ph(this.h)), hi(this.ca, Qh(this.h)), nh(this.ma), Q.qf(c, d, this.He, this.lg)
    } catch (e) {
        d(e)
    }
};
m.Cf = function(a) {
    var b = this;
    gi(this.ca, (a.params || {}).clientId, function(c) {
        Y(b.h, a.id, c)
    })
};
m.$e = function(a) {
    var b = a.params || {},
        c = this,
        d = function(q) {
            Y(c.h, a.id, q)
        },
        e = b.clientId,
        f = b.loginHint,
        g = b.request,
        h = b.sessionSelector;
    g.client_id = e;
    g.login_hint = f;
    g.ss_domain = h.domain;
    var k = kh();
    if (k) {
        var l = !!g.enable_serial_consent,
            r = function(q) {
                q && !q.error && q.login_hint ? (q.first_issued_at = (new Date).getTime(), q.expires_at = q.first_issued_at + 1E3 * q.expires_in, q.session_state || (q.session_state = {}), l || q.scope || (q.scope = g.scope), b.skipCache ? fi(c.ca, e, q, k, function() {
                    d(q)
                }) : Vh(c.m, k, e, g.response_type, q, b.id,
                    function() {
                        fi(c.ca, e, q, k, function() {
                            d(q)
                        })
                    })) : (q = q || {}, d(q))
            };
        b.forceRefresh ? uh(this.W, g, r) : Uh(this.m, f, e, g.response_type, g.scope, b.id, function(q) {
            q && 18E4 < q.expires_at - (new Date).getTime() ? fi(c.ca, e, q, k, function() {
                d(q)
            }) : uh(c.W, g, r)
        })
    } else Y(c.h, a.id, {
        error: "user_logged_out"
    }), b.userInteracted && (f = ji(), ki(f).oc(), f.flush())
};
m.gf = function(a) {
    var b = this,
        c = function(g) {
            Y(b.h, a.id, g)
        };
    if (kh()) {
        var d = a.params || {},
            e = d.request,
            f = d.sessionSelector;
        e.client_id = d.clientId;
        e.login_hint = d.loginHint;
        e.ss_domain = f.domain;
        vh(this.W, e, c)
    } else c({
        error: "user_logged_out"
    })
};
m.Tf = function(a) {
    var b = a.params || {},
        c = b.clientId,
        d = this;
    this.W.revoke(b.token, function(e) {
        Wh(d.m, c, function() {
            Y(d.h, a.id, e)
        })
    })
};
m.ig = function(a) {
    if (xe() || ze()) {
        var b = a.params || {},
            c = (new Dh).u({
                clientId: b.clientId,
                id: b.id,
                origin: b.origin
            });
        b = this.ca;
        if (xe() || ze()) {
            b.Ya && b.Ya.stop();
            b.Ya = new fh(c);
            for (c = 0; c < b.Ec.length; c++) b.Ya.addListener(b.Ec[c]);
            b.Ya.start()
        }
    }
    Y(this.h, a.id, !0)
};
m.Ze = function(a) {
    var b = this,
        c = a.params || {};
    Xh(this.m, c.domain, c.crossSubDomains, c.id, c.policy, function(d) {
        Y(b.h, a.id, d)
    })
};
m.cg = function(a) {
    var b = a.params || {},
        c = b.hint,
        d = !!b.disabled,
        e = b.domain,
        f = b.crossSubDomains,
        g = b.id,
        h = b.policy,
        k = this;
    if (c || d) var l = {
        hint: c,
        disabled: d
    };
    Yh(this.m, e, f, l, g, h, function() {
        Kh(k.h, {
            type: "sessionSelectorChanged",
            newValue: l,
            domain: e,
            crossSubDomains: f,
            id: g,
            policy: h
        });
        Y(k.h, a.id, !0)
    })
};
m.zf = function(a) {
    var b = a.params || {},
        c = this,
        d = function(l) {
            Y(c.h, a.id, l)
        },
        e = b.clientId,
        f = b.request,
        g = b.sessionSelector;
    f.client_id = e;
    f.response_type = "id_token";
    f.ss_domain = g.domain;
    var h = kh();
    if (h) {
        var k = function(l) {
            l && !l.error ? (l.first_issued_at = (new Date).getTime(), l.expires_at = l.first_issued_at + 1E3 * l.expires_in, l.scope = f.scope, $h(c.m, h, e, l, function() {
                d(l)
            })) : (l = l || {
                error: "No response returned from Server."
            }, d(l))
        };
        b.forceRefresh ? wh(this.W, f, k) : Zh(this.m, e, f.scope, function(l) {
            l ? d(l) : wh(c.W, f, k)
        })
    } else d({
        scope: f.scope,
        sessions: []
    })
};
m.Fe = function(a) {
    if (document.hasStorageAccess && qe(document.hasStorageAccess)) {
        var b = this;
        document.hasStorageAccess().then(function(c) {
            Y(b.h, a.id, {
                hasAccess: c
            })
        }, function(c) {
            F("CheckStorageAccess failed: " + c);
            Y(b.h, a.id, {
                hasAccess: !1
            })
        })
    } else Y(this.h, a.id, {
        hasAccess: !0
    })
};
m.Df = function(a) {
    a = a && a.params || {};
    return a.clientId && !U(a.clientId)
};
m.mf = function(a) {
    var b = a && a.params || {};
    a = b.loginHint;
    var c = !U(b.id),
        d = b.clientId && !U(b.clientId),
        e = !!b.request,
        f = e && b.request.scope;
    (b = (e = e && b.request.response_type) && 0 <= b.request.response_type.indexOf("code")) && F("Bad request: 'code' response_type is not supported.");
    return a && c && d && f && e && !b
};
m.hf = function(a) {
    a = a && a.params || {};
    var b = !U(a.id),
        c = a.clientId && !U(a.clientId),
        d = !!a.request && a.request.scope;
    return a.loginHint && b && c && d
};
m.kf = function(a) {
    a = a && a.params || {};
    var b = a.domain && !U(a.domain),
        c = !U(a.policy);
    return !U(a.id) && b && c && this.m.J(a.domain, !!a.crossSubDomains, a.policy)
};
m.dg = function(a) {
    a = a && a.params || {};
    var b = a.domain && !U(a.domain),
        c = !U(a.policy);
    return !U(a.id) && b && c && this.m.J(a.domain, !!a.crossSubDomains, a.policy) && S.we(a)
};
m.Af = function(a) {
    a = a && a.params || {};
    var b = a.clientId && !U(a.clientId),
        c = !!a.request && a.request.scope;
    return !U(a.id) && b && c
};
m.Uf = function(a) {
    a = a && a.params || {};
    var b = !!a.token,
        c = a.clientId && !U(a.clientId);
    return !U(a.id) && b && c
};
m.jg = function(a) {
    a = a && a.params || {};
    var b = a.origin && !U(a.origin),
        c = a.id && !U(a.id);
    return a.clientId && !U(a.clientId) && b && c
};
m.$f = function(a) {
    var b;
    if (b = a.clientId) a = a.clientId, b = !(!a || !this.ca.I[a]);
    return b
};
m.ye = function(a) {
    var b;
    if (b = a.clientId) b = a.clientId, b = !(!b || !this.ca.I[b]);
    return b && a.id && a.authResult
};
m.Re = function(a) {
    return !!a.hide || !!a.options
};
m.Zf = function(a) {
    return a.domain && this.m.J(a.domain, a.crossSubDomains, a.policy)
};
var Z = function(a, b) {
    return function() {
        return b.apply(a, arguments)
    }
};
ii.prototype.createPolicy = function() {
    var a = {
        F: [],
        X: [],
        ya: []
    };
    li(this, a);
    return a
};
var li = function(a, b) {
        b.F.push({
            method: "monitorClient",
            l: Z(a, a.Cf),
            ba: !1,
            B: Z(a, a.Df)
        });
        b.F.push({
            method: "getTokenResponse",
            l: Z(a, a.$e),
            ba: !0,
            B: Z(a, a.mf)
        });
        b.F.push({
            method: "getOnlineCode",
            l: Z(a, a.gf),
            ba: !0,
            B: Z(a, a.hf)
        });
        b.F.push({
            method: "getSessionSelector",
            l: Z(a, a.Ze),
            ba: !0,
            B: Z(a, a.kf)
        });
        b.F.push({
            method: "setSessionSelector",
            l: Z(a, a.cg),
            ba: !1,
            B: Z(a, a.dg)
        });
        b.F.push({
            method: "listIdpSessions",
            l: Z(a, a.zf),
            ba: !0,
            B: Z(a, a.Af)
        });
        b.F.push({
            method: "revoke",
            l: Z(a, a.Tf),
            B: Z(a, a.Uf)
        });
        b.F.push({
            method: "startPolling",
            l: Z(a, a.ig),
            B: Z(a, a.jg)
        });
        b.X.push({
            type: "idpReady"
        });
        b.X.push({
            type: "idpError"
        });
        b.X.push({
            type: "sessionStateChanged",
            filter: Z(a, a.$f)
        });
        b.X.push({
            type: "sessionSelectorChanged",
            filter: Z(a, a.Zf)
        });
        b.X.push({
            type: "authResult",
            filter: Z(a, a.ye)
        });
        b.X.push({
            type: "displayIFrame",
            filter: Z(a, a.Re)
        });
        b.F.push({
            method: "checkStorageAccess",
            l: Z(a, a.Fe),
            ba: !0
        })
    },
    mi = function(a) {
        this.$d = a
    },
    ki = function(a) {
        a = new Le(a.$d);
        return new ni(a)
    };
mi.prototype.flush = function() {
    this.$d.Cc()
};
var ji = function() {
        var a = new Ug;
        a = new Je(a);
        return new mi(a)
    },
    ni = function(a) {
        this.Je = a;
        this.De = Za() ? "IE" : Ya() ? "Opera" : B("OPR") ? "OPR" : B("Edge") ? "Edge" : B("Edg/") ? "Edg" : cb() ? "Android" : bb() ? "Chrome" : $a() ? "Firefox" : !B("iPad") && !B("iPhone") || ab() || bb() || B("Coast") || $a() || !B("AppleWebKit") ? ab() ? "Safari" : "Other" : "iOS Webview";
        (a = eb()) ? (a = a.split("."), a = 2 > a.length ? a[0] : a[0] + "." + a[1]) : a = "N/A";
        this.Ce = a
    };
ni.prototype.oc = function() {
    this.Je.oc(this.De, this.Ce)
};
var oi = "client_id origin ss_domain scope privileged authuser".split(" ");
S.lb = "response_type login_hint client_id origin scope ss_domain authuser hd include_granted_scopes nonce spec_compliant".split(" ");
var pi = function() {};
G(pi, W);
pi.prototype.u = function(a) {
    a = void 0 === a ? {} : a;
    return ["gsi_gs", void 0 === a.origin ? null : a.origin, void 0 === a.clientId ? null : a.clientId].join(S.v)
};
pi.prototype.G = function(a, b, c) {
    var d = this;
    c = void 0 === c ? function() {} : c;
    W.prototype.G.call(this, a, b, function(e) {
        e ? !e.expires_at || e.expires_at <= (new Date).getTime() ? V(d).removeItem(d.u(a), function() {
            return c(null)
        }) : (e.expires_at = void 0, c(e)) : c(null)
    })
};
pi.prototype.H = function(a, b, c, d) {
    b && (b.expires_at = (new Date).getTime() + 864E5);
    W.prototype.H.call(this, a, b, c, d)
};
var ri = function(a, b, c) {
    b.origin = a.i;
    b.privileged = !0;
    b = th(b, oi);
    qh(S.Rb, b, qi(a.i), function(d) {
        c(d)
    })
};

function qi(a) {
    var b = {},
        c = S.jf();
    if (c) {
        if (!c) throw Error("Session cookie value cannot be empty.");
        c = new Db(new Eb, Ia(c));
        a = Ia(a);
        c.reset();
        c.update(a);
        a = c.digest();
        a = Bb(a);
        b["X-Csrf-Token"] = a
    }
    return b
};
ii.prototype.Xe = function(a) {
    var b = this;
    a = void 0 === a ? {} : a;
    var c = a.id,
        d = void 0 === a.params ? {} : a.params,
        e = function(r) {
            r && r.sessions ? (r = si(f, r.sessions), Y(b.h, c, r)) : Y(b.h, c, null)
        },
        f = d.loginHint;
    delete d.loginHint;
    var g = kh();
    if (g) {
        a = d.clientId;
        var h = d.request;
        d = d.sessionSelector;
        h.client_id = a;
        h.ss_domain = d.domain;
        var k = new pi,
            l = {
                clientId: a,
                origin: this.i
            };
        k.G(l, g, function(r) {
            r ? e(r) : ri(b.W, h, function(q) {
                !q || q.error ? e(null) : k.H(l, q, g, function() {
                    e(q)
                })
            })
        })
    } else e(null)
};

function si(a, b) {
    if (!b.length) return null;
    var c = a.toLowerCase();
    b = t(b);
    for (var d = b.next(); !d.done; d = b.next())
        if (d = d.value, d.login_hint) {
            if (a === d.obfuscatedGaiaId) return d.login_hint;
            if (d.emails && d.emails.length)
                for (var e = t(d.emails), f = e.next(); !f.done; f = e.next())
                    if (c === f.value.toLowerCase()) return d.login_hint
        }
    return null
}
ii.prototype.gg = function(a) {
    ti(this, a, !1)
};
ii.prototype.hg = function(a) {
    ti(this, a, !0)
};
var ti = function(a, b, c) {
    document.requestStorageAccess && qe(document.requestStorageAccess) ? document.hasStorageAccess().then(function(d) {
        if (d) Y(a.h, b.id, {
            hasAccess: !0
        });
        else {
            d = new Fd({
                origin: a.i
            });
            var e = document.getElementById("container");
            (c ? d.Pf : d.Of).call(d, e, function() {
                Mh(a.h);
                Y(a.h, b.id, {
                    hasAccess: !0
                })
            }, function() {
                Mh(a.h);
                Y(a.h, b.id, {
                    hasAccess: !1
                })
            });
            Lh(a.h)
        }
    }, function(d) {
        F("StorageAccess check failed: " + d);
        Y(a.h, b.id, {
            hasAccess: !1
        })
    }) : Y(a.h, b.id, {
        hasAccess: !0
    })
};
ii.prototype.Ye = function(a) {
    a = void 0 === a ? {} : a;
    a = void 0 === a.params ? {} : a.params;
    var b = !!a.clientId && !U(a.clientId),
        c = !!a.request,
        d = !!a.sessionSelector;
    return !!a.loginHint && b && c && d
};
ii.prototype.createPolicy = function() {
    var a = {
        F: [],
        ya: [],
        X: []
    };
    li(this, a);
    a.F.push({
        method: "gsi:fetchLoginHint",
        l: Z(this, this.Xe),
        ba: !0,
        B: Z(this, this.Ye)
    });
    a.ya.push({
        za: "itpNewGrant",
        l: Z(this, this.gg)
    });
    a.ya.push({
        za: "itpRegrant",
        l: Z(this, this.hg)
    });
    return a
};
S.Wc = "/o/oauth2/iframerpc?action=sessionState";
S.Qc = "/o/oauth2/iframerpc?action=checkOrigin";
S.Uc = "/o/oauth2/iframerpc?action=issueToken";
S.Tc = "/o/oauth2/iframerpc?action=issueOnlineCode";
S.Rb = "/o/oauth2/iframerpc?action=listSessions";
var ui = function() {
        var a = se("origin"),
            b = !!se("supportBlocked3PCookies");
        if (!a) throw Error("Failed to get parent origin from URL hash!");
        var c = se("rpcToken");
        if (!c) throw Error("Failed to get rpcToken from URL hash!");
        var d = !!se("clearCache"),
            e = se("debug");
        oe = "0" != e && !!e;
        (new ii(a, c, d, b)).start()
    },
    vi = ["lso", "startIdpIFrame"],
    wi = x;
vi[0] in wi || "undefined" == typeof wi.execScript || wi.execScript("var " + vi[0]);
for (var xi; vi.length && (xi = vi.shift());) vi.length || void 0 === ui ? wi = wi[xi] && wi[xi] !== Object.prototype[xi] ? wi[xi] : wi[xi] = {} : wi[xi] = ui;