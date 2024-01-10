
window.oncontextmenu = function (noMenu) {
  
    'use strict';
    
    noMenu.preventDefault();
    
  }
  
  //==================================================
  
  var openBtn = document.getElementById("open"),
      
      lockScreen = document.getElementById("lock-screen"),
      battery = document.getElementById("battery"),
  
      batteryNum = document.getElementById("battery-num"),
      
      scrollScreen = document.getElementById("scroll-down-screen");
  
  openBtn.onclick = function () {
    
    'use strict';
    
    lockScreen.style.opacity = "0";
    
    setTimeout(function () {
      lockScreen.style.display = "none";
    },500)
    
    setTimeout( function () {
      
      'use strict';
      
      batteryNum.textContent = "74%";
      
      battery.className = "fa fa-battery-three-quarters";
      
    }, 60000);
    
    setTimeout( function () {
      
      'use strict';
      
      batteryNum.textContent = "52%";
      
      battery.className = "fa fa-battery-half";
      
    }, 120000);
    
    setTimeout( function () {
      
      'use strict';
      
      batteryNum.textContent = "23%";
      
      battery.className = "fa fa-battery-quarter";
      
    }, 180000);
    
  }
  
  //===================================================
    
    function timeClock() {
      var time = new Date(),
          h = time.getHours(),
          m = time.getMinutes(),
          y = time.getFullYear(),
          M = time.getMonth() + 1,
          d = time.getDate();
          h = addZero(h);
          m = addZero(m);
          s = addZero(m);
      document.getElementById('clock').innerHTML =
      h + ":" + m;
      
      document.getElementById('clock-two').innerHTML =
      h + ":" + m;
      
      document.getElementById('clock-three').innerHTML =
      h + ":" + m;
    
      document.getElementById("date").innerHTML = M + "/" + d + "/" + y;
      
      document.getElementById("date-two").innerHTML = d + " / " + M;
    
      var t = setTimeout(timeClock, 500);
  }
  function addZero(z) {
      if (z < 10) {z = "0" + z};
      return z;
  }
  
  window.onload = timeClock(); 
  
  // =====================================================
  
  var keyBtn = document.getElementById("key"),
      
      passScreen = document.getElementById("password-screen");
  
  passScreen.onmousedown = function () {
    
    'use strict';
    
    keyBtn.style.display = "block";
    
    passScreen.onmousemove = function (pos){
      
      'use strict';
    
    var posX = pos.clientX,
        posY = pos.clientY;
      
      keyBtn.style.left = posX + "px";
    
      keyBtn.style.top = posY + "px";
      
      keyBtn.style.transform = "translate(-50%,-50%)";
      
      var openPhone = setTimeout(function () {
      
        passScreen.style.display = "none";
        keyBtn.style.display = "none";
        
        document.getElementsByClassName("background")[0].style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/a7/63/23/a76323ff0c803772e7fdc2bb6ba89eab.jpg')";
        
      },500);
      
    } 
    
  }
  
  keyBtn.onmouseup = function () {
    
    'use strict';
    
    keyBtn.style.display = "none";
    
  }
  // ========================================================================
  
  var homeScreen = document.getElementById("home"),
      callBtn = document.getElementById("calls-btn"),
      messageBtn = document.getElementById("message-btn"),
      appBtn = document.getElementById("apps-btn"),
      callScreen = document.getElementById("calls"),
      messageScreen = document.getElementById("messages"),
      appsScreen = document.getElementById("apps-screen");
  
  callBtn.onclick = function () {
    
    'use strict';
    
    homeScreen.style.opacity = "0";
    
    setTimeout(function () {
      homeScreen.style.display = "none";
    },400);
    
    callScreen.style.display = "block";
    callScreen.style.opacity = "1";
    
    messageScreen.style.display = "none";
    appsScreen.style.display = "none";
    
  };
  
  
  messageBtn.onclick = function () {
    
    'use strict';
    
    homeScreen.style.opacity = "0";
    
    setTimeout(function () {
      homeScreen.style.display = "none";
    },400);
    
    messageScreen.style.display = "block";
    messageScreen.style.opacity = "1";
    
    callScreen.style.display = "none";
    appsScreen.style.display = "none";
  
  };
  
  
  appBtn.onclick = function () {
    
    'use strict';
    
    homeScreen.style.opacity = "0";
    
    setTimeout(function () {
      homeScreen.style.display = "none";
    },400);
    
    appsScreen.style.display = "block";
    appsScreen.style.opacity = "1";
    
    callScreen.style.display = "none";
    messageScreen.style.display = "none";
  }
  
  var backBtn = document.getElementById("back-btn");
  
  backBtn.onclick = function () {
    
    'use strict';
    
    document.getElementById("nav-bar").style.display = "block";
    
    scrollScreen.style.top = "-100%";
    scrollScreen.style.opacity = "0";
    
    homeScreen.style.display = "block";
    homeScreen.style.opacity = "1";
    
    callScreen.style.opacity = "0";
    
    setTimeout(function () {
      callScreen.style.display = "none";
    },400);
    
    messageScreen.style.opacity = "0";
    
    setTimeout(function () {
      messageScreen.style.display = "none";
    },400);
    
    appScreen.style.opacity = "0";
    
    setTimeout(function () {
      appScreen.style.display = "none";
    },400);
    
  }
  
  function showOptionList() {
    
    'use strict';
    if(document.getElementById("options-list").style.transform == "rotateX(90deg)"){
      document.getElementById("options-list").style.transform = "rotateX(0)";
    
    } else {
      
      document.getElementById("options-list").style.transform = "rotateX(90deg)";
    } 
  }
  
  
  // ===============================================
  
  var sliderBtn = document.getElementsByClassName("slider"),
     sliderApps = document.getElementsByClassName("applications");
  
  sliderBtn[0].onclick = function () {
    
    'use strict';
    
    sliderApps[0].style.left = "0";
    
    sliderApps[1].style.left = "100%";
    
    this.classList.add("active");
    
    sliderBtn[1].classList.remove("active");
    
  }
  
  sliderBtn[1].onclick = function () {
    
    'use strict';
    
    sliderApps[0].style.left = "-100%";
    
    sliderApps[1].style.left = "0";
    
    this.classList.add("active");
    
    sliderBtn[0].classList.remove("active");
    
  }
  
  
  // ==============================================
  
  document.getElementById("nav-bar").onclick = function () {
    
    'use strict';
    
    this.style.display = "none";
    
    scrollScreen.style.top = "0";
    scrollScreen.style.opacity = "1"
    
  }
  
  document.getElementById("close-scroll-screen").onclick = function () {
    
    'use strict';
    
    document.getElementById("nav-bar").style.display = "block";
    
    scrollScreen.style.top = "-100%";
    scrollScreen.style.opacity = "0"
    
  }
  
  var soundBtn = document.getElementById("sound-btn");
  
  function changeSound() {
    
    'use strict';
    
    if(soundBtn.className == "fa fa-volume-up"){
      soundBtn.className = "fa fa-volume-down";
      soundBtn.style.color = "#81E13F";
    } else if(soundBtn.className == "fa fa-volume-down"){
      soundBtn.className = "fa fa-volume-off";
      soundBtn.style.color = "#fff";
    } else {
      soundBtn.className = "fa fa-volume-up";
      soundBtn.style.color = "#81E13F";
    }
    
  }
  
  // =============================
  
  var planeModeBtn = document.getElementById("plane-mode");
  
  
  function planeModeOn() {
    
    'use strict';
      
    if (planeModeBtn.className == "fa fa-plane white-icon") {
    planeModeBtn.className = "fa fa-plane green-icon";
    
  } else {
    planeModeBtn.className = "fa fa-plane white-icon";
  
  }
  
  }
  
  
  var blueBtn = document.getElementById("blue");
  
  
  function blueOn() {
    
    'use strict';
      
    if (blueBtn.className == "fa fa-bluetooth-b white-icon") {
    blueBtn.className = "fa fa-bluetooth-b green-icon";
    
  } else {
    blueBtn.className = "fa fa-bluetooth-b white-icon";
  
  }
  
  }