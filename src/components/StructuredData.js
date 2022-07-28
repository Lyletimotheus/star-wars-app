const StructuredData = () => {
  return {
    '@context': 'http://schema.org',
    '@type': 'Entertainment',
    name: 'Classical Movie Collection - Star Wars',
    description: 'A collection of classical movie for your viewing.',
    image: `{require("../images/star-wars-logo.svg").default}`,
    datePublished: new Date('2022-03-30T00:00:01.340Z').toISOString(),
  };
};

export default StructuredData;
