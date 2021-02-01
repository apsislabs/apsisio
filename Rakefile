Encoding.default_external = Encoding::UTF_8

require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"

# Change your GitHub reponame
GIT_REPO = "apsislabs/apsisio"

namespace :site do
  desc "Generate blog files"
  task :generate do
    system "JEKYLL_ENV=production jekyll build --config _config.yml,_config-prod.yml"
  end

  desc "Clean up generated files"
  task :clean do
    system "jekyll clean"
  end

  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp

      pwd = Dir.pwd
      Dir.chdir tmp

      system "git init"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git remote add origin https://github.com/#{GIT_REPO}.git"
      system "git push origin master:refs/heads/gh-pages --force"

      Dir.chdir pwd
    end
  end
end
