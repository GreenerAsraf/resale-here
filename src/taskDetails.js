// Main Requirements
// Your homepage will have a navbar , a banner/slider, Advertised items, second-hand product categories section and a realistic footer.

// Add one extra section on the home page. Make sure it is unique and relevant to your website.

// You will have to decide what would be the categories of the second-hand product you have selected. For instance, if your website is about second-hand furniture, you can divide your categories into the bedroom, kitchen, dining room, etc.; if it is about second-hand car, your categories can be a Microbus, luxury car, electic car, etc. Or you can categorize second-hand products under brand names if you want. However, make sure it is relevant. You will need at least 3 categories, each with at least 2 products.

// When the user clicks on a category on the home page, they will be redirected to the /category/:id route, where they will see second-hand products under that category only. The /category/:id page will have a column(s) of cards. It can be 1,2, or 3 columns. Each card will have a picture, name, location, resale price, original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button. Please note, category:/id will be a private route.

// On clicking the Book now button, if the user is not modal will have a form with the logged-in user name and email address, item name, and price(item name, price, and user information will not be editable) by default. You will give your phone number and meeting location, and lastly, there will be a submit button. After clicking the submit button, you will have to inform the buyer with a modal/toast that the item is booked.

// Your navbar will have a login button. Implement email/password-based authentication and at least one social login(google, Facebook, GitHub, etc.) authentication. Create an extra field for options. There will be two options: a radio button, a dropdown, a toggle button, etc. If the user creates a seller account, he will choose the seller option. Otherwise, a normal user will have the user option selected by default. Users logged in by using social media will be considered as buyers.

// Note: Do not apply email verification as it will be an inconvenience for the examiner. It is important for the examiner to be able to check your authentication without any hassle. If you want, you can add email verification after getting the assignment result.

// If a user(buyer/seller/admin) is logged in, they will see logout (should be working) and another option on the header called Dashboard. The dashboard routes will change based on the users:

// Buyers will see: My orders(see bonus requirement 7),

// Sellers will see: Add A product (See Requirement 8), My Products(see requirement 9), My buyers(this one is optional).

// Admin will see: All Sellers, All Buyers (see requirement 12), Reported Items

// On the " Add A Product" route, create a form that will have fields for product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), description, price, Year of purchase and other relevant information. After submitting the form, a modal/toast with a message will pop up to inform the user. Please remember, they must be a seller to add a product (think about the verification process for the admin access). After adding the product, you will then be redirected to the My Products Page.

// On the "My Products" page, sellers can delete sales status (available or sold), price, and any other relevant information they want to show. Please note there will be a special button for each unsold/available product where the seller can hit the button to advertise.

// The advertised items will appear on the home page. Please note if there are no items marked as advertised, the advertised items section won't be displayed on the home page. The advertised section will only appear if there is one or more available (unsold items) are marked to be advertised.

// " My buyers" are optional. See the optional section for details. On this page, a seller will see the buyer's phone, name, email address, and location.

// In the All Sellers, the Admin will see the sellers. On the All Buyers route, the Admin can see all the Buyers. If the Admin wants, he can delete any buyers or sellers.

// On the navbar, there will be a Blogs route. This will be an open route (anyone visiting your website will see it). You will have to answer all the questions, and they are

// 13.1 What are the different ways to manage a state in a React application?

// 13.2 How does prototypical inheritance work?

// 13.3 What is a unit test? Why should we write unit tests?

// 13.4 React vs. Angular vs. Vue?

// Create a meaningful 404 page (not found page). Add a meaningful image on the 404 page.

// Use a database to store information. It could be MongoDB atlas or any other database. Save the users in the database

// Bonus Requirements
// Your Readme file for the client-side repo should have details about your project's features and functionalities in bullet points(at least five bullet points) and your live link. Adding a meaningful readme file for the server-side repo is optional.

// At least 16 meaningful GitHub commits for the client side and 9 meaningful commits for the server-side repository. Your code should be clean and organized. Comments should be added where necessary

// Add a meaningful favicon. If data is loading, a spinner will be displayed. When you are loading data by using a loader, make sure you have added a route.

// Implement an extra feature: WishList or Report to Admin(choose one) in the /category/:id route. A buyer can make a product to his/her wishlist or report an item by clicking a relevant button. If you have implemented the wishlist feature, show them in the buyer's Dashboard in a separate route, "My WishList." A user should be able to purchase the item from the wishlist page. (Just redirect the user to the purchase page)

// If you have implemented the "report to admin" feature, show the reported items in the admin dashboard in a separate route, "Reported Items" (tips: create a separate collection for the wish list and filter by user email address). An admin will be able to delete a reported item.

// Implement the basic version of the JWT token for email/password-based authentication. Upon social login, registration, and login, you will create a JWT token and store it on the client side. You will send the token for my orders, buyers, and advertisements routes and verify the user.

// The all-sellers route will have a name, email address, delete button, and verify button. Admin will be able to verify a seller. When clicked on the verify button, the seller's status will change from unverified to verified(show a blue tick when the seller is verified), and this status will be shown on the products added by a verified seller.

// The My Orders route will have a table/cards. Each card/ table row will be an order having an image, title, price, and a pay button. On clicking the pay button, to take the user the payment page with fields for card details will pop up, or the user will be taken to a route where there will be a form for filling up card details. Save the payment information in the database and inform the user via a modal/toast. Don't forget to update the button text to "paid" after payment. Please note, payment will be done by Stripe.

// Once an item is paid, it won't be displayed on the advertised item or on the category page. Only available items will be displayed to be purchased.

// Use react query for at least two API calls.Use Axios for at least one API call

// Most likely framework will do it for you. However do not forget to make your entire website responsive. (It is ok if the table is not responsive.) please note, all the pages including dashboard will be responsive.

// Database collection names, routes, mongdb features/operators when needed, api naming convension and best practices.

// Optional
// Explore react-image-galleryand use a slider instead of a picture in your /advertisement/:id route
// Add generic modal
// Add a search bar on the homepage and show advertisements based on the search key
// Add animation on the homepage
// Add another route," My Buyers," where you will have to show the Buyers name, email, item purchased, etc.
// Create a Make Admin route for the admin. Here an admin (admin only) will be able to make any buyer or seller an admin.
// What to submit
// Client-side code GitHub repository
// Server-side code GitHub repository
// Live website link
// IMPORTANT: For the examiners to check your admin routes, create a user for your site, give the email address: admin role and add this user's credentials in the client side readme in this exact format :
// adminEmail: <your admin email>

// adminPassword: <your admin password>

// Otherwise, you won't get any marks for your admin routes.