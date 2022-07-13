import {useMemo} from 'react';

export const useSortedPost = (posts,sort) => {

    const sortedPosts = useMemo(() => {

        if(sort){
          return [...posts].sort((a,b)=> a[sort].localeCompare(b[sort]));
        }
        return posts;
    
      },[sort,posts])
    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts,sort);

    const sortedAndSearchedPosts = useMemo(() => {

        return sortedPosts.filter(post =>post.body.toLowerCase().includes(query.toLowerCase()))
    
      }, [query,sortedPosts])

    return sortedAndSearchedPosts;
}