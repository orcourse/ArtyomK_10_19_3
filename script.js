document.getElementById("byrger").onclick = function(){
    addMenu()
}

function addMenu(){
    document.getElementById("menu1").classList.toggle("show");
    document.getElementById("menu2").classList.toggle("show");
    document.getElementById("block1").classList.toggle("sdvig");
}
var serv1 =document.getElementById("service1");
 var btn1 = document.getElementById("service_btn1").onclick; 
 var serv2 =document.getElementById("service2");
 var btn2 = document.getElementById("service_btn2").onclick;
 var serv3 =document.getElementById("service3");
 var btn3 = document.getElementById("service_btn3").onclick;
 var serv4 =document.getElementById("service4");
 var btn4 = document.getElementById("service_btn4").onclick;// =function(){
//     addHeight()
// }
function addHeight1(){
document.getElementById("service_btn1").classList.toggle("service_btn_minus");    
if(serv1.style.height == '16px') {
serv1.style.height = '120px'}
else {
serv1.style.height = '16px'}
return false;
}
function addHeight2(){
document.getElementById("service_btn2").classList.toggle("service_btn_minus");    
if(serv2.style.height == '16px') {
serv2.style.height = '120px'}
else {
serv2.style.height = '16px'}
return false;
}
function addHeight3(){
document.getElementById("service_btn3").classList.toggle("service_btn_minus");    
if(serv3.style.height == '16px') {
serv3.style.height = '120px'}
else {
serv3.style.height = '16px'}
return false;
}
function addHeight4(){
document.getElementById("service_btn4").classList.toggle("service_btn_minus");    
if(serv4.style.height == '16px') {
serv4.style.height = '120px'}
else {
serv4.style.height = '16px'}
return false;
}
document.getElementById("name1").onclick= function(){
    none1()
}
function none1(){
    document.getElementById("svgg1").classList.add("in");
}
document.getElementById("email").onclick= function(){
    none2()
}
function none2(){
    document.getElementById("svgg2").classList.add("in");
}
document.getElementById("text").onclick= function(){
    none3()
}
function none3(){
    document.getElementById("svgg3").classList.add("in");
}