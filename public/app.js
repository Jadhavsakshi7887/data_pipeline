async function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  output.innerText = "Running...";

  try {
    const res = await fetch("https://cut8ia-mq1ko5.sakshijadhav-0fv5qdh4aw.motia.cloud/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: input }) 
    });

    const data = await res.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = "Error calling API";
  }
}
