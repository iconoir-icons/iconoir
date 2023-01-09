import { Octokit } from '@octokit/rest';

export const octokit = new Octokit({
  ...(process.env.GITHUB_TOKEN && { auth: process.env.GITHUB_TOKEN }),
});
