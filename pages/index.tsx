import axios from "axios";
import type {NextPage} from "next";
import {useFilters} from "../hooks/useFilters";
import {IOptions, IPost} from "../types/types";

interface HomeProps {
    posts: IPost[];
}

const Home: NextPage<HomeProps> = ({posts}) => {

    const options: IOptions = {
        sort: "ASC",
        filter: {name: "description", value: ""},
    };

    const {result} = useFilters(posts, options);

    return (
        <div className="container">
            <div>
                {result.map(({id, title, description, image}) => (
                    <div key={id}>
                        <h2>
                            {id}. {title}
                        </h2>
                        <div><em>{description}</em></div>
                        <img src={image} alt={image}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const {data} = await axios.get<IPost[]>("http://localhost:3000/api/posts");

    return {
        props: {posts: data}, // will be passed to the page component as props
    };
}

export default Home;
