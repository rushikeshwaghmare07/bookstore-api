# Book-Store API Documentation

## Add Book-

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
The request body should be in JSON format and include the following fields:

- `title`: (string, required): Book title can not be more than 100 characters.

- `author` (string, required): Author name is required.
- `year` (Number, required): Year must be at least 1000.

---
