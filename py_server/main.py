from flask import Flask, request, jsonify
from detect import detect_labels, detect_logos

app = Flask(__name__)

@app.route('/api/detect', methods=['GET'])
def image_recognition():
    
    image_file = 'image-test/poodle.jpg'
    image_file_2 = 'image-test/poodle-found.jpg'
    

    # Process the image using the detect_labels function
    labels = detect_labels(image_file)
    # logos = detect_logos(image_file)
    
    # Return the result as JSON
    return jsonify({'labels': labels
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
