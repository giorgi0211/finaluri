// function regist() {
//     document.getElementById("but").onclick = function () {
//         location.href = "login.html";
//     };

// }

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


count = 1;
images(count);


function img2(a) {
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


function demo(value) {
    document.getElementById("p").innerHTML = value;
  }

function myPromise() {
    let prom = new Promise(function(res, rej) {
        // "Producing Code" (May take some time)
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
            res("შენ საერთოდ არ ადევნებ თვალ ფინალს")
        }
        if (count1 == 1) {
            res("შენ გაკვრით უყურებ ფინალს")
        }
        if (count1 == 2) {
            res("შენ როცა დრო გაქვს, მაშინ უყურებ ფინალს")
        }
        if (count1 == 3) {
            res("შენ ხანდახან უყურებ ფინალს")
        }
        if (count1 == 4) {
            res("შენ თვალს ადევნებ ფინალს")
        }
        if (count1 == 5) {
            res("შენ მაგრად უზიხარ ფინალს")
        }
        else {
            rej("error")
        }
        });
        
        prom.then(
          function(value) { demo(value) },
          function(error) { demo(error) }
        );

}



function registration() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("re_pass").value;
    var date = document.getElementById("date");
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var num = document.getElementById("num").value;
   

    var lower = /[a-z]+$/
    var upper = /[A-Z]+$/
    var middle = /(?=.*?[a-z])(?=.*?[0-9])/
    var middle1 = /(?=.*?[A-Z])(?=.*?[0-9])/
    var hard = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/
    var so_hard = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
    var em = /([a-zA-Z0-9_\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/


    if(email == '') {
        alert("გთხოვთ შეიყვანეთ იმეილი")
    }
    if(em.test(email) == false) {
        alert("შეიყვანეთ ვალიდური მეილი")
    }


    if(pass == '') {
        alert("გთხოვთ შეიყვანეთ პაროლი")
    }

    if(lower.test(pass) || upper.test(pass)) {
        alert("პაროლი სუსტია")

    }
    if(middle.test(pass) || middle1.test(pass)) {
        alert("პაროლის სიძლიერე საშუალოა")
    }

    if(hard.test(pass)) {
        alert("პაროლი ძლიერია")
    }

    if(so_hard.test(pass)) {
        alert("პაროლი ძალიან ძლიერია")
    }

    if(repass == '') {
        alert("გთხოვთ გაიმეორეთ პაროლი")
    }

    if(repass != pass) {
        alert("პაროლები უნდა ემთხვეოდეს")
    }
    if(name == '') {
        alert("გთხოვთ შეიყვანეთ სახელი")
    }
    if(country == '') {
        alert("გთხოვთ შეიყვანეთ ქვეყანა")
    }
    if(city == '') {
        alert("გთხოვთ შეიყვანეთ ქალაქი")
    }
    if(num == '') {
        alert("გთხოვთ შეიყვანეთ მობ. ნომერი")
    }
    alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია")

    date.value = new Date();

}

function login() {
    var login = document.getElementById("login").value;
    var pasw = document.getElementById("pasw").value;
    var log = /([a-zA-Z0-9_\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/


    if(login == '') {
        alert("შეიყვანეთ მეილი")
    }
    if(pasw == '') {
        alert("შეიყვანეთ პაროლი")
    }
    if(log.test(login) == false) {
        alert("მეილი არასწორია")
    }
    else {
        document.getElementById("button").onclick = function () {
            location.href = "nba.html";
        }
    }



}













