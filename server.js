<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>8 BALL PRO</title>

<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/orientation_utils.css">
<link rel="stylesheet" href="css/ios_fullscreen.css">

<meta name="viewport" content="width=device-width, initial-scale=1">

</head>

<body style="background-color:#000;">

<canvas id="canvas" width="1280" height="640"></canvas>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/createjs.min.js"></script>
<script src="js/howler.min.js"></script>

<script src="js/platform.js"></script>
<script src="js/screenfull.js"></script>

<script src="js/sprite_lib.js"></script>
<script src="js/ctl_utils.js"></script>
<script src="js/settings.js"></script>

<script src="js/CLang.min.js"></script>

<script src="js/CVector2.js"></script>
<script src="js/CMath.js"></script>

<script src="js/CPreloader.js"></script>
<script src="js/CMain.js"></script>

<script>
$(document).ready(function(){

    var oMain = new CMain({
        audio_enable_on_startup:false,
        fullscreen:true,
        check_orientation:true
    });

});
</script>

</body>
</html>
