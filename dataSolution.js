```javascript
// pages/api/dataSolution.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      const errorData = await response.json(); // Attempt to parse error response
      const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(error.status || 500).json({ error: error.message || 'Failed to fetch data' });
  }
}
```