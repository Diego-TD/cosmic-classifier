from fastapi import FastAPI
from pydantic import BaseModel
from joblib import load
import pandas as pd

app = FastAPI()
artifact = load("cosmic_classifier.joblib")

class PredictionInput(BaseModel):
    data: dict

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.post("/predict")
def predict(input: PredictionInput):
    df = pd.DataFrame([input.data])
    df = df[artifact["columns"]]
    X_scaled = artifact["scaler"].transform(df)
    pred = artifact["model"].predict(X_scaled)
    label = artifact["label_encoder"].inverse_transform(pred)[0]
    return {"class": label}