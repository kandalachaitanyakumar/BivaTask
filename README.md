# Bivatask
1.After cloning the  project,  navigate to the directory where you cloned the Angular project, through command prompt or vs code. 
2.in project directory Run the following command to install the project dependencies. command: npm install 
3.After installing all Dependencies you need to install json server by using this command : npm install -g json-server.
4.Now Run your server command: ng s.
5.now open new window in command prompt navigate to your project directory  and run this command : json-server --watch db.json 
6.JSON Server will now be running, and you can access the mock API at http://localhost:3000/. For example, your tasks can be accessed at http://localhost:3000/tasks.
7.Open your web browser and navigate to http://localhost:4200/ (or the specified port if different). You should see your Angular application running.
8.If you encounter issues with missing styles or any other problems please instll angular material (if needed) command: ng add @angular/material


Test this App:
9.A add task form will appear when the application starts. You can add the task here. If the task is successfully added, you will be redirected to the task list page.
10.If you want to view the Existing task list without adding a task, I have provided a link in the nav bar and clicking on it will take you to the task list page.
here you can see all tasks Names, Description, DueDates and you can edit and delete task data here.
11.I have provided a chart 'view link' in the nav bar it will take you to the chart component. 
Here you can see all the task dues count for the next 7 days, their daily task dues in the form of charts.
