window.onload=function(){
  var $myVideo = document.getElementById("myVideo");
  var $pause = document.getElementById("pause");
  var $play = document.getElementById("play");

  if ($myVideo && $pause && $play) {

    $pause.onclick = function(){
      if($myVideo.paused == false){
        $myVideo.pause();
      }
      $play.setAttribute("class","on");
      $pause.setAttribute("class","");
    }

    $play.onclick = function(){
      if($myVideo.paused == true){
        $myVideo.play();
      }
      $pause.setAttribute("class","on");
      $play.setAttribute("class","");
    }

    $myVideo.addEventListener('pause',function(){
      $play.setAttribute("class","on");
      $pause.setAttribute("class","");
    })

    $myVideo.addEventListener('play',function(){
      $pause.setAttribute("class","on");
      $play.setAttribute("class","");
    })

    $myVideo.addEventListener('ended',function(){
      $pause.setAttribute("class","on");
      $play.setAttribute("class","");
    })
  }
}
