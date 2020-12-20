function nazivi() {

    var x= new String();

    
    
    x[0]=document.getElementById("id1").innerHTML;
    x[1]=document.getElementById("id2").innerHTML;
    x[2]=document.getElementById("id3").innerHTML;
    x[3]=document.getElementById("id4").innerHTML;
    x[4]=document.getElementById("id5").innerHTML;
    x[5]=document.getElementById("id6").innerHTML; 

    
    for(let i=0;i<6;i++) {
        console.log(x[i]);
    }
    
}