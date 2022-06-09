## Welcome to UCBA!

This site is designed for members of the Utah County Beekeepers Association, and anyone looking for information about bees. Visit the site [by clicking here](https://www.utahcountybeekeepers.com/).

It was created by a small team of designers and developers who graduated from V School in Salt Lake City, Utah. It was built using Gatsby JS(React).

If you're not sure where to start, may we suggest the Fun Facts page (in the Education section)? 

We've enjoyed this chance to learn more about React, agile teamwork, and honeybees! 

We're glad you're here! Enjoy UCBA's new website!

### Maintenence 
This site is built using Gatsby JS and hosetd through Netlify. Please contact the administrator for the Netlify account details.

#### Fork Code to Make Changes
To fork the code, click on "Fork" in the top right corner. This will add a new copy to your Github account. Navigate to the repository. Click on the arrow next to the green "Code" button and copy either the SSH or HTTPS address. Run the following command (replacing the address after "git clone" with the address you copied):

You must have Node.js installed to tun the code locally.

```
git clone git@github.com:GITHUB-USERNAME/REPONAME.git
cd ucba-site
npm install
npm start
```

To save any changes made locally, you can create a pull request to the repository. To do so, follow the steps below. 

Type `git remote -v` and press Enter. You will see the current configured remote repository for your fork.

```
$ git remote -v
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
```

Then run the following command: 
```
git remote add upstream https://github.com/V-School-Module-7/ucba-site
```
To verify the new upstream repository, type `git remote -v`. You should see the URL for the fork as `origin` and the URL for the original repository as `upstream`.

#### Create a pull request from forked repository
Please follow instructions from here: [Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)


### Transfer Github ownership
If you are the owner of this site, please contact maira.soomro@vschool.io or laney@vschool.io to request a repository transfer. You must have a Github account.