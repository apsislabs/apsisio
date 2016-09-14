echo "Enter post title: "
read title
vagrant ssh -c "cd /vagrant/apsisio && jekyll draft '$title'"
