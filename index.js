const btn = document.getElementById("btn")
const title = document.getElementById("title")
const paragraph = document.getElementById("activity-name")
btn.addEventListener("click", function(){
fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        paragraph.textContent = data.activity
        paragraph.classList.add("p-style")
        title.textContent = "🤖 Treasure of Exciting Ideas 🤖"
        document.body.classList.add("fun")
        btn.classList.add("btn-style")
    })

})