$(document).ready(function(){
    $(window).scroll(function(event) {
        if($(this).scrollTop()> 20) {
         $('.main_head').css({'background':'rgba(255,255,255,1)',
        'transition': '0.5s'});
        $('.sidenav ul li a').css({'color':'#ec0b36'});
        $('.menu-cnt .sidenav ul li a').css({'color':'#eee'});
        $('.errorheader .sidenav ul li a').css({'color':'#ec0b36'});
       
     } else{
        $('.main_head').css('background', 'rgba(0,0,0,0)');
        $('.sidenav ul li a').css({'color':'#eee'});
        $('.menu-cnt .sidenav ul li a').css({'color':'#eee'});
        $('.errorheader .sidenav ul li a').css({'color':'#ec0b36'});
     }
     });

     $('.drop').on('click', function(){
		$('.drop_menu').toggleClass('active');
	})
var time = 0;
$('.open-menu').on('click', function(){
    if($(this).hasClass('close-menu')){
        $(this).removeClass('close-menu')    
         $('.mobile-bg-1').removeClass('menu-cnt')
         $('.mobile-bg-1').addClass('menu-second-cnt')

    }
    else{
        $(this).addClass('close-menu')
       
       var menu_li = $(".sidenav>ul>li");
        $('.mobile-bg-1').removeClass('menu-second-cnt')
        $('.mobile-bg-1').addClass('menu-cnt')

        $(menu_li).each(function() {
                time++;
                $(this).css({ 'marginTop': '15px','transition-delay': '0.' + time + 's' });
                $(this).addClass('anim-menu')
             })
    
    }

})

function copyRight(){
    let date = new Date()
    let year = date.getFullYear()
    $('.year').text(year)
    
  }

  copyRight()
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
})