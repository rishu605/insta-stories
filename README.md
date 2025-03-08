# 📸 Instagram-Like Stories Viewer

A sleek, responsive, and feature-rich **Instagram-style story viewer** built with **React & TypeScript**. This app lets users view **image-based stories**, navigate between them, and enjoy smooth **animations, automatic transitions, and a progress bar**—just like Instagram! 🚀

---

## ✨ Features

### 1️⃣ Story List Display
- Stories are fetched dynamically from a local JSON file.
- Stories appear as circular avatars at the top, each representing a user’s story.

### 2️⃣ Full-Screen Story Viewer
- Clicking on a story opens it in a **full-screen overlay**.
- Users can **click on the right** to move to the next story or **left** to move to the previous one.

### 3️⃣ Auto-Transition Between Stories
- Each story automatically transitions to the **next** after **5 seconds**.
- If there is **no next story**, the viewer **closes automatically**.

### 4️⃣ Progress Bar Animation
- A **smooth progress bar** appears at the bottom of the story, visually indicating time left.
- **Resets when a new story starts**.

### 5️⃣ Smooth Transitions
- **Fade-in / Fade-out animations** when switching stories for a polished feel.

### 6️⃣ Manual Navigation
- **Clicking on the right side** of the screen moves to the **next story**.
- **Clicking on the left side** moves to the **previous story**.

### 7️⃣ Tap to Close
- Clicking **outside the story** closes the viewer.

### 8️⃣ Loading Indicator
- If the next story takes time to load, a **spinner appears**.

---

## 📦 Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **npm** or **yarn**

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/rishu605/insta-stories.git
cd insta-stories
```

### 2️⃣ Install Dependencies
Using **npm**:
```sh
npm install
```
or using **yarn**:
```sh
yarn install
```

---

## 🚀 Running the App

### Start the Development Server
```sh
npm run dev
```
or
```sh
yarn dev
```
The app should now be running at **http://localhost:5173**

---

## 🛠 Project Structure
```
📦 insta-stories-app
 ┣ 📂 public
 ┃ ┣ 📜 stories.json
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 StoryList.tsx
 ┃ ┃ ┣ 📜 StoryViewer.tsx
 ┃ ┃ ┣ 📜 Story.tsx
 ┃ ┃ ┣ 📜 StoryPage.tsx
 ┃ ┣ 📂 data
 ┃ ┃ ┣ 📜 data.ts
 ┃ ┣ 📂 tests
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 main.tsx
 ┣ 📜 package.json
 ┣ 📜 README.md
```

---

## 🖼 UI Components

### 📌 Story List (`StoryList.tsx`)
- Displays user stories in a scrollable **horizontal list**.
- Clicking on a story **opens it in full-screen mode**.

### 📌 Story Viewer (`StoryViewer.tsx`)
- Handles **story display, navigation, transitions, progress bar, and loading spinner**.

### 📌 Story Viewer (`StoryPage.tsx`)
- Handles **story main page**.

### 📌 Story Viewer (`Story.tsx`)
- Shows **story icon for individual user**.

---

## 🏗 Design Choices & Performance Optimizations

### ⚡ Component-Based Architecture

- Separation of concerns: Each component handles a single responsibility (StoryList, StoryViewer, StoryPage).

- Scalability: Easy to extend with video stories or swipe gestures.

### ⚡ Optimized State Management

- Used useState selectively to minimize unnecessary re-renders.

- **Dependency arrays in **useEffect ensure updates only when needed.

### 🎭 Efficient Rendering & Lazy Loading

- Spinner (loading state) prevents layout shift while waiting for images.

### 🎬 Optimized Story Transitions

- CSS animations (fade-in, fade-out) ensure smooth transitions.

- Avoided unnecessary re-renders when switching stories using setTimeout.

## 🎨 Styling (`styles.css`)

### 1️⃣ General Styles
- Responsive layout.
- Smooth transitions for **fade-in & fade-out animations**.

### 2️⃣ Story Viewer Overlay
- **Fixed full-screen** overlay.
- Semi-transparent background.

### 3️⃣ Progress Bar
```css
.progress-bar {
  position: absolute;
  bottom: 10px;
  left: 5%;
  width: 90%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.progress {
  height: 100%;
  background: #fff;
  width: 0%;
  transition: width 0.1s linear;
}
```

### 4️⃣ Loading Spinner
```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
```

---

## 🔧 Customization

You can modify:
- **Story duration** in `StoryViewer.tsx` by changing:
  ```tsx
  const STORY_DURATION = 5000; // 5 seconds
  ```
- **Progress bar speed** in `setInterval()` function.

---

## 📌 Future Enhancements

- **Video support** for stories.
- **Gestures for mobile users** (Swipe left/right).
- **Keyboard navigation** (← → arrows to navigate stories).
- **User-uploaded stories** (fetch from a backend API).

---

## 🎯 Conclusion

This app **mimics Instagram Stories** with **smooth transitions, auto-play, manual navigation, and a progress bar**. It's a great foundation for building more advanced story-based UI components.

🚀 **Enjoy building!** If you have any suggestions or want to contribute, feel free to open a pull request. 😊

---

**📌 Author:**  
[Your Name] | [GitHub](https://github.com/rishu605) | [LinkedIn](https://linkedin.com/in/rishabhgupta605)  

**⭐ Don't forget to star the repo if you find it useful!** 🌟
