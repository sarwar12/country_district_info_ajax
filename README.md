Wikipedia Data API Integration

This project utilizes the Wikipedia API to collect data from Wikipedia. It provides users with easy access to information from Wikipedia articles.
Features

    Fetches data from Wikipedia using the API

    Returns data in JSON format

    Allows searching for specific keywords or articles

    Uses various Wikipedia API features such as search, page information, etc.

Installation
Prerequisites

To run this project, you need to have the following installed on your system:

    Python 3.x

    requests (Python library)

Installation Steps:

    Navigate to the project directory.

    Run the following command in your terminal:

    pip install -r requirements.txt

    Now you are ready to use the API!

Usage

Here’s an example of how to fetch data from Wikipedia using the API:

import requests

def get_wikipedia_data(query):
    url = f"https://en.wikipedia.org/w/api.php"
    params = {
        'action': 'query',
        'format': 'json',
        'titles': query,
        'prop': 'extracts',
        'exintro': True
    }
    response = requests.get(url, params=params)
    data = response.json()

    return data

# Example:
query = "Python_(programming_language)"
data = get_wikipedia_data(query)
print(data)

This example fetches information related to the article "Python (programming language)" from Wikipedia and outputs the data in JSON format.
Configuration

If you need to customize the settings for the project, you can modify the config.py file. Here you can change the API URL or other settings if needed.
Contributing

If you'd like to contribute to this project, please feel free to create a pull request or open an issue.
License

This project is licensed under the MIT License.
