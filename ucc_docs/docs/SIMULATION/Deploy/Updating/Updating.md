# Updating

> **INFO**  
> 🛈Upgrades/Updates are managed for you by the UCCD Team on Hosted UCCD instances. You do not need to apply updates yourself on a Hosted UCCD instance.

Updating UCCD is a fairly simple process. In most cases outside of legacy UCCD versions (e.g. 1.x), the only step needed is to update the running code by running git pull or updating the Docker image.

UCCD will typically take care of any migration steps required when upgrading versions. However before updating it is still recommended that you review the CHANGELOG to make sure that no breaking changes are being introduced and there are no manual steps required.

While it may in some situations be possible, it is not recommended to downgrade UCCD versions.

#  Hosted UCCD
Upgrades on Hosted UCCD instances are handled by the UCCD Team for you. You do not need to manually manage your UCCD version. Updates, releases, bugfixes, etc. are all managed for you.

#  Self Hosted UCCD
Below will contain notes and instructions on updating UCCD for self hosted UCCD instances. These instructions apply to both Open Source UCCD and UCCD Enterprise.

The instructions will differ depending on how UCCD was installed.

# Software Release Cycle
UCCD follows semantic versioning. What this means in practice is that a bugfix or minor release can typically be applied without any breaking changes or manual steps. Major releases will be where breaking changes or manual migrations will be shipped. However UCCD will always attempt to apply any migrations or changes required automatically.

When downloading or setting up UCCD it is important to know the following notes about how the UCCD code is managed.

Official releases are considered stable releases and are always the safest way to deploy UCCD.

Code in the master branch of UCCD is considered beta code. While it may be buggy or broken, every attempt is made to keep the master branch functioning properly.

Alpha code with the latest changes can be found in unique branches in UCCD until they are merged into master.

# Docker Image
UCCD automatically releases new tags for every new UCCD release. For example if you are running UCCD v3.4.0, there is a Docker image tagged *UCCD/UCCD:3.4.0* available on Dockerhub. To update a Docker image based installation of UCCD you simply need to pull the newer tag. In this example you can replace *UCCD/UCCD:3.4.0* with a newer version (e.g. *UCCD/UCCD:3.4.1*).

# Docker Compose
When using Docker Compose you should have a UCCD *docker-compose.yml* file. Within this file there is either a *build* field or an image field within the UCCD service. If there is an *image* field, you can follow the above instructions for Docker Image and update the tag. Then run *docker-compose pull* to pull the new image and 8docker-compose up8 to bring UCCD back online.

If there is a build field then you would need to update your codebase by running git pull or otherwise updating the code and then running docker-compose build followed by docker-compose up.

# Git
If you are running UCCD from source code that was managed by git, you can simply git pull within the UCCD repo and this will automatically pull the latest version of the repository.

# Manual Download
If you are running UCCD from a zip folder that was downloaded, you can download the latest version of that zip,