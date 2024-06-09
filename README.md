# Instructions

Run 'npm install' to install dependecies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

When you launch the app you see a search bar and a toggle button 'show only favorites'/'show all' at the top.
Underneath those there is a scrollable table which is showing countries fetched from 'https://restcountries.com/v3.1/all' api.
The table has columns showing some details about each countries namely:

1. Name
2. Flag
3. Population
4. Languages
5. Currencies

There is a column 'Favorite', which has a checkbox in each row to mark corresponding country as favorite.
There is a column 'Details', which has a button in each row to get more details about corresponding country.
When you click the 'Details' button, a popup opens showing more details (a subset of details available from
'https://restcountries.com/v3.1/all' api) about the country. Each column in the table is sortable (by
clicking the column header), and filter can be applied on each column using menu button on the column.

Search bar at the top, can be used to search a country by name, currency or language.
Click 'show only favorites' button to only see countries marked as favorite in the table, subsequently you can
use search on that subset of countries. When clicked the button changes to 'show all'
Click 'show all' button to see all countries, regardless of favorite markings.

# Comments

All the 'Requirements' mentioned in the Take_Home_Task.pdf have been implemented, namely:

1. Build the frontend of the application using React to create a seamless single-page experience.
2. Utilize the REST Countries API (https://restcountries.com/) to fetch the list of countries and their details.
3. Display a list of countries on the page, showing their name, flag, and basic information like population,
   language(s), and currency/currencies.
4. Implement a search functionality that allows users to search for countries by name, language, or currency
   without triggering a page reload.
5. Use Ag-Grid to display the list.
6. Display the search results in a list format, showing relevant information for each country, all within the same
   page.
7. Allow users to view the full details of a country when clicking on row, without navigating to a separate page.
8. Implement a favorites feature that allows users to mark countries as favorites and view their list of favorite
   countries.
9. Use local storage to persist the user's favorite countries between page reloads.
10. Add appropriate error handling for cases like API failures or invalid requests.

Additionally following requirements from 'Bonus Points (Optional)' section have also been implemented:

1. Include sorting options for the list of countries, e.g., sort by name, population, or currency.
2. Add a feature to filter countries based on various criteria, e.g., filter by language or currency.
3. Style Ag-Grid for visual appeal and usability
