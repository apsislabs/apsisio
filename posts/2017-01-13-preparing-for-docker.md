---
author: eric
layout: post
title: Preparing for Docker
image: '/img/posts/shipping-containers.jpg'
credit: olafpictures
date: 2017-01-13
---

It is a dark winter day at your desk in Maine and your boss gets back from sunny California and says "Docker is the best, we need to start using this for everything!". You internally groan because you just got all the infrastructure working correctly, but you start frantically searching how to setup and run Docker and jump right into figuring out how to apply it to your current projects because it needs to be done yesterday.

Before looking into how to setup Docker, let's fill in the basics of what you always wanted to know about Docker but didn't know you needed to ask.

## What is Docker?

Docker is a tool for developing applications in a virtualized operating system, called a container, which can run on any hardware, guaranteeing that the software runs the same in any environment.

Docker containers allow you to install anything that would normally be installed on a server to run your application into a portable file that can be moved from environment to environment without any need to reinstall the dependencies.

Docker is similar to Vagrant and VMWare; all three of which allow you to setup virtual infrastructure on top of physical hardware, but each one has its own degree of control. Docker containers operate on the principle that each container runs one process vs running multiple services on one VM.

What about Docker Compose? Docker Compose is tool set provided by Docker for configuring, networking and deploying multiple containers for more complex application configurations.

## Why Docker?
There are many reasons for choosing Docker:

* Ease of Creation - Image is defined in one file, with simple run commands
* Speed - Much faster than a full VM for startup ( after the initial download )
* Size - Although the images can inflate really quickly they are generally smaller than full VMs
* Consistency - The image used locally can be the same as production
* Reproducibility - Container configuration is a file which can be stored in version control

Docker is very well designed for local development as it focuses on running one application in its own environment. This helps separate processes from different applications without having to setup multiple VMs.

For all the various projects you may interact with, most likely there is a Docker image already preconfigured with the basic software for running your particular language ( Rails, Python, etc ) or software ( Nginx, Memcached, MySQL, etc. ) Just take a look on Docker Hub and look for the official tag for any library.


## Production Concerns
As you think about moving your Docker application into production there becomes a whole host of challenges and problems you will need to solve.

* Container Hosting - Hosted vs cloud repositories like Docker Hub or Quay.io
* Deployment Strategies - Tools like Rancher or Kubernetes
* Garbage Collection - Old images fill up disk on the host
* Database Management - Don't run in a container!
* Logging - Shared mounted volume to write log to disk vs external logging service
* Monitoring - Performance, uptime, resource utilization, etc.

Cloud 66 has a great article detailing these items before using Docker in production: http://blog.cloud66.com/9-crtitical-decisions-needed-to-run-docker-in-production/

## Tips and Tricks
### Planning the Architecture
Deciding whether Nginx in front of the Rails application or Memcached in front of the DB is the right choice for the system will help determine how to setup a Docker network. Docker Compose allows setup for networking between multiple containers, any external dependencies, volumes, and environmental variables the containers may need.

### Image Size
Docker containers can grow in size very quickly, and minimizing the size helps portability. Every command run in the DockerFile creates its own container as a snapshot which helps reuse across Docker builds but increases the size significantly. To minimize the container, start by finding the minimal image that will support the software and only install the minimal software needed. The next step is to condense all the run commands into the fewest number needed.

For example when installing dependencies a typical install might look like:

```
RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get update -qq && apt-get install -y nodejs
RUN apt-get update -qq && apt-get install -y python2.7
```

This creates three containers. A more optimized version that only creates one container is:

```
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    nodejs \
    python2.7
```

Codeship has a great article detailing some of the optimizations for the Dockerfile: https://blog.codeship.com/reduce-docker-image-size/


### Cleanup
Monitoring the host's disk space where Docker containers are deployed is crucial, especially in development environments where several versions of a Docker container may be pushed a day. The easy way to clean up is to setup a cron to run:

```
sudo docker images -q | xargs sudo docker rmi
```

Or you can run a full container to manage garbage collection for you: https://github.com/spotify/docker-gc


## Wrap up

Docker is a great technology for development environments and simpler applications, but consider carefully whether it is a good fit for your particular application's needs, especially if there is already a technology stack in place.

Here at Apsis we use the technology that is right for the application and are constantly looking out for changes in best practices and supporting technologies, so I'm sure you'll hear more about our exploration with Docker in future posts.

*"Wait, what do you mean we aren't going to use Docker anymore? I just got everything converted... Noaaahhh!!!"*

## Resources

For everything you can do with Docker and Docker Compose it is good to check out the docs.

https://docs.docker.com

For help finding the perfect image, Docker Hub has your back.

https://hub.docker.com/

For index of everything Docker checkout Awesome Docker:

https://veggiemonk.github.io/awesome-docker/
