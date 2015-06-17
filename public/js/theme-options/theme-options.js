// THEME OPTIONS.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is JS file that contains skin and layout Style used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Studio.
// Author: Iwthemes.
// Name File: theme-options.js
// Version 1.3 - 19/03/2014
// Website: http://www.iwthemes.com 
// Email: support@iwthemes.com
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

  var $;
  $(document).ready(function($) {

	/* Selec your skin and layout Style */

	function interface(){

    // Skin value
    var skin = "cyan";          // cyan, green, magenta, orange, orange-light, purple, red, yellow

    $(".skin").attr("href", "css/skins/"+ skin + "/" + skin + ".css");

    return false;
  }

   interface();

});