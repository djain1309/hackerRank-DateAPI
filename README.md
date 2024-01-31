# Project Issues Documentation

## Issues Identified

### First Issue: Axios Module Error

#### Description
In the HackerRank Code provided, axios is used for making HTTP requests. However, using axios in this context throws an error as it cannot be used outside a module.

#### Original Code
```javascript
import axios from 'axios';
const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';

export default {
    getAPIResponse() {
    }
};
```
### Solution
Replace axios with the fetch API to resolve the module error.

```
javascript
const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';

export default {
    getAPIResponse() {
        return fetch(DATE_JSON_URL);
    }
};

```

### Second Issue with Test Case

Description
The test case provided for the API call expects hardcoded values, which is not feasible as the API returns the current date and time. This leads to a mismatch between the expected hardcoded values and the actual dynamic response from the API.


Original Test Case

```
javascript
it('check if button click splits and displays the date', async () => {
    const url = "https://jsonmock.hackerrank.com/datetime";
    fetchMock.getOnce(
        url,
        JSON.stringify({
            "time": "09:13:23 AM", "date": "10-09-2011"
        })
    );

    const { getByText, getByTestId } = renderApp();
    const button = getByTestId("date-button");
    fireEvent.click(button);
    await waitFor(() => {
        expect(getByTestId("day")).toHaveTextContent("Day: 9");
        expect(getByTestId("month")).toHaveTextContent("Month: 10");
        expect(getByTestId("year")).toHaveTextContent("Year: 2011");
    });
})

```

### Recommendation
It is advised to modify the test case to accommodate dynamic responses from the API, rather than relying on hardcoded values.

Steps to run the code:

# install nodejs
# get the code
# move to directory : Project "Date API" through terminal
# enter command to install the packages: npm install
# enter command to start the application: npm start
# enter command to run the tests: npm run test