import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const TestPost = () => {
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      // Llamada al api con el slug
      // getPostBySlug(slug)
    }
  }, [slug]);

  return <div>TestPost: {slug}</div>;
};
