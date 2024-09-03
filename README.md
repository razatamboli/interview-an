# InterviewAn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. 

//////////////////////////     Project Setup      ////////////////////////////

Build Project with "ng new interview-an"

Navigate to the project directory "cd interview-an"

Install dependencies e.g. "npm i boostrap@4" 

Running the Application - Start the Angular development server.
"ng s -o"

Open your browser and navigate to http://localhost:4200/.


/////////////////////////     Project Overview      ///////////////////////////

Explanation of Key Concepts

1. Change Detection Strategies

Default Strategy: Angular automatically checks all bindings in the component whenever a change occurs.

OnPush Strategy: Angular only checks the component when an input property changes or an event originates from the component itself, leading to improved performance by avoiding unnecessary checks.

2. Hierarchical Dependency Injection

Root Level Injection: The form-table.serivce is provided at the root level, making it available throughout the application.

Component-Level Injection (table-list.component): By adding the service to the providers array in the table-list.component, a new instance of the service is created specifically for that component, isolating its state from other components. -->

GitHub Repository
The project is also available on GitHub. You can access the full codebase using the following link: 
https://github.com/razatamboli/interview-an.git

Contact Information
For any questions or further discussion, please feel free to reach out:

Name: Mohammadraza Faruk Tamboli
Email: razatamboli007@gmail.com
Phone: +91 8080676741
Thank you for the opportunity to participate in this screening process. I look forward to your feedback.