# Howler

Howler Live 

Howler is a Yelp-inspired full stack-web app. The app utilizes Ruby on Rails on the backend, a PostgreSQL database, and the front end is implemented using React.js with a Flux framework

## Features & Implementation

### Single-Page App

Howler is a single page app that is run on a single static page. This root page renders information based on data from a BusinessStore and a UserStore. These stores receive user informtion, business information, and error messages.

### Businesses and Reviews

Businesses are managed on a single table on the database. They store the businesses creators user_id, its address, hours and its price. Upon a search or request to view businesses an APi request fetches data for businesses using a query string. The data fetched also returns a featured image, which is found through an Active Record association to the Photos table. This information is maintained in the BusinessStore.

Upon a user click to see business details a fetch is made for a single business' details in addition to its reviews (through an active record association) and photos. This is used to update the BusinessStore. Images are hosted on the site using Cloudinary.

### Writing Reviews and Making Ratings

Users are able to write reviews for businesses, in addition to rating them using a 5 star scale. This information is used to update the BusinessStore as well as the database, which triggers a rerender and ensures that new reviews and ratings are updated without a refresh. The render will show users a login form if they are not logged in. 

ReviewForm Render: 
```javascript
	render: function () {
		return (
			<div className="review-form-and-button">
				{this.reviewButton()}
				{this.reviewForm()}
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}>
					<LoginForm formType="Log In"/>
				</Modal>
			</div>
		);
	}
	```

Users are also able to upload images for each businesses using the  Cloudinary upload widget. The URLs for these images are stored in the database as well as the BusinessStore, which ensures that photo uploads update without a refresh.

### Fuzzy Search

Businesses are rendered based on information stored in the BusinessStore. Upon typing a query, an API request is made to fetch businesses matching the passed query string. A listener on the search bar ensures that this update occurs on each keystroke. This data is used to update the business store, which triggers a render to the BusinessIndex which generates new results. 

## Future Directions for the Project

In addition to the aformentioned features, I plan to continue to implement features that will improve the performance of Howler as well as enrich the user experience. 

### Taggings

This feature will allow users to tag businesses. I plan to use these taggings to implement filter features similar to how my search filters according to a query string. I will use Active Record Associations to a tags table in order to handle this on the backend. 

### User Recommendations

Using user data (types of businesses reviewed, businesses the user rated highly, etc.) I will provide users with suggestions. My plan is to use taggings to identify the types of businesses users prefer and generate a rank for the businesses in my database (filtered by near user location).