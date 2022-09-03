// var main = { // index라는 변수의 속성으로 function을 추가한 이유 : 나중에 로딩된 js에 같은 이름의 function이 존재하면 덮어씌워짐. 따라서 index.js 만의 유효범위를 만들어 사용한다.
//     // 이렇게 되면 index 안에서만 function이 유효하기 때문에 다른 js와 겹칠 위험이 사라진다.
//
// };

$(document).ready(function(){ // 로딩과 동시 실행하게끔 하는 함수

});

function showDiv(element) {
    if (element.id == "placeName") {
        document.getElementById("placeNameSearch").style.display = "block";
        document.getElementById("locationSearch").style.display = "none";

    } else if (element.id == "location") {
        document.getElementById("placeNameSearch").style.display = "none";
        document.getElementById("locationSearch").style.display = "block";

    }
}

