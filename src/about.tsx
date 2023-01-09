import { Table } from "antd";
import React from "react";
import axios from "axios";

async function fetchUserRepos() {
  try {
    const user = await axios.get("https://api.github.com/users/lucasptcastro");
    const repos = await axios.get(user.data.repos_url);
    console.log(repos.data);
  } catch (error) {
    console.log(error);
  }
}

const About: React.FC = () => {
  fetchUserRepos();
  return (
    <div className="bg-red-400">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Table></Table>
    </div>
  );
};

export default About;
