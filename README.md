#Flask CRUD App

A lightweight web application built with **Python** and **Flask** that demonstrates full **CRUD** (Create, Read, Update, Delete) operations. This project uses a local JSON file (`data.json`) as a database to persist user data.

## 🚀 Features

- **Create:** Add new users with a unique ID, Name, and Email.
- **Read:** View a list of all registered users in a tabular format.
- **Update:** Edit existing user details.
- **Delete:** Remove users from the database.
- **Persistent Storage:** Data is saved in `data.json`, so it isn't lost when the server restarts.
- **Static Assets:** Includes support for CSS, JavaScript, and Images.

## 🛠️ Project Structure

```text
├── app.py               # Main Flask application logic
├── data.json            # JSON file acting as the database
├── static/              # Static files (CSS, JS, Images)
│   ├── style.css
│   ├── script.js
│   └── testImg.jpg
├── templates/           # HTML Templates
│   ├── index.html       # Home page
│   ├── read.html        # View all users (Dashboard)
│   ├── add.html         # Add user form
│   ├── update.html      # Update user form
│   ├── delete.html      # Delete confirmation
│   ├── about.html       # About page
│   └── submit.html      # Submission success page
└── README.md            # Project documentation

📂 Project Structure
Plaintext
├── app.py              # Main application logic and routing
├── data.json           # specific JSON file storing user data
├── static/             # Static assets
│   ├── style.css       # Stylesheet
│   ├── script.js       # Client-side scripts
│   └── testImg.jpg     # Test images
└── templates/          # HTML Templates
    ├── index.html      # Home/Landing page
    ├── read.html       # Dashboard (View all users)
    ├── add.html        # Form to add a user
    ├── update.html     # Form to edit a user
    ├── delete.html     # Confirmation page for deletion
    ├── about.html      # About page
    └── submit.html     # Form submission result page
⚙️ Installation & Setup
Follow these steps to get the project running on your local machine.

1. Clone the Repository
Bash
git clone https://github.com/your-username/repository-name.git
cd repository-name
2. Set up a Virtual Environment (Optional but Recommended)
Bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
3. Install Dependencies
You only need Flask to run this application.

Bash
pip install flask
4. Run the Application
Bash
python app.py
5. Access the App
Open your web browser and navigate to: http://127.0.0.1:5000

📖 How to Use
Home: The landing page allows you to navigate to the "Add User" or "View Users" sections.

Add User: Enter a unique numeric ID, Name, and Email. Click Submit.

View Users: See the table of all users.

Click Edit to modify a specific user's details.

Click Delete to remove a user from the data.json file.

⚠️ Important Note on Data
This application uses a file (data.json) to store data.

If the file does not exist, the app will create it automatically when you add the first user.

Ensure the application has write permissions in the directory to update the JSON file.

📝 License
This project is open-source and available for educational purposes.
