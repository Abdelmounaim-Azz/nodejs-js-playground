const Google_DB = [
  "dockerk8s.com",
  "docker.com",
  "k8s.com",
  "devops.com",
  "k8s.org",
  "containers.com",
  "cluster.com",
  "microservices.com",
  "PWA.com",
];

const Search = (inputSearch, db) => {
  const matches = db.filter((website) => {
    return website.includes(inputSearch);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// search('k8s',Google_DB )
