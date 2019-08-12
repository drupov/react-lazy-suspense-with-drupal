# Demo React/Drupal app to showcase React.lazy() and Suspense API

The repository includes a demo of React.lazy() and the Suspense API, included in React.js since the  16.6 release.

Data for the demo is coming from a Drupal 8 installation.

## Installation instructions

Run in `/backend`:

```bash
composer install
composer drupal-scaffold
```

Install your site. Generate some article content with Devel generate.

Run in `/frontend`:

```bash
npm install
npm start
```