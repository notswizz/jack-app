// utils/analytics.js

// Check if the script is running in the browser
export const GA_TRACKING_ID = 'G-94111WSW3C'; // Replace with your tracking ID

// Function to send events to Google Analytics
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Function to initialize Google Analytics
export const initGA = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID);
};
