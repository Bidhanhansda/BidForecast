
# Weather Forecast App(bidforecast)

This is a simple weather forecast web application that displays weather information for a specific location using data fetched from the WeatherAPI. The application is built with JavaScript and React and is deployed on Netlify.


## Usage

To use the Weather Forecast App, simply enter a location (e.g. city or postal code) in the search bar and click the search button. The application will then fetch weather information for that location from the WeatherAPI and display the results on the page.
```


## API Reference

#### Get all items

```http
  https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Demo

https://bidforecast.netlify.app/


## Screenshots

![App Screenshot](https://res.cloudinary.com/bidcode/image/upload/v1683601910/bidforecast_uz5zgz.png)


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## Tech Stack

**Client:** React, TailwindCSS




## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

