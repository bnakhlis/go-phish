/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-undef */

function showLivePersonChat(config, shouldRedirect = false) {
  let path = window.location.origin + config.apiPath;
  let session = getSession();
  let isLoggedIn = getLoggedInStatus(session);
  let secondTimeout = 1000;
  let minuteTimeout = secondTimeout * 60;
  let closeSiBufferTimeout = secondTimeout * 2;
  let closeWindowBufferTimeout = secondTimeout * 4;
  let activePage =
    document.location.href.includes("login") ||
    document.location.href.includes("enroll-step-1")
      ? true
      : false;

  function autoReloadLiveChat() {
    let closeButton = document.querySelector(
      ".lpc_maximized-header__close-button",
    );
    closeButton?.addEventListener("click", function () {
      let confirmButton = document.querySelector(
        ".lpc_confirmation-dialog__confirm-button",
      );
      confirmButton?.addEventListener("click", function () {
        setTimeout(() => {
          addGtmEvent("gtm.click", "lpc_confirmation-dialog__confirm-button");
          window.location.reload();
        }, 500);
      });
    });
  }

  function closeLiveChatSequence() {
    closeLiveChatWindow();
    setTimeout(closeLiveChatSi, closeSiBufferTimeout);
    setTimeout(closeLiveChatWindow, closeWindowBufferTimeout);
  }

  function closeLiveChatWindow() {
    if (document.querySelector(".lpc_maximized-header__close-button")) {
      document.querySelector(".lpc_maximized-header__close-button").click();
      addGtmEvent("gtm.click", "lpc_maximized-header__close-button");
    }
  }

  function closeLiveChatSi() {
    if (document.querySelector(".lpc_confirmation-dialog__confirm-button")) {
      document
        .querySelector(".lpc_confirmation-dialog__confirm-button")
        .click();
      addGtmEvent("gtm.click", "lpc_maximized-header__close-button-asset");
    }
  }

  if (isLoggedIn && shouldRedirect) {
    closeLiveChatSequence();
    autoReloadLiveChat();
  }

  window.lpGetAuthenticationToken = function (callback) {
    session = getSession();
    let code = "";
    code = btoa(
      session.userToken +
        "|" +
        session.visitToken +
        "|" +
        session.authToken +
        "|" +
        sessionStorage.getItem("enterprise"),
    );
    if (code.slice(-2) === "==") {
      code = code.substring(0, code.length - 2);
    }
    let result = {
      ssoKey: code,
      redirect_uri: path,
    };
    callback(result);
  };

  if (isLoggedIn) {
    ((window.lpTag = window.lpTag || {}),
      "undefined" == typeof window.lpTag._tagCount
        ? ((window.lpTag = {
            wl: lpTag.wl || null,
            scp: lpTag.scp || null,
            site: config.chatAccount || "",
            section: lpTag.section || "",
            tagletSection: lpTag.tagletSection || null,
            autoStart: lpTag.autoStart !== !1,
            ovr: lpTag.ovr || {},
            _v: "1.10.0",
            _tagCount: 1,
            protocol: "https:",
            events: {
              bind: function (t, e, i) {
                lpTag.defer(function () {
                  lpTag.events.bind(t, e, i);
                }, 0);
              },
              trigger: function (t, e, i) {
                lpTag.defer(function () {
                  lpTag.events.trigger(t, e, i);
                }, 1);
              },
            },
            defer: function (t, e) {
              0 === e
                ? ((this._defB = this._defB || []), this._defB.push(t))
                : 1 === e
                  ? ((this._defT = this._defT || []), this._defT.push(t))
                  : ((this._defL = this._defL || []), this._defL.push(t));
            },
            load: function (t, e, i) {
              var n = this;
              setTimeout(function () {
                n._load(t, e, i);
              }, 0);
            },
            _load: function (t, e, i) {
              var n = t;
              t ||
                (n =
                  this.protocol +
                  "//" +
                  (this.ovr && this.ovr.domain
                    ? this.ovr.domain
                    : "lptag.liveperson.net") +
                  "/tag/tag.js?site=" +
                  this.site);
              var o = document.createElement("script");
              (o.setAttribute("charset", e ? e : "UTF-8"),
                i && o.setAttribute("id", i),
                o.setAttribute("src", n),
                document.getElementsByTagName("head").item(0).appendChild(o));
            },
            init: function () {
              ((this._timing = this._timing || {}),
                (this._timing.start = new Date().getTime()));
              var t = this;
              (window.attachEvent
                ? window.attachEvent("onload", function () {
                    t._domReady("domReady");
                  })
                : (window.addEventListener(
                    "DOMContentLoaded",
                    function () {
                      t._domReady("contReady");
                    },
                    !1,
                  ),
                  window.addEventListener(
                    "load",
                    function () {
                      t._domReady("domReady");
                    },
                    !1,
                  )),
                "undefined" === typeof window._lptStop && this.load());
            },
            start: function () {
              this.autoStart = !0;
            },
            _domReady: function (t) {
              (this.isDom ||
                ((this.isDom = !0),
                this.events.trigger("LPT", "DOM_READY", { t: t })),
                (this._timing[t] = new Date().getTime()));
            },
            vars: lpTag.vars || [],
            dbs: lpTag.dbs || [],
            ctn: lpTag.ctn || [],
            sdes: lpTag.sdes || [],
            hooks: lpTag.hooks || [],
            identities: lpTag.identities || [],
            ev: lpTag.ev || [],
          }),
          lpTag.init())
        : (window.lpTag._tagCount += 1));
    window.lpTag.identities = [];
    window.lpTag.identities.push(identityFn);
    function identityFn(callback) {
      session = getSession();
      isLoggedIn = getLoggedInStatus(session);
      callback({
        iss: config.iss,
        acr: "loa1",
        sub: isLoggedIn,
      });
    }
    window.lpGetAuthenticationToken = function (callback) {
      code = btoa(
        session.userToken +
          "|" +
          session.visitToken +
          "|" +
          session.authToken +
          "|" +
          sessionStorage.getItem("enterprise"),
      );
      if (code.slice(-2) === "==") {
        code = code.substring(0, code.length - 2);
      }
      let result = {
        ssoKey: code,
        redirect_uri: path,
      };
      callback(result);
    };
    // setTimeout(openChatWindow, 500);
  } else {
    ((window.lpTag = window.lpTag || {}),
      "undefined" == typeof window.lpTag._tagCount
        ? ((window.lpTag = {
            wl: lpTag.wl || null,
            scp: lpTag.scp || null,
            site: config.chatAccount || "",
            section: lpTag.section || "",
            tagletSection: lpTag.tagletSection || null,
            autoStart: lpTag.autoStart !== !1,
            ovr: lpTag.ovr || {},
            _v: "1.10.0",
            _tagCount: 1,
            protocol: "https:",
            events: {
              bind: function (t, e, i) {
                lpTag.defer(function () {
                  lpTag.events.bind(t, e, i);
                }, 0);
              },
              trigger: function (t, e, i) {
                lpTag.defer(function () {
                  lpTag.events.trigger(t, e, i);
                }, 1);
              },
            },
            defer: function (t, e) {
              0 === e
                ? ((this._defB = this._defB || []), this._defB.push(t))
                : 1 === e
                  ? ((this._defT = this._defT || []), this._defT.push(t))
                  : ((this._defL = this._defL || []), this._defL.push(t));
            },
            load: function (t, e, i) {
              var n = this;
              setTimeout(function () {
                n._load(t, e, i);
              }, 0);
            },
            _load: function (t, e, i) {
              var n = t;
              t ||
                (n =
                  this.protocol +
                  "//" +
                  (this.ovr && this.ovr.domain
                    ? this.ovr.domain
                    : "lptag.liveperson.net") +
                  "/tag/tag.js?site=" +
                  this.site);
              var o = document.createElement("script");
              (o.setAttribute("charset", e ? e : "UTF-8"),
                i && o.setAttribute("id", i),
                o.setAttribute("src", n),
                document.getElementsByTagName("head").item(0).appendChild(o));
            },
            init: function () {
              ((this._timing = this._timing || {}),
                (this._timing.start = new Date().getTime()));
              var t = this;
              (window.attachEvent
                ? window.attachEvent("onload", function () {
                    t._domReady("domReady");
                  })
                : (window.addEventListener(
                    "DOMContentLoaded",
                    function () {
                      t._domReady("contReady");
                    },
                    !1,
                  ),
                  window.addEventListener(
                    "load",
                    function () {
                      t._domReady("domReady");
                    },
                    !1,
                  )),
                "undefined" === typeof window._lptStop && this.load());
            },
            start: function () {
              this.autoStart = !0;
            },
            _domReady: function (t) {
              (this.isDom ||
                ((this.isDom = !0),
                this.events.trigger("LPT", "DOM_READY", { t: t })),
                (this._timing[t] = new Date().getTime()));
            },
            vars: lpTag.vars || [],
            dbs: lpTag.dbs || [],
            ctn: lpTag.ctn || [],
            sdes: lpTag.sdes || [],
            hooks: lpTag.hooks || [],
            identities: lpTag.identities || [],
            ev: lpTag.ev || [],
          }),
          lpTag.init())
        : (window.lpTag._tagCount += 1));

    function closeSi() {
      if (document.querySelector(".lpc_confirmation-dialog__confirm-button")) {
        document
          .querySelector(".lpc_confirmation-dialog__confirm-button")
          .click();
        addGtmEvent("gtm.click", "lpc_maximized-header__close-button-asset");
      }
    }

    function closeSequence() {
      closeWindow();
      setTimeout(closeSi, closeSiBufferTimeout);
      setTimeout(closeWindow, closeWindowBufferTimeout);
    }

    function autoReload() {
      let closeButton = document.querySelector(
        ".lpc_maximized-header__close-button",
      );
      closeButton.addEventListener("click", function () {
        let confirmButton = document.querySelector(
          ".lpc_confirmation-dialog__confirm-button",
        );
        confirmButton.addEventListener("click", function () {
          setTimeout(() => {
            addGtmEvent("gtm.click", "lpc_confirmation-dialog__confirm-button");
            window.location.reload();
          }, 500);
        });
      });
    }

    function autoClose(data, eventInfo) {
      if (data.state == "chatting" || data.state == "interactive") {
        if (activePage) {
          autoReloadLiveChat();
        }
      }
      if (data.state == "ended") {
        setTimeout(closeLiveChatSequence, minuteTimeout);
      }
    }

    lpTag.events.bind("lpUnifiedWindow", "state", autoClose);
  }
}

function getSession() {
  return JSON.parse(sessionStorage.getItem("session"));
}

function getLoggedInStatus(session) {
  return session?.userToken ? true : false;
}

function addGtmEvent(event, element) {
  const dataLayer = {
    event: event,
    "gtm.element": element,
  };
  window.addLpChatEvent(dataLayer);
}
function openChatWindow() {
  let chatPill = getLPMContainer();
  if (!chatPill) {
    setTimeout(openChatWindow, 500);
  } else {
    chatPill?.click();
    hideChatButton();
  }
}
let hideLPButtonTimer = null;
function hideChatButton() {
  let chatPill = getLPMContainer();
  if (hideLPButtonTimer !== null) {
    clearInterval(hideLPButtonTimer);
    hideLPButtonTimer = null;
  }
  if (!chatPill) {
    hideLPButtonTimer = setInterval(hideChatButton, 500);
  } else {
    chatPill.style.visibility = "hidden";
    hideLPButtonTimer = setInterval(hideChatButton, 500);
  }
}
function getLPMContainer() {
  let elm = document.getElementsByClassName("LPMcontainer LPMoverlay");
  return elm[0];
}
