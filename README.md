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

