## scrollable-sp-banner
This is SPFx extensions application customizer sample.
This SPFx extension can scroll your SharePoint communication site.

### BeforedDebug
- config/serve.json: 7, 18
    - Set yorur debuging site page path.

### Debuging the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp serve --nobrowser
```

### Deploy your tenant
1. Bundle solution.
2. Package solution.
3. Upload your app catalog site. (ex. https://\<tenant\>.sharepoint.com/sites/apps)
4. Add this app to your Communication site.
5. Access to your site home page.
