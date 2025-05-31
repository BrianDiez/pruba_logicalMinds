# Junior Full Stack Developer Practical Test

## Overview

This is a practical test for junior full stack developer candidates. The objective is to build a simple web application using **Next.js** (frontend) and an API built with **Node.js, Ruby, or Python** (backend), connected to any **SQL database**. The app allows you to add users and displays a list of users with their country flags fetched from the public REST Countries API.

---

## Requirements

### 1. Backend API

- Build a REST API using **Node.js (Express)**, **Ruby (Rails or Sinatra)**, or **Python (Flask or Django)**. //Use express
- Use any SQL database (**SQLite, MySQL, PostgreSQL**, etc.). //Use PostgreSQL
- Implement endpoints to:
  - **List users** (`GET /users`) //Listo
  - **Add user** (`POST /users`) //Listo
- Each user should have: `id`, `first_name`, `last_name`, `email`, and `country` (country name). //Listo
- Validate that **email is unique**. //Listo

### 2. Frontend (Next.js)

- Build a **Next.js app** that:
  - **Lists all users** on the main page, showing their first name, last name, email, and country. //LIsto
  - Displays the **country flag** next to each user's country (using data from [REST Countries API](https://restcountries.com/v3.1/all?fields=name,flags)). //Agregado
  - Provides a **form** toie add a new user (all flds required, validate email format, and prevent duplicates). //listo
  - Automatically updates the list when a user is added. //listo

### 3. REST Countries API Integration

- Fetch country flags using the [REST Countries API](https://restcountries.com/v3.1/all?fields=name,flags). //agregado
- Match the selected country in the user form and in the user list with the API result to show the corresponding flag image. //listo

---

## Bonus Points (Optional)

- Add minimal styling (e.g., **Tailwind CSS**). //listo
- Show **error messages** on failed validations. //listo
- Allow **deleting users**. //listo

---

## Deliverables

- Source code for both **backend and frontend**.
- **README** file with setup instructions.
- A brief description (1-2 paragraphs) of your solution and anything you would improve if given more time.

---

## Notes

- Ensure **basic validation** for all fields, especially email uniqueness and format.
- Code should be **readable, maintainable, and clean**.
- The application should be easy to set up and run locally.
- You may use any tools or frameworks you prefer for styling or database management.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
