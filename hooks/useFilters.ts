import { useMemo, useRef } from 'react';
import {IOptions, IPost} from "../types/types";

export function useFilters(posts: IPost[], options: IOptions) {
    const filteredPosts = useRef<IPost[]>(posts);

        filteredPosts.current = useMemo(() => {
            if (!options.filter.value) return posts;
            return posts.filter((post) => post.description.toLowerCase().includes(options.filter.value.toLowerCase()))
        },[[options.filter.name, options.filter.value, filteredPosts]])


    useMemo(() => {
        if(options.sort === 'ASC')
            filteredPosts.current = [...filteredPosts.current].sort((a, b) => a.id - b.id);
        else
            filteredPosts.current = [...filteredPosts.current].sort((a, b) => b.id - a.id);
    }, [options.sort, filteredPosts]);

    return { result: filteredPosts.current };
}
