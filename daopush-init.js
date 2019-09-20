(function(){
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	s.onload = init;
	document.body.appendChild(s);

function init() {
	var userLang = navigator.language || navigator.userLanguage,
            language = userLang.substr(0, 2).toLowerCase(),
            obj = new PushKaWrapper({"pid":49,"sourceId":"115","landingId":5,"marks":{"utm_source":null,"utm_medium":null,"utm_campaign":null,"utm_term":null,"utm_content":null},"popupUrl":"https:\/\/notiphyme.info\/rs\/115?count=1&declCount=1&fullScreenMode=disabled","pushKaScript":"https:\/\/ichecknotifyfriends.info\/push.js?b=22","languages":{language:{"btnSubscribe":"\u041d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0442\u0443\u0442","btnContinue":"Continue","btnCancel":"\u041f\u043b\u0438\u0437, \u043d\u0435 \u0436\u043c\u044f\u043a\u0430\u0439","btnClose":"Close","notRobot":"I'm not a robot","popupTitle":"\u041f\u0440\u0438\u0432\u0435\u0442!!!","popupText":"To continue, enable the subscription","titleNotification":"Notification","systemAllowTitle":"wants to","systemAllowText":"wants to send you notifications","systemAllowTextPc":"Show notifications","btnAllow":"Allow","btnBlock":"Block"}}});
        
        obj.prompt('light',1, 10);
    }
})();
