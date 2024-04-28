const apiKey = '/Users/dr.chhunry/Good-Neighbor-1/client/src/api_key.json';

const imageUrl = 'https://github.com/Saitarun994/Good-Neighbor/blob/ed54b69011948b3fad5699b735a6c61fd3e70756/client/public/dog.jpg';

fetch(`https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    requests: [
      {
        image: {
          source: {
            imageUri: imageUrl,
          },
        },
        features: [
          {
            type: 'LABEL_DETECTION',
          },
        ],
      },
    ],
  }),
})
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
