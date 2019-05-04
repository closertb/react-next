// This is the Link API

const Post = () => {
  console.log('props', document.location, document.location.href);
  const query = document.location.search.split('=');
  return (
    <p>{decodeURI(query[1])}</p>
  );
}

export default Post