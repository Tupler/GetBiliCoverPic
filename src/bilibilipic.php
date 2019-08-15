
<?php
/**
 * 利用BiliBili API提取video信息，利用正则表达式提取封面（这里为json格式，但我为了封面就没解析json。）
 * 
 *  */
header("Content-Type:text/html;charset=utf-8");
function get_pic($a)
{
 $repljson = file_get_contents("https://api.bilibili.com/x/web-interface/view?aid=".$a);
 preg_match_all('/(?<=\"http)(:\/\/).*jpg(?=\",\"title)/',$repljson,$ss);
echo(@"https".$ss[0][0]);



 
}

get_pic($_GET['av']);
?>
