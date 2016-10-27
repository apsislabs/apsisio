# Apsis Website

Getting up and running should be very fast.

- `vagrant up`
- `_bin/serve.sh`
- Visit `http://localhost:4000`.
- Rejoice.

# Creating Content

New content belongs in `_drafts`. Once the draft has been reviewed, it can be moved to `_posts`. There are some simple to use commands that should help this workflow:

```
    draft      # Creates a new draft post with the given NAME
    post       # Creates a new post with the given NAME
    publish    # Moves a draft into the _posts directory and sets the date
    unpublish  # Moves a post back into the _drafts directory
    page       # Creates a new page with the given NAME
```

Create your new draft using:

```
    $ bundle exec jekyll draft "My new draft"
```

Publish your draft using:

```
    $ bundle exec jekyll publish _drafts/my-new-draft.md
    # or specify a specific date on which to publish it
    $ bundle exec jekyll publish _drafts/my-new-draft.md --date 2014-01-24
```

Unpublish your post using:

```
    $ bundle exec jekyll unpublish _posts/2014-01-24-my-new-draft.md
```

# Publication Workflow

We follow a fairly simple publication workflow that relies on `git`.

1. `bundle exec jekyll draft "My New Draft"`
2. `$EDITOR _drafts/my-new-draft.md`
3. `git checkout -b draft/my-draft`
4. `bundle exec jekyll publish _drafts/my-draft.md`
5. `git add _posts`
6. `git commit -m "Adding My Draft"`

Because the `_drafts` folder is in the `.gitignore` you can work on as many posts as you'd like without worrying about branching.

# Writing Posts

## Using Assets

Jekyll supports Github Flavored Markdown really well; eventually, I'm sure you'll want to use an image in the body of your post. In that case, the best way to do so is to take advantage of the Jekyll Assets gem. Placing your image on its own line, like so:

```
    ![My helpful screenshot]({% asset_path posts/image_path.jpg %})
```

## oEmbeds

We support oEmbeds for a few services, and adding more is simple. If you'd like to include a YouTube or Vimeo video or a link to a tweet, simply paste the URL into the body of your post on its own line. The interpreter will auto link it, and javascript will render it as an oEmbed template.

# Deploying the Site

## From the VM

Deploying is as easy as `_bin\deploy.sh`, hopefully. This rebuilds `master` into `gh-pages`, which is the actual live branch.

## From Host Machine

If you're running jekyll locally on your host machine, the `_bin` script won't work. Instead, you'll want to use the `rake` task:

```
    bundle exec rake site:publish
```
