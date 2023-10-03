import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";

const data = [
  {
    title:"JavaScript/Typescript(1年ほど)",
    description:"フロントは生jsで書く方が好きです",
    src:"/js_ts_logo.png",
  },
  {
    title:"HTML/CSS(1年ほど)",
    description:"Tailwindに頼りがちな面は否めません",
    src:"/html_css-logo.png",
  },
  {
    title:"React/Next(1年未満)",
    description:"useStateを多用して無限レンダリングを起こすのが得意です",
    src:"/react_logo.png",
  },
  {
    title:"express.js(1年未満)",
    description:"最小限の機能で収まっててイイね",
    src:"/Expressjs.png",
  },
  {
    title:"Firebase(1年未満)",
    description:"これに甘えてバックエンド修行を放棄してはならない、、、",
    src:"/firebase_logo.png",
  },
  {
    title:"mongoDB(1年未満)",
    description:"NoSQLであることよりもatlasの無料枠が充実しているところがよい",
    src:"/mongo_db_logo.png",
  },
  {
    title:"Render(1年未満)",
    description:"制作物のデプロイに使用。クレジットカードなしで使えるのはありがたい、、、",
    src:"/render-render.png",
  },
];

function Profile() {
  return(
    <div className="ml-4">
      <h1 className="mt-4 mb-4 text-3xl font-semibold underline">Profile</h1>
      <div>
        <p>
          滝澤悠人と申します。
        </p>
        <p>
          一橋大学大学院で科学史を専攻。デジタル人文学に大きな興味があります。
        </p>
      </div>
    </div>
  );
}

function AboutThisSite() {
  return(
    <div className="mt-10 ml-4">
    <h1 className="mt-4 mb-4 text-3xl font-semibold underline">About This Site</h1>
    <div>
      <p>
        作ったWebアプリ、デジタル人文学や科学史関連のことを投稿していく(つもりです、、、)
      </p>
    </div>
  </div>
  );
}

function SkillCards({title, description, src}) {
  return(
    <div className="bg-white px-5 pt-5 pb-5 rounded-lg">
      <Image
        src={src}
        alt=""
        height={150}
        width={200}
        className="object-cover mb-5"
      />
      <h2 className="text-xl mb-3">{ title }</h2>
      <p className="text-xs">
        { description }
      </p>
    </div>
  );
}

function Skills() {
  return(
  <div className="mt-10 ml-4">
    <h1 className="mt-4 mb-4 text-3xl font-semibold underline">Skills</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-rows-max	gap-6 m-10">
      {data.map((value) => (
        <SkillCards 
          key={value.title}
          title={value.title} 
          description={value.description} 
          src={value.src}
        />
      ))}
    </div>
  </div>   
  );
}
 
export default function Home() {
  return (
    <div className="Home">
      <Header/>
      <Profile />
      <AboutThisSite />
      <Skills />
      <Footer />
    </div>
  )
}