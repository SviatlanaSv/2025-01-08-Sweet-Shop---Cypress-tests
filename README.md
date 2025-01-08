# Sweet Shop Cypress Tests 🧁🍬

Welcome to the Sweet Shop Cypress Tests repository! This project contains end-to-end tests for the Sweet Shop demo application, covering major sections of the website to ensure core functionalities work as expected.


## 🚀 Features Tested

Tested Pages:

**Home and Sweets Pages 🏠**

. Verified page accessibility and responsiveness.
. Tested adding items to the basket.
. Verified item details displayed correctly.

**About Page ℹ️**

. Ensured the page loads correctly and displays all content.

**Login and Your Account Pages 🔐**

. Validated login functionality with various email and password inputs.
. Checked account details and navigation.

**Basket Page 🛒**

. Tested basket item manipulation (adding/removing items).
Verified billing address, payment delivery sections.



## 🛠️ How to Run the Tests

### Prerequisites  
Ensure you have the following installed on your system:

- **Node.js** (Recommended: v18.x or v20.x)
- **npm** (comes with Node.js)

### Steps  

1. Clone the repository to your local machine:
   ```bash
git clone https://github.com/SviatlanaSv/2025-01-08-Sweet-Shop---Cypress-tests.git
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```
   

## Testing with Cypress 

### Setting Up Cypress  
1. Install Cypress:
   ```bash
   npm install cypress 
   ```

2. Open Cypress Test Runner:
   ```bash
   npm run cypress:open
   ```

3. Run the tests located in the `cypress/e2e` folder.

### Running Tests in Headless Mode  
To execute the tests in headless mode:
```bash
npm run cypress:run
```


## 🐞 Known Issues and Missing Features

**User Registration**
- No page or form for new user registration.

**Account Page**
- "Previous orders" section displays orders not placed by the current user.
- Missing logout button.

**Login Page**
- Invalid email formats (e.g., "test@user") allow login with a valid password ("123456").
- Social media icons are not linked to any functionality.

**Basket Page - Payment Section**
- "Continue to checkout" button does not navigate anywhere.
- Payment field validation is missing (letters and numbers can be entered incorrectly).
- No functionality to test promo code usage.

**Basket Page - Delivery Section**
- Total cost is not updated when selecting "Standard Shipping (£1.99)" (displays £NaN).

**About Page**
- The "About" page is sometimes unavailable when accessed from non-home pages.

## 📝 Notes
For any issues or contributions, feel free to submit an issue or pull request.


Happy Testing! 😉


---