let db=firebase.database();

db.ref("user").set({
    username:'Emil'
});

db.ref().on('value',function(){
    console.log('Hello world');
})







