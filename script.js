var like1 = 9
var like2 = 12
var like3 = 9
var likeCount1 = document.querySelector(".likes1")
var likeCount2 = document.querySelector(".likes2")
var likeCount3 = document.querySelector(".likes3")

function addLike1() {
    like1++;
    likeCount1.innerText = like1 + " like(s)"
}

function addLike2() {
    like2++;
    likeCount2.innerText = like2 + " like(s)"
}

function addLike3() {
    like3++;
    likeCount3.innerText = like3 + " like(s)"
}