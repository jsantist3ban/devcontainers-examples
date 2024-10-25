from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Example 2: Testing Python Flask App in Dev Containers!' + '\n'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)