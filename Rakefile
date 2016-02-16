require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"

# Change your GitHub reponame
GIT_REPO = "apsislabs/apsisio"
GIT_BASEURL = "/apsisio"

namespace :site do
  desc "Generate blog files"
  task :generate do
    system "JEKYLL_ENV=production jekyll build --baseurl='#{GIT_BASEURL}'"
  end

  desc "Clean up generated files"
  task :clean do
    system "rm -rf _site"
  end

  desc "Generate and publish blog to gh-pages"
  task :publish => [:clean, :generate] do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp

      pwd = Dir.pwd
      Dir.chdir tmp

      system "git init"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git remote add origin git@github.com:#{GIT_REPO}.git"
      system "git push origin master:refs/heads/gh-pages --force"

      Dir.chdir pwd
    end
  end
end
