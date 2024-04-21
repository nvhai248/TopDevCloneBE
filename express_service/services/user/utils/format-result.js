const FormatCandidate = (candidate) => {
  try {
    const formattedCandidate = { ...candidate };

    formattedCandidate.skills = JSON.parse(candidate.skills);
    formattedCandidate.experience = JSON.parse(candidate.experience);
    formattedCandidate.education = JSON.parse(candidate.education);
    formattedCandidate.projects = JSON.parse(candidate.projects);
    formattedCandidate.extends = JSON.parse(candidate.extends);

    return formattedCandidate;
  } catch (error) {
    console.log(error.message);
    return candidate;
  }
};

module.exports = FormatCandidate;
