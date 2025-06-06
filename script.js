function generateRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
}


    function property(){
        var left = Math.random()*300;
        var top = Math.random()*200;
        var wh = (Math.random()*300)+100;
        document.getElementById("box").style.left = left + 'px';
        document.getElementById("box").style.top = top + 'px';
        document.getElementById("box").style.height = wh + 'px';
        document.getElementById("box").style.width = wh + 'px';
        document.getElementById("box").style.display = "block";
        document.getElementById("box").style.backgroundColor= generateRandomColor();




    }

    var d = new Date().getDate();
    property();
    document.getElementById("box").onclick=function(){
        document.getElementById("box").style.display="none";
        var c = new Date().getDate();
        var a = (d-c)/1000;
        alert(a);
        property();
    }