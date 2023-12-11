
// 모달 열기
document.getElementById('sit_modalButton').onclick = function() {
  document.getElementById('sit_modal').style.display = "block";
}
const order_drink = document.getElementById('order_drinkButton');
order_drink.onclick = function() {
    document.getElementById('orderDrink_modal').style.display = "block";
}

document.getElementById('reservation_submit').onclick = function() {
  document.getElementById('reservation_complete').style.display = "block";
}

// 모달 닫기
document.getElementsByClassName('close')[0].onclick = function() {
  document.getElementById('sit_modal').style.display = "none";
}
document.getElementById('closeOrder').onclick = function() {
  document.getElementById('orderDrink_modal').style.display = "none";
}

// 모달 바깥 부분을 클릭하면 닫기
window.onclick = function(event) {
  var modal = document.getElementById('sit_modal');
  var order_modal = document.getElementById('orderDrink_modal');
  var complete = document.getElementById('reservation_complete');
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == order_modal) {
  order_modal.style.display = "none";
  }
  if (event.target == complete) {
  complete.style.display = "none";
  }
}

function showText(button) {
    var buttonText = button.innerText;
    document.getElementById('selectedSit').value = buttonText;
    document.getElementById('sit_modal').style.display = "none";
}

document.getElementById('order_americano').onclick = function() {
    document.getElementById('OrderDrinkResult').value = "아메리카노 1,500원";
    document.getElementById('orderDrink_modal').style.display = "none";
}
document.getElementById('order_latte').onclick = function() {
    document.getElementById('OrderDrinkResult').value = "카페라떼 2,000원";
    document.getElementById('orderDrink_modal').style.display = "none";
}
document.getElementById('order_icetea').onclick = function() {
    document.getElementById('OrderDrinkResult').value = "아이스티 1,500원";
    document.getElementById('orderDrink_modal').style.display = "none";
}
document.getElementById('order_espresso').onclick = function() {
    document.getElementById('OrderDrinkResult').value = "에스프레소 1,000원";
    document.getElementById('orderDrink_modal').style.display = "none";
}
