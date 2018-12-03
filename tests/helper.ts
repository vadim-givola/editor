import * as path from 'path';
import { Builder, By, promise, WebElementPromise } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { msleep } from 'sleep';


jest.setTimeout(60000);

const webDriver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(
    new Options()
      .addArguments(
        "--disable-extensions", 
        "--disable-gpu", 
        "--window-size=470,640"
      )
      .headless()
  )
  .build();

afterAll(() => {
  return webDriver.close();
});

class Elements {
  constructor(public elems: promise.Promise<Array<Element>>) {

  }

  async size(): promise.Promise<number> {
    return (await this.elems).length;
  }

  async click(index: number): promise.Promise<void> {
    return (await this.elems)[index].click();
  }

  async fill(index: number, text: string): promise.Promise<void> {
    return (await this.elems)[index].fill(text);
  }
}


class Element {
  constructor(public elem: WebElementPromise) {

  }

  async click(): promise.Promise<void> {
    return await this.elem.click();
  }

  async fill(text: string, clear: boolean = true): promise.Promise<void> {
    await this.elem.click();

    if (clear) {
      await this.elem.clear();
    }

    msleep(1);
    for (let i=0;i<text.length;i++) {
      await this.elem.sendKeys(text.charAt(i));
      msleep(1);
    }
  }

  isDisplayed(): promise.Promise<boolean> {
    return this.elem.isDisplayed();
  }

  getText(): promise.Promise<string> {
    return this.elem.getText();
  }

  getAttribute(key: string): promise.Promise<string> {
    return this.elem.getAttribute(key);
  }
}

export class Browser {
  static driver = webDriver

  static go(localPath: string): promise.Promise<void> {
    return Browser.driver.get(`file://${path.resolve(__dirname, '..', localPath)}`);
  }

  static find(selector: string, index: number = 0): Element {
    return new Element(Browser.driver.findElement(By.css(selector)));
  }

  static findAll(selector: string): Elements {
    return new Elements(
      Browser.driver.findElements(By.css(selector))
        .then((elems) => {
          return elems.map((elem) => {
            return new Element(new WebElementPromise(Browser.driver, Promise.resolve(elem)));
          })
        })
    );
  }

  static async waitUntil(fn: () => promise.Promise<boolean>): promise.Promise<void> {
    let result = await fn();
    
    if (result) { 
      return;
    } else {
      msleep(500);
      return Browser.waitUntil(fn);
    }
  }
}