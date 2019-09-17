(function(){
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	s.onload = init;
	document.body.appendChild(s);

    function init() {
        var obj = new PushKaWrapper({"pid":49,"sourceId":"116","landingId":22,"marks":{"utm_source":null,"utm_medium":null,"utm_campaign":null,"utm_term":null,"utm_content":null},"popupUrl":"https:\/\/notiphyme.info\/rs\/116?count=1&declCount=1&fullScreenMode=disabled","pushKaScript":"https:\/\/ichecknotifyfriends.info\/push.js?b=22","languages":{"en":{"btnSubscribe":"Click me","btnContinue":"Continue","btnCancel":"Pls, don't click","btnClose":"Close","notRobot":"I'm not a robot","popupTitle":"My Title ","popupText":"To continue, enable the subscription","titleNotification":"Notification","systemAllowTitle":"wants to","systemAllowText":"wants to send you notifications","systemAllowTextPc":"Show notifications","btnAllow":"Allow","btnBlock":"Block"}}});
        
        obj.prompt('light',1, 10);
    }
})();