$(document).ready(function() { 
    $(function () { 
        var flame = $("#flame"); 
        var txt = $("h1"); 
        var audio = $("#birthdaySong")[0]; // Mendapatkan elemen audio

        flame.on({ 
            click: function () { 
                flame.removeClass("burn").addClass("puff"); 
                $(".smoke").each(function () { 
                    $(this).addClass("puff-bubble"); 
                }); 
                $("#glow").remove(); 
                txt.hide().html("happy birthdayy wawii!!").delay(750).fadeIn(300); 
                $("#candle").animate({ 
                    opacity: ".5" 
                }, 100); 

                // Mainkan audio
                audio.play(); 
            } 
        }); 
    }); 
});