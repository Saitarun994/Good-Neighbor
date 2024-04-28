import { ImageAnnotatorClient } from '@google-cloud/vision';

// Creates a client
const client = new ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = '/Users/dr.chhunry/Good-Neighbor-1/client/public/dog.jpg';

async function labelDetection(fileNames) {
  try {
    // Performs label detection on the local file
    const [result] = await client.labelDetection(fileNames);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to perform label detection
labelDetection('/Users/dr.chhunry/Good-Neighbor-1/client/public/dog.jpg');
labelDetection('/Users/dr.chhunry/Good-Neighbor-1/client/public/wallet.jpeg');
labelDetection('/Users/dr.chhunry/Good-Neighbor-1/client/public/phone.webp');