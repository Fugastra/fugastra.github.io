function share() {
   // Copy the text inside the text field
  navigator.clipboard.writeText("https://fugastra.github.io/");

  // Alert the copied text
  alert("Successfully copied link! Thank you for sharing :)) | 成功複製，感謝分享");
} 

function ham() {
  var x = document.getElementById("naa");
  if (x.className === "resnav") {
    x.className += " respon";
  } else {
    x.className = "resnav";
  }
} 
