const postData = {
  data: "sex"
};

fetch(`http://ec2-54-185-33-120.us-west-2.compute.amazonaws.com/predict?data=${postData.data}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
