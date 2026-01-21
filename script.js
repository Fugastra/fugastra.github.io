function share() {
   // Copy the text inside the text field
  navigator.clipboard.writeText("https://fugastra.github.io/");

  // Alert the copied text
  alert("📋 Link Copied 複製成功 :D");
} 

function addme() {
  var cpyt = document.getElementById("txt");

  cpyt.select();
  cpyt.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(cpyt.value);

  alert("📋 Link Copied 複製成功 :D");
}

function ham() {
  var x = document.getElementById("naa");
  if (x.className === "resnav") {
    x.className += " respon";
  } else {
    x.className = "resnav";
  }
} 
