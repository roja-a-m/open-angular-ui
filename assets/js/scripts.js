// $(document).ready
jQuery(function () {

  // sliderFunc();

  window.onload= function(){scrollFunction();sliderFunc("incomeSlider");sliderFunc("expenseSlider")};
  
  $(".sliderinput").on('change input',function(){
    sliderFunc(this.id)});
 
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (window.pageYOffset == 0) {
        $('.header').css({"background":"transparent"});
        $('#logo').width("67%");
      } 
      if (window.pageYOffset > 0) { 
        $('#logo').width("50%");
        $('.header').css("background","#fff");
      } 
    }
});

var sliderFunc= function(id){
  var ele=document.getElementById(id);
    var value = (ele.value-ele.min)/(ele.max-ele.min)*100
    ele.style.background = 'linear-gradient(to right, var(--theme) 0%, var(--theme) ' + value + '%, #bf94ea ' + value + '%, #bf94ea 100%)'
  }


// var sliderFunc= function(){
//   alert("in")
//   var value = (this.value-this.min)/(this.max-this.min)*100
//   this.style.background = 'linear-gradient(to right, var(--theme) 0%, var(--theme) ' + value + '%, #bf94ea ' + value + '%, #bf94ea 100%)'
// }