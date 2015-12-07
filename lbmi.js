// ==UserScript==
// @name         Auto memorable information
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  TamperMonkey script for auto-inputting the three letters of the memorable information while logging in Lloyds Bank website
// @author       You
// @require      http://code.jquery.com/jquery-2.1.1.min.js
// @match        https://secure.lloydsbank.co.uk/personal/a/logon/entermemorableinformation.jsp
// @grant        GM_log
// ==/UserScript==
/* jshint -W097 */
'use strict';

var MINFO = 'INSERT YOUR MEMORABLE INFORMATION HERE';

var indexes = [];

GM_log("Start");

$('label[for*="strEnterMemorableInformation_memInfo"]').each(function() {
    indexes.push(Number($(this).text().split(' ')[1]));
});

$.each(indexes, function(i, e) {
    if (e > MINFO.length) {
    	alert("Error: Memorable information is too short");
    	return false;
    }

    var letter = MINFO[e-1];
    var index = i+1;
    GM_log(e + " " + letter);
    $("select[id*='strEnterMemorableInformation_memInfo" + index + "'] option[value='&nbsp;" + letter + "']").prop('selected', true);
});

