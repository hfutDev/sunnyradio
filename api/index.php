<?php
// header("Content-type: text/html; charset=utf-8");
require 'Slim/Slim.php';
$app = new Slim();

$app->get('/fyb/:type', 'getHfutRank');
$app->get('/fybbg', 'getBgRank');
$app->get('/test', 'fuck');

// $app->get('/blog/:id',	'getBlogContent');
// $app->post('/blog/add', 'addBlog');
// $app->put('/blog/update/:id', 'updateBlog');
// $app->delete('/blog/delete/:id', 'deleteBlog');

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


function getHfutRank($type) {
	$sql = "SELECT id,filepath,filename,singer,
			realname,imgid,playtimes FROM radio_song ";
	$order = " ORDER BY playtimes DESC LIMIT 10";
	if(!$type){
		$sql .= $order;
	}else{
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
				$fybtype[$i]->src = "";
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
function fuck(){
	$sql = "SELECT songid,filepath,filename,singer,realname,imgid,playtimes,path,name
	FROM radio_comment,radio_img,radio_song
	WHERE radio_comment.type=-1
	AND radio_img.id=radio_song.id
	LIMIT 10";
	$db = getConnection();
	$stmt = $db->query($sql);
	$result = $stmt->fetchAll(PDO::FETCH_OBJ);
	$result = json_encode($result);
	echo $result;
}

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
				$fybbg[$i]->src = "";
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