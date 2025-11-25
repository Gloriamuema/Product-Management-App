# Product Manager App

A simple **Vue 3** and **Pinia** powered product management application with a clean UI and functionality for adding, viewing, and filtering products. This app includes authentication (dummy login), product listing, search/filtering, and an add product form with dummy images.

---

## Features

- User authentication (dummy login: `admin` / `123`)
- Product listing with:
  - Product name, type/category, quantity, price, description
  - Dummy product images
- Add new products with form validation
- Search and filter products by name or type
- View product details
- Responsive layout using Tailwind CSS
- Persistent store with Pinia
- Routing with Vue Router


## Technologies Used

- Vue 3
- Pinia (State Management)
- Vue Router (Routing)
- Tailwind CSS (Styling)
- Vite (Dev server & build)
- JavaScript / ES Modules

---

## Getting Started

### Prerequisites

Make sure you have **Node.js >= 18** installed.

```bash
node -v
npm -v
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Gloriamuema/Product-Management-App.git
cd product-manager-vue
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser:

arduino
Copy code
http://localhost:5174
Login Credentials
For testing, use the dummy login:

Username: admin

Password: 123

Folder Structure
bash
Copy code
product-manager-vue/
src/
assets/        # Images and CSS
components/    # Reusable components (if any)
stores/        # Pinia stores
auth.js
products.js
views/         # Page components
Login.vue
Products.vue
ProductAdd.vue
ProductView.vue
App.vue
main.js
ndex.html
package.json
vite.config.js
# How to Use
Login with dummy credentials.

Navigate to Products to see all existing products.

Use the search bar or filter by type to find products.

Click Add Product to add a new product with:

Name

Quantity

Type/Category

Price

Description

Click View on a product to see details.

# Future Improvements
1. Connect to MySQL database for persistent storage.

2. Replace dummy authentication with JWT-based login.

3. Add product images upload instead of using dummy placeholders.

4. Add edit and delete functionality for products.

5. Implement pagination for large product lists.

6. Add user roles (admin, staff).


Contact
For questions, contact gloriamuema2021@gmail.com or open an issue in the repository.