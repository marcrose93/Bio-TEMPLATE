
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.querySelector(".fa-bars").style.transform.translateX = "-100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector(".fa-bars").style.display = "show";
}
$('.resume-docs').children().hide();

$('#tab1').click(function() {
  $('#teaching-tab').toggle();
  $('#education-tab').hide();
  $('#awards-tab').hide();
})

$('.tab2').click(function() {
  $('#education-tab').toggle();
  $('#awards-tab').hide();
  $('#teaching-tab').hide();
})

$('.tab3').click(function() {
  $('#awards-tab').toggle();
  $('#teaching-tab').hide();
  $('#education-tab').hide();
})

$("#bio-image-hover").mouseover(function() {
  
	$(".bookmark-line-top-right").slideUp(1000).css("color", "grey");
	$(".bookmark-line-left-bottom").slideUp(1000).css("color", "grey");

})

$("#bio-image-hover").mouseleave(function() {
	$(".bookmark-line-top-right").slideDown(1000).css("color", "grey");
	$(".bookmark-line-left-bottom").slideDown(1000).css("color", "grey");
})

$(".open-circle-1").click(function() {
  $( ".circle-1" ).css({"top": "+=550px" , "right": "+=650px", "position": "absolute", "background-color": "white"}).animate({width: "800px", height: "800px"});
  $('.resume').hide();
  $('.short-bio').hide();
  $('.bio-image').hide();
  $(".bookmark-line-top-right").slideUp(1000).css("color", "grey");
	$(".bookmark-line-left-bottom").slideUp(1000).css("color", "grey");
  $('.fa-arrow-rotate-left').hide();
  $('.teaching-experience').show(800);
  $('#education-label').hide();
  $('#awards-label').hide();
  $(".open-circle-2").hide();
  $(".open-circle-3").hide();
  
})

$('.close-circle-1').click(function() {
  $('.teaching-experience').hide("swing")
  $( ".circle-1" ).css({"top": "-=550px" , "right": "-=650px", "position": "fixed", "background-color": "rgb(195, 107, 107)"}).animate({width: "600px", height: "600px"});
  $('.resume').show();
  $('.short-bio').show();
  $('.bio-image').show();
  $(".bookmark-line-top-right").slideDown(1000).css("color", "grey");
	$(".bookmark-line-left-bottom").slideDown(1000).css("color", "grey");
  $('.fa-arrow-rotate-left').show();
  $('#teaching-label').hide();
  $('#awards-label').hide();
  $('#education-label').show(1000);
  $('#awards-label').show(1000);
  $(".open-circle-2").show();
  $(".open-circle-3").show();
})

$(".open-circle-2").click(function() {
  $( ".circle-2" ).css({"top": "-=220px" , "left": "+=500px", "position": "absolute", "background-color": "white", "z-index": "1"}).animate({width: "800px", height: "800px"});
  $(this).hide();
  $('.resume').hide();
  $('.short-bio').hide();
  $('.bio-image').hide();
  $(".bookmark-line-top-right").slideUp(1000).css("color", "grey");
	$(".bookmark-line-left-bottom").slideUp(1000).css("color", "grey");
  $('.fa-arrow-rotate-left').hide();
  $('.education').show("swing");
  $('.close-circle-2').show();
  $('#education-label').hide();
  $('#awards-label').hide();

  
})

$(".close-circle-2").click(function() {
  $( ".circle-2" ).css({"top": "+=220px" , "left": "-=500px", "position": "fixed", "background-color": "rgb(195, 107, 107)", "z-index": "-1"}).animate({width: "600px", height: "600px"});
  $(this).hide();
  $('.resume').show();
  $('.short-bio').show();
  $('.bio-image').show();
  $(".bookmark-line-top-right").slideDown(1000).css("color", "grey");
	$(".bookmark-line-left-bottom").slideDown(1000).css("color", "grey");
  $('.fa-arrow-rotate-left').show();
  $('.education').hide("swing");
  $('.open-circle-2').show(2000);
  $('#education-label').show(1000);
  $('#awards-label').show(1000);

  
})

$(".open-circle-3").click(function() {
  $( ".circle-3" ).css({"right": "+=460px", "bottom": "+=110px", "position": "absolute", "background-color": "white", "z-index": "1"}).animate({width: "800px", height: "800px"});
  $(this).hide();
  $('.resume').hide();
  $('.short-bio').hide();
  $('.bio-image').hide();
  $(".bookmark-line-top-right").slideUp(1000).css("color", "grey");
	$(".bookmark-line-left-bottom").slideUp(1000).css("color", "grey");
  $('.fa-arrow-rotate-left').hide();
  $('.awards').show("swing");
  $('.open-circle-2').hide();
  $('.close-circle-3').show();
  $('#education-label').hide();
  $('#awards-label').hide();
  
})

$(".close-circle-3").click(function() {
  $( ".circle-3" ).css({"right": "-210px", "bottom": "-360px", "position": "fixed", "background-color": "rgb(195, 107, 107)", "z-index": "-1"}).animate({width: "600px", height: "600px"});
  $(this).hide();
  $('.resume').show();
  $('.short-bio').show();
  $('.bio-image').show();
  $(".bookmark-line-top-right").slideDown(1000).css("color", "grey");
	$(".bookmark-line-left-bottom").slideDown(1000).css("color", "grey");
  $('.fa-arrow-rotate-left').show();
  $('.awards').hide("swing");
  $('.open-circle-2').show();
  $('.close-circle-3').hide();
  $('.open-circle-3').show(2000);
  $('#education-label').show(1000);
  $('#awards-label').show(500);
  
  
})

        var i = 0;
        var title = `arc Rose is a self-taught, front-end web developper with experience in Wordpress, HTML, CSS, Javascript, jQuery, Bootstrap, SQL, and Python. 	 Marcus Rose is a professional violinist/violist/pianist born in Inglewood, CA, yet raised in Shreveport, LA.   
                
        Marcus holds a BM from the Juilliard School as an Irene Diamond and C.V. Starr scholarship recipient studying with Heidi Castleman and Steven Tenenbom.  He attended the Masters program at the University of Southern California Thornton School of Music as a scholarship student of Karen Dreyfus.  He was generously loaned a contemporary viola by the Canadian maker Raymond Scrhyer from the Virtu Foundation.  He enjoys teaching the next generation of violin, viola, and piano students by instilling the concept of music as a universal language.` /* The text */
        var speed = 5; 

        function typeWriter() {
            if (i < title.length) {
                document.getElementById("short-bio").innerHTML += title.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        };  

        document.onload(typeWriter())

