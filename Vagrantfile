# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "ingenerator/base-trusty64"

    config.vm.provider "virtualbox" do |virtualbox|
        virtualbox.memory = 2048
    end

    config.vm.network :forwarded_port, guest: 4000, host: 4000

    # Provisioners

    config.vm.provision "change ssh directory", type: "shell" do |s|
        s.inline = "echo 'cd /vagrant' >> /home/vagrant/.bashrc"
    end

    config.vm.provision "install bundler", type: "shell" do |s|
        s.inline = "cd /vagrant && gem install bundler"
    end

    config.vm.provision "bundle install", type: "shell", run: "always" do |s|
        s.inline = "cd /vagrant && sudo bundle install"
    end
end
