var xmlHTTP;

function $_xmlHttpRequest()
{
    if(window.ActiveXObject)
    {
        xmlHTTP=new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        xmlHTTP=new XMLHttpRequest();
    }
}

function IP()
{
  var ip = document.getElementById('IP').value;
  if (ip==""){//檢查是否輸入
    alert("請輸入IP");
  }
  else{
    return ip;
  }
}

function check(num)
{
  $_xmlHttpRequest();

    xmlHTTP.open("GET","http://"+IP()+"/?pinD3="+num,true);
    console.log(xmlHTTP.open("GET","http://"+IP()+"/?pinD3="+num,true));

  xmlHTTP.onreadystatechange=function check_user()
  {
    if(xmlHTTP.readyState == 4 && xmlHTTP.status == 200)
    {
      document.getElementById("message").innerHTML=xmlHTTP.responseText;
    }
  }
  xmlHTTP.send();
}
