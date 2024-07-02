// ==UserScript==
// @name         remove bg
// @namespace    https://www.douban.com/people/MoNoMilky/
// @version      0.2
// @description  去除豆瓣小组帖子马赛克水印
// @author       bambooom
// @match        https://www.douban.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

/**
 * https://greasyfork.org/en/scripts/440229-remove-bg/
 * 去除豆瓣小组帖子马赛克水印
 * Last Updated: Apr 7, 2022
 * Status: Deprecated
 * Note: 短期特殊使用，现在已无效
 */

(function () {
  'use strict';
  $('.article').css('background', 'none');
})();
