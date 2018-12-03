import * as path from 'path'
import {Browser} from './helper'


test('fills textbox, uploads an image, and uploads a video', async () => {
  await Browser.go('dist/demo.html');
  await Browser.find('.editor-control__text-button').click();
  await Browser.find('.editor-block__text textarea').fill('middle');

  await Browser.findAll('.editor-control__youtube-button').click(1);
  await Browser.find('.editor-block__youtube input[type=text]').fill("https://www.youtube.com/watch?v=J_rfmXdRAxY")
  await Browser.waitUntil(async () => {
    return (await Browser.findAll(".editor-block__youtube__img").size()) > 0
  });
  expect(await Browser.find('.editor-block__youtube__img').getAttribute("src")).toContain("J_rfmXdRAxY");
  expect(await Browser.find('.editor-block__youtube__img').isDisplayed()).toBe(true);

  await Browser.findAll('.editor-control__image-button').click(0);
  await Browser.find('.editor-block__image__upload-button').isDisplayed();
  await Browser.find('.editor-block__image input[type=file]').elem.sendKeys(path.resolve(__dirname, 'test.png'));
  await Browser.waitUntil(() => { return Browser.find('.editor-block__image__img').isDisplayed() });
 
  let imageUrl = await Browser.find('.editor-block__image__img').getAttribute('src');
  expect(imageUrl).toContain('cloudinary');

  await Browser.findAll('.editor-control__video-button').click(2);
  await Browser.find('.editor-block__video__upload-button').isDisplayed();
  await Browser.find('.editor-block__video input[type=file]').elem.sendKeys(path.resolve(__dirname, 'test.mp4'));
  await Browser.waitUntil(() => { return Browser.find('.editor-block__video__video-elem').isDisplayed() });

  let videoUrl = await Browser.find('.editor-block__video__video-elem').getAttribute('src');
  expect(videoUrl).toContain('cloudinary');
  expect(videoUrl).toContain('/vc_auto/'); // important codec to make it suitable for web

  await Browser.find('#getRawContentButton').click();

  expect(JSON.parse(await Browser.find('#rawContent').getText())).toEqual(
    [
      {type: 'image', url: imageUrl},
      {type: 'text', content: 'middle'},
      {type: 'video', url: videoUrl},
      {type: 'youtube', url: "https://www.youtube.com/watch?v=J_rfmXdRAxY"},
    ]
  );
})