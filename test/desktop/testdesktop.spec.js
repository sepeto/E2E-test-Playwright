const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://testapp.securednow.com/Account/Login
  await page.goto('https://testapp.securednow.com/Account/Login');
  // Click text=switch
  await page.click('text=switch');
  // Fill input[name="Input.Name"]
  await page.fill('input[name="Input.Name"]', 'exsetlabs_com');
  // Press Enter
  /*await Promise.all([
    page.waitForNavigation(/{ url: 'https://testapp.securednow.com/Account/Login' }/),
    page.press('input[name="Input.Name"]', 'Enter')
  ]);*/
  // Click input[name="LoginInput.UserNameOrEmailAddress"]
  await page.click('input[name="LoginInput.UserNameOrEmailAddress"]');
  // Fill input[name="LoginInput.UserNameOrEmailAddress"]
  await page.fill('input[name="LoginInput.UserNameOrEmailAddress"]', 'aleksei.golov@exsetlabs.com');
  // Press Tab
  await page.press('input[name="LoginInput.UserNameOrEmailAddress"]', 'Tab');
  // Fill input[name="LoginInput.Password"]
  await page.fill('input[name="LoginInput.Password"]', '1q2w3E*');
  // Go to https://testapp.securednow.com/Company
  await page.goto('https://testapp.securednow.com/Company');

  const name = await page.innerText("#app > div > div.main-content > section > div.section-body > div.section-header > h1");
  expect(name).toBe("Welcome Aleksei");

});