

```markdown
# Translation Server

This is a simple Express.js-based translation server that utilizes Google Translate API for translating text between different languages.

## Features

- Translates text from one language to another using the Google Translate API.
- Supports CORS (Cross-Origin Resource Sharing) to allow client-side applications to access the server.
- Custom `Content-Security-Policy` to control the sources for fetching data.
  
## API Endpoints

### `GET /translate`

This endpoint allows you to translate text from one language to another.

#### Request Parameters:

- `text` (string, required): The text you want to translate.
- `from` (string, required): The source language code (e.g., `en` for English, `es` for Spanish).
- `to` (string, required): The target language code (e.g., `fr` for French, `de` for German).

#### Example Request:

```
GET http://localhost:3000/translate?text=hello&from=en&to=uz
```

#### Response:

- Returns a JSON object with the translated text.

```json
{
  "translated": "salom"
}
```

#### Error Responses:

- If the required query parameters are missing, a `400` error will be returned.

```json
{
  "error": "Missing required parameters (text, from, to)"
}
```

## Installation

### Prerequisites

- Node.js (v12 or above)
- npm (Node Package Manager)

### Steps to Run Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/abduraimovabdurahmon/translation-server.git
   cd translation-server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The server will be running on [http://localhost:3000](http://localhost:3000).

## Configuration

You can configure the following settings in the code:

- **CORS**: The `origin` is set to `*` for allowing any client to make requests. Modify it to restrict access if needed.


## Notes

- This server uses the Google Translate API for translations. Make sure to comply with the API's usage policies.
- The server is only intended for basic translation and does not handle large-scale or high-frequency requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

This `README.md` provides a clear explanation of how to set up and use the translation server. You can customize it further depending on the specifics of your project.
