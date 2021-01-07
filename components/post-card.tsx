import { FunctionComponent } from "react";
import TagList from "./TagList";
type PostCardProps = {
    tags: string[];
    title: string;
    description: string;
    coverUrl: string;
    date: string;
    id: string
};

const PostCard: FunctionComponent<PostCardProps> = (props) => {
    const { tags, title, description, coverUrl, date, id } = props;

    return (
        <div className="relative">
            <div className="w-full h-full">
                <img src={coverUrl} alt="" className="object-cover h-48 w-full" />
                <div className="p-4 bg-white">
                    <TagList tags={tags}></TagList>
                    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
            <a href={`posts/${id}`} className="absolute inset-0"></a>
        </div>
    );
};

export default PostCard;
