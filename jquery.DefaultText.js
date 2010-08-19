$.fn.DefaultText = function(options) {

    var defaults = {
        inactiveClass:      '',
        inactiveFontStyle:  'italic',
        inactiveColour:     'rgb(204,204,204)',
        activeFontStyle:    'normal',
        activeColour:       'rgb(0,0,0)'
    };

    var opts = $.extend(defaults, options);
    
    $(this).each(function(){
        
        if(opts.inactiveClass != ''){
            $(this).addClass(opts.inactiveClass);
        }else{
            $(this).css({'font-style' : opts.inactiveFontStyle, 'color' : opts.inactiveColour});
        }
        
        $(this).bind('focus', function(){
            if($(this).val() == $(this).attr('title')){
                if(opts.inactiveClass != ''){
                    $(this).removeClass(opts.inactiveClass);
                }else{
                    $(this).css({'font-style' : opts.activeFontStyle, 'color' : opts.activeColour});
                }
                
                $(this).val('');
            }
        });
        
        $(this).bind('blur', function(){
            if($(this).val() == ''){
                if(opts.inactiveClass != ''){
                    $(this).addClass(opts.inactiveClass);
                }else{
                    $(this).css({'font-style' : opts.inactiveFontStyle, 'color' : opts.inactiveColour});
                }
                
                $(this).val($(this).attr('title'));
            }
        });
        
        $(this).blur();
        $(this).val($(this).attr('title'));
        
    });
    
};