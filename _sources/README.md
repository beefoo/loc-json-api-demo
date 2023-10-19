# Library of Congress JSON API Demo

This is a small [Jupyter notebook](https://jupyterbook.org/) that shows how to use the [Library of Congress](https://www.loc.gov/)'s [JSON API](https://www.loc.gov/apis/json-and-yaml/) using [Python](https://www.python.org/).  It demonstrates the following:

1. Doing a basic API search
2. Paginating through results
3. Downloading, processing, and displaying images

If using locally, you will need to install the required Python libraries to use these notebooks: `pip install -r requirements.txt`

View the notebook online here: [https://beefoo.github.io/loc-json-api-demo/](https://beefoo.github.io/loc-json-api-demo/)

## For LoC developers

This repository is also an example of how to build and deploy a notebook on [GitHub Pages](https://pages.github.com/) using [GitHub Actions](https://docs.github.com/actions). It roughly follows the [recommended workflow](https://jupyterbook.org/en/stable/publish/gh-pages.html#automatically-host-your-book-with-github-actions) for automatically host your book with GitHub Actions.

The key file to have is the workflow file which can be found in [.github/workflows/main.yml](https://github.com/beefoo/loc-json-api-demo/blob/main/.github/workflows/main.yml). So when you push to the main branch on Github, it should automatically build your Jupyter notebook to the `gh-pages` branch that you can associated with Github Pages.

1. Ensure you update your Personal Access Token with the `workflow` scope enabled in GitHub, or create a new one, and configure your git client to use that.
2. Also on your Github project settings page, go to `Settings -> Actions -> General -> Action permissions` and select `Allow all actions and reusable workflows`. And under `Workflow permissions` select `Read and write permissions`
3. Lastly under `Settings -> Pages`, make sure `Source -> Deploy from branch` and the branch is `gh-pages / (root)`
