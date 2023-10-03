import Link from "next/link";
import { getList } from "../../libs/microCMSHandler";
import BlogFooter from "../../components/blogFooter";
import Header from "../../components/header";

export default async function Blog() {
    const { contents } = await getList();

    if (!contents || contents.length===0) {
        return <h1>No Contents</h1>;
    }

    return(
        <div className="blog">
          <Header />
          <section className="text-gray-600">
            <div className="container px-5 py-2 mx-auto">
                <div className="my-2 divide-y-2 divide-gray-100">
                    {contents.map((content) => (
                        <div key={content.id} className="py-8 flex flex-wrap md:flex-nowrap items-center">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold text-indigo-400">{ content.category }</span>
                                <span className="mt-1 text-gray-400 text-sm">{ content.createdAt }</span>
                            </div>
                            <div className="md:flex-grow">
                                <Link className="text-2xl font-bold hover:text-blue-500 duration-300" href={`/blog/${content.id}`}>{ content.title }</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </section>
          <BlogFooter />
        </div>
    );
}