const githubUrl = import.meta.env.VITE_GITHUB_URL;
const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

export const getUsers = async () => {
  const res = await fetch(`${githubUrl}/users`, {
    headers: {
      Authorization: `token ${githubToken}`,
    },
  });
  return res.json();
};
