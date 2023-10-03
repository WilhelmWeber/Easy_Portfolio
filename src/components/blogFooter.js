export default function BlogFooter() {
    return (
        <footer className="text-gray-700 border-t border-gray-500 bottom-0 fixed inset-x-0 bg-white">
          <div className="flex container justify-center mx-auto p-5 flex-col md:flex-row items-center">
            <p className="mr-5">2023 @Yuto Takizawa</p>
            <a className="mr-5 hover:text-blue-500 duration-300" role="button" href="https://twitter.com/RuptureEpistem">
              Twitter
            </a>
            <a className="mr-5 hover:text-blue-500 duration-300" role="button" href="https://github.com/WilhelmWeber">
              GitHub
            </a>
          </div>
        </footer>
    );
}