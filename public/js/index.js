
    // let burger = Array.from(document.getElementsByClassName('toggle'));
    // let headerCont = Array.from(document.getElementsByClassName('header-container'));
    // burger.forEach((e)=>{
        
    // e.addEventListener('click',()=>{
    //     e.classList.add('active');
    //     headerCont.forEach((t)=>{
    //         e.style.display = 'flex';
    //     });
    // });
    // });
    // let headerCont = Array.from(document.getElementsByClassName('header-container'));

    $(()=>{
        $('.toggle').click(()=>{
            $('.toggle').toggleClass('active');
            $('.header-container').toggleClass('flex');
            
        });
    });

    
        $(".owl-carousel").owlCarousel({
            
           
            loop:true,
            dots:false,
            items:1,
            
            

        });
      