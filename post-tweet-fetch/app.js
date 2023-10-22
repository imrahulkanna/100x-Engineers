document.addEventListener("DOMContentLoaded", function () {
  const tweetForm = document.getElementById("tweetForm");
  const tweetText = document.getElementById("tweetText");
  const responseDiv = document.getElementById("response");

  tweetForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const tweet = tweetText.value;

    fetch("https://one00x-data-analysis.onrender.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({post:{content: tweet}}),
    })
      .then((response) => {
        console.log(response);
        // console.log("Response:", response.status, response.statusText);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        console.log(data)
        responseDiv.innerHTML = `Tweet posted successfully! Tweet Content: ${data.content}`;
        responseDiv.style.fontWeight = 700;
      })
      .catch((error) => {
        responseDiv.innerHTML = `Error: ${error.message}`;
      });
    tweetText.value ='';
  });
});
