function regist() {
    document.getElementById("but").onclick = function () {
        location.href = "login.html";
    };

}

function button() {
    img = document.getElementById("img")
    img1 = document.getElementById("img1")
    document.getElementById("but2").style.backgroundColor = "white"
    document.getElementById("but2").style.color = "#051c2d"
    document.getElementById("but1").style.backgroundColor = "#051c2d"
    document.getElementById("but1").style.color = "white"
    document.getElementById("img").style.zIndex =  "2"
    document.getElementById("img1").style.zIndex =  "1"
}

function button1() {
    img = document.getElementById("img")
    img1 = document.getElementById("img1")
    document.getElementById("but1").style.backgroundColor = "white"
    document.getElementById("but1").style.color = "#051c2d"
    document.getElementById("but2").style.backgroundColor = "#051c2d"
    document.getElementById("but2").style.color = "white"
    document.getElementById("img").style.zIndex =  "1"
    document.getElementById("img1").style.zIndex =  "2"

}

function login() {
    document.getElementById("button").onclick = function () {
        location.href = "nba.html";
    };

}

count = 1;
images(count);


function img(a) {
  images(count = a);
}

function images(a) {
   animes = document.getElementsByClassName("anime");
   crc = document.getElementsByClassName("circles");
  if (a > animes.length)
  {count = 1}    
  if (a < 1) 
  {count = animes.length}
  for (each = 0; each < animes.length; each++) {
    animes[each].style.display = "none";  
  }
  for (each = 0; each < crc.length; each++) {
    crc[each].className = crc[each].className.replace(" active", "");
  }
  animes[count-1].style.display = "block";  
  crc[count-1].className += " active";
}


function quiz() {
    a = document.getElementById("one");
    b = document.getElementById("two");
    c = document.getElementById("three");
    d = document.getElementById("four");
    e = document.getElementById("five");
    f = document.getElementById("six");
    g = document.getElementById("seven");
    h = document.getElementById("eight");
    i = document.getElementById("nine");
    j = document.getElementById("ten");
    k = document.getElementById("eleven");
    l = document.getElementById("twelve");
    m = document.getElementById("thr");
    n = document.getElementById("fort");
    o = document.getElementById("fivet");
    count1 = 0
    p = document.getElementById("p")

    if (a.checked == true){
        count1 += 1
    }
    
    if(f.checked == true) {
        count1 += 1
    }
    if(h.checked == true) {
        count1 += 1
    }
    if(k.checked == true) {
        count1 += 1
    }
    if(m.checked == true) {
        count1 += 1
    }

    if (count1 == 0) {
        p.innerHTML = "შენ საერთოდ არ ადევნებ თვალ ფინალს"
    }
    if (count1 == 1) {
        p.innerHTML = "შენ გაკვრით უყურებ ფინალს"
    }
    if (count1 == 2) {
        p.innerHTML = "შენ როცა დრო გაქვს, მაშინ უყურებ ფინალს"
    }
    if (count1 == 3) {
        p.innerHTML = "შენ ხანდახან უყურებ ფინალს"
    }
    if (count1 == 4) {
        p.innerHTML = "შენ თვალს ადევნებ ფინალს"
    }
    if (count1 == 5) {
        p.innerHTML = "შენ მაგრად უზიხარ ფინალს"
    }

}


let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );













// count = 1;
// slider(count);

// function img(a) {
//     slider(count = a)
// }

// function next_img(a) {
//     slider(count += a)
// }

// function slider(a) {
//     div = document.getElementsByClassName("div")
//     circles = document.getElementsByClassName("cicrcles")
//     if(a > div.length) {
//         count = 1
//     }
//     if (a < 1) {
//         count = div.length
//     }
//     for (each = 0; each < div.length; each++) {
//         div[each].style.display = "none";  
//       }

//     for (each = 0; each < circles.length; each++) {
//     circles[each].className = circles[each].id.replace("current", "");
//     }
//     div[count-1].style.display = "block";  
//     circles[count-1].className += "current";
// }







