const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = ({actions, createNodeId, createContentDigest}, configOptions) => {
  const {createNode} = actions;
  console.log(configOptions);

  delete configOptions.plugins;

  const processNodeData = data => {
    const nodeId = createNodeId(`unsplash-${data.id}`)
    const nodeDigest = createContentDigest(data)
    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `UnSplashImages`,
        content: JSON.stringify(data),
        contentDigest: nodeDigest,
      },
    })
    return nodeData
  };

  const apiParas =queryString.stringify(configOptions);
  const apiURL = `https://api.unsplash.com/photos/?${apiParas}`;
  console.log(apiURL);
  return (
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        data.forEach(datum => {
          const nodeData = processNodeData(datum);
          createNode(nodeData);
        })

      })
  );
}
