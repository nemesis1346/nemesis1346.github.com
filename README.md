
# 🎨 Self-Promotion Portfolio  
This is a **React application** showcasing my personal portfolio. It pulls content from my blog and links all my projects and works. The project utilizes:  

- **Firebase**  
- **React** & **Redux-Thunk**  
- **Materialize-CSS**  

---

## 🚀 Versions  
Make sure to use the specified versions below when working within Docker containers to avoid compatibility issues:  

| **Tool**        | **Version**    | **Notes**                                  |
|-----------------|----------------|--------------------------------------------|
| Node            | 20.18.0        |                                             |
| NPM             | 10.8.2         |                                             |
| Sass            | 1.79.5         | Updated to avoid previous compatibility issues |
| NVM             | Node 20.18.0   | Ensure the correct Node version is used    |

---

## 🛠 Installation Steps  
Simply run the following command to build and start the project:  
```bash
docker compose up --build
```

---

## 🌐 Deployment on GitHub Pages  
1. Navigate to the **`front-end-react/`** folder.  
2. Run the following commands:  

```bash
npm run build
npm run deploy
```

⚠️ **Note:** The DNS configuration is specified in the `package.json`. Make sure to review it before deploying.

---

## 📌 Latest Updates  
- The **Django folder** is currently not in use but will be integrated in the future.