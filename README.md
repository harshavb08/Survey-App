## Made this frontend-project as a part of task given by CODE InBound
Deployed Link: https://survey-app-codeinbound.netlify.app/

Tech stack: ReactJs

Problem statement:

You need to build a frontend application to survey the customers in a shop. We set these
questions in a Kiosk inside the shop. We have 5 questions that need to be asked to every
customer in the shop. Questions are,
1. How satisfied are you with our products? (Rating type, 1-5)
2. How fair are the prices compared to similar retailers? (Rating type, 1-5)
3. How satisfied are you with the value for money of your purchase? (Rating Type, 1-5)
4. On a scale of 1-10 how would you recommend us to your friends and family? (Rating Type, 1-10)
5. What could we do to improve our service? (Text Type)

Questions can either be in the database (or local storage) or hardcoded, but the answers must
be in the database(or local storage). Please keep in mind that new questions can be added later
and the code should not break when adding the questions. We should greet the customer with a
welcome screen. When the customer presses the start button on the welcome screen, it should
start with the first question. UI should be updated with the current question number like 1⁄5, 2⁄5
etc... After answering the question, the customer should see the next question till the last one.
They should be able to navigate to previous or next questions as they wish. Also they should be
able to skip a question. Each answer should be saved in the database(or local storage) with
some ID that uniquely identifies the question and answer. Also there should be some form of
logic to identify each customer's session.
Once the user finishes the last question, we should ask a confirmation dialog to submit the
survey. If the user confirms it, we should set a flag as ‘COMPLETED’ in the database(or local
storage). . In the end, you should have a screen to thank the customer for their time and then
show the welcome screen after 5 seconds. 

![Screenshot 2023-04-03 212526](https://user-images.githubusercontent.com/73329321/229563313-89d56c08-f0b6-491f-968d-6301f6aa9f07.png)

You may use any frontend framework. There is no need for any login or any other
pages.Just the survey screen as shown in the sample image above.

## Installation

Clone the project

```bash
  git clone https://github.com/harshavb08/Survey-App.git
```

Go to the project directory

```bash
  cd Survey-App
```
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


Here are the few screenshots of the website,
![1](https://user-images.githubusercontent.com/73329321/229564762-0728bc63-8997-4834-bd25-d042c7135241.png)

![2](https://user-images.githubusercontent.com/73329321/229564873-5186e690-391a-45fc-b331-915408e274b3.png)

![3](https://user-images.githubusercontent.com/73329321/229564903-8c9a0a9c-04fa-4ae1-9a8d-195456bef426.png)

![4](https://user-images.githubusercontent.com/73329321/229564926-e4f2ec2c-46b2-43e8-b59c-6b6e1ae135b5.png)

![5](https://user-images.githubusercontent.com/73329321/229564945-2abd5832-3f34-417f-949e-cd0000019828.png)

![6](https://user-images.githubusercontent.com/73329321/229564967-e11d5a3f-7352-44a1-96bd-fe7fae69c76d.png)

![7](https://user-images.githubusercontent.com/73329321/229564980-ef675053-cbcd-48cc-8660-5ca43fdff984.png)

![8](https://user-images.githubusercontent.com/73329321/229564996-682955f0-8deb-463c-bafb-9091b7d94d41.png)

![9](https://user-images.githubusercontent.com/73329321/229565015-e88f6408-5fb8-4111-99ca-f8b1346879cd.png)

Results will be stored on local storage (Developer Tools > Application > Storage > Local Storage > https://survey-app-codeinbound.netlify.app/).

