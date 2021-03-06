/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
function MaterialAnimation(s) {
    "use strict";
    this.element_ = s, this.position_ = this.Constant_.STARTING_POSITION, this.moveable_ = this.element_.querySelector("." + this.CssClasses_.DEMO_JS_MOVABLE_AREA), this.init()
}

function MaterialButton(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialCheckbox(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialColumnLayout(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialIconToggle(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialItem(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialRadio(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialSlider(s) {
    "use strict";
    this.element_ = s, this.isIE_ = window.navigator.msPointerEnabled, this.init()
}

function MaterialSpinner(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialSwitch(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialTabs(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialTab(s, t) {
    "use strict";
    if (s) {
        if (t.element_.classList.contains(t.CssClasses_.RIPPLE_EFFECT)) {
            var e = document.createElement("span");
            e.classList.add(t.CssClasses_.RIPPLE_CONTAINER), e.classList.add(t.CssClasses_.RIPPLE_EFFECT);
            var i = document.createElement("span");
            i.classList.add(t.CssClasses_.RIPPLE), e.appendChild(i), s.appendChild(e)
        }
        s.addEventListener("click", function(e) {
            e.preventDefault();
            var i = s.href.split("#")[1],
                a = document.querySelector("#" + i);
            t.resetTabState_(), t.resetPanelState_(), s.classList.add(t.CssClasses_.IS_ACTIVE), a.classList.add(t.CssClasses_.IS_ACTIVE)
        })
    }
}

function MaterialTextfield(s) {
    "use strict";
    this.element_ = s, this.maxRows = this.Constant_.NO_MAX_ROWS, this.init()
}

function MaterialTooltip(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialLayout(s) {
    "use strict";
    this.element_ = s, this.init()
}

function MaterialLayoutTab(s, t, e, i) {
    "use strict";
    if (s) {
        if (i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)) {
            var a = document.createElement("span");
            a.classList.add(i.CssClasses_.RIPPLE_CONTAINER), a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);
            var n = document.createElement("span");
            n.classList.add(i.CssClasses_.RIPPLE), a.appendChild(n), s.appendChild(a)
        }
        s.addEventListener("click", function(a) {
            a.preventDefault();
            var n = s.href.split("#")[1],
                l = i.content_.querySelector("#" + n);
            i.resetTabState_(t), i.resetPanelState_(e), s.classList.add(i.CssClasses_.ACTIVE_CLASS), l.classList.add(i.CssClasses_.ACTIVE_CLASS)
        })
    }
}

function MaterialRipple(s) {
    "use strict";
    this.element_ = s, this.init()
}! function() {
    "use strict";
    "serviceWorker" in navigator && ("https:" === window.location.protocol || "localhost" === window.location.hostname || 0 === window.location.hostname.indexOf("127.")) && navigator.serviceWorker.register("/service-worker.js", {
        scope: "./"
    }).then(function(s) {
        "function" == typeof s.update && s.update(), s.onupdatefound = function() {
            if (navigator.serviceWorker.controller) {
                var t = s.installing;
                t.onstatechange = function() {
                    switch (t.state) {
                        case "installed":
                            break;
                        case "redundant":
                            throw "The installing service worker became redundant."
                    }
                }
            }
        }
    })["catch"](function(s) {
        console.error("Error during service worker registration:", s)
    })
}();
var componentHandler = function() {
    "use strict";

    function s(s, t) {
        for (var e = 0; e < l.length; e++)
            if (l[e].className === s) return void 0 !== t && (l[e] = t), l[e];
        return !1
    }

    function t(t, i) {
        if (void 0 === i) {
            var a = s(t);
            a && (i = a.cssClass)
        }
        for (var n = document.querySelectorAll("." + i), l = 0; l < n.length; l++) e(n[l], t)
    }

    function e(t, e) {
        var i = t.getAttribute("data-upgraded");
        if (null === i || -1 === i.indexOf(e)) {
            null === i && (i = ""), t.setAttribute("data-upgraded", i + "," + e);
            var a = s(e);
            a ? (r.push(new a.classConstructor(t)), a.callbacks.forEach(function(s) {
                s(t)
            })) : r.push(new window[e](t))
        }
    }

    function i(t) {
        var e = {
                classConstructor: t.constructor,
                className: t.classAsString,
                cssClass: t.cssClass,
                callbacks: []
            },
            i = s(t.classAsString, e);
        i || l.push(e)
    }

    function a(t, e) {
        var i = s(t);
        i && i.callbacks.push(e)
    }

    function n() {
        for (var s = 0; s < l.length; s++) t(l[s].className)
    }
    var l = [],
        r = [];
    return {
        upgradeDom: t,
        upgradeElement: e,
        upgradeAllRegistered: n,
        registerUpgradedCallback: a,
        register: i
    }
}();
window.addEventListener("load", function() {
    "use strict";
    "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach ? (document.documentElement.classList.add("wsk-js"), componentHandler.upgradeAllRegistered()) : componentHandler.upgradeElement = componentHandler.register = function() {}
}), window.requestAnimFrame = function() {
    "use strict";
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(s) {
        window.setTimeout(s, 1e3 / 60)
    }
}(), MaterialAnimation.prototype.Constant_ = {
    STARTING_POSITION: 1
}, MaterialAnimation.prototype.CssClasses_ = {
    DEMO_JS_MOVABLE_AREA: "demo-js-movable-area",
    DEMO_POSITION_PREFIX: "demo-position-"
}, MaterialAnimation.prototype.handleClick_ = function() {
    "use strict";
    this.moveable_.classList.remove(this.CssClasses_.DEMO_POSITION_PREFIX + this.position_), this.position_++, this.position_ > 6 && (this.position_ = 1), this.moveable_.classList.add(this.CssClasses_.DEMO_POSITION_PREFIX + this.position_)
}, MaterialAnimation.prototype.init = function() {
    "use strict";
    if (this.element_) {
        if (!this.moveable_) return void console.error("Was expecting to find an element with class name .demo-js-movable-area in side of: ", this.element_);
        this.element_.addEventListener("click", this.handleClick_.bind(this))
    }
}, componentHandler.register({
    constructor: MaterialAnimation,
    classAsString: "MaterialAnimation",
    cssClass: "demo-js-clickable-area"
}), MaterialButton.prototype.Constant_ = {}, MaterialButton.prototype.CssClasses_ = {
    WSK_JS_RIPPLE_EFFECT: "wsk-js-ripple-effect",
    WSK_BUTTON_RIPPLE_CONTAINER: "wsk-button__ripple-container",
    WSK_RIPPLE: "wsk-ripple"
}, MaterialButton.prototype.blurHandlerGenerator_ = function(s) {
    "use strict";
    return function() {
        s.blur()
    }
}, MaterialButton.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var s = this.blurHandlerGenerator_(this.element_);
        if (this.element_.classList.contains(this.CssClasses_.WSK_JS_RIPPLE_EFFECT)) {
            var t = document.createElement("span");
            t.classList.add(this.CssClasses_.WSK_BUTTON_RIPPLE_CONTAINER);
            var e = document.createElement("span");
            e.classList.add(this.CssClasses_.WSK_RIPPLE), t.appendChild(e), e.addEventListener("mouseup", s), this.element_.appendChild(t)
        }
        this.element_.addEventListener("mouseup", s)
    }
}, componentHandler.register({
    constructor: MaterialButton,
    classAsString: "MaterialButton",
    cssClass: "wsk-js-button"
}), MaterialCheckbox.prototype.Constant_ = {
    TINY_TIMEOUT: .001
}, MaterialCheckbox.prototype.CssClasses_ = {
    INPUT: "wsk-checkbox__input",
    BOX_OUTLINE: "wsk-checkbox__box-outline",
    FOCUS_HELPER: "wsk-checkbox__focus-helper",
    TICK_OUTLINE: "wsk-checkbox__tick-outline",
    RIPPLE_EFFECT: "wsk-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "wsk-js-ripple-effect--ignore-events",
    RIPPLE_CONTAINER: "wsk-checkbox__ripple-container",
    RIPPLE_CENTER: "wsk-ripple--center",
    RIPPLE: "wsk-ripple",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_CHECKED: "is-checked",
    IS_UPGRADED: "is-upgraded"
}, MaterialCheckbox.prototype.onChange_ = function() {
    "use strict";
    this.updateClasses_(this.btnElement_, this.element_)
}, MaterialCheckbox.prototype.onFocus_ = function() {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialCheckbox.prototype.onBlur_ = function() {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialCheckbox.prototype.onMouseUp_ = function() {
    "use strict";
    this.blur_()
}, MaterialCheckbox.prototype.updateClasses_ = function(s, t) {
    "use strict";
    s.disabled ? t.classList.add(this.CssClasses_.IS_DISABLED) : t.classList.remove(this.CssClasses_.IS_DISABLED), s.checked ? t.classList.add(this.CssClasses_.IS_CHECKED) : t.classList.remove(this.CssClasses_.IS_CHECKED)
}, MaterialCheckbox.prototype.blur_ = function() {
    "use strict";
    window.setTimeout(function() {
        this.btnElement_.blur()
    }.bind(this), this.Constant_.TINY_TIMEOUT)
}, MaterialCheckbox.prototype.init = function() {
    "use strict";
    if (this.element_) {
        this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
        var s = document.createElement("span");
        s.classList.add(this.CssClasses_.BOX_OUTLINE);
        var t = document.createElement("span");
        t.classList.add(this.CssClasses_.FOCUS_HELPER);
        var e = document.createElement("span");
        e.classList.add(this.CssClasses_.TICK_OUTLINE), s.appendChild(e), this.element_.appendChild(t), this.element_.appendChild(s);
        var i;
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), i = document.createElement("span"), i.classList.add(this.CssClasses_.RIPPLE_CONTAINER), i.classList.add(this.CssClasses_.RIPPLE_EFFECT), i.classList.add(this.CssClasses_.RIPPLE_CENTER);
            var a = document.createElement("span");
            a.classList.add(this.CssClasses_.RIPPLE), i.appendChild(a), this.element_.appendChild(i), i.addEventListener("mouseup", this.onMouseUp_.bind(this))
        }
        this.btnElement_.addEventListener("change", this.onChange_.bind(this)), this.btnElement_.addEventListener("focus", this.onFocus_.bind(this)), this.btnElement_.addEventListener("blur", this.onBlur_.bind(this)), this.element_.addEventListener("mouseup", this.onMouseUp_.bind(this)), this.updateClasses_(this.btnElement_, this.element_), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, componentHandler.register({
    constructor: MaterialCheckbox,
    classAsString: "MaterialCheckbox",
    cssClass: "wsk-js-checkbox"
}), MaterialColumnLayout.prototype.Constant_ = {
    INVISIBLE_WRAPPING_ELEMENT_COUNT: 3
}, MaterialColumnLayout.prototype.CssClasses_ = {
    INVISIBLE_WRAPPING_ELEMENT: "wsk-column-layout__wrap-hack"
}, MaterialColumnLayout.prototype.init = function() {
    "use strict";
    if (this.element_)
        for (var s = 0; s < this.Constant_.INVISIBLE_WRAPPING_ELEMENT_COUNT; s++) {
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.INVISIBLE_WRAPPING_ELEMENT), this.element_.appendChild(t)
        }
}, componentHandler.register({
    constructor: MaterialColumnLayout,
    classAsString: "MaterialColumnLayout",
    cssClass: "wsk-column-layout"
}), MaterialIconToggle.prototype.Constant_ = {
    TINY_TIMEOUT: .001
}, MaterialIconToggle.prototype.CssClasses_ = {
    INPUT: "wsk-icon-toggle__input",
    JS_RIPPLE_EFFECT: "wsk-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "wsk-js-ripple-effect--ignore-events",
    RIPPLE_CONTAINER: "wsk-icon-toggle__ripple-container",
    RIPPLE_CENTER: "wsk-ripple--center",
    RIPPLE: "wsk-ripple",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_CHECKED: "is-checked",
    IS_UPGRADED: "is-upgraded"
}, MaterialIconToggle.prototype.onChange_ = function() {
    "use strict";
    this.updateClasses_(this.btnElement_, this.element_)
}, MaterialIconToggle.prototype.onFocus_ = function() {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialIconToggle.prototype.onBlur_ = function() {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialIconToggle.prototype.onMouseUp_ = function() {
    "use strict";
    this.blur_()
}, MaterialIconToggle.prototype.updateClasses_ = function(s, t) {
    "use strict";
    s.disabled ? t.classList.add(this.CssClasses_.IS_DISABLED) : t.classList.remove(this.CssClasses_.IS_DISABLED), s.checked ? t.classList.add(this.CssClasses_.IS_CHECKED) : t.classList.remove(this.CssClasses_.IS_CHECKED)
}, MaterialIconToggle.prototype.blur_ = function() {
    "use strict";
    window.setTimeout(function() {
        this.btnElement_.blur()
    }.bind(this), this.Constant_.TINY_TIMEOUT)
}, MaterialIconToggle.prototype.init = function() {
    "use strict";
    if (this.element_) {
        this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
        var s;
        if (this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), s = document.createElement("span"), s.classList.add(this.CssClasses_.RIPPLE_CONTAINER), s.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT), s.classList.add(this.CssClasses_.RIPPLE_CENTER);
            var t = document.createElement("span");
            t.classList.add(this.CssClasses_.RIPPLE), s.appendChild(t), this.element_.appendChild(s), s.addEventListener("mouseup", this.onMouseUp_.bind(this))
        }
        this.btnElement_.addEventListener("change", this.onChange_.bind(this)), this.btnElement_.addEventListener("focus", this.onFocus_.bind(this)), this.btnElement_.addEventListener("blur", this.onBlur_.bind(this)), this.element_.addEventListener("mouseup", this.onMouseUp_.bind(this)), this.updateClasses_(this.btnElement_, this.element_), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, componentHandler.register({
    constructor: MaterialIconToggle,
    classAsString: "MaterialIconToggle",
    cssClass: "wsk-js-icon-toggle"
}), MaterialItem.prototype.Constant_ = {}, MaterialItem.prototype.CssClasses_ = {
    WSK_ITEM_RIPPLE_CONTAINER: "wsk-item--ripple-container",
    WSK_RIPPLE: "wsk-ripple"
}, MaterialItem.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var s = document.createElement("span");
        s.classList.add(this.CssClasses_.WSK_ITEM_RIPPLE_CONTAINER);
        var t = document.createElement("span");
        t.classList.add(this.CssClasses_.WSK_RIPPLE), s.appendChild(t), this.element_.appendChild(s)
    }
}, componentHandler.register({
    constructor: MaterialItem,
    classAsString: "MaterialItem",
    cssClass: "wsk-js-ripple-effect"
}), MaterialRadio.prototype.Constant_ = {
    TINY_TIMEOUT: .001
}, MaterialRadio.prototype.CssClasses_ = {
    JS_RADIO: "wsk-js-radio",
    RADIO_BTN: "wsk-radio__button",
    RADIO_OUTER_CIRCLE: "wsk-radio__outer-circle",
    RADIO_INNER_CIRCLE: "wsk-radio__inner-circle",
    RIPPLE_EFFECT: "wsk-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "wsk-js-ripple-effect--ignore-events",
    RIPPLE_CONTAINER: "wsk-radio__ripple-container",
    RIPPLE_CENTER: "wsk-ripple--center",
    RIPPLE: "wsk-ripple",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_CHECKED: "is-checked",
    IS_UPGRADED: "is-upgraded"
}, MaterialRadio.prototype.onChange_ = function() {
    "use strict";
    this.updateClasses_(this.btnElement_, this.element_);
    for (var s = document.getElementsByClassName(this.CssClasses_.JS_RADIO), t = 0; t < s.length; t++) {
        var e = s[t].querySelector("." + this.CssClasses_.RADIO_BTN);
        e.getAttribute("name") === this.btnElement_.getAttribute("name") && this.updateClasses_(e, s[t])
    }
}, MaterialRadio.prototype.onFocus_ = function() {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialRadio.prototype.onBlur_ = function() {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialRadio.prototype.onMouseup_ = function() {
    "use strict";
    this.blur_()
}, MaterialRadio.prototype.updateClasses_ = function(s, t) {
    "use strict";
    s.disabled ? t.classList.add(this.CssClasses_.IS_DISABLED) : t.classList.remove(this.CssClasses_.IS_DISABLED), s.checked ? t.classList.add(this.CssClasses_.IS_CHECKED) : t.classList.remove(this.CssClasses_.IS_CHECKED)
}, MaterialRadio.prototype.blur_ = function() {
    "use strict";
    window.setTimeout(function() {
        this.btnElement_.blur()
    }.bind(this), this.Constant_.TINY_TIMEOUT)
}, MaterialRadio.prototype.init = function() {
    "use strict";
    if (this.element_) {
        this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.RADIO_BTN);
        var s = document.createElement("span");
        s.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
        var t = document.createElement("span");
        t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE), this.element_.appendChild(s), this.element_.appendChild(t);
        var e;
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), e = document.createElement("span"), e.classList.add(this.CssClasses_.RIPPLE_CONTAINER), e.classList.add(this.CssClasses_.RIPPLE_EFFECT), e.classList.add(this.CssClasses_.RIPPLE_CENTER);
            var i = document.createElement("span");
            i.classList.add(this.CssClasses_.RIPPLE), e.appendChild(i), this.element_.appendChild(e), e.addEventListener("mouseup", this.onMouseup_.bind(this))
        }
        this.btnElement_.addEventListener("change", this.onChange_.bind(this)), this.btnElement_.addEventListener("focus", this.onFocus_.bind(this)), this.btnElement_.addEventListener("blur", this.onBlur_.bind(this)), this.element_.addEventListener("mouseup", this.onMouseup_.bind(this)), this.updateClasses_(this.btnElement_, this.element_), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, componentHandler.register({
    constructor: MaterialRadio,
    classAsString: "MaterialRadio",
    cssClass: "wsk-js-radio"
}), MaterialSlider.prototype.Constant_ = {}, MaterialSlider.prototype.CssClasses_ = {
    IE_CONTAINER: "wsk-slider__ie-container",
    SLIDER_CONTAINER: "wsk-slider__container",
    BACKGROUND_FLEX: "wsk-slider__background-flex",
    BACKGROUND_LOWER: "wsk-slider__background-lower",
    BACKGROUND_UPPER: "wsk-slider__background-upper",
    IS_LOWEST_VALUE: "is-lowest-value",
    IS_UPGRADED: "is-upgraded"
}, MaterialSlider.prototype.onInput_ = function() {
    "use strict";
    this.updateValue_()
}, MaterialSlider.prototype.onChange_ = function() {
    "use strict";
    this.updateValue_()
}, MaterialSlider.prototype.onMouseUp_ = function(s) {
    "use strict";
    s.target.blur()
}, MaterialSlider.prototype.updateValue_ = function() {
    "use strict";
    var s = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
    0 === s ? this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE) : this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE), this.isIE_ || (this.backgroundLower_.style.flex = s, this.backgroundLower_.style.webkitFlex = s, this.backgroundUpper_.style.flex = 1 - s, this.backgroundUpper_.style.webkitFlex = 1 - s)
}, MaterialSlider.prototype.init = function() {
    "use strict";
    if (this.element_) {
        if (this.isIE_) {
            var s = document.createElement("div");
            s.classList.add(this.CssClasses_.IE_CONTAINER), this.element_.parentElement.insertBefore(s, this.element_), this.element_.parentElement.removeChild(this.element_), s.appendChild(this.element_)
        } else {
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.SLIDER_CONTAINER), this.element_.parentElement.insertBefore(t, this.element_), this.element_.parentElement.removeChild(this.element_), t.appendChild(this.element_);
            var e = document.createElement("div");
            e.classList.add(this.CssClasses_.BACKGROUND_FLEX), t.appendChild(e), this.backgroundLower_ = document.createElement("div"), this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER), e.appendChild(this.backgroundLower_), this.backgroundUpper_ = document.createElement("div"), this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER), e.appendChild(this.backgroundUpper_)
        }
        this.element_.addEventListener("input", this.onInput_.bind(this)), this.element_.addEventListener("change", this.onChange_.bind(this)), this.element_.addEventListener("mouseup", this.onMouseUp_.bind(this)), this.updateValue_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, componentHandler.register({
    constructor: MaterialSlider,
    classAsString: "MaterialSlider",
    cssClass: "wsk-js-slider"
}), MaterialSpinner.prototype.Constant_ = {
    WSK_SPINNER_LAYER_COUNT: 4
}, MaterialSpinner.prototype.CssClasses_ = {
    WSK_SPINNER_LAYER: "wsk-spinner__layer",
    WSK_SPINNER_CIRCLE_CLIPPER: "wsk-spinner__circle-clipper",
    WSK_SPINNER_CIRCLE: "wsk-spinner__circle",
    WSK_SPINNER_GAP_PATCH: "wsk-spinner__gap-patch",
    WSK_SPINNER_LEFT: "wsk-spinner__left",
    WSK_SPINNER_RIGHT: "wsk-spinner__right"
}, MaterialSpinner.prototype.createLayer = function(s) {
    "use strict";
    var t = document.createElement("div");
    t.classList.add(this.CssClasses_.WSK_SPINNER_LAYER), t.classList.add(this.CssClasses_.WSK_SPINNER_LAYER + "-" + s);
    var e = document.createElement("div");
    e.classList.add(this.CssClasses_.WSK_SPINNER_CIRCLE_CLIPPER), e.classList.add(this.CssClasses_.WSK_SPINNER_LEFT);
    var i = document.createElement("div");
    i.classList.add(this.CssClasses_.WSK_SPINNER_GAP_PATCH);
    var a = document.createElement("div");
    a.classList.add(this.CssClasses_.WSK_SPINNER_CIRCLE_CLIPPER), a.classList.add(this.CssClasses_.WSK_SPINNER_RIGHT);
    for (var n = [e, i, a], l = 0; l < n.length; l++) {
        var r = document.createElement("div");
        r.classList.add(this.CssClasses_.WSK_SPINNER_CIRCLE), n[l].appendChild(r)
    }
    t.appendChild(e), t.appendChild(i), t.appendChild(a), this.element_.appendChild(t)
}, MaterialSpinner.prototype.stop = function() {
    "use strict";
    this.element_.classlist.remove("is-active")
}, MaterialSpinner.prototype.start = function() {
    "use strict";
    this.element_.classlist.add("is-active")
}, MaterialSpinner.prototype.init = function() {
    "use strict";
    if (this.element_) {
        for (var s = 1; s <= this.Constant_.WSK_SPINNER_LAYER_COUNT; s++) this.createLayer(s);
        this.element_.classList.add("is-upgraded")
    }
}, componentHandler.register({
    constructor: MaterialSpinner,
    classAsString: "MaterialSpinner",
    cssClass: "wsk-js-spinner"
}), MaterialSwitch.prototype.Constant_ = {
    TINY_TIMEOUT: .001
}, MaterialSwitch.prototype.CssClasses_ = {
    INPUT: "wsk-switch__input",
    TRACK: "wsk-switch__track",
    THUMB: "wsk-switch__thumb",
    FOCUS_HELPER: "wsk-switch__focus-helper",
    RIPPLE_EFFECT: "wsk-js-ripple-effect",
    RIPPLE_IGNORE_EVENTS: "wsk-js-ripple-effect--ignore-events",
    RIPPLE_CONTAINER: "wsk-switch__ripple-container",
    RIPPLE_CENTER: "wsk-ripple--center",
    RIPPLE: "wsk-ripple",
    IS_FOCUSED: "is-focused",
    IS_DISABLED: "is-disabled",
    IS_CHECKED: "is-checked",
    IS_UPGRADED: "is-upgraded"
}, MaterialSwitch.prototype.onChange_ = function() {
    "use strict";
    this.updateClasses_(this.btnElement_, this.element_)
}, MaterialSwitch.prototype.onFocus_ = function() {
    "use strict";
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
}, MaterialSwitch.prototype.onBlur_ = function() {
    "use strict";
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
}, MaterialSwitch.prototype.onMouseUp_ = function() {
    "use strict";
    this.blur_()
}, MaterialSwitch.prototype.updateClasses_ = function(s, t) {
    "use strict";
    s.disabled ? t.classList.add(this.CssClasses_.IS_DISABLED) : t.classList.remove(this.CssClasses_.IS_DISABLED), s.checked ? t.classList.add(this.CssClasses_.IS_CHECKED) : t.classList.remove(this.CssClasses_.IS_CHECKED)
}, MaterialSwitch.prototype.blur_ = function() {
    "use strict";
    window.setTimeout(function() {
        this.btnElement_.blur()
    }.bind(this), this.Constant_.TINY_TIMEOUT)
}, MaterialSwitch.prototype.init = function() {
    "use strict";
    if (this.element_) {
        this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
        var s = document.createElement("div");
        s.classList.add(this.CssClasses_.TRACK);
        var t = document.createElement("div");
        t.classList.add(this.CssClasses_.THUMB);
        var e = document.createElement("span");
        e.classList.add(this.CssClasses_.FOCUS_HELPER), t.appendChild(e), this.element_.appendChild(s), this.element_.appendChild(t);
        var i;
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), i = document.createElement("span"), i.classList.add(this.CssClasses_.RIPPLE_CONTAINER), i.classList.add(this.CssClasses_.RIPPLE_EFFECT), i.classList.add(this.CssClasses_.RIPPLE_CENTER);
            var a = document.createElement("span");
            a.classList.add(this.CssClasses_.RIPPLE), i.appendChild(a), this.element_.appendChild(i), i.addEventListener("mouseup", this.onMouseUp_.bind(this))
        }
        this.btnElement_.addEventListener("change", this.onChange_.bind(this)), this.btnElement_.addEventListener("focus", this.onFocus_.bind(this)), this.btnElement_.addEventListener("blur", this.onBlur_.bind(this)), this.element_.addEventListener("mouseup", this.onMouseUp_.bind(this)), this.updateClasses_(this.btnElement_, this.element_), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
    }
}, componentHandler.register({
    constructor: MaterialSwitch,
    classAsString: "MaterialSwitch",
    cssClass: "wsk-js-switch"
}), MaterialTabs.prototype.Constant_ = {}, MaterialTabs.prototype.CssClasses_ = {
    TAB: "wsk-tabs__tab",
    PANEL: "wsk-tabs__panel",
    RIPPLE_EFFECT: "wsk-js-ripple-effect",
    RIPPLE_CONTAINER: "wsk-tabs__ripple-container",
    RIPPLE: "wsk-ripple",
    RIPPLE_IGNORE_EVENTS: "wsk-js-ripple-effect--ignore-events",
    IS_ACTIVE: "is-active",
    IS_UPGRADED: "is-upgraded"
}, MaterialTabs.prototype.initTabs_ = function() {
    "use strict";
    this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT) && this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.tabs_ = this.element_.querySelectorAll("." + this.CssClasses_.TAB), this.panels_ = this.element_.querySelectorAll("." + this.CssClasses_.PANEL);
    for (var s = 0; s < this.tabs_.length; s++) new MaterialTab(this.tabs_[s], this);
    this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
}, MaterialTabs.prototype.resetTabState_ = function() {
    "use strict";
    for (var s = 0; s < this.tabs_.length; s++) this.tabs_[s].classList.remove(this.CssClasses_.IS_ACTIVE)
}, MaterialTabs.prototype.resetPanelState_ = function() {
    "use strict";
    for (var s = 0; s < this.panels_.length; s++) this.panels_[s].classList.remove(this.CssClasses_.IS_ACTIVE)
}, MaterialTabs.prototype.init = function() {
    "use strict";
    this.element_ && this.initTabs_()
}, componentHandler.register({
    constructor: MaterialTabs,
    classAsString: "MaterialTabs",
    cssClass: "wsk-js-tabs"
}), MaterialTextfield.prototype.Constant_ = {
    NO_MAX_ROWS: -1,
    MAX_ROWS_ATTRIBUTE: "maxrows"
}, MaterialTextfield.prototype.CssClasses_ = {
    WSK_TEXT_EXP_ICO_RIP_CONTAINER: "wsk-textfield-expandable-icon__ripple__container",
    WSK_JS_RIPPLE_EFFECT: "wsk-js-ripple-effect",
    WSK_RIPPLE_CENTER: "wsk-ripple--center",
    WSK_RIPPLE: "wsk-ripple",
    IS_DIRTY: "is-dirty"
}, MaterialTextfield.prototype.expandableIcon_ = function(s) {
    "use strict";
    if (!s.getAttribute("data-upgraded")) {
        var t = document.createElement("span");
        t.classList.add(this.CssClasses_.WSK_TEXT_EXP_ICO_RIP_CONTAINER), t.classList.add(this.CssClasses_.WSK_JS_RIPPLE_EFFECT), t.classList.add(this.CssClasses_.WSK_RIPPLE_CENTER);
        var e = document.createElement("span");
        e.classList.add(this.CssClasses_.WSK_RIPPLE), t.appendChild(e), s.appendChild(t), s.setAttribute("data-upgraded", "")
    }
}, MaterialTextfield.prototype.onInputChange_ = function(s) {
    "use strict";
    s.target.value && s.target.value.length > 0 ? s.target.classList.add(this.CssClasses_.IS_DIRTY) : s.target.classList.remove(this.CssClasses_.IS_DIRTY)
}, MaterialTextfield.prototype.onKeyDown_ = function(s) {
    "use strict";
    var t = s.target.value.split("\n").length;
    13 === s.keyCode && t >= this.maxRows && s.preventDefault()
}, MaterialTextfield.prototype.init = function() {
    "use strict";
    if (this.element_) {
        for (var s = document.querySelectorAll(".wsk-textfield-expandable-icon"), t = 0; t < s.length; ++t) this.expandableIcon_(s[t]);
        this.element_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE) && (this.maxRows = parseInt(this.element_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10), isNaN(this.maxRows) && (console.log("maxrows attribute provided, but wasn't a number: " + this.maxRows), this.maxRows = this.Constant_.NO_MAX_ROWS)), this.element_.addEventListener("input", this.onInputChange_.bind(this)), this.maxRows !== this.Constant_.NO_MAX_ROWS && this.element_.addEventListener("keydown", this.onKeyDown_.bind(this))
    }
}, componentHandler.register({
    constructor: MaterialTextfield,
    classAsString: "MaterialTextfield",
    cssClass: "wsk-js-textfield"
}), MaterialTooltip.prototype.Constant_ = {}, MaterialTooltip.prototype.CssClasses_ = {
    IS_ACTIVE: "is-active"
}, MaterialTooltip.prototype.handleMouseEnter_ = function(s) {
    "use strict";
    s.stopPropagation();
    var t = s.target.getBoundingClientRect();
    this.element_.style.left = t.left + t.width / 2 + "px", this.element_.style.marginLeft = -1 * (this.element_.offsetWidth / 2) + "px", this.element_.style.top = t.top + t.height + 10 + "px", this.element_.classList.add(this.CssClasses_.IS_ACTIVE)
}, MaterialTooltip.prototype.handleMouseLeave_ = function(s) {
    "use strict";
    s.stopPropagation(), this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)
}, MaterialTooltip.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var s = this.element_.getAttribute("for"),
            t = document.getElementById(s);
        t.addEventListener("mouseenter", this.handleMouseEnter_.bind(this), !1), t.addEventListener("mouseleave", this.handleMouseLeave_.bind(this))
    }
}, componentHandler.register({
    constructor: MaterialTooltip,
    classAsString: "MaterialTooltip",
    cssClass: "wsk-tooltip"
}), MaterialLayout.prototype.Constant_ = {
    MAX_WIDTH: "(max-width: 850px)"
}, MaterialLayout.prototype.Mode_ = {
    STANDARD: 0,
    SEAMED: 1,
    WATERFALL: 2,
    SCROLL: 3
}, MaterialLayout.prototype.CssClasses_ = {
    HEADER: "wsk-layout__header",
    DRAWER: "wsk-layout__drawer",
    CONTENT: "wsk-layout__content",
    DRAWER_BTN: "wsk-layout__drawer-button",
    JS_RIPPLE_EFFECT: "wsk-js-ripple-effect",
    RIPPLE_CONTAINER: "wsk-layout__tab-ripple-container",
    RIPPLE: "wsk-ripple",
    RIPPLE_IGNORE_EVENTS: "wsk-js-ripple-effect--ignore-events",
    HEADER_SEAMED: "wsk-layout__header--seamed",
    HEADER_WATERFALL: "wsk-layout__header--waterfall",
    HEADER_SCROLL: "wsk-layout__header--scroll",
    FIXED_HEADER: "wsk-layout--fixed-header",
    OBFUSCATOR: "wsk-layout__obfuscator",
    TAB_BAR: "wsk-layout__tab-bar",
    TAB_CONTAINER: "wsk-layout__tab-bar-container",
    TAB: "wsk-layout__tab",
    TAB_BAR_BUTTON: "wsk-layout__tab-bar-button",
    TAB_BAR_LEFT_BUTTON: "wsk-layout__tab-bar-left-button",
    TAB_BAR_RIGHT_BUTTON: "wsk-layout__tab-bar-right-button",
    PANEL: "wsk-layout__tab-panel",
    SHADOW_CLASS: "is-casting-shadow",
    COMPACT_CLASS: "is-compact",
    SMALL_SCREEN_CLASS: "is-small-screen",
    DRAWER_OPEN_CLASS: "is-visible",
    ACTIVE_CLASS: "is-active",
    UPGRADED_CLASS: "is-upgraded"
}, MaterialLayout.prototype.contentScrollHandler_ = function() {
    "use strict";
    this.content_.scrollTop > 0 ? (this.header_.classList.add(this.CssClasses_.SHADOW_CLASS), this.header_.classList.add(this.CssClasses_.COMPACT_CLASS)) : (this.header_.classList.remove(this.CssClasses_.SHADOW_CLASS), this.header_.classList.remove(this.CssClasses_.COMPACT_CLASS))
}, MaterialLayout.prototype.screenSizeHandler_ = function() {
    "use strict";
    this.screenSizeMediaQuery_.matches ? this.element_.classList.add(this.CssClasses_.SMALL_SCREEN_CLASS) : (this.element_.classList.remove(this.CssClasses_.SMALL_SCREEN_CLASS), this.drawer_ && this.drawer_.classList.remove(this.CssClasses_.DRAWER_OPEN_CLASS))
}, MaterialLayout.prototype.drawerToggleHandler_ = function() {
    "use strict";
    this.drawer_.classList.toggle(this.CssClasses_.DRAWER_OPEN_CLASS)
}, MaterialLayout.prototype.resetTabState_ = function(s) {
    "use strict";
    for (var t = 0; t < s.length; t++) s[t].classList.remove(this.CssClasses_.ACTIVE_CLASS)
}, MaterialLayout.prototype.resetPanelState_ = function(s) {
    "use strict";
    for (var t = 0; t < s.length; t++) s[t].classList.remove(this.CssClasses_.ACTIVE_CLASS)
}, MaterialLayout.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var s = document.createElement("div");
        s.classList.add("wsk-layout__container"), this.element_.parentElement.insertBefore(s, this.element_), this.element_.parentElement.removeChild(this.element_), s.appendChild(this.element_), this.header_ = this.element_.querySelector("." + this.CssClasses_.HEADER), this.drawer_ = this.element_.querySelector("." + this.CssClasses_.DRAWER), this.tabBar_ = this.element_.querySelector("." + this.CssClasses_.TAB_BAR), this.content_ = this.element_.querySelector("." + this.CssClasses_.CONTENT);
        var t = this.Mode_.STANDARD;
        if (this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH), this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)), this.screenSizeHandler_(), this.header_ && (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED) ? t = this.Mode_.SEAMED : this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL) ? t = this.Mode_.WATERFALL : this.element_.classList.contains(this.CssClasses_.HEADER_SCROLL) && (t = this.Mode_.SCROLL), t === this.Mode_.STANDARD ? (this.header_.classList.add(this.CssClasses_.SHADOW_CLASS), this.tabBar_ && this.tabBar_.classList.add(this.CssClasses_.SHADOW_CLASS)) : t === this.Mode_.SEAMED || t === this.Mode_.SCROLL ? (this.header_.classList.remove(this.CssClasses_.SHADOW_CLASS), this.tabBar_ && this.tabBar_.classList.remove(this.CssClasses_.SHADOW_CLASS)) : t === this.Mode_.WATERFALL && (this.content_.addEventListener("scroll", this.contentScrollHandler_.bind(this)), this.contentScrollHandler_())), this.drawer_) {
            var e = document.createElement("div");
            e.classList.add(this.CssClasses_.DRAWER_BTN), e.addEventListener("click", this.drawerToggleHandler_.bind(this)), this.element_.classList.contains(this.CssClasses_.FIXED_HEADER) ? this.header_.insertBefore(e, this.header_.firstChild) : this.element_.insertBefore(e, this.content_);
            var i = document.createElement("div");
            i.classList.add(this.CssClasses_.OBFUSCATOR), this.element_.appendChild(i), i.addEventListener("click", this.drawerToggleHandler_.bind(this))
        }
        if (this.tabBar_) {
            var a = document.createElement("div");
            a.classList.add(this.CssClasses_.TAB_CONTAINER), this.element_.insertBefore(a, this.tabBar_), this.element_.removeChild(this.tabBar_);
            var n = document.createElement("div");
            n.classList.add(this.CssClasses_.TAB_BAR_BUTTON), n.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON), n.addEventListener("click", function() {
                this.tabBar_.scrollLeft -= 100
            }.bind(this));
            var l = document.createElement("div");
            l.classList.add(this.CssClasses_.TAB_BAR_BUTTON), l.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON), l.addEventListener("click", function() {
                this.tabBar_.scrollLeft += 100
            }.bind(this)), a.appendChild(n), a.appendChild(this.tabBar_), a.appendChild(l);
            var r = function() {
                this.tabBar_.scrollLeft > 0 ? n.classList.add(this.CssClasses_.ACTIVE_CLASS) : n.classList.remove(this.CssClasses_.ACTIVE_CLASS), this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth ? l.classList.add(this.CssClasses_.ACTIVE_CLASS) : l.classList.remove(this.CssClasses_.ACTIVE_CLASS)
            }.bind(this);
            this.tabBar_.addEventListener("scroll", r), r(), this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT) && this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            for (var _ = this.tabBar_.querySelectorAll("." + this.CssClasses_.TAB), o = this.content_.querySelectorAll("." + this.CssClasses_.PANEL), c = 0; c < _.length; c++) new MaterialLayoutTab(_[c], _, o, this)
        }
        this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)
    }
}, componentHandler.register({
    constructor: MaterialLayout,
    classAsString: "MaterialLayout",
    cssClass: "wsk-js-layout"
}), MaterialRipple.prototype.Constant_ = {
    INITIAL_SCALE: "scale(0.0001, 0.0001)",
    INITIAL_SIZE: "1px",
    INITIAL_OPACITY: "0.4",
    FINAL_OPACITY: "0",
    FINAL_SCALE: ""
}, MaterialRipple.prototype.CssClasses_ = {
    WSK_RIPPLE_CENTER: "wsk-ripple--center",
    WSK_JS_RIPPLE_EFFECT_IGNORE_EVENTS: "wsk-js-ripple-effect--ignore-events",
    WSK_RIPPLE: "wsk-ripple",
    IS_ANIMATING: "is-animating"
}, MaterialRipple.prototype.downHandler_ = function(s) {
    "use strict";
    if ("mousedown" === s.type && this.ignoringMouseDown_) this.ignoringMouseDown_ = !1;
    else {
        "touchstart" === s.type && (this.ignoringMouseDown_ = !0);
        var t = this.getFrameCount();
        if (t > 0) return;
        this.setFrameCount(1);
        var e, i, a = s.currentTarget.getBoundingClientRect();
        if (0 === s.clientX && 0 === s.clientY) e = Math.round(a.width / 2), i = Math.round(a.height / 2);
        else {
            var n = s.clientX ? s.clientX : s.touches[0].clientX,
                l = s.clientY ? s.clientY : s.touches[0].clientY;
            e = Math.round(n - a.left), i = Math.round(l - a.top)
        }
        this.setRippleXY(e, i), this.setRippleStyles(!0), window.requestAnimFrame(this.animFrameHandler.bind(this))
    }
}, MaterialRipple.prototype.init = function() {
    "use strict";
    if (this.element_) {
        var s = this.element_.classList.contains(this.CssClasses_.WSK_RIPPLE_CENTER);
        if (!this.element_.classList.contains(this.CssClasses_.WSK_JS_RIPPLE_EFFECT_IGNORE_EVENTS)) {
            if (this.rippleElement_ = this.element_.querySelector("." + this.CssClasses_.WSK_RIPPLE), this.frameCount_ = 0, this.rippleSize_ = 0, this.x_ = 0, this.y_ = 0, this.ignoringMouseDown_ = !1, this.rippleElement_) {
                var t = this.element_.getBoundingClientRect();
                this.rippleSize_ = 2 * Math.max(t.width, t.height), this.rippleElement_.style.width = this.rippleSize_ + "px", this.rippleElement_.style.height = this.rippleSize_ + "px"
            }
            this.element_.addEventListener("mousedown", this.downHandler_.bind(this)), this.element_.addEventListener("touchstart", this.downHandler_.bind(this)), this.getFrameCount = function() {
                return this.frameCount_
            }, this.setFrameCount = function(s) {
                this.frameCount_ = s
            }, this.getRippleElement = function() {
                return this.rippleElement_
            }, this.setRippleXY = function(s, t) {
                this.x_ = s, this.y_ = t
            }, this.setRippleStyles = function(e) {
                if (null !== this.rippleElement_) {
                    var i, a, n, l = "translate(" + this.x_ + "px, " + this.y_ + "px)";
                    e ? (a = this.Constant_.INITIAL_SCALE, n = this.Constant_.INITIAL_SIZE) : (a = this.Constant_.FINAL_SCALE, n = this.rippleSize_ + "px", s && (l = "translate(" + t.width / 2 + "px, " + t.height / 2 + "px)")), i = "translate(-50%, -50%) " + l + a, this.rippleElement_.style.webkitTransform = i, this.rippleElement_.style.msTransform = i, this.rippleElement_.style.transform = i, e ? (this.rippleElement_.style.opacity = this.Constant_.INITIAL_OPACITY, this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING)) : (this.rippleElement_.style.opacity = this.Constant_.FINAL_OPACITY, this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING))
                }
            }, this.animFrameHandler = function() {
                this.frameCount_-- > 0 ? window.requestAnimFrame(this.animFrameHandler.bind(this)) : this.setRippleStyles(!1)
            }
        }
    }
}, componentHandler.register({
    constructor: MaterialRipple,
    classAsString: "MaterialRipple",
    cssClass: "wsk-js-ripple-effect"
});