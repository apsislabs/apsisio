---
layout: post
author: chris
title: Bash Directory Completion
image: 'posts/bash.gif'
---

Every developer should have at least a basic mastery of their command line. I'd argue
that part of that mastery is to develop a set of customizations they take with them
wherever they go. These customizations should make things you do all the time faster.
Obviously there are diminshing returns here[^2].

Some of my customizations include bash aliases for my most used git commands. `ga` is
short for `git add`, `gap` is short for `git add -p`, etc. I also like to have a
colorized `cat` and `less` available to me using [Pygments](http://pygments.org/).

Today I added something I've wanted for a long time: a `cd` that works relative to
the directory I do most of my development work in. Now I can run `cdx subdir_of_x`
and it will take me to `~/x/subdir_of_x`.

What follows is a primer on bash autocompletion and a tiny bit of bash programming.

## The Function

In and of itself, this a very easy function[^1] to write. In your `~/.bashrc`:

```
function cdx {
    cd "$HOME/x/$1"
}
```

I was thrilled when I got this working until I started testing it...

```
cdx my_code  <TAB>  _base
```

No autocomplete, just big gaping tabs in the middle of my command. What's
an enterprising developer[^4] to do? Spend the morning figuring it out,
of course.

## The Code

First, the good stuff. All together, when placed in your `~/.bashrc` and `source`ed,
the following works for hypothetical directory `x` in your home directory using `cdx`:

```
function cdx {
    cd "$HOME/x/$1"
}
function _cdx {
    local cur opts

    opts="$(ls -1 ~/x)"
    cur="${COMP_WORDS[COMP_CWORD]}"

    COMPREPLY=( $(compgen -W "${opts}" -- ${cur}) )
    return 0
}
complete -F _cdx cdx
```

Insert this in `~/.bashrc` replace all instances of "x" with a directory from your $HOME
directory, and call `source ~/.bashrc`. You may want to rename `cdx` with a more intuitive
name (for Apsis code, for example, I'd use `cda` and `_cda`).

## The Explanation

Now to break the `_cdx` function down. When it gets obvious feel free to skip to the end, I've
attempted to order this from most specific to broadest bash knowledge. (In order of *my* current
knowledge of bash). I've left the most basic stuff (like explaining `ls`) out.

 1. `complete -F _cdx cdx` is how you let bash know to attempt an autocomplete. In English it's:

    > When I run the cdx command please use the function \_cdx to autocomplete the command.

 2. `compgen -W "${opts}" -- ${cur}` is the function that searches an array of possibilities (`-W`)
    for the text after `--`. It's pretty rigid: no fuzzy searching, no autocorrecting. It just returns
    "things from the array that start with what you typed." You are free to replace it with
    whatever you want as long as it too returns an array (space separated string) of the options.
    In English:

    > Please give me all the words in the string 'opts' that start with what's in 'cur'.

 3. `COMPREPLY` is basically the return value of this function. Whatever array you return here will be
    presented to you on the command line as options for autocompletion. In English:

    > Here's what I want to pick from when autocompleting with the current inputs.

 4. `cur="${COMP_WORDS[COMP_CWORD]}"` is setting `cur` to the last word on the command line. `COMP_WORDS`
    and `COMP_CWORD` are the inputs to this function. (You can actually make them real bash function
    parameters if you want to, but they're already acceptably named). They are special bash variables
    that are only available in completion functions. `COMP_WORDS` is the array of strings currently
    entered on the command line. `COMP_CWORDS` is the current length of the `COMP_WORDS` array. In English:

    > Set the variable 'cur' to the last word on the command line.

 5. `opts="$(ls -1 ~/x)"` is where we set the available options by creating an array from the output of
    `ls -1 ~/x`. This gets used in the `compgen` command. In English:

    > I want to use the results of `ls -1 ~/x` as the list of potential options to autocomplete from.

 6. `local cur opts` is a declaration of the cur and opts variables. By using `local` we avoid cluttering
    the global variable namespace. In English:

    > I'm going to use the cur and opts variables. You can forget them when this function ends.

 7. `return 0` quits the function and sets the bash exit code. `0` is success, all other values are failures.
    This is useful in other bash scripts when you want to use it with `&&` `||`. Here it simply informs bash
    that the completion script was successful. In English:

    > IT WORKED! Show the user the values in "COMPREPLY"!

## Improvements

This is a great start, and super useful as is, but there is more that could be done:

 1. Going deeper: it'd be nice if I could keep autocompleting deeper into the directory, so `cdx ydir/zdi`
    could autocomplete to `~/x/ydir/zdir`. This would involve making the `opts=` line more intelligent.

 2. Fuzzy searching: I am great at typos. It'd be nice if I could replace `compgen` with something more
    intelligent that will ignore small typos.

 3. More generic: Being able to match `cda` or `cdb` to switch to subdirectories of `~/apsis` or `~/bread`
    would be nice. Writing a script to handle the unique cases when bash fires up would be easily doable.
    It would, however, require separate autocomplete functions for each named function becuase `complete`
    only accepts literal command names.

## Troubleshooting/Further Reading

If the above doesn't work it's possible your `progcomp` bash option isn't set. You can check with:

`echo $BASHOPTS | grep -q progcomp && echo "YES" || echo "NO"`

By default it's set, but if for whatever reason it's not, and you didn't knowingly do it yourself, you can set it
with `shopt -s progcomp`. That can be added to your `.bashrc`.

If that's not the problem, you will have to debug this the old fashioned way. Use `echo "$VARNAME"` to see the values
of variables. Finally you may want to read the docs.

I didn't initially suggest reading the docs because, unfortunately, the documentation for anything contained in the
bash manpages is terribly undiscoverable, difficult to search, and not always easy to read [^3]. All of the above
is in the bash manpages. Here's how you can read those docs:

 * `man bash` to open the documentation.
 * Press `/` to start searching.
 * Once you've entered your search term hit "Enter" and then use `n` and `N` to search forward and backwards
   (respectively) for the content you want.
 * You'll want the following search terms:
   * "Programming Completion" for an overview of the completion
   * "compgen" for the function that matches input and the search term.
   * "complete" for the function used to setup completion.

[^1]: Couldn't use an alias, because aliases can't interpolate arguments, they're strictly dumb text replacements , and they always include a space at the end.

[^2]: [xkcd is relevant here](https://xkcd.com/1205/)

[^3]: The bash manpages use tons of bolded references to dozens of other locations in a what is a huge doc with no links. This is becuase it's a manpage, and manpages, as useful as they are, are dinosaurs [from a prehistoric time before hypertext was invented](https://unix.stackexchange.com/a/18161/34182).

[^4]: One with a head cold, limited exposure to bash internals like autocomplete, and more important work to accomplish.