<?php
// header("Content-type: text/html; charset=utf-8");
require 'Slim/Slim.php';
$app = new Slim();

$app->get('/fyb/:type', 'getHfutRank');

$app->get('/blog/:id',	'getBlogContent');
$app->post('/blog/add', 'addBlog');
$app->put('/blog/update/:id', 'updateBlog');
$app->delete('/blog/delete/:id', 'deleteBlog');

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
			$fybtype[$i]->src = $src[0]->path.$src[0]->name;

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

// function getBlog() {
// 	$sql = "SELECT id,category,title,tags,post_date,summary FROM bloglist ORDER BY id";
// 	try {
// 		$db = getConnection();
// 		$stmt = $db->query($sql);
// 		$bloglist = $stmt->fetchAll(PDO::FETCH_OBJ);
// 		$db = null;
// 		// echo  $bloglist;
// 		echo  json_encode($bloglist);
// 	} catch(PDOException $e) {
// 		echo '{"error":{"text":'. $e->getMessage() .'}}';
// 	}
// }

// function getBlogContent($id) {
// 	$sql = "SELECT * FROM bloglist WHERE id=:id";
// 	try {
// 		$db = getConnection();
// 		$stmt = $db->prepare($sql);
// 		$stmt->bindParam("id", $id);
// 		$stmt->execute();
// 		$blogcontent = $stmt->fetchObject();
// 		$db = null;
// 		echo  json_encode($blogcontent);
// 	} catch(PDOException $e) {
// 		echo '{"error":{"text":'. $e->getMessage() .'}}';
// 	}
// }

// function deleteBlog($id) {
// 	$sql = "DELETE FROM bloglist WHERE id=:id";
// 	try {
// 		$db = getConnection();
// 		$stmt = $db->prepare($sql);
// 		$stmt->bindParam("id", $id);
// 		$stmt->execute();
// 		$db = null;
// 	} catch(PDOException $e) {
// 		echo '{"error":{"text":'. $e->getMessage() .'}}';
// 	}
// }

// function addBlog() {
// 	// error_log('addWine\n', 3, 'api/php.log');
// 	$request = Slim::getInstance()->request();
// 	$bloglist = json_decode($request->getBody());
// 	$sql = "INSERT INTO bloglist (category,content,summary,tags,title) VALUES (:category, :content, :summary, :tags, :title)";
// 	try {
// 		$db = getConnection();
// 		$stmt = $db->prepare($sql);
// 		$stmt->bindParam("category", $bloglist->category);
// 		$stmt->bindParam("title", $bloglist->title);
// 		$stmt->bindParam("tags", $bloglist->tags);
// 		$stmt->bindParam("summary", $bloglist->summary);
// 		$stmt->bindParam("content", $bloglist->content);
// 		$stmt->execute();
// 		$bloglist->id = $db->lastInsertId();
// 		$db = null;
// 		echo json_encode($bloglist);
// 	} catch(PDOException $e) {
// 		// error_log($e->getMessage(), 3, '/var/tmp/php.log');
// 		echo '{"error":{"text":'. $e->getMessage() .'}}';
// 	}
// }

// function updateBlog($id) {
// 	$request = Slim::getInstance()->request();
// 	$body = $request->getBody();
// 	$bloglist = json_decode($body);
// 	$sql = "UPDATE bloglist SET category=:category, title=:title, tags=:tags, summary=:summary, content=:content WHERE id=:id";
// 	try {
// 		$db = getConnection();
// 		$stmt = $db->prepare($sql);
// 		$stmt->bindParam("category", $bloglist->category);
// 		$stmt->bindParam("title", $bloglist->title);
// 		$stmt->bindParam("tags", $bloglist->tags);
// 		$stmt->bindParam("summary", $bloglist->summary);
// 		$stmt->bindParam("content", $bloglist->content);
// 		$stmt->bindParam("id", $id);
// 		$stmt->execute();
// 		$db = null;
// 		echo json_encode($bloglist);
// 	} catch(PDOException $e) {
// 		echo '{"error":{"text":'. $e->getMessage() .'}}';
// 	}
// }

// function findByName($query) {
// 	$sql = "SELECT * FROM wine WHERE UPPER(name) LIKE :query ORDER BY name";
// 	try {
// 		$db = getConnection();
// 		$stmt = $db->prepare($sql);
// 		$query = "%".$query."%";
// 		$stmt->bindParam("query", $query);
// 		$stmt->execute();
// 		$wines = $stmt->fetchAll(PDO::FETCH_OBJ);
// 		$db = null;
// 		echo '{"wine": ' . json_encode($wines) . '}';
// 	} catch(PDOException $e) {
// 		echo '{"error":{"text":'. $e->getMessage() .'}}';
// 	}
// }

?>