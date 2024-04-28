import os
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "C:\\Users\\PC\\OneDrive\\Desktop\\Code\\Hack Davis\\Good-Neighbor-1\\python\\api_key.json"

"""
Functions that are going to be detecting images
- Image Labels
- Image Logos
- Image Properties (e.g. colors)
- Image w/ Multiple Objects
"""

def detect_labels(image_file_path):
    """Detects labels in the image file."""
    from google.cloud import vision

    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # Read the image file in binary mode
    with open(image_file_path, 'rb') as image_file:
        content = image_file.read()

    # Perform label detection on the image content
    image = vision.Image(content=content)
    response = client.label_detection(image=image)
    labels = response.label_annotations

    # Extract label descriptions
    label_descriptions = [label.description for label in labels]

    return label_descriptions[:5]

def detect_logos(image_file_path):
    """Detects logos in the image file and returns a list of logo descriptions."""
    from google.cloud import vision

    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # Read the image file in binary mode
    with open(image_file_path, 'rb') as image_file:
        content = image_file.read()

    # Perform logo detection on the image content
    image = vision.Image(content=content)
    response = client.logo_detection(image=image)
    logos = response.logo_annotations

    # Extract logo descriptions and scores
    logo_info = [logo.description for logo in logos]

    return logo_info[:5]