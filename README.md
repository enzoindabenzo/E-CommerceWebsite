Setting Up the Project
To run this app, you’ll need to install a few dependencies on your computer. Follow the steps below to get everything set up.

1. Install Node.js and npm
First, download and install Node.js and npm on your computer.
Here's a helpful tutorial explaining how to install them: YouTube Tutorial.

2. Install MySQL
After installing Node.js and npm, you'll need to install MySQL.
Here's a tutorial that explains how to install MySQL: YouTube Tutorial.

3. (Optional) Install HeidiSQL (Database Management Tool)
If you don’t have a database management app, it’s highly recommended to install HeidiSQL. It’s beginner-friendly and easier to use than other database management options.
Here's a tutorial on how to download and install HeidiSQL: YouTube Tutorial.

4. Download the Project
Download and extract the project to your local machine.

5. Configure .env File in the Root Folder
Open the extracted project folder in your code editor.

In the root of the project, create a file named .env and add the following code:

bash
Copy code
DATABASE_URL="mysql://username:password@localhost:3306/singitronic_nextjs"
NEXTAUTH_SECRET=12D16C923BA17672F89B18C1DB22A
NEXTAUTH_URL=http://localhost:3000
Replace username and password with your MySQL credentials.

6. Create Another .env File in the Server Folder
Inside the server folder, create a second .env file.

Add the same DATABASE_URL from the previous step:

bash
Copy code
DATABASE_URL="mysql://username:password@localhost:3306/singitronic_nextjs"

7. Install Dependencies
Open your terminal in the root folder of the project and run:

bash
Copy code
npm install
Navigate to the server folder in your terminal and run:

bash
Copy code
cd server
npm install

8. Run Prisma Migration
Still inside the server folder, run the following command to apply the Prisma migration:

bash
Copy code
npx prisma migrate dev

9. Insert Demo Data
To insert demo data, navigate to the server/utils folder and run:

bash
Copy code
cd utils
node insertDemoData.js

10. Run the Backend
Go back to the server folder and start the backend:

bash
Copy code
cd ..
node app.js

11. Run the Frontend
Open a second terminal window, don’t stop the backend, and ensure you’re in the root folder of the project.

Run the following command to start the frontend:

bash
Copy code
npm run dev

12. Access the App
Open your browser and go to: http://localhost:3000
You should now see the app live and running!