// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MainPage from './components/MainPage.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.component('MainPage', MainPage);
var app = undefined;
app = new Vue({
  el: '#app',
  render: h => h(MainPage)
})


var chat = undefined;
var CHATDATABASE = undefined;
var app;
defaultPath = '/translate';
$(document).ready(function(){
    translateInit(function(){
        chat.init();
    });
   //$('.messages').css('height',$('.chat_window')[0].offsetHeight-($('.bottom_wrapper')[0].offsetHeight+$('.top_menu')[0].offsetHeight)+'px');
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('#chat-messages').append($message);
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
            var $message_input;
            $message_input = $('.message_input');
            var thisText = $message_input.val();
            $message_input.val('');
            var longAndComplicatedFunction = function(koText) {
                var deferred = $.Deferred();
                try {
                    textTranslate({
                        sendText : koText,
                        checkKey : false,
                        autoKey : true,
                        resultLang : 'ja',
                        cb : function(translateText){
                            deferred.resolve(translateText);
                        }
                    });
                } catch (err) {
                    deferred.reject(err);
                }
                return deferred.promise();
            };

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
            var $textForm = $('.message_input');
            if($textForm.val() !== ''){
                return getMessageText().then(function(translateResult){
                    //sendMessage(translateResult.sendText+ "<br>" +translateResult.ja,'right');
                        chat.pushData(chat.userName,translateResult.sendText);
                });
            }

        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                var $textForm = $('.message_input');
                if($textForm.val() !== ''){
                    return getMessageText().then(function(translateResult){
                        chat.pushData(chat.userName,translateResult.sendText);
                    });
                }

            }
        });
    });

    chat = {
        defaultChat : '/public',
        thisChatList : undefined,
        userName : undefined,
        init : function(){
            chat.getDatabase(function(){
                CHATDATABASE.ref(chat.defaultChat).limitToLast(1).on('child_added', function(data) {
                    var addData = data.val();

                    var textData = DBData.filter(function(item){
                        return item.data.sendText === addData.sendText;
                    });

                    if(textData.length != 0){
                        var chatData = {
                            id: data.key.replace(/-/gi,"").replace(/_/gi,""),
                            userName : addData.userName,
                            sendText: addData.sendText,
                            translateText : textData[0].data.ja,
                            msgType : addData.userName == chat.userName ? 'my' : 'other',
                            timeStamp : addData.timeStamp
                        };
                        var thisItem  = app._data.messages.filter(
                            function (item) {
                                return (item.id === data.key.replace(/-/gi,"").replace(/_/gi,""));
                            }
                        );
                        if(thisItem.length === 0 )
                        app.addItem(chatData);
                    }else{
                         textTranslate({
                             sendText : addData,
                             resultLang : 'ja',
                             autoKey : true,
                             cb : function(data){
                                 var chatData = {
                                     id: data.key.replace(/-/gi,"").replace(/_/gi,""),
                                     userName : addData.userName,
                                     sendText: addData.sendText,
                                     translateText : data.ja,
                                     msgType : addData.userName == chat.userName ? 'my' : 'other',
                                     timeStamp : addData.timeStamp
                                 };
                                 var thisItem  = app._data.messages.filter(
                                     function (item) {
                                         return (item.id === data.key.replace(/-/gi,"").replace(/_/gi,""));
                                     }
                                 );
                                 if(thisItem.length === 0 )
                                 app.addItem(chatData);
                             }
                         });
                    }

                });
                chat.thisChatList.forEach(function(itemData,index){
                    var addData = itemData.data;
                    var textData = DBData.filter(function(item){
                        return item.data.sendText === addData.sendText;
                    });

                    if(textData.length != 0){
                        var chatData = {
                            id: itemData.id.replace(/-/gi,"").replace(/_/gi,""),
                            userName : addData.userName,
                            sendText: addData.sendText,
                            translateText : textData[0].data.ja,
                            msgType : addData.userName == chat.userName ? 'my' : 'other',
                            timeStamp : addData.timeStamp
                        };
                        var thisItem  = app._data.messages.filter(
                            function (item) {
                                return (item.id === itemData.id.replace(/-/gi,"").replace(/_/gi,""));
                            }
                        );
                        if(thisItem.length === 0 )
                        app.addItem(chatData);
                    }else{
                        textTranslate({
                            sendText : addData.sendText,
                            resultLang : 'ja',
                            autoKey : true,
                            cb : function(data){
                                var chatData = {
                                    id: itemData.id.replace(/-/gi,"").replace(/_/gi,""),
                                    userName : addData.userName,
                                    sendText: addData.sendText,
                                    translateText : data.ja,
                                    msgType : addData.userName == chat.userName ? 'my' : 'other',
                                    timeStamp : addData.timeStamp
                                };
                                var thisItem  = app._data.messages.filter(
                                    function (item) {
                                        return (item.id === itemData.id.replace(/-/gi,"").replace(/_/gi,""));
                                    }
                                );
                                if(thisItem.length === 0 )
                                app.addItem(chatData);
                            }
                        });
                    }
                });
            });
        },
        getDatabase : function(cb){
            CHATDATABASE = firebase.database();
            var _promise = function (param) {
                return new Promise(function (resolve, reject) {
                    CHATDATABASE.ref(chat.defaultChat).on('value', function (data) {
                        var database = data.val();
                        chat.thisChatList = Object.keys(database).map(function (data) {
                            return {
                                id: data,
                                data: database[data]
                            };
                        });
                        resolve();
                    });
                });
            };
            _promise(true)
                .then(function () {
                    if (cb) {
                        cb();
                    }
                }, function (error) {
                    console.error(error);
                });
        },
        pushData : function(userName,sendText){
            CHATDATABASE.ref(chat.defaultChat).child('/').push({
                userName : userName,
                sendText : sendText,
                timeStamp: moment().format('YYYY-MM-DD,h:mm:ss')
            });
        },
        scrollDown : function(){
            $('.chat-messages').scrollTop($('.chat-messages')[0].scrollHeight);
        }
    };


    chat.init();
    Vue.component('msg-bubble', {
        props: ['id','class','send-text','time-stamp'],
        template: '<div class="message"  ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" /><div class="bubble">{{sendText}}<div class="translateDiv"></div><div class="corner"></div><span>{{timeStamp}}</span></div></div>'
    });

    var preloadbg = document.createElement("img");
    preloadbg.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/timeline1.png";

    $("#searchfield").focus(function(){
        if($(this).val() == "Search contacts..."){
            $(this).val("");
        }
    });
    $("#searchfield").focusout(function(){
        if($(this).val() == ""){
            $(this).val("Search contacts...");

        }
    });

    $("#sendmessage .message_input").focus(function(){
        if($(this).val() == "Send message..."){
            $(this).val("");
        }
    });
    $("#sendmessage .message_input").focusout(function(){
        if($(this).val() == ""){
            $(this).val("Send message...");

        }
    });


    $(".friend").each(function(){
        $(this).click(function(){
            chat.userName = 'aa';
            var childOffset = $(this).offset();
            var parentOffset = $(this).parent().parent().offset();
            var childTop = childOffset.top - parentOffset.top;
            var clone = $(this).find('img').eq(0).clone();
            var top = childTop+12+"px";

            $(clone).css({'top': top}).addClass("floatingImg").appendTo("#chatbox");

            setTimeout(function(){$("#profile p").addClass("animate");$("#profile").addClass("animate");}, 100);
            setTimeout(function(){
                $("#chat-messages").addClass("animate");
                $('.cx, .cy').addClass('s1');
                setTimeout(function(){$('.cx, .cy').addClass('s2');}, 100);
                setTimeout(function(){$('.cx, .cy').addClass('s3');}, 200);
            }, 150);

            $('.floatingImg').animate({
                'width': "68px",
                'left':'50%',
                'top':'20px',
                'margin-left': '-34px'
            }, 200);

            var name = $(this).find("p strong").html();
            var email = $(this).find("p span").html();
            $("#profile p").html(name);
            $("#profile span").html(email);

            $(".message").not(".right").find("img").attr("src", $(clone).attr("src"));
            $('#friendslist').fadeOut();
            $('#chatview').fadeIn();
            $('#chat-messages').css('height',$('#chatview').height()-153+'px');


            $('#close').unbind("click").click(function(){
                $("#chat-messages, #profile, #profile p").removeClass("animate");
                $('.cx, .cy').removeClass("s1 s2 s3");
                $('.floatingImg').animate({
                    'width': "40px",
                    'top':top,
                    'left': '12px'
                }, 200, function(){$('.floatingImg').remove()});

                setTimeout(function(){
                    $('#chatview').fadeOut();
                    $('#friendslist').fadeIn();
                }, 50);
            });

        });
    });

    (function($) {

        var resizeTimer; // Set resizeTimer to empty so it resets on page load

        function resizeFunction() {
            $('#chat-messages').css('height',$('#chatview').height()-153+'px');
        };

        // On resize, run the function and reset the timeout
        // 250 is the delay in milliseconds. Change as you see fit.
        $(window).resize(function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeFunction, 250);
        });

    })(jQuery);
});

function makeList(ref) {
    var fruits = ["banana", "apple", "grape", "orange"];
    for (var i = 0; i < fruits.length; i++) {
        ref.push(fruits[i]);
    }
}

function getLastFromList(ref, cb) {
    ref.limit(1).once("child_added", function (snapshot) {
        cb(snapshot.val());
    });
}

// Running this should popup an alert with "orange".
function go() {
    var testRef = new Firebase("https://chat-67329.firebaseio.com");
    makeList(testRef);
    getLastFromList(testRef, function (val) {
        alert(val);
    });
}
