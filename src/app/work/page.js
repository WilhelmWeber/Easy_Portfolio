import Image from "next/image";
import Link from "next/link";
import { getWorks, getDetailWorks } from "../../libs/microCMSHandler";
import Header from "../../components/header";
import BlogFooter from "../../components/blogFooter";

function WorkCards({title, use, src, contentId}) {
    return(
      <div className="bg-white px-5 pt-5 pb-5 rounded-lg">
        <Image
          src={src}
          alt=""
          height={150}
          width={200}
          className="object-cover mb-5"
        />
        <Link href={`/work/${contentId}`} className="text-xl mb-3 hover:text-blue-500 duration-300">{ title }</Link>
        <p className="text-xs">
          { use }
        </p>
      </div>
    );
}

async function Works() {
    const { contents } = await getWorks();

    return(
    <div className="mt-10 ml-4">
      <h1 className="mt-4 mb-4 text-3xl font-semibold underline">Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-6 m-10">
        {contents.map((value) => (
          <WorkCards 
            key={value.title}
            title={value.title} 
            use={value.use} 
            src={value.image.url}
            contentId={value.id}
          />
        ))}
      </div>
    </div>   
    );
}

export default function Home() {
    return (
      <div className="Home">
        <Header />
        <Works />
        <BlogFooter />
      </div>
    )
};