// This is where it all goes :)
// Init all plugin
$(document).on('ready', function () {

    // Show/hide menu when icon is clicked
    const menuItems   = $('.all-menu-wrapper .nav-link');
    const menuIcon    = $('.menu-icon, #navMenuIcon');
    const menuBlock   = $('.all-menu-wrapper');
    const reactToMenu = $('.page-main, .navbar-sidebar, .page-cover')
    const menuLinks   = $(".navbar-mainmenu a, .navbar-sidebar a");
    // Menu icon clicked
    menuIcon.on('click', function () {
      menuIcon.toggleClass('menu-visible');
      menuBlock.toggleClass('menu-visible');
      menuItems.toggleClass('menu-visible');
      reactToMenu.toggleClass('menu-visible');
      return false;
    });
  
    // Hide menu after a menu item clicked
    menuLinks.on('click', function () {
      menuIcon.removeClass('menu-visible');
      menuBlock.removeClass('menu-visible');
      menuItems.removeClass('menu-visible');
      reactToMenu.removeClass('menu-visible');
      return true;
    });
  },)
  
    //Page Loader : hide loader when all are loaded
    $(window).on('load', function () {
      $('.page-loader').addClass('p-hidden');
      $('.section').addClass('anim');
    });
  
    // cursor position
    (function() {
      document.addEventListener("mousemove", parallax);
      // const elem = document.querySelector("#parallax");
      function parallax(e) {
        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let x = `${90 - (mouseX - w) * 0.01}% ${100 - (mouseY - h) * 0.01}%`;
        // console.log(x);
        document.querySelector("#parallax").style.backgroundPosition = x;
      }
  
    })();

// // url: "https://getsimpleform.com/messages.ajax?form_api_token=e46c376242be65f2324351f2ab7adeb0",
// // Contact form
// (function ($) {

// 	$.fn.initForm = function (options) {
// 		var settings = $.extend({
// 			type: 'post',
// 			serverUrl: 'https://getsimpleform.com/messages.ajax?form_api_token=e46c376242be65f2324351f2ab7adeb0',
// 			successClean: this.find('.form-success-clean'),
// 			successGone: this.find('.form-success-gone'),
// 			successInvisible: this.find('.form-success-invisible'),
// 			successVisible: this.find('.form-success-visible'),
// 			textFeedback: this.find('.form-text-feedback'),
// 		}, options);
// 		var $ajax = {
// 			sendRequest: function (p) {
// 				var form_fill = $(p);

// 				// Get the form data.
// 				var form_inputs = form_fill.find(':input');
// 				var form_data = {};
// 				form_inputs.each(function () {
// 					form_data[this.name] = $(this).val();
// 				});
// 				$.ajax(
// 					{
// 						/*
// 						 *Your Ajax Server Here, 
// 						 * use internal url (such as './ajaxserver/server.php') or 
// 						 * external URL such as:  url: 'http://www.example.com/avenir/ajaxserver/server.php'
// 						 * depending to your requirements
// 						 */
// 						url: settings.serverUrl,
// 						type: settings.type,
// 						data: form_data,
// 						dataType: 'json',

// 						/* CALLBACK FOR SENDING EMAIL GOEAS HERE */
// 						success: function (data) {
// 							//Ajax connexion was a success, now handle response
// 							if (data && !data.error) {
// 								// Hide for if no error
// 								settings.successClean.val("");
// 								settings.successInvisible.addClass('invisible');
// 								settings.successGone.addClass('gone');
// 								settings.successVisible.removeClass('invisible');
// 								settings.successVisible.removeClass('gone');
// 								console.log('Request sent successfully');
// 							}
// 							// Else the login credentials were invalid.
// 							else {
// 								//Ajax connexion reject an error a success, now handle response
// 								settings.textFeedback.removeClass('gone');
// 								settings.textFeedback.removeClass('invisible');
// 								settings.textFeedback.html('Error when sending request.');
// 								console.log('Could not process AJAX request to server');
// 							}
// 						},
// 						/* show error message */
// 						error: function (jqXHR, textStatus, errorThrown) {
// 							//ajax error
// 							settings.textFeedback.removeClass('gone');
// 							settings.textFeedback.removeClass('invisible');
// 							settings.textFeedback.html('Error when sending request.');
// 							console.log('ajax error');

// 						}
// 						/* END EMAIL SENDING CALLBACK */
// 					});
// 			}

// 		};



// 		this.submit(function (event) {
// 			// prevent default submit
// 			console.log('Send request');
// 			event.preventDefault();
// 		});

// 	};

// }(jQuery))


