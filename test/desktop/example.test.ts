const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://testapp.securednow.com/Account/Login
  await page.goto('https://testapp.securednow.com/Account/Login');

  // Click text=switch
  await page.click('text=switch');

  // Click input[name="Input.Name"]
  await page.click('input[name="Input.Name"]');

  // Fill input[name="Input.Name"]
  await page.fill('input[name="Input.Name"]', 'recover_com');

  // Click button:has-text("Save")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://testapp.securednow.com/Account/Login' }*/),
    page.click('button:has-text("Save")')
  ]);

  // Click input[name="LoginInput.UserNameOrEmailAddress"]
  await page.click('input[name="LoginInput.UserNameOrEmailAddress"]');

  // Fill input[name="LoginInput.UserNameOrEmailAddress"]
  await page.fill('input[name="LoginInput.UserNameOrEmailAddress"]', 'info@recover.com');

  // Press Tab
  await page.press('input[name="LoginInput.UserNameOrEmailAddress"]', 'Tab');

  // Fill input[name="LoginInput.Password"]
  await page.fill('input[name="LoginInput.Password"]', 'Piripa.321');

  // Click button:has-text("Login")
  await page.click('button:has-text("Login")');
  expect(page.url()).toBe('https://testapp.securednow.com/Company');

  // Click text=Welcome, joseba
  await page.click('text=Welcome, joseba');

  const name = await page.innerText("#app > div > div.main-content > section > div.section-body > div.section-header > h1");
  expect(name).toBe("Welcome, joseba");

  // Press c with modifiers
  await page.press('body', 'Control+c');

  // Close page
  await page.close();

});