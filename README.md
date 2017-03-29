# Apsis Website

Getting up and running should be very fast.

- `vagrant up`
- `_bin/serve.sh`
- Visit `http://localhost:4000`.
- Rejoice.

# Creating Content

New content belongs in `_drafts`. Once the draft has been reviewed, it will be moved to `_posts` on a scheduled publication day. The content creation workflow is fairly simple:

1. `_bin/new-draft.sh` > `"My New Draft"`
2. `$EDITOR _drafts/my-new-draft.md`
3. `git checkout -b draft/my-draft`
4. `git add _drafts/my-new-draft.md`
5. `git commit -m "Adding My Draft"`
6. Push to GitHub, and open a Pull request from `draft/my-draft` to `master`.
7. Henry will publish your draft on the next available publication day!

## Using Assets

Jekyll supports Github Flavored Markdown really well; eventually, I'm sure you'll want to use an image in the body of your post. In that case, the best way to do so is to take advantage of the Jekyll Assets gem. Placing your image on its own line, like so:

```
    ![My helpful screenshot]({% asset_path posts/image_path.jpg %})
```

## oEmbeds

We support oEmbeds for a few services, and adding more is simple. If you'd like to include a YouTube or Vimeo video or a link to a tweet, simply paste the URL into the body of your post on its own line. The interpreter will auto link it, and javascript will render it as an oEmbed template.

# Publication Workflow

## Asynchronously by all contributors

- People write posts as described above.
- Pull request is sent from `draft/whatever` branch against `master`
    - PR adds a new blog post under `_drafts`
    - Ping slack channel so people go review your new post!
    - People review the draft; revisions are made; etc.
- Pull Request is eventually approved and merged into `master`.

## Publication Day

- A post to publish is decided upon. Usually this will just be the oldest approved and unpublished post. Particularly topical posts may occasionally warrant being pushed to the front of the line.
- PUBLISHER declared (default: Henry).
- PUBLISHER:
    - Pull latest from `master`; `vagrant up`.
    - Create branch: `release/yyyy-mm-dd-publish-whatever-post`.
    - SSH into the machine; `bundle exec jekyll publish _drafts/whatever-draft.md`.
    - Host machine: `_bin/serve.sh`.
    - Visit `localhost:4000/blog`. Ensure that the new post appears and looks good.
    - Add any missing metadata (author, photo (800px width), etc).
    - When everything looks good, run `_bin/deploy.sh` from the host machine.
    - Visit www.apsis.io/blog and ensure that everything looks good.
    - Promote:
        - On Twitter
        - Internally on Slack
        - Ping relevant PROMOTERS on Slack
    - Update the Post History on the internal wiki
    - Ensure that at least the next three blog post JIRAs exist on the Apsis Jira board. If they don't, ping Henry to create them.
- PROMOTERS:
    - If so inclined, promote using relevant personal accounts (e.g. Facebook, Reddit, Hacker News, etc.)

## List of Promoters

This list indicates people who have expressed willingness to promote certain blog posts using personal accounts on various communities.

- Hacker News
    - Wyatt
    - Noah
- /r/programming
    - Wyatt
- Facebook
    - Wyatt
    - Henry

# Deploying the Site

## With the VM

Deploying is as easy as running `_bin\deploy.sh` on the host machine while the VM is running. This rebuilds *the current branch* into `gh-pages`, which is the actual live branch.

## From Bare Host Machine

If you're running jekyll locally on your host machine, the `_bin` script won't work. Instead, you'll want to use the `rake` task:

```
    bundle exec rake site:publish
```

# Jekyll Command Reference

Jekyll commands run through bundler on the VM, so all the following would look like `bundle exec jekyll COMMAND`.

```
    draft NAME                                  # Creates a new draft post with the given NAME
    post NAME                                   # Creates a new post with the given NAME
    page NAME                                   # Creates a new page with the given NAME
    publish _drafts/NAME.md [--date yyyy-mm-dd] # Moves a draft into the _posts directory and sets the date
    unpublish _posts/NAME.md                    # Moves a post back into the _drafts directory
```
