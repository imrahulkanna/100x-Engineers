const URL = "https://one00x-data-analysis.onrender.com/assignment?email=kannarahul05@gmail.com"

const getMostUsedJargon = (dataset) => {
  let keyCount = new Map();

  dataset.forEach((data) => {
    if (keyCount.has(data)) {
      keyCount.set(data, keyCount.get(data) + 1);
    } else {
      keyCount.set(data, 1);
    }
  });

  let [mostUsedJargon, maxCount] = ["", 0];

  keyCount.forEach((value, key) => {
    if(value > maxCount) {
      maxCount = value
      mostUsedJargon = key;
    }
  })

  return mostUsedJargon;
};

const retrieveDataset = async() => {
  const response = await fetch(URL);
  const assignmentID = response.headers.get("x-assignment-id");
  const dataset = await response.json();

  return { assignmentID, dataset }
}

const checkAnswer = async(data) => {
  const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const status = await res.json();
    console.log(status)
}

const dataAnalysis = async() => {
  try {
    const { assignmentID, dataset } = await retrieveDataset();
    const mostUsedJargon = getMostUsedJargon(dataset);

    const mydata = {
      assignment_id: assignmentID,
      answer: mostUsedJargon,
    };
    
    console.log(mydata);
    await checkAnswer(mydata);
  } catch (error) {
    console.log(`ERROR: ${error.message}`)
  }
  
};

dataAnalysis();