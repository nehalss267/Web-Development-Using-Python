function Display(){
    //dynamically added element
    var element=document.createElement('p').innerHTML="Hello World"
    document.getElementById("out-string").append(element)
    
    // document.writeln("Hello World")
    // console.log("hello world")
    // window.alert("hello world")
}