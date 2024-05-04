FROM python:3.9-slim

WORKDIR /code

RUN pip install --upgrade pip 

RUN pip install uvicorn fastapi pycaret

COPY . /code

EXPOSE 80

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]