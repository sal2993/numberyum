// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

var todays_multiplier = (function() {
  var todays_num = 2;
  return todays_num;
})();

var correct_answers_counter = (function() {
  var counter = 0;
  return counter;
})();

var daily_product = [];
for (var i = 0; i <= 10; i++){
  daily_product.push(i);
}

//update_problem();


function check_answer() {
  var user_answer = document.forms["user_input"]["answer"].value;
  
  // check for invalid input
  if (typeof user_answer !== 'number'){
    alert("Please insert a number!!");
    return
  }
  var the_answer = todays_multiplier() * daily_products[correct_answers_counter()];
  if ( user_answer === the_answer) {
    alert("Good Job!");
    // correct_answers_counter++;
    //update_problem();
  }
}

//function update_problem() {
//  var correct_answer_tracker = correct_answers_counter;
//  document.getElementById("probset").innerHTML = todays_multiplier + "x" + 
//  daily_product[correct_answer_tracker];
//}
