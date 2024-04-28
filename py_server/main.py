from flask import Flask, request, jsonify
from detect import detect_labels, detect_logos

app = Flask(__name__)

@app.route('/api/detect', methods=['GET'])
def image_recognition():
    
    image_file1 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/arduino-found.webp'
    image_file2 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/arduino.jpg'
    image_file3 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/cellphone_found.jpg'
    image_file4 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/cellphone.jpg'
    image_file5 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/dog.jpg'
    image_file6 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/football-found.jpg'
    image_file7 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/football.jpg'
    image_file8 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/wallet.jpeg'
    image_file9 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/poodle.jpg'
    image_file10 = '/Users/dr.chhunry/Desktop/Coding /HACKDAVIS/Good-Neighbor/client/public/poodle-found.jpg'


    # Process the image using the detect_labels function
    labels1 = detect_labels(image_file1)
    labels2 = detect_labels(image_file2)
    labels3 = detect_labels(image_file3)
    labels4 = detect_labels(image_file4)
    labels5 = detect_labels(image_file5)
    labels6 = detect_labels(image_file6)
    labels7 = detect_labels(image_file7)
    labels8 = detect_labels(image_file8)
    labels9 = detect_labels(image_file9)
    labels10 = detect_labels(image_file10)
    # logos = detect_logos(image_file)
    
    # Return the result as JSON
    return jsonify({
        'Kina Lee': labels1,
        'Gregory Paul': labels2,
        'Harry Potter': labels3,
        'Steve Jobs': labels4,
        'Sai Tarun': labels5,
        'Beth Harmon': labels6,
        'Jacob Johns': labels7,
        'Jason Tatum': labels8,
        'Angelina Swanson': labels9,
        'Joe Jenkins': labels10
    })
    
    
# To do: Get the intel LLM running in another psh, use this as an end point
"""
Example Json Product:

	"messages": [
        {
		"from": "human",
		"content": "What is cnvrg.io?"
        }, 
        {
		"from": "chatbot",
		"content": "Cnvrg.io is a comprehensive ML/AI platform that provides tools and services to simplify the machine learning and artificial intelligence development process."
        }
    ]
}
@app.route('/api/llm', methods=['GET'])
def chatbot():
    reponse = intel_llm(messages)
    
    return jsonify({"response" : response(messages)
        
    })

""" 

if __name__ == '__main__':
    app.run(debug=True, port=8080)
