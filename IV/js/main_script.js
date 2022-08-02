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
    var list_categories = document.getElementById("categories")
    // console.log(snapshot.val());
    // console.log(snapshot.val().Makarnalar[0].price)
    var test = snapshot.val()
    // console.log(test)
    var keys = Object.keys(test);
    var datas =  Object.values(test) 
    console.log(keys)
    console.log(Object.values(test))
    var inter = ""
    var inter_2 = ""
    for(var i=0;i<keys.length;i++){
        inter += '<li data-name=".'+keys[i].toLowerCase()+'"> <a href="#!"> '+keys[i]+'</a></li>'
    }
    list_categories.innerHTML = '<li class="active" data-name="*"> <a href="#!">All Menu</a></li>'+ inter

    var list_menu = document.getElementById("menu_tabs")
    for(var i=0; i<keys.length;i++){
        for(var k=0; k<datas[i].length;k++){
            
            inter_2 += '<div class="single_menu col-sm-4 col-xs-12 All Menu '+keys[i].toLowerCase()+'"> <div class="menu_content wow fadeIn" data-wow-delay="0s">'+
                        '<h5>'+datas[i][k].name+'</h5> <p>'+datas[i][k].details+'</p><span>Fiyat: '+datas[i][k].price+' TL</span></div></div>'
        }

    }
    list_menu.innerHTML = inter_2
}, function (error) {
    console.log("Error: " + error.code);
});