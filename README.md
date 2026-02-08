Flask JSON CRUD Application
A lightweight User Management System built using Python and Flask. This application demonstrates fundamental CRUD (Create, Read, Update, Delete) operations using a local JSON file as a persistent database.

🚀 Features
Create: Add new users with an ID, Name, and Email.

Read: View a comprehensive list of all registered users.

Update: Edit the details (Name/Email) of existing users.

Delete: Remove users from the system.

Persistent Storage: Uses data.json to store user data, ensuring data remains available after restarting the server.

Simple UI: Clean HTML interface with basic CSS styling.

🛠️ Tech Stack
Backend: Python 3, Flask

Frontend: HTML5, CSS3, JavaScript

Database: JSON (File-based storage)

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
