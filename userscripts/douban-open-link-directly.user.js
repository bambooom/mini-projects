// ==UserScript==
// @name         Open Douban Link Directly
// @namespace    https://www.douban.com/people/MoNoMilky/
// @version      0.2
// @description  Do not remind me of leaving Douban please, I know that... 直接打开豆瓣上的外链，不要中间询问是否打开外链，只对页面上已加载的短链有效
// @match        https://*.douban.com/*
// @author       Bambooom
// @homepageURL  https://zhuzi.dev
// @supportURL   https://zhuzi.dev
// @license      MIT
// @grant        none
// ==/UserScript==

/**
 * https://greasyfork.org/en/scripts/405864-open-douban-link-directly
 * Last Updated: Jun 22, 2020
 * Status: Deprecated
 * Note: 豆瓣页面上的外部链接的跳转逻辑已经不一样了
 */

(function () {
  'use strict';

  function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
      return RegExp(text).test(element.textContent);
    });
  }

  var links = contains('a', /^https:\/\/douc\.cc/);
  for (let link of links) {
    link.onclick = function (event) {
      var url = event.target.title;
      if (url) {
        // only with title, the shorten url may need to open directly
        event.preventDefault();
        window.open(url);
      }
    };
  }

  if (location.pathname === '/link2/') {
    var url = new URL(location).searchParams.get('url');
    window.location = url;
  }
})();
