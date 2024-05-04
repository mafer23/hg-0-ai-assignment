import pickle
from fastapi import FastAPI
import uvicorn

# Load lnoobw
with open('./data/lnoobw.txt', 'r') as f:
  lnoobw = f.read().splitlines()

# Load model
with open('./modelo_sentimiento.pkl', 'rb') as f:
    model = pickle.load(f)



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
        # prediction = model.predict([data])
        # return {'prediction': prediction[0]}
        print('Prediction')


    
    return {'prediction': suitable}


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=80)