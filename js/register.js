define([
    'jquery',
    
], function($) {
    function registerSend(){
        $('#register-button').click(function(){
            console.log(123);
    })
    }
    return{
        registerSend:registerSend
    }
    
});