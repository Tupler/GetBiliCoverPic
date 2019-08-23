function sb(){
 
var av =avnum.av.value;
getresult(av);
}
function getresult(a){
    　　let gethtml = new XMLHttpRequest();
        gethtml.onreadystatechange = function () {
      　　　　if (gethtml.readyState === 4 && (gethtml.status === 200 || gethtml.status === 304)) {
      　　　　　　
                if(gethtml.responseText!=""){

                    document.getElementById("info").style="display:true";
document.getElementById("picurl").innerText="点我跳转到大图";
                    document.getElementById("picurl").href=gethtml.responseText;
                    //console.log();

                }
                else{
document.getElementById("info").style="display:true";
                    document.getElementById("picurl").innerText="Error:无法查到此AV号";
document.getElementById("picurl").href="#";
                }
      　　　　}
      　　};
      gethtml.open("GET","/bilibilipic.php?av="+a,true);
      gethtml.send();

}
