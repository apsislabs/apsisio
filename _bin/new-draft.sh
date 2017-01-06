echo "Enter post title: "
read title
vagrant ssh -c "cd /vagrant && jekyll draft '$title'"
