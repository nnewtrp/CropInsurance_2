# 🌾 Crop Insurance System

The **Crop Insurance System** is a web application designed to help **farmers affected by natural disasters** report their issues to government officials. Farmers can submit reports with images and location details, while officials can track and update the progress of these reports.  

---

## 🚀 Features  

### 🎯 Roles  
The system provides two main roles:  
- **Farmer** – Reports problems and tracks progress.  
- **Staff** – Reviews reports and updates statuses.  

### 🔹 Farmer Features  
- **Submit a report** with details, images, and location.  
- **Specify farm location** by entering an address or pinning it on the map.  
- **Track report progress** in real-time.  

### 🔹 Staff Features  
- **View submitted reports** from farmers.  
- **Update report status** based on progress.  

---

## 🛠 Technologies Used  

### **Frontend:**  
- **Nuxt.js** – Frontend framework.  
- **Vuetify** – UI component library.  
- **Leaflet.js** – Interactive map library for geolocation.  

### **Backend:**  
- **Node.js & Express.js** – Backend framework.  
- **Sequelize** – ORM for database management.  
- **PostgreSQL** – Database system.  

### **Deployment:**  
- **Heroku** – Cloud deployment platform.  

### **API Used:**  
- **[Open Government Data API (Thailand)](https://opend.data.go.th/)** – Fetches provinces, districts, sub-districts, and geographic coordinates.  

---

## 🛠 Installation & Setup  

### Prerequisites  
Before setting up the project, ensure you have:  
- **Node.js & npm** installed  
- **PostgreSQL** database  
- **Heroku CLI** (for deployment)  

### Steps  

#### 1. **Clone the Repository**  
```sh
git clone https://github.com/nnewtrp/CropInsurance_2.git
cd CropInsurance_2
```

#### 2. **Set Up the Database**
- Create a PostgreSQL database for the project.
- Update the database connection settings in .env or config.js.
- Run migrations using Sequelize:
```sh
npx sequelize db:migrate
```

#### 3. **Install Dependencies**
```sh
npm install
```

#### 4. **Run the Project Locally**
- Start the **project**:
```sh
npm run dev
```
- Open the browser and visit:
```arduino
http://localhost:3000/
```

#### 5. **Deploy to Heroku**
- Login to Heroku:
```sh
heroku login
```
- git push heroku main:
```sh
git push heroku main
```

## 📜 Learn More  

To explore the technologies used in this project, check out the official documentation:  

- 📖 [Nuxt.js](https://nuxt.com/docs) – Learn more about the frontend framework.  
- 🎨 [Vuetify](https://vuetifyjs.com/en/) – Discover UI components for a better design experience.  
- 🗺 [Leaflet.js](https://leafletjs.com/) – Understand how interactive maps work.  
- ⚡ [Node.js](https://nodejs.org/en/docs/) – Read about the JavaScript runtime for backend development.  
- 🚀 [Express.js](https://expressjs.com/) – Get details on the backend framework.  
- 🛢 [Sequelize](https://sequelize.org/docs/v6/) – Learn about the ORM used for database management.  
- 🗄 [PostgreSQL](https://www.postgresql.org/docs/) – Read up on the relational database system.  
- ☁️ [Heroku](https://devcenter.heroku.com/categories/deployment) – Find guides on deploying applications.  

---

## 📬 More Information  

This project was developed as the **Senior Project** for **ITS403 - Information Technology Project at Sirindhorn International Institute of Technology, Thammasat University**.

📧 Contact: teerapat.sat24@gmail.com

🔗 GitHub: [nnewtrp](https://github.com/nnewtrp)
