import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'ScrollableSpBannerApplicationCustomizerStrings';

const LOG_SOURCE: string = 'ScrollableSpBannerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IScrollableSpBannerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ScrollableSpBannerApplicationCustomizer
  extends BaseApplicationCustomizer<IScrollableSpBannerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let styles = `div[class*="mainContent"] {overflow-y: auto;}div[class*="pageLayout"], div[class*="scrollRegion"] {overflow: visible !important;}`;
    let bannerStyle = document.createElement('style');
    bannerStyle.type = 'text/css';
    bannerStyle.appendChild(document.createTextNode(styles));

    document.getElementsByTagName('HEAD')[0].appendChild(bannerStyle);

    return Promise.resolve();
  }
}
