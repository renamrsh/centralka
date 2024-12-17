<?php

$dir = 'data';

if(isset($_POST))
{
	$file = $_POST['jsonFile'];

	if (!is_file($dir . DIRECTORY_SEPARATOR . $file . '.json'))
	{
		file_put_contents($dir . DIRECTORY_SEPARATOR . $file . '.json', '');
	}

	$json = file_get_contents($dir . DIRECTORY_SEPARATOR . $file . '.json');

	if(isset($_POST['id']))
	{
		$id = $_POST['id'];
		$status = $_POST['status'];
		$name = $_POST['switchName'];
		$obj = json_decode($json);
		if ($obj)
		{
			$obj->placement->{$id}->name = $name;
			$obj->placement->{$id}->switchStatus = $status;
		}
		else
		{
			$arr['placement'] = array($id => array ('name' => $name, 'swtichStatus' => $status));
			$obj = $arr;
		}
		
		file_put_contents($dir . DIRECTORY_SEPARATOR . $file . '.json', json_encode($obj));
		$json = file_get_contents($dir . DIRECTORY_SEPARATOR . $file . '.json');
	}
	echo $json;
}