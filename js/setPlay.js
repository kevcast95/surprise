function setPlay() {
 let book = document.getElementById("story_book")
 let msg = document.getElementById("prev_msg_play")
 let sparkle = document.getElementById("sparkle")
 book.classList.remove("none")
 book.classList.add("bb-custom-wrapper")
 msg.classList.remove("prev_msg_play")
 msg.classList.add("none")
 sparkle.currentTime = 25;
 sparkle.play()
 console.log("hola brow");
}