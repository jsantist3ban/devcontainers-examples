FROM python:3.13.0

WORKDIR /app

COPY example2 /app
RUN pip3 install -r requirements.txt

EXPOSE 8000

CMD ["python", "app.py"]