# MyReads Project

My Reads allows you to search for books using specific search terms, and enables you to locate the books into three shelves categorized as follows:

* Currently Reading
* Want to Read
* Read

You can also update your shelves by moving the books from shelf to another as you want

## How to run the project on your PC

To be able to run My Reads Project Please do the following:

* Clone the project to your PC `git clone <the project GitHub URL>`
* install all project dependencies with `npm install`
* start the development server with `npm start`


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.