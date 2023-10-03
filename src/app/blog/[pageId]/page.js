import parse from "html-react-parser";
import { getList, getDetail } from "../../../libs/microCMSHandler";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export async function generateStaticParams() {
    const { contents } = await getList();

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
    const post = await getDetail(pageId);
    
    if (!post) {
        return <div>Not Found</div>
    }

    return (
        <div>
            <Header />
            <main className="w-[960px] mx-auto">
                <h1 className="leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2 mb-[20px]">{ post.title }</h1>
                <p className="mb-[40px]">{ post.createdAt }</p>
                <div className="body">{ parse(post.body) }</div>
            </main>
            <Footer />
        </div>
    );
}