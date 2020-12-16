const NEWS_API_KEY = "a0f0d60d6c6a436ea46f321fc4ec55e4";

export const getBitcoinArticles = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
