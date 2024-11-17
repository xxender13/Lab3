# React Native Development Report

## Author: Harshil Sharma

### Date: November 2024

[GitHub Link: Lab 3 Repository](https://github.com/xxender13/Lab3.git)

## Overview
This repository contains the tasks related to setting up a React Native development environment and building a simple To-Do List application to understand the core concepts of React Native, including state management, list rendering, handling user interactions, and animations. The report and associated screenshots are divided into two tasks:

1. Task 1: Setting up the Development Environment for React Native.
2. Task 2: Building a Simple To-Do List Application.

## Task 1: Set Up the Development Environment (50 Points)
In this task, I set up the development environment to build React Native applications.

### Steps Included:
1. **Install Node.js and Watchman**: Installed Node.js from the official website and Watchman using Homebrew.
2. **Install React Native CLI**: Installed React Native CLI using `npm` or `npx`.
3. **Set Up Android Studio and Xcode**: Installed Android Studio (for Android) and Xcode (for iOS) with the necessary SDK tools.
4. **Create a New React Native Project**: Initialized a new React Native project.
5. **Open Project in Visual Studio Code**: Installed the React Native Tools extension in VS Code.
6. **Start Metro Bundler**: Ran the Metro Bundler using `npx react-native start`.
7. **Run the App on Emulator or Device**: Ran the application on an Android or iOS device.
8. **Run the App Using Expo**: Created a new Expo project and connected a physical device using the Expo Go app.

### Screenshots
Screenshots related to the Task 1 setup process are available in the following directory:
```
Lab3/Screenshots/Task1
```
Screenshots include:
- `SDK Setup.jpg`: Android SDK Setup in Android Studio.
- `Startmetrobumdler.jpg`: Metro Bundler started in terminal.
- `ApponEmulator.jpg`: App running on Android Emulator.
- `Physical Device.jpeg`: App running on Physical Device using Expo.

## Task 2: Building a Simple To-Do List App (60 Points)
In this task, I built a simple To-Do List application using React Native. The app implements basic task management features and provides hands-on experience with state management, list rendering, and handling user interactions.

### Features Implemented
- **Add New Tasks**: Users can add a new task to the to-do list.
- **Update Existing Tasks**: Users can edit a task.
- **Delete Tasks**: Users can delete tasks.
- **Scrollable Task List**: Supports scrolling for a large number of tasks.
- **User-Friendly Interface**: Intuitive UI for managing tasks.
- **Mark Tasks as Complete**: Tasks can be marked as completed, showing visual indicators.
- **Persist Data Using AsyncStorage**: Data persists even after the app is closed.
- **Add Animations**: Added animations to enhance user experience.

### Step-by-Step Implementation
1. **Set Up the Project**: Created and opened the project using Expo CLI.
2. **Create the Basic To-Do List Structure**: Replaced the content of `index.js` with the basic structure of the to-do list.
3. **Running the App**: Compiled and ran the application on the selected platform (Android or iOS).

### Screenshots
Screenshots related to the Task 2 implementation are available in the following directory:
```
Lab3/Screenshots/Task2
```
Screenshots include:
- `Settingup the project.jpg`: Setting up the To-Do List Project.
- `task on emu.jpg`, `toggle on pd.jpg`: Adding tasks on Emulator and Physical Device.
- `updated task on emu.jpg`, `Updating on pd.jpg`: Editing a task on Emulator and Physical Device.
- `deleteonemu.jpg`, `Delete on PD.jpeg`: Deleting a task from the To-Do List on Emulator and Physical Device.
- `completed on emu.jpg`, `completed on PD.jpg`: Task marked as complete with strikethrough on Emulator and Physical Device.
- `Running on emulator.jpg`, `running on physical device.jpg`: Running the To-Do List App on Android Emulator and Physical Device.

## Conclusion
- **Task 1**: Learned how to set up the development environment for React Native, including installing dependencies and running the project on different platforms.
- **Task 2**: Developed a simple To-Do List app focusing on state management, user interactions, and extending the app's functionality with data persistence and animations.

## Result
The final outcome was a fully functional To-Do List app allowing users to add, update, delete, and mark tasks as complete. The app supports data persistence and has animations for enhanced user experience.

## Disclosure
A Language Model (LLM) was used to resolve syntax issues and address some React Native initialization challenges. However, I fully understand the content and solutions implemented in this report.
