# 📝 Actodo – A Simple and Smart To-Do App  

Actodo is a lightweight and interactive **To-Do management app** built using **React + Vite**.  
It helps users organize daily tasks efficiently, with a clean interface and basic authentication flow.

## 🚀 Features  

### ✅ Core Functionality  
- Add new tasks using the **ActodoForm**  
- Edit existing tasks directly from the list  
- Delete tasks that are completed or no longer needed  
- View tasks in a visually clean **Card layout**

### 🔒 Authentication  
- **Signup Page** – Register new users  
- **Login Page** – Allow users to log in  
- **Landing Page** – Introduce the app before authentication  

---

## 🧩 Components Overview  

### Components  
| Component | Description |
|------------|-------------|
| **ActodoForm** | Handles creating and editing tasks |
| **Card** | Displays tasks inside styled cards |
| **TodoList** | Renders the list of tasks dynamically |
| **TodoItem** | Represents a single task with Edit/Delete actions |

### Pages  
| Page | Description |
|------|-------------|
| **Landing** | Intro page showing app info |
| **Login** | User login page |
| **Signup** | New user registration page |

---

## ⚙️ Tech Stack  
- **Frontend:** React (with Vite)  
- **Routing:** React Router DOM  
- **Styling:** Tailwind CSS (or custom CSS)  

---

## 💡 How It Works  
1. User opens the **Landing Page** and navigates to Login or Signup.  
2. After successful login/signup, the **Actodo Dashboard** appears.  
3. Users can add, edit, or delete their tasks in real-time.  
4. All task updates are managed through React state.  

---

## 🧠 Future Enhancements  
- Store user data and tasks in **LocalStorage** or a **Database**  
- Add **Task Categories** or **Priorities**  
- Implement **Dark Mode** support  
- Add **Firebase / JWT Authentication** for secure login  

---

## 🛠️ Installation & Setup  

```bash
# Clone the repository
git clone https://github.com/yourusername/actodo.git

# Navigate into the project folder
cd actodo

# Install dependencies
npm install

# Start the development server
npm run dev

Project-SetUp
src/
│
├── components/
│   ├── ActodoForm.jsx
│   ├── Card.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
│
├── pages/
│   ├── Landing.jsx
│   ├── Login.jsx
│   └── Signup.jsx
│
├── App.jsx
└── main.jsx

## 🌐 Live Demo

Check out the app here: [actodo-react-pearl.vercel.app](https://actodo-react-pearl.vercel.app)


