from flask import Flask, request, jsonify
from detect import detect_labels, detect_logos
app = Flask(__name__)

@app.route('/api/detect', methods=['GET'])
def image_recognition():
    
    image_file = 'image-test/poodle.jpg'
    image_file_2 = 'image-test/poodle-found.jpg'
    

    # Process the image using the detect_labels function
    labels = detect_labels(image_file)
    logos = detect_logos(image_file)
    
    # Return the result as JSON
    return jsonify({'labels_1': detect_labels(image_file),
                    'logos_1': detect_logos(image_file),
                    'labels_2': detect_labels(image_file_2),
                    'logos_2': detect_logos(image_file_2),
                    })

if __name__ == '__main__':
    app.run(debug=True, port=8080)