var S = KISSY,DOM = S.DOM;
if (S.Config.debug) {
	var srcPath = "../../";
	S.config({
		packages: [{
			name: "gallery",
			path: srcPath,
			charset: "utf-8",
			ignorePackageNameInUri: true
		}]
	});
}

S.use('gallery/musicPlayer/2.0/index', function(S, MusicPlayer) {
	var musicPlayer = new MusicPlayer({
		// nplay: '.play-btn',
		// nstop: '.stop-btn',
		// npause: '.pause-btn',
		// nnext: '.skip-btn',
		// npre: '.pre_btn',
		// mode: 'random',
		auto: 'true',
		type: 'flash',
		//type:'flash',
		volume: 0.5,
		musicList: [{
			"name": "第一首",
			"path": "http://pkstatic.b0.upaiyun.com/upload/20130528/885ecd9dc3fffb1e60249adf1b492747.MP3"
		}, {
			"name": "第二首 ",
			"path": "http://m1.file.xiami.com/368/1269130368/1973540058/1772013035_10411522_l.mp3"
		}]
	});


	musicPlayer.on("error", function(ev) {
		S.log(['error', ev.msg]);
	});
	musicPlayer.on("status", function(ev) {
		S.log(['status2', ev.status, ev.index, ev]);
		switch (ev.status) {
			case "play":
				if (S.all("#playlist li").hasClass('cur')) {
					S.all("#playlist li").removeClass('cur');
				}
				S.all("#playlist li").item(ev.index).addClass('cur');
				break;
		}
	});
	musicPlayer.on("progress", function(ev) {
		S.log(['status2', ev.curtime, ev.counttime, ev.progress, ev.load]);
		// S.one(".d2_time").text(ev.curtime + "/" + ev.counttime);
		S.one(".play-load").css("width", ev.progress / 100 * 540);
	});
	// S.one(".playgoto_btn").on('click', function() {
	// 	musicPlayer.play(2);
	// });
	// S.one(".random_btn").on('click', function() {
	// 	musicPlayer.set('mode', 'random');
	// });
	// S.one(".order_btn").on('click', function() {
	// 	musicPlayer.set('mode', 'order');
	// });
	// S.one(".single_btn").on('click', function() {
	// 	musicPlayer.set('mode', 'single');
	// });
	// S.one(".setlist_btn").on('click', function() {
	// 	musicPlayer.setlist([{
	// 		"aaa": "bb"
	// 	}]);
	// 	//todo
	// });
	// S.one("#volumeselect").on('change', function(ev) {
	// 	var _val = S.one(ev.target).val();
	// 	musicPlayer.set('volume', _val);
	// });
	// S.one("#progressselect").on('change', function(ev) {
	// 	var _val = S.one(ev.target).val();
	// 	musicPlayer.set('progress', _val);
	// });

	// S.all("#playlist li").on('click', function(ev) {
	// 	if (S.all("#playlist li").hasClass('cur')) {
	// 		S.all("#playlist li").removeClass('cur');
	// 	}
	// 	S.one(ev.target).addClass('cur');
	// 	var _in dex = S.one(ev.target).index();
	// 	musicPlayer.play(_index);
	// });

	/**
	  *设置播放语与暂停按钮切换
	  */
	S.one("#play-control").on('click', function(e) {
		e.halt();
		var _self = S.one(e.currentTarget);
		if (_self.hasClass('pause-btn')) {
			_self.removeClass('pause-btn');
			musicPlayer.pause();
			DOM.css(_self, "background","url('../../images/icon-play.png') -339px 0px");
		} else {
			_self.addClass('pause-btn');
			musicPlayer.play();
			DOM.css(_self,"background","url('../../images/icon-play.png') 0 -37px");
		}
	});

	/**
	  *设置静音
	  */
	S.one("#volume").on("click", function(e){
		e.halt();
		var _self = S.one(e.currentTarget);
		if(_self.hasClass('mute')){
			_self.removeClass('mute');
			musicPlayer.set('volume', 0);
			DOM.css(_self,"background","url('../../images/icon-play.png') -207px -172px");
		} else {
			_self.addClass('mute');
			musicPlayer.set('volume',0.5);
			DOM.css(_self,"background","url('../../images/icon-play.png') -249px -6px");
		}
	})

});

