from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()

class Input(BaseModel):
    description: str
    amount: float

model = joblib.load("model.pkl")

@app.post("/predict")
def predict(data: Input):
    # Simple mock prediction (replace with real logic)
    if data.amount > 5000:
        return {"category": "High-Value"}
    else:
        return {"category": "General"}
