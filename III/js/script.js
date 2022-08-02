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
    
    var menu_list = document.getElementById("menu_list")
    for(var i=0;i<keys.length;i++){
        menu_list.innerHTML += '<button data-filter=".'+keys[i]+'">'+keys[i]+'</button>'
    }

    var products = document.getElementById("products")
    
    for(var i=0;i<keys.length;i++){
        for(var k=0;k<test[keys[i]].length;k++){
            products.innerHTML += '<div class="col-lg-6 grid-item '+keys[i]+'"><div class="menu-item"><div class="menu-image">'+
            '  <a href="menu.html"><img src="img/menu/1.jpg" alt=""></a></div><div class="menu-text"><h4><a href="menu.html">'+
            test[keys[i]][k].name+'</a><span>'+test[keys[i]][k].price+' TL'+'</span></h4><span>'+test[keys[i]][k].details+
            '</span></div></div></div>'
            
        }
        
    };

}, function (error) {
    console.log("Error: " + error.code);
});
