require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "himan1009",
  id: 99878857,
  node_id: "U_kgDOBfQHyQ",
  avatar_url: "https://avatars.githubusercontent.com/u/99878857?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/himan1009",
  html_url: "https://github.com/himan1009",
  followers_url: "https://api.github.com/users/himan1009/followers",
  following_url:
    "https://api.github.com/users/himan1009/following{/other_user}",
  gists_url: "https://api.github.com/users/himan1009/gists{/gist_id}",
  starred_url: "https://api.github.com/users/himan1009/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/himan1009/subscriptions",
  organizations_url: "https://api.github.com/users/himan1009/orgs",
  repos_url: "https://api.github.com/users/himan1009/repos",
  events_url: "https://api.github.com/users/himan1009/events{/privacy}",
  received_events_url: "https://api.github.com/users/himan1009/received_events",
  type: "User",
  site_admin: false,
  name: "Himanshu kumar",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 60,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-02-17T11:08:46Z",
  updated_at: "2024-04-04T02:46:15Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("himan.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>PLEASE LOGIN AT HERE</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>SUBSCRIBE HIMAN</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
