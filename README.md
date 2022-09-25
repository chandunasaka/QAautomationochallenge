# Cypress Automation

1Cypress Installation
Installing Cypress is pretty simple and easy. The framework offers two options to install Cypress

Command Line tool
Desktop App
Step 1: Install Node.js and Node Package Manager (npm)

Cypress is a Javascript framework that runs on Node.js. As such, install node.js first before installing Cypress. The current LTS version is 12.8.1. Now, npm also comes bundled with node.js. so, you don't have to install it separately. The current npm version is 6.14.5. You can visit the node.js website and download the LTS version here: https://nodejs.org/en/download/



Install node.js using the .msi file



Accept the license agreement.



Choose the node js folder and click next.



In the custom setup, choose the features you want to install. You can click next and install default items.



If you want to run npm modules from C/C++, you need to install tools for native modules. Else, just click next.



On the next screen, click Install.



Complete the installation process.



To check if node.js and npm are successfully installed, open the command prompt, and type the following commands:

node –v
npm –v


Step 2: Create a project folder

To save all the work in a single folder, create a new folder, and navigate to that folder.

mkdir experitestcypress
cd experitestcypress
Step 3: Create a package.json file

To create a package.json file, type the following command in the command prompt

npm init -y


Step 4: Install Cypress using npm

Navigate to the project folder and type the following command to install Cypress from the CLI.

npm install cypress –save-dev


Wait for a couple of minutes as it has to download and install the required binaries.

Cypress Framework

Step 5: Open Cypress

Now, Cypress is successfully installed. To open Cypress Test Runner, type the following command in the command prompt.

.\node_modules\.bin\cypress open
Cypress Framework

When you open it for the first time, it will create an example folder with test script files.

Cypress Framework

Now Cypress is ready for use.

Cypress Framework
Create your first test
To run your first test, create a test file in the integration folder created by Cypress. Here, the test file is named as experitest_sample.js

Touch experitestcypress/cypress/integration/experitest_sample.js
As Windows doesn't recognize the touch command, create the .js file manually in the integration folder. To do so, open a text file and save it with a .js extension.

When you open the Test Runner, it will display the experitest_sample.js file you have created.

Cypress Framework

Running the first test

To run the first test, you can use any IDE to edit the experitest_sample.js file. For this test, open the .js file and add this simple code and save the file.

[javascript] describe('Experitest First Test', () =&gt; { it('First test is successful!', () =&gt; { expect(true).to.equal(true) }) }) [/javascript]

Now, click on the file in the Test Runner and it will open the browser and run the test.

Cypress Framework

Here, the Chrome browser is being controlled by automated test software.

Now open the experitest_sample.js file and change the ‘First test' to ‘Second test'. When you save the file, the browser automatically refreshes and displays the new results.

Cypress Framework

Here is another example. Open the experitest_sample.js file and type this code and save it:

[javascript] describe('Experitest Website', () =&gt; { it('Opens the Experitest website', () =&gt; { cy.visit('https://experitest.com') }) }) [/javascript]

When you save it, the Test Runner will open the Experitest website in the browser.

Cypress Framework

So, the Test Runner is perfectly working. You can write different test scripts and execute them!

Execute your test from the command line
To run this test script from the CLI, type the following command in the command prompt:

npx cypress run --record --spec "cypress/integration/experitest_sample.js"
Cypress Framework

After successfully running the test, the tool will display the results.

Cypress Framework
Installing the Cypress Desktop Tool
To install the desktop tool, open the Cypress website and download the Cypress desktop software:

https://www.cypress.io/

This is the direct link to download the desktop tool:

https://download.cypress.io/desktop

After downloading the zip file, unzip the software and open the Cypress application.

Cypress Framework

Now, select your project folder and start using the Test Runner.

Cypress Framework

Simply click on the JavaScript file and the tool will execute the test.

Using Cypress framework for test automation
Cypress's framework, that as we have shown works great for end-to-end test automation is a great solution for testing modern web apps. Since it is a JavaScript framework running on node js all your tests can be written easily. In this article, we also took a look at the Test Runner. We saw how simple it is to work with and how you can watch commands as they are executed without having to install any servers, dependencies or drivers.



