import parse from "html-react-parser";
import { getWorks, getDetailWorks } from "../../../libs/microCMSHandler";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export async function generateStaticParams() {
    const { contents } = await getWorks();

    const paths = contents.map((content) => {
        return {
            postId: content.id
        };
    });

    return [...paths];
};

export default async function BlogDetail({
    params: { pageId }
}) {
    const post = await getDetailWorks(pageId);
    
    if (!post) {
        return <div>Not Found</div>
    }

    return (
        <div>
            <Header />
            <main className="w-[960px] mx-auto">
                <h1 className="leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2 mb-[20px]">{post.title}</h1>
                <div className="body">{ parse(post.body) }</div>
            </main>
            <Footer />
        </div>
    );
}