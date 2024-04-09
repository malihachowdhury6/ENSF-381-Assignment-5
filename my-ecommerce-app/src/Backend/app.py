from flask import Flask, request, jsonify, redirect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
 {
 "id": 1,
 "name": "Product 1",
 "description": "Description for Product 1",
 "price": 10.99,
 "image": 'images/product1.png'
 },
 {
 "id": 2,
 "name": "Product 2",
 "description": "Description for Product 2",
 "price": 20.99,
 "image": 'images/product2.jpg'
 },
 {
 "id": 3,
 "name": "Product 3",
 "description": "Description for Product 3",
 "price": 10.99,
 "image": 'images/product3.jpg'
 },
 {
 "id": 4,
 "name": "Product 4",
 "description": "Description for Product 4",
 "price": 10.99,
 "image": 'images/product4.jpg'
 },
 {
 "id": 5,
 "name": "Product 5",
 "description": "Description for Product 5",
 "price": 10.99,
 "image": 'images/product5.jpg'
 },
 {
 "id": 6,
 "name": "Product 6",
 "description": "Description for Product 6",
 "price": 10.99,
 "image": 'images/product6.jpg'
 },
 {
 "id": 7,
 "name": "Product 7",
 "description": "Description for Product 7",
 "price": 10.99,
 "image": 'images/product7.jpg'
 },
 {
 "id": 8,
 "name": "Product 8",
 "description": "Description for Product 8",
 "price": 10.99,
 "image": 'images/product8.jpg'
 },
 {
 "id": 9,
 "name": "Product 9",
 "description": "Description for Product 9",
 "price": 10.99,
 "image": 'images/product9.jpg'
 },
 {
 "id": 10,
 "name": "Product 10",
 "description": "Description for Product 10",
 "price": 10.99,
 "image": 'images/product10.jpg'
 }
]

# Initialize an empty list to store user data
users = []

# Define the route for user registration
@app.route('/register', methods=['POST'])
def register_user():
    registration_data = request.get_json()
    
    username = registration_data.get('username')
    password = registration_data.get('password')
    email = registration_data.get('email')
    
    for user in users:
        if user['username'] == username:
            return jsonify({'success': False, 'message': 'error': 'Username already exists'}), 400
    
    # Add the new user to the list
    new_dict = {'username': username, 'password': password, 'email': email}
    users.append({new_dict})
    
    return jsonify({'success': True, 'message': 'User registered successfully'}), 200

# Define the route for user authentication
@app.route('/user-auth', methods=['POST'])
def authenticate_user():
    login_data = request.get_json()
    
    username = login_data.get('username')
    password = login_data.get('password')
    
    for user in users:
        if user['username'] == username and user['password'] == password:
            # Redirect the user to the Product page if credentials are correct
            return redirect('/product')
    
    # If the username and password are incorrect, return an error message
    return jsonify({'error': 'Incorrect username or password'}), 401

# Define the route for getting product information
@app.route('/Products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/users', methods=['GET'])
def userss():
    return jsonify(users)


if __name__ == '__main__':
    app.run(debug=True)