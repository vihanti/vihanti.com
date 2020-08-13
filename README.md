# vihanti.com

This is the source for [vihanti.com](https://www.vihanti.com).

## Project setup
1. Install [homebrew](https://brew.sh/).

2. Run these commands to install needed tools:

   ```bash
   brew install asdf
   asdf plugin add yarn
   asdf plugin add nodejs
   yarn install
   ```

### Compiles and hot-reloads for development
```
yarn serve
```

After making changes, submit a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) to github.  When the change has been approved, merge it to the main branch.  This will automatically trigger deployment to production.

### Compiles and minifies for production
```
yarn build
```

To get a code size report, use:

```
yarn build --report
```

### Lints and fixes files
```
yarn lint
```

## Hosting
Because this is a static website, we're hosting it on [Netlify](https://netlify.com).  Not only is this free, but it also gives us automatic deployments triggered whenever the source is updated in github.  That is, Netlify automatically builds the code and then hosts the results for us.  Netlify even automatically deploys a preview site for pull requests!  This lets us use fancy tooling (like templates) without needing to manually build the code every time we want to update the website.  The vihanti.com domain name is hosted on [Porkbun](https://porkbun.com/).  We're using Netlify's nameservers, because this takes full advantage of Netlify's CDN.

## Email
We're using [mailcheap.co](https://www.mailcheap.co/) to host our email.  Currently, we've purchased the "Basic 10G" shared plan which gives us a total of 10G across all accounts.

### Web Consoles
* [mail11.mymailcheap.com](https://mail11.mymailcheap.com/)
  - our shared mail server
  - login using `jdve` to gain access to all server configs
  - login using `@vihanti.com` accounts to access webmail and preferences
* [console.mymailcheap.com](https://console.mymailcheap.com/)
  - some setup tools and documentation
  - login using administrator account

### Configuration
* **Login**: https://mail11.mymailcheap.com/
* **Username**: `USERNAME@vihanti.com`
* **Password**: `******`
* **IMAP**
  - **Server**: mail11.mymailcheap.com
  - **Port**: 993
  - **Require SSL**: Yes, SSL/TLS
  - **Authentication**: same as above
* **STMP**
  - **Server**: mail11.mymailcheap.com
  - **Port**: 587
  - **Require SSL**: Yes, STARTTLS/TLS
  - **Authentication**: same as above
