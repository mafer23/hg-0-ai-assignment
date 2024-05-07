import joblib
from fastapi import FastAPI
import uvicorn

# Load lnoobw
with open('./data/lnoobw.txt', 'r') as f:
  lnoobw = f.read().splitlines()

# Load model
with open('./modelo_sentimiento.pkl', 'rb') as f:
    model = joblib.load(f)


def contains_lnoobw(text, words):
    for word in words:
        if word in text:
            return 0
    return 1
    
   
app     = FastAPI()

@app.post('/predict')
def predict(data):
    suitable = 1
    suitable = contains_lnoobw(data, lnoobw)

    if suitable:
        try:
            prediction = model.predict(data)
            suitable = prediction
        except:
            suitable = 1
        
    return {'prediction': suitable}


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)