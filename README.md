<br>

<div align="center">
	<img src=".github/branding/banner.png">
</div>

<br>

<h1 align="center">
	Surrealist for SurrealDB
</h1>

<p align="center">
  <a href="https://github.com/StarlaneStudios/surrealist/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/StarlaneStudios/surrealist"> 
  </a>
  <a href="https://discord.gg/exaQDX2">
  	<img src="https://img.shields.io/discord/414532188722298881">
  </a>
  <img src="https://img.shields.io/github/repo-size/StarlaneStudios/surrealist">
  <img src="https://img.shields.io/github/contributors/StarlaneStudios/surrealist">
</p>

Surrealist is a simple to use Browser and Desktop based query playground and database explorer for [SurrealDB](https://surrealdb.com/). You can connect to any SurrealDB server and execute queries in a graphical interface, including table & variable auto completion, syntax highlighting, and much more. Switch to the explorer view to browse database tables, edit record contents, and traverse graph relationships.

## Features
- 📌 Multi-tab query editing
- ⚡ SurrealQL syntax highlighting
- 🔍 Database explorer & record inspector
- 📋 Automatic table name completion
- 💫 Support for multiple queries in one request
- ✏️ Define variables in a seperate panel
- 🔭 Start a local database directly from the application
- 📜 Query history & Query favoriting

## Web App
You can use Surrealist by visiting https://surrealist.app/

While the web app provides a convenient and easy way to use Surrealist, the desktop app offers additional features such as an integrated database runner and offline support.

## Download
You can download the latest version of Surrealist Desktop from our [Releases](https://github.com/StarlaneStudios/Surrealist/releases) page.

### Running on MacOS
When running Surrealist on MacOS, as the application is not signed, you may be prompted that the file is damaged and can't be opened. If this happens, try the following steps:

- Move the downloaded `surrealist-xxx-darwin-arm64.tgz` outside of your Downloads folder (to add Surrealist to your Launchpad, place it in the `/Applications` directory)
- Extract the application from the tgz file
- Delete the tgz file, as it is no-longer needed
- Open the Terminal app and navigate to the directory you extracted Surrealist into
- Run the command `sudo xattr -rd com.apple.quarantine Surrealist.app` (You may be prompted to enter your password)

If these steps don't work, please open an issue ticket.

## Local database
You can start a local database directly from the application by pressing the start button in the top right. Doing so will start up a SurrealDB instance using the credentials and port entered for the current tab.

You can choose whether the local database is stored in memory or stored on disk on the Settings screen.

This functionality is currently only available in the desktop app.

## Query view
Use the Query View to execute queries against your database. You can define variables in the Variables panel and use them in your queries, and browse the results in the Results panel.

Executed queries are saved to the Query History or can be manually saved to the Favorites panel to quickly access previous queries.

![Query View](.github/branding/query-view.png)

## Explorer view
The Explorer View is used to browse your database and inspect individual records. When you select a table in the left panel, the table contents will be displayed in the Record Explorer. You can click on a record id to open the Record Inspector, in which you can edit the record contents and traverse graph relationships.

![Explorer View](.github/branding/explorer-view.png)

## Contributing
We welcome any issues and PRs submitted to Surrealist. Since we currently work on multiple other projects and our time is limited, we value any community help in supporting a rich future for Surrealist.

Before you open an issue or PR please read our [Contributor Guide](CONTRIBUTING.md).

## Development
This project is built using [Wails v2](https://wails.io/) and [React](https://reactjs.org/).

### Requirements
- [Go](https://go.dev/)
- [Wails CLI](https://wails.io/docs/gettingstarted/installation)
- [Nodejs LTS](https://nodejs.org/en/)
- [PNPM](https://pnpm.io/) (npm i -g pnpm)

### Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

### Building

To build a redistributable, production mode package, use `wails build`.

## Maintainers
<a href="https://starlane.studio#gh-light-mode-only">
  <img src=".github/branding/starlane-dark.png" height="64">
</a>
<a href="https://starlane.studio#gh-dark-mode-only">
  <img src=".github/branding/starlane-light.png" height="64">
</a>

Surrealist is built and maintained by <a href="https://starlane.studio/">Starlane Studios</a> at no cost. If you would like to support our work feel free to [donate to us](https://paypal.me/ExodiusStudios) ⚡

## License

Surrealist is licensed under [MIT](LICENSE)

Copyright (c) 2022, Starlane Studios
