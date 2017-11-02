
var socket = io.connect('http://localhost:3000');
// var socket = io.connect('http://ec2-52-68-168-194.ap-northeast-1.compute.amazonaws.com:9000');

(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    var getMessageText, message_side, sendMessage;
    $(function () {
        message_side = 'right';
        getMessageText = function () {
            var longAndComplicatedFunction = function(koText) {
                var deferred = $.Deferred();
                try {
                    textTranslate({
                        sendText : koText,
                        checkKey : false,
                        autoKey : true,
                        resultLang : 'ja',
                        cb : function(translateText){
                            console.log(translateText);
                            deferred.resolve(translateText);
                        }
                    });
                } catch (err) {
                    deferred.reject(err);
                }
                return deferred.promise();
            };
            var $message_input;
            $message_input = $('.message_input');
            var thisText = $message_input.val();

            return longAndComplicatedFunction(thisText).done(function(message) {
                return message;
            }).fail(function(error) {
                console.log(error);
                return  $message_input.val();
            }).always(function() {
                console.log('완료!');
            });



        };
        sendMessage = function (text,message_side) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            //message_side = message_side === 'left' ? 'right' : 'left';
            console.log(text);
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        $('.send_message').click(function (e) {
            return getMessageText().then(function(translateResult){
                socket.emit('message', translateResult);
            });
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return getMessageText().then(function(translateResult){
                    socket.emit('message', translateResult);
                });
            }
        });
        // sendMessage('Hello Philip! :)');
        // setTimeout(function () {
        //     return sendMessage('Hi Sandy! How are you?');
        // }, 1000);
        // return setTimeout(function () {
        //     return sendMessage('I\'m fine, thank you!');
        // }, 2000);
    });
    socket.on('my message', function (socketId,translateResult) {
        sendMessage(translateResult.sendText+ "<br>" +translateResult.ja,'right');
    });
    socket.on('other message',function(socketId,translateResult){
        sendMessage(translateResult.sendText+ "<br>" +translateResult.ja,'left');
    });
}.call(this));

$(document).ready(function(){
   $('.messages').css('height',$('.chat_window')[0].offsetHeight-($('.bottom_wrapper')[0].offsetHeight+$('.top_menu')[0].offsetHeight)+'px');
});