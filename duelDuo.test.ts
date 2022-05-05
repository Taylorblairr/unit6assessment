
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    const botAdd = await driver.findElement(By.id('draw'));
    botAdd.click();
    await driver.sleep(2000);
    
    const botAdded = await driver.findElement(By.id('player-duo'))
    expect(botAdded).toBeTruthy
    await driver.sleep(2000);
})

module.exports = { driver };