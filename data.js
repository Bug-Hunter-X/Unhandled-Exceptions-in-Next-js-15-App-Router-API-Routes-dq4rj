```javascript
// pages/api/data.js
export default async function handler(req, res) {
  // Simulate an API call that might throw an error
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // This error is not handled properly in Next.js 15 App Router
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```