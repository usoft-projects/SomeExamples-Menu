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
    var list_categories = document.getElementById("list_categories")
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
        inter += '<li data-filter=".filter-'+keys[i]+'">'+keys[i]+'</li>'
    }
    list_categories.innerHTML = '<div class="col-lg-12 d-flex justify-content-center"><ul id="menu-flters"><li data-filter="*" class="filter-active">Hepsini Göster</li>'+
    inter + '</ul></div>'

    var list_menu = document.getElementById("list_menu")
    for(var i=0; i<keys.length;i++){
        for(var k=0; k<datas[i].length;k++){
             
            inter_2 += '<div class="col-lg-6 menu-item filter-'+keys[i]+'"><div class="menu-content"><a href="#!" id="'+datas[i][k].image+'"onclick="openimage(this)">'+
            datas[i][k].name+'</a><span>'+datas[i][k].price+' TL</span></div><div class="menu-ingredients">'+
            datas[i][k].details+'</div></div>'
        }
    }
    list_menu.innerHTML = inter_2
}, function (error) {
    console.log("Error: " + error.code);
});

function openimage(d){

    Swal.fire({
        title: " Menu Image",
        imageUrl: d.id,
        imageWidth: 400,
        imageHeight: 200,
        showCancelButton: true
      })
      
}