# Updating

> ℹ️ **INFO**
> 
> Upgrades/Updates are managed for you by the UCC Cyber Range Team on Hosted UCC Cyber Range instances. You do not need to apply updates yourself on a Hosted UCC Cyber Range instance.

Updating UCC Cyber Range is a fairly simple process. In most cases outside of legacy UCC Cyber Range versions (e.g. 1.x), the only step needed is to update the running code by running git pull or updating the Docker image.

UCC Cyber Range will typically take care of any migration steps required when upgrading versions. However before updating it is still recommended that you review the CHANGELOG to make sure that no breaking changes are being introduced and there are no manual steps required.

While it may in some situations be possible, it is not recommended to downgrade UCC Cyber Range versions.

# Hosted UCC Cyber Range
Upgrades on Hosted UCC Cyber Range instances are handled by the UCC Cyber Range Team for you. You do not need to manually manage your UCC Cyber Range version. Updates, releases, bugfixes, etc. are all managed for you.

# Self Hosted UCC Cyber Range
Below will contain notes and instructions on updating UCC Cyber Range for self hosted UCC Cyber Range instances. These instructions apply to both Open Source UCC Cyber Range and UCC Cyber Range Enterprise.

The instructions will differ depending on how UCC Cyber Range was installed.

# Software Release Cycle
UCC Cyber Range follows semantic versioning. What this means in practice is that a bugfix or minor release can typically be applied without any breaking changes or manual steps. Major releases will be where breaking changes or manual migrations will be shipped. However UCC Cyber Range will always attempt to apply any migrations or changes required automatically.

When downloading or setting up UCC Cyber Range it is important to know the following notes about how the UCC Cyber Range code is managed:

- Official releases are considered stable releases and are always the safest way to deploy UCC Cyber Range.
- Code in the master branch of UCC Cyber Range is considered beta code. While it may be buggy or broken, every attempt is made to keep the master branch functioning properly.
- Alpha code with the latest changes can be found in unique branches in UCC Cyber Range until they are merged into master.

# Docker Image
UCC Cyber Range automatically releases new tags for every new UCC Cyber Range release. For example if you are running UCC Cyber Range v3.4.0, there is a Docker image tagged `UCC Cyber Range/UCC Cyber Range:3.4.0` available on Dockerhub. To update a Docker image based installation of UCC Cyber Range you simply need to pull the newer tag. In this example you can replace `UCC Cyber Range/UCC Cyber Range:3.4.0` with a newer version (e.g. `UCC Cyber Range/UCC Cyber Range:3.4.1`).

# Docker Compose
When using Docker Compose you should have a UCC Cyber Range `docker-compose.yml` file. Within this file there is either a `build` field or an image field within the UCC Cyber Range service. If there is an `image` field, you can follow the above instructions for Docker Image and update the tag. Then run `docker-compose pull` to pull the new image and `docker-compose up` to bring UCC Cyber Range back online.

If there is a build field then you would need to update your codebase by running `git pull` or otherwise updating the code and then running `docker-compose build` followed by `docker-compose up`.

# Git
If you are running UCC Cyber Range from source code that was managed by git, you can simply `git pull` within the UCC Cyber Range repo and this will automatically pull the latest version of the repository.

# Manual Download
If you are running UCC Cyber Range from a zip folder that was downloaded, you can download the latest version of that zip.