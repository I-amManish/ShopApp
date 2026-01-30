# 🛍️ ShopApp – 3D Product Customization Web App

ShopApp is a full-stack web application that allows users to **customize a 3D T-shirt model in real time**. Users can change colors, apply logos, and preview the product interactively using modern 3D web technologies.

---

## 🚀 Features

* 🎨 Real-time T-shirt color customization
* 🖼️ Logo decal placement on 3D model
* 🌐 Interactive 3D view using WebGL
* ⚡ Fast frontend built with Vite + React
* 🔐 Secure backend using Node.js & Express
* 🤖 AI image generation support (OpenAI API)
* 📱 Responsive UI

---

## 🧰 Tech Stack

### Frontend

* React
* Vite
* Three.js
* @react-three/fiber
* @react-three/drei
* Valtio (state management)
* Tailwind CSS

### Backend

* Node.js
* Express.js
* OpenAI API (Image generation)
* dotenv
* CORS

---

## 📁 Project Structure

```
ShopApp/
├── client/
│   ├── public/
│   │   ├── shirt_plain.glb
│   │   └── logo.png
│   └── src/
│       ├── canvas/
│       │   ├── Shirt.jsx
│       │   ├── CameraRig.jsx
│       │   └── Backdrop.jsx
│       ├── store/
│       ├── components/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── routes/
│   │   └── dalle.routes.js
│   ├── index.js
│   └── .env
│
└── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/I-amManish/ShopApp.git
cd ShopApp
```

---

### 2️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

### 3️⃣ Setup Backend

```bash
cd server
npm install
npm start
```

Backend runs on:

```
http://localhost:8080
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

⚠️ **Do not expose your API key on the frontend or commit it to GitHub.**

---

## 🤖 AI Image Generation (Optional)

The backend integrates OpenAI’s Image Generation API to generate textures or images based on prompts.

Example endpoint:

```
POST /api/v1/dalle
```

---

## 🧠 How It Works

* The 3D model (`.glb`) is loaded from the `/public` folder
* Color changes are animated using `maath`
* Logos are applied using `Decal` from `@react-three/drei`
* Global state is handled via Valtio
* Backend securely communicates with OpenAI

---

## 📸 Screenshots

> Add screenshots here to showcase UI and 3D customization

---

## ⚠️ Known Limitations

* Requires a **plain (untextured) 3D model** for best results
* Performance may vary on low-end GPUs
* Mobile devices may need reduced quality settings

---

## 📌 Future Improvements

* Drag & resize logo on model
* Multiple product types (hoodies, mugs, etc.)
* User authentication
* Save & export designs
* Production performance optimizations

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Manish Kumar**
GitHub: [@I-amManish](https://github.com/I-amManish)

---
