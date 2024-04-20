$(document).ready(function(){

    //$("#name").trigger('focus');

    //一開始先隱藏的
    $('#bag').hide();
    $('#up').hide();
    $('#down').hide();
    $('#back').hide();
    $('#content').hide();
    $('#find_enter').hide();



    $('#theme , #back').click(function(){
        $('#bag').hide();
        $('#up').hide();
        $('#down').hide();
        $('#type').show();
        $('#back').hide();
        $('#slides').show();
        $('#content').hide();
    });

    $('#different_bag').click(function(){
        $('#bag').show();
        $('#back').show();
        $('#type').hide();
        $('#slides').hide();
    })

    $('#different_up').click(function(){
        $('#up').show();
        $('#back').show();
        $('#type').hide();
        $('#slides').hide();
    })

    $('#different_down').click(function(){
        $('#down').show();
        $('#back').show();
        $('#type').hide();
        $('#slides').hide();
    })

    $('#buy').click(function(){
        $('#content').show();
        $('#cart_win').fadeOut(0);
        $('#bag').hide();
        $('#up').hide();
        $('#down').hide();
        $('#type').hide();
        $('#back').hide();
        $('#slides').hide();
    })

    $('#choose_close').click(function(){
        $('.overlay').hide();
    });




    //購物車一覽表開啟
    $('#banner > img , #item_num').click(function(){
        $('#cart_win').fadeIn(400);
    });
    $('#close').click(function(){
        $('#cart_win').fadeOut(400);
    });

    //關閉類別選擇
    $('#choose_close').click(function(){
        $('#begin').fadeOut(100);
    });
    

    var buy_list=[];
    var serial = 0;
    
    //加進購物車
    $('.clothes_cart').click(function(){
        

        //var $par = $(this).parent();
        var $par = $(this).closest('.clothes_item');

        var $price = $par.find('.clothes_price');
        var $img = $par.find('.clothes_img');
        var $text = $par.find('.clothes_text');

        serial++;
        var item_obj={
            no:serial,
            src: $img.attr('src'),
            text:$text.text(),
            price:$price.text()

        };
        //item_obj.abc = 0;
        buy_list.push(item_obj);
        console.log(buy_list);

        //src="item_obj.src"
        var $item=$('<div class="cart_item">\
                <img class="cart_img" src="./images/162961.jpg" />\
                <div class="cart_text">XXXXXXXX</div>\
                <div class="cart_price">$18000</div>\
                <div class="cart_delete">X</div>\
            </div>');

        
        $('#cart_win').append($item);

        $item.attr('no',item_obj.no);

        $item.find('.cart_price').text(item_obj.price);
        $item.find('.cart_text').text(item_obj.text);
        $item.find('.cart_img').attr('src',item_obj.src);

        

        $item.find('.cart_delete').click(function(){
            var n = $item.attr('no');
            for(var i=0; i< buy_list.length; i++)
            {
                if(n == buy_list[i].no)
                {
                    buy_list.splice(i,1);
                    break;
                }
            }
            $(this).parent().remove();
            $('#item_num').text(buy_list.length);

            
        });
        $('#item_num').text(buy_list.length);

        
        
    });

    


    //輪播開始
    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
    //輪播結束

    //建立訂單資訊空陣列
    var context=[];
    var number=0;

    $('#check').click(function(){
        const nameElement = document.getElementById("name");
        const name = nameElement.value;
        const phoneElement = document.getElementById("phone");
        const phone = phoneElement.value;
        const addressElement = document.getElementById("address");
        const address = addressElement.value;
        number++;
        alert("你的姓名是 " + name + "\n電話是 " + phone+"\n地址是 "+address+"\n訂單編號是:no "+number);
        context.push(name);
        context.push(phone);
        context.push(address);
        console.log(context);
        $('#content').hide();
        $('#slides').show();
        $('#type').show();

        buy_list = []; //清空buy_list[]
        $('.cart_item').remove(); //清空購物車
        $('#item_num').text(buy_list.length); //購物車數字歸0
    })

    $('#find').click(function(){
        $('#find_enter').show();
    })
    $('#find_close').click(function(){
        $('#find_enter').fadeOut(200);
    });

    $('#enter_find').click(function(){
        const noElement = document.getElementById("no");
        const no = noElement.value;
        
        var no_int=parseInt(no);
        if(context.length==0)
            {
                alert("還沒有訂單資訊喔!")
            }
        else
            {
                if(no_int!=number)
                {
                    alert("請輸入訂單編號，舉例no.1，請輸入1")
                }
                else
                {
                    alert("訂單編號"+no+"\n你的姓名是 " + context[no_int*3-3] + "\n電話是 " + context[no_int*3-2]+"\n地址是 "+context[no_int*3-1]);
                }
            }
        
        
    })


    $(".choose_btn").click(function(){
        $('#begin').hide();
        $('.overlay').hide();
        $('.image1').attr("src", "./images/bag1.webp");
        $('.image2').attr("src", "./images/bag2.webp");
        $('.image3').attr("src", "./images/bag3.webp");
    });

    $(".choose_btn1").click(function(){
        $('#begin').hide();
        $('.overlay').hide();
        $('.image1').attr("src", "./images/up1.webp");
        $('.image2').attr("src", "./images/up2.webp");
        $('.image3').attr("src", "./images/up3.webp");
    });

    $(".choose_btn2").click(function(){
        $('#begin').hide();
        $('.overlay').hide();
        $('.image1').attr("src", "./images/down1.webp");
        $('.image2').attr("src", "./images/down2.webp");
        $('.image3').attr("src", "./images/down3.webp");
    });
})

    