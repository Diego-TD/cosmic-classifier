# Cosmic classifier
Web app and ML algorithm to classify space objects

## how to run:

### 1. Web App

install dependencias
```bash
npm i
```

frontend
```
npm run dev
```

backend
```
npx convex dev
```


### 2. ML API local use
create venv, if first time
```bash
# python or python 3
python -m venv venv

```

load .venv
```bash
source venv/bin/activate
```

install dependencies
```bash
pip install -r requirements.txt
```

run api on deb
```bash
fastapi dev
```

use ngrok to open a tunnel and use the api with public url
```bash
ngrok http 8000
```
