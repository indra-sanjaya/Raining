🌧️ Rain Animation (HTML, CSS & JavaScript)

A simple rain effect created using HTML, CSS animations, and JavaScript.
Raindrops are dynamically generated and animated to simulate rainfall on a dark, night-sky background.

✨ Features

🌧️ Hundreds of animated raindrops

🎲 Random horizontal positions

⬆️ Drops spawn above the screen for natural motion

🔁 Infinite falling animation

⚡ Lightweight and fast

🧠 Easy to understand (great for learning animations)

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling & animations

JavaScript (ES6) – Logic and dynamic creation

jQuery (optional) – DOM manipulation (can be replaced with pure JS)

📁 Project Structure
rain-animation/
│
├── index.html      # Main HTML file
├── style.css       # Rain visuals and animations
├── script.js       # Rain generation logic
└── README.md       # Project documentation

🚀 How It Works (Concept)

A container (.rain) acts as the sky.

JavaScript creates many .drop elements dynamically.

Each drop:

Starts above the viewport (negative Y position)

Falls downward at a constant speed

CSS animates the drops to move down the screen.

When a drop leaves the screen, it visually resets.

The illusion of rain comes from:

Quantity of drops

Random placement

Fast, continuous motion

🧮 Coordinate System (Important!)

(0, 0) is the top-left corner of the screen

X increases → right

Y increases ↓ down

Negative Y values = above the screen

This is why raindrops spawn with negative Y positions.

📦 Setup & Usage

Clone or download the project

Open index.html in your browser

Enjoy the rain 🌧️

No build tools required.

🔧 Customization

You can easily tweak the effect:

Change rain intensity
var nbDrop = 1000; // increase or decrease

Change speed (CSS)
animation: fall 0.6s linear infinite;

Change drop size
width: 1px;
height: 80px;

⚠️ Known Limitations

CSS-only animation does not simulate real physics

All drops fall at constant speed

No wind or splashes by default

For more realistic rain, consider:

JavaScript animation with requestAnimationFrame

Canvas-based rendering

🌱 Learning Goals

This project helps you understand:

DOM creation

Browser coordinate systems

CSS keyframe animations

Visual illusions vs physical simulation

Why negative positions matter in animation

💡 Possible Improvements

🌬️ Add wind direction

⚡ Add lightning flashes

💥 Add ground splashes

🎨 Use Canvas for better performance

📱 Make it responsive on resize

❤️ Credits

Created as a learning project to explore animation fundamentals and browser rendering behavior.
