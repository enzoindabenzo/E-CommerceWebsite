# Agro BLM – E-Commerce Platform for Agricultural Trade

![Homepage](docs/screenshots/homepage.png)

> *A powerful, full-stack e-commerce solution tailored for the agricultural sector in Albania and beyond, enabling bulk buying and selling of agricultural products through a secure, scalable, and user-friendly platform.*

---

## 📖 Project Overview

**Agro BLM** is an advanced e-commerce platform designed to streamline agricultural trade by connecting farmers, agribusinesses, and suppliers. It facilitates the purchase and sale of products such as specialized seeds, organic and chemical fertilizers, approved pesticides, modern equipment (e.g., small tractors, drip irrigation systems), and durable workwear for agricultural environments. The platform is intuitive, minimizing technological barriers for users with limited digital skills, and supports bulk transactions with features like price comparison, personalized offers, and secure payments.

- **Objective**: Centralize agricultural trade through a digital ecosystem.
- **Target Users**: Farmers, agribusinesses, and suppliers.
- **Key Features**: Product catalog, user authentication, secure payments, order tracking, and admin dashboard.

---

## 🛠️ Project Setup Guide

### 1. Install Prerequisites

- **Node.js** and **npm** → [Install Guide](https://nodejs.org/en/download/)
- **MySQL 8** → [Install MySQL](https://dev.mysql.com/downloads/installer/)
- (Optional) **HeidiSQL** for database management → [Download HeidiSQL](https://www.heidisql.com/)

### 2. Clone the Repository

```bash
git clone https://github.com/webdeveloperALB/Agro-commerce.git
cd Agro-commerce
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder:

```env
DATABASE_URL="mysql://root:your_password@localhost:3306/agroblm"
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret
SENDGRID_API_KEY=your_sendgrid_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Create another `.env` in the `/server` folder:

```env
DATABASE_URL="mysql://root:your_password@localhost:3306/agroblm"
```

> **Note**: Replace `your_password`, `your_nextauth_secret`, `your_jwt_secret`, `your_sendgrid_api_key`, and `your_stripe_secret_key` with actual values.

### 4. Install Dependencies

```bash
npm install
cd server
npm install
```

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Insert Demo Data

```bash
cd server/utils
node insertDemoData.js
```

### 7. Start Backend and Frontend

```bash
cd server && node app.js       # Backend
cd .. && npm run dev          # Frontend in a new terminal
```

### 8. Access the App

Navigate to: [http://localhost:3000](http://localhost:3000)

---

## 🌟 Features Overview

Agro BLM offers a comprehensive set of features to enhance agricultural trade, as detailed in the project documentation:

- 🛒 **Product Catalog**: Browse and filter products by category (e.g., seeds, pesticides), price, and availability. Example: Search for "fara domate" to find tomato seeds.
- 🔐 **User Authentication**: Secure registration and login with JWT, email verification via SendGrid, and password recovery.
- 💳 **Checkout and Payments**: Integrated with Stripe for secure payments, with PayPal integration in progress. Supports bulk orders (e.g., 500 kg of fertilizers).
- ❤️ **Wishlist**: Save products for future purchases (planned, pending confirmation of implementation).
- 🧾 **Order Management**: Track orders with statuses like "në përpunim" or "të dorëzuar" and receive email notifications.
- 🧠 **Admin Dashboard**: Manage users, products, orders, and categories with a centralized interface.
- 📊 **Loyalty Program**: Earn points for purchases (planned, e.g., 1 point per 100 ALL spent) for discounts or free products.
- 📩 **User Engagement**: Email notifications for offers and planned real-time chat with Socket.IO.
- 🔒 **Security**: JWT authentication, input sanitization, HTTPS/SSL, CSRF protection, and rate limiting.
- 📈 **Scalability**: Redis caching, Nginx load balancing, and MySQL replication for high performance.

---

## 📸 User Interface & Admin Panel

### 🧑‍🌾 User Side

- ![Homepage](docs/screenshots/homepage.png) *Figure 4: Pamja e faqes kryesore*
- ![Register & Login](docs/screenshots/register-login.png) *Figure 5: Register & Login*
- ![Product Search and Filter](docs/screenshots/product-search.png) *Figure 6: Kërkimi dhe filtrimi i produkteve*
- ![Single Product Page](docs/screenshots/product-detail.png) *Figure 7: Shfaqja e produktit të vetëm*
- ![Cart Page](docs/screenshots/cart.png) *Figure 8: Cart Page*
- ![Checkout](docs/screenshots/checkout.png) *Figure 9: Checkout*
- ![Wishlist](docs/screenshots/wishlist.png) *Figure 10: Wishlist*
- ![Latest Offers](docs/screenshots/offers.png) *Figure 11: Ofertat e fundit*
- ![User Communication](docs/screenshots/communication.png) *Figure 12: Komunikimi dhe angazhimi me përdoruesit*
- ![How to Buy](docs/screenshots/how-to-buy.png) *Figure 24: Si të blejmë*
- ![About Us](docs/screenshots/about-us.png) *Figure 17: Rreth nesh*
- ![Company Profile](docs/screenshots/company-profile.png) *Figure 18: Profili i kompanisë*
- ![Collaborate with Us](docs/screenshots/collaborate.png) *Figure 19: Bashkëpunoni me ne*
- ![Terms of Use](docs/screenshots/terms.png) *Figure 20: Termat e përdorimit*
- ![Privacy Policy](docs/screenshots/privacy-policy.png) *Figure 21: Politika e privatësisë*
- ![Complaints Form](docs/screenshots/complaints.png) *Figure 22: Formulari i ankesave*
- ![Partners](docs/screenshots/partners.png) *Figure 23: Partnerët*

### ⚙️ Admin Side

- ![Orders and Products](docs/screenshots/orders-products.png) *Figure 25: Porosi dhe produkte*
- ![Users and Categories](docs/screenshots/users-categories.png) *Figure 26: Përdorues edhe kategori*
- ![Admin Dashboard](docs/screenshots/admin-dashboard.png) *Figure 27: Paneli i administratorit*

> 📁 Place all screenshots in `docs/screenshots/` for auto-preview on GitHub. Ensure file names match the figures listed (e.g., `homepage.png`, `register-login.png`).

---

## 🧱 Tech Stack

| Layer         | Technologies Used                        |
|---------------|-----------------------------------------|
| **Frontend**  | Next.js 14 · React · Tailwind CSS 3     |
| **Backend**   | Node.js 18 · Express.js 4 · Sequelize   |
| **Auth**      | JSON Web Tokens (JWT) · NextAuth.js     |
| **Payments**  | Stripe · PayPal (in development)        |
| **Database**  | MySQL 8 · Redis (for caching)           |
| **Services**  | SendGrid (email) · Socket.IO (planned)  |
| **Dev Tools** | Nodemailer · dotenv · VS Code · HeidiSQL|

---

## 📂 Project Structure

```
Agro-commerce/
├── frontend/                    # Next.js frontend
│   ├── components/             # Reusable React components (e.g., ProductCard.js)
│   ├── pages/                  # Next.js routes (e.g., index.js, product/[id].js)
│   ├── public/                 # Static assets (e.g., images, icons)
│   ├── styles/                 # Tailwind CSS and global styles
│   ├── utils/                  # Utility functions (e.g., formatPrice.js)
│   └── api/                    # Frontend API endpoints
├── backend/                    # Express backend
│   ├── controllers/            # Business logic (e.g., authController.js)
│   ├── models/                 # Sequelize ORM models (e.g., Product, User)
│   ├── routes/                 # API routes (e.g., /api/products)
│   ├── middleware/             # Request verification (e.g., JWT, input sanitization)
│   ├── services/               # External services (e.g., emailService.js, paymentService.js)
│   ├── config/                 # Server and database configurations
│   ├── database/               # MySQL initialization scripts
│   └── utils/                  # Data scripts, email sender, etc.
├── .env                        # Root environment config
└── server/.env                 # Backend environment config
```

---

## 🔒 Security and Scalability

### Security
- **JWT Authentication**: 24-hour tokens for secure user sessions.
- **Input Sanitization**: Uses `express-validator` to prevent SQL Injection and XSS attacks.
- **HTTPS/SSL**: Encrypts data with Let's Encrypt certificates.
- **CSRF Protection**: Token-based protection for POST requests.
- **Rate Limiting**: Limits API requests to 100 per minute per IP using `express-rate-limit`.
- **Access Policies**: MySQL restricts database operations with limited privileges.

### Scalability
- **Redis Caching**: Caches frequent queries (e.g., product lists) for faster response times.
- **Nginx Load Balancing**: Distributes traffic across multiple Node.js servers.
- **Backups**: Full MySQL backups every 24 hours, incremental every 6 hours, stored on AWS S3.
- **Horizontal Scaling**: Supports additional Node.js servers and MySQL master-slave replication.
- **Monitoring**: Uses tools like Prometheus for real-time performance optimization.

---

## 📈 Implementation Status (as of May 25, 2025)

### Implemented
- **Registration and Authentication**: Secure user signup/login with JWT and email verification.
- **Product Search and Filtering**: Keyword search and filters by category, price, and availability.
- **Single Product Display**: Detailed product pages with reviews and add-to-cart options.
- **Shopping Cart**: Manage products and calculate totals with Stripe integration.
- **Stock Management**: Suppliers update product quantities in real-time.
- **Order Tracking**: Users track orders; admins update statuses with email notifications.

### In Development
- **PayPal Integration**: Adding PayPal REST API for digital wallet payments (expected completion: July 2025).
- **Real-Time Chat**: Implementing Socket.IO for live customer support (expected completion: July 2025).

---


## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit changes with clear messages (`git commit -m "Add feature X"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## 📄 License

Licensed under the **MIT License**. See `LICENSE` file for full details.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [MySQL](https://www.mysql.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Sequelize](https://sequelize.org/)
- [SendGrid](https://sendgrid.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
