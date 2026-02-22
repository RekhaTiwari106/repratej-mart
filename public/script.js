const category = localStorage.getItem("category");
const username = localStorage.getItem("username");

document.getElementById("title").innerText = category;

const data = {
 Electronics:["Mobile","Laptop","Geyser","Mixer","Table Lamp"],
 HomeDecor:["Wall Art","Sofa","Curtains","Lamp","Carpet"],
 Fashion:["Dress","Shoes","Sandals","Jacket"]
};

const container = document.getElementById("items");

data[category].forEach(item=>{
  const btn = document.createElement("button");
  btn.innerText = item;

  btn.onclick = async ()=>{
    await fetch("/save",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
         username,
         category,
         item
      })
    });
    alert("Saved in database");
  };

  container.appendChild(btn);
});