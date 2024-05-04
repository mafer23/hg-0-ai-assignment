import pickle
from fastapi import FastAPI
import uvicorn

# Load model
def load_model():
    with open('./modelo_sentimiento.pkl', 'rb') as f:
        model = pickle.load(f)
    return model

model = load_model()

app = FastAPI()


@app.post('/predict')
def predict(data):
    example = ["I love this product"]
    # View model atributtes
    print(dir(model))
    prediction = model.predict(example)
    # print(prediction)
    return {'prediction': str(prediction)}


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=80)