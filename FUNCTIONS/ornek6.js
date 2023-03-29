const database={
    host:"localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde edildi");
    },
    update: function(id){
        console.log(` Id: ${id } güncellendi`);
    },
    delete: function(id){
        console.log(` Id: ${id } silindi`);
    }

}
console.log(database.host)
database.add();

database.delete(10);