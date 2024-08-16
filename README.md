# Interactive Card Details Form

Mentor Front-End project, with form for card details.

## Summary
- [Install](#1-install-project)
- [Techonologies used](#2-technologies-used)
- [How the project works?](#3-how-the-project-works)

## 1 Install project

### Install the Front-end

```bash
$ cd interactive-card
```

```bash
$ npm install
```

### To run on server

```bash
$ npm run dev
```

## 2 Technologies used 
Technologies used in the project: </br>
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp; </br>
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)&nbsp; </br>
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)&nbsp; </br>

## 3 How the project works?
This front end mentor project mainly shows the interaction of a form with </br>
the card on the left side of the screen. I chose to use React, as I believe </br>
it is much easier to work with this type of input interaction </br>
and its display, because useState is always monitoring its state. There was only 1 single change, </br>
in the card number, I didn't add the functionality to check that a number was entered, </br>
I simply didn't allow letters to be entered in the input, using replace.