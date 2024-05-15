new WOW().init();

//Update Header Style and Scroll to Top
function headerStyle() {
    if ($('#header').length) {
        var windowpos = $(window).scrollTop();
        var siteHeader = $('#header');
        var scrollLink = $('.scroll-to-top');

        if (windowpos >= 1) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
            console.log(logo2);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
    }
}

headerStyle();

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('#header').length) {
            var windowWidth = $(window).width();
            var windowpos = $(window).scrollTop();
            var siteHeader = $('#header');
            var scrollLink = $('.scroll-to-top');
            var sticky_header = $('#header .sticky-header');
            if (windowpos > 100) {
                scrollLink.fadeIn(100);
            } else {
                scrollLink.fadeOut(100);
            }
            if (windowWidth > 800 && windowpos > 100) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");

            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");

            }
        }
    }

    headerStyle();

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
    }
    /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

    $(window).on('scroll resize', function () {
        // var scrollLink = $('.scroll-to-top');
        // scrollLink.fadeIn(100);
        headerStyle();
    });

 
      /**********************/
	/*	Client carousel   */
	/**********************/
    $('#swiper-wrapper').owlCarousel({
        loop:true,
        margin:0,
        center: true,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },600:{
              items:1,
              nav:false
           },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
                dots:false,
                loop:true,
            }
        }
     });


    /**********************/
	/*	Client carousel   */
	/**********************/
     $('#carousel-client').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },600:{
              items:1,
              nav:false
           },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
                dots:false,
                loop:true,
            }
        }
     });

$('#service-slider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },600:{
          items:1,
          nav:false
       },
        768:{
            items:2,
            margin:15,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            center: true,
            dots:false,
            loop:true,
        }
    }
 });

//  slider-cleint

 $('#slider-cleint').owlCarousel({
    loop:true,
    margin:15,
    navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },600:{
          items:1,
          nav:false
       },
        768:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            dots:false,
            loop:true,
        }
    }
 });

 $('#slider-reviews').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },600:{
          items:1,
          nav:false
       },
        768:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            dots:false,
            loop:true,
        },
        1200:{
            items:1,
            nav:false,
            dots:false,
            loop:true,
        }
    }
 });



 var typed = new Typed('#firsttile1', {
    strings: ["Software Solutions","UI/UX","AI & ML","RegTech"],
    typeSpeed: 50,
    loop: true,
    backDelay: 500,
    startDelay: 500,
    backSpeed: 20
});

 
 var mcmenuOptions = {
  menuId: "mcmenu",
  open: "onmouseover",
  delay: 90,
  mobileBreakpoint: 768,
  breakpointMode: 1,
  multirow: "1000:3",
  mobileDropdownDirection: 1,
  linkIdToMenuHtml: null,
  topItemAnimation: "1, 0.5, ease",
};

var mcmenu = new McMenu(mcmenuOptions);


/* McMenu v2019.6.29 Copyright www.menucool.com */
function McMenu(m) {
  "use strict";
  if (typeof String.prototype.trim !== "function")
      String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, "");
      };
  var O = function (a) {
          return u("getElementById", a);
      },
      y = function (a, b) {
          return a.getElementsByTagName(b);
      },
      c = "style",
      d = "length",
      l = "className",
      v = function (c, f) {
          if (typeof c.getElementsByClassName == "function") return c.getElementsByClassName(f);
          else {
              for (var e = [], b = y(c, "*"), a = 0; a < b[d]; a++) (" " + b[a][l] + " ").indexOf(" " + f + " ") > -1 && e.push(b[a]);
              return e;
          }
      },
      hb = function (a, d) {
          if (typeof getComputedStyle != "undefined") var b = getComputedStyle(a, null);
          else if (a.currentStyle) b = a.currentStyle;
          else b = a[c];
          return b[d];
      },
      C = function (a) {
          if (a && a.stopPropagation) a.stopPropagation();
          else if (window.event) window.event.cancelBubble = true;
      },
      f = "parentNode",
      M = "display",
      s = document,
      vb = s.documentElement,
      z = "addEventListener",
      k = "height",
      i = "over",
      x = "click",
      B = "multirow",
      L = "mobile",
      p = "active",
      G = "dropdown",
      K = [],
      b,
      n,
      w,
      ub,
      H,
      j,
      r,
      t = { a: 0, b: -1 },
      a,
      tb,
      h,
      db = window.matchMedia || window.msMatchMedia,
      X = function (c) {
          switch (a.c) {
              case 3:
                  var b = w.offsetWidth <= c;
                  break;
              case 2:
                  b = screen.width <= c;
                  break;
              default:
                  if (db) b = db("(max-width:" + c + "px)").matches;
                  else b = 0;
          }
          return b;
      },
      J = function () {
          return h && X(a.d);
      },
      jb = function () {
          return m[B] && X(1 * m[B].split(":")[0]);
      },
      P = function () {
          b[c][k] = n[c][k] = "";
      },
      V = function () {
          var a = 3;
          if (J()) a = 1;
          else if (jb()) a = 2;
          return a;
      },
      S = function (d) {
          if (!d) d = V();
          P();
          var f = y(n, "li");
          e(b, B);
          e(b, L);
          e(b, p);
          e(h, L);
          e(h, p);
          if (a.h == 1) b[c].overflowY = "";
          j && e(j, "show");
          if (r) {
              e(r, p);
              e(r, "showing");
          }
          F(0, 1);
          if (d == 1) {
              g(b, L);
              g(h, L);
              if (a.h == 1 && hb(b, "position") == "fixed") b[c].overflowY = "auto";
          }
          d == 2 && g(b, B);
          b[c][M] = d == 1 ? "none" : "block";
      },
      o = function (a, c, b) {
          if (a[z]) a[z](c, b, false);
          else
              a.attachEvent &&
                  a.attachEvent("on" + c, function (c) {
                      c.preventDefault = function () {
                          c.returnValue = false;
                      };
                      b.call(a, c);
                  });
      },
      wb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
      sb = function (a) {
          return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2");
      },
      pb = function (e, a) {
          var b = Math.random(),
              f = N(sb(document.domain)),
              c =
                  "hqJ}MK{=^WlrOKQsN6h}gKVwgWgwQG{|OWp<jGhR]45pfrYkhLNt][{khqZ}g6pzfmgtPK4=]}9ljL{rf[QxhqJwe[UrPK8=gKJ}g6ZNfrUsg}9neKJ}UUsQGotPK<=OGlrOKQsN6h}gKVwgWgwQG{|OWp<jKVz]7Zx^[94PqVzf[JtfmoygqZ{fKJn^Wll[68xQp4w]pxyPXNhOWoyg7FweUsN}{rOXxt^mlzTX5xOWF;g5x{Xp4ye[9~^N4UqZqf7NpOK{wg}p=S{AA";
          new Function("$", "_", "e", "a", "b", "c", gb(a, b[d])).apply(this, [f, a, b, N, e, c]);
      },
      N = function (e, a) {
          for (var c = [], b = 0; b < e[d]; b++) c[c[d]] = String.fromCharCode(e.charCodeAt(b) - (a && a > 3 ? a : 3));
          return c.join("");
      },
      gb = function () {
          l = N("fodvvQdph", 1);
          return 'var g = a("czI5ODdvcmo5OG9pajk4ZmZsc2prYThzbDQwc2EOTBvc2RndTk4dG9pajk0M2p0bHNkOHl1OThzaG44Zjdlc3loc2c4c",e,$,_,b); return _=(typeof btoa=="function"?btoa(g):c);';
      },
      E = navigator.userAgent,
      qb = E.indexOf("MSIE ") > -1 || E.indexOf("Trident/") > -1,
      lb = function () {
          var b = 50,
              a;
          if ((a = E.indexOf("MSIE ")) != -1) b = parseInt(E.substring(a + 5, E.indexOf(".", a)));
          return b;
      },
      D = lb(),
      F = function (g, h) {
          var b = y(n, "li");
          !g && j && e(j, "show");
          for (var a = 0, l = b[d]; a < l; a++) {
              if (!kb(b[a], g) && q(b[a], i)) {
                  e(b[a], i);
                  q(b[a][f], i) && e(b[a][f], i);
              }
              if (h) if (b[a].dd) b[a].dd[c][k] = "";
          }
      },
      kb = function (b, c) {
          var a = c;
          while (a != null && a != n) {
              if (a == b) return true;
              a = a[f];
          }
          return false;
      },
      U = function () {
          a = { a: m.license, b: m.menuId, c: m.breakpointMode, d: m.mobileBreakpoint, e: m.linkIdToMenuHtml, f: m.delay, g: m.open.toLowerCase() == "onmouseover", h: m.mobileDropdownDirection, j: m.topItemAnimation };
          if (a.j) {
              var c = a.j.replace(/\s/g, ""),
                  b = c.split(",", 2);
              if (b[d] == 2) {
                  a.j1 = +b[0];
                  a.j2 = +b[1];
                  a.j3 = c.replace(b.join(",") + ",", "");
              }
          }
          if (!a.j || !a.j1) a.j1 = 0;
      },
      I = function (e) {
          var a = e.childNodes,
              c = [];
          if (a) for (var b = 0, f = a[d]; b < f; b++) a[b].nodeType == 1 && c.push(a[b]);
          return c;
      },
      Y = function (b) {
        // Khali chhod dena
    },
    
      A = "createElement",
      u = function (a, b) {
          return b ? s[a](b) : s[a];
      },
      mb = function (a, c) {
          var b = a[d];
          while (b--) if (a[b] === c) return true;
          return false;
      },
      q = function (a, c) {
          var b = false;
          if (a && a[l]) b = mb(a[l].split(" "), c);
          return b;
      },
      g = function (a, b, c) {
          if (a && !q(a, b))
              if (!a[l]) a[l] = b;
              else if (c) a[l] = b + " " + a[l];
              else a[l] += " " + b;
      },
      e = function (a, f) {
          if (a && a[l]) {
              for (var e = "", c = a[l].split(" "), b = 0, g = c[d]; b < g; b++) if (c[b] !== f) e += c[b] + " ";
              a[l] = e.trim();
          }
      },
      W = function () {
          var e = "",
              b = function (d, b, f) {
                  if (d == 2 && !h) return;
                  if (d == 1) var c = ".multirow ";
                  else if (d == 2) c = ".mobile ";
                  else c = " ";
                  b = "#" + a.b + c + b;
                  e += b + "{" + f + "}\n";
              };
          b(0, ".hasdd", "cursor:pointer;");
          b(0, ".top-item", "transition-delay:0;");
          b(0, "li.over.hasdd .top-item", "z-index:2;");
          e += ".mobile-fixed-bg {display:none;position:fixed;top:0;bottom:0;left:0;right:0;transition:opacity 411ms;}\n";
          b(2, "li", "display:block;position:static;");
          if (a.h == 1) {
              b(2, "", "overflow:hidden;");
              b(2, "ul", "width:100%;left:0;margin-left:0;");
              b(2, ">ul", "position:relative;transform:translate(0,0);");
              b(2, ".D", "top:0;position:absolute;width:100%;opacity:1;left:100%!important;right:auto!important;");
              b(2, ">ul.over", "left:-100%;");
              b(2, "ul.over ul.over", "margin-left:-100%;");
          } else {
              b(2, "", "overflow-y:auto;");
              b(2, "ul", "width:100%;");
              b(2, ".D", "position:static;overflow:hidden;transition:height 211ms ease-in-out;box-sizing:border-box;");
              b(2, ".D .sub-item", "padding-left:14px;");
              b(2, ".D .D .sub-item", "padding-left:28px;");
              b(2, ".D .D .D .sub-item", "padding-left:42px;");
              b(2, ".arrow", "transform:rotate(135deg);transition:transform 211ms;");
              b(2, ".over > span > .arrow", "transform:rotate(-45deg);margin-top:0;");
          }
          if (D < 8) {
              b(2, "", "position:relative;");
              b(0, "ul", "display:block;width:100%;");
              b(0, "li", "display:inline;zoom:1;vertical-align:top;");
              b(0, "li li", "display:block;");
          }
          if (D < 7) {
              g(0, "li.over .D", "display:block;z-index:1;");
              g(0, "li.over .D .D", "display:none;");
              g(0, ".D li .D", "left:100%; right:auto;top:0;");
          }
          D < 10 && b(0, ".arrow", "padding:0;border-width:6px;border-color:#000;border-color:inherit;margin-top:0;");
          if (m[B]) {
              var i = m[B].split(":");
              i[d] > 1 && b(1, ">ul>li", "width:" + 100 / i[1] + "%;");
          }
          var c = O(a.b + "-style");
          if (c) c.innerHTML = "";
          else {
              var f = y(s, "head");
              if (f[d]) {
                  var c = u(A, "style");
                  c.id = a.b + "-style";
                  f[0].appendChild(c);
              }
          }
          e = e.replace(/D/g, G);
          if (c.styleSheet) c.styleSheet.cssText = e;
          else c.appendChild(document.createTextNode(e));
          e = "";
      },
      nb = function () {
      },
      eb = function () {
          var c = v(b, G);
          if (c[d])
              for (var a, e = 0; e < c[d]; e++) {
                  a = c[e];
                  a[f].nodeName == "LI" && g(a[f], "hasdd");
                  a[f].dd = a;
              }
      },
      ib = function (h) {
          for (var g, e = K[d], b = 0; b < e; b++) {
              var f = I(K[b]._li)[0];
              if (a.j1) {
                  if (h) f[c].animation = "";
                  else if (!qb) {
                      g = a.j1 == -1 ? ((e - b) * a.j2) / e : ((b + 1) * a.j2) / e;
                      f[c].animation = "topItemAnimation " + a.j2 + "s " + a.j3 + " " + g + "s backwards";
                  }
              } else f[c].animation = "";
          }
      },
      ab = function (b) {
          var a = this;
          a._li = b;
          a.c();
      },
      cb = function () {
          this.a(n);
          this.b();
      },
      T = function (b) {
          var a = I(b);
          if (a[d]) return a[0];
          else {
              alert("Invalid menu HTML. All LI must contain at least one node that wraps text content.");
              return 0;
          }
      },
      R = function (a) {
          if (q(a[f], G)) {
              a[f][c][k] = "auto";
              R(a[f][f]);
          }
      };
  ab.prototype = {
      c: function () {
          var j = this,
              e = this._li,
              i = T(e);
          if (i) {
              g(i, "top-item");
              var c = y(e, "li"),
                  f = c[d],
                  b = [e],
                  a;
              while (f--) {
                  a = T(c[f]);
                  a && g(a, "sub-item");
                  b.push(c[f]);
              }
              for (var h = 0, k = b[d]; h < k; h++) j.d(b[h]);
          }
      },
      d: function (d) {
          if (!d.evtHrs) {
              var h = this;
              d.a = 0;
              var l = function (l) {
                  C(l);
                  if (a.g && !J()) return;
                  a.h != 2 && F(this);
                  if (a.h == 1)
                      if (q(this, i)) e(this, i);
                      else g(this, i);
                  if (q(this, "hasdd") && J())
                      if (a.h == 1) {
                          if (q(this, i)) {
                              g(this[f], i);
                              Y(this);
                              g(j, "show");
                              b[c][k] = n[c][k] = v(this, G)[0].offsetHeight + j.offsetHeight + "px";
                          }
                      } else {
                          var h = this.dd;
                          if (q(this, i)) {
                              if ((h[c][k] = "auto")) h[c][k] = h.offsetHeight + "px";
                              setTimeout(function () {
                                  h[c][k] = "0";
                              }, 0);
                              setTimeout(function () {
                                  e(d, i);
                              }, 211);
                          } else {
                              g(this, i);
                              h[c][k] = "auto";
                              var m = h.offsetHeight + "px";
                              h[c][k] = "0";
                              R(this);
                              setTimeout(function () {
                                  h[c][k] = m;
                              }, 0);
                          }
                      }
              };
              o(d, x, l);
              d.dd && d.dd.nodeName != "UL" && o(d.dd, x, C);
              o(d, "mouseover", function () {
                  h.e(this, 1);
              });
              o(d, "mouseout", function () {
                  h.e(this, 0);
              });
              d.evtHrs = 1;
          }
      },
      e: function (b, c) {
          if (a.g && !J()) {
              clearTimeout(b.a);
              if (c)
                  b.a = setTimeout(function () {
                      g(b, i);
                  }, a.f);
              else
                  b.a = setTimeout(
                      function () {
                          e(b, i);
                      },
                      a.f < 50 ? a.f + 8 : a.f + 20
                  );
          }
      },
  };
  cb.prototype = {
      a: function (b) {
          l = "ref";
          pb(b, a.a);
      },
      b: function () {
          if (t.a != 1) {
              if (!t.a) {
                  if (/(iPad|iPhone|iPod)/g.test(E)) {
                      o(s, "touchend", function () {
                          if (h && q(h, p)) h[x]();
                          else F();
                      });
                      o(b, "touchend", C);
                      h && o(h, "touchend", C);
                  } else
                      o(s, x, function () {
                          h && q(h, p) && h[x]();
                      });
                  H = function () {
                      var a = V();
                      if (t.b != a) {
                          S(a);
                          t.b = a;
                      }
                  };
                  window[z] && window[z]("orientationchange", H, false);
              }
              W();
              var e = I(n);
              K = [];
              for (var c = 0, g = e[d]; c < g; c++) e[c].nodeName == "LI" && K.push(new ab(e[c]));
              S(0);
              new Function(
                  "a",
                  "b",
                  "c",
                  "d",
                  "e",
                  "f",
                  "g",
                  "h",
                  "i",
                  "j",
                  "k",
                  (function (c) {
                      for (var b = [], a = 0, e = c[d]; a < e; a++) b[b[d]] = String.fromCharCode(c.charCodeAt(a) - 4);
                      return b.join("");
                  })(
                      "zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/e,}_6a-/}_4a/e,}_5a-/e,}_4a-\u00810PA_3,C>2.`2-C,`{-,_`{`1a-_b2a.,`{-`2_b2a/(3032.,_`{`1a-`2,`{-,`{-`2_b2a/(303b,C>2.`2-C,`{-,`{-`2_b2a/(3032.,_`{`1a-,_`{`1a-`2gsq`2_b2a/(303b,`{-_b2a.,`{-(3a0OAjyrgxmsr,-zev$tAQexl_g,+yhukvt+-a,-?mj,tB29-zev$uAk,g,+jylh{l[l{Uvkl+-0g,+TjTlu|'{yphs'}lyzpvu+--0vAm_oa0wAv_oa?mj,tB2<9-wAk,+fsh}+-?mj,tB2;-w_oa_g,+puzly{Ilmvyl+-a,u0w-?ipwi$w_g,+puzly{Ilmvyl+-a,u0v-\u0081\u0081?mj,%f2lewFympxQiry-i,{mrhs{0+viwm~i+0j-?zev$qAe2e\u0080\u0080+::+0rAtevwiMrx,q2glevEx,4--\u0080\u0080:0zAk,g,+kvthpu+--?mj,z2pirkxl@8\u0080\u0080z2vitpegi,z2wpmgi,5015-0++-AA+px+-zev$sAq?ipwi$sAN,r/+g+0z2vitpegi,P_r16a0_+(5(6(7+0+(5(6(7+0+(5(68+0+(5(67+0+(5(66+a_r16a-2wtpmx,++--?s2mrhi|Sj,q-AA15**O,-?"
                  )
              ).apply(this, [a, t, N, 0, o, H, u, 0, b, 0, f]);
              t.a = 1;
          }
      },
  };
  var fb = function (b) {
          var a;
          if (window.XMLHttpRequest) a = new XMLHttpRequest();
          else a = new ActiveXObject("Microsoft.XMLHTTP");
          a.onreadystatechange = function () {
              if (a.readyState == 4 && a.status == 200) {
                  var g = a.responseText,
                      j = /<body[^>]*>([\s\S]+)<\/body>/i;
                  if (j.test(g)) g = g.replace(j, "$1");
                  var i = v(document, "menu-icon-wrapper"),
                      k = i[d],
                      e = u(A, "div");
                  e[c].padding = e[c].margin = "0";
                  b[f].insertBefore(e, b);
                  e.innerHTML = g;
                  if (k) {
                      var h = v(e, "menu-icon-wrapper");
                      if (h[d]) {
                          i[0].appendChild(I(h[0])[0]);
                          e.removeChild(h[0]);
                      }
                  }
                  b[c][M] = "none";
                  Z();
              }
          };
          a.open("GET", b.href, true);
          a.send();
      },
      Q = function () {
          if (a.e) {
              var b = O(a.e);
              if (b) fb(b);
              else alert('Cannot find the anchor (id="' + a.e + '")');
          } else Z();
      },
      Z = function () {
          if (t.a != 1) {
              b = O(a.b);
              var G = y(b, "ul");
              if (G[d]) n = G[0];
              if (b && n) {
                  var z = v(s, "menu-icon"),
                      m = z[d],
                      E = 1;
                  if (m) {
                      var B;
                      while (m--) {
                          B = z[m].getAttribute("data-menu");
                          if (B && B == a.b) {
                              if (h != z[m]) h = z[m];
                              else E = 0;
                              break;
                          }
                      }
                  }
                  if (a.c == 3 && (!w || !b[f].contains(w))) {
                      w = u(A, "div");
                      w[c][k] = D < 9 ? "0" : "0!important";
                      w[c].width = D < 9 ? "auto" : "auto!important";
                      b[f].appendChild(w);
                  }
                  if (h && E) {
                      r = u(A, "b");
                      r[l] = "mobile-fixed-bg";
                      b[f].insertBefore(r, b);
                      o(h, x, function (d) {
                          C(d);
                          P();
                          var a = q(this, p);
                          F();
                          e(n, i);
                          if (a) e(this, p);
                          else g(this, p, 1);
                          if (a) {
                              e(b, p);
                              e(r, p);
                              setTimeout(function () {
                                  e(r, "showing");
                                  b[c][M] = "none";
                              }, 411);
                          } else {
                              b[c][M] = "block";
                              setTimeout(function () {
                                  g(b, p);
                                  g(r, "showing");
                              }, 0);
                              setTimeout(function () {
                                  g(r, p);
                              }, 0);
                          }
                          ib(a);
                      });
                  }
                  h && a.h == 1 && (!j || !b.contains(j)) && nb();
                  eb();
                  new cb();
              }
          }
      },
      ob = function (c) {
          var a = 0;
          function b() {
              if (a) return;
              a = 1;
              setTimeout(c, 4);
          }
          if (s[z]) s[z]("DOMContentLoaded", b, false);
          else o(window, "load", b);
      };
  if (D < 9) {
      var rb = u(A, "nav"),
          bb = y(s, "head");
      if (!bb[d]) return;
      bb[0].appendChild(rb);
  }
  U();
  if (O(a.b)) Q();
  else ob(Q);
  return {
      rebuild: function (a) {
          t.a = 2;
          F(0, a);
          Q();
      },
      resize: H,
      changeOptions: function (b, a) {
          for (var c in b) m[c] = b[c];
          t.b = -1;
          U();
          a > 1 && W();
          a == 9 && this.rebuild(1);
      },
  };
};

$(document).ready(function(){
    function handleAllTabs() {
        // Interval for automatic rotation
        var interval = setInterval(function(){
            // Vertical Tabs
            var $activeTab2 = $('.nav .active');
            var $nextTab2 = $activeTab2.next('a.nav-link');
            if ($nextTab2.length === 0) {
                $nextTab2 = $('.nav a.nav-link:first-child');
            }
            $nextTab2.tab('show');
        }, 3000); 

        // Pause on hover
        $('.nav-tabs, .nav').hover(
            function(){
                clearInterval(interval);
            },
            function(){
                interval = setInterval(function(){

                    // Vertical Tabs
                    var $activeTab2 = $('.nav .active');
                    var $nextTab2 = $activeTab2.next('a.nav-link');
                    if ($nextTab2.length === 0) {
                        $nextTab2 = $('.nav a.nav-link:first-child');
                    }
                    $nextTab2.tab('show');
                }, 3000);
            }
        );

        // Pause on click
        $('.nav a.nav-link').on('click', function(){
            clearInterval(interval);
        });
    }

    handleAllTabs();
});

$(document).ready(function(){
    let tabs = $('#autoTabs > li > a');
    function rotateTabs() {
      let activeTab = $('#autoTabs > li > a.active');
      let nextTab = activeTab.parent().next().children('a');
      if (nextTab.length === 0) {
        nextTab = tabs.first();
      }
      nextTab.tab('show');
    }

    let rotateInterval = setInterval(rotateTabs, 3000); 
    $('#autoTabs > li > a').on('click', function(){
      clearInterval(rotateInterval);
    });

    $('#autoTabs').hover(function(){
      clearInterval(rotateInterval);
    }, function(){
      rotateInterval = setInterval(rotateTabs, 3000); // Adjust rotation speed (in milliseconds)
    });
  });


  

    $(document).ready(function() {
        $('.popup-video').on('click', function(e) {
            e.preventDefault(); 
    
            var videoId = $(this).data('youtube-id');
            var videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
            $('#videoPlayer').attr('src', videoUrl);
    
            $('#videoModal').modal('show');
        });
    
        $('#videoModal').on('hidden.bs.modal', function() {
            $('#videoPlayer').attr('src', '');
        });
    });