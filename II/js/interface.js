
var config = {
    apiKey: "AIzaSyDAl-sAyQGr3tRpK5TwfPz5lVbfyvdD5TM",
    authDomain: "onurfirebase-8f143.firebaseapp.com",
    databaseURL: "https://onurfirebase-8f143.firebaseio.com",
    projectId: "onurfirebase-8f143",
    storageBucket: "onurfirebase-8f143.appspot.com",
    messagingSenderId: "611179792299",
    appId: "1:611179792299:web:dba6f8ab2cc03713c334ee"
};

firebase.initializeApp(config);
var database = firebase.database();
var ref = firebase.database().ref();
ref.on("value", function(snapshot) {
    var test = snapshot.val()
    var keys = Object.keys(test);
    test = (JSON.stringify(test))
    test = (JSON.parse(test))

    var categories = document.getElementById("categories")
    categories.innerHTML = ""
    var $text = $('#categories');
    for(var i=0;i<keys.length;i++){
        $text.append('<div class="single-blog relative" style="border-radius: 44px ;"><div class="section-bg color" style="border-radius: 44px ;">'+
        '<div class="section-bg" style="background-image: url(images/blog/blog-1.jpg);border-radius: 44px " ></div> </div><div class="post-date">Bolu Mangal Keyfi - Kategoriler</div>'+
        '<div class="space-10"></div><a href="#'+keys[i]+'"> <h3>'+keys[i]+'</h3></a></div><br>');
    }
    
    var products = document.getElementById("products")
    for(var i=0;i<keys.length;i++){
        for(var k=0;k<test[keys[i]].length;k++){
            products.innerHTML += '<div class="col-xs-12 col-sm-6"><div class="single-menu" id="'+keys[i]+'"><div class="media" style="border-radius: 44px ; box-shadow: -9px 9px 0px -2px #272643;"> <div class="media-left">'+
            ' <div class="menu-img" style="background-image: url(&apos;'+test[keys[i]][k].image+'&apos;)"><img src="images/menu/ovr.png" alt="">'+
            '</div></div><div class="media-right"> <table class="table"><tr><td><a href="#"><h3 class="menu-title">'+test[keys[i]][k].name+'&emsp;&emsp;&emsp;&emsp;&emsp;</h3>'+
            ' </a></td><td><div class="menu-rate">'+test[keys[i]][k].price+' TL </div></td></tr></table><p>'+test[keys[i]][k].details+'</p>'+
            '</div></div></div><div class="space-30"></div></div>'
        }
    }

}, function (error) {
    console.log("Error: " + error.code);
});
