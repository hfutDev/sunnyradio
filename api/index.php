<?php
	// header("Content-type: text/html; charset=utf-8");
	require 'Slim/Slim.php';
	$app = new Slim();

	//rank.html
	$app->get('/fyb/:type', 'getHfutRank');
	// $app->get('/fyb/bg', 'getBgRank');

    //index.html
	$app->get('/rankfour', 'getFour');
	$app->get('/musicmood', 'musicMood');

	//talk.html
	$app->get('/lastmood', 'lastMood');
	$app->get('/lastmusic', 'lastMusic');


	$app->run();

	function getConnection() {
		$dbhost="localhost";
		$dbuser="root";
		$dbpass="";
		$dbname="radio";
		$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
		$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		// $dbh->query("SET NAMES UTF8;");
		return $dbh;
	}

	// rank.html
	function getHfutRank($type) {
		$sql = "SELECT id,filepath,filename,singer,
				realname,imgid,playtimes FROM radio_song ";
		$order = " ORDER BY playtimes DESC LIMIT 10";
		if(!$type){
			$sql .= $order;
		}else if($type == "bg"){
			getBgRank();
			return;
		}
		else{
			$sql = $sql . "WHERE songtype=" .$type .$order;
		}
		try {
			$db = getConnection();
			$stmt = $db->query($sql);
			$fybtype = $stmt->fetchAll(PDO::FETCH_OBJ);

			for ($i=0; $i < count($fybtype); $i++) {
				$fybtype[$i]->name = $fybtype[$i]->filename;
				$fybtype[$i]->url = $fybtype[$i]->filepath.$fybtype[$i]->realname;

				//查询图片路径
				$queryImgid = "SELECT path,name FROM radio_img WHERE id=" .$fybtype[$i]->imgid;
				$stmt = $db->query($queryImgid);
				$src = $stmt->fetchAll(PDO::FETCH_OBJ);

				//如果没有图片,src为空
				if(!empty($src[0])){
					$fybtype[$i]->src = $src[0]->path.$src[0]->name;
				}else{
					$fybtype[$i]->src = "images/search.jpg";
				}


				//查询扒歌次数
				$querySearchtimes = "SELECT count(songid) AS searchtimes FROM radio_comment WHERE type=-1 AND songid=" . $fybtype[$i]->id;
				$stmt = $db->query($querySearchtimes);
				$searchtimes = $stmt->fetchAll(PDO::FETCH_OBJ);
				$fybtype[$i]->searchtimes = $searchtimes[0]->searchtimes;

				//重新排序id
				$fybtype[$i]->num = $i+1;

				//删除多余字段
				unset($fybtype[$i]->filepath,$fybtype[$i]->realname,$fybtype[$i]->filename,$fybtype[$i]->imgid);
			};
			$db = null;

			echo  json_encode($fybtype);
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	}

	// rank.html 扒歌
	function getBgRank(){
		$sql = "SELECT songid, COUNT(*) AS searchtimes FROM radio_comment WHERE type=-1 GROUP BY songid ORDER BY searchtimes DESC LIMIT 10";
		try {
			$db = getConnection();
			//查询扒歌次数
			$stmt = $db->query($sql);
			$fybbg = $stmt->fetchAll(PDO::FETCH_OBJ);

			for ($i=0; $i < count($fybbg); $i++) {
				//查询歌曲
				$querySongid = "SELECT id,filepath,filename,singer,
	                realname,imgid,playtimes FROM radio_song WHERE id=" . $fybbg[$i]->songid;
	            $stmt = $db->query($querySongid);
	            $song = $stmt->fetchAll(PDO::FETCH_OBJ);

	            $fybbg[$i]->id = $song[0]->id;
	            $fybbg[$i]->num = $i+1;
	            $fybbg[$i]->name = $song[0]->filename;
	            $fybbg[$i]->singer = $song[0]->singer;
	            $fybbg[$i]->url = $song[0]->filepath.$song[0]->realname;
	            $fybbg[$i]->playtimes = $song[0]->playtimes;

	            //查询图片路径
	            $queryImgid = "SELECT path,name FROM radio_img WHERE id=" .$song[0]->imgid;
	            $stmt = $db->query($queryImgid);
	            $src = $stmt->fetchAll(PDO::FETCH_OBJ);

	            //如果没有图片,src为空
				if(!empty($src[0])){
					$fybbg[$i]->src = $src[0]->path.$src[0]->name;
				}else{
					$fybbg[$i]->src = "images/search.jpg";
				}

	            unset($fybbg[$i]->songid);
	        };
	        $db = null;
			echo  json_encode($fybbg);
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	}

	//index.html 右四
	function getFour(){
		$sql = "SELECT id,filepath,filename,singer,
	            realname,imgid,playtimes FROM radio_song ORDER BY playtimes DESC LIMIT 4";
		try {
			$db = getConnection();
			$stmt = $db->query($sql);
			$homefour = $stmt->fetchAll(PDO::FETCH_OBJ);

			for ($i=0; $i < count($homefour); $i++) {

	            $homefour[$i]->num = $i+1;
	            $homefour[$i]->name = $homefour[$i]->filename;
	            $homefour[$i]->url = $homefour[$i]->filepath.$homefour[$i]->realname;

	            //查询扒歌次数
	            $querySearchtimes = "SELECT count(songid) AS searchtimes FROM radio_comment WHERE type=-1 AND songid=" . $homefour[$i]->id;
				$stmt = $db->query($querySearchtimes);
				$searchtimes = $stmt->fetchAll(PDO::FETCH_OBJ);
				$homefour[$i]->searchtimes = $searchtimes[0]->searchtimes;

	            //查询图片路径
	            $queryImgid = "SELECT path,name FROM radio_img WHERE id=" .$homefour[$i]->imgid;
	            $stmt = $db->query($queryImgid);
	            $src = $stmt->fetchAll(PDO::FETCH_OBJ);

	            //如果没有图片,src为空
				if(!empty($src[$i])){
					$homefour[$i]->src = $src[$i]->path.$src[$i]->name;
				}else{
					$homefour[$i]->src = "images/search.jpg";
				}

	            unset($homefour[$i]->songid,$homefour[$i]->imgid,$homefour[$i]->filepath,$homefour[$i]->filename,$homefour[$i]->realname);
	        };
	        $db = null;
			echo  json_encode($homefour);
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	}

	//index.html 左表
	function musicMood(){
		$sql = "SELECT songid,content FROM radio_comment WHERE type=-1 ORDER BY time_at DESC LIMIT 11";

		try {
			$db = getConnection();
			$stmt = $db->query($sql);
			$newMood = $stmt->fetchAll(PDO::FETCH_OBJ);

			for ($i=0; $i < count($newMood); $i++) {

				$song = "SELECT id,filename,filepath,singer,realname,imgid FROM radio_song WHERE id=" . $newMood[$i]->songid;
				$stmt = $db->query($song);
				$result = $stmt->fetchAll(PDO::FETCH_OBJ);
				// echo json_encode($result);

				$newMood[$i]->id = $newMood[$i]->songid;
	            $newMood[$i]->name = $result[0]->filename;
	            $newMood[$i]->singer = $result[0]->singer;
	            $newMood[$i]->url = $result[0]->filepath.$result[0]->realname;

	           	//查询图片路径
	            $queryImgid = "SELECT path,name FROM radio_img WHERE id=" .$result[0]->imgid;
	            $stmt = $db->query($queryImgid);
	            $src = $stmt->fetchAll(PDO::FETCH_OBJ);

	            //如果没有图片,src为空
				if(!empty($src[$i])){
					$newMood[$i]->src = $src[0]->path.$src[0]->name;
				}else{
					$newMood[$i]->src = "images/search.jpg";
				}

	            unset($newMood[$i]->songid);
	        };
	        $db = null;
			echo  json_encode($newMood);
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	}

	//最新心情
	function lastMood(){
		$sql = "SELECT id,filepath,filename,singer,
				realname,imgid,playtimes FROM radio_song ORDER BY time_at DESC LIMIT 50";
		try {
			$db = getConnection();
			$stmt = $db->query($sql);
			$fybtype = $stmt->fetchAll(PDO::FETCH_OBJ);

			for ($i=0; $i < count($fybtype); $i++) {
				$fybtype[$i]->name = $fybtype[$i]->filename;
				$fybtype[$i]->url = $fybtype[$i]->filepath.$fybtype[$i]->realname;

				//查询图片路径
				$queryImgid = "SELECT path,name FROM radio_img WHERE id=" .$fybtype[$i]->imgid;
				$stmt = $db->query($queryImgid);
				$src = $stmt->fetchAll(PDO::FETCH_OBJ);

				//如果没有图片,src为空
				if(!empty($src[0])){
					$fybtype[$i]->src = $src[0]->path.$src[0]->name;
				}else{
					$fybtype[$i]->src = "images/search.jpg";
				}

				//删除多余字段
				unset($fybtype[$i]->filepath,$fybtype[$i]->realname,$fybtype[$i]->filename,$fybtype[$i]->imgid,$fybtype[$i]->playtimes);
			};
			$db = null;

			echo  json_encode($fybtype);
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	}

	//最新音乐
	function lastMusic(){
		$sql = "SELECT songid, COUNT(*) AS searchtimes FROM radio_comment WHERE type=-1 GROUP BY songid ORDER BY time_at  LIMIT 3";
		try {
			$db = getConnection();
			//查询扒歌次数
			$stmt = $db->query($sql);
			$fybbg = $stmt->fetchAll(PDO::FETCH_OBJ);
			for ($i=0; $i < count($fybbg); $i++) {
				//查询歌曲
				$querySongid = "SELECT id,filepath,filename,singer,
	                realname,imgid,playtimes FROM radio_song WHERE id=" . $fybbg[$i]->songid;
	            $stmt = $db->query($querySongid);
	            $song = $stmt->fetchAll(PDO::FETCH_OBJ);

	            $fybbg[$i]->id = $song[0]->id;
	            // $fybbg[$i]->num = $i+1;
	            $fybbg[$i]->name = $song[0]->filename;
	            $fybbg[$i]->singer = $song[0]->singer;
	            $fybbg[$i]->url = $song[0]->filepath.$song[0]->realname;
	            // $fybbg[$i]->playtimes = $song[0]->playtimes;

	            //查询图片路径
	            $queryImgid = "SELECT path,name FROM radio_img WHERE id=" .$song[0]->imgid;
	            $stmt = $db->query($queryImgid);
	            $src = $stmt->fetchAll(PDO::FETCH_OBJ);

	            //如果没有图片,src为空
				if(!empty($src[0])){
					$fybbg[$i]->src = $src[0]->path.$src[0]->name;
				}else{
					$fybbg[$i]->src = "images/search.jpg";
				}

	            unset($fybbg[$i]->songid);
	        };
	        $db = null;
			echo  json_encode($fybbg);
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	}
?>