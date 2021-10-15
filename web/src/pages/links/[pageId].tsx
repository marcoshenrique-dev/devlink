import { useRouter } from 'next/router';

function Links() {

  const { query } = useRouter();

  return(
    <h2>{query.pageId}</h2>
  );
}

export default Links;