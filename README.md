# Book-Store API Documentation

## **Add Book** -

### Overview

This API handles the addition of new books to the application’s book collection.

---

### Endpoints

- ### URL: `/api/books/add`
- ### Method: `POST`

---

### Request Body:

The request body should be in JSON format and include the following fields:

- `title`: (string, required): Book title can not be more than 100 characters.

- `author` (string, required): Author name is required.
- `year` (Number, required): Year must be at least 1000.

### Example Response:

- `title`: (string, required): Book title can not be more than 100 characters.

- `author` (string, required): Author name is required.
- `year` (Number, required): Year must be at least 1000.

---

## **Get All Books** -

### Overview

This API retrieves all the books available in the application’s book collection.

---

### Endpoints

- ### URL: `/api/books/get-all`
- ### Method: `GET`

---

### Request Body:

This endpoint does not require a request body.

---

### Example Response:

- **Success (200) - Body (JSON):**
  ```json
  {
  "success": true,
  "data": [
    {
  "success": true,
  "data": [
    {
      "id": "64e456f8fcd49300126c9abc",
      "title": "Clean Code",
      "author": "Robert C. Martin",
      "year": 2008,
      "createdAt": "2023-12-24T14:52:18.255Z",
      "updatedAt": "2023-12-24T14:52:18.255Z"
    },
    {
      "id": "64e456f8fcd49300126c9def",
      "title": "The Pragmatic Programmer",
      "author": "Andrew Hunt, David Thomas",
      "year": 1999,
      "createdAt": "2023-12-24T14:53:18.255Z",
      "updatedAt": "2023-12-24T14:53:18.255Z"
    }
  ],
  "message": "All books retrieved successfully."
  }
  ```

---

- **Error response (500)**

```json
{
  "success": false,
  "message": "Failed to fetch books. Please try again later."
}
```

---

### **Error Handling**

- **Missing Fields or Server Issues:** A `500` status is returned with an appropriate message.

---

## Notes

- If there are no books in the database, the response will include an empty array in the data field:

```json
{
  "success": true,
  "data": [],
  "message": "No books available in the database."
}
```

---

## **Get Book by ID** -

### Overview

This API retrieves a single book from the application’s book collection based on its unique ID.

---

### Endpoints

- ### URL: `/api/books/:id`
- ### Method: `GET`

---

### Request Body:

- id (string, required):
  The unique identifier of the book to be retrieved. Must be a valid MongoDB ObjectId.

---

### Example Response:

- **Success (200) - Body (JSON):**
  ```json
  {
    "success": true,
    "data": {
      "id": "64e456f8fcd49300126c9abc",
      "title": "Clean Code",
      "author": "Robert C. Martin",
      "year": 2008,
      "createdAt": "2024-12-24T14:52:18.255Z",
      "updatedAt": "2024-12-24T14:52:18.255Z"
    },
    "message": "Book retrieved successfully."
  }
  ```
---
- **Error Response (400)**

  Occurs when the id provided is not a valid MongoDB ObjectId format:
  ```json
  {
    "success": false,
    "message": "Failed to fetch books. Please try again later."
  }
  ```
---

- **Error Response (404)**

  Occurs when no book is found for the provided id:
  ```json
  {
    "success": false,
    "message": "Book not found."
  }
  ```
---

- **Error Response (500)**

  Occurs when there is a server-side issue during processing:
  ```json
  {
    "success": false,
    "message": "An error occurred while fetching the book. Please try again later."
  }

  ```
---

### **Error Handling**

- **Invalid ID Format:** A 400 status code is returned if the provided id is not in a valid MongoDB ObjectId format.

- **Book Not Found:** A 404 status code is returned if no book exists for the provided id.

- **Server Error:** A 500 status code is returned if there is a server issue.


---

## Notes

- Ensure the id parameter is passed correctly in the URL and follows the MongoDB ObjectId format.

- Use the response codes to differentiate between client-side input issues `(400/404)` and server-side issues `(500)`.

---

## **Delete Book by ID** -

### Overview

This API allows you to delete a specific book from the application’s book collection using its unique ID.

---

### Endpoints

- ### URL: `/api/books/:id`
- ### Method: `DELETE`

---

### Request Body:

- id (string, required):
  The unique identifier of the book to be retrieved. Must be a valid MongoDB ObjectId.

---

### Example Response:

- **Success (200) - Body (JSON):**
  ```json
  {
    "success": true,
    "message": "Book deleted successfully."
  }
  ```
---
- **Error Response (400)**

  Occurs when the id provided is not a valid MongoDB ObjectId format:
  ```json
  {
    "success": false,
    "message": "Invalid book ID format."
  }
  ```
---

- **Error Response (404)**

  Occurs when no book is found for the provided id:
  ```json
  {
    "success": false,
    "message": "Book not found."
  }
  ```
---

- **Error Response (500)**

  Occurs when there is a server-side issue during processing:
  ```json
  {
    "success": false,
    "message": "An error occurred while deleting the book. Please try again later."
  }

  ```
---

### **Error Handling**

- **Invalid ID Format:** A 400 status code is returned if the provided id is not in a valid MongoDB ObjectId format.

- **Book Not Found:** A 404 status code is returned if no book exists for the provided id.

- **Server Error:** A 500 status code is returned if there is a server issue.


---

## Notes

- Ensure the id parameter is passed correctly in the URL and follows the MongoDB ObjectId format.

---
## **Update Book by ID** -

### Overview

This API handles the updating of an existing book's details in the application’s book collection.

---

### Endpoints

- ### URL: `/api/books/:id`
- ### Method: `PUT`

---

### Request Parameter:

- id (string, required):
  The unique identifier of the book to be retrieved. Must be a valid MongoDB ObjectId.

---

### Request Body:

The request body should be in JSON format and include one or more of the following fields to update:

- `title` (string, optional): The new title of the book. Cannot exceed 100 characters.

- `author` (string, optional): The new author name.

- `year` (number, optional): The updated year of the book.

***Note***: At least one field must be provided in the request body.

---

### Example Request:

- **URL:**
- `/api/books/update/64e456f8fcd49300126c9abc
`

- **Body:**

  ```json
  {
    "title": "Refactoring",
    "author": "Martin Fowler",
    "year": 2018
  }
  ```
---

### Example Response:

- **Success (200):**

  ```json
  {
    "success": true,
    "data": {
      "_id": "64e456f8fcd49300126c9abc",
      "title": "Refactoring",
      "author": "Martin Fowler",
      "year": 2018,
      "createdAt": "2023-12-24T14:52:18.255Z",
      "updatedAt": "2023-12-25T10:00:00.000Z"
    },
    "message": "Book updated successfully."
  }
  ```
---

- **Error (400) - Invalid Book ID Format:**

  ```json
  {
    "success": false,
    "message": "Invalid book ID format."
  }
  ```
---

- **Error (400) - No Data Provided:**

  ```json
  {
    "success": false,
    "message": "No data provided for updating the book."
  }
  ```
---

- **Error (404) - Book Not Found:**

  ```json
  {
    "success": false,
    "message": "Book not found."
  }
  ```
---

- **Error (500):**

  ```json
  {
    "success": false,
    "message": "An error occurred while updating the book. Please try again later."
  }
  ```
---

### **Error Handling**

- **Invalid ID Format:** If the id parameter is not a valid MongoDB ObjectId, a 400 error is returned.

- **No Data in Request Body:** If the request body does not contain any valid fields to update, a 400 error is returned.

- **Book Not Found:** If the book ID does not exist in the database, a 404 error is returned.

- **Server Errors:** For any unexpected errors, a 500 status is returned with a relevant message.

---

## Notes

- The `id` parameter must be a valid MongoDB ObjectId. Ensure the client validates this before making a request.

- The response will include the updated book data if the operation is successful.

- Only the fields provided in the request body will be updated. Fields not included will remain unchanged.
---
