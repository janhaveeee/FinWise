# FinWise

FinWise is an AI-powered personal finance platform that helps users manage income, expenses, savings goals, and receive smart budgeting suggestions. Built with React, Firebase, and Node.js.

##  Features

-  User Authentication (Firebase)
-  Dashboard with budget summaries (50/30/20 rule)
-  Log income & expenses with AI-suggested categories
-  Track savings/investment goals
-  Chat with an AI finance assistant
-  Learn personal finance with mini-lessons (LLM-powered)

##  Tech Stack

- **Frontend**: React, Bootstrap, Firebase Auth
- **Backend**: Node.js, Express, Firebase Admin SDK
- **Database**: Firestore
- **AI**: LLM integration (planned)

##  Setup Instructions

1. Clone the repo
2. Create `.env` in `frontend/` and add Firebase config using `REACT_APP_` prefix
3. Add `serviceAccountKey.json` to `backend/` (excluded in `.gitignore`)
4. Run both frontend and backend servers

##  Security

Sensitive keys and service accounts are excluded from the repo. Make sure:
- Firebase config uses `.env`
- Service account JSON is **not committed**



---


