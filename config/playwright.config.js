const { devices } = require('@playwright/test');

module.exports = {
    use: {
        headless: true,
      },

     projects: [
  
    {
        name: 'chromium',
        use: {
          browserName: 'chromium',
          viewport: { width: 1200, height: 720 },
        },
      },

    
      /*{
        name: 'Desktop Chromium',
        use: {
          browserName: 'chromium',
          viewport: { width: 1200, height: 720 },
        },
      },*/
    
   
  ],
};
