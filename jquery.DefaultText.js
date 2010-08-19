$.fn.DefaultText = function(options) {

    var defaults = {
        inactiveClass: '',
        inactiveFontStyle: 'italic',
        inactiveColour: 'rgb(204,204,204)'
    };

    // Extend our default options with those provided.
    var opts = $.extend(defaults, options);

    // Our plugin implementation code goes here.
    
    $(this).each(function(){
        $(this).val($(this).attr('title'));
        if(opts.inactiveClass != ''){
            $(this).addClass(opts.inactiveClass);
        }else{
            $(this).css({'font-style' : opts.inactiveFontStyle, 'color' : opts.inactiveColour});
            //$(this).css('color', opts.inactiveColour);
            
        }
        //alert($(this).attr('title'));
    });
    
};

