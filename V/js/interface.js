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

    console.log(test)
    var categories_menu = document.getElementById("categories_menu")
    var menu = ""
    var cat = ""
    for(var i=0;i<keys.length;i++){
        cat += '<div class="ctontainer"><div class="p-b-58"><h3 class="l2-txt7 txt-center p-b-4 respon8">'+keys[i]+'</h3><p class="m3-txt1 txt-center"> Keşfet ve Dene </p>'+
        '</div><div class="row"><div class="col-md-10 col-lg-6 m-lr-auto"><div class="p-r-30 p-r-0-lg">'
        // for(var k=0;k<test[keys[i]].length;k++){
        //     menu += '<div class="block4 flex-w p-b-30"><div class="block4-pic"><a href="#"><img src="'+test[keys[i]][k].image+'" alt="IMG-MENU"> </a></div>'+
        //     '<div class="block4-txt flex-col-m"><div class="dis-flex">a href="#" class="block4-txt-name m2-txt7 trans-03"> '+test[keys[i]][k].name+' </a>'+
        //     '<div class="wsize11 fs-18 block4-txt-lineconnect"></div><span class="block4-txt-more m2-txt6 trans-05">'+test[keys[i]][k].price+' TL </span></div></div>'
        // }
        categories_menu.innerHTML += cat
    }


    // var products = document.getElementById("products")
    // for(var i=0;i<keys.length;i++){
    //     for(var k=0;k<test[keys[i]].length;k++){
    //         products.innerHTML += '<div class="col-xs-12 col-sm-6"><div class="single-menu"><div class="media"> <div class="media-left">'+
    //         ' <div class="menu-img" style="background-image: url(&apos;'+test[keys[i]][k].image+'&apos;)"><img src="images/menu/ovr.png" alt="">'+
    //         '</div></div><div class="media-right"> <table class="table"><tr><td><a href="#"><h3 class="menu-title">'+test[keys[i]][k].name+'</h3>'+
    //         ' </a></td><td><div class="menu-rate">'+test[keys[i]][k].price+' TL </div></td></tr></table><p>'+test[keys[i]][k].details+'</p>'+
    //         '</div></div></div><div class="space-30"></div></div>'
            
    //     }
        
    // }

}, function (error) {
    console.log("Error: " + error.code);
});

