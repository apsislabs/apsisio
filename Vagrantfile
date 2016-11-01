# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "ingenerator/base-trusty64"

    config.vm.provider "virtualbox" do |virtualbox|
        virtualbox.memory = 2048
    end

    config.vm.network :forwarded_port, guest: 4000, host: 4000
    config.vm.network :forwarded_port, guest: 80, host: 4444, auto_correct: true

    # Provisioners

    config.vm.provision "fix-no-tty", type: "shell", run: "always" do |s|
        s.privileged = false
        s.inline = "sudo sed -i '/tty/!s/mesg n/tty -s \\&\\& mesg n/' /root/.profile"
    end

    config.vm.provision "change ssh directory", type: "shell" do |s|
        s.inline = "echo 'cd /vagrant' >> /home/vagrant/.bashrc"
    end

    config.vm.provision "install bundler", type: "shell" do |s|
        s.inline = "cd /vagrant && gem install bundler"
    end

    config.vm.provision "bundle install", type: "shell", run: "always" do |s|
        s.inline = "cd /vagrant && sudo bundle install"
    end

    config.vm.provision "serve files", type: "shell", run: "always" do |s|
        s.inline = "cd /vagrant; nohup jekyll serve --host=0.0.0.0 >/vagrant/jekyll.log 2>&1 &"
    end
end
