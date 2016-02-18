# Apsis Website

Getting up and running should be very fast. Once you've cloned the repo, all you'll need to do is `cd` to the proper directory, and run `bundle install`.

To run the development site, run `jekyll serve` and visit `http://localhost:4000`.

# Creating Content

New content belongs in `_drafts`. Once the draft has been reviewed, it can be moved to `_posts`. There are some simple to use commands that should help this workflow:

```sh
    draft      # Creates a new draft post with the given NAME
    post       # Creates a new post with the given NAME
    publish    # Moves a draft into the _posts directory and sets the date
    unpublish  # Moves a post back into the _drafts directory
    page       # Creates a new page with the given NAME
```

Create your new post using:

    `$ bundle exec jekyll post "My New Post"`

Create your new draft using:

    `$ bundle exec jekyll draft "My new draft"`

Publish your draft using:

```sh
    $ bundle exec jekyll publish _drafts/my-new-draft.md
    # or specify a specific date on which to publish it
    $ bundle exec jekyll publish _drafts/my-new-draft.md --date 2014-01-24
```

Unpublish your post using:

    `$ bundle exec jekyll unpublish _posts/2014-01-24-my-new-draft.md`

# Publication Workflow

We follow a fairly simple publication workflow that relies on `git`.

1. `bundle exec jekyll draft "My New Draft"`
2. `$EDITOR _drafts/my-new-draft.md`
3. `git checkout -b draft/my-draft`
4. `bundle exec jekyll publish _drafts/my-draft.md`
5. `git add _posts`
6. `git commit -m "Adding My Draft"`

Because the `_drafts` folder is in the `.gitignore` you can work on as many posts as you'd like without worrying about branching.

# Deploying the Site

Deploying is as easy as `bundle exec rake site:publish`. This will
